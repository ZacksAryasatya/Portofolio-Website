# Zaky Aryasatya Adinata - Portfolio

A modern, responsive, and high-performance portfolio website for a Frontend Developer, built with Vite, React 19, TypeScript, and Tailwind CSS v4.

## Tech Stack

- **Framework:** React 19 + TypeScript
- **Bundler:** Vite
- **Styling:** Tailwind CSS v4
- **Routing:** React Router v7
- **Animation:** Motion (Framer Motion)
- **Icons:** Lucide React
- **Forms:** React Hook Form + Zod + EmailJS
- **Linting/Formatting:** ESLint + Prettier
- **Testing:** Vitest + React Testing Library

## Setup Instructions

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure Environment Variables:**
   Copy the example env file and add your EmailJS credentials to make the contact form work:
   ```bash
   cp .env.example .env
   ```

4. **Start Development Server:**
   ```bash
   npm run dev
   ```

## Available Scripts

- `npm run dev` - Starts the local development server.
- `npm run build` - Builds the app for production to the `dist` folder.
- `npm run lint` - Runs ESLint to check code quality.
- `npm run format` - Runs Prettier to format code.
- `npm run test` - Runs the Vitest test suite.
- `npm run preview` - Serves the production build locally.

## Deployment

This project is configured to be deployed easily to platforms like Vercel or Netlify. 
Simply connect your GitHub repository and set the build command to `npm run build` and the output directory to `dist`. Remember to set your environment variables on the hosting platform.


See the [Oxlint rules documentation](https://oxc.rs/docs/guide/usage/linter/rules) for the full list of rules and categories.
