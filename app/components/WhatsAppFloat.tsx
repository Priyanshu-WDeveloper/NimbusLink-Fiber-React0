import { IconWhatsApp } from "../lib/icons";

export default function WhatsAppFloat() {
  return (
    <a
      className="wa-float"
      href="https://wa.me/919876543210"
      target="_blank"
      rel="noopener"
      aria-label="Chat on WhatsApp"
    >
      <IconWhatsApp />
    </a>
  );
}
