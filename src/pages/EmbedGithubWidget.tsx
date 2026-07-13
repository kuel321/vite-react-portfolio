import { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import GithubWidget from '../components/GithubWidget'

export default function EmbedGithubWidget() {
  const [params] = useSearchParams()
  const username = params.get('user') || undefined
  const accentColor = params.get('accent') || undefined
  const mainColor = params.get('main') || undefined

  useEffect(() => {
    // color-scheme: dark (set globally for the site) makes browsers paint a
    // dark default canvas behind anything actually transparent, which
    // defeats true transparency here — override it just for this route.
    document.documentElement.style.colorScheme = 'normal'
    document.documentElement.style.background = 'transparent'
    document.body.style.background = 'transparent'
    return () => {
      document.documentElement.style.colorScheme = ''
      document.documentElement.style.background = ''
      document.body.style.background = ''
    }
  }, [])

  return (
    <div className="embed-page">
      <GithubWidget username={username} accentColor={accentColor} mainColor={mainColor} />
      <a href="https://lukeshort.dev" target="_blank" rel="noreferrer" className="embed-credit">
        via lukeshort.dev
      </a>
    </div>
  )
}
