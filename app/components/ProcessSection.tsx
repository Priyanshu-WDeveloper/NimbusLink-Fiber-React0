import { processSteps } from "../lib/data";
import Tilt from "./Tilt";

export default function ProcessSection() {
  return (
    <section className="process" id="process">
      <div className="wrap">
        <div className="section-head reveal">
          <span className="eyebrow" style={{ color: "var(--blue)" }}>Installation Process</span>
          <h2>From enquiry to activation, in four steps</h2>
          <p>Our installation process is sequential — each stage clears the way for the next, so your connection goes live without surprises.</p>
        </div>
        <div className="process-rail">
          <div className="process-steps">
            {processSteps.map((step, i) => (
              <div className="step reveal" key={step.n} style={{ transitionDelay: `${i * 0.12}s` }}>
                <Tilt max={14} glare={false} className="w-[52px] h-[52px]"><div className="step-dot">{step.n}</div></Tilt>
                <h4>{step.title}</h4>
                <p>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
