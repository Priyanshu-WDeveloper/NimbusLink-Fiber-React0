import { why } from "../lib/data";
import { getIcon } from "../lib/icons";

export default function WhySection() {
  return (
    <section className="why">
      <div className="wrap">
        <div className="section-head reveal">
          <span className="eyebrow" style={{ color: "var(--blue)" }}>Why Choose Us</span>
          <h2>Infrastructure you can build a connection on</h2>
        </div>
        <div className="why-grid">
          {why.map((item, i) => {
            const Icon = getIcon(item.icon);
            return (
              <article className="why-card reveal" key={i} style={{ transitionDelay: `${i * 0.12}s` }}>
                <div className="why-ico">{Icon && <Icon />}</div>
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
