import Section from './Section'
import ProjectCard, { StatusBadge } from './ProjectCard'
import { projects } from '../data/portfolio'
import { isValidUrl } from '../utils/helpers'
import { GithubIcon } from './icons'

export default function Projects() {
  const featured = projects.filter((p) => p.featured)
  const smaller = projects.filter((p) => !p.featured)

  return (
    <Section
      id="projects"
      title="Projects"
      intro="Things I have built while learning. Each card links only to what exists today."
    >
      <div className="grid gap-6 md:grid-cols-2">
        {featured.map((p) => (
          <ProjectCard key={p.name} project={p} />
        ))}
      </div>

      {smaller.length > 0 && (
        <div className="mt-16">
          <h3 className="text-xl font-semibold">Smaller projects</h3>
          <ul className="mt-5 divide-y divide-line border-y border-line">
            {smaller.map((p) => (
              <li key={p.name} className="flex flex-col gap-2 py-5 sm:flex-row sm:items-start sm:justify-between sm:gap-8">
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-3">
                    <p className="font-semibold">{p.name}</p>
                    {p.status !== 'Completed' && <StatusBadge status={p.status} />}
                  </div>
                  <p className="mt-1 text-muted">{p.description}</p>
                </div>
                <div className="flex shrink-0 items-center gap-3">
                  <p className="text-sm text-muted">{p.tags.join(', ')}</p>
                  {isValidUrl(p.github) && (
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${p.name} on GitHub (opens in a new tab)`}
                      className="text-ink hover:text-accent"
                    >
                      <GithubIcon className="h-5 w-5" />
                    </a>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </Section>
  )
}
