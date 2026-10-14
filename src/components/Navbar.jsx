import { Link } from "react-router-dom";


const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between border-b border-gray-200 bg-white/90 px-8 py-5 backdrop-blur-md md:px-12 lg:px-20 scroll-mt-24" id="home">
      <h1 className="text-2xl font-bold tracking-tight text-gray-900">
        Ruhani
      </h1>

      <div className="flex gap-8 text-m font-medium text-gray-600">
        <Link to="/" className="transition hover:text-gray-900">
          Home
        </Link>

        <Link to="/about" className="transition hover:text-gray-900">
          About Me
        </Link>

        {/* <Link to="/projects" className="transition hover:text-gray-900">
          Projects
        </Link> */}
          <Link to="/education" className="transition hover:text-gray-900">
          Education
        </Link>

        <Link to="/skills" className="transition hover:text-gray-900">
          Services & Toolkit
        </Link>

      </div>

      <Link to="/contact"
        className="rounded-full bg-zinc-900 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-zinc-700"
      >
        Let's Talk
      </Link>
    </nav>
  )
}

export default Navbar