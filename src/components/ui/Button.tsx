"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface ButtonProps {
  variant?: "primary" | "ghost";
  children: ReactNode;
  icon?: ReactNode;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

export function Button({
  variant = "primary",
  children,
  icon,
  onClick,
  className,
  type = "button",
  disabled = false,
}: ButtonProps) {
  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      whileHover={{ scale: disabled ? 1 : 1.02 }}
      whileTap={{ scale: disabled ? 1 : 0.97 }}
      transition={{ type: "spring", stiffness: 400, damping: 20 }}
      className={cn(
        // base
        "inline-flex items-center gap-2 rounded-sm px-5 py-2.5",
        "font-sans text-xs font-semibold uppercase tracking-[0.14em]",
        "transition-colors duration-200 cursor-pointer",
        "disabled:opacity-40 disabled:cursor-not-allowed",

        // primary: solid blue
        variant === "primary" && [
          "bg-primary text-white",
          "hover:bg-primary-glow",
          "shadow-[0_0_20px_rgba(37,89,244,0.35)]",
          "hover:shadow-[0_0_28px_rgba(77,123,255,0.5)]",
        ],

        // ghost: outlined
        variant === "ghost" && [
          "border border-white/20 bg-transparent text-foreground",
          "hover:border-primary/60 hover:text-primary-glow",
        ],

        className
      )}
    >
      {children}
      {icon && <span className="flex shrink-0 items-center">{icon}</span>}
    </motion.button>
  );
}
