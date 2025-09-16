# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

**Development:**
```bash
npm run dev        # Start Next.js development server on http://localhost:3000
npm run build      # Build the application for production
npm run start      # Start Next.js production server
npm run lint       # Run Next.js linting
```

## Architecture

This is a Next.js 15 landing page application for "Pocket", built with:
- **Next.js 15** with App Router
- **React 19**
- **TypeScript** with strict mode enabled
- **Tailwind CSS v4** with @tailwindcss/postcss
- **Framer Motion** for animations
- **Headless UI** for accessible UI components

### Project Structure

- **Route Groups**: Uses Next.js route groups for organization:
  - `(main)` - Main marketing pages
  - `(auth)` - Authentication pages (login, register)

- **Component Architecture**: Modular React components in `/src/components/` including:
  - Landing page sections (Hero, PrimaryFeatures, SecondaryFeatures, Pricing, etc.)
  - Reusable UI components (Button, Container, Fields, etc.)
  - Layout components (Header, Footer, AuthLayout)

### Key Configuration

- **Path Alias**: `@/` maps to `./src/` directory
- **Prettier**: Configured with single quotes, no semicolons, and Tailwind CSS plugin
- **TypeScript**: Strict mode with ES6 target

## Notes

This is a commercial Tailwind Plus template licensed under the Tailwind Plus license.