"use client";
import { useEffect, useRef, useState, type ReactNode } from "react";

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  from?: "bottom" | "left" | "right" | "none";
}

export function FadeIn({ children, delay = 0, className = "", from = "bottom" }: FadeInProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [phase, setPhase] = useState<"idle" | "hidden" | "visible">("idle");

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const inView = el.getBoundingClientRect().top < window.innerHeight - 40;
    if (inView) {
      setPhase("visible");
      return;
    }

    setPhase("hidden");
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setPhase("visible");
          observer.unobserve(el);
        }
      },
      { threshold: 0.06, rootMargin: "0px 0px -32px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const initialTransform = { bottom: "translateY(28px)", left: "translateX(-22px)", right: "translateX(22px)", none: "none" }[from];

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: phase === "hidden" ? 0 : 1,
        transform: phase === "hidden" ? initialTransform : "none",
        transition: phase === "idle" ? undefined : `opacity 0.7s cubic-bezier(.16,1,.3,1) ${delay}ms, transform 0.7s cubic-bezier(.16,1,.3,1) ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}
