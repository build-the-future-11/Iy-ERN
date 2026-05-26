import React from 'react'
import {
  ArrowRight,
  BadgeCheck,
  BookOpen,
  Clock3,
  FileText,
  Filter,
  Globe2,
  Search,
  ShieldCheck,
  Sparkles,
  Users,
} from 'lucide-react'

const GOOGLE_FORM_URL = 'https://forms.gle/your-google-form-link'

const stats = [
  { label: 'Public research access', value: 'Open' },
  { label: 'Submission route', value: 'Google Form' },
  { label: 'Quality signal', value: 'Endorsements' },
]

const pillars = [
  {
    title: 'Financial literacy, made public',
    text:
      'A clean home for research, explainers, and evidence-based work that should be easy to read and easy to share.',
    icon: BookOpen,
  },
  {
    title: 'Research with structure',
    text:
      'A simple publication flow that keeps submissions organized and presents approved work clearly.',
    icon: Globe2,
  },
  {
    title: 'Credibility over clutter',
    text:
      'An endorsement signal and editorial review help surface stronger work without overcomplicating the experience.',
    icon: ShieldCheck,
  },
]

const process = [
  {
    step: '01',
    title: 'Submit',
    text: 'Authors complete the Google Form with paper details, files, and basic context.',
  },
  {
    step: '02',
    title: 'Review',
    text: 'The team checks fit, clarity, structure, and whether the submission meets the site’s standards.',
  },
  {
    step: '03',
    title: 'Publish',
    text: 'Approved work is presented publicly in a clean, accessible format.',
  },
]

function App() {
  return (
    <main className="page">
      <header className="topbar">
        <div className="topbar-inner">
          <div>
            <div className="brand">IYERN</div>
            <div className="subtitle">International Youth Economics Research Network</div>
          </div>

          <nav className="topbar-actions">
            <a href="#about">About</a>
            <a href="#process">Process</a>
            <a className="submit-link" href={GOOGLE_FORM_URL} target="_blank" rel="noreferrer">
              Submit research <ArrowRight size={16} />
            </a>
          </nav>
        </div>
      </header>

      <section className="hero">
        <div className="hero-main">
          <p className="eyebrow">Open research infrastructure for financial literacy</p>
          <h1>Public research, presented with the clarity of arXiv and the polish of a modern publication site.</h1>
          <p className="lede">
            IYERN is built to make financial literacy and economic research easier to discover, easier to submit, and easier to trust.
            The site is designed for real work, not filler content.
          </p>

          <div className="search-shell" aria-hidden="true">
            <div className="search-box">
              <Search size={18} />
              <span>Search research, authors, or topics</span>
            </div>
            <button className="filter-button" type="button">
              <Filter size={16} />
              Filters
            </button>
          </div>

          <div className="hero-actions">
            <a className="button primary" href={GOOGLE_FORM_URL} target="_blank" rel="noreferrer">
              Submit via Google Form <ArrowRight size={18} />
            </a>
            <a className="button secondary" href="#about">
              Learn more <ArrowRight size={18} />
            </a>
          </div>
        </div>

        <aside className="hero-side">
          <div className="info-card spotlight">
            <div className="info-icon">
              <Sparkles size={18} />
            </div>
            <div>
              <div className="info-title">Modern, calm, academic</div>
              <p>No clutter. No fake papers. Just a serious public-facing research network.</p>
            </div>
          </div>

          <div className="stats-card">
            {stats.map((item) => (
              <div key={item.label} className="stat-row">
                <span>{item.label}</span>
                <strong>{item.value}</strong>
              </div>
            ))}
          </div>
        </aside>
      </section>

      <section className="card-grid">
        {pillars.map(({ title, text, icon: Icon }) => (
          <article key={title} className="feature-card">
            <div className="icon-wrap">
              <Icon size={18} />
            </div>
            <h2>{title}</h2>
            <p>{text}</p>
          </article>
        ))}
      </section>

      <section id="about" className="layout-split">
        <article className="panel">
          <div className="section-label">About the platform</div>
          <h2>Built to feel like a serious research archive, not a generic startup landing page.</h2>
          <p>
            The visual direction should be understated, structured, and content-first. Think arXiv’s usefulness,
            but with better spacing, typography, and a more premium presentation.
          </p>

          <div className="mini-list">
            <div className="mini-item">
              <BadgeCheck size={16} />
              <span>Endorsement-based quality signal</span>
            </div>
            <div className="mini-item">
              <FileText size={16} />
              <span>Clean paper submission workflow</span>
            </div>
            <div className="mini-item">
              <Users size={16} />
              <span>Public access for readers and researchers</span>
            </div>
          </div>
        </article>

        <aside className="panel callout">
          <div className="section-label">Submission note</div>
          <p>
            Authors submit through the form, and the team handles review and publication manually for now.
            This keeps the site lightweight and credible while the network grows.
          </p>
          <a className="button primary full" href={GOOGLE_FORM_URL} target="_blank" rel="noreferrer">
            Open submission form <ArrowRight size={18} />
          </a>
        </aside>
      </section>

      <section id="process" className="panel process-panel">
        <div className="section-head">
          <div>
            <div className="section-label">Process</div>
            <h2>Simple publishing flow</h2>
          </div>
          <div className="process-tag">
            <Clock3 size={14} />
            Human review
          </div>
        </div>

        <div className="process-grid">
          {process.map(({ step, title, text }) => (
            <article key={step} className="process-card">
              <div className="step-num">{step}</div>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <footer className="footer">
        <div>
          <div className="footer-title">Public research, done cleanly.</div>
          <p>IYERN is designed to make financial literacy and research more visible without overwhelming the page.</p>
        </div>
        <a className="submit-link" href={GOOGLE_FORM_URL} target="_blank" rel="noreferrer">
          Submit research <ArrowRight size={16} />
        </a>
      </footer>
    </main>
  )
}

export default App