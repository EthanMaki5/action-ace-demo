import { ReactNode } from "react";

type Variant = "primary" | "secondary" | "outline" | "ghost-on-dark";

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-blue-600 text-white hover:bg-navy-900 shadow-lg shadow-blue-600/25 hover:shadow-xl hover:shadow-navy-900/20",
  secondary: "bg-white text-navy-900 hover:bg-blue-50 shadow-lg shadow-navy-950/10",
  outline:
    "border-2 border-navy-900/15 text-navy-900 hover:border-blue-600 hover:text-blue-600",
  "ghost-on-dark":
    "border-2 border-white/30 text-white hover:bg-white hover:text-navy-900",
};

export default function Button({
  href,
  children,
  variant = "primary",
  icon,
  className = "",
  onClick,
  type = "button",
}: {
  href?: string;
  children: ReactNode;
  variant?: Variant;
  icon?: ReactNode;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
}) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-full px-7 py-4 text-base font-semibold transition-all duration-300 active:scale-[0.98] ${variantClasses[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes}>
        {icon}
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {icon}
      {children}
    </button>
  );
}
