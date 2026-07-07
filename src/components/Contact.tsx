"use client";

import { FormEvent, useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { business, services } from "@/lib/site-data";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

const contactMethods = ["Phone", "Email", "Either"] as const;

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const phone = form.get("phone");
    const email = form.get("email");
    const serviceNeeded = form.get("service");
    const preferredContact = form.get("preferredContact");
    const message = form.get("message");

    const body = [
      `Name: ${name}`,
      `Phone: ${phone}`,
      `Email: ${email}`,
      `Service Needed: ${serviceNeeded}`,
      `Preferred Contact Method: ${preferredContact}`,
      "",
      "Message:",
      message,
    ].join("\n");

    window.location.href = `mailto:${business.email}?subject=${encodeURIComponent(
      `Quote Request from ${name}`
    )}&body=${encodeURIComponent(body)}`;

    setSubmitted(true);
  }

  return (
    <section id="contact" className="py-24 sm:py-32 bg-navy-950">
      <Container>
        <SectionHeading
          eyebrow="Get In Touch"
          title="Ready to fix it right? Call Greg today."
          description="Prefer to have us reach out? Fill in the form and we'll get back to you to schedule your free estimate."
          light
        />

        <div className="mt-16 grid lg:grid-cols-5 gap-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 flex flex-col gap-5"
          >
            <a
              href={business.phoneHref}
              className="flex items-center gap-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl p-6 transition-colors"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-blue-600 text-white flex-shrink-0">
                <Phone size={22} />
              </div>
              <div>
                <p className="text-sm text-blue-100/70 font-medium">Call or Text</p>
                <p className="text-lg font-semibold text-white">{business.phone}</p>
              </div>
            </a>

            <a
              href={`mailto:${business.email}`}
              className="flex items-center gap-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl p-6 transition-colors"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-blue-600 text-white flex-shrink-0">
                <Mail size={22} />
              </div>
              <div>
                <p className="text-sm text-blue-100/70 font-medium">Email</p>
                <p className="text-lg font-semibold text-white">{business.email}</p>
              </div>
            </a>

            <div className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-2xl p-6">
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-blue-600 text-white flex-shrink-0">
                <MapPin size={22} />
              </div>
              <div>
                <p className="text-sm text-blue-100/70 font-medium">Based In</p>
                <p className="text-lg font-semibold text-white">{business.city}</p>
              </div>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            onSubmit={handleSubmit}
            className="lg:col-span-3 bg-white rounded-3xl p-8 sm:p-10 shadow-2xl"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <div className="sm:col-span-2">
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold text-navy-900 mb-2"
                >
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="w-full rounded-xl border border-navy-950/15 px-4 py-3 text-navy-900 focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-semibold text-navy-900 mb-2"
                >
                  Phone Number
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  className="w-full rounded-xl border border-navy-950/15 px-4 py-3 text-navy-900 focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="(780) 555-0123"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-navy-900 mb-2"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full rounded-xl border border-navy-950/15 px-4 py-3 text-navy-900 focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="you@email.com"
                />
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="service"
                  className="block text-sm font-semibold text-navy-900 mb-2"
                >
                  Service Needed
                </label>
                <select
                  id="service"
                  name="service"
                  required
                  defaultValue=""
                  className="w-full rounded-xl border border-navy-950/15 px-4 py-3 text-navy-900 focus:outline-none focus:ring-2 focus:ring-blue-600"
                >
                  <option value="" disabled>
                    Select a service
                  </option>
                  {services.map((service) => (
                    <option key={service.title} value={service.title}>
                      {service.title}
                    </option>
                  ))}
                  <option value="Other">Other / Not Sure</option>
                </select>
              </div>

              <div className="sm:col-span-2">
                <span className="block text-sm font-semibold text-navy-900 mb-2">
                  Preferred Contact Method
                </span>
                <div className="flex gap-3">
                  {contactMethods.map((method) => (
                    <label
                      key={method}
                      className="flex-1 flex items-center justify-center gap-2 rounded-xl border border-navy-950/15 px-4 py-3 cursor-pointer has-checked:border-blue-600 has-checked:bg-blue-50 transition-colors"
                    >
                      <input
                        type="radio"
                        name="preferredContact"
                        value={method}
                        defaultChecked={method === "Phone"}
                        className="accent-blue-600"
                      />
                      <span className="text-sm font-medium text-navy-900">
                        {method}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold text-navy-900 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="w-full rounded-xl border border-navy-950/15 px-4 py-3 text-navy-900 focus:outline-none focus:ring-2 focus:ring-blue-600 resize-none"
                  placeholder="Tell us what's going on..."
                />
              </div>
            </div>

            <button
              type="submit"
              className="mt-6 w-full inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 text-white px-7 py-4 text-base font-semibold hover:bg-navy-900 transition-colors duration-300"
            >
              <Send size={18} />
              Send Request
            </button>

            {submitted && (
              <p className="mt-4 text-sm text-center text-slate-600">
                Your email app should now be open with your request pre-filled — just
                hit send. You can also call{" "}
                <a href={business.phoneHref} className="text-blue-600 font-semibold">
                  {business.phone}
                </a>{" "}
                directly.
              </p>
            )}
          </motion.form>
        </div>
      </Container>
    </section>
  );
}
