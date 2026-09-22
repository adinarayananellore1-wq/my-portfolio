import {
  User,
  MapPin,
  Mail,
  GraduationCap,
  Heart,
  Download,
  Code2,
  Palette,
  Braces,
  Atom,
  GitBranch,
} from 'lucide-react'
import profileImg from '../assets/profile.jpg'

function About() {
  const skills = [
    { icon: Code2, name: 'HTML' },
    { icon: Palette, name: 'CSS' },
    { icon: Braces, name: 'JavaScript' },
    { icon: Atom, name: 'React' },
    { icon: GitBranch, name: 'Git & GitHub' },
  ]

  const interests = [
    'Web Development',
    'Problem Solving',
    'Travel & Exploration',
    'Photography',
  ]

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* DARK HEADER BANNER */}
      <section className="bg-[#0a1128] px-6 py-16 text-center">
        <p className="text-blue-400 font-semibold mb-2">— About Me</p>
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
          Get to Know Me
        </h1>
        <p className="text-gray-300 max-w-xl mx-auto">
          A passionate Frontend Developer who loves turning ideas into real,
          working projects.
        </p>
      </section>

      {/* MAIN CONTENT */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 -mt-10 mb-12 px-6">
        <div className="md:col-span-2 bg-white rounded-2xl shadow-sm p-8">
          <h2 className="text-2xl font-bold text-gray-900">I'm Adhi</h2>
          <h3 className="text-lg text-blue-600 font-semibold mb-4">Frontend Developer</h3>
          <p className="text-gray-600 mb-6">
            I am a passionate Frontend Developer with a strong interest in
            building creative and interactive web applications. I love
            learning new technologies and turning ideas into real projects.
          </p>

          <ul className="text-gray-700 space-y-3 mb-6">
            <li className="flex items-center gap-2">
              <User size={16} className="text-blue-600" />
              <strong>Name:</strong> Adhi
            </li>
            <li className="flex items-center gap-2">
              <MapPin size={16} className="text-blue-600" />
              <strong>Location:</strong> Hyderabad, India
            </li>
            <li className="flex items-center gap-2">
              <Mail size={16} className="text-blue-600" />
              <strong>Email:</strong> adinarayananellore1@gmail.com
            </li>
            <li className="flex items-center gap-2">
              <GraduationCap size={16} className="text-blue-600" />
              <strong>Education:</strong> RMD Engineering College, Chennai
            </li>
          </ul>

          <button className="flex items-center gap-2 border border-blue-600 text-blue-600 px-5 py-2 rounded-lg font-medium hover:bg-blue-50 transition">
            <Download size={16} />
            Download Resume
          </button>
        </div>

        <div className="bg-white rounded-2xl shadow-sm p-6">
          <img
            src={profileImg}
            alt="Adhi"
            className="w-full h-48 rounded-2xl object-cover object-top mb-6"
          />

          <p className="text-blue-600 font-semibold mb-3">— Skills</p>
          <div className="grid grid-cols-2 gap-3">
            {skills.map(function (skill) {
              const Icon = skill.icon
              return (
                <div
                  key={skill.name}
                  className="bg-gray-50 border rounded-xl p-3 flex flex-col items-center text-center"
                >
                  <Icon className="text-blue-600 mb-1" size={22} />
                  <span className="text-sm font-medium">{skill.name}</span>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* EDUCATION + INTERESTS */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 px-6 pb-16">
        <div className="bg-white rounded-2xl shadow-sm p-6">
          <h3 className="flex items-center gap-2 text-lg font-semibold mb-3">
            <GraduationCap size={20} className="text-blue-600" />
            Education
          </h3>
          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="font-medium">B.E./B.Tech</p>
            <p className="text-sm text-gray-500">RMD Engineering College, Chennai</p>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm p-6">
          <h3 className="flex items-center gap-2 text-lg font-semibold mb-3">
            <Heart size={20} className="text-blue-600" />
            Interests
          </h3>
          <ul className="text-gray-700 space-y-2">
            {interests.map(function (item) {
              return <li key={item}>- {item}</li>
            })}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default About