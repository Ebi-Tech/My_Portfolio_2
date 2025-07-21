# Divine Ifechukwude – Developer Portfolio

Welcome to my personal developer portfolio! This project showcases my skills, experience, and featured projects, and provides a way to contact me directly. Built with modern web technologies, it demonstrates my proficiency in full-stack development, UI/UX, and API integration.

---

## 🚀 Live Demo

[View Portfolio on Vercel](https://my-professional-portfolio-two.vercel.app/)


---

## 🛠️ Tech Stack & Tools

- **Framework:** [Next.js 13+ (App Router)](https://nextjs.org/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/), [PostCSS](https://postcss.org/)
- **Animation:** [Framer Motion](https://www.framer.com/motion/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Email Service:** [EmailJS](https://www.emailjs.com/)
- **Deployment:** [Vercel](https://vercel.com/)

---

## 🌟 Features

- **Hero Section:** Eye-catching introduction with smooth animations
- **About Me:** Brief background, skills, and interests
- **Experience:** Timeline of professional and educational experience
- **Featured Projects:**
  - Fetches pinned repositories from GitHub using the GitHub GraphQL API
  - Displays project details, languages, stars, and links
- **GitHub Activity:**
  - Shows real-time stats (followers, repos, stars) using the GitHub REST API
  - Lists recent/popular repositories
- **Skills:** Visual showcase of technical proficiencies
- **Contact Form:**
  - Users can send messages directly to your email via EmailJS
  - Form validation and user feedback
- **Responsive Design:** Looks great on all devices

---

## 🧑‍💻 Skills Demonstrated

- React & Next.js (App Router, SSR/SSG)
- TypeScript for type-safe development
- Advanced CSS with Tailwind
- Responsive and accessible UI/UX
- Animation with Framer Motion
- API integration (REST & GraphQL)
- Environment variable management (for API keys)
- Deployment and CI/CD with Vercel

---

## 🔗 API Integrations

- **GitHub GraphQL API**
  - Used to fetch pinned repositories for the "Featured Projects" section
  - Requires a GitHub personal access token (`GITHUB_GRAPHQL_TOKEN`)
- **GitHub REST API**
  - Used for general GitHub stats and recent repositories
  - No authentication required (public endpoints)
- **EmailJS**
  - Handles contact form submissions and sends emails directly to your inbox
  - Uses EmailJS public key, service ID, and template ID

---

## ⚙️ Setup & Development

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/your-portfolio.git
   cd your-portfolio/portfolio
   ```
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Configure environment variables:**
   - Create a `.env.local` file in the `portfolio` directory
   - Add your GitHub token:
     ```env
     GITHUB_GRAPHQL_TOKEN=your_github_token_here
     ```
   - (EmailJS credentials are set in the code, but you can move them to env variables for security)
4. **Run the development server:**
   ```bash
   npm run dev
   ```
5. **Open [http://localhost:3000](http://localhost:3000) to view it in your browser.**

---

## 🚀 Deployment

- **Vercel:**
  - Push your changes to GitHub
  - Connect your repo to Vercel
  - Add `GITHUB_GRAPHQL_TOKEN` in Vercel's Environment Variables settings
  - Deploy!

---

## 📫 Contact

Feel free to reach out via the contact form on the site, or connect with me on [LinkedIn](https://www.linkedin.com/in/ebitech14/) or [GitHub](https://github.com/Ebi-Tech).

---

## 📝 License

This project is open source and available under the [MIT License](LICENSE).
