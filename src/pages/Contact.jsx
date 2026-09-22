import { useState } from 'react'
import { Mail, Phone, MapPin } from 'lucide-react'

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
    <div className="bg-gray-50 min-h-screen py-16 px-6">
      <div className="max-w-4xl mx-auto text-center mb-10">
        <p className="text-blue-600 font-semibold mb-2">Get In Touch</p>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Contact Me</h1>
        <p className="text-gray-600">
          Feel free to reach out for any project, collaboration or just a
          friendly hello. I'll get back to you as soon as possible.
        </p>
      </div>

      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10">
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h2 className="font-semibold text-lg mb-4">Send a Message</h2>

          {submitted ? (
            <p className="text-green-600">Thanks! Your message has been sent.</p>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div>
                <label className="text-sm text-gray-600">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  required
                  className="w-full border rounded-lg px-4 py-2 mt-1"
                />
              </div>
              <div>
                <label className="text-sm text-gray-600">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  required
                  className="w-full border rounded-lg px-4 py-2 mt-1"
                />
              </div>
              <div>
                <label className="text-sm text-gray-600">Message</label>
                <textarea
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Type your message here..."
                  required
                  className="w-full border rounded-lg px-4 py-2 mt-1"
                />
              </div>
              <button
                type="submit"
                className="bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition"
              >
                Send Message
              </button>
            </form>
          )}
        </div>

        <div>
          <h2 className="font-semibold text-lg mb-4">Contact Information</h2>
          <ul className="space-y-4 text-gray-700">
            <li className="flex items-center gap-3">
              <Mail size={18} className="text-blue-600" /> adinarayananellore1@gmail.com
            </li>
            <li className="flex items-center gap-3">
              <Phone size={18} className="text-blue-600" /> +91 00000 00000
            </li>
            <li className="flex items-center gap-3">
              <MapPin size={18} className="text-blue-600" /> Hyderabad, India
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Contact