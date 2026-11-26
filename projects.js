// Project content. The key (e.g. "early-life") must match data-project in index.html.
// title = the line at the top of the sidebar (same as the home-page caption). name = optional project name under it.
//
// Every project has its own layout. Each entry in `images` is placed on a 12-column grid:
//   col     start column (1-12)            span    width in columns
//   row     row number (same row = side by side)     rowspan  rows it stretches over
//   offset  extra space above, in rem
//   src     image path. Leave it out to show a grey placeholder of the given ratio (width / height)
const PROJECTS = {
  "early-life": {
    title: "Publishing & Media (2026)",
    description: [
      "Inspired by David Carson's unconventional approach to editorial design, this project explored experimental typography, composition and visual communication. Moving away from traditional grids and structured layouts, I used fragmented letterforms, overlapping text and layered compositions to create a more intuitive and expressive visual language. Combining physical experimentation, scanning and digital manipulation, I developed a print publication alongside responsive layouts for desktop, tablet and mobile."
    ],
    details: { Deliverables: "Print publication and responsive digital layouts." },
    images: [
      { row: 1, col: 1, span: 12, src: "images/david-carson-1.jpg", alt: "Woman in a green corduroy jacket and black boots reclining in a red chair, with a laptop, phone and tablet showing the Design Jam website" },
      { row: 2, col: 1, span: 5, src: "images/david-carson-2.jpg", alt: "Magazine spread, pages 1 and 2: David Carson collage with the headline Intuition and Authenticity and the words early life" },
      { row: 3, col: 7, span: 5, src: "images/david-carson-3.jpg", alt: "Magazine spread, pages 3 and 4: collage with the quote If you don't know the rules you are not bound by them, and achievements" },
      { row: 4, col: 1, span: 5, src: "images/david-carson-4.jpg", alt: "Laptop on a diner table showing the Design Jam website, beside a tray of nuggets" },
      { row: 4, col: 7, span: 5, src: "images/david-carson-5.jpg", alt: "The magazine spread open on a clear acrylic chair" },
      { row: 5, col: 1, span: 5, offset: 8, src: "images/david-carson-6.jpg", alt: "Full-length Design Jam article page on desktop" },
      { row: 5, col: 8, span: 4, src: "images/david-carson-7.jpg", alt: "Full-length Design Jam article page on mobile" },
      { row: 6, col: 1, span: 11, src: "images/david-carson-8.jpg", alt: "Phone on tan leather showing the Design Jam article" }
    ]
  },
  "home-fields": {
    title: "Brand Identity & Packaging (2026)",
    description: [
      "Home Fields is a contemporary Australian rice brand exploring how thoughtful design can improve the everyday experience of an affordable household staple. The visual identity takes inspiration from the Riverina region, using the landscape contours as the basis for a distinctive graphic language. An earthy colour palette helps the brand stand apart from existing competitors, creating a recognisable identity that feels grounded, approachable and proudly Australian. The project brings together brand development and functional packaging design, with a focus on usability, accessibility and sustainability."
    ],
    details: { Deliverables: "Brand identity system, merchandising concepts, packaging design and print-ready artwork." },
    images: [
      { row: 1, col: 1, span: 12, src: "images/homefields-1.jpg", alt: "Home Fields rice box standing on a grey stone kitchen counter" },
      { row: 2, col: 1, span: 12, src: "images/homefields-2.jpg", alt: "Flat packaging design for the Home Fields rice box, showing the front, sides, back and pour spout" },
      { row: 3, col: 1, span: 6, src: "images/homefields-3.jpg", alt: "Home Fields rice box, front and side, in rust red with a topographic pattern and a window showing the rice" },
      { row: 4, col: 7, span: 6, src: "images/homefields-4.jpg", alt: "Home Fields rice box, back and side, with a map of the Riverina, nutrition facts and cooking instructions" },
      { row: 4, col: 1, span: 2, offset: 18, src: "images/homefields-5.jpg", alt: "Early pack concept in terracotta with a rice window and a cream logo" },
      { row: 4, col: 3, span: 2, offset: 18, src: "images/homefields-6.jpg", alt: "Pack concept in two-tone rust with a dripping contour edge" },
      { row: 5, col: 1, span: 2, src: "images/homefields-7.jpg", alt: "Pack concept in terracotta with a dark logo outlined in cream" },
      { row: 5, col: 6, span: 2, src: "images/homefields-8.jpg", alt: "Pack concept in tan with cream rice grains and dark pill shapes" },
      { row: 5, col: 11, span: 2, src: "images/homefields-9.jpg", alt: "Pack concept in pale blue with a topographic pattern" },
      { row: 5, col: 8, span: 2, src: "images/homefields-10.jpg", alt: "Pack concept in blue-grey with scattered rice grains and a dark pill logo" }
    ]
  },
  "bottle-label": {
    title: "Packaging (2025)",
    description: [
      "Masala Muse is a cold-brew chai concept developed for Billy's Brew. Inspired by the warmth, colour and cultural origins of chai, the visual direction combines bold typography, decorative patterns and playful illustration. Balancing traditional Indian-inspired elements with the relaxed and energetic personality of the Billy's Brew brand, the final design creates a distinctive and cohesive packaging identity."
    ],
    details: { Deliverables: "Packaging design and print-ready artwork." },
    images: [
      { row: 1, col: 1, span: 12, src: "images/masalamuse-1.jpg", alt: "Masala Muse chai bottle on a rock surrounded by pine needles" },
      { row: 2, col: 1, span: 12, src: "images/masalamuse-2.jpg", alt: "Masala Muse bottle label designs laid out on a surface" },
      { row: 3, col: 1, span: 3, src: "images/masalamuse-3.jpg", alt: "Front label: orange tile with Masala Muse wordmark and illustrated eyes on dark brown" },
      { row: 3, col: 4, span: 3, src: "images/masalamuse-4.jpg", alt: "Back label: product description, ingredients and barcode on dark brown" },
      { row: 3, col: 7, span: 3, src: "images/masalamuse-5.jpg", alt: "Label detail in orange and cream" },
      { row: 4, col: 10, span: 3, src: "images/masalamuse-6.jpg", alt: "Label detail with typography and illustration" }
    ]
  },
  "miss-bloem": {
    title: "Rebrand (2025)",
    description: [
      "A complete rebrand for Miss Bloem, building on the existing business's personality, tone of voice and established brand values. Guided by the tagline 'colourful, surprising and quirky', the new identity combines bold typography, handwritten lettering and playful floral illustrations. A distinctive flower mascot introduces warmth and personality, creating a visual identity that celebrates the experience of gifting flowers. The rebrand extends across digital and physical applications, creating a cohesive brand experience at every customer touchpoint."
    ],
    details: { Deliverables: "Complete brand guidelines." },
    images: [
      { row: 1, col: 3, span: 8, src: "images/bloem-1.jpg", alt: "Miss Bloem logo: pink lettering with a smiling flower on a dark outline" },
      { row: 2, col: 1, span: 6, src: "images/bloem-2.jpg", alt: "Hands holding a phone showing the missbloem Instagram profile" },
      { row: 2, col: 7, span: 6, src: "images/bloem-3.jpg", alt: "Four Miss Bloem stickers in green, dark and cream" },
      { row: 3, col: 1, span: 3, src: "images/bloem-4.jpg", alt: "Thank you card held in a hand" },
      { row: 3, col: 5, span: 3, src: "images/bloem-5.jpg", alt: "Pink flower-patterned wrapping paper with a green sticker" },
      { row: 4, col: 5, span: 7, src: "images/bloem-6.jpg", alt: "Three Miss Bloem flower characters" },
      { row: 5, col: 1, span: 12, src: "images/bloem-7.jpg", alt: "Miss Bloem website shown on a laptop on a wooden table" }
    ]
  },
  "fiesta-de-verano": {
    title: "Layout (2025)",
    description: [
      "A programme brochure for a three-day Latin American summer arts and culture festival at South Bank Parklands, Brisbane. The visual direction embraces vibrant colours, expressive typography and playful illustration to capture the energy and celebratory atmosphere of the festival. Decorative bunting and illustrated characters create a consistent visual language throughout the brochure, balancing expressive graphics with practical event information."
    ],
    details: { Deliverables: "Brochure design." },
    images: [
      { row: 1, col: 1, span: 12, src: "images/fiesta-1.jpg", alt: "Fiesta de Verano pink brochure cover with bunting and festival wordmark" },
      { row: 2, col: 1, span: 12, src: "images/fiesta-2.jpg", alt: "Fiesta de Verano brochure spread, green panel with bunting" },
      { row: 3, col: 1, span: 12, src: "images/fiesta-3.jpg", alt: "Fiesta de Verano brochure spread, folded layout" }
    ]
  },
  "connect-the-dots": {
    title: "Campaign (2026)",
    description: [
      "An internal university-wide campaign exploring the importance of critical thinking and academic integrity in an increasingly AI-driven learning environment. Using the familiar childhood connect-the-dots activity as a visual metaphor, the concept encourages students to question information, make connections and develop independent conclusions. A playful, illustrative visual language was developed to communicate the value of learning and responsible AI use across a range of university touchpoints."
    ],
    details: { Deliverables: "Integrated campaign identity and assets, including public art installation concept." },
    images: [
      { row: 1, col: 1, span: 12, src: "images/connect-1.jpg", alt: "Three Connect the Dots posters in maroon, cream and pink on a concrete wall" },
      { row: 2, col: 1, span: 12, src: "images/connect-2.jpg", alt: "Dot-filled billboard in a park: AI gives you a starting point" },
      { row: 3, col: 1, span: 4, src: "images/connect-3.jpg", alt: "Hands holding a maroon Connect Your Thinking to Your Learning flyer" },
      { row: 3, col: 6, span: 7, src: "images/connect-5.jpg", alt: "Torrens AI Guidelines library web page", rowspan: 3 },
      { row: 4, col: 1, span: 4, src: "images/connect-4.jpg", alt: "Folded poster: The dots won't connect themselves, knowledge is power dot-to-dot" },
      { row: 5, col: 1, span: 4, src: "images/connect-6.jpg", alt: "Library page: AI use statement of acknowledgement", offset: 6 },
      { row: 6, col: 1, span: 12, src: "images/connect-7.jpg", alt: "Library website banner shown on a laptop" }
    ]
  },
  "colour-studies": {
    title: "Visual Experimentation (2025)",
    description: [
      "An exploration of texture through hands-on experimentation, photography and digital manipulation. Using unconventional materials such as shaving cream, food colouring, soap and water, I investigated how everyday objects could be transformed into unexpected visual compositions. Through layering, pressing and manipulating materials, I developed organic textures and forms that were captured and refined into the final postcard artwork."
    ],
    details: { Deliverables: "Experimental artwork." },
    images: [
      { row: 1, col: 1, span: 12, src: "images/postcard-1.jpg", alt: "Set of colourful watercolour postcards" },
      { row: 2, col: 1, span: 3, src: "images/postcard-2.jpg", alt: "Blue watercolour postcard", offset: 6 },
      { row: 2, col: 9, span: 3, src: "images/postcard-6.jpg", alt: "Tray of watercolour puddles", offset: 6 },
      { row: 3, col: 1, span: 3, src: "images/postcard-4.jpg", alt: "Tie-dye style postcard" },
      { row: 3, col: 9, span: 3, src: "images/postcard-3.jpg", alt: "Red and blue foam postcard", offset: 15 },
      { row: 4, col: 5, span: 3, src: "images/postcard-5.jpg", alt: "Green and yellow paint puddles postcard" },
      { row: 4, col: 9, span: 3, src: "images/postcard-7.jpg", alt: "Blue foam sheet postcard" }
    ]
  }
};