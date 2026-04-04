# Update "What I Do" Component

The goal is to update the "What I Do" section to accurately reflect Mubashir's modern full-stack skills while significantly upgrading the visual appeal.

## Proposed Changes

### 1. [src/components/WhatIDo.tsx](file:///d:/YYT/Projects/Portfolio/Mubashir-Portfolio/mubashir-portfolio-main/src/components/WhatIDo.tsx)
- **Frontend Section**: 
  - Change title to `MODERN FRONTEND` (or keep `FRONTEND` with glowing text).
  - Update description to focus on React, Next.js, 3D Web (Three.js), and GSAP animations.
  - Update tags: `React.js`, `Next.js`, `TypeScript`, `Three.js`, `GSAP`, `Tailwind CSS`, `HTML/CSS`.
- **Backend Section**:
  - Update description to focus on Node.js, Express, databases, and scalable server architectures.
  - Update tags: `Node.js`, `Express.js`, `MongoDB`, `MySQL`, `REST APIs`, `Architecture`.

### 2. [src/components/styles/WhatIDo.css](file:///d:/YYT/Projects/Portfolio/Mubashir-Portfolio/mubashir-portfolio-main/src/components/styles/WhatIDo.css)
- Make the design "amazing" by enhancing the hover states.
- Add a neon-like glow effect on the tags (`.what-tags`).
- Update the border animations to have a more vibrant color or glowing effect (e.g., using a subtle `box-shadow` or `drop-shadow` on the SVGs).
- Give the `h3` and `h4` text a sleek gradient or glowing text-shadow.

## Verification Plan

### Automated Tests
- This is a UI update. There are no automated tests for CSS visual changes in this project.

### Manual Verification
1. Run the local development server (`npm run dev`).
2. Navigate to the "WHAT I DO" section.
3. Verify that the skill tags now reflect your actual stack (React, Node, Mongo, etc.).
4. Verify that the hover effects are noticeably enhanced and visually pleasing.
