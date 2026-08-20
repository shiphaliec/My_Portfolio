import styled from './Hero.module.css'
import headerImage from './Header image.jpeg'

export function Hero() {
  return (
    <section className={`${styled.hero} reveal-section`} style={{ backgroundImage: `url(${headerImage})` }}>
      <div className={styled.overlay}></div>
      <div className={styled.container}>
        <h1 className={`${styled.title} reveal-item`}>Welcome to My Portfolio</h1>
        <p className={`${styled.subtitle} reveal-item`}>
          Crafting beautiful, responsive web experiences with React and modern technologies
        </p>
        {/* <div className={styled.tagline}>Acknowledged by design excellence</div> */}
      </div>
      <div className={`${styled.socialLinks} reveal-item`}>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className={styled.socialIcon} title="GitHub">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
          </svg>
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className={styled.socialIcon} title="LinkedIn">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"></path>
            <circle cx="4" cy="4" r="2"></circle>
          </svg>
        </a>
        <a href="#" className={styled.socialIcon} title="Resume">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
            <polyline points="14 2 14 8 20 8"></polyline>
            <line x1="12" y1="11" x2="12" y2="17"></line>
            <line x1="9" y1="14" x2="15" y2="14"></line>
          </svg>
        </a>
      </div>
    </section>
  )
}
