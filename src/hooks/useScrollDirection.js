import { useState, useEffect, useRef } from "react";

/**
 * Returns "down" or "up" based on the last scroll movement.
 * Starts as "down" (natural first-load direction).
 */
export default function useScrollDirection() {
  const [direction, setDirection] = useState("down");
  const lastY = useRef(typeof window !== "undefined" ? window.scrollY : 0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      if (Math.abs(y - lastY.current) > 4) {
        setDirection(y > lastY.current ? "down" : "up");
        lastY.current = y;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return direction;
}
