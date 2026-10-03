"use client";

import React from "react";
import Link from "next/link";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  download?: string | boolean;
  external?: boolean;
  icon?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  href,
  download,
  external,
  icon,
  children,
  className = "",
  ...props
}) => {
  const variantClass = `btn-${variant}`;
  const sizeClass = size === "sm" ? "btn-sm" : size === "lg" ? "btn-lg" : "";
  const combinedClasses = `btn ${variantClass} ${sizeClass} ${className}`.trim();

  if (href) {
    if (download || external || href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("tel:")) {
      return (
        <a
          href={href}
          download={download}
          target={external ? "_blank" : undefined}
          rel={external ? "noopener noreferrer" : undefined}
          className={combinedClasses}
        >
          {icon && <span className="btn-icon-wrapper">{icon}</span>}
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={combinedClasses}>
        {icon && <span className="btn-icon-wrapper">{icon}</span>}
        {children}
      </Link>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {icon && <span className="btn-icon-wrapper">{icon}</span>}
      {children}
    </button>
  );
};

export default Button;
