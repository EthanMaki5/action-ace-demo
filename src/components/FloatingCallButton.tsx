"use client";

import { useEffect, useState } from "react";
import { Phone } from "lucide-react";
import { business } from "@/lib/site-data";

export default function FloatingCallButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hero = document.querySelector("section");
    const onScroll = () => {
      const heroBottom = hero ? hero.getBoundingClientRect().bottom : 0;
      setVisible(heroBottom <= 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href={business.phoneHref}
      className={`fixed bottom-[calc(1.25rem+env(safe-area-inset-bottom))] right-[calc(1.25rem+env(safe-area-inset-right))] z-50 flex items-center gap-2 rounded-full bg-blue-600 px-5 py-4 text-white shadow-2xl shadow-blue-900/30 pulse-ring sm:hidden transition-all duration-300 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
      }`}
      aria-label={`Call ${business.name} now`}
    >
      <Phone size={20} strokeWidth={2.5} />
      <span className="text-sm font-semibold">Call Now</span>
    </a>
  );
}
