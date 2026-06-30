import { support, faqs } from "../lib/data";
import { getIcon } from "../lib/icons";
import Tilt from "./Tilt";

export default function SupportSection() {
  return (
    <section className="support" id="support">
      <div className="wrap">
        <div className="section-head reveal">
          <span className="eyebrow" style={{ color: "var(--blue)" }}>Customer Support</span>
          <h2>Help, whenever the connection needs it</h2>
        </div>
        <div className="support-grid reveal">
          {support.map((item, i) => {
            const Icon = getIcon(item.icon);
            return (
              <article className="support-card" key={i}>
                <Tilt max={10} glare={false}>
                <div className="support-ico">{Icon && <Icon />}</div>
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
                </Tilt>
              </article>
            );
          })}
        </div>
        <div className="faq-list reveal">
          {faqs.map((item, i) => (
            <details className="faq-item" key={i}>
              <summary>{item.q}</summary>
              <p>{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
