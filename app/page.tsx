import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />

      <Hero />

      <Projects />

      <About />

      <Experience />

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