<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://user-images.githubusercontent.com/9113740/201498864-2a900c64-d88f-4ed4-b5cf-770bcb57e1f5.png">
  <source media="(prefers-color-scheme: light)" srcset="https://user-images.githubusercontent.com/9113740/201498152-b171abb8-9225-487a-821c-6ff49ee48579.png">
</picture>

<div align="center"><strong>Admin Dashboard With Shadcn-ui</strong></div>
<div align="center">Built with the Next.js 15 App Router</div>
<br />
<div align="center">
<a href="https://lokeshpuma.github.io/Admin_Dashboard">View Live Demo</a>
<span> | </span>
<a href="https://github.com/lokeshpuma/Admin_Dashboard">View GitHub Repository</a>
</div>

## Overview

A modern admin dashboard built with the following stack:

- Framework - [Next.js 15](https://nextjs.org/13)
- Language - [TypeScript](https://www.typescriptlang.org)
- Styling - [Tailwind CSS](https://tailwindcss.com)
- Components - [Shadcn-ui](https://ui.shadcn.com)
- Schema Validations - [Zod](https://zod.dev)
- State Management - [Zustand](https://zustand-demo.pmnd.rs)
- Search params state manager - [Nuqs](https://nuqs.47ng.com/)
- Auth - [Auth.js](https://authjs.dev/)
- Tables - [Tanstack Tables](https://ui.shadcn.com/docs/components/data-table)
- Forms - [React Hook Form](https://ui.shadcn.com/docs/components/form)
- Command+k interface - [kbar](https://kbar.vercel.app/)
- Linting - [ESLint](https://eslint.org)
- Pre-commit Hooks - [Husky](https://typicode.github.io/husky/)
- Formatting - [Prettier](https://prettier.io)

## Pages

| Pages                                                                                      | Specifications                                                                                                                                                 |
| :----------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Signup](https://lokeshpuma.github.io/Admin_Dashboard/)                                   | Authentication with **NextAuth** supports Social logins and email logins (Enter dummy email for demo).                                                         |
| [Dashboard (Overview)](https://lokeshpuma.github.io/Admin_Dashboard/dashboard)             | Cards with recharts graphs for analytics.Parallel routes in the overview sections with independent loading, error handling, and isolated component rendering . |
| [Product](https://lokeshpuma.github.io/Admin_Dashboard/dashboard/product)                  | Tanstack tables with server side searching, filter, pagination by Nuqs which is a Type-safe search params state manager in nextjs                              |
| [Product/new](https://lokeshpuma.github.io/Admin_Dashboard/dashboard/product/new)          | A Product Form with shadcn form (react-hook-form + zod).                                                                                                       |
| [Profile](https://lokeshpuma.github.io/Admin_Dashboard/dashboard/profile)                  | Mutistep dynamic forms using react-hook-form and zod for form validation.                                                                                      |
| [Kanban Board](https://lokeshpuma.github.io/Admin_Dashboard/dashboard/kanban)              | A Drag n Drop task management board with dnd-kit and zustand to persist state locally.                                                                         |
| [Not Found](https://lokeshpuma.github.io/Admin_Dashboard/dashboard/notfound)               | Not Found Page Added in the root level                                                                                                                         |
| -                                                                                          | -                                                                                                                                                              |

## Feature based organization

```plaintext
src/
├── app/ # Next.js App Router directory
│ ├── (auth)/ # Auth route group
│ │ ├── (signin)/
│ ├── (dashboard)/ # Dashboard route group
│ │ ├── layout.tsx
│ │ ├── loading.tsx
│ │ └── page.tsx
│ └── api/ # API routes
│
├── components/ # Shared components
│ ├── ui/ # UI components (buttons, inputs, etc.)
│ └── layout/ # Layout components (header, sidebar, etc.)
│
├── features/ # Feature-based modules
│ ├── feature/
│ │ ├── components/ # Feature-specific components
│ │ ├── actions/ # Server actions
│ │ ├── schemas/ # Form validation schemas
│ │ └── utils/ # Feature-specific utilities
│ │
├── lib/ # Core utilities and configurations
│ ├── auth/ # Auth configuration
│ ├── db/ # Database utilities
│ └── utils/ # Shared utilities
│
├── hooks/ # Custom hooks
│ └── use-debounce.ts
│
├── stores/ # Zustand stores
│ └── dashboard-store.ts
│
└── types/ # TypeScript types
└── index.ts
```

## Getting Started

> [!NOTE]  
> We are using **Next 15** with **React 19**, follow these steps:

Clone the repo:

```
git clone https://github.com/lokeshpuma/Admin_Dashboard.git
```

- `pnpm install` ( we have legacy-peer-deps=true added in the .npmrc)
- Create a `.env.local` file by copying the example environment file:
  `cp env.example.txt .env.local`
- Add the required environment variables to the `.env.local` file.
- `pnpm run dev`

You should now be able to access the application at http://localhost:3000.

## GitHub Pages Deployment

This project is configured for deployment to GitHub Pages.

### Prerequisites

- Install `gh-pages` package:
  ```bash
  npm install gh-pages --save-dev
  ```

### Deployment Steps

1. Make sure your `package.json` has the correct configuration:
   ```json
   {
     "name": "admin-dashboard",
     "homepage": "https://lokeshpuma.github.io/Admin_Dashboard",
     "scripts": {
       "predeploy": "next build",
       "deploy": "next build && npx gh-pages -d out"
     }
   }
   ```

2. Build and deploy to GitHub Pages:
   ```bash
   npm run deploy
   ```

3. Configure GitHub Pages:
   - Go to your repository on GitHub
   - Navigate to Settings > Pages
   - Under "Source", select "gh-pages" branch
   - Click Save

### Manual GitHub Pages Setup

If you prefer to deploy manually:

```bash
# Build the project
npm run build

# The output will be in the 'out' directory

# Push to gh-pages branch
npx gh-pages -d out
```

> [!WARNING]
> After cloning or forking the repository, be cautious when pulling or syncing with the latest changes, as this may result in breaking conflicts.

Cheers! 🥂
