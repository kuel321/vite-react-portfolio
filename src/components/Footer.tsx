export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-inner">
        <p>© {year} Luke Short.</p>
        <div className="footer-links">
          <a href="https://lukeshort.dev" target="_blank" rel="noreferrer">
            lukeshort.dev
          </a>
          <a href="https://www.linkedin.com/in/luke-short-272434b8/" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href="https://github.com/kuel321" target="_blank" rel="noreferrer">
            GitHub
          </a>
        </div>
      </div>
    </footer>
  )
}
