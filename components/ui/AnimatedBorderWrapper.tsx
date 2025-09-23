"use client";

import React from "react";

type AnimatedBorderWrapperProps = {
  children: React.ReactNode;
  className?: string; // outer container
  radiusClass?: string; // rounded-md, lg, etc
  borderPadding?: string; // ✅ add thi
};

export default function AnimatedBorderWrapper({
  children,
  className = "",
  radiusClass = "rounded-xl",
}: AnimatedBorderWrapperProps): JSX.Element {
  return (
    <div className={`relative ${radiusClass} ${className}`}>
      {/* Border effect */}
      <div
        className="absolute inset-0 border-animated z-0"
        aria-hidden="true"
      />
      {/* Inner content */}
      <div
        className={`relative z-10 ${radiusClass} bg-neutral-900 text-white flex flex-col items-center justify-center p-6`}
      >
        {children}
      </div>

      <style jsx>{`
        .border-animated {
          border-radius: inherit;
          padding: 2px; /* border thickness */
          background: linear-gradient(
            90deg,
            #ff7a18,
            #af002d,
            #319197,
            #ff7a18
          );
          background-size: 300% 300%;
          animation: animated-gradient 6s linear infinite;
          -webkit-mask: linear-gradient(#fff 0 0) content-box,
            linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
        }

        @keyframes animated-gradient {
          0% {
            background-position: 0% 50%;
          }
          100% {
            background-position: 300% 50%;
          }
        }
      `}</style>
    </div>
  );
}
