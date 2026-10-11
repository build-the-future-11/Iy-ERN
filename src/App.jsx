import React, { useMemo, useState } from 'react'
import {
  ArrowRight,
  BookOpen,
  Check,
  ExternalLink,
  FileSearch,
  FileText,
  Github,
  Globe2,
  Search,
  ShieldCheck,
  Users,
} from 'lucide-react'

const FINANCEMETA_URL = import.meta.env.VITE_FINANCEMETA_URL || 'https://finance-meta-landing.vercel.app'
const SUBMISSION_URL = import.meta.env.VITE_SUBMISSION_URL || `${FINANCEMETA_URL}/apply?call=research-submission&utm_source=iyern`
const STANDARDS_URL = `${FINANCEMETA_URL}/research/standards`
const MEMBER_PORTAL_URL = 'https://finance4all-global-reach.vercel.app/'
const PORTFOLIO_URL = 'https://thebu1ld.com/network'
const PROJECT_DIRECTORY_URL = `${FINANCEMETA_URL}/projects`
const REPOSITORY_URL = 'https://github.com/build-the-future-11/Iy-ERN'

// Keep the archive empty until a reviewed, permissioned record is available.
// Do not add illustrative or placeholder papers to this collection.
const publications = []

const pillars = [
  {
    title: 'An inspectable research record',
    text: 'Each published record should keep its title, authorship, abstract, review state, revision date, and external evidence together.',
    icon: FileSearch,
  },
  {
    title: 'Clear status, not implied authority',
    text: 'Submitted, editorially screened, reviewed, and published are different states. The interface labels them separately.',
    icon: ShieldCheck,
  },
  {
    title: 'Connected to FinanceMeta',
    text: 'IYERN is a FinanceMeta research initiative. Its public standards, applications, and wider research index remain one click away.',
    icon: Globe2,
  },
]

const process = [
  {
    step: '01',
    title: 'Prepare',
    text: 'Share the question, authorship, abstract, methods, sources, conflicts, and the artifact you want reviewed.',
  },
  {
    step: '02',
    title: 'Screen',
    text: 'An editor checks scope, attribution, permissions, basic completeness, and whether the claims match the supplied evidence.',
  },
  {
    step: '03',
    title: 'Review',
    text: 'A submission is not described as peer reviewed until the review process and resulting status are recorded.',
  },
  {
    step: '04',
    title: 'Publish',
    text: 'Accepted work receives a public record with revision history and limitations. DOI assignment is not claimed until operational.',
  },
]

const checklist = [
  'A specific economics, finance, policy, or financial-literacy question',
  'Named authors and a contact route the team is allowed to use',
  'Sources, data provenance, and permission to publish the submitted material',
  'Methods, uncertainty, limitations, and any conflicts of interest',
]

function ArrowLink({ href, children, className = '', external = false }) {
  return (
    <a className={className} href={href} {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}>
      {children} {external ? <ExternalLink size={16} /> : <ArrowRight size={16} />}
    </a>
  )
}

function App() {
  const [query, setQuery] = useState('')
  const filteredPublications = useMemo(() => {
    const normalized = query.trim().toLowerCase()
    if (!normalized) return publications
    return publications.filter((paper) =>
      [paper.title, paper.abstract, ...(paper.authors || []), ...(paper.topics || [])]
        .join(' ')
        .toLowerCase()
        .includes(normalized),
    )
  }, [query])

  return (
    <div className="site-shell">
      <a className="skip-link" href="#main-content">Skip to main content</a>
      <header className="topbar">
        <div className="topbar-inner">
          <a className="brand-lockup" href="#top" aria-label="IYERN home">
            <span className="brand-mark" aria-hidden="true">iy</span>
            <span><strong>IYERN</strong><small>International Youth Economics Research Network</small></span>
          </a>

          <nav className="topbar-actions" aria-label="Primary navigation">
            <a href="#archive">Archive</a>
            <a href="#standards">Standards</a>
            <a href="#process">Process</a>
            <ArrowLink className="submit-link" href={SUBMISSION_URL} external>Submit research</ArrowLink>
          </nav>
        </div>
      </header>

      <main id="main-content">
        <section className="hero" id="top">
          <div className="hero-main">
            <p className="eyebrow">A FinanceMeta research initiative</p>
            <h1>Economics research deserves a public record people can actually inspect.</h1>
            <p className="lede">
              IYERN is building an open, youth-focused index for economics, finance, and financial-literacy research—designed around explicit evidence, review status, and revision history.
            </p>

            <div className="hero-actions">
              <ArrowLink className="button primary" href={SUBMISSION_URL} external>Start a submission</ArrowLink>
              <ArrowLink className="button secondary" href="#archive">Browse the archive</ArrowLink>
            </div>

            <p className="hero-note">The public archive is in pre-launch review. No papers or DOI records are represented as published yet.</p>
          </div>

          <aside className="hero-side" aria-label="Platform status">
            <div className="status-card">
              <span className="status-dot" aria-hidden="true" />
              <div><strong>Archive status</strong><span>Pre-launch · accepting submission interest</span></div>
            </div>
            <dl className="stats-card">
              <div><dt>Verified public papers</dt><dd>0</dd></div>
              <div><dt>Review model</dt><dd>Human</dd></div>
              <div><dt>Public access</dt><dd>Open</dd></div>
              <div><dt>DOI service</dt><dd>Not active</dd></div>
            </dl>
          </aside>
        </section>

        <nav className="scope-strip" aria-label="Explore IYERN">
          <a href="#archive"><span>01</span><small>Explore</small><strong>Public archive</strong></a>
          <a href="#standards"><span>02</span><small>Prepare</small><strong>Research standards</strong></a>
          <a href="#process"><span>03</span><small>Understand</small><strong>Publication process</strong></a>
          <a href={SUBMISSION_URL}><span>04</span><small>Contribute</small><strong>Submit research</strong></a>
        </nav>

        <section className="card-grid" aria-label="Platform principles">
          {pillars.map(({ title, text, icon: Icon }) => (
            <article key={title} className="feature-card">
              <div className="icon-wrap"><Icon size={19} /></div>
              <h2>{title}</h2>
              <p>{text}</p>
            </article>
          ))}
        </section>

        <section id="archive" className="panel archive-panel" aria-labelledby="archive-title">
          <div className="section-head">
            <div>
              <p className="section-label">Public archive</p>
              <h2 id="archive-title">Published work will appear here.</h2>
              <p>Search is wired to the public index; the index remains empty until a paper clears the recorded publication workflow.</p>
            </div>
            <span className="count-badge">{publications.length} verified records</span>
          </div>

          <label className="search-box" htmlFor="paper-search">
            <Search size={19} aria-hidden="true" />
            <span className="sr-only">Search papers</span>
            <input
              id="paper-search"
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search by title, author, topic, or abstract"
            />
          </label>

          <div className="empty-state" role="status" aria-live="polite">
            <BookOpen size={28} aria-hidden="true" />
            <h3>{query && filteredPublications.length === 0 ? 'No matching papers.' : 'No public papers yet.'}</h3>
            <p>{query ? 'Try another search, or return when reviewed records are released.' : 'This is an intentional empty state—not a set of sample papers presented as real work.'}</p>
            <ArrowLink className="text-link" href={SUBMISSION_URL} external>Prepare the first submission</ArrowLink>
          </div>
        </section>

        <section id="standards" className="layout-split">
          <article className="panel">
            <p className="section-label">Before submitting</p>
            <h2>A complete record begins before publication.</h2>
            <ul className="checklist">
              {checklist.map((item) => <li key={item}><Check size={17} aria-hidden="true" /><span>{item}</span></li>)}
            </ul>
          </article>

          <aside className="panel callout">
            <FileText size={24} aria-hidden="true" />
            <p className="section-label">Shared standards</p>
            <h2>Use the FinanceMeta research framework.</h2>
            <p>Define the question, comparison, evidence, failure condition, uncertainty, and reproduction route before making a strong claim.</p>
            <ArrowLink className="button primary full" href={STANDARDS_URL} external>Read research standards</ArrowLink>
          </aside>
        </section>

        <section id="process" className="panel process-panel">
          <div className="section-head">
            <div>
              <p className="section-label">Publication process</p>
              <h2>Four states, each named honestly.</h2>
            </div>
            <span className="process-tag"><Users size={15} /> Human review</span>
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

        <section className="network-panel">
          <div>
            <p className="section-label">The wider network</p>
            <h2>Move between the archive, the research framework, and the FinanceMeta ecosystem.</h2>
          </div>
          <div className="network-links">
            <ArrowLink className="network-link" href={PROJECT_DIRECTORY_URL} external>
              <Globe2 size={20} /> All 48 project webpages
            </ArrowLink>
            <ArrowLink className="network-link" href={MEMBER_PORTAL_URL} external>
              <Users size={20} /> FinanceMeta member portal
            </ArrowLink>
            <ArrowLink className="network-link" href={PORTFOLIO_URL} external>
              <Globe2 size={20} /> Full portfolio map
            </ArrowLink>
            <ArrowLink className="network-link" href={REPOSITORY_URL} external>
              <Github size={20} /> Open source repository
            </ArrowLink>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div>
          <div className="footer-title">IYERN</div>
          <p>Open economics research infrastructure, with status and limitations kept visible.</p>
        </div>
        <nav aria-label="Footer navigation">
          <a href="#archive">Archive</a>
          <a href="#standards">Standards</a>
          <a href={`${FINANCEMETA_URL}/privacy`}>Privacy</a>
          <a href={PORTFOLIO_URL}>Portfolio</a>
          <a href={PROJECT_DIRECTORY_URL}>All projects</a>
          <a href="mailto:financeforalledu@gmail.com">Contact</a>
        </nav>
      </footer>
    </div>
  )
}

export default App
