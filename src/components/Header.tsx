"use client";

import { useEffect, useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import { business } from "@/lib/site-data";
import Button from "@/components/ui/Button";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "About Greg", href: "#about" },
  { label: "Reviews", href: "#reviews" },
  { label: "Service Area", href: "#service-area" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);

    const scrollY = window.scrollY;
    const body = document.body;
    const previous = {
      position: body.style.position,
      top: body.style.top,
      left: body.style.left,
      right: body.style.right,
      width: body.style.width,
    };

    body.style.position = "fixed";
    body.style.top = `-${scrollY}px`;
    body.style.left = "0";
    body.style.right = "0";
    body.style.width = "100%";

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      body.style.position = previous.position;
      body.style.top = previous.top;
      body.style.left = previous.left;
      body.style.right = previous.right;
      body.style.width = previous.width;
      window.scrollTo(0, scrollY);
    };
  }, [menuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-40 pt-safe transition-all duration-300 ${
          scrolled
            ? "bg-white/90 backdrop-blur-md shadow-sm shadow-navy-950/5"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between container-px py-4">
          <a href="#" className="flex flex-col leading-none min-w-0">
            <span
              className={`font-display text-lg sm:text-xl font-extrabold tracking-tight transition-colors truncate ${
                scrolled ? "text-navy-900" : "text-white"
              }`}
            >
              Action Ace <span className="text-blue-500">Plumbing</span>
            </span>
            <span
              className={`text-xs font-medium tracking-wide uppercase transition-colors truncate ${
                scrolled ? "text-slate-500" : "text-blue-100/80"
              }`}
            >
              Edmonton &middot; Owner Operated
            </span>
          </a>

          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm font-semibold transition-colors ${
                  scrolled
                    ? "text-navy-900 hover:text-blue-600"
                    : "text-white hover:text-blue-100"
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Button href={business.phoneHref} icon={<Phone size={18} />}>
              {business.phone}
            </Button>
          </div>

          <button
            className={`lg:hidden flex-shrink-0 flex items-center justify-center w-11 h-11 -mr-1 rounded-full active:bg-black/5 ${
              scrolled ? "text-navy-900" : "text-white"
            }`}
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
            aria-expanded={menuOpen}
          >
            <Menu size={26} />
          </button>
        </div>
      </header>

      {/* Full-screen menu overlay: the panel itself is the backdrop (frosted glass over page content). Clicking the empty background (not a link/button) closes it. */}
      <div
        onClick={(e) => {
          const target = e.target as HTMLElement;
          if (!target.closest("a, button")) setMenuOpen(false);
        }}
        className={`fixed inset-0 h-dvh z-[200] flex flex-col overflow-y-auto overscroll-contain bg-navy-950/95 backdrop-blur-xl pt-safe pb-safe transition-all duration-300 ease-out lg:hidden ${
          menuOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
        role="dialog"
        aria-modal="true"
        aria-hidden={!menuOpen}
      >
        <div className="flex items-center justify-between container-px py-4 flex-shrink-0">
          <span className="font-display text-xl font-extrabold text-white">
            Action Ace <span className="text-blue-500">Plumbing</span>
          </span>
          <button
            className="flex items-center justify-center w-11 h-11 -mr-1 rounded-full text-white active:bg-white/10"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
            tabIndex={menuOpen ? 0 : -1}
          >
            <X size={26} />
          </button>
        </div>
        <nav className="flex flex-col gap-2 container-px mt-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              tabIndex={menuOpen ? 0 : -1}
              className="py-4 text-xl font-semibold text-white border-b border-white/10 active:text-blue-400"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="mt-auto container-px pb-6 pt-6">
          <Button
            href={business.phoneHref}
            icon={<Phone size={18} />}
            className="w-full"
          >
            Call {business.phone}
          </Button>
        </div>
      </div>
    </>
  );
}
