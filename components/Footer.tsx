import { socials } from "@/data/socials";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)]">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-[var(--muted)]">
          © {new Date().getFullYear()} Jayden Lao
        </p>

        <div className="flex gap-6">
          {socials.map((social) => (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-[var(--muted)] transition-colors hover:text-[var(--foreground)]"
            >
              {social.name}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}