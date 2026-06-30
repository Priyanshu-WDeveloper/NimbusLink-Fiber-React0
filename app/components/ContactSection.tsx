"use client";

import { IconMail, IconMapPin, IconPhone } from "../lib/icons";
import ContactForm from "./ContactForm";
import Tilt from "./Tilt";

export default function ContactSection() {
  return (
    <section className="contact" id="contact">
      <div className="wrap contact-grid">
        <div className="reveal">
          <span className="eyebrow">Get In Touch</span>
          <h2 style={{ fontSize: "clamp(24px,3vw,32px)", margin: "14px 0 18px" }}>
            Let&apos;s get you connected
          </h2>
          <p style={{ color: "var(--text-soft)", fontSize: "15.5px", marginBottom: 32, maxWidth: 440 }}>
            Send us your details for a new connection, a service query, or general support — our team replies within one business day.
          </p>
          <div className="contact-info">
            <Tilt max={8} glare={false}><div className="ci-row">
              <div className="ci-ico"><IconPhone size={18} /></div>
              <div><h4>Phone</h4><p>+91 98765 43210</p></div>
            </div></Tilt>
            <Tilt max={8} glare={false}><div className="ci-row">
              <div className="ci-ico"><IconMail size={18} /></div>
              <div><h4>Email</h4><p>support@nimbuslink.net</p></div>
            </div></Tilt>
            <Tilt max={8} glare={false}><div className="ci-row">
              <div className="ci-ico"><IconMapPin size={18} /></div>
              <div><h4>Office</h4><p>4th Floor, Tech Tower, Ranjit Avenue, Amritsar, Punjab</p></div>
            </div></Tilt>
          </div>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}
