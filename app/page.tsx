import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />

      <section className="mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-6">
        <p className="mb-6 text-sm uppercase tracking-[0.3em] text-zinc-400">
          Software Engineer
        </p>

        <h1 className="max-w-4xl text-6xl font-semibold tracking-tight sm:text-7xl lg:text-8xl">
          Hi, I'm Jayden.
        </h1>

        <p className="mt-8 max-w-2xl text-lg leading-8 text-zinc-400 sm:text-xl">
          I build thoughtful web applications with modern technologies,
          focusing on clean code, great user experiences, and solving
          meaningful problems.
        </p>

        <div className="mt-10 flex gap-4">
          <a
            href="#work"
            className="rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-zinc-200"
          >
            View my work
          </a>

          <a
            href="#contact"
            className="rounded-full border border-zinc-700 px-6 py-3 text-sm font-medium text-white transition hover:border-zinc-500"
          >
            Get in touch
          </a>
        </div>
      </section>

      <section
        id="work"
        className="mx-auto min-h-screen max-w-6xl px-6 py-32"
      >
        <h2 className="text-4xl font-semibold">
          Selected work
        </h2>
      </section>

      <section
        id="about"
        className="mx-auto min-h-screen max-w-6xl px-6 py-32"
      >
        <h2 className="text-4xl font-semibold">
          About me
        </h2>
      </section>

      <section
        id="experience"
        className="mx-auto min-h-screen max-w-6xl px-6 py-32"
      >
        <h2 className="text-4xl font-semibold">
          Experience
        </h2>
      </section>

      <section
        id="contact"
        className="mx-auto min-h-screen max-w-6xl px-6 py-32"
      >
        <h2 className="text-4xl font-semibold">
          Let's talk.
        </h2>
      </section>
    </main>
  );
}