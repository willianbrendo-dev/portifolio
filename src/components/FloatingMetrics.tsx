"use client";

import { useEffect, useState } from "react";

export function FloatingMetrics() {
  const [count, setCount] = useState(1247);
  const [isVisible, setIsVisible] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const mountTimer = window.setTimeout(() => {
      const sessionIncrement = Math.floor(Math.random() * 5) + 3;
      setCount(1247 + sessionIncrement);
      setMounted(true);
    }, 0);

    const timer = window.setTimeout(() => {
      setIsVisible(true);
    }, 1500);

    return () => {
      window.clearTimeout(mountTimer);
      window.clearTimeout(timer);
    };
  }, []);

  return (
    <div
      className={`fixed bottom-6 left-6 z-50 flex items-center gap-2 rounded-full border border-white/10 bg-black/40 px-4 py-2 shadow-2xl backdrop-blur-md transition-all duration-700 ease-out ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
      }`}
    >
      <span className="relative flex h-2 w-2">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
      </span>
      <span className="text-[10px] font-medium uppercase tracking-wider text-gray-300 sm:text-xs">
        {mounted ? count.toLocaleString("en-US") : "1,247"}+ Professional Views
      </span>
    </div>
  );
}
