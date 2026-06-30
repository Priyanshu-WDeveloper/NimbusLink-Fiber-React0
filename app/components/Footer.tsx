import { IconSignal, IconFacebook, IconX, IconInstagram, IconLinkedin } from "../lib/icons";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer>
      <div className="wrap">
        <div className="footer-grid">
          <div className="footer-brand">
            <a href="#home" className="logo">
              <span className="logo-mark">
                <IconSignal size={19} />
              </span>
              NimbusLink
            </a>
            <p>Telecom infrastructure and fiber internet provider connecting homes, businesses and communities.</p>
            <div className="social-row">
              <a href="#" aria-label="Facebook"><IconFacebook size={15} /></a>
              <a href="#" aria-label="Twitter / X"><IconX size={15} /></a>
              <a href="#" aria-label="Instagram"><IconInstagram size={15} /></a>
              <a href="#" aria-label="LinkedIn"><IconLinkedin size={15} /></a>
            </div>
          </div>
          <div className="footer-col">
            <h5>Quick Links</h5>
            <a href="#about">About Us</a>
            <a href="#services">Our Services</a>
            <a href="#plans">Plans</a>
            <a href="#process">Installation Process</a>
            <a href="#coverage">Coverage</a>
          </div>
          <div className="footer-col">
            <h5>Support</h5>
            <a href="#support">Customer Support</a>
            <a href="#contact">Contact Us</a>
            <a href="#policy">Privacy Policy</a>
            <a href="#terms">Terms &amp; Conditions</a>
          </div>
          <div className="footer-col">
            <h5>Contact</h5>
            <a href="tel:+919876543210">+91 98765 43210</a>
            <a href="mailto:support@nimbuslink.net">support@nimbuslink.net</a>
            <a href="#">Ranjit Avenue, Amritsar, Punjab</a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>&copy; {year} NimbusLink Telecom Pvt. Ltd. All rights reserved.</span>
          <span>Designed for reliable connectivity.</span>
        </div>
      </div>
    </footer>
  );
}
