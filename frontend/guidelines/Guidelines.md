# Project Guidelines

## Source Structure

- `src/app/App.tsx` is the main application component.
- `src/app/components/` contains application components.
- `src/app/components/ui/` contains reusable UI primitives.
- `src/app/components/figma/` contains Figma-specific utilities and notes.
- `src/imports/` contains static imported assets.
- `src/styles/` contains global CSS, Tailwind imports, fonts, and theme tokens.

## Component Organization

Keep feature components close to the main app under `src/app/components`.
Use the `ui` folder for generic controls that can be reused across features.
