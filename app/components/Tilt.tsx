"use client";

import { useRef, useState, useCallback, type ReactNode } from "react";

export default function Tilt({
  children,
  className = "",
  max = 10,
  glare = true,
}: {
  children: ReactNode;
  className?: string;
  max?: number;
  glare?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [t, setT] = useState({ rx: 0, ry: 0, gx: 50, gy: 50, active: false });

  const onMove = useCallback(
    (e: React.MouseEvent) => {
      const el = ref.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width;
      const py = (e.clientY - r.top) / r.height;
      setT({
        rx: (0.5 - py) * max * 2,
        ry: (px - 0.5) * max * 2,
        gx: px * 100,
        gy: py * 100,
        active: true,
      });
    },
    [max],
  );

  const onLeave = () => setT((s) => ({ ...s, rx: 0, ry: 0, active: false }));

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={`relative overflow-hidden ${className}`}
      style={{
        transformStyle: "preserve-3d",
        transform: `perspective(900px) rotateX(${t.rx}deg) rotateY(${t.ry}deg) ${t.active ? "scale(1.02)" : "scale(1)"}`,
        transition: t.active ? "transform 60ms linear" : "transform 400ms ease",
      }}
    >
      {children}
      {glare && (
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            opacity: t.active ? 0.5 : 0,
            transition: "opacity 0.3s",
            background: `radial-gradient(circle at ${t.gx}% ${t.gy}%, rgba(94,234,212,0.25), transparent 55%)`,
          }}
        />
      )}
    </div>
  );
}
