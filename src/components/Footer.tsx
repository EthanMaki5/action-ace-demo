import { Mail, Phone } from "lucide-react";
import { business, serviceAreas } from "@/lib/site-data";
import Container from "@/components/ui/Container";

const quickLinks = [
  { label: "Services", href: "#services" },
  { label: "About Greg", href: "#about" },
  { label: "Reviews", href: "#reviews" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="bg-navy-900 text-blue-100/80">
      <Container className="py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <span className="font-display text-xl font-extrabold text-white">
              Action Ace <span className="text-blue-400">Plumbing</span>
            </span>
            <p className="mt-4 text-sm leading-relaxed max-w-xs">
              Owner-operated residential plumbing and gas fitting in Edmonton,
              Alberta. Licensed, bonded, and fully insured with{" "}
              {business.yearsInBusiness} years of honest, professional service.
            </p>
          </div>

          <div>
            <p className="font-semibold text-white mb-4">Quick Links</p>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm hover:text-white transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-semibold text-white mb-4">Service Area</p>
            <ul className="space-y-2.5">
              {serviceAreas.slice(0, 5).map((area) => (
                <li key={area} className="text-sm">
                  {area}
                </li>
              ))}
              <li className="text-sm">& Surrounding Areas</li>
            </ul>
          </div>

          <div>
            <p className="font-semibold text-white mb-4">Contact</p>
            <ul className="space-y-3">
              <li>
                <a
                  href={business.phoneHref}
                  className="flex items-center gap-2 text-sm hover:text-white transition-colors"
                >
                  <Phone size={16} />
                  {business.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${business.email}`}
                  className="flex items-center gap-2 text-sm hover:text-white transition-colors"
                >
                  <Mail size={16} />
                  {business.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-blue-100/50">
          <p>
            &copy; {new Date().getFullYear()} {business.name}. All rights reserved.
          </p>
          <p>Licensed &middot; Bonded &middot; Fully Insured &middot; Gasfitter B Certified</p>
        </div>
      </Container>
    </footer>
  );
}
