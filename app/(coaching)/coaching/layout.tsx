import type { Metadata } from "next";
import CoachingNav from "@/components/coaching/CoachingNav";
import CoachingFooter from "@/components/coaching/CoachingFooter";

export const metadata: Metadata = {
  title: {
    default: "Personal AI Coaching | Leverage Strategies",
    template: "%s | Leverage Strategies",
  },
  description:
    "Build a personalized AI system that actually knows you. Not generic advice. A life operating system trained on your goals, patterns, and how you think.",
};

export default function CoachingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="coaching-page">
      <CoachingNav />
      <main>{children}</main>
      <CoachingFooter />
    </div>
  );
}
