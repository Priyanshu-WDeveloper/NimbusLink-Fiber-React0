"use client";

import { useEffect, useRef } from "react";
import { IconHome, IconFiber, IconSupport, IconMapPin } from "../lib/icons";
import Tilt from "./Tilt";

export default function AboutSection() {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;
    const paths = svg.querySelectorAll<SVGPathElement>(".svg-waves path");
    const dots = svg.querySelectorAll<SVGCircleElement>(".svg-dots circle");
    if (!paths.length || !dots.length) return;

    const len = paths.length;
    const speeds = [0.35, 0.28, 0.22];
    const progress = new Array(len).fill(0).map((_, i) => i * 0.15);
    const totalLen: number[] = [];
    paths.forEach((p) => totalLen.push(p.getTotalLength()));

    let id = 0;
    let prev = 0;
    function loop(t: number) {
      const dt = prev ? Math.min((t - prev) / 1000, 0.05) : 0.016;
      prev = t;

      for (let i = 0; i < len; i++) {
        progress[i] = (progress[i] + dt * speeds[i]) % 1;
        const pt = paths[i].getPointAtLength(progress[i] * totalLen[i]);
        dots[i].setAttribute("cx", String(pt.x));
        dots[i].setAttribute("cy", String(pt.y));
      }
      id = requestAnimationFrame(loop);
    }
    id = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(id);
  }, []);

  return (
    <section className="about" id="about">
      <div className="wrap about-grid">
        <Tilt max={10} className="about-art" glare={false}>
          <svg ref={svgRef} viewBox="0 0 400 500">
            <defs>
              <linearGradient id="g1" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0" stopColor="#22d3ee" stopOpacity="0.5" />
                <stop offset="1" stopColor="#3b82f6" stopOpacity="0.15" />
              </linearGradient>
            </defs>
            <rect width="400" height="500" fill="none" />
            <g className="svg-waves" stroke="url(#g1)" strokeWidth="1.4" fill="none">
              <path id="wave1" d="M-20 380 C 80 320, 140 420, 220 360 S 360 280, 440 320" />
              <path id="wave2" d="M-20 300 C 90 260, 150 340, 230 280 S 370 220, 440 250" />
              <path id="wave3" d="M-20 220 C 100 190, 160 260, 240 200 S 380 160, 440 190" />
            </g>
            <g className="svg-dots">
              <g className="dot-wrapper"><circle cx="-20" cy="380" r="5" fill="#22d3ee" /></g>
              <g className="dot-wrapper"><circle cx="-20" cy="300" r="4" fill="#5eead4" /></g>
              <g className="dot-wrapper"><circle cx="-20" cy="220" r="4" fill="#5eead4" /></g>
            </g>
            <g className="svg-node" transform="translate(80,90)" stroke="rgba(255,255,255,0.7)" strokeWidth="1.4" fill="none">
              <rect x="0" y="0" width="100" height="64" rx="6" />
              <line x1="14" y1="16" x2="86" y2="16" />
              <line x1="14" y1="28" x2="86" y2="28" />
              <line x1="14" y1="40" x2="60" y2="40" />
              <circle cx="86" cy="40" r="3" fill="#22d3ee" stroke="none" />
            </g>
            <text className="svg-label" x="80" y="430" fill="rgba(255,255,255,0.55)" fontFamily="JetBrains Mono, monospace" fontSize="11" letterSpacing="2">NETWORK / CORE</text>
          </svg>
        </Tilt>
        <div className="reveal">
          <span className="eyebrow">About NimbusLink</span>
          <h2 style={{ fontSize: "clamp(26px,3.4vw,36px)", margin: "14px 0 18px" }}>
            Telecom infrastructure built for the way people actually connect
          </h2>
          <p style={{ color: "#56657a", fontSize: "15.5px", maxWidth: 560 }}>
            NimbusLink is a telecom infrastructure provider delivering reliable internet connectivity
            through our own fiber network. We design, lay and maintain the physical backbone — fiber
            cables, distribution nodes and last-mile connections — so that homes, businesses and entire
            communities stay online with consistent speed.
          </p>
          <div className="about-points">
            <div className="point reveal" style={{ transitionDelay: "0s" }}>
              <div className="point-ico"><IconHome size={20} stroke="#3b82f6" /></div>
              <div><h4>Reliable Connectivity</h4><p>Carrier-grade infrastructure engineered for consistent uptime, day and night.</p></div>
            </div>
            <div className="point reveal" style={{ transitionDelay: "0.12s" }}>
              <div className="point-ico"><IconFiber size={20} stroke="#3b82f6" /></div>
              <div><h4>Fiber Network Solutions</h4><p>End-to-end fiber-optic infrastructure built for high bandwidth and low latency.</p></div>
            </div>
            <div className="point reveal" style={{ transitionDelay: "0.24s" }}>
              <div className="point-ico"><IconSupport size={20} stroke="#3b82f6" /></div>
              <div><h4>Quality Customer Support</h4><p>A dedicated support team for installation, troubleshooting and account queries.</p></div>
            </div>
            <div className="point reveal" style={{ transitionDelay: "0.36s" }}>
              <div className="point-ico"><IconMapPin size={20} stroke="#3b82f6" /></div>
              <div><h4>Connecting Communities</h4><p>From single homes to enterprise offices, advanced technology that scales with you.</p></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
