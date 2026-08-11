"use client";

import Link from "next/link";
import { useState } from "react";
import { navLinks, site } from "@/lib/site";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link
          href="/"
          className="group flex items-center gap-3 font-semibold tracking-tight text-slate-900"
        >
          <img
            src="/logo-icon.png"
            alt=""
            className="h-8 w-auto mix-blend-multiply"
            height={32}
            width={29}
          />
          <span className="hidden sm:inline">{site.name}</span>
          <span className="sm:hidden">Cyber Analyzer Labs</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Main">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-600 transition-colors hover:text-sky-600"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="hidden rounded-full bg-sky-50 px-4 py-2 text-sm font-medium text-sky-700 ring-1 ring-sky-600/20 transition hover:bg-sky-100 md:inline-block"
        >
          Get in touch
        </a>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 text-slate-500 hover:text-slate-900 md:hidden"
          aria-expanded={open}
          aria-label="Toggle menu"
          onClick={() => setOpen(!open)}
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <nav
          className="border-t border-slate-200 bg-white px-6 py-4 md:hidden shadow-lg"
          aria-label="Mobile"
        >
          <ul className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block py-2 font-medium text-slate-600 hover:text-sky-600"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                className="mt-2 block rounded-full bg-sky-50 px-4 py-3 text-center font-medium text-sky-700 ring-1 ring-sky-600/20 hover:bg-sky-100"
                onClick={() => setOpen(false)}
              >
                Get in touch
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}