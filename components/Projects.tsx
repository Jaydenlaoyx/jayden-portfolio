import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section
      id="work"
      className="px-6 py-32 sm:py-40"
    >
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-[var(--muted)]">
            Selected work
          </p>

          <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
            Things I&apos;ve built.
          </h2>

          <p className="mt-6 text-base leading-8 text-[var(--muted)] sm:text-lg">
            A collection of personal and professional projects
            exploring different parts of the software development
            stack.
          </p>
        </div>

        <div className="mt-20 space-y-32">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}