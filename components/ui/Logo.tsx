interface LogoProps {
  variant?: "dark" | "light";
  showTagline?: boolean;
  className?: string;
}

export default function Logo({
  variant = "dark",
  showTagline = false,
  className = "",
}: LogoProps) {
  const textColor = variant === "light" ? "text-white" : "text-heading";
  const lineColor = variant === "light" ? "bg-white/30" : "bg-purple-accent/40";
  const taglineColor = variant === "light" ? "text-white/50" : "text-gray-text";

  return (
    <div className={`flex flex-col ${className}`}>
      <span className={`font-serif text-[1.4rem] font-bold leading-none tracking-wide ${textColor}`}>
        Leverage
      </span>
      <div className="flex flex-col items-center mt-0.5">
        <div className={`w-full h-px ${lineColor}`} />
        <span className={`text-[0.55rem] font-sans font-semibold tracking-[0.22em] uppercase leading-none py-[3px] ${textColor} opacity-70`}>
          STRATEGIES
        </span>
        <div className={`w-full h-px ${lineColor}`} />
      </div>
      {showTagline && (
        <span className={`text-[0.6rem] font-sans tracking-[0.2em] uppercase mt-1.5 ${taglineColor}`}>
          Systems That Scale You
        </span>
      )}
    </div>
  );
}
