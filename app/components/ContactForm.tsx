"use client";

import { useState, useEffect, useRef } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState("");
  const [visible, setVisible] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    const name = (form.querySelector("#cname") as HTMLInputElement).value.trim().split(/\s+/)[0] || "there";
    setStatus(`Thanks, ${name}. Your request has been captured and our team will contact you within one business day.`);
    setVisible(true);
    form.reset();
  };

  return (
    <form className="cform reveal" ref={formRef} onSubmit={handleSubmit}>
      <div className="row2">
        <div>
          <label htmlFor="cname">Name</label>
          <input id="cname" type="text" placeholder="Your full name" required />
        </div>
        <div>
          <label htmlFor="cmobile">Mobile Number</label>
          <input id="cmobile" type="tel" placeholder="10-digit mobile number" required />
        </div>
      </div>
      <div className="row2">
        <div>
          <label htmlFor="cservice">Service Interest</label>
          <select id="cservice" required>
            <option value="">Select a service</option>
            <option>New home connection</option>
            <option>Business internet</option>
            <option>Fiber installation</option>
            <option>Technical support</option>
          </select>
        </div>
        <div>
          <label htmlFor="carea">Area / PIN Code</label>
          <input id="carea" type="text" placeholder="Your location" required />
        </div>
      </div>
      <div>
        <label htmlFor="cemail">Email</label>
        <input id="cemail" type="email" placeholder="you@example.com" required />
      </div>
      <div>
        <label htmlFor="cmessage">Message</label>
        <textarea id="cmessage" placeholder="Tell us about your connection needs" required />
      </div>
      <div className={`form-status${visible ? " is-visible" : ""}`} aria-live="polite">{status}</div>
      <button type="submit" className="btn btn-primary" style={{ marginTop: 6 }}>Submit Request</button>
    </form>
  );
}
