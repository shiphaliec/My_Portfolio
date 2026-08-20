import styles from './ASHWINI_gallery.module.css'

import AdminImg from './Project ASHWINI/Admin.png'
import CautionImg from './Project ASHWINI/caution.png'
import DocDashImg from './Project ASHWINI/Doc-dash.png'
import DocDashboardImg from './Project ASHWINI/Doc_dashboard.png'
import FeaturesImg from './Project ASHWINI/Features.png'
import HomePageImg from './Project ASHWINI/Home_Page.png'
import LogInImg from './Project ASHWINI/Log_in.png'
import MedicineRecommedImg from './Project ASHWINI/Medicine_recommed.png'
import RecommendationHistoryImg from './Project ASHWINI/Recommendaation_history.png'

const images = [
  { src: AdminImg, alt: 'Admin' },
  { src: CautionImg, alt: 'Caution' },
  { src: DocDashImg, alt: 'Doc dash' },
  { src: DocDashboardImg, alt: 'Doc dashboard' },
  { src: FeaturesImg, alt: 'Features' },
  { src: HomePageImg, alt: 'Home page' },
  { src: LogInImg, alt: 'Log in' },
  { src: MedicineRecommedImg, alt: 'Medicine recommend' },
  { src: RecommendationHistoryImg, alt: 'Recommendation history' },
]

export default function ASHWINI_gallery() {
  return (
    <main className={styles.galleryMain}>
      <div className={styles.headerRow}>
        <button
          className={styles.backLink}
          onClick={e => {
            e.preventDefault()
            window.location.hash = ''
          }}
        >
          ← Back
        </button>

        <h1 className={styles.title}>A glimpse of Project ASHWINI</h1>

        <div style={{ width: 40 }} />
      </div>

      <div className={styles.imageStrip}>
        {images.map((img, idx) => (
          <figure key={idx} className={styles.imageFigure}>
            <img src={img.src} alt={img.alt} className={styles.galleryImage} />
          </figure>
        ))}
      </div>

      <p className={styles.note}>Scroll horizontally to view more images — swipe on touch devices.</p>
    </main>
  )
}
