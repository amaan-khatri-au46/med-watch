import React, { FC, ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "secondary" | "danger";
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
  className?: string; // Allow custom className
}

const Button: FC<ButtonProps> = ({
  children,
  onClick,
  type = "button",
  size = "md",
  disabled = false,
  className = "", // Default to an empty string
}) => {
  // Button styles based on props
  const baseStyles =
    "rounded-full  px-12 py-3 text-md text-white hover:bg-blue-700";

  const sizeStyles = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-2 text-base",
    lg: "px-8 py-4 text-lg",
  };

  return (
    <button
      type={type}
      className={`${baseStyles} ${
        disabled ? "cursor-not-allowed opacity-50" : ""
      } ${className}`} // Add custom className
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
