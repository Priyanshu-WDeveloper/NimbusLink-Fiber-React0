"use client";

import { useState } from "react";
import { coverageTags, coverageAreas } from "../lib/data";
import Tilt from "./Tilt";

export default function CoverageSection() {
  const [result, setResult] = useState("Try Ranjit Avenue, Model Town, Civil Lines, or 143001.");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const query = data.get("area")?.toString().trim().toLowerCase();
    if (!query) {
      setResult("Enter an area or PIN code to check availability.");
      return;
    }
    const match = coverageAreas.find((area) => {
      const values = [area.name, area.pin, ...area.aliases].map((v) => v.toLowerCase());
      return values.some((v) => v === query || v.includes(query) || query.includes(v));
    });
    if (match) {
      setResult(`<strong>${match.name}</strong> is in our active service map. Expect a ${match.eta}.`);
    } else {
      setResult("We do not have confirmed coverage for this location yet. Submit the form and our team will verify feasibility.");
    }
  };

  return (
    <section className="coverage" id="coverage">
      <div className="wrap coverage-inner">
        <Tilt max={14} className="coverage-map reveal" glare={false}>
          <svg viewBox="0 0 360 360">
            <circle cx="180" cy="180" r="170" fill="none" stroke="rgba(34,211,238,0.18)" strokeWidth="1" />
            <circle cx="180" cy="180" r="120" fill="none" stroke="rgba(34,211,238,0.18)" strokeWidth="1" />
            <circle cx="180" cy="180" r="70" fill="none" stroke="rgba(34,211,238,0.25)" strokeWidth="1" />
            <g stroke="rgba(94,234,212,0.5)" strokeWidth="1.2">
              <line x1="180" y1="180" x2="90" y2="100" />
              <line x1="180" y1="180" x2="280" y2="90" />
              <line x1="180" y1="180" x2="80" y2="260" />
              <line x1="180" y1="180" x2="270" y2="270" />
              <line x1="180" y1="180" x2="180" y2="30" />
            </g>
            <circle cx="180" cy="180" r="10" fill="#0c1e36" stroke="#22d3ee" strokeWidth="2" />
            <circle cx="90" cy="100" r="5" fill="#5eead4" />
            <circle cx="280" cy="90" r="5" fill="#5eead4" />
            <circle cx="80" cy="260" r="5" fill="#5eead4" />
            <circle cx="270" cy="270" r="5" fill="#5eead4" />
            <circle cx="180" cy="30" r="5" fill="#5eead4" />
          </svg>
        </Tilt>
        <div className="coverage-text reveal">
          <span className="eyebrow">Coverage</span>
          <h2>Wherever the connection needs to reach</h2>
          <p>We provide internet connectivity solutions for homes, offices and businesses through our reliable telecom network — expanding fiber coverage neighbourhood by neighbourhood.</p>
          <div className="coverage-tags">
            {coverageTags.map((tag) => (
              <span className="tag" key={tag}>{tag.toUpperCase()}</span>
            ))}
          </div>
          <div className="coverage-checker" aria-label="Coverage checker">
            <form onSubmit={handleSubmit}>
              <input type="text" name="area" placeholder="Enter area or PIN code" aria-label="Area or PIN code" autoComplete="postal-code" />
              <button className="btn btn-primary" type="submit">Check</button>
            </form>
            <div className="coverage-result" aria-live="polite" dangerouslySetInnerHTML={{ __html: result }} />
          </div>
        </div>
      </div>
    </section>
  );
}
