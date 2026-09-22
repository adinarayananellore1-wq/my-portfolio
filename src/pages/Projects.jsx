import projects from '../data/projects'
import ProjectCard from '../components/ProjectCard'

function Projects() {
  return (
    <div className="max-w-4xl mx-auto mt-24 px-4">
      <h1 className="text-3xl font-bold mb-8 text-center">My Projects</h1>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  )
}

export default Projects