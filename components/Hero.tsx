"use client";

import { motion } from "motion/react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/5 blur-3xl" />
      </div>
      
      <div className="mx-auto w-full max-w-6xl px-6 py-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <p className="mb-8 text-sm font-medium uppercase tracking-[0.3em] text-[var(--muted)]">
            Software Engineer · Melbourne
          </p>

          <h1 className="text-5xl font-semibold leading-[0.95] tracking-[-0.04em] sm:text-7xl lg:text-8xl">
            I build things
            <br />
            for the web.
          </h1>

          <p className="mt-10 max-w-2xl text-base leading-8 text-[var(--muted)] sm:text-lg">
            I&apos;m Jayden, a software engineer focused on building
            thoughtful, reliable and user-friendly applications.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#work"
              className="rounded-full bg-[var(--foreground)] px-6 py-3 text-sm font-medium text-[var(--background)] transition-transform hover:-translate-y-0.5"
            >
              View my work
            </a>

            <a
              href="#contact"
              className="rounded-full border border-[var(--border)] px-6 py-3 text-sm font-medium text-[var(--foreground)] transition-colors hover:border-[var(--foreground)]"
            >
              Get in touch
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="absolute bottom-10 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-3 text-xs uppercase tracking-[0.25em] text-[var(--muted)] sm:flex"
        >
          <span>Scroll</span>

          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="h-8 w-px bg-[var(--border)]"
          />
        </motion.div>
      </div>
    </section>
  );
}