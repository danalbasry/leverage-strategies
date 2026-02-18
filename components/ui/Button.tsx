import Link from "next/link";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "outline" | "dark";
  className?: string;
  external?: boolean;
}

export default function Button({
  children,
  href,
  variant = "primary",
  className = "",
  external = false,
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center rounded-lg px-6 py-3 text-sm font-semibold transition-all duration-200";

  const variants = {
    primary:
      "bg-purple-accent text-white hover:bg-purple-accent-hover shadow-sm",
    outline:
      "border-2 border-purple-accent text-purple-accent hover:bg-purple-accent hover:text-white",
    dark:
      "bg-dark-hero text-white hover:bg-dark-nav shadow-sm",
  };

  const styles = `${baseStyles} ${variants[variant]} ${className}`;

  if (href && external) {
    return (
      <a href={href} className={styles} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }

  if (href) {
    return (
      <Link href={href} className={styles}>
        {children}
      </Link>
    );
  }

  return <button className={styles}>{children}</button>;
}
