import { Link } from "react-router-dom";

type buttonProps = {
  children?: React.ReactNode;
  variant?: "primary" | "accent" | "link" | "default";
  type?: "button" | "submit" | "reset";
  icon?: React.ReactNode;
  className?: string;
  to?: string;
};

const Button = ({
  children,
  variant = "default",
  type = "button",
  icon,
  className,
  to,
}: buttonProps) => {
  const baseStyles = "inline-block font-semibold text-center cursor-pointer whitespace-nowrap";

  const variantStyles = {
    primary: "bg-[var(--primary-color)] text-[var(--accent-color)]",
    accent: "bg-[var(--accent-color)] text-[var(--primary-color)]",
    link: "text-[var(--accent-color)] underline underline-offset-4",
    default: "bg-[var(--accent-color)]/10 text-[var(--accent-color)] border border-[var(--border-color)] hover:border-[var(--accent-color)]/50",
  }[variant];

  const combinedClasses = `${baseStyles} ${variantStyles} ${className}`;

  if (to) {
    return (
      <Link to={to} className={combinedClasses}>
        {children}
        {icon}
      </Link>
    );
  }
  return (
    <button type={type} className={combinedClasses}>
      {children}
      {icon}
    </button>
  );
};

export default Button;
