"use client";

import { useEffect, useState } from "react";
import { animate } from "framer-motion";

interface CountUpValueProps {
  value: string;
  inView: boolean;
  delay?: number;
  duration?: number;
}

// Splits values like "$500", "+18.5", or "30" into a non-numeric prefix,
// the numeric portion to animate, and a non-numeric suffix.
export function CountUpValue({
  value,
  inView,
  delay = 0,
  duration = 1.5,
}: CountUpValueProps) {
  const match = value.match(/^(\D*)([\d.]+)(\D*)$/);
  const prefix = match?.[1] ?? "";
  const numeric = match?.[2] ?? value;
  const suffix = match?.[3] ?? "";
  const target = parseFloat(numeric);
  const decimals = numeric.includes(".") ? numeric.split(".")[1].length : 0;

  const [display, setDisplay] = useState(prefix + (0).toFixed(decimals) + suffix);

  useEffect(() => {
    if (!inView || Number.isNaN(target)) return;
    const controls = animate(0, target, {
      duration,
      delay,
      ease: "easeOut",
      onUpdate: (latest) => setDisplay(`${prefix}${latest.toFixed(decimals)}${suffix}`),
    });
    return () => controls.stop();
  }, [inView, target, decimals, duration, delay, prefix, suffix]);

  if (Number.isNaN(target)) return <>{value}</>;
  return <>{display}</>;
}
