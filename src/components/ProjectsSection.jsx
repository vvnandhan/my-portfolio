const projects = [
  {
    name: "AI Teach Platform",
    url: "https://github.com/vayunandhan/ai-teach-platform",
    tech: ["Django", "React", "Docker", "AI"],
    desc: "AI-powered teacher platform with video synthesis, REST APIs, and microservices.",
  }
];

export default function ProjectsSection() {
  return (
    <div className="w-full flex flex-col justify-center py-20 px-6">
      <div className="space-y-7">
        {projects.map((project) => (
          <a
            href={project.url}
            key={project.name}
            className="block bg-zinc-900/80 border border-white/15 rounded-xl shadow-lg p-5"
          >
            <div className="flex items-center gap-2 mb-1">
              <span className="text-fuchsia-400 text-lg font-bold">{project.name}</span>
            </div>
            <div className="text-white/80 mt-1 text-sm">{project.desc}</div>
          </a>
        ))}
      </div>
    </div>
  );
}
