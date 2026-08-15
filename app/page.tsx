import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />

      <Hero />

      <section
        id="work"
        className="mx-auto min-h-screen max-w-6xl px-6 py-32"
      >
        <h2 className="text-4xl font-semibold">
          Selected work
        </h2>
      </section>

      <About />

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