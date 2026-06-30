"use client";

import { useState, useEffect, useRef } from "react";
import { plans } from "../lib/data";
import Tilt from "./Tilt";

export default function PlansSection() {
  const [type, setType] = useState<"home" | "business">("home");
  const filtered = plans.filter((p) => p.type === type);
  const revealRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = revealRef.current;
    if (!el || !("IntersectionObserver" in window)) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.querySelectorAll(".reveal").forEach((r) => r.classList.add("in"));
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [filtered]);

  return (
    <section className="plans" id="plans">
      <div className="wrap">
        <div className="plans-top reveal">
          <div className="section-head" style={{ marginBottom: 0 }}>
            <span className="eyebrow" style={{ color: "var(--blue)" }}>Plans</span>
            <h2>Flexible plans for real-world usage</h2>
            <p>Switch between home and business plans. The cards below are rendered from one data source so packages stay easy to update.</p>
          </div>
          <div className="plan-tabs" role="tablist" aria-label="Plan type">
            <button
              className={`plan-tab${type === "home" ? " is-active" : ""}`}
              type="button"
              role="tab"
              aria-selected={type === "home"}
              onClick={() => setType("home")}
            >
              Home
            </button>
            <button
              className={`plan-tab${type === "business" ? " is-active" : ""}`}
              type="button"
              role="tab"
              aria-selected={type === "business"}
              onClick={() => setType("business")}
            >
              Business
            </button>
          </div>
        </div>
        <div className="plan-grid" ref={revealRef}>
          {filtered.map((plan, i) => (
            <article
              className={`plan-card reveal${plan.popular ? " is-popular" : ""}`}
              key={`${plan.type}-${i}`}
            >
              <Tilt max={10} glare={false}>
              <div className="plan-label">
                {plan.label}
                {plan.popular ? " - Popular" : ""}
              </div>
              <div className="plan-speed">{plan.speed}</div>
              <div className="plan-price">{plan.price}</div>
              <ul>
                {plan.features.map((f, j) => (
                  <li key={j}>{f}</li>
                ))}
              </ul>
              <a href="#contact" className="btn btn-dark">Enquire Now</a>
              </Tilt>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
