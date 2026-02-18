"use client";

import { useContact } from "@/components/providers/ContactProvider";

interface ContactButtonProps {
  variant?: "primary" | "outline" | "dark";
  className?: string;
  children: React.ReactNode;
}

export default function ContactButton({
  variant = "outline",
  className = "",
  children,
}: ContactButtonProps) {
  const { openContact } = useContact();

  const variants = {
    primary:
      "bg-purple-accent text-white hover:bg-purple-accent-hover shadow-sm",
    outline:
      "border-2 border-purple-accent text-purple-accent hover:bg-purple-accent hover:text-white",
    dark:
      "bg-dark-hero text-white hover:bg-dark-nav shadow-sm",
  };

  return (
    <button
      onClick={openContact}
      className={`inline-flex items-center justify-center rounded-lg px-6 py-3 text-sm font-semibold transition-all duration-200 ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
}
