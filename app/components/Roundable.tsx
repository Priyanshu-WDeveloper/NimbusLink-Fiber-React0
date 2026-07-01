"use client";

import { useRef, useCallback } from "react";

type RoundableProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Roundable({
  children,
  className = "",
}: RoundableProps) {
  const elRef = useRef<HTMLDivElement>(null);
  const drag = useRef(false);
  const snapping = useRef(false);
  const idleTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const lastX = useRef(0);
  const lastY = useRef(0);
  const rotX = useRef(0);
  const rotY = useRef(0);
  const velX = useRef(0);
  const velY = useRef(0);

  const apply = useCallback(() => {
    const el = elRef.current;
    if (!el) return;
    el.style.transform = `perspective(800px) rotateY(${rotX.current}deg) rotateX(${rotY.current}deg)`;
  }, []);

  const onPointerDown = useCallback((e: React.PointerEvent) => {
    if (idleTimer.current) {
      clearTimeout(idleTimer.current);
      idleTimer.current = null;
    }
    snapping.current = false;
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
    drag.current = true;
    lastX.current = e.clientX;
    lastY.current = e.clientY;
  }, []);

  const onPointerMove = useCallback(
    (e: React.PointerEvent) => {
      if (!drag.current) return;
      const dx = e.clientX - lastX.current;
      const dy = e.clientY - lastY.current;
      lastX.current = e.clientX;
      lastY.current = e.clientY;
      rotX.current = rotX.current + dx * 0.4;
      rotY.current = rotY.current - dy * 0.4;
      velX.current = dx * 0.4;
      velY.current = -dy * 0.4;
      apply();
    },
    [],
  );

  const onPointerUp = useCallback(
    () => {
      drag.current = false;

      const inertia = () => {
        velX.current *= 0.92;
        velY.current *= 0.92;
        if (Math.abs(velX.current) < 0.05 && Math.abs(velY.current) < 0.05) {
          idleTimer.current = setTimeout(() => {
            snapping.current = true;
            const snap = () => {
              if (!snapping.current) return;
              rotX.current *= 0.90;
              rotY.current *= 0.90;
              if (Math.abs(rotX.current) < 0.5 && Math.abs(rotY.current) < 0.5) {
                rotX.current = 0;
                rotY.current = 0;
                snapping.current = false;
                idleTimer.current = null;
                apply();
                return;
              }
              apply();
              requestAnimationFrame(snap);
            };
            requestAnimationFrame(snap);
          }, 2000);
          return;
        }
        rotX.current = rotX.current + velX.current;
        rotY.current = rotY.current + velY.current;
        apply();
        requestAnimationFrame(inertia);
      };

      requestAnimationFrame(inertia);
    },
    [apply],
  );

  return (
    <div
      ref={elRef}
      className={className}
      style={{ cursor: "grab", userSelect: "none", touchAction: "none" }}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
    >
      <div style={{ pointerEvents: "none" }}>
        {children}
      </div>
    </div>
  );
}
