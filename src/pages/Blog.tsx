import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import PageWrapper from '../components/PageWrapper'
import { posts } from '../data/posts'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45 } },
}

export default function Blog() {
  return (
    <PageWrapper>
      <section className="container section">
        <p className="eyebrow">Blog</p>
        <h1>Writing</h1>
        <p className="hero-sub">
          Notes on projects, tools, and things I'm learning.
        </p>

        <motion.div
          className="post-list"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {posts.map((post) => (
            <motion.div key={post.slug} variants={item}>
              <Link to={`/blog/${post.slug}`} className="post-row">
                <div>
                  <h3>{post.title}</h3>
                  <p>{post.excerpt}</p>
                </div>
                <span className="post-date">{post.date}</span>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </PageWrapper>
  )
}
