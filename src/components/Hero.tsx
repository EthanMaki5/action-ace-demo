"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2, Phone, ShieldCheck, Star } from "lucide-react";
import { business } from "@/lib/site-data";
import { images } from "@/lib/images";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";

const badges = [
  "Licensed & Insured",
  "Owner Operated",
  `${business.yearsInBusiness} Years Experience`,
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy-950 pt-32 pb-20 sm:pt-40 sm:pb-28">
      <div className="absolute inset-0">
        <Image
          src={images.hero.src}
          alt={images.hero.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/95 to-navy-950/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-navy-950/40" />
      </div>

      <Container className="relative">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2 mb-6"
          >
            <div className="flex text-blue-400">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={18} fill="currentColor" strokeWidth={0} />
              ))}
            </div>
            <span className="text-sm font-semibold text-blue-100">
              {business.rating.toFixed(1)} Stars &middot; {business.reviewCount}+ Google
              Reviews
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.08] text-balance"
          >
            Edmonton Plumbing, Done Right By the Person Who Answers the Phone.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 text-lg sm:text-xl text-blue-100/90 leading-relaxed max-w-2xl"
          >
            For {business.yearsInBusiness} years, Greg Jober has shown up personally to
            every job — no rotating technicians, no upselling, just honest work from a
            Certified Journeyman Plumber and Gasfitter B.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-10 flex flex-col sm:flex-row gap-4"
          >
            <Button href={business.phoneHref} icon={<Phone size={20} />}>
              Call Greg Today
            </Button>
            <Button href="#contact" variant="ghost-on-dark">
              Request a Free Quote
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-12 flex flex-wrap gap-x-8 gap-y-3"
          >
            {badges.map((badge) => (
              <div key={badge} className="flex items-center gap-2 text-blue-100">
                <CheckCircle2 size={18} className="text-blue-400" />
                <span className="text-sm font-medium">{badge}</span>
              </div>
            ))}
            <div className="flex items-center gap-2 text-blue-100">
              <ShieldCheck size={18} className="text-blue-400" />
              <span className="text-sm font-medium">Bonded & Disability Insured</span>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
