import styled from './Projects.module.css'
import DeptWebImg from './Dept_web_img.png'

interface Project {
  id: number
  title: string
  description: string
  tags: string[]
  link: string
}

const projects: Project[] = [
  {
    id: 1,
    title: 'ASHWINI : Assistive System for healthcare with intelligent neural network integration',
    description: 'An AI-powered healthcare system designed by a team to deliver cost-effective and accessible medical solutions, particularly aimed at supporting rural populations. The system analyzes user inputs (including text and medical PDF reports) to predict diseases and recommend treatments.',
    tags: ['AI-ML', 'Flask' , 'Python', 'Web-UI'],
    link: '#ASHWINI_gallery',
  },
  {
    id: 2,
    title: 'Poetry Website',
    description: 'A responsive website showcasing poetry collections,with community feature for posting poetries, and a personal archive feature built with React and styled-components.',
    tags: ['React', 'Components', 'Animations', 'UX'],
    link: 'https://unpraisedwrites.pages.dev',
  },
  {
    id: 3,
    title: 'Dark Mode Portfolio',
    description: 'This portfolio website showcases my journey as a software developer and highlights projects built using modern web technologies.It reflects my skills in front‑end development, problem solving, and turning ideas into working, user‑friendly applications. ',
    tags: ['React', 'TypeScript', 'CSS', 'Dark Mode'],
    link: '#',
  },
  {
    id: 4,
    title: 'Departmental Student Management System',
    description: 'A web application for managing student records, courses, and grades, built with UI, Xampp server and MySQL.',
    tags: ['XAMPP', 'MySQL', 'Web App'],
    link: DeptWebImg,
  },
]

export function Projects() {
  return (
    <section id="projects" className={`${styled.projects} reveal-section`}>
      <div className={styled.container}>
        <h2 className="reveal-item">Projects</h2>
        <div className={styled.grid}>
          {projects.map(project => (
            <div key={project.id} className={styled.card}>
              <h3 className="reveal-item">{project.title}</h3>
              <p className="reveal-item">{project.description}</p>
              <div className={`${styled.tags} reveal-item`}>
                {project.tags.map(tag => (
                  <span key={tag} className={styled.tag}>{tag}</span>
                ))}
              </div>
              {project.link && project.link.startsWith('#') ? (
                <button
                  className={`${styled.link} reveal-item`}
                  onClick={e => {
                    e.preventDefault()
                    // set the hash without opening a new tab
                    window.location.hash = project.link
                  }}
                >
                  A glimpse of Project →
                </button>
              ) : (
                <a href={project.link} className={`${styled.link} reveal-item`} target="_blank" rel="noreferrer">A glimpse of Project →</a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
