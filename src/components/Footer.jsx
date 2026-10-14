const Footer = () => {
  return (
    <footer className='bg-gray-500 flex scroll-mt-24' id="contact">
      <div className='text-white px-30 py-15'>

        <h1 className="font-serif mt-3 text-2xl md:text-3xl leading-snug">
          Have something to build?            </h1>
        <p className="mt-2 max-w-lg ">
          I'm always open to new opportunities, collaborations, and interesting projects.
        </p>
      </div>

      <div className="flex flex-wrap gap-5 mt-9">
        {/* <a
          href="/projects"
          className="flex h-fit items-center gap-2 rounded-full bg-white px-4 py-2
               font-medium text-black transition duration-200
               hover:bg-gray-700 hover:text-white"
        >
          View My Work
          <span>→</span>
        </a> */}
        <div className="flex flex-wrap gap-8 text-white">
          <a href="mailto:reachruhania@gmail.com" className="lg:border-l lg:border-gray-400 lg:pl-8">
            <svg
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <rect x="3" y="5" width="18" height="14" rx="2" />
              <path d="m3 7 9 6 9-6" />
            </svg>
            <p className="mt-2 text-sm">Email</p>
            <p className="text-m hover:underline">reachruhania@gmail.com</p>
          </a>

          <a
            href="https://www.linkedin.com/in/ruhani-dev/"
            target="_blank"
            className="lg:border-l lg:border-gray-400 lg:pl-8"
          >
            <span className="text-xl font-bold leading-none">in</span>
            <p className="mt-2 text-sm">LinkedIn</p>
            <p className="text-m hover:underline">linkedin.com/in/ruhani-dev</p>
          </a>
        </div>

      </div>
    </footer>
  )
}

export default Footer
