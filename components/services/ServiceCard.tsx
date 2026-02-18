import Link from "next/link";
import type { Service } from "@/lib/types";

interface ServiceCardProps {
  service: Service;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  return (
    <div className="rounded-lg border border-gray-border bg-white p-6 lg:p-8 hover:shadow-md transition-shadow">
      <h3 className="font-bold text-heading text-lg mb-3">
        {service.title}
      </h3>
      <p className="text-gray-text leading-relaxed mb-4 text-sm">
        {service.description}
      </p>
      {service.deliverables && (
        <div>
          <p className="text-xs font-bold uppercase tracking-wider text-purple-accent mb-2">
            Deliverables
          </p>
          <ul className="space-y-1">
            {service.deliverables.map((d) => (
              <li
                key={d}
                className="flex items-start gap-2 text-sm text-gray-text"
              >
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-purple-accent" />
                {d}
              </li>
            ))}
          </ul>
        </div>
      )}
      {service.audience && (
        <p className="text-sm text-gray-text/70 italic mt-4">
          <span className="font-semibold not-italic text-purple-accent">
            For:{" "}
          </span>
          {service.audience}
        </p>
      )}
      {service.url && (
        <Link
          href={service.url}
          className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-dark-hero hover:text-purple-accent transition-colors"
        >
          Learn More
          <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </Link>
      )}
    </div>
  );
}
