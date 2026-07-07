"use client";

import { Phone } from "lucide-react";
import { business } from "@/lib/site-data";

export default function FloatingCallButton() {
  return (
    <a
      href={business.phoneHref}
      className="fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full bg-blue-600 px-5 py-4 text-white shadow-2xl shadow-blue-900/30 pulse-ring sm:hidden"
      aria-label={`Call ${business.name} now`}
    >
      <Phone size={20} strokeWidth={2.5} />
      <span className="text-sm font-semibold">Call Now</span>
    </a>
  );
}
