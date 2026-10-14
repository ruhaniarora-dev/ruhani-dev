const toolkit = [
  {
    title: "Frontend",
    skills: "HTML5, CSS3, JavaScript, TypeScript, React.js",
  },
  {
    title: "Database",
    skills: "MySQL",
  },
  {
    title: "Programming",
    skills: "Python",
  },
  {
    title: "Tools",
    skills: "Git, GitHub, VS Code, Chrome DevTools, Canva, CapCut",
  },
  {
    title: "Data & Excel",
    skills:
      "Microsoft Excel, Advanced Excel Formulas, Charts & Graphs, Data Visualization, Data Analysis",
  },
];

const Toolkit = () => {
  return (
    <section className="bg-gray-100 py-12 md:px-12 lg:px-20">
      <div className="mx-auto max-w-6xl">

        <div className="flex items-center gap-2">
          <span className="text-2xl font-mono text-gray-500">
            {"</>"}
          </span>

          <p className="text-xl font-mono font-medium text-gray-800">
            TOOLKIT
          </p>
        </div>

        <div className="mt-2 flex flex-wrap gap-5">
          {toolkit.map((item) => (
            <div
              key={item.title}
              className="w-full transition duration-300 hover:-translate-y-1 cursor-pointer rounded-2xl bg-white p-4 md:w-[50%] lg:w-[32%]"
            >
              <p className="text-sm text-gray-500">
                {item.title}
              </p>

              <p className="mt-4 font-mono text-m  leading-relaxed text-gray-800">
                {item.skills}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Toolkit;