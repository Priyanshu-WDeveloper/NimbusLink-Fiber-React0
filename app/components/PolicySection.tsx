export default function PolicySection() {
  return (
    <section className="policy" id="policy">
      <div className="wrap policy-grid">
        <div className="policy-card reveal">
          <h3>Privacy Policy</h3>
          <p>Customer information collected through this website is used only for providing internet services, support and communication. We handle customer data securely and never share it with unauthorized parties.</p>
          <p>Information may include name, contact details and address, used solely to process connection requests, deliver support and send service-related updates.</p>
        </div>
        <div className="policy-card reveal" id="terms">
          <h3>Terms &amp; Conditions</h3>
          <ul>
            <li>Internet availability depends on network coverage in your area.</li>
            <li>Installation charges and plans may vary by location and package.</li>
            <li>Customers must provide accurate and correct details when applying.</li>
            <li>Services must be used in accordance with our applicable usage rules.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
