import React from 'react'
import {
  ArrowRight,
  BadgeCheck,
  BookOpen,
  FileText,
  Globe2,
  ShieldCheck,
  Sparkles,
  Users,
} from 'lucide-react'

const GOOGLE_FORM_URL = 'https://forms.gle/your-google-form-link'

const pillars = [
  {
    title: 'Make financial knowledge accessible',
    text:
      'Turn research, explainers, and evidence-based writing into something students, researchers, and the public can actually use.',
    icon: BookOpen,
  },
  {
    title: 'Share research publicly',
    text:
      'Create a clean public space where strong ideas can be discovered, referenced, and discussed without unnecessary barriers.',
    icon: Globe2,
  },
  {
    title: 'Keep quality visible',
    text:
      'Use a simple endorsement signal and editorial review process so serious work stands out clearly.',
    icon: ShieldCheck,
  },
]

const process = [
  {
    step: '01',
    title: 'Submit the form',
    text: 'Authors share their paper through a Google Form with the basic details and files needed for review.',
  },
  {
    step: '02',
    title: 'Review and verify',
    text: 'The team checks the submission, confirms the structure, and looks for fit, clarity, and credibility.',
  },
  {
    step: '03',
    title: 'Publish publicly',
    text: 'Approved work gets presented on the site in a clean format that makes it easy to read and cite.',
  },
]

const highlights = [
  'Financial literacy first',
  'Public-facing research',
  'Simple endorsement system',
  'Modern editorial presentation',
]

function App() {
  return (
    <main className="page">
      <header className="nav">
        <div>
          <div className="brand">IYERN</div>
          <div className="subtitle">International Youth Economics Research Network</div>
        </div>
        <a className="nav-link" href={GOOGLE_FORM_URL} target="_blank" rel="noreferrer">
          Submit research <ArrowRight size={16} />
        </a>
      </header>

      <section className="hero card">
        <div className="hero-copy">
          <p className="eyebrow">Open research. Public education. Better access.</p>
          <h1>Make financial literacy and research easy to find, easy to share, and easy to trust.</h1>
          <p className="lede">
            IYERN is a public research network built to spread financial understanding and give
            emerging research a serious, polished place to live. The goal is simple: make useful
            work visible to more people.
          </p>
          <div className="hero-actions">
            <a className="button primary" href={GOOGLE_FORM_URL} target="_blank" rel="noreferrer">
              Submit via Google Form <ArrowRight size={18} />
            </a>
            <a className="button secondary" href="#how-it-works">
              How it works <ArrowRight size={18} />
            </a>
          </div>
        </div>

        <aside className="hero-aside">
          <div className="accent-box">
            <Sparkles size={18} />
            <p>Built to feel modern, credible, and calm — not crowded or overly animated.</p>
          </div>
          <div className="highlight-grid">
            {highlights.map((item) => (
              <div key={item} className="highlight-pill">
                {item}
              </div>
            ))}
          </div>
        </aside>
      </section>

      <section className="section-grid">
        {pillars.map(({ title, text, icon: Icon }) => (
          <article key={title} className="card pillar">
            <div className="icon-wrap">
              <Icon size={18} />
            </div>
            <h2>{title}</h2>
            <p>{text}</p>
          </article>
        ))}
      </section>

      <section id="how-it-works" className="card process">
        <div className="section-head">
          <div>
            <p className="eyebrow">How submissions move through the system</p>
            <h2>A simple public pipeline with human review.</h2>
          </div>
          <div className="badge-row">
            <span className="badge">
              <Users size={14} />
              Public access
            </span>
            <span className="badge">
              <BadgeCheck size={14} />
              Endorsement signal
            </span>
          </div>
        </div>

        <div className="steps">
          {process.map(({ step, title, text }) => (
            <article key={step} className="step">
              <div className="step-num">{step}</div>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="card split">
        <div>
          <p className="eyebrow">What the site should say</p>
          <h2>One clear message: financial literacy and research should be public, useful, and credible.</h2>
          <p>
            This homepage is intentionally minimal. No fake papers, no placeholder publications, no
            invented content. Just a professional explanation of the platform and a direct path to
            submit work.
          </p>
        </div>
        <div className="note-box">
          <FileText size={18} />
          <p>
            The paper pages, metadata, and publication templates can come later once real submissions
            exist.
          </p>
        </div>
      </section>

      <footer className="footer card">
        <div>
          <div className="footer-title">Ready for real submissions</div>
          <p>Use the form to collect entries while the site stays clean, focused, and public.</p>
        </div>
        <a className="button primary" href={GOOGLE_FORM_URL} target="_blank" rel="noreferrer">
          Open submission form <ArrowRight size={18} />
        </a>
      </footer>
    </main>
  )
}

export default App
