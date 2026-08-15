"use client";

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
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
      }}
      className="group relative overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950 p-8 transition-colors duration-300 hover:border-zinc-600"
    >
      <div className="flex min-h-[320px] flex-col">
        <div className="flex items-start justify-between">
          <span className="text-sm text-zinc-600">
            0{index + 1}
          </span>

          <span className="text-zinc-600 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-white">
            ↗
          </span>
        </div>

        <div className="mt-auto">
          <h3 className="text-2xl font-semibold tracking-tight">
            {project.title}
          </h3>

          <p className="mt-4 max-w-lg text-sm leading-7 text-zinc-400">
            {project.description}
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {project.technologies.map((technology) => (
              <span
                key={technology}
                className="rounded-full bg-zinc-900 px-3 py-1 text-xs text-zinc-400"
              >
                {technology}
              </span>
            ))}
          </div>

          <div className="mt-8 flex gap-5 text-sm">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 transition-colors hover:text-white"
              >
                GitHub ↗
              </a>
            )}

            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 transition-colors hover:text-white"
              >
                Live demo ↗
              </a>
            )}
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute -bottom-24 -right-24 h-48 w-48 rounded-full bg-blue-500/5 blur-3xl transition-all duration-500 group-hover:bg-blue-500/10" />
    </motion.article>
  );
}