import React from "react";
import useParallax from "../hooks/useParallax";


// A shining black animated background using Tailwind and custom CSS
const Background = () => {
  const semiRef = useParallax(0.35); // parallax for semicircle only
  return (
    <div className="fixed inset-0 -z-10 bg-black overflow-hidden">
      {/* Semicircle outline from bottom left to right */}
      <svg
        ref={semiRef}
        className="absolute left-0 bottom-0 w-full h-1/2 pointer-events-none"
        viewBox="0 0 100 50"
        fill="none"
        preserveAspectRatio="none"
        style={{ zIndex: 1 }}
      >
        <path
          d="M 0 50 Q 50 0 100 50"
          stroke="white"
          strokeWidth="0.5"
          strokeLinecap="round"
          fill="none"
          opacity="0.5"
        />
      </svg>
    </div>
  );
};

export default Background;
