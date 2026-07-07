"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Award, HardHat, ShieldCheck } from "lucide-react";
import { business } from "@/lib/site-data";
import { images } from "@/lib/images";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

const credentials = [
  {
    icon: HardHat,
    title: "Certified Journeyman Plumber",
    description: "Fully licensed to handle every residential plumbing job, start to finish.",
  },
  {
    icon: Award,
    title: "Gasfitter B Certified",
    description: "Qualified for light gas fitting work, done to code.",
  },
  {
    icon: ShieldCheck,
    title: "Licensed, Bonded & Insured",
    description: "Including disability insurance, for total peace of mind on every job.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 sm:py-32 bg-white">
      <Container>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <SectionHeading
              eyebrow="About the Owner"
              title={`Meet Greg Jober — the plumber who actually shows up.`}
              align="left"
            />

            <p className="mt-6 text-lg text-slate-600 leading-relaxed">
              Unlike larger plumbing companies that send a different technician every
              visit, Greg personally completes every job himself. For{" "}
              {business.yearsInBusiness}{" "}
              years, he&apos;s built Action Ace Plumbing around one simple idea: treat
              every home like it&apos;s his own.
            </p>

            <blockquote className="mt-8 border-l-4 border-blue-600 pl-6 py-1">
              <p className="font-display text-xl sm:text-2xl font-semibold text-navy-900 leading-snug text-balance">
                &ldquo;I complete every repair as if I were working inside my own
                home.&rdquo;
              </p>
              <cite className="mt-3 block text-sm font-medium text-slate-500 not-italic">
                Greg Jober, Owner &amp; Certified Journeyman Plumber
              </cite>
            </blockquote>

            <p className="mt-6 text-lg text-slate-600 leading-relaxed">
              Greg explains problems clearly, recommends only the work that&apos;s
              actually needed, and delivers long-lasting solutions instead of
              unnecessary upselling — the kind of honest service Edmonton homeowners
              have trusted for over a decade.
            </p>

            <div className="mt-10 grid sm:grid-cols-1 gap-5">
              {credentials.map((item) => (
                <div key={item.title} className="flex items-start gap-4">
                  <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-xl bg-blue-50 text-blue-600">
                    <item.icon size={22} />
                  </div>
                  <div>
                    <p className="font-semibold text-navy-900">{item.title}</p>
                    <p className="text-sm text-slate-600 mt-0.5">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl shadow-navy-950/20">
              <Image
                src={images.tools.src}
                alt={images.tools.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl shadow-navy-950/15 p-6 max-w-[240px] hidden sm:block">
              <p className="font-display text-3xl font-extrabold text-navy-900">
                {business.yearsInBusiness}+
              </p>
              <p className="text-sm text-slate-600 font-medium mt-1">
                Years serving Edmonton homeowners with honest plumbing work
              </p>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
