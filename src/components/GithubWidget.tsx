import { useEffect, useState } from 'react'
import type { CSSProperties } from 'react'
import { motion } from 'framer-motion'

const DEFAULT_USERNAME = 'kuel321'
const DEFAULT_ACCENT = '434827'
const HEX_RE = /^[0-9a-fA-F]{3,8}$/

interface GithubWidgetProps {
    username?: string
    /** Hex color, no '#', e.g. "8a8f74". Used for the heatmap + hover accents. */
    accentColor?: string
    /** Hex color, no '#', e.g. "e8e6dc". Used for primary text. */
    mainColor?: string
}

interface GithubProfile {
    login: string
    name: string | null
    avatar_url: string
    bio: string | null
    public_repos: number
    followers: number
    html_url: string
}

interface GithubRepo {
    id: number
    name: string
    html_url: string
    description: string | null
    stargazers_count: number
    language: string | null
    fork: boolean
}

export default function GithubWidget({
    username = DEFAULT_USERNAME,
    accentColor,
    mainColor,
}: GithubWidgetProps) {
    const accent = accentColor && HEX_RE.test(accentColor) ? accentColor : DEFAULT_ACCENT
    const main = mainColor && HEX_RE.test(mainColor) ? mainColor : undefined

    const [profile, setProfile] = useState<GithubProfile | null>(null)
    const [repos, setRepos] = useState<GithubRepo[]>([])
    const [status, setStatus] = useState<'loading' | 'ready' | 'error'>('loading')

    useEffect(() => {
        let cancelled = false
        setStatus('loading')
        setProfile(null)
        setRepos([])

        async function load() {
            try {
                const [profileRes, reposRes] = await Promise.all([
                    fetch(`https://api.github.com/users/${username}`),
                    fetch(`https://api.github.com/users/${username}/repos?per_page=100&sort=pushed`),
                ])
                if (!profileRes.ok || !reposRes.ok) throw new Error('GitHub API error')

                const profileData: GithubProfile = await profileRes.json()
                const reposData: GithubRepo[] = await reposRes.json()
                if (cancelled) return

                setProfile(profileData)
                setRepos(
                    reposData
                        .filter((repo) => !repo.fork)
                        .sort((a, b) => b.stargazers_count - a.stargazers_count)
                        .slice(0, 4)
                )
                setStatus('ready')
            } catch {
                if (!cancelled) setStatus('error')
            }
        }

        load()
        return () => {
            cancelled = true
        }
    }, [username])

    if (status === 'error') {
        return (
            <div className="github-card github-card-error">
                <p>Couldn't load GitHub data for "{username}".</p>
            </div>
        )
    }

    const themeStyle = {
        '--gh-accent': `#${accent}`,
        ...(main ? { '--gh-main': `#${main}` } : {}),
    } as CSSProperties

    return (
        <motion.div
            className="github-card"
            style={themeStyle}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
        >
            <div className="github-card-header">
                {profile ? (
                    <img src={profile.avatar_url} alt={profile.login} className="github-avatar" />
                ) : (
                    <div className="github-avatar github-avatar-skeleton" />
                )}
                <div className="github-card-header-text">
                    <p className="github-name">{profile ? profile.name ?? profile.login : 'Loading…'}</p>
                    {profile?.bio && <p className="github-bio">{profile.bio}</p>}
                    {profile && (
                        <div className="github-stats">
                            <span>{profile.public_repos} repo{profile.public_repos === 1 ? '' : 's'}</span>
                            <span>{profile.followers} follower{profile.followers === 1 ? '' : 's'}</span>
                        </div>
                    )}
                </div>
                <a
                    href={`https://github.com/${username}`}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-ghost github-cta"
                >
                    View profile →
                </a>
            </div>

            <a
                href={`https://github.com/${username}?tab=repositories`}
                target="_blank"
                rel="noreferrer"
                className="github-heatmap-wrap"
            >
                <img
                    src={`https://ghchart.rshah.org/${accent}/${username}`}
                    alt={`${username}'s GitHub contribution graph`}
                    className="github-heatmap"
                />
            </a>

            {repos.length > 0 && (
                <div className="github-repos">
                    {repos.map((repo) => (
                        <a
                            key={repo.id}
                            href={repo.html_url}
                            target="_blank"
                            rel="noreferrer"
                            className="github-repo-card"
                        >
                            <p className="github-repo-name">{repo.name}</p>
                            {repo.description && <p className="github-repo-desc">{repo.description}</p>}
                            <div className="github-repo-meta">
                                {repo.language && <span>{repo.language}</span>}
                                <span>★ {repo.stargazers_count}</span>
                            </div>
                        </a>
                    ))}
                </div>
            )}
        </motion.div>
    )
}
