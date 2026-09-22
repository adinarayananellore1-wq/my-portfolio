import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";

function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(formData);
    setSubmitted(true);
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* DARK HEADER BANNER */}
      <section className="bg-[#0a1128] px-6 py-16 text-center">
        <p className="text-blue-400 font-semibold mb-2">Get In Touch</p>
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Contact Me</h1>
        <p className="text-gray-300 max-w-xl mx-auto">
          Feel free to reach out for any project, collaboration or just a
          friendly hello. I will get back to you as soon as possible.
        </p>
      </section>

      {/* MAIN CONTENT */}
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 -mt-10 px-6 pb-16">
        <div className="bg-white p-6 rounded-2xl shadow-sm">
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
                className="flex items-center justify-center gap-2 bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition"
              >
                <Send size={16} />
                Send Message
              </button>
            </form>
          )}
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm">
          <h2 className="font-semibold text-lg mb-4">Contact Information</h2>
          <ul className="space-y-4 text-gray-700">
            <li className="flex items-center gap-3">
              <span className="bg-blue-100 text-blue-600 p-2 rounded-full">
                <Mail size={16} />
              </span>
              adinarayananellore1@gmail.com
            </li>
            <li className="flex items-center gap-3">
              <span className="bg-blue-100 text-blue-600 p-2 rounded-full">
                <Phone size={16} />
              </span>
              +91 00000 00000
            </li>
            <li className="flex items-center gap-3">
              <span className="bg-blue-100 text-blue-600 p-2 rounded-full">
                <MapPin size={16} />
              </span>
              Hyderabad, India
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Contact;