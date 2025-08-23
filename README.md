# Regulus Investment - Website

This is the repository for the official website of Regulus Investment. The project is built using modern web technologies like Vite, React, and Tailwind CSS, and is hosted on GitHub Pages.

## Live Demo

**[View the live site](https://Osmestrasmesnica.github.io/regulus-investment/)**

## Key Features

*   **Fully Responsive Design** that adapts to all devices, from mobile phones to desktop computers.
*   **Modern UI Components** built with Radix UI and styled with Tailwind CSS, inspired by `shadcn/ui`.
*   **Newsletter Signup** integrated with the MailerLite service to manage subscribers.
*   **Client-Side Form Validation** for an improved user experience.
*   **Fast Performance** thanks to the Vite build tool.
*   **Clean Navigation** implemented with `react-router-dom`.

## Tech Stack

*   **Framework:** [React 19](https://react.dev/)
*   **Build Tool:** [Vite](https://vitejs.dev/)
*   **Language:** [TypeScript](https://www.typescriptlang.org/)
*   **Styling:** [Tailwind CSS 4](https://tailwindcss.com/)
*   **UI Components:** [Radix UI](https://www.radix-ui.com/)
*   **Routing:** [React Router](https://reactrouter.com/)
*   **Newsletter Integration:** [MailerLite](https://www.mailerlite.com/)
*   **Deployment:** [GitHub Pages](https://pages.github.com/)

## Running the Project Locally

To run this project on your local machine, follow these steps:

**1. Clone the repository:**
```bash
git clone https://github.com/Osmestrasmesnica/regulus-investment.git
cd regulus-investment
```

**2. Install dependencies:**
```bash
npm install
```

**3. Set up environment variables:**

Create a `.env.local` file in the project root. This file is included in `.gitignore` and will not be committed. You need to add your MailerLite variables here.

Create the file `.env.local` and paste the following content, replacing the placeholder values with your actual credentials:
```
# .env.local

# The URL obtained from the MailerLite HTML form (action attribute)
VITE_MAILERLITE_ACTION_URL="YOUR_MAILERLITE_ACTION_URL"

# The ID of the group to which subscribers are added (found in the HTML form)
VITE_MAILERLITE_GROUP_ID="YOUR_MAILERLITE_GROUP_ID"
```

**4. Start the development server:**
```bash
npm run dev
```
The application will be available at `http://localhost:5173`.

## Available Scripts

*   `npm run dev` - Runs the app in development mode.
*   `npm run build` - Builds the app for production to the `dist` folder.
*   `npm run preview` - Starts a local server to preview the production build.
*   `npm run deploy` - Builds the project and deploys it to GitHub Pages.

## Deployment to GitHub Pages

The deployment process to GitHub Pages is handled manually from your local machine.

**1. Commit your changes**

First, add all your changes to Git and create a commit. Use a meaningful message.

```bash
git add .
git commit -m "feat: add new services section"
git push origin main
```

**2. Deploy to GitHub Pages**

After your changes have been pushed to the `main` branch, run the deploy script.

```bash
npm run deploy
```

This command will automatically build the project and push the contents of the `dist` folder to the `gh-pages` branch, which will update the live site.