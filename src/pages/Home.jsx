import { Link } from 'react-router-dom'
import { Mail, Settings, Monitor, Atom, Clock } from 'lucide-react'
import profileImg from '../assets/profile.jpg'

function Home() {
  const features = [
    { icon: Settings, title: 'Clean Code', desc: 'Write maintainable and scalable code' },
    { icon: Monitor, title: 'Responsive Design', desc: 'Works on all devices' },
    { icon: Atom, title: 'Modern Technologies', desc: 'React, JavaScript, etc.' },
    { icon: Clock, title: 'Always Learning', desc: 'Growing every day' },
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
            <img
              src={profileImg}
              alt="Adhi"
              className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover object-top"
            />
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-12 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {features.map(function (f) {
            const Icon = f.icon
            return (
              <div key={f.title} className="flex flex-col items-center">
                <Icon className="text-blue-600 mb-2" size={28} />
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