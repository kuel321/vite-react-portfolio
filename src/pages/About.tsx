import { motion } from 'framer-motion'
import PageWrapper from '../components/PageWrapper'

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

interface Job {
  role: string
  company: string
  period: string
  description: string
  link?: string
}

const experience: Job[] = [
  {
    role: 'Software Engineer',
    company: 'Raven Solutions',
    period: ' 2023 - Present',
    description:
      'Building and maintaining line-of-business applications on Sencha Ext JS and .NET, working across the full stack from C# services to the Ext JS front end. Manage project timelines and priorities alongside development work, coordinating features from planning through delivery.',
  },
  {
    role: 'Software Engineer',
    company: 'Bulldog Creative',
    period: ' 2022 - 2023',
    description:
      'Developed and maintained PHP-based CMS websites for marketing and small business clients, building custom themes and plugins on top of the CMS to meet each client\'s design and functionality needs.',
  },
  {
    role: 'Co-Founder',
    company: 'Chasing a Chance',
    period: ' 2021 -Present',
    link: 'https://chasingachance.com',
    description:
      "A web design and custom software studio based in Hurricane, WV, co-founded and run together with my wife Chelsey (also a software engineer). Builds fully custom, template-free websites and internal tools for local businesses, including WVCams (a live WV traffic camera aggregator) and ChanceCMS, an in-house CMS platform that ships with every site.",
  },
]

// [PLACEHOLDER] — replace with real skills/tools.
const skillGroups = [
  { label: 'Languages', items: ['TypeScript', 'JavaScript', 'Python', 'SQL'] },
  { label: 'Frontend', items: ['React', 'Vite', 'CSS'] },
  { label: 'Backend', items: ['Node.js', 'REST APIs', 'PostgreSQL'] },
  { label: 'Tools', items: ['Git', 'AWS', 'Docker'] },
]

export default function About() {
  return (
    <PageWrapper>
      <section className="container section">
        <div className="about-intro">
          <motion.img
            src="/images/profile.jpeg"
            alt="Luke Short"
            className="about-photo"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          />
          <div>
            <motion.p
              className="eyebrow"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              About
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Luke Short
            </motion.h1>
            <motion.p
              className="about-bio"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              I'm a Software Engineer based in Hurricane, West Virginia,
              currently working at Raven Solutions. Outside of that, my wife
              Chelsey — also a software engineer, check her awesome <a href="https://chelseyshort.com" target="_blank" rel="noreferrer" className="link-inline-plain">
                portfolio
              </a> — and I run{' '}
              <a
                href="https://chasingachance.com"
                target="_blank"
                rel="noreferrer"
                className="link-inline-plain"
              >
                Chasing a Chance
              </a>
              {' '}together, a small studio building custom websites and
              software for local businesses.
            </motion.p>
          </div>
        </div>
        <motion.p
          className="about-bio"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.18 }}
        >
          Outside of work, I try to spend as much time outdoors as I can —
          hiking, travel, and photography. Chelsey and I also have way too many dogs, but we say that every time we go to the shelter.
        </motion.p>
      </section>

      <section className="container section">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
        >
          Experience
        </motion.h2>
        <div className="timeline">
          {experience.map((job, i) => (
            <motion.div
              key={job.role + job.company}
              className="timeline-item"
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
            >
              <div className="timeline-dot" />
              <div>
                <h3>{job.role}</h3>
                <p className="timeline-meta">
                  {job.link ? (
                    <a href={job.link} target="_blank" rel="noreferrer" className="link-inline-plain">
                      {job.company}
                    </a>
                  ) : (
                    job.company
                  )}{' '}
                  · {job.period}
                </p>
                <p>{job.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="container section">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
        >
          Skills
        </motion.h2>
        <div className="skills-columns">
          {skillGroups.map((group) => (
            <motion.div
              key={group.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4 }}
            >
              <h4>{group.label}</h4>
              <ul>
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>
    </PageWrapper>
  )
}
