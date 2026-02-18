"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function CoachingNav() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-cream/95 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="coaching-container">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/coaching" className="flex items-center gap-2">
            <span className="font-display text-xl font-bold tracking-tight">
              Leverage<span className="text-amber-dark">\</span>Strategies
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/coaching/how-it-works"
              className="font-display text-sm font-medium hover:text-amber-dark"
            >
              How It Works
            </Link>
            <Link
              href="/coaching/about"
              className="font-display text-sm font-medium hover:text-amber-dark"
            >
              About
            </Link>
            <Link href="/coaching/book" className="coaching-btn coaching-btn-primary">
              Book a Call
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span
                className={`block h-0.5 w-full bg-black transition-all duration-300 ${
                  isMobileMenuOpen ? "rotate-45 translate-y-2" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-full bg-black transition-all duration-300 ${
                  isMobileMenuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-full bg-black transition-all duration-300 ${
                  isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isMobileMenuOpen ? "max-h-64 pb-6" : "max-h-0"
          }`}
        >
          <div className="flex flex-col gap-4">
            <Link
              href="/coaching/how-it-works"
              className="font-display text-lg font-medium hover:text-amber-dark"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              How It Works
            </Link>
            <Link
              href="/coaching/about"
              className="font-display text-lg font-medium hover:text-amber-dark"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/coaching/book"
              className="coaching-btn coaching-btn-primary w-full text-center"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Book a Call
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
