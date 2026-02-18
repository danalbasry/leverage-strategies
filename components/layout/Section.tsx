interface SectionProps {
  children: React.ReactNode;
  theme?: "white" | "gray" | "dark" | "purple-light";
  className?: string;
  id?: string;
}

const themeStyles = {
  white: "bg-white text-body",
  gray: "bg-gray-bg text-body",
  dark: "bg-dark-hero text-white",
  "purple-light": "bg-purple-light text-body",
};

export default function Section({
  children,
  theme = "white",
  className = "",
  id,
}: SectionProps) {
  return (
    <section id={id} className={`py-16 lg:py-24 ${themeStyles[theme]} ${className}`}>
      {children}
    </section>
  );
}
