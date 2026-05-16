# Project Guidelines

## Source Structure

- `src/App.tsx` is the main application component.
- `src/components/` contains application components.
- `src/components/ui/` contains reusable UI primitives.
- `src/components/figma/` contains Figma-specific utilities and notes.
- `src/imports/` contains static imported assets.
- `src/styles/` contains global CSS, Tailwind imports, fonts, and theme tokens.

## Component Organization

Keep feature components close to the main app under `src/components`.
Use the `ui` folder for generic controls that can be reused across features.
