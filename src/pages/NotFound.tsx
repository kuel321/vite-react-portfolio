import { Link } from 'react-router-dom'
import PageWrapper from '../components/PageWrapper'

export default function NotFound() {
  return (
    <PageWrapper>
      <section className="container not-found">
        <h1>404</h1>
        <p>This page doesn't exist yet.</p>
        <Link to="/" className="btn btn-primary">
          Back home
        </Link>
      </section>
    </PageWrapper>
  )
}
