"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#about",      label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#work",       label: "Work" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-40 transition-all duration-300
        ${scrolled
          ? "bg-ink/70 backdrop-blur-md border-b border-ink-300"
          : "bg-transparent border-b border-transparent"}`}
    >
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="flex items-center justify-between h-16">
          {/* Mark */}
          <Link
            href="/"
            className="group font-mono text-[13px] tracking-tight text-bone"
          >
            lakshay kamat
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="group relative px-3 py-2 font-mono text-[12px] uppercase tracking-[0.16em] text-ash hover:text-bone transition-colors"
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="#contact"
              className="ml-4 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-ink-400 text-bone font-mono text-[11px] uppercase tracking-[0.16em] hover:border-bone transition-colors"
            >
              Get in touch
            </Link>
          </nav>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            className="md:hidden p-2 text-bone"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <nav className="md:hidden pb-6 flex flex-col gap-1 border-t border-ink-300 pt-4">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="flex items-center px-2 py-3 font-mono text-sm border-b border-ink-300"
              >
                <span className="text-bone">{l.label}</span>
              </Link>
            ))}
            <Link
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-3 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-full border border-ink-400 text-bone font-mono text-xs uppercase tracking-[0.16em]"
            >
              Get in touch
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
