import clsx from "clsx";
import Link from "next/link";

export default function Button({
  children,
  href,
  onClick,
  variant = "primary",
  size = "md",
  className,
  disabled,
  ariaLabel,
  type = "button",
}) {
  const base = "btn";
  const variants = {
    primary: "btn--primary",
    secondary: "btn--secondary",
    ghost: "btn--ghost",
    link: "btn--link",
  };
  const sizes = {
    sm: "btn--sm",
    md: "btn--md",
    lg: "btn--lg",
  };

  const classes = clsx(
    base,
    variants[variant],
    sizes[size],
    className,
    disabled && "is-disabled"
  );

  if (href && !disabled) {
    return (
      <Link href={href} aria-label={ariaLabel ?? undefined} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      aria-label={ariaLabel ?? undefined}
      disabled={disabled}
      className={classes}
    >
      {children}
    </button>
  );
}
