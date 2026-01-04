# Project Overview

This project is a portfolio builder that automatically generates a personal portfolio website from a user's GitHub profile. It is built using **React**, **Vite**, and **Tailwind CSS**. The portfolio is highly customizable through a single configuration file, `gitprofile.config.ts`.

## Key Technologies

*   **Frontend:** React, TypeScript
*   **Build Tool:** Vite
*   **Styling:** Tailwind CSS, DaisyUI
*   **Linting:** ESLint, Prettier

## Architecture

The application is structured as a single-page application (SPA).

*   `index.html`: The main entry point of the application.
*   `src/main.tsx`: Renders the main `GitProfile` React component.
*   `gitprofile.config.ts`: A configuration file that allows users to customize their portfolio content, including social media links, projects, skills, and themes.
*   `src/components/gitprofile.tsx`: The main React component that fetches data from the GitHub API, processes the configuration, and renders the portfolio.
*   `src/components/*`: The application is divided into several smaller components, each responsible for rendering a specific section of the portfolio, such as the avatar, skills, experience, and projects.

# Building and Running

## Installation

1.  Clone the repository:
    ```bash
    git clone https://github.com/arifszn/gitprofile.git
    ```
2.  Install dependencies:
    ```bash
    npm install
    ```

## Development

To start the development server, run:

```bash
npm run dev
```

This will start the Vite development server and open the application in your browser at `http://localhost:5173/gitprofile/`.

## Building for Production

To build the application for production, run:

```bash
npm run build
```

This will create a `dist` directory with the optimized and minified production build.

## Linting

To lint the code, run:

```bash
npm run lint
```

# Development Conventions

## Coding Style

The project uses **ESLint** and **Prettier** to enforce a consistent coding style. Before committing any changes, it is recommended to run the linter to ensure that your code adheres to the project's style guidelines.

## Testing

The project does not currently have a dedicated testing setup.

## Contribution Guidelines

To contribute to the project, please refer to the `CONTRIBUTING.md` file.
