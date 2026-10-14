const experiences = [
  {
    role: "Web Developer Intern",
    company: "Confidential",
    date: "Jun 2024 — Aug 2024 · Remote",
    description:
      "Completed 4+ months of hands-on React.js and JavaScript training. Developed responsive interfaces using React.js, related libraries, and API integration. Practiced core React concepts including Hooks, Props State Management, Component-Based Development, Event Handling, Forms, and Conditional List Rendering. Worked with REST APIs using the Fetch API, Promises, and async/await for asynchronous JavaScript.",
  }]

export default function About() {
  return (
    <section className="scroll-mt-24 p-5" id="about">
      <div className="mx-auto max-w-300">
        <div className="flex flex-col gap-10 rounded-2xl  p-6 md:p-10 lg:flex-row">
          <div className="flex-1 border-t border-b border-neutral-300">
            <p className="text-xl font-medium text-gray-700">
          ABOUT ME
        </p>

            <h1 className="mt-3 text-2xl md:text-3xl leading-snug">
              Turning ideas into functional, beautiful web experiences.
            </h1>

            <p className="mt-6 max-w-lg text-gray-700">
              I am a Web developer and BCA student who likes turning ideas into things people can actually use. I learn best by building, experimenting, and figuring things out along the way.
            </p>

            <p className="mt-6 max-w-lg text-gray-700">

              Currently building projects, exploring new technologies, and looking for opportunities to work on real products with real people. I am open to internships, freelance work, and part-time opportunities.

            </p>
          </div>
          <div className="w-full rounded-2xl bg-gray-100 p-6 lg:w-110 ">
            <div>
              <p className="text-xl uppercase text-gray-700">Experience
              </p>
              <div className="mt-4 ">
                {experiences.map((experience) => (
                  <div key={experience.role}>
                    <h3 className="text-sm font-medium">
                      {experience.role}
                    </h3>
                    <p className="mt-1 text-s text-neutral-500">
                      {experience.company}
                    </p>
                    <p className="mt-2 text-s text-neutral-400">
                      {experience.date}
                    </p>
                    <p className="mt-3 text-s leading-relaxed text-neutral-500">
                      {experience.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}