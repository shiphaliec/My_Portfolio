import styled from './Certifications.module.css'

export function Certifications() {
  return (
    <section id="certifications" className={`${styled.certifications} reveal-section`}>
      <div className={styled.container}>
        <h2 className="reveal-item">Certifications & Awards</h2>
        <div className={styled.grid}>
          <div className={styled.card}>
            <h3 className="reveal-item">Certifications</h3>
            <ul className="reveal-item">
              <li>Big Data intership Certificate by Samsung Innovation Campus</li>
              <li>Udemy: Reactjs</li>
              <li>Frontend Devepoment intern by InfoCampus</li>
              <li>IBM skillbuild: Cyber Security</li>
            </ul>
          </div>
          <div className={styled.card}>
            <h3 className="reveal-item">Awards</h3>
            <ul className="reveal-item">
              <li>Awarded as Rank 3rd in Institute</li>
              <li>Academic Excellence Certificate</li>
              <li>Best Innovative Project Award — Project ASHWINI </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
