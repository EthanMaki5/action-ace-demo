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
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm shadow-navy-950/5"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between container-px py-4">
        <a href="#" className="flex flex-col leading-none">
          <span
            className={`font-display text-xl font-extrabold tracking-tight transition-colors ${
              scrolled ? "text-navy-900" : "text-white"
            }`}
          >
            Action Ace <span className="text-blue-500">Plumbing</span>
          </span>
          <span
            className={`text-[11px] font-medium tracking-wide uppercase transition-colors ${
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
          className={`lg:hidden p-2 rounded-full ${
            scrolled ? "text-navy-900" : "text-white"
          }`}
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
        >
          <Menu size={28} />
        </button>
      </div>

      {menuOpen && (
        <div className="fixed inset-0 z-50 bg-navy-950/98 flex flex-col">
          <div className="flex items-center justify-between container-px py-4">
            <span className="font-display text-xl font-extrabold text-white">
              Action Ace <span className="text-blue-500">Plumbing</span>
            </span>
            <button
              className="p-2 text-white"
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
            >
              <X size={28} />
            </button>
          </div>
          <nav className="flex flex-col gap-2 container-px mt-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="py-4 text-xl font-semibold text-white border-b border-white/10"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="mt-auto container-px pb-10 pt-6">
            <Button
              href={business.phoneHref}
              icon={<Phone size={18} />}
              className="w-full"
            >
              Call {business.phone}
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
