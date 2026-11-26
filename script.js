// Image filename safety net: if images/foo.jpg is missing, try .png, .jpeg, .webp
// (and the reverse), so it works whichever format your exported files use.
document.addEventListener('error', e => {
  const img = e.target;
  if (!(img instanceof HTMLImageElement)) return;
  const m = (img.getAttribute('src') || '').match(/^(.*)\.(jpg|jpeg|png|webp)$/i);
  if (!m) return;
  const order = ['jpg', 'png', 'jpeg', 'webp', 'JPG', 'PNG'];
  const tried = (img.dataset.tried || m[2]).split(',');
  const next = order.find(x => !tried.includes(x));
  if (!next) return;
  img.dataset.tried = [...tried, next].join(',');
  img.src = `${m[1]}.${next}`;
}, true);

// Horizontal-only scrolling with parallax. The page itself never scrolls:
// wheel, trackpad, keyboard and touch input move a virtual position instead.
const stage = document.querySelector('.stage');
const track = document.querySelector('.track');
const navLinks = document.querySelectorAll('.nav a');
const mobile = window.matchMedia('(max-width: 800px)');
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

const EASE = 0.1;   // lower = floatier, higher = snappier
let items = [];
const aboutArt = document.querySelector('.about-art');   // flower + portrait: drifts in, then settles
let artSpeed = 1;
let maxShift = 0;
let aboutStart = 0;       // scroll position where the green About page fills the screen
let projectsStart = 0;    // scroll position the Projects button goes to (0 = the very start)
let current = 0;
let target = 0;
let running = false;

const clamp = v => Math.min(Math.max(v, 0), maxShift);

function measure() {
  if (mobile.matches) {
    track.style.transform = '';
    track.style.width = '';
    items.forEach(i => (i.el.style.transform = ''));
    aboutArt.style.transform = '';
    items = [];
    maxShift = current = target = 0;
    return;
  }
  const stageW = stage.clientWidth;
  // The About page is the last thing on the track: end the scroll exactly where it fills the screen
  const about = document.getElementById('about');
  track.style.width = (about.offsetLeft + about.offsetWidth) + 'px';
  maxShift = Math.max(0, track.offsetWidth - stageW);
  aboutStart = maxShift;
  projectsStart = 0;   // change this number (in px) if Projects should land somewhere other than the start
  artSpeed = reduceMotion.matches ? 1 : parseFloat(aboutArt.dataset.speed) || 1;
  items = [...track.querySelectorAll('.item[data-speed]')].map(el => ({
    el,
    speed: reduceMotion.matches ? 1 : parseFloat(el.dataset.speed) || 1,
    // position at which this item sits centred (no parallax offset there)
    anchor: el.offsetLeft + el.offsetWidth / 2 - stageW / 2,
  }));
  target = clamp(target);
  current = clamp(current);
  render();
}

function render() {
  track.style.transform = `translate3d(${-current}px,0,0)`;
  for (const { el, speed, anchor } of items) {
    el.style.transform = `translate3d(${-(current - anchor) * (speed - 1)}px,0,0)`;
  }
  // About art: no offset once the green page has landed, so it ends exactly where it's placed
  aboutArt.style.transform = `translate3d(${(aboutStart - current) * (artSpeed - 1)}px,0,0)`;
  stage.classList.toggle('scrolled', current > 40);
}

function tick() {
  current += (target - current) * (reduceMotion.matches ? 1 : EASE);
  if (Math.abs(target - current) < 0.1) current = target;
  render();
  running = current !== target;
  if (running) requestAnimationFrame(tick);
}

function moveTo(value) {
  target = clamp(value);
  if (!running) { running = true; requestAnimationFrame(tick); }
}

// Wheel / trackpad (vertical or horizontal gestures both move sideways)
window.addEventListener('wheel', e => {
  if (mobile.matches || isOpen()) return;
  e.preventDefault();
  let delta = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;
  if (e.deltaMode === 1) delta *= 16;
  if (e.deltaMode === 2) delta *= stage.clientWidth;
  moveTo(target + delta);
}, { passive: false });

// Keyboard
window.addEventListener('keydown', e => {
  if (e.key === 'Escape' && isOpen()) { closeProject(); return; }
  if (mobile.matches || isOpen() || e.metaKey || e.ctrlKey || e.altKey) return;
  if (e.target.closest('input, textarea, select, [contenteditable]')) return;
  const page = stage.clientWidth * 0.6;
  const onControl = e.target.closest('a, button');
  switch (e.key) {
    case 'ArrowRight': case 'ArrowDown': moveTo(target + 120); break;
    case 'ArrowLeft': case 'ArrowUp': moveTo(target - 120); break;
    case 'PageDown': moveTo(target + page); break;
    case 'PageUp': moveTo(target - page); break;
    case ' ': if (onControl) return; moveTo(target + (e.shiftKey ? -page : page)); break;
    case 'Home': moveTo(0); break;
    case 'End': moveTo(maxShift); break;
    default: return;
  }
  e.preventDefault();
});

// Touch (tablets / touch laptops in the wide layout)
let touchX = 0, touchY = 0;
stage.addEventListener('touchstart', e => {
  touchX = e.touches[0].clientX;
  touchY = e.touches[0].clientY;
}, { passive: true });
stage.addEventListener('touchmove', e => {
  if (mobile.matches || isOpen()) return;
  const x = e.touches[0].clientX, y = e.touches[0].clientY;
  const dx = touchX - x, dy = touchY - y;
  touchX = x; touchY = y;
  moveTo(target + (Math.abs(dx) > Math.abs(dy) ? dx : dy) * 1.4);
}, { passive: true });

// ---------- Project window ----------
const view = document.getElementById('project-view');
const viewBody = document.getElementById('pv-body');
const viewGallery = document.getElementById('pv-gallery');
const viewInfoMobile = document.getElementById('pv-info-mobile');
const sideInfo = document.getElementById('project-info');
const closeBtn = document.getElementById('pv-close');
let lastFocus = null;

const isOpen = () => document.body.classList.contains('project-open');
const esc = s => String(s).replace(/[&<>"']/g, ch => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[ch]));

function infoHTML(p, meta) {
  const paras = (p.description || []).map(t => t.startsWith('# ') ? `<h3 class="pi-sub">${esc(t.slice(2))}</h3>` : `<p>${esc(t)}</p>`).join('');
  const rows = Object.entries(p.details || {}).map(([k, v]) => `<div><dt>${esc(k)}</dt><dd>${esc(v)}</dd></div>`).join('');
  return `<h2 class="pi-title">${esc(p.title)}</h2>`
    + (p.name ? `<p class="pi-name">${esc(p.name)}</p>` : '')
    + `<div class="pi-text">${paras}</div>`
    + (rows ? `<dl class="pi-details">${rows}</dl>` : '');
}

function openProject(id, meta, trigger) {
  const p = PROJECTS[id];
  if (!p) return;
  lastFocus = trigger;
  const info = infoHTML(p, meta);
  sideInfo.innerHTML = info;          // the sidebar becomes the description bar
  viewInfoMobile.innerHTML = info;    // same text shown inside the window on small screens
  viewGallery.innerHTML = (p.images || []).map((img, i) => {
    // Placement on a 12-column grid: col = start column, span = width in columns,
    // row = row number (same row = side by side), rowspan = rows it stretches over,
    // offset = extra space above (rem). No src = grey placeholder; ratio = width / height.
    const col = Number(img.col) || 1, span = Number(img.span) || 12;
    const row = Number(img.row) || i + 1, rowspan = Number(img.rowspan) || 1;
    const offset = Number(img.offset) || 0;
    const media = img.src
      ? `<img src="${esc(img.src)}" alt="${esc(img.alt || '')}" loading="lazy">`
      : `<div class="pv-ph" style="aspect-ratio:${Number(img.ratio) || 1.5}" role="img" aria-label="${esc(img.alt || 'Image placeholder')}"></div>`;
    return `<figure style="grid-column:${col} / span ${span}; grid-row:${row} / span ${rowspan}; margin-top:${offset}rem">`
      + media
      + (img.caption ? `<figcaption>${esc(img.caption)}</figcaption>` : '')
      + `</figure>`;
  }).join('');
  view.setAttribute('aria-label', p.title);
  viewBody.scrollTop = 0;
  document.body.classList.add('project-open');
  view.classList.add('open');
  closeBtn.focus({ preventScroll: true });
}

function closeProject() {
  if (!isOpen()) return;
  document.body.classList.remove('project-open');
  view.classList.remove('open');
  if (lastFocus) lastFocus.focus({ preventScroll: true });
}

// Clicking an image or its caption opens that project
track.addEventListener('click', e => {
  const item = e.target.closest('.item[data-project]');
  if (!item) return;
  const caption = item.querySelector('figcaption');
  openProject(item.dataset.project, caption ? caption.textContent : '', item.querySelector('.item-open'));
});
closeBtn.addEventListener('click', closeProject);

// Nav: Home = very start, Projects = projects, About = start of the green page (desktop); native anchors on small screens
navLinks.forEach(a =>
  a.addEventListener('click', e => {
    closeProject();
    if (mobile.matches) return;
    e.preventDefault();
    const places = { home: 0, projects: projectsStart, about: aboutStart };
    moveTo(places[a.dataset.target] ?? 0);
  })
);

window.addEventListener('resize', measure);
window.addEventListener('load', measure);
mobile.addEventListener('change', measure);
measure();