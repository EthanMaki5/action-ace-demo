"use client";

import { motion } from "framer-motion";
import {
  AlertTriangle,
  Bath,
  Camera,
  Droplet,
  Droplets,
  Flame,
  MapPin,
  MapPinned,
  Phone,
  ShowerHead,
  Snowflake,
  Utensils,
  Waves,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import { business, services } from "@/lib/site-data";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";

const iconMap: Record<string, LucideIcon> = {
  "Emergency Plumbing": AlertTriangle,
  "Drain Cleaning": Droplets,
  "Leak Detection": Wrench,
  "Leak Repair": Droplet,
  "Toilet Installation & Repair": Bath,
  "Faucet Installation": Droplet,
  "Sink Installation": Droplet,
  "Tub Installation": Bath,
  "Shower Installation": ShowerHead,
  "Bathroom Plumbing": ShowerHead,
  "Bathroom Rough-Ins": Wrench,
  "Bathroom Fixture Finishing": Bath,
  "Outside Hose Bibs": Droplet,
  "Hot Water Tank Replacement": Flame,
  "Garburator Installation": Utensils,
  "Dishwasher Water Line Installation": Utensils,
  "Ice Maker Water Line Installation": Snowflake,
  "Sump Pump Service": Waves,
  "Sewer Camera Inspections": Camera,
  "Drain Pipe Locating": MapPin,
  "Weeping Tile Access Point Location": MapPinned,
  "Light Gas Fitting": Flame,
};

export default function Services() {
  return (
    <section id="services" className="py-24 sm:py-32 bg-sky-50">
      <Container>
        <SectionHeading
          eyebrow="What We Do"
          title="Full-Service Residential Plumbing & Gas Fitting"
          description="From emergency repairs to full bathroom rough-ins, Greg brings the same honest, precise workmanship to every job — no matter the size."
        />

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, i) => {
            const Icon = iconMap[service.title] ?? Wrench;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: (i % 6) * 0.06 }}
                className="group bg-white rounded-2xl p-6 shadow-sm shadow-navy-950/5 border border-navy-950/5 hover:shadow-xl hover:shadow-blue-600/10 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                  <Icon size={22} />
                </div>
                <h3 className="mt-5 font-display font-bold text-lg text-navy-900">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-4 text-center">
          <p className="text-navy-900 font-medium">
            Don&apos;t see exactly what you need listed?
          </p>
          <Button href={business.phoneHref} icon={<Phone size={18} />}>
            Ask Greg Directly
          </Button>
        </div>
      </Container>
    </section>
  );
}
