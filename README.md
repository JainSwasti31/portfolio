# Swasti Jain — Portfolio

A personal portfolio website built with **React + Vite**, showcasing projects, skills, education, and a working contact form powered by EmailJS.

---

## Live Demo

> [Deploy link here once hosted (e.g. Vercel / Netlify)](https://portfolio-rc7t.vercel.app/)

---

## Screenshots

> Add screenshots here after deployment

---

## Features

- Sticky glassmorphism header with desktop navbar and mobile hamburger menu
- Animated hero section with spinning ring profile photo
- About Me section with resume download
- Education timeline
- Technical skills grid
- Projects showcase (CivicConnect, StudySphere, DevMind AI)
- ExtraCurricular activities (Kalakrit Music Society, Placement Preparation Crew)
- FAQ accordion
- Contact form with EmailJS integration
- Fully responsive — mobile, tablet, desktop
- Dark theme with teal (`#0cf0d9`) accent

---

## Tech Stack

| Layer      | Technology                     |
|------------|-------------------------------|
| Framework  | React 19                       |
| Build Tool | Vite 7                         |
| Styling    | Plain CSS (custom properties)  |
| Icons      | FontAwesome                    |
| Email      | EmailJS (`@emailjs/browser`)   |
| Deployment | Vercel (recommended)           |

---

## Project Structure

```
src/
├── assets/                  # Images, resume PDF
├── components/
│   ├── Header/              # Sticky nav with desktop + mobile menu
│   ├── Hero/                # Animated intro section
│   ├── Aboutme/             # About + resume download
│   ├── Timeline/            # Education timeline
│   ├── Technical/           # Skills grid
│   ├── Projects/            # Project cards
│   ├── ExtraCurricular/     # Activities cards
│   ├── Faq/                 # Accordion FAQ
│   ├── Contact/             # EmailJS contact form
│   ├── Footer/              # Footer with nav + socials
│   └── Loader/              # Heart fill loader animation
├── App.jsx
├── App.css
├── index.css                # Global CSS variables + base styles
└── main.jsx
```

---

## Getting Started

### Prerequisites

- Node.js ≥ 18
- npm ≥ 9

### Installation

```bash
# Clone the repo
git clone https://github.com/JainSwasti31/swasti-portfolio.git
cd swasti-portfolio

# Install dependencies
npm install
```

### Environment Variables

Create a `.env` file in the root directory (never commit this):

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

Get these values from [https://dashboard.emailjs.com](https://dashboard.emailjs.com).

Your EmailJS template should use these variables:
- `{{user_name}}`
- `{{user_email}}`
- `{{message}}`

> **Note:** `.env` is listed in `.gitignore` and will never be committed. Use `.env.example` as a reference template.

### Run Locally

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
```

Output goes to the `dist/` folder.

### Preview Production Build

```bash
npm run preview
```

---

## Deployment (Vercel)

1. Push the repo to GitHub
2. Go to [vercel.com](https://vercel.com) → New Project → Import your repo
3. Add the three environment variables in the Vercel dashboard under **Settings → Environment Variables**
4. Deploy — Vercel auto-detects Vite

---

## Contact

**Swasti Jain**
- Email: [swasti31jain@gmail.com](mailto:swasti31jain@gmail.com)
- LinkedIn: [linkedin.com/in/swasti31jain](https://www.linkedin.com/in/swasti31jain)
- GitHub: [github.com/JainSwasti31](https://github.com/JainSwasti31)

---

## License

This project is open source and available under the [MIT License](LICENSE).
