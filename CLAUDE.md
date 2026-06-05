# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a React 19 + Vite frontend project for infrastructure services landing page. It uses:
- **React 19** with Vite for build tooling
- **framer-motion** for animations
- **Flat ESLint config** with react-hooks and react-refresh plugins
- **GitHub Pages** deployment with custom domain (infra.jetimworks.com)

## Common Commands

```bash
npm run dev      # Start dev server on port 7777
npm run build    # Build to docs/ folder
npm run lint     # Run ESLint
npm run preview  # Preview production build locally
```

## Architecture

- **Entry point**: `src/main.jsx` renders `src/App.jsx`
- **Components**: `src/components/` — Header, Hero, Services, Pricing, About, ContactSection, Footer
- **Build output**: `docs/` (configured for GitHub Pages deployment)
- **Static assets**: `public/` directory served as-is
- **Vite config**: `vite.config.js` sets base path and output directory

## Key Configuration

- `base: '/'` in vite.config.js (currently serves from root)
- Build outputs to `docs/` folder with `.nojekyll` and `CNAME` for GitHub Pages
- Dev server runs on port 7777

## Deployment Workflow

Always run `npm run build` before pushing. The `docs/` folder contains the built static files and must be committed along with any source changes before pushing to origin.