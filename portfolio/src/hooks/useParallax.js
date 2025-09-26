import { useEffect, useRef } from "react";

// Hook to apply parallax effect to a ref
export default function useParallax(speed = 0.3) {
  const ref = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      const scrollY = window.scrollY;
      ref.current.style.transform = `translateY(${scrollY * speed}px)`;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [speed]);

  return ref;
}
