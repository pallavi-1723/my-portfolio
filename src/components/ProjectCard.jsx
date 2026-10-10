import { ExternalLink } from 'lucide-react'
import { isValidUrl } from '../utils/helpers'
import { GithubIcon } from './icons'

const initials = (name) =>
  name
    .split(/\s+/)
    .map((w) => w[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()

export function StatusBadge({ status }) {
  if (!status) return null
  const done = status === 'Completed'
  return (
    <span
      className={`rounded-full px-2.5 py-0.5 text-xs font-semibold ${
        done ? 'bg-line text-ink' : 'bg-accent-soft text-accent'
      }`}
    >
      {status}
    </span>
  )
}

export default function ProjectCard({ project }) {
  const { name, description, tags = [], image, github, liveUrl, status } = project
  const hasRepo = isValidUrl(github)
  const hasLive = isValidUrl(liveUrl)

  return (
    <article className="flex flex-col overflow-hidden rounded-3xl border border-line bg-surface">
      {image ? (
        <img src={image} alt={`Screenshot of ${name}`} loading="lazy" className="aspect-[16/9] w-full object-cover" />
      ) : (
        <div
          role="img"
          aria-label={`${name} (screenshot not added yet)`}
          className="flex aspect-[16/9] items-center justify-center bg-accent-soft"
        >
          <span className="font-display text-6xl font-semibold text-accent/60">{initials(name)}</span>
        </div>
      )}

      <div className="flex flex-1 flex-col p-6">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <h3 className="text-xl font-semibold">{name}</h3>
          <StatusBadge status={status} />
        </div>
        <p className="mt-3 leading-relaxed text-muted">{description}</p>

        <ul className="mt-4 flex flex-wrap gap-2" aria-label="Technologies used">
          {tags.map((t) => (
            <li key={t} className="rounded-md bg-bg px-2.5 py-1 text-sm text-muted ring-1 ring-line">
              {t}
            </li>
          ))}
        </ul>

        <div className="mt-6 flex flex-wrap items-center gap-3 pt-1">
          {hasRepo && (
            <a href={github} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
              <GithubIcon className="h-4 w-4" />
              View code<span className="sr-only"> for {name} (opens in a new tab)</span>
            </a>
          )}
          {hasLive && (
            <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              <ExternalLink className="h-4 w-4" aria-hidden="true" />
              Live Demo<span className="sr-only"> of {name} (opens in a new tab)</span>
            </a>
          )}
          {!hasRepo && !hasLive && <p className="text-sm text-muted">Links will be added soon.</p>}
        </div>
      </div>
    </article>
  )
}
