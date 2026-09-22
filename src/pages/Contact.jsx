import { useState } from 'react'

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  function handleSubmit(e) {
    e.preventDefault()
    console.log(formData)
    setSubmitted(true)
  }

  return (
    <div className="max-w-xl mx-auto mt-24 px-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Contact Me</h1>

      {submitted ? (
        <p className="text-green-600 text-center">Thanks! Your message has been sent.</p>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="border rounded-lg px-4 py-2"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="border rounded-lg px-4 py-2"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
            className="border rounded-lg px-4 py-2"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>
      )}
    </div>
  )
}

export default Contact