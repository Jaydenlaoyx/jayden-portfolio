"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import type { Project } from "@/data/projects";

type ProjectCardProps = {
  project: Project;
  index: number;
};

export default function ProjectCard({
  project,
  index,
}: ProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="group"
    >
      <article className="group">
        <div className="relative overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--background)]">
          <div className="relative aspect-[16/10] overflow-hidden">
            <Image
              src={project.image}
              alt={`${project.title} project screenshot`}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              sizes="(max-width: 768px) 100vw, 1200px"
            />
          </div>
        </div>

        <div className="mt-6">
          <div className="flex items-center justify-between">
            <span className="text-sm text-[var(--muted)]">
              {String(index + 1).padStart(2, "0")}
            </span>

            <div className="flex gap-3">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${project.title} GitHub repository`}
                  className="text-[var(--muted)] transition-colors hover:text-[var(--foreground)]"
                >
                  GitHub
                </a>
              )}

              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit ${project.title}`}
                  className="flex items-center gap-1 text-[var(--muted)] transition-colors hover:text-[var(--foreground)]"
                >
                  Visit
                  <ArrowUpRight size={16} />
                </a>
              )}
            </div>
          </div>

          <h3 className="mt-4 text-2xl font-medium tracking-tight text-[var(--foreground)]">
            {project.title}
          </h3>

          <p className="mt-3 max-w-2xl leading-7 text-[var(--muted)]">
            {project.description}
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            {project.technologies.map((technology) => (
              <span
                key={technology}
                className="rounded-full border border-[var(--border)] px-3 py-1 text-xs text-[var(--muted)]"
              >
                {technology}
              </span>
            ))}
          </div>
        </div>
      </article>
    </motion.article>
  );
}