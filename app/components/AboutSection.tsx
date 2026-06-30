import { IconHome, IconFiber, IconSupport, IconMapPin } from "../lib/icons";
import Tilt from "./Tilt";

export default function AboutSection() {
  return (
    <section className="about" id="about">
      <div className="wrap about-grid">
        <Tilt max={10} className="reveal about-art" glare={false}>
          <svg viewBox="0 0 400 500">
            <defs>
              <linearGradient id="g1" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0" stopColor="#22d3ee" stopOpacity="0.5" />
                <stop offset="1" stopColor="#3b82f6" stopOpacity="0.15" />
              </linearGradient>
            </defs>
            <rect width="400" height="500" fill="none" />
            <g stroke="url(#g1)" strokeWidth="1.4" fill="none">
              <path d="M-20 380 C 80 320, 140 420, 220 360 S 360 280, 440 320" />
              <path d="M-20 300 C 90 260, 150 340, 230 280 S 370 220, 440 250" />
              <path d="M-20 220 C 100 190, 160 260, 240 200 S 380 160, 440 190" />
            </g>
            <g>
              <circle cx="220" cy="360" r="5" fill="#22d3ee" />
              <circle cx="230" cy="280" r="4" fill="#5eead4" />
              <circle cx="240" cy="200" r="4" fill="#5eead4" />
            </g>
            <g transform="translate(80,90)" stroke="rgba(255,255,255,0.7)" strokeWidth="1.4" fill="none">
              <rect x="0" y="0" width="100" height="64" rx="6" />
              <line x1="14" y1="16" x2="86" y2="16" />
              <line x1="14" y1="28" x2="86" y2="28" />
              <line x1="14" y1="40" x2="60" y2="40" />
              <circle cx="86" cy="40" r="3" fill="#22d3ee" stroke="none" />
            </g>
            <text x="80" y="430" fill="rgba(255,255,255,0.55)" fontFamily="JetBrains Mono, monospace" fontSize="11" letterSpacing="2">NETWORK / CORE</text>
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
            <div className="point">
              <div className="point-ico"><IconHome size={20} stroke="#3b82f6" /></div>
              <div><h4>Reliable Connectivity</h4><p>Carrier-grade infrastructure engineered for consistent uptime, day and night.</p></div>
            </div>
            <div className="point">
              <div className="point-ico"><IconFiber size={20} stroke="#3b82f6" /></div>
              <div><h4>Fiber Network Solutions</h4><p>End-to-end fiber-optic infrastructure built for high bandwidth and low latency.</p></div>
            </div>
            <div className="point">
              <div className="point-ico"><IconSupport size={20} stroke="#3b82f6" /></div>
              <div><h4>Quality Customer Support</h4><p>A dedicated support team for installation, troubleshooting and account queries.</p></div>
            </div>
            <div className="point">
              <div className="point-ico"><IconMapPin size={20} stroke="#3b82f6" /></div>
              <div><h4>Connecting Communities</h4><p>From single homes to enterprise offices, advanced technology that scales with you.</p></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
