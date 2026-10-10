import { useState } from 'react'
import { Mail, MapPin, Send } from 'lucide-react'
import Section from './Section'
import { contactForm, profile, social } from '../data/portfolio'
import { GithubIcon, LinkedinIcon } from './icons'

const fieldClass =
  'mt-2 w-full rounded-xl border border-line bg-surface px-4 py-3 text-ink placeholder:text-muted/70 focus:border-accent'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  // idle | sending | opened (mailto) | sent (endpoint) | error
  const [status, setStatus] = useState('idle')

  const update = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }))

  async function handleSubmit(e) {
    e.preventDefault()

    // Option A: a form service (Formspree etc.) is configured. Send there.
    if (contactForm.endpoint) {
      setStatus('sending')
      try {
        const res = await fetch(contactForm.endpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify(form),
        })
        if (!res.ok) throw new Error('Request failed')
        setStatus('sent')
        setForm({ name: '', email: '', message: '' })
      } catch {
        setStatus('error')
      }
      return
    }

    // Option B (default): no backend, so open the visitor's email app with the message filled in.
    const subject = encodeURIComponent(`Portfolio message from ${form.name}`)
    const body = encodeURIComponent(`${form.message}\n\n${form.name} (${form.email})`)
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
    setStatus('opened')
  }

  return (
    <Section
      id="contact"
      title="Contact"
      intro="I am happy to hear about entry-level roles, internships or anything you think I should see."
    >
      <div className="grid gap-14 lg:grid-cols-[1fr_1.2fr]">
        <ul className="space-y-5">
          {profile.email && (
            <li className="flex items-center gap-3">
              <Mail className="h-5 w-5 text-accent" aria-hidden="true" />
              <a href={`mailto:${profile.email}`} className="break-all hover:text-accent">
                {profile.email}
              </a>
            </li>
          )}
          <li className="flex items-center gap-3">
            <LinkedinIcon className="h-5 w-5 text-accent" />
            <a href={social.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-accent">
              LinkedIn<span className="sr-only"> (opens in a new tab)</span>
            </a>
          </li>
          <li className="flex items-center gap-3">
            <GithubIcon className="h-5 w-5 text-accent" />
            <a href={social.github} target="_blank" rel="noopener noreferrer" className="hover:text-accent">
              GitHub<span className="sr-only"> (opens in a new tab)</span>
            </a>
          </li>
          <li className="flex items-center gap-3 text-muted">
            <MapPin className="h-5 w-5 text-accent" aria-hidden="true" />
            {profile.location}
          </li>
        </ul>

        <form onSubmit={handleSubmit} className="rounded-3xl border border-line bg-surface p-6 sm:p-8">
          <div>
            <label htmlFor="name" className="text-sm font-semibold">
              Your name
            </label>
            <input id="name" name="name" type="text" required autoComplete="name" value={form.name} onChange={update} className={fieldClass} />
          </div>
          <div className="mt-5">
            <label htmlFor="email" className="text-sm font-semibold">
              Your email
            </label>
            <input id="email" name="email" type="email" required autoComplete="email" value={form.email} onChange={update} className={fieldClass} />
          </div>
          <div className="mt-5">
            <label htmlFor="message" className="text-sm font-semibold">
              Message
            </label>
            <textarea id="message" name="message" rows="5" required value={form.message} onChange={update} className={fieldClass} />
          </div>

          <button type="submit" disabled={status === 'sending'} className="btn btn-primary mt-6 disabled:opacity-60">
            <Send className="h-4 w-4" aria-hidden="true" />
            {status === 'sending' ? 'Sending...' : contactForm.endpoint ? 'Send message' : 'Open in email app'}
          </button>

          <p className="mt-4 text-sm text-muted" role="status" aria-live="polite">
            {status === 'idle' &&
              (contactForm.endpoint
                ? 'Your message will be sent to my inbox.'
                : 'This site has no server, so the button opens your email app with the message filled in. Nothing is sent until you press Send there.')}
            {status === 'opened' && `If your email app did not open, write to ${profile.email} directly.`}
            {status === 'sent' && 'Thank you, your message was sent.'}
            {status === 'error' && `The message could not be sent. Please email ${profile.email} instead.`}
          </p>
        </form>
      </div>
    </Section>
  )
}
