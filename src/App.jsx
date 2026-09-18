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
import { normalizeSubmissionUrl } from './submissionConfig.js'

const SUBMISSION_FORM_URL = normalizeSubmissionUrl(import.meta.env.VITE_SUBMISSION_FORM_URL)

function SubmissionAction({ className, children }) {
  if (!SUBMISSION_FORM_URL) {
    return (
      <span
        className={`${className} disabled`}
        aria-disabled="true"
        title="Submission form is not configured"
      >
        {children}
      </span>
    )
  }

  return (
    <a className={className} href={SUBMISSION_FORM_URL} target="_blank" rel="noreferrer">
      {children}
    </a>
  )
}

const stats = [
  { label: 'Research archive', value: 'Planned' },
  { label: 'Submission route', value: SUBMISSION_FORM_URL ? 'Configured form' : 'Not configured' },
  { label: 'Editorial endorsements', value: 'Planned' },
]

const pillars = [
  {
    title: 'Financial literacy, made clearer',
    text:
      'The project is being designed as a clean home for research, explainers, and evidence-based work that should be easy to read and share.',
    icon: BookOpen,
  },
  {
    title: 'Research with structure',
    text:
      'The planned publication flow is intended to keep submissions organized and present reviewed work clearly once the archive is implemented.',
    icon: Globe2,
  },
  {
    title: 'Credibility over clutter',
    text:
      'Editorial review and endorsement signals are planned product capabilities, not features this prototype currently claims to operate.',
    icon: ShieldCheck,
  },
]

const process = [
  {
    step: '01',
    title: 'Submit',
    text: SUBMISSION_FORM_URL
      ? 'Authors can use the configured submission form to provide paper details, files, and basic context.'
      : 'A submission handoff can be enabled once a real reviewed HTTPS form destination is configured.',
  },
  {
    step: '02',
    title: 'Review',
    text: 'Planned: a manual editorial review process for fit, clarity, structure, and publication readiness.',
  },
  {
    step: '03',
    title: 'Publish',
    text: 'Planned: approved work can be presented in a public archive after the publication backend and review workflow are implemented.',
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
            <SubmissionAction className="submit-link">
              Submit research <ArrowRight size={16} />
            </SubmissionAction>
          </nav>
        </div>
      </header>

      <section className="hero">
        <div className="hero-main">
          <p className="eyebrow">Building research infrastructure for financial literacy</p>
          <h1>A cleaner public home for youth economics research.</h1>
          <p className="lede">
            IYERN is currently a public-facing prototype for a future research network. Today it provides project information and a fail-closed
            submission handoff; a searchable archive, endorsements, and publication backend are planned rather than represented as already live.
          </p>

          <div className="search-shell" aria-hidden="true">
            <div className="search-box">
              <Search size={18} />
              <span>Search experience planned for the research archive</span>
            </div>
            <button className="filter-button" type="button" disabled>
              <Filter size={16} />
              Filters
            </button>
          </div>

          <div className="hero-actions">
            <SubmissionAction className="button primary">
              {SUBMISSION_FORM_URL ? 'Submit research' : 'Submissions not configured'} <ArrowRight size={18} />
            </SubmissionAction>
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
              <div className="info-title">Prototype, content-first</div>
              <p>The interface shows the intended direction without inventing papers, endorsements, or an archive that is not live yet.</p>
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
          <h2>Designed toward a serious research archive, while keeping the current prototype honest about what exists today.</h2>
          <p>
            The visual direction is understated, structured, and content-first. Search, public paper hosting, endorsements, and automated editorial
            infrastructure are future product work; this repository currently implements the landing experience and guarded submission handoff.
          </p>

          <div className="mini-list">
            <div className="mini-item">
              <BadgeCheck size={16} />
              <span>Planned endorsement-based quality signal</span>
            </div>
            <div className="mini-item">
              <FileText size={16} />
              <span>Fail-closed submission handoff</span>
            </div>
            <div className="mini-item">
              <Users size={16} />
              <span>Planned public research archive</span>
            </div>
          </div>
        </article>

        <aside className="panel callout">
          <div className="section-label">Submission note</div>
          <p>
            {SUBMISSION_FORM_URL
              ? 'Authors can use the configured form. The archive, editorial workflow, and publication backend are not implemented in this prototype yet.'
              : 'The submission form has not been configured yet. The site does not route authors to a placeholder or guessed destination.'}
          </p>
          <SubmissionAction className="button primary full">
            {SUBMISSION_FORM_URL ? 'Open submission form' : 'Submission form unavailable'} <ArrowRight size={18} />
          </SubmissionAction>
        </aside>
      </section>

      <section id="process" className="panel process-panel">
        <div className="section-head">
          <div>
            <div className="section-label">Process</div>
            <h2>Planned publishing flow</h2>
          </div>
          <div className="process-tag">
            <Clock3 size={14} />
            Review process planned
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
          <div className="footer-title">A clearer home for research in progress.</div>
          <p>IYERN is being built to make financial literacy and economics research easier to share without overstating the current product.</p>
        </div>
        <SubmissionAction className="submit-link">
          Submit research <ArrowRight size={16} />
        </SubmissionAction>
      </footer>
    </main>
  )
}

export default App
