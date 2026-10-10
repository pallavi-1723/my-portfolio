import { Download, Mail } from 'lucide-react'
import { profile, resume, social } from '../data/portfolio'
import { GithubIcon, LinkedinIcon } from './icons'

// Staggered entrance: the only automatic animation on the page.
const delay = (n) => ({ animationDelay: `${n * 90}ms` })

export default function Hero() {
  return (
    <section id="home" aria-label="Introduction" className="scroll-mt-16 pb-20 pt-32 sm:pb-28 sm:pt-40">
      <div className="container-page grid items-center gap-14 lg:grid-cols-[1.25fr_1fr]">
        <div>
          <h1 className="hero-in text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl" style={delay(0)}>
            {profile.name}
          </h1>
          <p className="hero-in mt-5 text-lg font-medium text-accent sm:text-xl" style={delay(1)}>
            {profile.headline}
          </p>
          <p className="hero-in mt-6 max-w-xl text-lg leading-relaxed text-muted" style={delay(2)}>
            {profile.intro}
          </p>
          <p className="hero-in mt-3 max-w-xl text-base text-muted" style={delay(3)}>
            {profile.openTo}
          </p>

          <div className="hero-in mt-9 flex flex-wrap gap-3" style={delay(4)}>
            <a href="#projects" className="btn btn-primary">
              View Projects
            </a>
            <a href={resume.file} download={resume.downloadName} className="btn btn-secondary">
              <Download className="h-4 w-4" aria-hidden="true" />
              Download Resume
            </a>
            <a href="#contact" className="btn btn-secondary">
              <Mail className="h-4 w-4" aria-hidden="true" />
              Contact Me
            </a>
          </div>

          <div className="hero-in mt-8 flex items-center gap-3" style={delay(5)}>
            <a
              href={social.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Pallavi's GitHub profile (opens in a new tab)"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-line bg-surface text-ink transition-colors hover:border-accent hover:text-accent"
            >
              <GithubIcon />
            </a>
            <a
              href={social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Pallavi's LinkedIn profile (opens in a new tab)"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-line bg-surface text-ink transition-colors hover:border-accent hover:text-accent"
            >
              <LinkedinIcon />
            </a>
          </div>
        </div>

        {/* Arched photo frame, the one bold shape on the page */}
        <div className="hero-in relative mx-auto w-full max-w-sm" style={delay(2)}>
          <div
            aria-hidden="true"
            className="absolute inset-0 translate-x-4 translate-y-4 rounded-b-3xl rounded-t-[999px] bg-accent-soft"
          />
          <img
            src={profile.photo}
            alt={profile.photoAlt}
            width="900"
            height="900"
            className="relative aspect-[4/5] w-full rounded-b-3xl rounded-t-[999px] border border-line object-cover object-[50%_25%]"
          />
        </div>
      </div>
    </section>
  )
}
