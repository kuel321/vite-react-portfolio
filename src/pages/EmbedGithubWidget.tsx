import { useSearchParams } from 'react-router-dom'
import GithubWidget from '../components/GithubWidget'

export default function EmbedGithubWidget() {
  const [params] = useSearchParams()
  const username = params.get('user') || undefined

  return (
    <div className="embed-page">
      <GithubWidget username={username} />
      <a href="https://lukeshort.dev" target="_blank" rel="noreferrer" className="embed-credit">
        via lukeshort.dev
      </a>
    </div>
  )
}
