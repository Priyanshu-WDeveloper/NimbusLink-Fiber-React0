import dynamic from "next/dynamic";

const HeroScene = dynamic(() => import("./HeroScene"), { ssr: false });

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-grid" />
      <div className="hero-bg">
        <HeroScene />
      </div>
      <div className="hero-overlay" />
      <div className="wrap hero-inner">
        <div className="hero-text">
          <span className="eyebrow">
            Telecom Infrastructure &amp; ISP
          </span>
          <h1>
            Fast, Reliable &amp;{' '}
            <span className="accent">High-Speed Internet</span>{' '}
            Solutions
          </h1>
          <p className="lede">
            We design, build and operate broadband and fiber networks
            that keep homes, businesses and communities connected —
            backed by professional installation and round-the-clock
            support.
          </p>
          <div className="hero-actions">
            <a href="#contact" className="btn btn-primary">
              Get New Connection
            </a>
            <a href="#contact" className="btn btn-ghost">
              Contact Us
            </a>
          </div>
          <div className="hero-stats">
            <div>
              <div className="num">1 Gbps</div>
              <div className="lbl">Max Fiber Speed</div>
            </div>
            <div>
              <div className="num">50k+</div>
              <div className="lbl">Connections Live</div>
            </div>
            <div>
              <div className="num">99.9%</div>
              <div className="lbl">Network Uptime</div>
            </div>
            <div>
              <div className="num">24/7</div>
              <div className="lbl">Customer Support</div>
            </div>
          </div>
        </div>
        <div className="hero-visual">
          <div className="signal-rings">
            <svg viewBox="0 0 440 440">
              <circle className="ring r1" cx="220" cy="220" r="60"/>
              <circle className="ring r2" cx="220" cy="220" r="60"/>
              <circle className="ring r3" cx="220" cy="220" r="60"/>
              <circle cx="220" cy="220" r="44" fill="#0c1e36" stroke="rgba(34,211,238,0.5)" strokeWidth="1.5"/>
              <path d="M196 230a34 34 0 0 1 48 0" fill="none" stroke="#22d3ee" strokeWidth="2.5" strokeLinecap="round"/>
              <path d="M205 220a21 21 0 0 1 30 0" fill="none" stroke="#5eead4" strokeWidth="2.5" strokeLinecap="round"/>
              <circle cx="220" cy="232" r="3.2" fill="#22d3ee"/>
              <line x1="60" y1="80" x2="220" y2="220" stroke="rgba(94,234,212,0.35)" strokeWidth="1.4" strokeDasharray="3 6"/>
              <line x1="380" y1="90" x2="220" y2="220" stroke="rgba(94,234,212,0.35)" strokeWidth="1.4" strokeDasharray="3 6"/>
              <line x1="70" y1="370" x2="220" y2="220" stroke="rgba(94,234,212,0.35)" strokeWidth="1.4" strokeDasharray="3 6"/>
              <line x1="370" y1="360" x2="220" y2="220" stroke="rgba(94,234,212,0.35)" strokeWidth="1.4" strokeDasharray="3 6"/>
              <circle cx="60" cy="80" r="5" fill="#0c1e36" stroke="#22d3ee" strokeWidth="1.5"/>
              <circle cx="380" cy="90" r="5" fill="#0c1e36" stroke="#22d3ee" strokeWidth="1.5"/>
              <circle cx="70" cy="370" r="5" fill="#0c1e36" stroke="#22d3ee" strokeWidth="1.5"/>
              <circle cx="370" cy="360" r="5" fill="#0c1e36" stroke="#22d3ee" strokeWidth="1.5"/>
            </svg>
          </div>
          <div className="node-card n1"><span className="big">10ms</span>LATENCY</div>
          <div className="node-card n2"><span className="big">FTTH</span>FIBER TO HOME</div>
        </div>
      </div>
    </section>
  );
}
