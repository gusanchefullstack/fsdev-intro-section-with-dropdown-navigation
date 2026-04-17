# Intro Section with Dropdown Navigation

A responsive landing page featuring an interactive dropdown navigation menu, built as a solution to the [Intro section with dropdown navigation challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/intro-section-with-dropdown-navigation-ryaPetHE5).

![License](https://img.shields.io/badge/license-ISC-blue)
![Vite](https://img.shields.io/badge/Vite-8.0-646CFF?logo=vite&logoColor=white)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)

## Table of Contents

- [Overview](#overview)
  - [The Challenge](#the-challenge)
  - [Screenshots](#screenshots)
  - [Links](#links)
- [My Process](#my-process)
  - [Built With](#built-with)
  - [Project Structure](#project-structure)
  - [What I Learned](#what-i-learned)
- [Getting Started](#getting-started)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The Challenge

Users should be able to:

- View the relevant dropdown menus on desktop and mobile when interacting with the navigation links
- View the optimal layout for the content depending on their device's screen size
- See hover states for all interactive elements on the page

### Screenshots

#### Desktop (1440px)

![Desktop screenshot](./screenshots/desktop-1440px.png)

#### Mobile (375px)

![Mobile screenshot](./screenshots/mobile-375px.png)

### Links

- Solution URL: [Frontend Mentor Solution](https://www.frontendmentor.io/solutions/intro-section-with-dropdown-navigation)
- Live Site URL: [Live Site](https://fsdev-intro-section-with-dropdown-navigation-60umnjew7.vercel.app)

## My Process

### Built With

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Responsive design with three breakpoints (mobile, tablet, desktop)
- Vanilla JavaScript
- [Vite](https://vitejs.dev/) - Build tool and dev server
- [Google Fonts](https://fonts.google.com/specimen/Epilogue) - Epilogue font family (500, 700)

### Project Structure

```
src/
├── assets/        # Images, icons, and SVG logos
├── css/
│   └── styles.css # All styles with CSS custom properties
├── js/
│   └── main.js    # Dropdown toggles and mobile menu logic
└── index.html     # Semantic HTML entry point
```

### What I Learned

**Responsive navigation patterns** — This project required implementing two distinct navigation paradigms: a horizontal dropdown nav for desktop and a slide-in sidebar for mobile. The key challenge was sharing the same HTML structure across both layouts while switching behavior entirely through CSS media queries and minimal JavaScript.

**CSS-driven dropdown menus with ARIA** — The dropdowns use `aria-expanded` attributes as CSS selectors to show/hide content, keeping the JavaScript minimal. The adjacent sibling combinator (`+`) connects the button state to the dropdown visibility:

```css
.nav__link--dropdown[aria-expanded="true"] + .dropdown {
  display: flex;
}
```

**Mobile menu with overlay and scroll lock** — The mobile sidebar uses `position: fixed` with a `transform: translateX(100%)` off-screen pattern, combined with a semi-transparent overlay. Adding `overflow: hidden` to the body prevents background scrolling while the menu is open.

**`<picture>` element for art direction** — Used the `<picture>` element with a `<source>` tag to serve different hero images for mobile and desktop, rather than hiding/showing two `<img>` elements with CSS:

```html
<picture>
  <source media="(min-width: 768px)" srcset="./assets/image-hero-desktop.png" />
  <img src="./assets/image-hero-mobile.png" alt="Person working remotely on a laptop" />
</picture>
```

**CSS custom properties for theming** — All colors, font weights, and spacing values are defined as CSS custom properties in `:root`, making the design system easy to adjust or theme:

```css
:root {
  --color-gray-50: hsl(0, 0%, 98%);
  --color-gray-500: hsl(0, 0%, 41%);
  --color-gray-950: hsl(0, 0%, 8%);
  --font-family: "Epilogue", sans-serif;
  --font-weight-medium: 500;
  --font-weight-bold: 700;
}
```

**Keyboard accessibility** — The Escape key closes both the mobile menu and any open dropdowns. Clicking outside a dropdown also dismisses it, matching user expectations for this type of UI pattern.

### Useful Resources

- [MDN: ARIA `aria-expanded`](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-expanded) - Reference for accessible dropdown patterns
- [MDN: `<picture>` element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/picture) - Art direction with responsive images
- [Vite Documentation](https://vitejs.dev/guide/) - Project setup and configuration

## Getting Started

### Prerequisites

- Node.js >= 18

### Installation

```bash
# Clone the repository
git clone https://github.com/gusanchefullstack/fsdev-intro-section-with-dropdown-navigation.git

# Navigate to the project directory
cd fsdev-intro-section-with-dropdown-navigation

# Install dependencies
npm install

# Start the development server
npm run dev
```

The site will be available at `http://localhost:5173`.

### Build for Production

```bash
npm run build
npm run preview  # Preview the production build locally
```

## Author

**Gustavo Sanchez** — Full Stack Developer

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/gustavosanchezgalarza/)
[![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/gusanchefullstack)
[![Hashnode](https://img.shields.io/badge/Hashnode-2962FF?style=for-the-badge&logo=hashnode&logoColor=white)](https://hashnode.com/@gusanchedev)
[![X](https://img.shields.io/badge/X-000000?style=for-the-badge&logo=x&logoColor=white)](https://x.com/gusanchedev)
[![Bluesky](https://img.shields.io/badge/Bluesky-0085FF?style=for-the-badge&logo=bluesky&logoColor=white)](https://bsky.app/profile/gusanchedev.bsky.social)
[![freeCodeCamp](https://img.shields.io/badge/freeCodeCamp-0A0A23?style=for-the-badge&logo=freecodecamp&logoColor=white)](https://www.freecodecamp.org/gusanchedev)
[![Frontend Mentor](https://img.shields.io/badge/Frontend%20Mentor-3F54A3?style=for-the-badge&logo=frontendmentor&logoColor=white)](https://www.frontendmentor.io/profile/gusanchefullstack)

## Acknowledgments

- Challenge design by [Frontend Mentor](https://www.frontendmentor.io)
- [Epilogue](https://fonts.google.com/specimen/Epilogue) font by Tyler Finck
