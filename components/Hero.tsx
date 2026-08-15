"use client";

import { motion } from "motion/react";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">
        <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-10"
        >
         <div className="absolute left-1/2 top-1/4 h-96 w-96 -translate-x-1/2 rounded-full bg-blue-500/10 blur-3xl" />
        </div>
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="max-w-4xl">
          <p className="mb-6 text-sm font-medium uppercase tracking-[0.3em] text-zinc-400">
            Software Engineer
          </p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-6xl font-semibold leading-[0.95] tracking-tight sm:text-7xl lg:text-8xl"
            >
            I build software
            <br />
            that solves problems.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
            className="mt-8 max-w-2xl text-lg leading-8 text-zinc-400 sm:text-xl"
            >
            Software engineer with experience across Java, Spring Boot,
            React and TypeScript. I enjoy turning ideas into useful,
            well-crafted applications.
            </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
            className="mt-10 flex flex-wrap gap-4"
            >
            <a
              href="#work"
              className="rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-zinc-200"
            >
              Explore my work
            </a>

            <a
              href="#contact"
              className="rounded-full border border-zinc-700 px-6 py-3 text-sm font-medium text-white transition hover:border-zinc-500"
            >
              Let's talk
            </a>
          </motion.div>
        </div>

        <div className="mt-20 flex items-center gap-3 text-sm text-zinc-500">
          <span className="h-px w-8 bg-zinc-700" />
          Melbourne, Australia
        </div>
      </div>
    </section>
  );
}