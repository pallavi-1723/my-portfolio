import { MapPin } from 'lucide-react'
import Section from './Section'
import { education, profile } from '../data/portfolio'

export default function About() {
  return (
    <Section id="about" title="About me">
      <div className="grid gap-14 lg:grid-cols-[1.3fr_1fr]">
        <div className="max-w-prose space-y-5 text-lg leading-relaxed text-muted">
          {profile.about.map((paragraph) => (
            <p key={paragraph.slice(0, 24)}>{paragraph}</p>
          ))}
          <p className="flex items-center gap-2 pt-2 text-base">
            <MapPin className="h-4 w-4 text-accent" aria-hidden="true" />
            Based in {profile.location}
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold">Education</h3>
          <ul className="mt-5 divide-y divide-line border-y border-line">
            {education.map((e) => (
              <li key={e.degree} className="py-4">
                <p className="font-semibold">{e.degree}</p>
                <p className="text-muted">{e.school}</p>
                <p className="mt-1 text-sm text-muted">
                  {e.period} &middot; {e.result}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  )
}
