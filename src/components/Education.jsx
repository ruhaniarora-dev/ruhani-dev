const education = [
  {
    year: "2025 — 2028",
    school: "Panjab University",
    degree: "Bachelor of Computer Applications",
    description: "Exploring web development and modern technologies.",
  },
  {
    year: "2023 — 2025",
    school: "DCM Group of Schools",
    degree: "High School Diploma, Business/Commerce",
    description: "XII Marks obtained — 94%",
  },
  {
    year: "2023",
    school: "ICSE",
    degree: "High School Diploma",
    description: "X Marks obtained — 94%",
  },
];

const Education = () => {
  return (
    <section className=" bg-gray-100 px-6 py-6 md:px-12 lg:px-20 scroll-mt-24" id="education">
      <div className="mx-auto max-w-6xl">
        <p className="text-xl font-medium text-gray-800">
          EDUCATION
        </p>
    
        <div className=" mt-6 flex flex-col gap-5 md:flex-row">
          {education.map((item) => (
            <div
              key={item.school}
              className="flex-1 rounded-2xl bg-white border border-gray-200 p-6 transition duration-300 hover:-translate-y-1 cursor-pointer"
            >
              <p className="text-sm text-gray-500">
                {item.year}
              </p>

              <h3 className="mt-5 text-xl font-semibold text-gray-900">
                {item.school}
              </h3>

              <p className="mt-2 text-gray-800">
                {item.degree}
              </p>

              <p className="mt-4 text-sm leading-relaxed text-gray-500">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Education;