import { useState } from "react";

const LINKS = [
  { href: "#about", label: "about" },
  { href: "#skills", label: "skills" },
  { href: "#projects", label: "projects" },
  { href: "#contact", label: "contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50 border-b border-border/60 bg-bg/80 backdrop-blur">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4 text-sm">
        <a
          href="#top"
          aria-label="Home"
          className="text-lg font-bold tracking-tight text-cyan transition-opacity hover:opacity-80"
        >
          &lt;CKB/&gt;
        </a>

        <ul className="hidden gap-8 sm:flex">
          {LINKS.map((link, i) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-gray-400 transition-colors hover:text-cyan"
              >
                <span className="text-cyan">{String(i + 1).padStart(2, "0")}.</span>{" "}
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-9 w-9 items-center justify-center border border-border text-cyan sm:hidden"
        >
          <span className="relative block h-3 w-4">
            <span
              className={`absolute inset-x-0 top-0 h-px bg-current transition-transform ${open ? "translate-y-1.5 rotate-45" : ""}`}
            />
            <span
              className={`absolute inset-x-0 top-1.5 h-px bg-current transition-opacity ${open ? "opacity-0" : ""}`}
            />
            <span
              className={`absolute inset-x-0 top-3 h-px bg-current transition-transform ${open ? "-translate-y-1.5 -rotate-45" : ""}`}
            />
          </span>
        </button>
      </nav>

      <div
        className={`overflow-hidden border-b border-border/60 bg-bg transition-[max-height] duration-300 sm:hidden ${
          open ? "max-h-64" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col px-6 py-2">
          {LINKS.map((link, i) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block py-3 text-gray-400 transition-colors hover:text-cyan"
              >
                <span className="text-cyan">{String(i + 1).padStart(2, "0")}.</span>{" "}
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
