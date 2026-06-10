"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import { ReactNode } from "react";

interface FadeInSectionProps extends HTMLMotionProps<"section"> {
  children: ReactNode;
  delay?: number;
}

export function FadeInSection({
  children,
  delay = 0,
  ...props
}: FadeInSectionProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      {...props}
    >
      {children}
    </motion.section>
  );
}
