# Frontend Mentor - Officelite coming soon site solution

This is a solution to the [Officelite coming soon site challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/officelite-coming-soon-site-M4DIPNz8g).

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshots](#screenshots)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [AI Collaboration](#ai-collaboration)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- See error states when the contact form is submitted if:
  - The `Name` and/or `Email Address` fields are empty
  - The `Email Address` is not formatted correctly
- **Bonus**: See a live countdown timer that ticks down every second
- **Bonus**: See a custom-styled `select` form control in the sign-up form

### Screenshots

#### Home — Desktop (1440px)
![Home desktop](./screenshots/home-desktop-1440.png)

#### Home — Mobile (375px)
![Home mobile](./screenshots/home-mobile-375.png)

#### Sign-up — Desktop (1440px)
![Sign-up desktop](./screenshots/signup-desktop-1440.png)

#### Sign-up — Mobile (375px)
![Sign-up mobile](./screenshots/signup-mobile-375.png)

### Links

- Solution URL: _TBD_
- Live Site URL: _TBD_

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties (design tokens)
- CSS Grid & Flexbox
- Vanilla JavaScript (ES modules)
- Mobile-first responsive workflow
- [Vite](https://vitejs.dev/) — dev server & build tool

### What I learned

- Design tokens (colors, typography, spacing, radius) live in `_tokens.css` as CSS variables — a single source of truth that makes theme tweaks trivial.
- A 30-day launch countdown is persisted in `localStorage`, so the timer survives reloads.
- A light-weight custom `<select>` using a native element + background-image arrow keeps accessibility and minimal JS.

### AI Collaboration

Built with Claude Code (Anthropic) assistance: design tokens and component structure extracted from the Figma file via the Figma MCP server; markup, CSS and JS authored with pair-programming assistance; responsive tuning and commit breakdown planned collaboratively.

## Author

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?logo=linkedin&logoColor=white)](https://www.linkedin.com/in/gustavosanchezgalarza/)
[![GitHub](https://img.shields.io/badge/GitHub-181717?logo=github&logoColor=white)](https://github.com/gusanchefullstack)
[![Hashnode](https://img.shields.io/badge/Hashnode-2962FF?logo=hashnode&logoColor=white)](https://hashnode.com/@gusanchedev)
[![X](https://img.shields.io/badge/X-000000?logo=x&logoColor=white)](https://x.com/gusanchedev)
[![Bluesky](https://img.shields.io/badge/Bluesky-0285FF?logo=bluesky&logoColor=white)](https://bsky.app/profile/gusanchedev.bsky.social)
[![freeCodeCamp](https://img.shields.io/badge/freeCodeCamp-0A0A23?logo=freecodecamp&logoColor=white)](https://www.freecodecamp.org/gusanchedev)
[![Frontend Mentor](https://img.shields.io/badge/Frontend%20Mentor-3F54A3?logo=frontendmentor&logoColor=white)](https://www.frontendmentor.io/profile/gusanchefullstack)
