import type { Service } from "@/lib/types";
import ServiceCard from "./ServiceCard";

interface ServiceTrackProps {
  title?: string;
  subtitle?: string;
  services: Service[];
}

export default function ServiceTrack({
  title,
  subtitle,
  services,
}: ServiceTrackProps) {
  return (
    <div>
      {title && (
        <div className="mb-8">
          <h2 className="text-display-lg font-serif font-bold text-heading mb-2">
            {title}
          </h2>
          {subtitle && <p className="text-gray-text">{subtitle}</p>}
        </div>
      )}
      <div className="grid gap-6 md:grid-cols-2">
        {services.map((service) => (
          <ServiceCard key={service.title} service={service} />
        ))}
      </div>
    </div>
  );
}
