function Projects() {
  const projects = [
    {
      title: "Weather Dashboard",
      desc: "A responsive weather app that shows real-time forecasts for any city using a public weather API.",
      tech: ["React", "Tailwind CSS", "API"],
      demo: "#",
      github: "#",
      image: "https://picsum.photos/seed/weather/400/300",
    },
    {
      title: "Task Manager",
      desc: "A to-do list app to add, complete and delete tasks, with data saved so nothing is lost on refresh.",
      tech: ["React", "JavaScript", "CSS"],
      demo: "#",
      github: "#",
      image: "https://picsum.photos/seed/tasks/400/300",
    },
    {
      title: "Recipe Finder",
      desc: "Search and browse recipes by ingredient, with clean cards showing cook time and instructions.",
      tech: ["React", "Tailwind CSS", "API"],
      demo: "#",
      github: "#",
      image: "https://picsum.photos/seed/recipe/400/300",
    },
  ];

  return (
    <div>
      <section className="bg-[#0a1128] px-6 py-16 text-center">
        <p className="text-blue-400 font-semibold mb-2">My Projects</p>
        <h1 className="text-3xl font-bold text-white mb-2">Some of My Work</h1>
        <p className="text-gray-300 max-w-xl mx-auto">
          Here are a few projects I built using modern web technologies. Each
          project helped me learn something new and improve my skills.
        </p>
      </section>

      <section className="bg-white px-6 py-12">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
          {projects.map(function (p) {
            return (
              <div key={p.title} className="border rounded-xl overflow-hidden shadow-sm">
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-40 object-cover"
                />
                <div className="p-5">
                  <h3 className="font-semibold text-lg mb-2">{p.title}</h3>
                  <p className="text-gray-600 text-sm mb-3">{p.desc}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {p.tech.map(function (t) {
                      return (
                        <span key={t} className="bg-gray-100 text-gray-600 text-xs px-3 py-1 rounded-full">
                          {t}
                        </span>
                      );
                    })}
                  </div>
                  <div className="flex gap-3">
                    <a href={p.demo} className="flex-1 text-center bg-blue-600 text-white text-sm py-2 rounded-lg hover:bg-blue-700 transition">
                      Live Demo
                    </a>
                    <a href={p.github} className="flex-1 text-center border text-sm py-2 rounded-lg hover:bg-gray-50 transition">
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}

export default Projects