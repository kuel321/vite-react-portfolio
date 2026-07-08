import { Link, useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import PageWrapper from '../components/PageWrapper'
import { posts } from '../data/posts'

export default function BlogPost() {
  const { slug } = useParams()
  const post = posts.find((p) => p.slug === slug)

  if (!post) {
    return (
      <PageWrapper>
        <section className="container section">
          <h1>Post not found</h1>
          <Link to="/blog" className="link-inline">
            ← Back to blog
          </Link>
        </section>
      </PageWrapper>
    )
  }

  return (
    <PageWrapper>
      <article className="container section post-article">
        <Link to="/blog" className="link-inline">
          ← Back to blog
        </Link>
        <motion.p
          className="eyebrow"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          {post.date}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {post.title}
        </motion.h1>
        <div className="post-body">
          {post.content.map((paragraph, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 + i * 0.08 }}
            >
              {paragraph}
            </motion.p>
          ))}
        </div>
      </article>
    </PageWrapper>
  )
}
