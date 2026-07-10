import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import PageWrapper from '../components/PageWrapper'
import { posts } from '../data/posts'
import GithubWidget from '../components/GithubWidget'

export default function Home() {
  return (
    <PageWrapper>
      <section className="hero-photo">
        <img
          src="/images/hero-web.jpg"
          alt="Luke Short outdoors in the mountains"
          className="hero-photo-media"
        />
        <div className="hero-photo-scrim" aria-hidden="true" />
        <motion.div
          className="hero-photo-content"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <p className="hero-photo-eyebrow">Hurricane, WV · Software Engineer</p>
          <h1 className="hero-photo-title">Luke Short</h1>
          <p className="hero-photo-sub">
            I write code, build things at{' '}
            <a href="https://chasingachance.com" target="_blank" rel="noreferrer">
              Chasing a Chance
            </a>
            , and spend as much time outside as I can get away with.
          </p>
          <div className="hero-actions">
            <Link to="/about" className="btn btn-primary">
              About me
            </Link>
            <Link to="/blog" className="btn btn-ghost">
              Read the blog
            </Link>
          </div>
        </motion.div>
        {/* <div className="scroll-cue">
          <span className="scroll-cue-dot" />
          Scroll
        </div> */}
      </section>

      <section className="container section">
        <div className="intro-grid">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
          >
            <p className="eyebrow">A bit about me</p>
            <h2>Code during the day, mountains when I can.</h2>
            <p style={{ maxWidth: 560, fontSize: '1.05rem' }}>
              By day I'm a Software Engineer at Raven Solutions. On the side
              my wife Chelsey (also a software engineer, check out her <a href="https://chelseyshort.com" target="_blank" rel="noreferrer" className="link-inline-plain">portfolio</a> site!) and I run{' '}
              <a
                href="https://chasingachance.com"
                target="_blank"
                rel="noreferrer"
                className="link-inline-plain"
              >
                Chasing a Chance
              </a>
              {' '}together, building websites and software for West
              Virginia businesses.
            </p>
          </motion.div>
          <motion.img
            src="/images/family.jpg"
            alt="Luke and Chelsey with one of their rescue dogs in the woods"
            className="intro-photo"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
          />
        </div>
      </section>

      <motion.a
        href="https://chasingachance.com"
        target="_blank"
        rel="noreferrer"
        className="company-hero"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
      >
        <img
          src="/images/chance-wide.jpg"
          alt="Chance, our office dog"
          className="company-hero-media"
        />
        <div className="company-hero-scrim" aria-hidden="true" />
        <div className="company-hero-content">
          <img
            src="/logos/chasing-a-chance-logo.svg"
            alt="Chasing a Chance logo"
            className="company-hero-logo"
          />
          <div>
            <p className="company-hero-eyebrow">Our Company</p>
            <h2 className="company-hero-title">Chasing a Chance</h2>
            <p className="company-hero-sub">
              A small studio my wife Chelsey and I founded. We build fast, fully
              custom websites and internal tools for local businesses. We named the company after our first dog, Chance.
            </p>
            <span className="btn btn-ghost">Visit chasingachance.com →</span>
          </div>
        </div>
      </motion.a>
      <section className="container section">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.4 }}
        >
          On GitHub
        </motion.h2>
        <GithubWidget />
      </section>

      <section className="container section">
        <div className="section-heading">
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.4 }}
          >
            Latest writing
          </motion.h2>
          <Link to="/blog" className="link-inline">
            View all →
          </Link>
        </div>
        <div className="post-grid">
          {posts.slice(0, 2).map((post, i) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, delay: i * 0.1 }}
            >
              <Link to={`/blog/${post.slug}`} className="post-card">
                <span className="post-date">{post.date}</span>
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    </PageWrapper>
  )
}
