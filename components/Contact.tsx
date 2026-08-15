"use client";

import { FormEvent, useState } from "react";
import { socials } from "@/data/socials";
import { motion } from "motion/react";

export default function Contact() {
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setStatus("sending");

    const form = event.currentTarget;
    const formData = new FormData(form);

    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to send message.");
      }

      form.reset();
      setStatus("success");
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  }

  return (
    <section
      id="contact"
      className="mx-auto max-w-6xl px-6 py-32 sm:py-40"
    >
      <div className="grid gap-16 lg:grid-cols-[1fr_1.2fr]">
        <div>
          <p className="mb-6 text-sm font-medium uppercase tracking-[0.3em] text-zinc-500">
            Contact
          </p>

          <h2 className="max-w-xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
            Let&apos;s talk.
          </h2>

          <p className="mt-6 max-w-md text-base leading-8 text-zinc-400 sm:text-lg">
            Have an opportunity, a project idea, or just want to say hello?
            I&apos;d love to hear from you.
          </p>

          <div className="mt-10 space-y-4 text-sm">
            {socials.map((social) => (
            <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-zinc-400 transition-colors hover:text-white"
            >
                {social.name} ↗
            </a>
            ))}
          </div>
        </div>

        <motion.form
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            onSubmit={handleSubmit}
            className="space-y-6"
        >
          <div>
            <label
              htmlFor="name"
              className="mb-2 block text-sm text-zinc-400"
            >
              Name
            </label>

            <input
              id="name"
              name="name"
              type="text"
              required
              className="w-full border-b border-zinc-800 bg-transparent px-0 py-3 text-white outline-none transition-colors placeholder:text-zinc-700 focus:border-zinc-400"
              placeholder="Your name"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="mb-2 block text-sm text-zinc-400"
            >
              Email
            </label>

            <input
              id="email"
              name="email"
              type="email"
              required
              className="w-full border-b border-zinc-800 bg-transparent px-0 py-3 text-white outline-none transition-colors placeholder:text-zinc-700 focus:border-zinc-400"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="mb-2 block text-sm text-zinc-400"
            >
              Message
            </label>

            <textarea
              id="message"
              name="message"
              required
              rows={5}
              className="w-full resize-none border-b border-zinc-800 bg-transparent px-0 py-3 text-white outline-none transition-colors placeholder:text-zinc-700 focus:border-zinc-400"
              placeholder="Tell me a little about what you'd like to discuss..."
            />
          </div>

          <button
            type="submit"
            disabled={status === "sending" || status === "success"}
            className="rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-zinc-200 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {status === "sending"
                ? "Sending..."
                : status === "success"
                    ? "Message sent ✓"
                    : "Send message ↗"}
          </button>

          {status === "success" && (
            <p className="text-sm text-zinc-400">
              Thanks! Your message has been sent.
            </p>
          )}

          {status === "error" && (
            <p className="text-sm text-red-400">
              Something went wrong. Please try again.
            </p>
          )}
        </motion.form>
      </div>
    </section>
  );
}