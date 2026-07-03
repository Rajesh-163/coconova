import { useState } from 'react'

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8080'

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | sending | sent | error

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch(`${API_URL}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      })
      if (!res.ok) throw new Error('Request failed')
      setStatus('sent')
      setForm({ name: '', email: '', phone: '', message: '' })
    } catch (err) {
      setStatus('error')
    }
  }

  if (status === 'sent') {
    return (
      <div className="form-confirmation">
        <p className="eyebrow">Message received</p>
        <h3>We'll get back to you shortly.</h3>
        <p>Thanks for reaching out to CocoNova. Our team typically replies within one business day.</p>
        <button type="button" className="btn btn-ghost" onClick={() => setStatus('idle')}>Send another message</button>
      </div>
    )
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="field-row">
        <label>
          <span>Name</span>
          <input type="text" name="name" required value={form.name} onChange={handleChange} placeholder="Your full name" />
        </label>
        <label>
          <span>Email</span>
          <input type="email" name="email" required value={form.email} onChange={handleChange} placeholder="you@company.com" />
        </label>
      </div>
      <label>
        <span>Phone (optional)</span>
        <input type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder="+91 ..." />
      </label>
      <label>
        <span>What do you need?</span>
        <textarea name="message" required rows={5} value={form.message} onChange={handleChange} placeholder="Tell us about bulk order size, product type, or OEM requirements..." />
      </label>
      <button type="submit" className="btn btn-primary" disabled={status === 'sending'}>
        {status === 'sending' ? 'Sending…' : 'Send inquiry'}
      </button>
      {status === 'error' && (
        <p className="form-error">Something went wrong reaching the server. Please try again or email us directly.</p>
      )}
    </form>
  )
}
