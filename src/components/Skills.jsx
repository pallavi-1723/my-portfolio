import Section from './Section'
import { skills } from '../data/portfolio'

export default function Skills() {
  return (
    <Section
      id="skills"
      title="Skills"
      intro="Technologies I have studied or used in my projects. What I am still learning is listed separately."
    >
      <dl className="divide-y divide-line border-y border-line">
        {skills.map((group) => (
          <div key={group.category} className="grid gap-4 py-6 md:grid-cols-[15rem_1fr] md:gap-8">
            <dt className="font-display text-lg font-semibold">{group.category}</dt>
            <dd>
              <ul className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className={`rounded-full border px-3.5 py-1.5 text-sm font-medium ${
                      group.learning
                        ? 'border-accent/40 bg-accent-soft text-accent'
                        : 'border-line bg-surface text-ink'
                    }`}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  )
}
