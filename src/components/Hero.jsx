import { Link } from "react-router-dom"

const Hero = () => {
  return (
    <section className=" bg-gray-100 flex items-center px-6 py-24 md:px-12 lg:px-20 scroll-mt-24" id="home">
      <div className="max-w-3xl">
        <p className="text-xl md:text-2xl font-medium text-gray-800 mb-3">
          HELLO, I'M
        </p>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black">
          RUHANI
        </h1>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-normal text-gray-900 mt-3 ">
          Web Developer.
        </h2>
        <p className="mt-6 text-lg md:text-xl text-gray-700 max-w-2xl">
          I build responsive, interactive web experiences
          <br className="hidden md:block" />
          -with modern technologies and a keen eye for detail.
        </p>

        <div className="flex flex-wrap gap-5 mt-9">
          {/* <a
            href="/projects"
            className="bg-gray-800 text-white px-9 py-4 rounded-full
                       text-base font-medium
                       hover:bg-gray-900 transition duration-200
                       flex items-center gap-2"
          >
            View My Work
            <span>→</span>
          </a> */}
          <Link to="/contact"
            className="border-2 border-gray-300 text-gray-800
                       px-9 py-4 rounded-full text-base font-medium
                       hover:bg-gray-900 hover:text-white
                       hover:border-black transition duration-200"
          >
            Contact Me
          </Link>
        </div>

        <div className="flex items-center gap-3 mt-8 text-sm md:text-base text-gray-500">
          <span>Based in India</span>
          <span>•</span>
          <span>Open to new opportunities</span>
        </div>
      </div>

    </section>
  )
}

export default Hero
