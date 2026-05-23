import { useScrollReveal } from "@/hooks/useScrollReveal";
import type { ReactNode, CSSProperties, ElementType } from "react";

type AnimationType =
  | "fade-up"
  | "fade-down"
  | "fade-left"
  | "fade-right"
  | "fade"
  | "zoom-in"
  | "zoom-out";

interface ScrollRevealProps {
  children: ReactNode;
  animation?: AnimationType;
  delay?: number;         // ms
  duration?: number;      // ms
  className?: string;
  style?: CSSProperties;
  as?: ElementType;
}

export function ScrollReveal({
  children,
  animation = "fade-up",
  delay = 0,
  duration = 1000,
  className = "",
  style,
  as: Tag = "div",
}: ScrollRevealProps) {
  const ref = useScrollReveal<HTMLElement>();

  // Globally scale timings slightly to make everything feel noticeably slower, softer, and more premium
  const finalDelay = delay * 1.6;
  const finalDuration = duration * 1.6;

  return (
    // @ts-ignore – dynamic tag
    <Tag
      ref={ref}
      data-animation={animation}
      data-revealed="false"
      className={`scroll-reveal ${className}`}
      style={{
        transitionDelay: `${finalDelay}ms`,
        transitionDuration: `${finalDuration}ms`,
        ...style,
      }}
    >
      {children}
    </Tag>
  );
}
