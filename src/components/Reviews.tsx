"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import { business, reviews } from "@/lib/site-data";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";

const GOOGLE_REVIEWS_URL =
  "https://www.google.com/maps/place/Action+Ace+Plumbing/data=!4m2!3m1!1s0x0:0x4c7c5a7d2db9f470";

function Stars({ count = 5 }: { count?: number }) {
  return (
    <div className="flex text-blue-500">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={16} fill="currentColor" strokeWidth={0} />
      ))}
    </div>
  );
}

export default function Reviews() {
  return (
    <section id="reviews" className="py-24 sm:py-32 bg-white">
      <Container>
        <SectionHeading
          eyebrow="Customer Reviews"
          title="Trusted by Edmonton homeowners, review after review."
        />

        <div className="mt-10 flex flex-col items-center gap-2">
          <div className="flex items-center gap-3">
            <span className="font-display text-5xl font-extrabold text-navy-900">
              {business.rating.toFixed(1)}
            </span>
            <div className="flex flex-col items-start">
              <Stars />
              <span className="text-sm font-medium text-slate-600 mt-0.5">
                {business.reviewCount}+ Google Reviews
              </span>
            </div>
          </div>
        </div>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.length > 0 ? (
            reviews.map((review, i) => (
              <motion.div
                key={review.name + i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
                className="bg-sky-50 rounded-2xl p-7 border border-navy-950/5"
              >
                <Quote className="text-blue-200" size={28} />
                <Stars count={review.rating} />
                <p className="mt-4 text-navy-900 leading-relaxed">
                  &ldquo;{review.text}&rdquo;
                </p>
                <p className="mt-5 font-semibold text-navy-900">{review.name}</p>
              </motion.div>
            ))
          ) : (
            <div className="col-span-full rounded-2xl border-2 border-dashed border-blue-200 bg-sky-50 p-10 text-center">
              <p className="font-display text-lg font-semibold text-navy-900">
                Real customer reviews go here
              </p>
              <p className="mt-2 text-sm text-slate-600 max-w-md mx-auto">
                This section is reserved for verbatim Google reviews from real Action
                Ace Plumbing customers. Add them to{" "}
                <code className="text-xs bg-white px-1.5 py-0.5 rounded border border-navy-950/10">
                  src/lib/site-data.ts
                </code>{" "}
                once available.
              </p>
            </div>
          )}
        </div>

        <div className="mt-14 text-center">
          <Button href={GOOGLE_REVIEWS_URL} variant="outline">
            Read More Reviews on Google
          </Button>
        </div>
      </Container>
    </section>
  );
}
