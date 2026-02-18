"use client";

import Link from "next/link";
import Container from "./Container";
import Logo from "@/components/ui/Logo";
import { useContact } from "@/components/providers/ContactProvider";

export default function Footer() {
  const { openContact } = useContact();

  return (
    <footer className="bg-dark-footer py-14">
      <Container>
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-3" aria-label="Leverage Strategies home">
              <Logo variant="light" />
            </Link>
            <p className="text-sm text-white/40 max-w-xs">
              Research, frameworks, and consulting for executive teams building
              AI-native go-to-market systems.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="mb-4 text-xs font-bold uppercase tracking-widest text-white/50">
              Company
            </h4>
            <ul className="space-y-2.5">
              {[
                { label: "Home", href: "/" },
                { label: "About", href: "/about" },
                { label: "Services", href: "/services" },
                { label: "Research", href: "/research" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Research */}
          <div>
            <h4 className="mb-4 text-xs font-bold uppercase tracking-widest text-white/50">
              Research
            </h4>
            <ul className="space-y-2.5">
              {[
                { label: "Frameworks", href: "/research?category=framework" },
                { label: "Research Reports", href: "/research?category=research" },
                {
                  label: "Blockchain & Web3",
                  href: "/research?category=blockchain-web3",
                },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 text-xs font-bold uppercase tracking-widest text-white/50">
              Contact
            </h4>
            <button
              onClick={openContact}
              className="text-sm text-white/60 hover:text-white transition-colors block mb-2 text-left"
            >
              Talk to Us →
            </button>
            <div className="flex items-center gap-3 mt-4">
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/company/leverage-strategies-ai/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white/60 hover:bg-white/20 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              {/* Twitter/X */}
              <a
                href="#"
                className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white/60 hover:bg-white/20 hover:text-white transition-colors"
                aria-label="X (Twitter)"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/30">
            &copy; {new Date().getFullYear()} Leverage Strategies. All rights
            reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/about" className="text-xs text-white/30 hover:text-white/50 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/about" className="text-xs text-white/30 hover:text-white/50 transition-colors">
              Terms of Use
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
