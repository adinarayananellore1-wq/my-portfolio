import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className="text-center mt-24 px-4">
      <h1 className="text-4xl font-bold text-blue-600">Hi, I'm Adhi</h1>
      <p className="text-gray-600 mt-2 mb-8">Welcome to my portfolio website.</p>

      <div className="flex justify-center gap-4">
        <Link
          to="/projects"
          className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition"
        >
          View My Work
        </Link>
        <Link
          to="/contact"
          className="border border-gray-400 px-6 py-3 rounded-full hover:bg-gray-100 transition"
        >
          Contact Me
        </Link>
      </div>
    </div>
  )
}

export default Home