import styled from './Skills.module.css'

export function Skills() {
  return (
    <section id="skills" className={`${styled.skillsSection} reveal-section`}>
      <div className={styled.container}>
        <h2>Skills</h2>
        <div className={styled.skillSummary}>
          <h3>Skill Summary</h3>
          <div className={styled.summaryRows}>
            <div className={styled.summaryRow}>
              <div className={styled.summaryMeta}>
                <h4>Programming</h4>
                <span className={styled.summaryPercent}>90 / 100</span>
              </div>
              <div className={styled.progressTrack}>
                <div className={styled.progressFill} style={{ width: '90%' }} />
                <span className={styled.progressMarker} style={{ left: '90%' }}>90%</span>
              </div>
            </div>
            <div className={styled.summaryRow}>
              <div className={styled.summaryMeta}>
                <h4>Course Knowledge</h4>
                <span className={styled.summaryPercent}>85 / 100</span>
              </div>
              <div className={styled.progressTrack}>
                <div className={styled.progressFill} style={{ width: '85%' }} />
                <span className={styled.progressMarker} style={{ left: '85%' }}>85%</span>
              </div>
            </div>
            <div className={styled.summaryRow}>
              <div className={styled.summaryMeta}>
                <h4>Frontend</h4>
                <span className={styled.summaryPercent}>92 / 100</span>
              </div>
              <div className={styled.progressTrack}>
                <div className={styled.progressFill} style={{ width: '92%' }} />
                <span className={styled.progressMarker} style={{ left: '92%' }}>92%</span>
              </div>
            </div>
            <div className={styled.summaryRow}>
              <div className={styled.summaryMeta}>
                <h4>Tools & AI</h4>
                <span className={styled.summaryPercent}>88 / 100</span>
              </div>
              <div className={styled.progressTrack}>
                <div className={styled.progressFill} style={{ width: '88%' }} />
                <span className={styled.progressMarker} style={{ left: '88%' }}>88%</span>
              </div>
            </div>
            <div className={styled.summaryRow}>
              <div className={styled.summaryMeta}>
                <h4>Communication</h4>
                <span className={styled.summaryPercent}>95 / 100</span>
              </div>
              <div className={styled.progressTrack}>
                <div className={styled.progressFill} style={{ width: '95%' }} />
                <span className={styled.progressMarker} style={{ left: '95%' }}>95%</span>
              </div>
            </div>
          </div>
        </div>
        <div className={styled.skillsList}>
          <h3>Details</h3>
          <ul>
            <li>
              <strong>Programming Languages</strong>
              <ul>
                <li>C Programming</li>
                <li>Java</li>
              </ul>
            </li>
            <li>
              <strong>Relevant Courses</strong>
              <ul>
                <li>Data Structures & Algorithms</li>
                <li>Database management system</li>
                <li>Operating System</li>
                <li>Computer Networks</li>
              </ul>
            </li>
            <li>
              <strong>Frontend & Database</strong>
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>React</li>
                <li>Firebase</li>
              </ul>
            </li>
            <li>
              <strong>Tools & AI</strong>
              <ul>
                <li>Git & Github</li>
                <li>VS Code</li>
                <li>Microsoft Tools</li>
                <li>Git Copilot</li>
                <li>Claude AI</li>
                <li>ChatGPT</li>
              </ul>
            </li>
            <li>
              <strong>Soft Skills</strong>
              <ul>
                <li>Problem Solving</li>
                <li>Teamwork</li>
                <li>Communication</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
