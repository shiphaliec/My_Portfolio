import styled from './Footer.module.css'

export function Footer() {
  return (
    <footer className={styled.footer}>
      <div className={styled.container}>
        <p>&copy; 2026 My Portfolio. All rights reserved.</p>
        <div className={styled.social}>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="mailto:hello@example.com">Email</a>
        </div>
      </div>
    </footer>
  )
}
