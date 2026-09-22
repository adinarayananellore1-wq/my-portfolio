import { Link } from 'react-router-dom'
import { Github, Linkedin, Mail, ChevronDown } from 'lucide-react'
import profileImg from '../assets/profile.jpg'

function Home() {
  const skills = [
    { name: 'HTML', desc: 'Structure & semantics', color: 'bg-orange-500' },
    { name: 'CSS', desc: 'Styling & responsive design', color: 'bg-blue-500' },
    { name: 'JavaScript', desc: 'Interactivity & logic', color: 'bg-yellow-400' },
    { name: 'React', desc: 'Component based UI', color: 'bg-cyan-400' },
    { name: 'Git & GitHub', desc: 'Version control & collaboration', color: 'bg-orange-600' },
  ]

  return (
    <div className="bg-[#0a1128]">
      {/* HERO SECTION */}
      <section className="relative max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 items-center gap-10">
        {/* Left: text */}
        <div>
          <p className="text-white text-xl mb-2">Hello, I'm</p>
          <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-2">Adhi</h1>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6">
            <span className="text-blue-500">Frontend</span>{' '}
            <span className="text-white">Developer</span>
          </h2>
          <p className="text-gray-300 max-w-md mb-8">
            I build modern, responsive and user-friendly websites using the
            latest web technologies. Passionate about creating clean UI,
            smooth experiences and turning ideas into real projects.
          </p>

          <div className="flex flex-wrap gap-4 mb-8">
            <Link
              to="/projects"
              className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-full font-medium hover:bg-blue-700 transition"
            >
              View Projects <span>→</span>
            </Link>
            <Link
              to="/contact"
              className="flex items-center gap-2 border border-blue-400 text-white px-6 py-3 rounded-full font-medium hover:bg-blue-950 transition"
            >
              Contact Me <Mail size={18} />
            </Link>
          </div>

          {/* Social icons */}
          <div className="flex gap-3">
            <a href="#" target="_blank" rel="noreferrer" className="bg-blue-900 hover:bg-blue-700 p-2 rounded-full transition">
              <Github size={18} className="text-white" />
            </a>
            <a href="#" target="_blank" rel="noreferrer" className="bg-blue-900 hover:bg-blue-700 p-2 rounded-full transition">
              <Linkedin size={18} className="text-white" />
            </a>
            <a href="mailto:youremail@example.com" className="bg-blue-900 hover:bg-blue-700 p-2 rounded-full transition">
              <Mail size={18} className="text-white" />
            </a>
          </div>
        </div>

        {/* Right: image */}
        <div className="relative flex justify-center">
          <div className="absolute w-72 h-72 md:w-96 md:h-96 bg-blue-600/30 rounded-full blur-2xl"></div>
          <img
            src={profileImg}
            alt="Adhi"
            className="relative z-10 w-72 md:w-96 rounded-2xl object-cover"
          />
        </div>
      </section>

      {/* Scroll down */}
      <div className="flex flex-col items-center text-gray-400 pb-10">
        <div className="border border-gray-500 rounded-full p-2 mb-1">
          <ChevronDown size={16} />
        </div>
        <span className="text-sm">Scroll Down</span>
      </div>

      {/* SKILLS SECTION */}
      <section className="bg-[#0e1a3a] py-20 px-6">
        <div className="text-center mb-12">
          <p className="text-blue-400 font-semibold mb-2">— My Skills —</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
            Technologies I Work With
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Here are some of the technologies and tools I use to build modern web applications.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-4">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="bg-[#0a1128] border border-blue-900 rounded-xl p-6 text-center hover:border-blue-500 transition"
            >
              <div className={`w-12 h-12 mx-auto mb-3 rounded-lg ${skill.color} flex items-center justify-center text-white font-bold`}>
                {skill.name[0]}
              </div>
              <h3 className="text-white font-semibold">{skill.name}</h3>
              <p className="text-gray-400 text-sm">{skill.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Home