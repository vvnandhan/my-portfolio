const experiences = [
  {
    title: "Full Stack Developer",
    company: "Black & Veatch, USA",
    period: "2024–Present",
    description: "React.js, Next.js, FastAPI, PostgreSQL, AWS. Built high-impact dashboards and resilient APIs.",
  },
  {
    title: "Full Stack Developer",
    company: "Capgemini, India",
    period: "2021–2022",
    description: "Spring Boot, MySQL, Docker, Jenkins. Modernized pipelines, boosted test coverage.",
  },
  {
    title: "Back-End Developer",
    company: "Reliance Jio Platforms, India",
    period: "2020–2021",
    description: "Java, WebSocket, Node.js. Real-time dashboards for 2M+ users.",
  },
];

export default function ExperienceSection() {
  return (
    <div className="w-full md:w-1/2 flex flex-col justify-center py-20 px-6 sm:px-12 z-10">
      <h2 className="text-2xl sm:text-4xl font-extrabold text-white mb-10 tracking-wide flex items-center gap-4">
        <span>EXPERIENCE</span>
      </h2>
      <div className="space-y-7">
        {experiences.map((exp, i) => (
          <div
            key={i}
            className="bg-zinc-900/80 border border-white/15 rounded-xl shadow-lg p-5"
          >
            <div className="flex items-center gap-3 mb-1">
              <span className="text-xs text-cyan-300 font-mono">{exp.period}</span>
              <div className="w-2.5 h-2.5 rounded-full bg-cyan-400 shadow-[0_0_8px_2px_rgba(34,211,238,0.25)]" />
            </div>
            <div className="font-bold text-white text-lg sm:text-xl">
              {exp.title}
            </div>
            <div className="text-white/80 font-medium">{exp.company}</div>
            <div className="text-white/70 mt-1 text-sm">{exp.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
