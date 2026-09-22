function ProjectCard({ project }) {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 text-left">
      <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
      <p className="text-gray-600 mb-4">{project.description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tech.map((t) => (
          <span key={t} className="bg-blue-100 text-blue-700 text-sm px-3 py-1 rounded-full">
            {t}
          </span>
        ))}
      </div>
      <a href={project.link} target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">
        View Project →
      </a>
    </div>
  )
}

export default ProjectCard