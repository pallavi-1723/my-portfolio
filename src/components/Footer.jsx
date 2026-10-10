import { profile, social } from '../data/portfolio'
import { GithubIcon, LinkedinIcon } from './icons'

export default function Footer() {
  return (
    <footer className="border-t border-line py-10">
      <div className="container-page flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
        <div>
          <p className="font-display font-semibold">{profile.name}</p>
          <p className="mt-1 text-sm text-muted">
            &copy; {new Date().getFullYear()} {profile.name}. Built with React, Vite and Tailwind CSS.
          </p>
        </div>
        <div className="flex items-center gap-4">
          <a href={social.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub (opens in a new tab)" className="text-ink hover:text-accent">
            <GithubIcon />
          </a>
          <a href={social.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn (opens in a new tab)" className="text-ink hover:text-accent">
            <LinkedinIcon />
          </a>
        </div>
      </div>
    </footer>
  )
}
