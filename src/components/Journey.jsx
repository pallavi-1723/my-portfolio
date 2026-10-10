import { Check } from 'lucide-react'
import Section from './Section'
import { journey } from '../data/portfolio'

const STATUS = {
  done: { label: 'Completed', text: 'text-muted' },
  current: { label: 'In progress', text: 'text-accent' },
  planned: { label: 'Planned goal', text: 'text-muted' },
}

function Marker({ status }) {
  if (status === 'done') {
    return (
      <span className="absolute left-0 top-0 flex h-8 w-8 items-center justify-center rounded-full bg-accent text-on-accent">
        <Check className="h-4 w-4" aria-hidden="true" />
      </span>
    )
  }
  if (status === 'current') {
    return (
      <span className="absolute left-0 top-0 flex h-8 w-8 items-center justify-center rounded-full border-2 border-accent bg-surface">
        <span className="h-2.5 w-2.5 rounded-full bg-accent" />
      </span>
    )
  }
  return <span className="absolute left-0 top-0 h-8 w-8 rounded-full border-2 border-dashed border-muted bg-bg" />
}

export default function Journey() {
  return (
    <Section
      id="journey"
      title="Learning journey"
      intro="What I have completed so far, what I am working on now, and the goals I am aiming for next."
    >
      <ol className="relative max-w-2xl">
        <span aria-hidden="true" className="absolute bottom-2 left-4 top-2 w-px bg-line" />
        {journey.map((m) => {
          const s = STATUS[m.status] ?? STATUS.done
          return (
            <li key={`${m.date}-${m.title}`} className="relative pb-10 pl-14 last:pb-0">
              <Marker status={m.status} />
              <p className="text-sm text-muted">
                {m.date} &middot; <span className={`font-semibold ${s.text}`}>{s.label}</span>
              </p>
              <h3 className="mt-1 text-lg font-semibold">{m.title}</h3>
              <p className="mt-1 leading-relaxed text-muted">{m.detail}</p>
            </li>
          )
        })}
      </ol>
    </Section>
  )
}
