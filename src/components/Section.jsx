// Shared wrapper: consistent spacing, anchor offset for the sticky navbar, and heading.
export default function Section({ id, title, intro, children }) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="scroll-mt-16 py-20 sm:py-28">
      <div className="container-page">
        <h2 id={`${id}-title`} className="text-3xl font-semibold tracking-tight sm:text-4xl">
          {title}
        </h2>
        {intro && <p className="mt-4 max-w-xl text-lg leading-relaxed text-muted">{intro}</p>}
        <div className="mt-12">{children}</div>
      </div>
    </section>
  )
}
