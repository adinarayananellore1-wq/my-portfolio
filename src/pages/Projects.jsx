function Projects() {
  const projects = [
    {
      title: 'Project One',
      desc: 'Short description of what this project does and the problem it solves.',
      tech: ['React', 'CSS', 'JavaScript'],
      demo: '#',
      github: '#',
    },
    {
      title: 'Project Two',
      desc: 'Short description of what this project does and the problem it solves.',
      tech: ['React', 'CSS', 'JavaScript'],
      demo: '#',
      github: '#',
    },
    {
      title: 'Project Three',
      desc: 'Short description of what this project does and the problem it solves.',
      tech: ['HTML', 'CSS', 'JavaScript'],
      demo: '#',
      github: '#',
    },
  ]

  return (
    <div>
      <section className="bg-[#0a1128] px-6 py-16 text-center">
        <p className="text-blue-400 font-semibold mb-2">My Projects</p>
        <h1 className="text-3xl font-bold text-white mb-2">Some of My Work</h1>
        <p className="text-gray-300 max-w-xl mx-auto">
          Here are a few projects I've built using modern web technologies.
          Each project helped me learn something new and improve my skills.
        </p>
      </section>

      <section className="bg-white px-6 py-12">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
          {projects.map((p) => (
            <div key={p.title} className="border rounded-xl overflow-hidden shadow-sm">
              <div className="h-40 bg-gray-200 flex items-center justify-center text-gray-400">
                Project Image
              </div>
              <div className="p-5">
                <h3 className="font-semibold text-lg mb-2">{p.title}</h3>
                <p className="text-gray-600 text-sm mb-3">{p.desc}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {p.tech.map((t) => (
                    <span key={t} className="bg-gray-100 text-gray-600 text-xs px-3 py-1 rounded-full">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  
                    href={p.demo}
                    className="flex-1 text-center bg-blue-600 text-white text-sm py-2 rounded-lg hover:bg-blue-700 transition"
                  >
                    Live Demo
                  </a>
                  
                    href={p.github}
                    className="flex-1 text-center border text-sm py-2 rounded-lg hover:bg-gray-50 transition"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Projects