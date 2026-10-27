
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav
      className="sticky top-0 z-50 flex flex-wrap items-center justify-between gap-4 border-b border-gray-200 bg-white/90 px-4 py-4 backdrop-blur-md sm:px-8 sm:py-5 md:px-12 lg:px-20"
    >
      <h1 className="text-xl font-bold tracking-tight text-gray-900 sm:text-2xl">
        Ruhani
      </h1>

      <div className="flex flex-wrap items-center justify-center gap-3 text-sm font-medium text-gray-600 sm:gap-5 md:gap-8 sm:text-base">
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

      <Link
        to="/contact"
        className="rounded-full bg-zinc-900 px-4 py-2 text-xs font-medium text-white transition hover:bg-zinc-700 sm:px-5 sm:py-2.5 sm:text-sm"
      >
        Let's Talk
      </Link>
    </nav>
  );
};

export default Navbar;
