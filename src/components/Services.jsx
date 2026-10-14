const services = [
  {
    title: "Web Development",
    desc: "Custom websites and web applications tailored to your needs.",
  },
  {
    title: "Frontend Development",
    desc: "Interactive and responsive UI with React and JavaScript.",
  },
  {
    title: "UI Implementation",
    desc: "Turn designs into pixel-perfect, responsive interfaces.",
  },
  {
    title: "Website Improvements",
    desc: "Fixes, performance boosts, and UI/UX enhancements.",
  },
];

const Services = () => {
  return (
    <section
      id="skills"
className="scroll-mt-24 px-8 py-14 md:px-20 lg:px-40"    >
      <h2 className="mt-1  text-3xl text-gray-900">
        Services I Offer
      </h2>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0">
        {services.map(({ title, desc }) => (
          <div
            key={title}
            className="lg:border-l lg:border-gray-400 lg:px-8 lg:first:border-l-0 lg:first:pl-0 transition duration-300 hover:-translate-y-1 cursor-pointer"
          >
            <h3 className="font-medium text-gray-900">{title}</h3>
            <p className="mt-1 text-sm text-gray-600">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;