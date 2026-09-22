import { Link } from 'react-router-dom'
import { Mail } from 'lucide-react'

function Home() {
  const features = [
    { title: 'Clean Code', desc: 'Write maintainable and scalable code' },
    { title: 'Responsive Design', desc: 'Works on all devices' },
    { title: 'Modern Technologies', desc: 'React, JavaScript, etc.' },
    { title: 'Always Learning', desc: 'Growing every day' },
  ]

  return (
    <div>
      <section className="bg-[#0a1128] px-6 py-16">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 items-center gap-10">
          <div>
            <p className="text-white text-xl mb-2">Hi, I'm</p>
            <h1 className="text-5xl font-extrabold text-white mb-2">Adhi</h1>
            <h2 className="text-3xl font-extrabold mb-6">
              <span className="text-blue-500">Frontend</span>{' '}
              <span className="text-white">Developer</span>
            </h2>
            <p className="text-gray-300 max-w-md mb-8">
              I build modern, responsive and user-friendly websites using the
              latest web technologies.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/projects"
                className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-full font-medium hover:bg-blue-700 transition"
              >
                View Projects
              </Link>
              <Link
                to="/contact"
                className="flex items-center gap-2 border border-blue-400 text-white px-6 py-3 rounded-full font-medium hover:bg-blue-950 transition"
              >
                Contact Me
                <Mail size={18} />
              </Link>
            </div>
          </div>

          <div className="relative flex justify-center">
            <div className="w-72 h-72 md:w-96 md:h-96 bg-blue-600/20 rounded-full flex items-center justify-center text-gray-400">
              Photo coming soon
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-12 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {features.map(function (f) {
            return (
              <div key={f.title}>
                <h3 className="font-semibold text-gray-800">{f.title}</h3>
                <p className="text-gray-500 text-sm">{f.desc}</p>
              </div>
            )
          })}
        </div>
      </section>
    </div>
  )
}

export default Home