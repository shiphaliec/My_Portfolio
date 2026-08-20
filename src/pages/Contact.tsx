import { useState } from 'react'
import styled from './Contact.module.css'

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [hasError, setHasError] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setHasError(false)
    setIsSubmitted(false)

    try {
      const response = await fetch('https://formspree.io/f/xdaprdgd', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: `New message from ${formData.name}`,
          _replyto: formData.email,
        }),
      })

      if (!response.ok) {
        throw new Error('Form submission failed')
      }

      setIsSubmitted(true)
      setFormData({ name: '', email: '', message: '' })
      setTimeout(() => setIsSubmitted(false), 5000)
    } catch (error) {
      console.error('Form submission error:', error)
      setHasError(true)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className={`${styled.contact} reveal-section`}>
      <div className={styled.container}>
        <h2 className="reveal-item">Get In Touch</h2>
        <p className={`${styled.subtitle} reveal-item`}>I'd love to hear from you. Let's connect!</p>

        {isSubmitted && (
          <div className={`${styled.successMessage} reveal-item`}>
            ✓ Thanks for your message! I'll get back to you soon.
          </div>
        )}

        <form
          className={styled.form}
          onSubmit={handleSubmit}
        >
          <div className={`${styled.formGroup} reveal-item`}>
            <label htmlFor="name">Name</label>
            <input
              id="name"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Your name"
              disabled={isSubmitting}
            />
          </div>

          <div className={`${styled.formGroup} reveal-item`}>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="your@email.com"
              disabled={isSubmitting}
            />
          </div>

          <div className={`${styled.formGroup} reveal-item`}>
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Your message here..."
              rows={5}
              disabled={isSubmitting}
            />
          </div>

          <button
            type="submit"
            className={styled.button}
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>

          {hasError && (
            <div className={styled.errorMessage}>
              ✗ There was an error sending your message. Please try again.
            </div>
          )}
        </form>
      </div>
    </section>
  )
}
