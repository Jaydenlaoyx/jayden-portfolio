"use client";

import { motion } from "motion/react";

const skills = [
  "Java",
  "Spring Boot",
  "React",
  "TypeScript",
  "JavaScript",
  "Node.js",
  "PostgreSQL",
  "MongoDB",
  "Git",
  "REST APIs",
];

export default function About() {
  return (
    <section
      id="about"
      className="mx-auto max-w-6xl px-6 py-32 sm:py-40"
    >
      <div className="grid gap-16 lg:grid-cols-[1.2fr_0.8fr]">
        <div>
          <p className="mb-6 text-sm font-medium uppercase tracking-[0.3em] text-zinc-500">
            About
          </p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl"
          >
            A software engineer who enjoys building things from the ground up.
          </motion.h2>

          <div className="mt-8 max-w-2xl space-y-6 text-base leading-8 text-zinc-400 sm:text-lg">
            <p>
              I&apos;m a software engineer with professional experience
              building web applications across both backend and frontend
              technologies.
            </p>

            <p>
              My experience includes Java and Spring Boot on the backend,
              alongside React and TypeScript on the frontend. I enjoy
              understanding how different parts of a system fit together and
              turning requirements into software that people can actually use.
            </p>

            <p>
              Outside of software, I&apos;ve also spent time building a
              volleyball community from the ground up. Running and coaching
              players has given me a different perspective on ownership,
              communication and working with people.
            </p>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="lg:pt-20"
        >
          <p className="mb-6 text-sm font-medium uppercase tracking-[0.3em] text-zinc-500">
            Technologies
          </p>

          <div className="flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-zinc-800 px-4 py-2 text-sm text-zinc-300 transition-colors hover:border-zinc-600 hover:text-white"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}