"use client";

import { motion } from "motion/react";
import { experience } from "@/data/experience";

export default function Experience() {
  return (
    <section
      id="experience"
      className="mx-auto max-w-6xl px-6 py-32 sm:py-40"
    >
      <div className="mb-16">
        <p className="mb-6 text-sm font-medium uppercase tracking-[0.3em] text-[var(--muted)]">
          Experience
        </p>

        <h2 className="max-w-3xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
          Where I&apos;ve worked.
        </h2>
      </div>

      <div className="relative">
        <div className="absolute left-2 top-0 h-full w-px bg-zinc-800" />

        <div className="space-y-16">
          {experience.map((item, index) => (
            <motion.article
              key={`${item.company}-${item.role}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              className="relative pl-10"
            >
              <span className="absolute left-0 top-1.5 h-4 w-4 rounded-full border-2 border-zinc-600 bg-[var(--background)]" />

              <div className="grid gap-6 md:grid-cols-[180px_1fr]">
                <p className="text-sm text-[var(--muted)]">
                  {item.period}
                </p>

                <div>
                  <h3 className="text-xl font-semibold">
                    {item.role}
                  </h3>

                  <p className="mt-1 text-base text-[var(--muted)]">
                    {item.company}
                  </p>

                  <p className="mt-6 max-w-2xl text-sm leading-7 text-[var(--muted)] sm:text-base">
                    {item.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {item.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-full border border-[var(--border)] px-3 py-1 text-xs text-[var(--muted)]"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}