"use client";

import { useState, useEffect } from "react";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    jobTitle: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      window.addEventListener("keydown", handleEsc);
      return () => window.removeEventListener("keydown", handleEsc);
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const subject = encodeURIComponent(
      `Inquiry from ${formData.firstName} ${formData.lastName}, ${formData.company}`
    );
    const body = encodeURIComponent(
      `Name: ${formData.firstName} ${formData.lastName}\nEmail: ${formData.email}\nCompany: ${formData.company}\nTitle: ${formData.jobTitle}\nPhone: ${formData.phone}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:dan@leveragestrategies.ai?subject=${subject}&body=${body}`;

    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      company: "",
      jobTitle: "",
      phone: "",
      message: "",
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-start justify-center overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative w-full max-w-2xl mx-4 my-8 sm:my-16 rounded-xl bg-white shadow-2xl">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 flex h-10 w-10 items-center justify-center rounded-full text-gray-text hover:bg-gray-bg transition-colors z-10"
          aria-label="Close"
        >
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {submitted ? (
          /* Success State */
          <div className="p-8 sm:p-12 text-center">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-purple-light">
              <svg className="h-8 w-8 text-purple-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-display-md font-serif font-bold text-heading mb-3">
              Thank you for reaching out.
            </h2>
            <p className="text-gray-text mb-2">
              Your email client should open with a pre-filled message.
            </p>
            <p className="text-gray-text text-sm mb-8">
              If it didn&apos;t open, please try again or reach out through LinkedIn.
            </p>
            <button
              onClick={handleReset}
              className="inline-flex items-center justify-center rounded-lg bg-dark-hero px-6 py-3 text-sm font-semibold text-white hover:bg-dark-nav transition-colors"
            >
              Close
            </button>
          </div>
        ) : (
          /* Form */
          <>
            {/* Header */}
            <div className="bg-dark-hero rounded-t-xl px-8 py-8 sm:px-12 sm:py-10">
              <h2 className="text-display-md font-serif font-bold text-white mb-2">
                Talk to Us
              </h2>
              <p className="text-white/60 text-sm">
                No pitch deck. Just an honest conversation about where you are
                and what the next step looks like.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="p-8 sm:p-12">
              <div className="grid gap-5 sm:grid-cols-2">
                {/* First Name */}
                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-semibold text-heading mb-1.5"
                  >
                    First Name <span className="text-purple-accent">*</span>
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    required
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-gray-border px-4 py-2.5 text-sm text-heading placeholder:text-gray-text/50 focus:border-purple-accent focus:ring-2 focus:ring-purple-accent/20 outline-none transition-colors"
                    placeholder="First name"
                  />
                </div>

                {/* Last Name */}
                <div>
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-semibold text-heading mb-1.5"
                  >
                    Last Name <span className="text-purple-accent">*</span>
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    required
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-gray-border px-4 py-2.5 text-sm text-heading placeholder:text-gray-text/50 focus:border-purple-accent focus:ring-2 focus:ring-purple-accent/20 outline-none transition-colors"
                    placeholder="Last name"
                  />
                </div>

                {/* Business Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-heading mb-1.5"
                  >
                    Business Email <span className="text-purple-accent">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-gray-border px-4 py-2.5 text-sm text-heading placeholder:text-gray-text/50 focus:border-purple-accent focus:ring-2 focus:ring-purple-accent/20 outline-none transition-colors"
                    placeholder="you@company.com"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-semibold text-heading mb-1.5"
                  >
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-gray-border px-4 py-2.5 text-sm text-heading placeholder:text-gray-text/50 focus:border-purple-accent focus:ring-2 focus:ring-purple-accent/20 outline-none transition-colors"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>

                {/* Company */}
                <div>
                  <label
                    htmlFor="company"
                    className="block text-sm font-semibold text-heading mb-1.5"
                  >
                    Company <span className="text-purple-accent">*</span>
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    required
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-gray-border px-4 py-2.5 text-sm text-heading placeholder:text-gray-text/50 focus:border-purple-accent focus:ring-2 focus:ring-purple-accent/20 outline-none transition-colors"
                    placeholder="Company name"
                  />
                </div>

                {/* Job Title */}
                <div>
                  <label
                    htmlFor="jobTitle"
                    className="block text-sm font-semibold text-heading mb-1.5"
                  >
                    Job Title <span className="text-purple-accent">*</span>
                  </label>
                  <input
                    type="text"
                    id="jobTitle"
                    name="jobTitle"
                    required
                    value={formData.jobTitle}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-gray-border px-4 py-2.5 text-sm text-heading placeholder:text-gray-text/50 focus:border-purple-accent focus:ring-2 focus:ring-purple-accent/20 outline-none transition-colors"
                    placeholder="Your role"
                  />
                </div>
              </div>

              {/* Message */}
              <div className="mt-5">
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold text-heading mb-1.5"
                >
                  How can we help?
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-gray-border px-4 py-2.5 text-sm text-heading placeholder:text-gray-text/50 focus:border-purple-accent focus:ring-2 focus:ring-purple-accent/20 outline-none transition-colors resize-none"
                  placeholder="Tell us about your current situation and what you're looking to achieve..."
                />
              </div>

              {/* Submit */}
              <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center rounded-lg bg-purple-accent px-8 py-3 text-sm font-semibold text-white hover:bg-purple-accent-hover transition-colors shadow-sm"
                >
                  Submit
                  <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
                <p className="text-xs text-gray-text/60">
                  We typically respond within one business day.
                </p>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
