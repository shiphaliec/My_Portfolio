import { useTheme } from '../theme/useTheme'
import styled from './ThemeToggle.module.css'

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  return (
    <button
      className={styled.toggle}
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
      title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      {theme === 'light' ? (
        <span className={styled.icon}>🌙</span>
      ) : (
        <span className={styled.icon}>☀️</span>
      )}
    </button>
  )
}
