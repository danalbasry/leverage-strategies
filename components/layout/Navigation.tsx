"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useContact } from "@/components/providers/ContactProvider";
import Logo from "@/components/ui/Logo";

interface DropdownItem {
  label: string;
  href: string;
}

interface DropdownColumn {
  heading: string;
  items: DropdownItem[];
}

interface NavItemWithDropdown {
  label: string;
  href: string;
  columns: DropdownColumn[];
}

const servicesDropdown: NavItemWithDropdown = {
  label: "Services",
  href: "/services",
  columns: [
    {
      heading: "Enterprise",
      items: [
        { label: "AI GTM System Design", href: "/services#enterprise" },
        { label: "Agentic Workflow Development", href: "/services#enterprise" },
        { label: "Revenue Operations Architecture", href: "/services#enterprise" },
        { label: "Product Strategy Consulting", href: "/services#enterprise" },
      ],
    },
    {
      heading: "Founders & SMBs",
      items: [
        { label: "Personal AI Coaching", href: "/coaching" },
        { label: "Business Process Automation", href: "/services#smb" },
        { label: "CRM & Operational Systems", href: "/services#smb" },
        { label: "Go-to-Market Consulting", href: "/services#smb" },
      ],
    },
  ],
};

const researchDropdown: NavItemWithDropdown = {
  label: "Research",
  href: "/research",
  columns: [
    {
      heading: "By Category",
      items: [
        { label: "All Research", href: "/research" },
        { label: "Frameworks", href: "/research?category=framework" },
        { label: "Research Reports", href: "/research?category=research" },
        { label: "Blockchain & Web3", href: "/research?category=blockchain-web3" },
      ],
    },
    {
      heading: "Featured Research",
      items: [
        {
          label: "The PM's New Job: Product Judgment in the AI Era",
          href: "/research/product-judgment-ai-era",
        },
        {
          label: "How to Measure AI ROI: Every CFO's Question",
          href: "/research/ai-roi-playbook",
        },
        {
          label: "The Non-Technical Builder's Playbook",
          href: "/research/non-technical-builders-playbook",
        },
        {
          label: "The OpenAI Frontier Playbook",
          href: "/research/openai-frontier-playbook",
        },
        {
          label: "How Serious Blockchain Teams Go to Market",
          href: "/research/blockchain-gtm-playbook",
        },
      ],
    },
  ],
};

const simpleLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const dropdownTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const pathname = usePathname();
  const { openContact } = useContact();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  const handleMouseEnter = useCallback((key: string) => {
    if (dropdownTimeout.current) {
      clearTimeout(dropdownTimeout.current);
      dropdownTimeout.current = null;
    }
    setActiveDropdown(key);
  }, []);

  const handleMouseLeave = useCallback(() => {
    dropdownTimeout.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  }, []);

  const isActive = (href: string) => pathname === href || pathname.startsWith(href + "/");

  const renderDropdown = (dropdown: NavItemWithDropdown) => (
    <div
      className="absolute left-0 right-0 top-full z-50"
      onMouseEnter={() => handleMouseEnter(dropdown.label)}
      onMouseLeave={handleMouseLeave}
    >
      {/* Dropdown panel */}
      <div className="border-t border-gray-border bg-white shadow-lg">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 gap-12">
            {dropdown.columns.map((col) => (
              <div key={col.heading}>
                <h3 className="text-xs font-bold uppercase tracking-widest text-gray-text/60 mb-4">
                  {col.heading}
                </h3>
                <ul className="space-y-1">
                  {col.items.map((item) => (
                    <li key={item.label}>
                      {item.href.startsWith("http") ? (
                        <a
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block rounded-md px-3 py-2 text-sm text-heading hover:bg-gray-bg hover:text-dark-hero transition-colors inline-flex items-center gap-1.5"
                        >
                          {item.label}
                          <svg className="h-3 w-3 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
                          </svg>
                        </a>
                      ) : (
                        <Link
                          href={item.href}
                          className="block rounded-md px-3 py-2 text-sm text-heading hover:bg-gray-bg hover:text-dark-hero transition-colors"
                        >
                          {item.label}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          {/* Bottom link */}
          <div className="mt-6 pt-4 border-t border-gray-border">
            <Link
              href={dropdown.href}
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-dark-hero hover:text-purple-accent transition-colors"
            >
              View All {dropdown.label}
              <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );

  const dropdownItems = [servicesDropdown, researchDropdown];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-white transition-shadow duration-200 ${
        scrolled ? "shadow-md" : "border-b border-gray-border"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 lg:px-8">
        <Link href="/" aria-label="Leverage Strategies home">
          <Logo variant="dark" />
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-1 md:flex">
          {/* Home */}
          <Link
            href="/"
            className={`px-3 py-2 text-sm font-medium transition-colors rounded-md ${
              pathname === "/"
                ? "text-dark-hero"
                : "text-gray-text hover:text-heading"
            }`}
          >
            Home
          </Link>

          {/* Dropdown items */}
          {dropdownItems.map((dropdown) => (
            <div
              key={dropdown.label}
              className="relative"
              onMouseEnter={() => handleMouseEnter(dropdown.label)}
              onMouseLeave={handleMouseLeave}
            >
              <Link
                href={dropdown.href}
                className={`inline-flex items-center gap-1 px-3 py-2 text-sm font-medium transition-colors rounded-md ${
                  isActive(dropdown.href)
                    ? "text-dark-hero"
                    : "text-gray-text hover:text-heading"
                }`}
              >
                {dropdown.label}
                <svg
                  className={`h-3 w-3 transition-transform duration-200 ${
                    activeDropdown === dropdown.label ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </Link>
            </div>
          ))}

          {/* About */}
          <Link
            href="/about"
            className={`px-3 py-2 text-sm font-medium transition-colors rounded-md ${
              pathname === "/about"
                ? "text-dark-hero"
                : "text-gray-text hover:text-heading"
            }`}
          >
            About
          </Link>

          {/* Divider */}
          <div className="w-px h-6 bg-gray-border mx-3" />

          {/* CTA */}
          <button
            onClick={openContact}
            className="rounded-lg bg-dark-hero px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-dark-nav inline-flex items-center gap-1.5"
          >
            Talk to Us
            <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="flex h-11 w-11 flex-col items-center justify-center gap-1.5 md:hidden"
          aria-label="Toggle menu"
        >
          <span
            className={`block h-0.5 w-6 bg-heading transition-transform ${
              mobileOpen ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-heading transition-opacity ${
              mobileOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-heading transition-transform ${
              mobileOpen ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </nav>

      {/* Desktop dropdowns rendered outside nav for full-width */}
      {dropdownItems.map(
        (dropdown) =>
          activeDropdown === dropdown.label && (
            <div key={dropdown.label}>{renderDropdown(dropdown)}</div>
          )
      )}

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-gray-border bg-white px-6 pb-6 md:hidden max-h-[80vh] overflow-y-auto">
          {/* Home */}
          <Link
            href="/"
            className={`block py-3 text-base font-medium ${
              pathname === "/" ? "text-dark-hero font-bold" : "text-heading"
            }`}
          >
            Home
          </Link>

          {/* Services with sub-links */}
          <div className="border-b border-gray-border pb-3 mb-1">
            <Link
              href="/services"
              className={`block py-3 text-base font-medium ${
                isActive("/services") ? "text-dark-hero font-bold" : "text-heading"
              }`}
            >
              Services
            </Link>
            <div className="pl-4 space-y-1">
              {servicesDropdown.columns.map((col) => (
                <div key={col.heading}>
                  <p className="text-xs font-bold uppercase tracking-widest text-gray-text/60 pt-2 pb-1">
                    {col.heading}
                  </p>
                  {col.items.map((item) =>
                    item.href.startsWith("http") ? (
                      <a
                        key={item.label}
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="py-1.5 text-sm text-gray-text hover:text-heading inline-flex items-center gap-1.5"
                      >
                        {item.label}
                        <svg className="h-3 w-3 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
                        </svg>
                      </a>
                    ) : (
                      <Link
                        key={item.label}
                        href={item.href}
                        className="block py-1.5 text-sm text-gray-text hover:text-heading"
                      >
                        {item.label}
                      </Link>
                    )
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Research with sub-links */}
          <div className="border-b border-gray-border pb-3 mb-1">
            <Link
              href="/research"
              className={`block py-3 text-base font-medium ${
                isActive("/research") ? "text-dark-hero font-bold" : "text-heading"
              }`}
            >
              Research
            </Link>
            <div className="pl-4 space-y-1">
              {researchDropdown.columns.map((col) => (
                <div key={col.heading}>
                  <p className="text-xs font-bold uppercase tracking-widest text-gray-text/60 pt-2 pb-1">
                    {col.heading}
                  </p>
                  {col.items.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      className="block py-1.5 text-sm text-gray-text hover:text-heading"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* About */}
          <Link
            href="/about"
            className={`block py-3 text-base font-medium ${
              pathname === "/about" ? "text-dark-hero font-bold" : "text-heading"
            }`}
          >
            About
          </Link>

          {/* CTA */}
          <button
            onClick={openContact}
            className="mt-4 block w-full rounded-lg bg-dark-hero py-3 text-center text-sm font-semibold text-white"
          >
            Talk to Us →
          </button>
        </div>
      )}
    </header>
  );
}
