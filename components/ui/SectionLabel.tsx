interface SectionLabelProps {
  children: React.ReactNode;
  className?: string;
  dark?: boolean;
}

export default function SectionLabel({ children, className = "", dark = false }: SectionLabelProps) {
  return (
    <span className={`section-label ${dark ? "text-white/70" : "text-purple-accent"} ${className}`}>
      {children}
    </span>
  );
}
