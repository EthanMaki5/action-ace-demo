"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin, Phone } from "lucide-react";
import { business, serviceAreas } from "@/lib/site-data";
import { images } from "@/lib/images";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";

export default function ServiceArea() {
  return (
    <section id="service-area" className="py-24 sm:py-32 bg-sky-50">
      <Container>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionHeading
              eyebrow="Where We Work"
              title="Proudly serving Edmonton and the surrounding region."
              align="left"
            />

            <p className="mt-6 text-lg text-slate-600 leading-relaxed">
              Based in Edmonton, Greg travels throughout the region to bring the same
              honest, professional plumbing service to homeowners across:
            </p>

            <div className="mt-8 grid grid-cols-2 gap-3">
              {serviceAreas.map((area, i) => (
                <motion.div
                  key={area}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="flex items-center gap-2.5 bg-white rounded-xl px-4 py-3 shadow-sm shadow-navy-950/5 border border-navy-950/5"
                >
                  <MapPin size={18} className="text-blue-600 flex-shrink-0" />
                  <span className="font-medium text-navy-900">{area}</span>
                </motion.div>
              ))}
            </div>
            <p className="mt-4 text-sm text-slate-500">
              And surrounding areas — call to confirm we service your location.
            </p>

            <div className="mt-8">
              <Button href={business.phoneHref} icon={<Phone size={18} />}>
                Call {business.phone}
              </Button>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl shadow-navy-950/20"
          >
            <Image
              src={images.home.src}
              alt={images.home.alt}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
