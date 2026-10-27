# README Structure Guidelines — DayByFit Style

Create a professional GitHub README in Markdown, following the same structure, visual style, and level of technical detail as the DayByFit README.

The README should be written in English, use clear technical language, and present the project as a professional portfolio piece. Adapt every section to the actual project. Do not invent features, technologies, architecture decisions, or implementation details.

## 1. Centered Header

Use a centered `<div align="center">` containing:

- A project-specific emoji and project name as the main heading (`#`).
- A short, descriptive tagline explaining what the application does.
- A prominent Live Demo link.
- Relevant technology badges using shields.io.

If appropriate, include a link to another language version of the README.

If the project was developed with AI assistance, optionally include a short, transparent disclosure with a link to a dedicated section explaining the development workflow.

## 2. Hero Screenshot

Directly after the header, add a horizontal separator (`---`) and a centered hero image.

Use an image from the project's existing `docs/` directory:

```html
<p align="center">
  <img src="docs/hero.png" alt="Project overview" width="100%" />
</p>
```

Use the actual filename and extension. Do not assume that the file is named `hero.png`.

## 3. Screenshots

Create a `## 📸 Screenshots` section using an HTML table.

- Arrange screenshots in rows of 3–4 columns, depending on the number of images.
- Use relative paths to images in the repository.
- Give every screenshot a descriptive `alt` attribute.
- Add a bold feature name and a short explanation below each image using `<sub>`.
- Choose screenshots that demonstrate distinct features or pages.
- Keep the layout compact and consistent.

Example:

```html
<table>
  <tr>
    <td align="center" width="33%">
      <img src="docs/dashboard.png" alt="Dashboard" width="100%" />
      <br /><sub><b>Dashboard</b><br />Overview of user activity</sub>
    </td>
    <td align="center" width="33%">
      <img src="docs/settings.png" alt="Settings" width="100%" />
      <br /><sub><b>Settings</b><br />Personalize your experience</sub>
    </td>
    <td align="center" width="33%">
      <img src="docs/profile.png" alt="Profile" width="100%" />
      <br /><sub><b>Profile</b><br />Manage account details</sub>
    </td>
  </tr>
</table>
```

Use only screenshots that actually exist in the project. Never invent image paths.

## 4. Features

Use the heading `## ✨ Features`.

Group functionality into meaningful bold subsections instead of presenting one long list.

For example:

- **Core functionality**
- **User experience**
- **Authentication and accounts**
- **Analytics and insights**
- **AI features**
- **Offline support**

Select subsection names based on the actual project.

Describe concrete user-facing capabilities. Explain what users can do, how important interactions work, and what distinguishes the application.

Avoid generic claims such as "modern design" or "high performance" unless supported by specific implementation details.

## 5. Tech Stack

Use the heading `## 🧱 Tech stack`.

Present the technologies in a Markdown table with two columns: `Area` and `Tools`.

Group technologies by their actual responsibilities, such as:

- Frontend
- Routing
- Styling
- State management
- Internationalization
- Backend
- Database
- Authentication
- External APIs
- Testing
- Hosting and deployment

Include only technologies actually used in the project. Do not list a technology simply because it is common in similar applications.

## 6. Architecture Highlights

Use the heading `## 🏗️ Architecture highlights`.

Explain the most important technical decisions and implementation details.

Depending on the project, cover:

- Component and module organization.
- Data flow and state management.
- Reusable hooks and utilities.
- API integration and error handling.
- Authentication and authorization.
- Database structure and access policies.
- Security and handling of secrets.
- Offline persistence and synchronization.
- Performance optimizations and code splitting.
- Serverless functions and background processing.

Explain both **what was implemented and why it matters**.

Prefer specific technical explanations over vague statements. Use inline code for relevant filenames, functions, hooks, routes, database tables, and configuration values.

Include only architecture details verified from the codebase or reliable project documentation.

## 7. Getting Started

Use the heading `## 🚀 Getting started`.

Specify the actual prerequisites, such as Node.js, npm, a database project, or API credentials.

Provide the commands required to clone and install the project:

```bash
git clone YOUR_ACTUAL_REPOSITORY_URL
cd YOUR_ACTUAL_PROJECT_DIRECTORY
npm install
```

Then explain how to configure environment variables and run the application locally:

```bash
npm run dev
```

Adapt the commands to the actual package scripts and backend setup.

### Environment Variables

Show the required variable names in an `env` code block with empty values or safe placeholders.

Never include real API keys, passwords, access tokens, or production secrets.

Clearly distinguish client-side environment variables from server-only secrets.

### Database Setup

Include this subsection only when relevant.

Explain how to initialize the database, apply migrations or SQL schemas, configure access policies, and deploy backend functions.

Reference existing files in the repository instead of duplicating large configuration files.

## 8. Project Structure

Use the heading `## 📁 Project structure` when it adds value.

Show a concise directory tree illustrating the main application folders and their responsibilities.

Verify the directory names and important files against the actual repository. Do not present an assumed structure as fact.

## 9. Additional Technical Sections

Add specialized sections only when they are relevant to the project.

Examples:

- **AI-assisted development** — explain the developer's role, how AI was used, and how changes were reviewed and tested.
- **Design approach** — describe the visual system and UX decisions.
- **Security** — document important security boundaries.
- **Known limitations** — disclose meaningful limitations.
- **Deployment** — explain production hosting and configuration.

Avoid adding empty or repetitive sections merely to match another repository.

## 10. Author

Finish with a `## 👤 Author` section.

Include:

- GitHub username or author name.
- Professional role, if appropriate.
- Location, if the author wants to disclose it.
- GitHub profile link.
- Live demo link.

Use concise, professional formatting.

## Formatting and Quality Rules

- Use English throughout the README unless a different language is requested.
- Use the DayByFit visual style: centered header, badges, screenshots, emoji section headings, Markdown tables, horizontal separators, and code blocks.
- Keep paragraphs concise and technical.
- Use consistent heading hierarchy.
- Make relative image paths work on GitHub.
- Use actual repository URLs, filenames, dependencies, environment variable names, and npm scripts.
- Never fabricate features, metrics, performance results, security guarantees, or technologies.
- Preserve important technical details from the source README.
- Prioritize clarity, credibility, and usefulness to recruiters and developers reviewing the repository.

Before writing the README, inspect the available project description, source files, `package.json`, configuration files, database schema, and existing screenshots whenever possible. If some details cannot be verified, omit them or explicitly mark them as requiring confirmation.
