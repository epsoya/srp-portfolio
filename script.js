gsap.registerPlugin(ScrollToPlugin);

const HOME_BG_PATHS = `<path d="M674.8,142.11c-.14-14.47-.76-15.7,10.87-20.74,14.21-6.15,29.91-11.59,44.8-15.92,40.82-11.45,67.89-4.19,64.34-18.83-4.36-20.36-42.79,3.05-56.48,7.19-21.13,6.39-41.7,14.73-62.95,20.57.99-10.71,1.9-21.26,3.62-31.89,1.84-14.91,13.06-30.76,3.16-33.4-15.19-5.28-10.69,4.06-13.19,13.88-3.65,14.37-3.81,29.11-8.44,43.67-5.24,16.48-11.11,15.7-27.67,19.82-23.99,11.11-44.46,1.2-44.28,15.77-.83,15.15,14.73,8.71,21.88,11.26,12.94,4.6,27.91,9.76,25.92,23.71-2.08,14.57-12.2,31.73-17.76,45.39-5.05-23.16-11.59-43.38-26.4-62.51-11.32-14.63-12.08-25.86,5.85-35.09,16.29-8.38,43.73-20.84,35.9-44.86-9.24-18.49-31.07-8.36-38.59,7.43-3.38,7.11-6.41,23.37-12.94,28.25-4.85,3.63-22.81,4.64-27.81,2.54-12.41-5.23-7.49-12.52-4.21-21.78,4.55-12.84,4.74-25.82,4.02-39.32-.41-7.57,1.5-26.96-9.98-26.17-9.36.65-5.88,8.81-4.78,14.39,3.04,15.37,10.45,44.56-1.44,60.41-17.11-9.01-44.47-17.67-60.29-2.82-18.47,17.33-11.01,47.43-6.55,68.9-22.4-7.63-44.17-14.65-67.68-17.97-9.81-1.38-13.26-.77-19.2-7.91-5.64-6.77-8.69-18.69-13.17-26.5-2.97-5.18-11.78-13.2-8.93-18.28,3.21-5.74,19.5-3.94,24.5-3.03,19.09,3.46,32.39,18.97,44.07,33.18,3.64,4.43,11.63,19.88,17.43,22.23,9.66,3.92,13.39-5.01,9.84-12.44-2.52-5.28-13.58-11.72-17.89-16.43-7.27-7.95-13.94-16.47-20.54-24.98-.81-1.05-1.82-2.61-2.98-4.53,2.18-.52,4.34-1.15,6.47-1.95,6.78-2.54,12.71-6.6,14.73-13.65,3.36-11.72,9.03-22.62,11.73-34.57,1.46-6.46,2.65-13.01,5.69-19.05,4.44-8.83,1.6-16.19-7.58-19.87h0c-4.65-1.86-9.5-2.87-14.58-2.88-9.92-.01-12.5,1.79-15.76,11.17-1.36,3.92-2.55,7.91-4.74,11.5-1.65,2.72-3.57,5.17-7.01,5.14-3.61-.03-5.19-2.82-6.32-5.76-1.59-4.14-3.08-8.31-4.57-12.48-2.41-6.74-5.94-9.42-12.75-9.58-9.2-.22-11.45,2.93-8.09,11.45,5.03,12.76,9.65,25.63,13.15,38.86-.1,0-.21-.04-.3-.04-14.5.14-5.99,13.6,2.17,24.55-1.11.97-2.7,1.84-4.85,2.97-2.71,1.43-4.61,3.41-4.93,6.18-4.53-.52-9.04-.57-13.34.39-6.56,1.47-10.94,6.45-17.14,5.53-10.39-1.54-17.99-9.92-30.41-9.49-9.39.32-17.4,2.74-25.28,7.92-36.68,24.12-25.97,75.73-20.03,111.66-32.32,3.72-10.31,31.56,1.12,47.39,9.17,12.7,18.55,24.64,29.06,36.24,6.52,7.2,13.95,20.46,21.91,25.66,6.44,4.21,18.08,5.87,16.57-6.23-.65-5.18-15.73-13.88-19.39-18.75-14.6-19.39-25.95-44.62-33.34-67.66.27-.18.53-.36.8-.54,33.99,15.56,65.64,40.55,91.13,67.75,8.07,8.61,22.43,24.65,11.57,36.21-10.07,10.71-37.7,8.09-50.42,6.4-56.16-7.46-123.3-46.55-158.95-90.3-14.29-17.53-23.87-56.88,5.97-65.27,8.47-2.38,16.73.42,24.61,2.89,3.52,1.1,11.3,6.58,15.14,4.26,11.71-7.08-11.12-13.39-15.81-15.21-14.74-5.7-66.22-35.33-33.36-50.11,13.06-5.88,29.75.43,41.66,6.67,6.75,3.54,29.64,22.54,36.01,15.75,7.93-8.46-21.85-18.49-26.83-21.12-14.77-7.82-29.13-15.93-42.98-25.28-3-2.03-23.05-17.09-30.15-15.52,10.47-2.98,20.63-7.02,30.62-11.57,4.72-2.15,9.08-5.58,9.4-10.84.8-12.99-.97-25.58-11.15-35.16h0c-7-6.58-15.27-10.86-24.91-12.34-5.47-.84-10.86-2.17-16.34-2.94-8.46-1.18-16.88-4.05-25.5-1.9-7.4,1.85-14.83,1.57-22.3,1.4-1.38-.03-2.77-.24-4.13-.1-7.16.76-10.69,3.87-10.36,11.06.54,11.89.15,23.83.15,35.74,0,12.75-.09,25.5.05,38.24.05,5.02,2,7.57,6.49,8.11,4.86.59,10.11,1.61,13.87-3.04,1.13-1.4.6-3.18.34-4.82-.35-2.19-.94-4.36-1.03-6.56-.2-4.82,1.92-6.44,6.74-5.29,1.33.32,2.62.89,3.86,1.5,6.15,3.07,12.78,3.86,19.42,3.25,8.4-.78,16.55-2.43,24.53-4.69-1.84.53-2.71,2.29-2.02,5.87,1.37,7.09,26.97,16.13,33.58,19.84-13.22,2.58-32.19,8.21-31.88,25.19.28,15.49,19.45,26.73,29.93,34.89-26.92,11.85-38.38,35.86-25.54,64.15,10.41,22.94,34.21,39.21,53.67,53.95,39.49,29.91,85.51,53.28,134.89,61.09,18.1,2.86,55,1.33,61.98-21.22,5.8-18.7-16.69-35.59-28.47-46.45-13.95-12.86-28.82-25.45-44.63-35.98-10.01-6.66-20.56-13.14-30.95-19.2-7.47-4.36-20.07-7.45-24.83-14.84-9.08-14.1-7.47-46.55-5.36-62.24,2.53-18.79,9.89-38.61,28.66-46.62,9.9-4.22,27.44-4.85,35.26,4.27,6.73,7.85,3.96,20.94,2.4,31.39-1.67,11.21-16.53,32.4.78,36.11,15.87,3.4,41.96-15.67,34.92,14.65-5.32,22.93-32.6,20.54-49.22,10.46-7.76-4.71-13.32-20.1-20.98-22.42-7.22-2.18-12.39,3.11-11.13,10,1.02,5.56,14.74,13.82,18.55,17.23,7.74,6.93,15.11,14.31,22.52,21.59,34.28,33.69,67.71,68.53,100.95,103.25,4.75,4.96,15.32,21.91,23.4,20.81,12.3-1.68,6.13-10.48,1.96-15.97-12.8-16.83-35.43-31.18-50.62-46.64-24.65-24.37-50.64-48.44-73.29-74.68,14.14,2.95,30.13,3.49,41-8,5.46-5.78,7.67-13.45,8.55-21.16,1.39-12.17-2.92-10.07,8.12-11.14,16.47-1.6,40.08,6.45,55.36,12.42,16.6,6.48,24.64,10.35,30.45,27.93-24.93-14.51-67.96-33.66-91.99-5.98-23.1,26.61,2.33,60.55,22.61,79,43.45,28.7,93.71,44.72,131.27-1.68.93,13.42-2.19,46.22,17.19,49.77,16.84,3.09,28.89-23.97,34.66-34.94,19.4-36.88,31.98-76.58,48.09-114.93,9.46,4.93,18.77,18.75,23.81,28.07,2.44,4.51,3.38,22.31,16.44,13.7,12.03-7.24-6.16-29.44-7.81-37.58-2.54-12.56-4.55-25.59-4.68-38.42ZM619.08,81.63c19.22,12.8-14.56,31.18-24.65,32.3,3.2-8.34,11.71-40.92,24.65-32.3ZM113.65,52.67c-5.33.39-7.9-1.77-8.73-6.82-.97-5.85-.32-11.85,1.98-17.15,3.03-6.98,9.77-8.84,16.72-8.34,6.88.5,13.81.92,20.62,2.48,4.49,1.02,9.03,2.6,13.89.89,1.67-.59,3.79.46,5.41,1.65,1.34.98,2.62,2.06,4,2.96,5.82,3.8,7.83,8.92,6.03,15.34h0c-1.89,6.76-3.82,8.58-10.95,9.28-3.84.37-7.75.07-11.63.07-12.43-.9-24.85-1.29-37.33-.37ZM293.92,259.88c-5.12-6.71-34-35.06-23.55-45.17,6.54-6.32,21.94,39.93,23.55,45.17ZM352.91,144.98c-2.92-7.03,1.36-24.79,2.39-32.54.37,0,.75,0,1.12,0,9.77,10.76,15.8,23.48,19.66,37.37-7.93,0-20.12,2.51-23.17-4.84ZM480.48,119.64c9.11-22.75,36.89-14.45,53.77-6.49-3.85,9.09-14.02,13.2-21.11,14.76-13.88,3.06,5.27,25.51,14.11,14.36,8.99-10.63,18.62-12.33,29.75-7.47,14.23,6.08,12.5,17.68,8.64,29.01-5.92-10.61-6.19-26.92-20.56-25.87-1.81,12.8,21.12,33.75,14.93,43.87-6.69-4.86-6.56-21.5-12.94-24.59-6.65-3.23-15.67,3.9-22.73,5.85-8.03,2.21-15.8.64-23.15,1.81-13.71,2.18-11.87,5.28-9.71,17.57-16.7-5-15.81-50.79-10.99-62.82ZM525.29,288.6c-37.84,23.93-96.37-4.22-119.52-37.12-27.22-38.68,10.12-67.18,48.92-50.03,7.89,3.49,15.86,8.4,22.72,13.64,5.3,4.04,13.11,17.06,20.28,17.75,24.32,2.33-.55-28.72-3.45-35.21,14.77,7.33,28.51,25.91,38.7,42.3,14.53,23.11,12.8,35.74-7.65,48.67ZM548.75,242.95h-.83c-14.99-28.78-34.79-37.36-46.25-66.31,13.84-.37,26.83-3.44,39.76-8.45,7.08,10.47,15.11,18.33,14.79,30.92-.35,13.64-4.44,30.58-7.47,43.84ZM574.72,310.05c-22.01,12.44-16.73-40.24-16.73-50.74,19.35,7.65,27.95,7.07,45.9-2.43.21.2.42.4.64.59-3.9,13.62-16.85,45.25-29.81,52.57ZM601.62,245.18c-6.91,9.31-31.85,17.93-40.7,6.58-7.02-9,2.69-40.74,5.03-51.45,13.86,5.63,15.85,23.11,23.92,11.41,5.4-11.76-15.01-12.3-21.27-20.65-1.98-2.64.85-4.15,1.04-6.66.31-.2.61-.39.92-.59,6.31,5.21,10.49,17.29,14.84,1.04,1.7-6.34-9.38-5.35-11-10.95-1.34-4.61,1.77-9.66,3.24-14.04,21.7,16.08,42.51,60.37,24,85.31ZM641.96,160.5c-10.43-5.8-20.19-11.22-30.66-17.04,13.84-3.95,27.14-7.75,41.46-11.84-3.75,10.04-7.22,19.31-10.8,28.88ZM668.83,185.99c-5.24-5.63-16.27-12.98-17.79-20.17-1.73-8.17,10.37-30.93,14.23-38.08.32.11.64.23.96.34.08,19.18.19,38.36,3.88,57.31-.43.2-.85.4-1.28.6Z"/><path d="M819.13,109.11c.1-15.62-22.27-3.89-29.5-1.76-13.42,3.95-27.11,7.07-40.63,10.65-45.71,16.28-69.99,9.43-62.19,30.55,3.27,8.84,23.74-11.63,62.03-20.87,47.19-13.96,75.27-6.6,70.28-18.56Z"/><path d="M26.54.58c-6.71.83-12.89,4.05-17.14,9.45C-1.39,23.73-2.73,38.79,4.55,54.49c6.95,14.99,18.59,22.97,35.47,22.45,2.22,0,4.45.17,6.66-.03,8.8-.81,16.77-3.75,23.32-9.83,4.14-3.84,3.9-5.9-.64-9.23-5.76-4.22-12.01-5.28-18.87-2.98-5.58,1.87-11.31,2.91-17.15,1.15-1.51-.46-3.57-.56-3.58-2.76,0-1.52,1.36-2.3,2.63-2.89h0c1.25-.59,2.51-1.23,3.84-1.58,7.54-1.99,15.17-3.41,23-2.43,3.88.48,7.76.73,11.59-.05,5.8-1.19,7.76-4.26,6.79-10.18C72.89,7.17,49.8-2.29,26.54.58ZM49.07,31.36c-2.48,4.49-9.74,6.78-14.46,4.41-2.74-1.38-5.38-3.15-4.9-6.78h0c.34-2.59,4.41-5.14,7.8-5.15,3.38.48,6.9,1.16,10.14,2.69,2.05.97,2.56,2.77,1.42,4.83Z"/><path d="M211.72,35.68c9.23,3.07,18.81,4.65,28.47,5.62,3.64.37,7.15,1.08,10.35,2.78,4.6,2.45,5,5.43,1.45,9.25-4.72,5.07-11.79,6.2-19.06,3.05-6.07-2.63-11.89-6.08-18.61-6.81-8.31-.9-13.95,4.72-13.15,12.4-2.07,3.05-.07,6.46,2.95,9.5.17.42.33.84.49,1.26,1.49,3.97,4.36,6.11,8.52,7.04.59.13,1.19.25,1.78.37,13.35,10.73,27.26,20.57,39.47,32.68,17.23-2.4-1.97-17.15-7.14-21.41-3.04-2.5-6-5.26-8.95-8.1,12.75.83,25.54.28,38.35-1.26,8.86-1.06,12.42-5.62,12.26-14.67-.09-4.97-.83-9.93-1.17-14.9h0c-.44-6.31-3.49-10.93-8.82-14.19-4.99-3.05-10.49-4.99-15.86-7.21-6.17-2.55-11.86-5.86-17.58-10.72,4.27-4.07,7.83-4.61,11.43-.84,2.67,2.79,5.79,4.09,9.68,3.71,7.04-.7,9.09-4.95,4.9-10.7-5.05-6.94-12.28-10.39-20.55-11.14-11.35-1.03-22.66-.17-33.79,2.53-5.02,1.22-9.2,3.67-12.42,7.77-7.9,10.05-5.1,19.99,7,24Z"/><path d="M310.84,68.87c1.24.61,2.5,1.23,3.63,2.01,13.96,9.75,28.25,7.33,42.62,1.14,5.97-2.57,9.33-7.45,11.81-13.27,2.89-6.8,3.79-14.1,3.65-21.13-.23-11.63-3.39-22.53-14.65-28.92h0C348.34,3.29,338.18-.03,324.91,0c-8.9.63-19.14,3.2-26.59,12.35-14.36,17.65-8.01,46.32,12.52,56.52ZM321.89,40.83c-.09-4.97.54-9.95,2.09-14.69,2.56-7.84,8.9-8.97,14.4-2.76,8.67,9.8,5.43,26.27-6.27,31.84-3.25,1.55-6.35.55-8.3-3.01-1.93-3.5-2.32-7.37-1.91-11.38Z"/><path d="M499.57,27.54c-3.55,2.76-7.43,4.78-11.83,5.79-6.76,1.56-13.39,3.53-19.38,7.11-8.21,4.91-11.66,13.4-9.5,22.86,1.56,6.82,8.73,12.69,17.1,13.71,3.84.47,7.9.93,11.55-.31,7.33-2.49,14.08-1.31,20.88,1.76,5.16,2.33,10.63,3.05,16.22,1.75,4.05-.95,6.71-3.06,7.7-7.57,1.5-6.87,2.44-13.54.25-20.46h0c-1.35-4.26-.97-8.77-.33-13.2,0-2.21-.05-4.43,0-6.64.25-10.47-4.36-18.3-13.57-22.91-12.28-6.14-25.3-7.92-38.64-3.93-6.71,2.01-12.77,5.3-16.16,12.03-2.51,4.99-1.49,7.87,3.8,9.29,3.54.95,7.14.72,10.53-.96,2.72-1.35,5.53-2.53,8.16-4.05,4.44-2.56,8.56-1.29,12.63.77,2.55,1.29,3.2,2.92.59,4.95ZM498.73,54h0c-1.73,5.09-3.93,6.66-9.09,6.66-2.51,0-4.93-.11-6.93-2.04-2.34-2.27-2.81-4.65-.83-7.33,1.34-1.81,3.15-3.06,5.12-4.11,3.56-1.9,7.39-2.97,10.97-.72,2.94,1.85,1.64,4.94.76,7.54Z"/>`;

function HOME_BG_SVG(className) {
  return `<svg class="${className}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 819.7 342.65" fill="currentColor">${HOME_BG_PATHS}</svg>`;
}

/* ─────────────────────────────────────────
   DATA
───────────────────────────────────────── */
const projects = [
  {
    id: 'fundamento-pilates',
    title: 'Fundamento Pilates',
    category: 'Web Design',
    year: 2026,
    image: 'img/fundamento-pilates.png',
    link: 'https://fundamentopilates.madefabriek.nl/',
    description: 'Redesigned a pilates studio\'s website after learning my first instinct about the audience was completely wrong.',
    body: `
      <p>Fundamento Pilates needed a redesign that actually matched the quality of their studio. My first instinct was clean, minimal, trendy. The usual pilates-for-young-adults look. Turns out their actual clients are mostly older women practicing for their health, sometimes during or after pregnancy. Completely different brief than the one in my head.</p>
      <p>They also wanted to keep their signature blue, so I had to find a middle ground between two visions instead of just pushing mine through. A few rounds of iteration in Figma later, we landed somewhere neither of us expected at the start. Light and recreational, but calm and welcoming for every age group.</p>
      <p>Currently in development. My first real lesson in designing for the client in front of me, not the trend in my head.</p>
    `
  },
  {
    id: 'de-bouwregisseur',
    title: 'De Bouwregisseur',
    category: 'Web Development',
    year: 2026,
    image: 'img/de-bouwregisseur.png',
    link: 'https://debouwregisseur.com/',
    description: 'Took a construction company\'s flat website and built it into something that actually explains what they do.',
    body: `
      <p>De Bouwregisseur already had a website, but it felt empty and didn't really say what they do. The brief was to build on what existed rather than start from zero. Structured around their four services: new construction, renovation, refurbishment and maintenance, and technical property management.</p>
      <p>This was my first fully independent build. Full Figma design through to a live WordPress site, on my own. Getting it properly responsive took a lot of feedback rounds, and that's where most of the learning happened.</p>
      <p>It's live now, and it's one of the first things I've built that I'm genuinely proud of.</p>
    `
  },
  {
    id: 'murata-homepage',
    title: 'Murata Homepage Analysis',
    category: 'UX / UI Design',
    year: 2024,
    image: 'img/murata-homepage.png',
    description: 'Analysed Murata\'s homepage and found ways to make it feel less foreign to a Western audience.',
    body: `
      <p>During my internship at Murata Electronics Europe, I dug into their visual identity, including the Japanese design principles behind it, and asked how it could translate better for a Western audience.</p>
      <p>I turned that research into concrete UX/UI recommendations, then mocked up a redesign in Adobe XD to test the ideas.</p>
      <p>Three weeks, one homepage, and a much clearer sense of what "brand consistency" actually means in practice.</p>
    `
  },
  {
    id: 'murata-design-system',
    title: 'Responsive Design System',
    category: 'Design Systems',
    year: 2024,
    image: 'img/murata-design-system.png',
    description: 'Built a flexible banner system so Murata\'s team could design on-brand without starting from scratch every time.',
    body: `
      <p>Murata needed a way to keep banners and campaign graphics on-brand without every designer reinventing the wheel. So I built a responsive design system in Adobe XD, a toolkit of reusable pieces that adapt across formats.</p>
      <p>It's meant to speed things up and keep things consistent, without boxing anyone in creatively.</p>
      <p>Two weeks, one system, way less guesswork for whoever uses it next.</p>
    `
  },
  {
    id: 'things-that-matter',
    title: 'Things That Matter',
    category: 'Service Design',
    year: 2024,
    image: 'img/things-that-matter.png',
    description: 'Designed a multisensory wayfinding concept to help visitors actually connect with a museum exhibition.',
    body: `
      <p>Things That Matter is a Wereldmuseum exhibition about culture, identity, and objects that hold meaning, but visitors kept getting lost in it, literally and emotionally.</p>
      <p>I ran interviews, observations, and journey mapping to figure out what was going wrong, then designed a wayfinding system built around scent, sound, and light, with both a fast route and a slower, more reflective one.</p>
      <p>Ten weeks, a lot of post-its, and a concept I actually believe in.</p>
    `
  }
];

const archive = [];

const aboutSubtabs = [
  { id: 'know-me',       label: 'Get to know me' },
  { id: 'education',     label: 'Education' },
  { id: 'skillset',      label: 'Skillset' },
  { id: 'future-vision', label: 'Future vision' }
];

/* ─────────────────────────────────────────
   STATE
───────────────────────────────────────── */
const state = {
  activeTab:    'home',
  activeSubtab: null,
  detailItem:   null,
  detailSource: null,
  theme:        'dark'
};

/* ─────────────────────────────────────────
   THEME
───────────────────────────────────────── */
function initTheme() {
  const saved = localStorage.getItem('botch-theme');
  const pref  = window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
  state.theme = saved || pref;
  applyTheme();
}

function applyTheme() {
  document.documentElement.setAttribute('data-theme', state.theme);
  const label = document.getElementById('theme-label');
  if (label) label.textContent = state.theme === 'dark' ? 'LIGHT' : 'DARK';
}

function toggleTheme() {
  state.theme = state.theme === 'dark' ? 'light' : 'dark';
  localStorage.setItem('botch-theme', state.theme);
  applyTheme();
}

/* ─────────────────────────────────────────
   HELPERS
───────────────────────────────────────── */
function tabHasSubtabs(tab) {
  return ['projects', 'about'].includes(tab);
}

function getSubtabItems() {
  if (state.activeTab === 'projects') return projects.map(p => ({ id: p.id, label: p.title }));
  if (state.activeTab === 'about')    return aboutSubtabs;
  return [];
}

/* Returns the top offset of the active nav item relative to the sidebar */
function getNavItemOffset(tab) {
  const navItem = document.querySelector(`.nav-item[data-tab="${tab}"]`);
  const sidebar  = document.getElementById('sidebar');
  if (!navItem || !sidebar) return 0;
  return navItem.getBoundingClientRect().top - sidebar.getBoundingClientRect().top;
}

/* ─────────────────────────────────────────
   NAVIGATE
───────────────────────────────────────── */
function navigate(tab) {
  const prevTab    = state.activeTab;
  const prevHadSub = tabHasSubtabs(prevTab);
  const willHaveSub = tabHasSubtabs(tab);

  state.activeTab  = tab;
  state.detailItem = null;
  state.detailSource = null;

  // Default subtab per tab
  if (tab === 'about'    && !state.activeSubtab) state.activeSubtab = 'know-me';
  if (tab === 'about')   state.activeSubtab = state.activeSubtab || 'know-me';
  if (tab === 'home')    state.activeSubtab = null;

  renderSidebarActive();
  updateSubtabPanel(prevHadSub, willHaveSub);
  renderContent();
}

/* ─────────────────────────────────────────
   SIDEBAR ACTIVE
───────────────────────────────────────── */
function renderSidebarActive() {
  document.querySelectorAll('.nav-item').forEach(el => {
    el.classList.toggle('active', el.dataset.tab === state.activeTab);
  });
}

/* ─────────────────────────────────────────
   SUBTAB PANEL
───────────────────────────────────────── */
function updateSubtabPanel(prevHadSub, willHaveSub) {
  const panel = document.getElementById('subtab-panel');

  if (!willHaveSub) {
    if (prevHadSub) slideOutSubtabPanel(panel);
    return;
  }

  const items  = getSubtabItems();
  const wasEmpty = panel.children.length === 0;

  // Build DOM
  panel.innerHTML = `<div class="subtab-content-wrap"><div class="subtab-items" id="subtab-items-list"></div></div>`;
  const list = panel.querySelector('#subtab-items-list');

  items.forEach((item, idx) => {
    const el = document.createElement('div');
    el.className = 'subtab-item' + (item.id === state.activeSubtab ? ' active' : '');
    el.textContent = item.label;
    el.dataset.id  = item.id;
    el.dataset.idx = idx;
    el.addEventListener('click', () => {
      if (state.activeTab === 'about') {
        scrollToAboutSection(item.id);
      } else {
        selectSubtab(item.id);
      }
    });
    list.appendChild(el);
  });

  // Position content at active nav item's Y offset
  const offset = getNavItemOffset(state.activeTab);
  const wrap   = panel.querySelector('.subtab-content-wrap');

  if (wasEmpty || !prevHadSub) {
    // First appearance: set position + slide in from left
    gsap.killTweensOf(panel);
    gsap.set(wrap, { marginTop: offset });
    gsap.fromTo(panel,
      { x: -18, opacity: 0 },
      { x: 0,   opacity: 1, duration: 0.32, ease: 'power2.out' }
    );
  } else {
    // Already visible, switching tabs: animate margin shift + fade content
    gsap.to(wrap, { marginTop: offset, duration: 0.3, ease: 'power2.inOut' });
    gsap.fromTo(list, { opacity: 0 }, { opacity: 1, duration: 0.25, ease: 'power1.out' });
  }
}

function slideOutSubtabPanel(panel) {
  gsap.killTweensOf(panel);
  gsap.to(panel, {
    x: -18, opacity: 0, duration: 0.26, ease: 'power1.inOut',
    onComplete: () => {
      panel.innerHTML = '';
      gsap.set(panel, { clearProps: 'x,opacity' });
    }
  });
}

/* ─────────────────────────────────────────
   SUBTAB SELECTION
───────────────────────────────────────── */
function updateSubtabActiveClass(id) {
  document.querySelectorAll('#subtab-panel .subtab-item').forEach(el => {
    el.classList.toggle('active', el.dataset.id === id);
    el.classList.remove('focused');
  });
}

function selectSubtab(id) {
  state.activeSubtab = id;
  updateSubtabActiveClass(id);
  animateSubtabSwitch(() => renderContent());
}

/* ─────────────────────────────────────────
   ABOUT SCROLLSPY + SCROLL-TO
───────────────────────────────────────── */
let aboutObserver = null;
let aboutSectionRatios = {};
let aboutSkillBarsAnimated = false;
let aboutProgrammaticScroll = false;

function scrollToAboutSection(id) {
  const container = document.getElementById('about-content');
  const target = document.getElementById(id);
  if (!container || !target) return;

  state.activeSubtab = id;
  updateSubtabActiveClass(id);

  aboutProgrammaticScroll = true;
  gsap.to(container, {
    scrollTo: { y: target, autoKill: false },
    duration: 0.6,
    ease: 'power2.inOut',
    onComplete: () => { aboutProgrammaticScroll = false; }
  });
}

function setupAboutObserver() {
  teardownAboutObserver();
  aboutSectionRatios = {};
  aboutSkillBarsAnimated = false;

  const container = document.getElementById('about-content');
  if (!container) return;

  const sections = container.querySelectorAll('.about-panel');

  aboutObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      aboutSectionRatios[entry.target.id] = entry.isIntersecting ? entry.intersectionRatio : 0;
    });

    if (aboutProgrammaticScroll) return;

    let bestId = null, bestRatio = 0;
    Object.entries(aboutSectionRatios).forEach(([id, ratio]) => {
      if (ratio > bestRatio) { bestRatio = ratio; bestId = id; }
    });

    if (bestId === 'skillset' && !aboutSkillBarsAnimated) {
      aboutSkillBarsAnimated = true;
      animateSkillBars();
    }

    if (bestId && state.activeSubtab !== bestId) {
      state.activeSubtab = bestId;
      updateSubtabActiveClass(bestId);
    }
  }, { root: container, threshold: 0.4 });

  sections.forEach(section => aboutObserver.observe(section));
}

function teardownAboutObserver() {
  if (aboutObserver) {
    aboutObserver.disconnect();
    aboutObserver = null;
  }
}

/* ─────────────────────────────────────────
   CONTENT
───────────────────────────────────────── */
function renderContent() {
  const content = document.getElementById('content');

  if (state.activeTab !== 'home') teardownHomeBackground();
  if (state.activeTab !== 'about') teardownAboutObserver();

  if (state.detailItem) {
    content.innerHTML = projectDetailHTML(state.detailItem);
    content.querySelector('.project-back-btn')?.addEventListener('click', closeDetail);
    return;
  }

  switch (state.activeTab) {
    case 'home':     content.innerHTML = homeHTML(); setupHomeBackground(); break;
    case 'projects': content.innerHTML = projectsHTML(projects, 'PROJECTS'); break;
    case 'archive':  content.innerHTML = archiveHTML(); break;
    case 'about':    content.innerHTML = aboutHTML(); setupAboutObserver(); break;
    case 'contact':  content.innerHTML = contactHTML(); break;
  }

  const btn = content.querySelector('.btn-view-more');
  if (btn) btn.addEventListener('click', () => openDetail(btn.dataset.id, btn.dataset.source));

  const gotoBtn = content.querySelector('.btn-goto-projects');
  if (gotoBtn) gotoBtn.addEventListener('click', () => animateTabSwitch(() => navigate('projects')));
}

/* ─────────────────────────────────────────
   INLINE PROJECT DETAIL
───────────────────────────────────────── */
function openDetail(id, source) {
  const list = source === 'archive' ? archive : projects;
  const item = list.find(p => p.id === id);
  if (!item) return;
  state.detailItem   = item;
  state.detailSource = source;
  // Hide subtab panel while in detail view
  slideOutSubtabPanel(document.getElementById('subtab-panel'));
  animateSubtabSwitch(() => renderContent());
}

function closeDetail() {
  const prevSource = state.detailSource;
  state.detailItem   = null;
  state.detailSource = null;
  // Restore subtab panel
  updateSubtabPanel(false, tabHasSubtabs(state.activeTab));
  animateSubtabSwitch(() => renderContent());
}

function projectDetailHTML(item) {
  return `
    <div class="project-detail-inline">
      <button class="project-back-btn">Back</button>
      <div class="project-detail-hero">
        ${item.image
          ? `<img src="${item.image}" alt="${item.title}">`
          : `<div class="project-detail-hero-placeholder">No image</div>`}
      </div>
      <div class="project-detail-meta">
        <span>${item.category}</span>
        <span>${item.year}</span>
      </div>
      <h1 class="project-detail-title botch-font">${item.title}</h1>
      ${item.link ? `<a class="project-detail-link" href="${item.link}" target="_blank" rel="noopener">Visit site →</a>` : ''}
      <div class="project-detail-body">${item.body || ''}</div>
    </div>
  `;
}

/* ─────────────────────────────────────────
   HOME HTML
───────────────────────────────────────── */
function homeHTML() {
  return `
    <div id="home-content">
      <div class="home-bg" aria-hidden="true">
        ${HOME_BG_SVG('home-bg-svg')}
      </div>
      <div class="home-text">
        <h1 class="home-hero-name botch-font">Elijah Delgado</h1>
        <p class="home-tagline">Designer. Still figuring it out.</p>
        <p class="home-sub">I experience things, then I make things. Look around.</p>
        <div class="home-instructions">
          <h3>How to navigate</h3>
          <ul>
            <li>
              <div class="instr-row"><span class="key">1–5</span><span class="instr-label">Jump to a section</span></div>
              <p class="instr-desc">Press a number key to instantly switch between Home, Projects, About, Archive and Contact.</p>
            </li>
            <li>
              <div class="instr-row"><span class="key">↑ ↓</span><span class="instr-label">Browse the list</span></div>
              <p class="instr-desc">Use the arrow keys to move up and down through whatever list is open in the side panel.</p>
            </li>
            <li>
              <div class="instr-row"><span class="key">↵</span><span class="instr-label">Open a project</span></div>
              <p class="instr-desc">Hit enter to open the project or item that's currently selected in the list.</p>
            </li>
            <li>
              <div class="instr-row"><span class="key">D / L</span><span class="instr-label">Switch the theme</span></div>
              <p class="instr-desc">Press D or L anytime to flip between dark and light mode, no clicking required.</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  `;
}

/* ─────────────────────────────────────────
   HOME BACKGROUND — interactive parallax
───────────────────────────────────────── */
let homeBgMouseHandler = null;

function teardownHomeBackground() {
  if (homeBgMouseHandler) {
    window.removeEventListener('mousemove', homeBgMouseHandler);
    homeBgMouseHandler = null;
  }
}

function setupHomeBackground() {
  teardownHomeBackground();
  const bg = document.querySelector('#home-content .home-bg');
  if (!bg) return;

  gsap.set(bg, { xPercent: -50, yPercent: -50, x: 0, y: 0, rotate: 0 });

  homeBgMouseHandler = (e) => {
    const px = e.clientX / window.innerWidth;
    const py = e.clientY / window.innerHeight;
    const invertedX = 0.5 - px;
    const invertedY = 0.5 - py;

    const moveX = invertedX * 2 * 24;
    const moveY = invertedY * 2 * 24;
    const rotate = invertedX * 2 * 3;

    gsap.to(bg, { x: moveX, y: moveY, rotate, duration: 1.6, ease: 'power2.out' });
  };

  window.addEventListener('mousemove', homeBgMouseHandler);
}

/* ─────────────────────────────────────────
   PROJECTS / ARCHIVE HTML
───────────────────────────────────────── */
function projectsHTML(items, title) {
  const active = items.find(p => p.id === state.activeSubtab);

  const previewHTML = active ? `
    <div class="preview-card">
      <div class="preview-image">
        ${active.image
          ? `<img src="${active.image}" alt="${active.title}">`
          : `<div class="preview-image-placeholder">No image</div>`}
      </div>
      <div class="preview-info">
        <div>
          <div class="preview-meta">
            <span>${active.category}</span>
            <span>${active.year}</span>
          </div>
          <h2 class="preview-title botch-font">${active.title}</h2>
          <p class="preview-desc">${active.description}</p>
        </div>
        <div class="preview-btn-row">
          <button class="btn-view-more" data-id="${active.id}" data-source="projects">View more →</button>
          ${active.link ? `<a class="btn-visit-site" href="${active.link}" target="_blank" rel="noopener">Visit site ↗</a>` : ''}
        </div>
      </div>
    </div>
  ` : `
    <div class="preview-empty-state">
      <p class="preview-empty-title botch-font">Select a project</p>
      <p class="preview-empty-sub">Pick one from the list on the left to see a preview here.</p>
      <div class="preview-empty-keys">
        <div class="preview-key-row"><span class="preview-key">↑↓</span><span class="preview-key-desc">browse the list</span></div>
        <div class="preview-key-row"><span class="preview-key">↵</span><span class="preview-key-desc">open project</span></div>
      </div>
    </div>
  `;

  return `
    <div id="projects-content">
      <div class="tab-header">
        <h1 class="tab-title botch-font">${title}</h1>
        <p class="tab-count">${items.length} item${items.length !== 1 ? 's' : ''}</p>
      </div>
      <div class="preview-panel">${previewHTML}</div>
    </div>
  `;
}

/* ─────────────────────────────────────────
   ARCHIVE HTML — work in progress
───────────────────────────────────────── */
function archiveHTML() {
  return `
    <div id="archive-content">
      <div class="home-text">
        <p class="wip-badge">Work in progress</p>
        <h1 class="wip-title botch-font">The archive is still empty.</h1>
        <p class="home-sub">Random stuff. Experiments, scraps, things that didn't fit anywhere else. Nothing here yet.</p>
        <button class="btn-goto-projects">View projects →</button>
      </div>
    </div>
  `;
}

/* ─────────────────────────────────────────
   ABOUT HTML
───────────────────────────────────────── */
function aboutHTML() {
  return `
    <div id="about-content">
      <section id="know-me" class="about-panel">
        <h2 class="about-section-title botch-font">Get to know me</h2>
        <div class="about-intro">
          <div class="about-intro-text">
            <p>Final year CMD student. Still figuring out where the designer ends and the developer begins, and I'm okay with that. I care about work that feels like something. My vision keeps shifting and I stopped trying to fix it.</p>
          </div>
          <div class="about-photo"><img src="img/aboutme.jpg" alt="Elijah Delgado"></div>
        </div>
      </section>

      <section id="education" class="about-panel">
        <h2 class="about-section-title botch-font">Education</h2>
        <div class="education-timeline">
          <div class="edu-block">
            <div class="edu-year">2025</div>
            <div class="edu-detail">
              <div class="edu-name">Minor Makers Lab</div>
              <div class="edu-institution">Amsterdam University of Applied Sciences</div>
            </div>
          </div>
          <div class="edu-block">
            <div class="edu-year">2025</div>
            <div class="edu-detail">
              <div class="edu-name">Minor Service Design</div>
              <div class="edu-institution">Amsterdam University of Applied Sciences</div>
            </div>
          </div>
          <div class="edu-block">
            <div class="edu-year">2023</div>
            <div class="edu-detail">
              <div class="edu-name">CMD Propedeuse</div>
              <div class="edu-institution">Amsterdam University of Applied Sciences</div>
            </div>
          </div>
          <div class="edu-block">
            <div class="edu-year">2022–now</div>
            <div class="edu-detail">
              <div class="edu-name">Communication & Multimedia Design</div>
              <div class="edu-institution">Amsterdam University of Applied Sciences</div>
            </div>
          </div>
          <div class="edu-block">
            <div class="edu-year">2016–2021</div>
            <div class="edu-detail">
              <div class="edu-name">HAVO EM & CM</div>
              <div class="edu-institution">Kaj Munk College</div>
            </div>
          </div>
        </div>
      </section>

      <section id="skillset" class="about-panel">
        <h2 class="about-section-title botch-font">Skillset</h2>
        <div class="skills-grid">
          ${skillItem('Adobe Illustrator',  88)}
          ${skillItem('Adobe Photoshop',    85)}
          ${skillItem('Adobe InDesign',     85)}
          ${skillItem('Figma',              82)}
          ${skillItem('Blender',            72)}
          ${skillItem('Nomad Sculpt',       68)}
          ${skillItem('HTML / CSS',         75)}
          ${skillItem('JavaScript',         60)}
          ${skillItem('Framer / Webflow',   50)}
        </div>
      </section>

      <section id="future-vision" class="about-panel">
        <div class="future-text">
          <h2 class="about-section-title botch-font">Future vision</h2>
          <p>No clear endpoint. I just want to keep making things, keep experiencing, and see where that takes me.</p>
        </div>
      </section>
    </div>
  `;
}

function skillItem(name, pct) {
  const levels = [[90,'Expert'],[80,'Advanced'],[70,'Proficient'],[60,'Intermediate'],[0,'Learning']];
  const label  = levels.find(([k]) => pct >= k)?.[1] || 'Learning';
  return `
    <div class="skill-item">
      <div class="skill-header">
        <span class="skill-name">${name}</span>
        <span class="skill-level">${label}</span>
      </div>
      <div class="skill-bar-track">
        <div class="skill-bar-fill" data-pct="${pct}" style="width:0%"></div>
      </div>
    </div>
  `;
}

function animateSkillBars() {
  document.querySelectorAll('.skill-bar-fill').forEach(bar => {
    gsap.to(bar, { width: bar.dataset.pct + '%', duration: 0.9, ease: 'power2.out', delay: 0.1 });
  });
}

/* ─────────────────────────────────────────
   CONTACT HTML
───────────────────────────────────────── */
function contactHTML() {
  return `
    <div id="contact-content">
      <div class="contact-inner">
        <h1 class="contact-title botch-font">Let's talk.</h1>

        <div class="contact-links">
          <a class="contact-link" href="mailto:ernie.elijah@gmail.com">
            <svg class="contact-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><polyline points="2,4 12,13 22,4"/></svg>
            <span>ernie.elijah@gmail.com</span>
          </a>
          <a class="contact-link" href="tel:0611644802">
            <svg class="contact-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.96a16 16 0 0 0 6.13 6.13l.96-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
            <span>06 11 64 48 02</span>
          </a>
          <a class="contact-link" href="https://www.instagram.com/epsoya" target="_blank" rel="noopener">
            <svg class="contact-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/></svg>
            <span>@epsoya</span>
          </a>
          <a class="contact-link" href="https://www.linkedin.com/in/elijah-delgado-369741257/" target="_blank" rel="noopener">
            <svg class="contact-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
            <span>Elijah Delgado</span>
          </a>
        </div>

        <div class="contact-form-box">
          <h3 class="contact-form-label">Send a message</h3>
          <form class="contact-form" onsubmit="handleContactSubmit(event)">
            <div class="contact-form-row">
              <div class="contact-field">
                <label for="cf-name">Name</label>
                <input id="cf-name" type="text" placeholder="Your name" autocomplete="off">
              </div>
              <div class="contact-field">
                <label for="cf-phone">Phone</label>
                <input id="cf-phone" type="tel" placeholder="Your number" autocomplete="off">
              </div>
            </div>
            <div class="contact-field">
              <label for="cf-email">Email</label>
              <input id="cf-email" type="email" placeholder="your@email.com" autocomplete="off">
            </div>
            <div class="contact-field">
              <label for="cf-message">Message</label>
              <textarea id="cf-message" rows="4" placeholder="What's on your mind?"></textarea>
            </div>
            <button type="submit" class="contact-submit">Send →</button>
          </form>
        </div>
      </div>
    </div>
  `;
}

function handleContactSubmit(e) {
  e.preventDefault();
  const name    = document.getElementById('cf-name').value.trim();
  const phone   = document.getElementById('cf-phone').value.trim();
  const email   = document.getElementById('cf-email').value.trim();
  const message = document.getElementById('cf-message').value.trim();
  if (!name || !email || !message) return;

  const subject = encodeURIComponent(`Message from ${name}`);
  const body    = encodeURIComponent(`Name: ${name}\nPhone: ${phone || 'n/a'}\nEmail: ${email}\n\n${message}`);
  window.location.href = `mailto:ernie.elijah@gmail.com?subject=${subject}&body=${body}`;
}

/* ─────────────────────────────────────────
   GSAP ANIMATIONS
───────────────────────────────────────── */
/* Main tab switch — clip-path wipe, out then in (sequential) */
function animateTabSwitch(renderFn) {
  const content = document.getElementById('content');
  gsap.killTweensOf(content);
  gsap.set(content, { clipPath: 'inset(0 0 0% 0)' });
  gsap.to(content, {
    clipPath: 'inset(0 0 100% 0)',
    duration: 0.45,
    ease: 'power2.inOut',
    onComplete: () => {
      renderFn();
      gsap.fromTo(content,
        { clipPath: 'inset(100% 0 0% 0)' },
        {
          clipPath: 'inset(0 0 0 0)',
          duration: 0.45,
          ease: 'power2.inOut',
          onComplete: () => gsap.set(content, { clearProps: 'clipPath' })
        }
      );
    }
  });
}

/* Subtab / detail switch — lighter, faster fade + slide, staggered children */
function animateSubtabSwitch(renderFn) {
  const content = document.getElementById('content');
  gsap.killTweensOf(content);
  gsap.to(content, {
    y: -8, opacity: 0, duration: 0.2, ease: 'power2.in',
    onComplete: () => {
      renderFn();
      gsap.set(content, { clearProps: 'y,opacity' });
      const wrap = content.firstElementChild;
      const targets = wrap && wrap.children.length ? Array.from(wrap.children) : content;
      gsap.fromTo(targets,
        { y: 8, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.25, ease: 'power2.out', stagger: 0.03 }
      );
    }
  });
}

function animateInitial() {
  gsap.from('#sidebar', { x: -24, opacity: 0, duration: 0.45, ease: 'power2.out' });
  gsap.from('#content', { y: 20,  opacity: 0, duration: 0.5,  ease: 'power2.out', delay: 0.1 });
}

/* ─────────────────────────────────────────
   KEYBOARD
───────────────────────────────────────── */
const tabKeys = { '1': 'home', '2': 'projects', '3': 'about', '4': 'archive', '5': 'contact' };

document.addEventListener('keydown', e => {
  const tag = document.activeElement.tagName;
  if (tag === 'INPUT' || tag === 'TEXTAREA') return;

  // 1–4 → tab switch
  if (tabKeys[e.key] && !e.ctrlKey && !e.metaKey && !e.altKey) {
    const tab = tabKeys[e.key];
    if (tab !== state.activeTab) {
      animateTabSwitch(() => navigate(tab));
    }
    return;
  }

  // D/L → theme
  if ((e.key === 'd' || e.key === 'D' || e.key === 'l' || e.key === 'L') && !e.ctrlKey && !e.metaKey) {
    toggleTheme();
    return;
  }

  // Backspace → close detail view and return to grid
  if (e.key === 'Backspace' && state.detailItem) {
    e.preventDefault();
    closeDetail();
    return;
  }

  if (!tabHasSubtabs(state.activeTab) || state.detailItem) return;

  const items = getSubtabItems();
  if (!items.length) return;

  const currentIdx = items.findIndex(it => it.id === state.activeSubtab);

  // ArrowDown — select next immediately
  if (e.key === 'ArrowDown') {
    e.preventDefault();
    const nextIdx = currentIdx < items.length - 1 ? currentIdx + 1 : 0;
    if (state.activeTab === 'about') scrollToAboutSection(items[nextIdx].id);
    else selectSubtab(items[nextIdx].id);
    scrollSubtabIntoView(nextIdx);
    return;
  }

  // ArrowUp — select previous immediately
  if (e.key === 'ArrowUp') {
    e.preventDefault();
    const prevIdx = currentIdx > 0 ? currentIdx - 1 : items.length - 1;
    if (state.activeTab === 'about') scrollToAboutSection(items[prevIdx].id);
    else selectSubtab(items[prevIdx].id);
    scrollSubtabIntoView(prevIdx);
    return;
  }

  // Enter — open detail if on a project subtab
  if (e.key === 'Enter') {
    if (state.activeSubtab && state.activeTab === 'projects') {
      const item = projects.find(p => p.id === state.activeSubtab);
      if (item) openDetail(item.id, state.activeTab);
    }
  }
});

function scrollSubtabIntoView(idx) {
  const items = document.querySelectorAll('#subtab-panel .subtab-item');
  if (items[idx]) items[idx].scrollIntoView({ block: 'nearest' });
}

/* ─────────────────────────────────────────
   INIT
───────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  initTheme();

  document.querySelectorAll('.nav-item').forEach(el => {
    el.addEventListener('click', () => {
      const tab = el.dataset.tab;
      if (tab === state.activeTab && !state.detailItem) return;
      animateTabSwitch(() => navigate(tab));
    });
  });

  document.getElementById('theme-toggle').addEventListener('click', toggleTheme);

  state.activeTab = 'home';
  renderSidebarActive();
  renderContent();
  animateInitial();
});
