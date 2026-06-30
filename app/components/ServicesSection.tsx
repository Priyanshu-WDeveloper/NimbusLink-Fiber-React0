import { services } from "../lib/data";
import { getIcon } from "../lib/icons";
import Tilt from "./Tilt";

export default function ServicesSection() {
  return (
    <section className="services" id="services">
      <div className="wrap">
        <div className="section-head light-on-dark reveal">
          <span className="eyebrow">Our Services</span>
          <h2>Connectivity solutions for every kind of space</h2>
          <p>Whether it&apos;s a single household or a multi-floor office, our network is built to deliver the right plan with the right infrastructure.</p>
        </div>
        <div className="svc-grid">
          {services.map((item) => {
            const Icon = getIcon(item.icon);
            return (
              <Tilt max={10} glare={false} className="svc-card reveal" key={item.num}>
                <article>
                  <span className="svc-num">{item.num}</span>
                  <div className="svc-ico">{Icon && <Icon />}</div>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </article>
              </Tilt>
            );
          })}
        </div>
      </div>
    </section>
  );
}
