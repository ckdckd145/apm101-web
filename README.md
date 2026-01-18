# APM101 Landing Page

Professional, scientific, and responsive landing page for the APM101 AI solution.
Built with **Next.js 15 (App Router)** and **Tailwind CSS**.

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ installed.

### Installation & Run
1. Install dependencies:
   ```bash
   npm install
   ```
2. Run the development server:
   ```bash
   npm run dev
   ```
3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Asset Management & content

### 1. Dynamic Images & Videos
The project automatically scans the `reference/` folder for images (`.png`, `.jpg`) and videos (`.mp4`) and syncs them to the public assets folder.

- **To add/replace an image**: Simply drop a file into the `reference/` folder.
- **Auto-Sync**: The sync script runs automatically when you run `npm run dev` or `npm run build`.

### 2. Legal Documents (Privacy & Terms)
The site dynamically loads Markdown files from the `reference/` folder for the "Privacy Policy" and "Terms of Service" pages.

- **File Naming**: The system uses keyword matching to find the correct file.
  - **Privacy Policy**: Looks for filenames containing `privacy`, `개인정보`, `policy`.
  - **Terms**: Looks for filenames containing `terms`, `이용약관`.
- **How to Update**: Just edit or replace the `.md` files in `reference/`. No code changes required.
- **Security**: Links in these documents automatically open in new tabs (`target="_blank"`) with security attributes.

### 3. Text & Config
All static text (Hero title, Features list, etc.) is managed in `src/config/siteConfig.ts`.
Edit this file to change the website copy without touching the UI components.

## 🛠 Features

- **Responsive Design**: Optimized for Desktop (1440px) and Mobile (375px).
- **Asset Fallback**: If an image (e.g., `hero_video.mp4`) is missing in `reference/`, a styled placeholder is shown instead.
- **Markdown Security**: Sanitized rendering preventing XSS, with secure external links.
- **Next.js App Router**: Server Components for optimal performance.

## 🏗 Project Structure

- `reference/`: Drop your raw assets and markdown files here.
- `src/app/`: Next.js App Router pages (`page.tsx`, `layout.tsx`).
- `src/components/`: Reusable UI components (`Hero`, `Features`, `MarkdownViewer`).
- `src/config/`: Configuration files (`siteConfig.ts`).
- `scripts/`: Utility scripts (asset syncing).
