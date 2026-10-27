
const Footer = () => {
  return (
    <footer
      className="flex flex-col gap-8 bg-gray-500 px-5 py-10 scroll-mt-24 sm:px-8 sm:py-12 md:px-12 lg:flex-row lg:items-center lg:justify-between lg:px-20 lg:py-15"
      id="contact"
    >
      <div className="text-white">
        <h1 className="mt-3 font-serif text-2xl leading-snug sm:text-3xl">
          Have something to build?
        </h1>

        <p className="mt-2 max-w-lg text-sm sm:text-base">
          I'm always open to new opportunities, collaborations, and interesting projects.
        </p>
      </div>

      <div className="mt-2 flex flex-wrap gap-6 sm:gap-8 lg:mt-9">
        {/* <a
          href="/projects"
          className="flex h-fit items-center gap-2 rounded-full bg-white px-4 py-2
               font-medium text-black transition duration-200
               hover:bg-gray-700 hover:text-white"
        >
          View My Work
          <span>→</span>
        </a> */}

        <div className="flex flex-wrap gap-6 text-white sm:gap-8">
          <a
            href="mailto:reachruhania@gmail.com"
            className="min-w-0 break-words lg:border-l lg:border-gray-400 lg:pl-8"
          >
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
            <p className="break-all text-sm hover:underline sm:text-base">
              reachruhania@gmail.com
            </p>
          </a>

          <a
            href="https://www.linkedin.com/in/ruhani-dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="min-w-0 break-words lg:border-l lg:border-gray-400 lg:pl-8"
          >
            <span className="text-xl font-bold leading-none">in</span>

            <p className="mt-2 text-sm">LinkedIn</p>
            <p className="break-all text-sm hover:underline sm:text-base">
              linkedin.com/in/ruhani-dev
            </p>
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
