import styled from './About.module.css'
import profileImg from './linkedIn dp.jpeg'

export function About() {
  return (
    <section id="about" className={`${styled.about} reveal-section`}>
      <div className={styled.container}>
        <h2>About Me</h2>
        <div className={styled.content}>
          <div className={styled.imageWrapper}>
            <div className={styled.imageBorder}>
              <img src={profileImg} alt="Profile" className={styled.profileImage} />
            </div>
            <div className={styled.glow} />
          </div>
          <div className={styled.text}>
            <p className="reveal-item">
              Shiphali Chaurasia is a dedicated, resilient developer who tackles challenges head-on. 
            </p>
            <p className="reveal-item">
               As a software developer, I craft innovative web applications using AI tools alongside my original concepts. 
            </p>
            <p className="reveal-item">
              I pour passion into every project and deliver results that excel.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
