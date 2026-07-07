"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { whyChooseUs } from "@/lib/site-data";
import { images } from "@/lib/images";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

export default function WhyChooseUs() {
  return (
    <section className="relative py-24 sm:py-32 bg-navy-950 overflow-hidden">
      <div className="absolute -right-32 -top-32 w-96 h-96 rounded-full bg-blue-600/10 blur-3xl" />
      <div className="absolute -left-32 -bottom-32 w-96 h-96 rounded-full bg-blue-600/10 blur-3xl" />

      <Container className="relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl order-2 lg:order-1"
          >
            <Image
              src={images.family.src}
              alt={images.family.alt}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </motion.div>

          <div className="order-1 lg:order-2">
            <SectionHeading
              eyebrow="Why Homeowners Choose Us"
              title="The honest alternative to big plumbing companies."
              align="left"
              light
            />

            <div className="mt-10 grid sm:grid-cols-2 gap-x-6 gap-y-4">
              {whyChooseUs.map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.4, delay: (i % 8) * 0.05 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2
                    size={20}
                    className="text-blue-400 flex-shrink-0"
                  />
                  <span className="text-blue-50 font-medium">{item}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
