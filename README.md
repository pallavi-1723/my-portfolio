# Pallavi Kumari - Portfolio

React + Vite + Tailwind CSS, frontend only. No backend, database or API keys needed.

## 1. Run it locally

You need Node.js 18 or newer (https://nodejs.org).

```bash
cd pallavi-portfolio
npm install
npm run dev
```

Open the address it prints (usually http://localhost:5173).

## 2. Build and deploy

```bash
npm run build      # creates the dist/ folder
npm run preview    # optional: test the production build locally
```

Easiest hosts (all free for a site like this):

- **Netlify**: drag the `dist` folder onto https://app.netlify.com/drop, or connect your GitHub repo (build command `npm run build`, publish directory `dist`).
- **Vercel**: import the GitHub repo at https://vercel.com/new. Vite is detected automatically.
- **GitHub Pages**: build, then publish the contents of `dist` (for example with the `gh-pages` package or a GitHub Actions workflow). The build uses relative paths, so it works under a sub-path.

If you use a `.env` file (see section 6), also add those variables in your host's settings (Netlify: Site settings > Environment variables; Vercel: Project settings > Environment Variables), then redeploy.

## 3. Folder structure

```
pallavi-portfolio/
  index.html                 page title, description, fonts, favicon
  package.json               dependencies and scripts
  vite.config.js, tailwind.config.js, postcss.config.js
  .env.example               optional settings (Streamlit URL, form endpoint)
  public/
    favicon.svg              replace with your own icon if you like
    resume/Pallavi-Kumari-Resume.pdf   your resume
  src/
    data/portfolio.js        THE file you edit: all content lives here
    assets/profile.jpg       your photo
    components/              Navbar, Hero, About, Skills, Projects, ProjectCard,
                             Journey, Resume, Contact, Footer, Section, icons
    hooks/                   useTheme (light/dark), useActiveSection (nav highlight)
    utils/helpers.js         asset paths and URL validation
    index.css                colours (light and dark) and base styles
```

## 4. Everyday edits (all in `src/data/portfolio.js` unless noted)

**Replace your resume.** Overwrite `public/resume/Pallavi-Kumari-Resume.pdf` with the new PDF, keeping the same filename. Download and View buttons update automatically. If you want a different filename, change `resume.file` and `resume.downloadName` in the data file.

**Change your photo.** Overwrite `src/assets/profile.jpg` (keep the name), ideally a square-ish image around 900px wide. Update `profile.photoAlt` so the description matches.

**Add a skill.** Add its name to the right `items` list in `skills`. To add a category, add a new object: `{ category: 'Backend', items: ['Node.js'] }`. Move things out of "Currently Learning" once you are comfortable using them.

**Add a project.** Copy an object in `projects` (there is a commented template for the AI Interview Assistant) and edit it:

```js
{
  name: 'Weather App',
  description: 'One or two honest sentences about what it does.',
  tags: ['React', 'Tailwind CSS'],
  image: null,          // or a screenshot, see below
  github: 'https://github.com/pallavi-1723/weather-app',
  liveUrl: '',          // leave empty until it is deployed
  status: 'In progress', // 'Completed' | 'In progress' | 'Planned'
  featured: true,       // false = compact row under "Smaller projects"
}
```

**Add a project screenshot.** Put the image in `src/assets/projects/`, import it at the top of `portfolio.js` (`import weatherShot from '../assets/projects/weather.png'`), and set `image: weatherShot`. Without an image, the card shows the project's initials.

**Add a milestone.** Add an object to `journey` in time order. `status` is `'done'`, `'current'` or `'planned'`, and each is labelled clearly on the page. When a goal is reached, change `'planned'` to `'done'`.

**Add a certificate or internship.** Add to `certificates` (optional `link` for a verification URL) or `experience`.

**Add a blog or coding profile later.** Add the URL to `social` (for example `leetcode`), then show it in `Hero.jsx`, `Contact.jsx` and `Footer.jsx` by copying one of the existing link blocks. For a blog, create `src/components/Blog.jsx`, import it in `App.jsx`, and add `{ label: 'Blog', href: '#blog' }` to `navLinks`.

**Connect APIs or a backend later.** Keep API calls in a new `src/services/` folder and use environment variables for URLs (`VITE_...`). Anything in frontend code is public, so never put secret keys in it. Secrets belong on a server.

## 5. Contact form

The site has no server, so by default the form's button opens the visitor's email app with the message filled in and says so on the page. It does not pretend to send anything.

To receive messages directly, create a free form endpoint (for example at https://formspree.io), copy its URL into `VITE_FORM_ENDPOINT` in `.env`, and redeploy. The button then reads "Send message" and posts to that service. The endpoint URL is public by design, which is fine; never put private API keys here.

## 6. Connect your deployed Streamlit AI Resume Analyser

Your Streamlit app and this portfolio stay separate projects. The portfolio only needs the app's public URL.

1. **Prepare the Streamlit repo.** Push it to GitHub with your main file (for example `app.py`) and a `requirements.txt` listing every package it imports.
2. **Deploy on Streamlit Community Cloud.** Sign in at https://share.streamlit.io with GitHub, choose New app, pick the repository, branch and main file, then Deploy. If the app needs API keys, add them under Advanced settings > Secrets in Streamlit. Never commit them.
3. **Copy the public URL** when the deploy finishes. It looks like `https://your-app-name.streamlit.app`. Open it in a private window to confirm it works for visitors.
4. **Put the URL in the portfolio.** Either:
   - copy `.env.example` to `.env` and set `VITE_RESUME_ANALYSER_URL=https://your-app-name.streamlit.app`, or
   - paste the URL straight into `liveUrl` for AI Resume Analyser in `portfolio.js`.
5. **Add the repo link** by setting `github` on the same project.
6. **Rebuild and redeploy.** The Live Demo button appears only when the URL is a valid http(s) address. With the field empty, the button stays hidden.

Notes:
- Free Streamlit apps go to sleep when unused, so the first visit can take a little while to wake up. Mention this to recruiters or open the link yourself before an interview.
- **Embedding later (optional):** you could show the app inside the portfolio with an `<iframe src="https://your-app-name.streamlit.app/?embed=true">`. Whether that works depends on the host: Streamlit Community Cloud supports embedding, but a host that sends `X-Frame-Options` or a `frame-ancestors` Content-Security-Policy header will block it, and some browsers restrict third-party cookies and storage inside iframes. Check Streamlit's current embedding documentation before relying on it. A plain "Live Demo" link that opens a new tab is the more reliable choice and is what this site uses.

## 7. What is deliberately not on the site

- Your phone number (it is on your resume PDF, but is not displayed on the page). Add it to the Contact section only if you want it public.
- Any skill percentages, ratings, testimonials or counters.
- Any link that does not exist yet: the AI Resume Analyser has no repo or live link until you add them.
