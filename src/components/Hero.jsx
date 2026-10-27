
import { Link } from "react-router-dom"

const Hero = () => {
  return (
    <section
      className="flex items-center bg-gray-100 px-4 py-16 scroll-mt-24 sm:px-6 sm:py-20 md:px-12 md:py-24 lg:px-20"
      id="home"
    >
      <div className="w-full max-w-3xl">
        <p className="mb-3 text-lg font-medium text-gray-800 sm:text-xl md:text-2xl">
          HELLO, I'M
        </p>

        <h1 className="text-4xl font-black sm:text-5xl md:text-7xl lg:text-8xl">
          RUHANI
        </h1>

        <h2 className="mt-3 text-3xl font-normal text-gray-900 sm:text-4xl md:text-5xl lg:text-6xl">
          Web Developer.
        </h2>

        <p className="mt-5 max-w-2xl text-base text-gray-700 sm:mt-6 sm:text-lg md:text-xl">
          I build responsive, interactive web experiences
          <br className="hidden md:block" />
          -with modern technologies and a keen eye for detail.
        </p>

        <div className="mt-7 flex flex-wrap gap-4 sm:mt-9 sm:gap-5">
          {/* <a
            href="/projects"
            className="flex items-center gap-2 rounded-full bg-gray-800 px-9 py-4
                       text-base font-medium text-white
                       transition duration-200 hover:bg-gray-900"
          >
            View My Work
            <span>→</span>
          </a> */}

          <Link
            to="/contact"
            className="rounded-full border-2 border-gray-300 px-6 py-3
                       text-sm font-medium text-gray-800
                       transition duration-200 hover:border-black
                       hover:bg-gray-900 hover:text-white
                       sm:px-9 sm:py-4 sm:text-base"
          >
            Contact Me
          </Link>



          <a
            href="/RuhaniArora_dev.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border-2 border-gray-300 px-6 py-3 text-sm font-medium text-gray-800 transition duration-200 hover:border-black hover:bg-gray-900 hover:text-white sm:px-9 sm:py-4 sm:text-base"
          >
            View Resume ↗
          </a>



        </div>

        <div className="mt-7 flex flex-wrap items-center gap-x-3 gap-y-2 text-xs text-gray-500 sm:mt-8 sm:text-sm md:text-base">
          <span>Based in India</span>
          <span>•</span>
          <span>Open to new opportunities</span>
        </div>
      </div>
    </section>
  )
}

export default Hero
