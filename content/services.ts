import type { Service } from "@/lib/types";

export const services: Service[] = [
  {
    title: "AI GTM System Design",
    description:
      "Map your revenue system, identify high-leverage loops, and design the AI-native GTM architecture that replaces linear headcount scaling with compounding agent-driven workflows.",
    track: "enterprise",
    deliverables: [
      "Revenue System Map",
      "AI GTM Stack Architecture",
      "Agent Role Definitions",
      "Implementation Roadmap",
    ],
  },
  {
    title: "Agentic Workflow Development",
    description:
      "Build production-ready multi-agent workflows: signal-driven outbound engines, closed-lost revival systems, expansion and risk monitors, and continuous intelligence loops.",
    track: "enterprise",
    deliverables: [
      "Signal Detection Agents",
      "Research & Enrichment Agents",
      "Execution Agents",
      "Feedback & Optimization Agents",
    ],
  },
  {
    title: "Revenue Operations Architecture",
    description:
      "Unify your data layer, eliminate tool sprawl, and build the orchestration infrastructure that makes multi-agent GTM systems possible. Reduce handoffs by 45% and errors by 60%.",
    track: "enterprise",
    deliverables: [
      "Data Orchestration Layer",
      "Human-Agent Operating Model",
      "Quality Governance Framework",
      "Performance Dashboard",
    ],
  },
  {
    title: "Product Strategy Consulting",
    description:
      "Connect product usage signals, market intelligence, and customer behavior into a continuous feedback loop that reaches your roadmap. Build the signal architecture between GTM and product.",
    track: "enterprise",
    deliverables: [
      "Signal Architecture Design",
      "Product-GTM Data Integration",
      "Market Intelligence Framework",
      "Continuous Feedback System",
    ],
  },
  {
    title: "Personal AI Coaching",
    description:
      "One-on-one coaching for founders and leaders who want to understand and leverage AI in their revenue operations. Build your personal AI operating system.",
    track: "smb",
    audience:
      "Founders, solopreneurs, and small team leaders building their first AI-powered workflows.",
    url: "/coaching",
  },
  {
    title: "Business Process Automation",
    description:
      "Identify repetitive workflows consuming your team's time and replace them with intelligent automation. From lead routing to proposal generation to follow-up sequences.",
    track: "smb",
    audience:
      "Small businesses and professional services firms looking to scale operations without scaling headcount.",
  },
  {
    title: "CRM & Operational Systems",
    description:
      "Design and implement the operational backbone your business needs. CRM setup, pipeline management, reporting, and the integrations that connect everything together.",
    track: "smb",
    audience:
      "Growing businesses that have outgrown spreadsheets and need proper systems infrastructure.",
  },
  {
    title: "Go-to-Market Consulting",
    description:
      "Strategic advisory for businesses entering new markets, launching new products, or redesigning their sales motion. Positioning, messaging, channel strategy, and execution planning.",
    track: "smb",
    audience:
      "Startups and SMBs preparing for their next growth phase and needing a clear GTM playbook.",
  },
];

export const enterpriseServices = services.filter(
  (s) => s.track === "enterprise"
);
export const smbServices = services.filter((s) => s.track === "smb");
