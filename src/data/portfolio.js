// =============================================================================
//  portfolio.js  -  the ONE file you edit to update your site.
//  Everything shown on the page comes from here. Facts below come from your
//  resume. Anything marked TODO is something only you can fill in.
// =============================================================================
import profileImage from '../assets/profile.jpg'
import { asset } from '../utils/helpers'

// ---------------------------------------------------------------- Personal ----
export const profile = {
  name: 'Pallavi Kumari',
  headline: 'Aspiring Software Developer | Frontend Development | Exploring AI',
  location: 'Katihar, Bihar, India',
  email: 'pallavipoddar17@gmail.com',
  openTo: 'Open to entry-level Software Developer, Graduate Trainee and IT roles.',
  // To change your photo: replace src/assets/profile.jpg (same filename), or import a new file above.
  photo: profileImage,
  photoAlt: 'Portrait of Pallavi Kumari smiling, with long dark hair, wearing a black sweater',
  // Short intro used in the hero.
  intro:
    'I am a BCA graduate who builds small, practical projects in Python, SQL and JavaScript. Right now I am learning React to make my frontend work cleaner and more structured.',
  // Paragraphs used in the About section.
  about: [
    'I finished my BCA at Sandip University in 2025 with a CGPA of 8.9. Data structures, object-oriented programming and problem solving gave me a solid base, and I kept learning by building things: a student record system with a MySQL database, a resume analyser in Streamlit, and several small browser games and pages.',
    'My internship at CodSoft in 2024 was where I started thinking about frontend work seriously, using HTML, CSS and JavaScript on real tasks with deadlines. Since then I have been moving towards React and Tailwind CSS, and I have been taking short courses in SQL and AI.',
    'I am looking for an entry-level role where I can keep learning from a team, ship useful work and grow into backend and AI-related development over time.',
  ],
}

// ------------------------------------------------------------------ Social ----
export const social = {
  github: 'https://github.com/pallavi-1723/AI-Resume-Analyzer',
  linkedin: 'https://www.linkedin.com/in/pallavi-kumari01/',
  // Add more later, e.g. leetcode: 'https://leetcode.com/u/yourname', then show it in Footer/Contact.
}

// ------------------------------------------------------------------ Resume ----
export const resume = {
  // To replace your resume: overwrite public/resume/Pallavi-Kumari-Resume.pdf with the new PDF (same filename).
  file: asset('resume/Pallavi-Kumari-Resume.pdf'),
  downloadName: 'Pallavi-Kumari-Resume.pdf',
}

// --------------------------------------------------------------- Education ----
export const education = [
  {
    degree: 'Bachelor of Computer Application (BCA)',
    school: 'Sandip University, Madhubani',
    period: '2022 - 2025',
    result: 'CGPA 8.9 / 10',
  },
  {
    degree: 'Intermediate',
    school: 'RKK College, Purnea',
    period: '2020 - 2022',
    result: '82.4%',
  },
  {
    degree: 'Matriculation',
    school: 'Scottish Public School, Katihar',
    period: '2019 - 2020',
    result: '84.6%',
  },
]

// ------------------------------------------------------------------ Skills ----
// Only things from your resume or that you confirmed. No percentages on purpose.
// To add a skill: add its name to the right `items` list. To add a category: add a new object.
export const skills = [
  { category: 'Frontend Development', items: ['HTML', 'CSS', 'JavaScript', 'Responsive design'] },
  { category: 'Programming Languages', items: ['Python', 'Java', 'C', 'C++'] },
  { category: 'Database Fundamentals', items: ['MySQL', 'SQL', 'CRUD operations'] },
  {
    category: 'Tools and Platforms',
    items: ['GitHub', 'VS Code', 'Streamlit', 'MS Word', 'MS Excel', 'MS PowerPoint'],
  },
  {
    category: 'Core Concepts',
    items: ['Data Structures', 'Object-Oriented Programming', 'Problem Solving'],
  },
  { category: 'Currently Learning', items: ['React', 'Tailwind CSS', 'AI fundamentals'], learning: true },
]

// ---------------------------------------------------------------- Projects ----
// Each project supports: name, description, tags, image, github, liveUrl, status, featured.
//   status:   'Completed' | 'In progress' | 'Planned'   (shown as a badge)
//   image:    a screenshot, e.g. import shot from '../assets/projects/my-shot.png'  (null = tidy placeholder)
//   github:   repository URL, or '' to hide the button
//   liveUrl:  deployed URL, or '' to hide the Live Demo button
//   featured: true = large card, false = compact row under "Smaller projects"
export const projects = [
  {
    name: 'AI Resume Analyser',
    description:
      'An AI-powered web app that analyses a resume and gives feedback on it. Built with Python and Streamlit.',
    tags: ['Python', 'Streamlit'],
    image: null,
    github: '', // TODO: paste your repository URL here
    // Set this in a .env file (VITE_RESUME_ANALYSER_URL) or paste the deployed URL directly. See README.
    liveUrl: import.meta.env.VITE_RESUME_ANALYSER_URL || '',
    status: 'Completed',
    featured: true,
  },
  {
    name: 'Student Management System',
    description:
      'A Python application that manages student records with Create, Read, Update and Delete operations, using a MySQL database for persistent storage.',
    tags: ['Python', 'MySQL', 'CRUD'],
    image: null,
    github: 'https://github.com/pallavi-1723/student-management-system-python-mysql',
    liveUrl: '',
    status: 'Completed',
    featured: true,
  },
  // ---- Template for a future project (copy, uncomment, edit) ----
  // {
  //   name: 'AI Interview Assistant',
  //   description: 'What it does, in one or two honest sentences.',
  //   tags: ['Python', 'React'],
  //   image: null,
  //   github: '',
  //   liveUrl: '',
  //   status: 'Planned',
  //   featured: true,
  // },

  // ---- Smaller projects from your resume (shown as compact rows) ----
  {
    name: 'Portfolio Website (first version)',
    description: 'A responsive personal portfolio built with plain HTML, CSS and JavaScript.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    github: '',
    liveUrl: '',
    status: 'Completed',
    featured: false,
  },
  {
    name: 'Amazon Clone',
    description: 'A frontend clone of the Amazon homepage.',
    tags: ['HTML', 'CSS'],
    github: '',
    liveUrl: '',
    status: 'Completed',
    featured: false,
  },
  {
    name: 'Tic Tac Toe Game',
    description: 'An interactive two-player Tic Tac Toe game that runs in the browser.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    github: '',
    liveUrl: '',
    status: 'Completed',
    featured: false,
  },
  {
    name: 'Stone Paper Scissors Game',
    description: 'A browser-based Stone Paper Scissors game.',
    tags: ['JavaScript'],
    github: '',
    liveUrl: '',
    status: 'Completed',
    featured: false,
  },
]

// -------------------------------------------------------- Learning journey ----
// status: 'done' (completed) | 'current' (happening now) | 'planned' (a goal, not done yet)
// Keep the list in time order. To add a milestone, add one object.
export const journey = [
  {
    date: '2022',
    title: 'Started my BCA at Sandip University',
    detail: 'Began with C, C++, Java and Python, plus data structures and OOP.',
    status: 'done',
  },
  {
    date: 'Jul - Aug 2024',
    title: 'Web Development Internship at CodSoft',
    detail:
      'A 4-week virtual internship. Built and improved web projects with HTML, CSS and JavaScript, using responsive design.',
    status: 'done',
  },
  {
    date: 'Dec 2024',
    title: 'Advanced Python Programming certificate',
    detail: 'Completed at C-DAC ATC, Patna.',
    status: 'done',
  },
  {
    date: '2025',
    title: 'Completed my BCA with a CGPA of 8.9',
    detail: 'Finished the degree with projects in Python, MySQL and JavaScript.',
    status: 'done',
  },
  {
    date: 'Jul 2026',
    title: 'SQL and AI fundamentals courses',
    detail: 'Earned HackerRank SQL (Basic) and two beginner AI certificates.',
    status: 'done',
  },
  {
    date: 'Now',
    title: 'Learning React and Tailwind CSS',
    detail: 'Building frontend projects, starting with this portfolio.',
    status: 'current',
  },
  {
    date: 'Next',
    title: 'Learning APIs and backend development',
    detail: 'Goal: connect my frontend work to real data and services.',
    status: 'planned',
  },
  {
    date: 'Later',
    title: 'Exploring AI/ML integration',
    detail: 'Goal: build projects such as an AI Interview Assistant.',
    status: 'planned',
  },
]

// ------------------------------------------------------------ Certificates ----
// To add one: add an object. `link` is optional (a verification URL).
export const certificates = [
  { title: 'Advanced Python Programming', issuer: 'C-DAC ATC, Patna', date: 'December 2024' },
  { title: 'Digital Productivity', issuer: 'NIIT Foundation', date: 'January 2025' },
  { title: 'SQL (Basic)', issuer: 'HackerRank', date: 'July 2026' },
  {
    title: 'Unlocking AI for Everyone (Beginner)',
    issuer: 'Microsoft, Skill India / NCVET',
    date: 'July 2026',
  },
  { title: 'Fundamentals of Artificial Intelligence', issuer: 'Wadhwani Foundation', date: 'July 2026' },
]

// -------------------------------------------------------------- Experience ----
// Shown in the resume section. Add future internships or jobs here.
export const experience = [
  {
    role: 'Web Development Intern',
    company: 'CodSoft (virtual internship)',
    period: 'July 2024 - August 2024',
    points: [
      'Completed a 4-week virtual internship in web development.',
      'Developed and improved web projects using HTML, CSS and JavaScript.',
      'Applied responsive design and frontend development concepts.',
    ],
  },
]

// ------------------------------------------------------------ Navigation ----
export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Learning Journey', href: '#journey' },
  { label: 'Resume', href: '#resume' },
  { label: 'Contact', href: '#contact' },
]

// ----------------------------------------------------------- Contact form ----
export const contactForm = {
  // Optional Formspree/Getform URL. Empty = the form opens the visitor's email app (mailto).
  endpoint: import.meta.env.VITE_FORM_ENDPOINT || '',
}
