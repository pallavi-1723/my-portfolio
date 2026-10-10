import { Download, Eye } from 'lucide-react'
import Section from './Section'
import { certificates, experience, resume } from '../data/portfolio'
import { isValidUrl } from '../utils/helpers'

export default function Resume() {
  return (
    <Section
      id="resume"
      title="Resume"
      intro="The PDF has my full background: education, skills, projects, internship and certificates."
    >
      <div className="grid gap-14 lg:grid-cols-[1fr_1.3fr]">
        <div>
          <div className="flex flex-wrap gap-3">
            <a href={resume.file} download={resume.downloadName} className="btn btn-primary">
              <Download className="h-4 w-4" aria-hidden="true" />
              Download Resume
            </a>
            <a href={resume.file} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
              <Eye className="h-4 w-4" aria-hidden="true" />
              View Resume<span className="sr-only"> (opens in a new tab)</span>
            </a>
          </div>
          <p className="mt-4 text-sm text-muted">PDF</p>
        </div>

        <div className="space-y-12">
          <div>
            <h3 className="text-xl font-semibold">Experience</h3>
            <div className="mt-5 divide-y divide-line border-y border-line">
              {experience.map((x) => (
                <article key={`${x.role}-${x.company}`} className="py-5">
                  <p className="font-semibold">{x.role}</p>
                  <p className="text-muted">
                    {x.company} &middot; {x.period}
                  </p>
                  <ul className="mt-3 list-disc space-y-1 pl-5 text-muted">
                    {x.points.map((pt) => (
                      <li key={pt}>{pt}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold">Certificates</h3>
            <ul className="mt-5 divide-y divide-line border-y border-line">
              {certificates.map((c) => (
                <li key={c.title} className="flex flex-col gap-1 py-4 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
                  <div>
                    <p className="font-semibold">
                      {isValidUrl(c.link) ? (
                        <a href={c.link} target="_blank" rel="noopener noreferrer" className="hover:text-accent">
                          {c.title}
                        </a>
                      ) : (
                        c.title
                      )}
                    </p>
                    <p className="text-muted">{c.issuer}</p>
                  </div>
                  <p className="shrink-0 text-sm text-muted">{c.date}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Section>
  )
}
