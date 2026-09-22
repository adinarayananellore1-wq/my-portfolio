import { Link, NavLink } from 'react-router-dom'

function Navbar() {
  const linkClass = ({ isActive }) =>
    `hover:text-blue-400 transition ${isActive ? 'text-blue-400 font-semibold' : 'text-white'}`

  return (
    <nav className="bg-[#0a1128] px-6 py-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-extrabold text-white">
          <span className="text-blue-500">A</span>DHI
        </Link>
        <div className="flex gap-8">
          <NavLink to="/" className={linkClass}>Home</NavLink>
          <NavLink to="/about" className={linkClass}>About</NavLink>
          <NavLink to="/projects" className={linkClass}>Projects</NavLink>
          <NavLink to="/contact" className={linkClass}>Contact</NavLink>
        </div>
      </div>
    </nav>
  )
}

export default Navbar