# SpinbitZ Site Architecture

## Overview
The SpinbitZ site is built using the FRAOP (Functional Reactive Aspect-Oriented Programming) architecture. This document outlines the folder structure and key components.

## Folder Structure
- **src/**
  - **fraop/** - Core FRAOP architecture files
    - **App.tsx** - Main app entry point and routing
    - **__tests__/** - Tests for FRAOP components
  - **components/** - Reusable UI components
  - **streams/** - Reactive streams for state management
  - **state/** - State management logic
  - **pages/** - Page components (e.g., Home, NotFound)
  - **constants/** - Global constants (e.g., UI strings)
  - **test/** - Test setup and utilities

## Key Components
- **App.tsx**: Sets up routing and renders the main app structure.
- **PageTemplate**: A reusable layout component for all pages.
- **NotFound**: A fallback page for invalid routes.

## Testing
- Tests are written using Vitest and React Testing Library.
- All new code is covered by tests to ensure reliability.

## Next Steps
- Update documentation as the project evolves.
- Add more detailed component and stream documentation. 