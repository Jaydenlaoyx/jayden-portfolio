import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";

export default function Projects() {
  return (
    <section
      id="work"
      className="mx-auto max-w-6xl px-6 py-32 sm:py-40"
    >
      <div className="mb-16">
        <p className="mb-6 text-sm font-medium uppercase tracking-[0.3em] text-zinc-500">
          Selected work
        </p>

        <h2 className="max-w-3xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
          Things I&apos;ve built.
        </h2>

        <p className="mt-6 max-w-2xl text-base leading-8 text-zinc-400 sm:text-lg">
          A selection of personal and professional projects exploring
          different technologies, ideas and problems.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.title}
            project={project}
            index={index}
          />
        ))}
      </div>
    </section>
  );
}