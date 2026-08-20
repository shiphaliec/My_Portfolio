import styled from './Header.module.css'
import { ThemeToggle } from './ThemeToggle'

export function Header() {
  return (
    <header className={styled.header}>
      <nav className={styled.nav}>
        <h1 className={styled.logo}>Shiphali Chaurasia</h1>
        <ul className={styled.navList}>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <ThemeToggle />
      </nav>
    </header>
  )
}
