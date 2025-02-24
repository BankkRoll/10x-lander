"use client";

import type React from "react";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import NumberFlow from "@number-flow/react";

export function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const endDate = new Date("2025-05-18");

    const timer = setInterval(() => {
      const now = new Date();
      const difference = endDate.getTime() - now.getTime();

      if (difference <= 0) {
        clearInterval(timer);
        return;
      }

      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="grid grid-cols-4 gap-4 text-center max-w-xl mx-auto">
      {Object.entries(timeLeft).map(([label, value]) => (
        <motion.div
          key={label}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col items-center"
        >
          <div
            className="text-4xl font-bold"
            style={
              {
                fontVariantNumeric: "tabular-nums",
                "--number-flow-char-height": "0.85em",
              } as React.CSSProperties
            }
          >
            <NumberFlow
              value={value}
              trend={-1}
              format={{ minimumIntegerDigits: 2 }}
              digits={{
                1: {
                  max:
                    label === "minutes" || label === "seconds" ? 5 : undefined,
                },
              }}
              transformTiming={{
                duration: 500,
                easing: "ease-out",
              }}
            />
          </div>
          <span className="text-sm text-muted-foreground capitalize mt-1">
            {label}
          </span>
        </motion.div>
      ))}
    </div>
  );
}
