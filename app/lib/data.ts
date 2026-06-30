export interface Service {
  icon: string;
  num: string;
  title: string;
  desc: string;
}

export interface Plan {
  type: "home" | "business";
  label: string;
  speed: string;
  price: string;
  popular: boolean;
  features: string[];
}

export interface ProcessStep {
  n: string;
  title: string;
  desc: string;
}

export interface WhyItem {
  icon: string;
  title: string;
  desc: string;
}

export interface SupportItem {
  icon: string;
  title: string;
  desc: string;
}

export interface CoverageArea {
  name: string;
  pin: string;
  eta: string;
  aliases: string[];
}

export interface FaqItem {
  q: string;
  a: string;
}

export const services: Service[] = [
  { icon: "home", num: "01", title: "Home Internet Connection", desc: "High-speed internet for homes built for online learning, work from home, streaming and everyday browsing without buffering." },
  { icon: "fiber", num: "02", title: "Fiber Broadband Services", desc: "Fast and stable fiber-optic internet connections powered by advanced fiber technology for symmetrical upload and download speeds." },
  { icon: "building", num: "03", title: "Business Internet Solutions", desc: "Dependable, high-capacity internet for offices, shops and enterprises built around uptime and dedicated bandwidth." },
  { icon: "gear", num: "04", title: "Network Installation", desc: "Complete installation service covering fiber cable setup, router installation and full network configuration." },
];

export const plans: Plan[] = [
  { type: "home", label: "Starter", speed: "100 Mbps", price: "Best for everyday browsing", popular: false, features: ["Unlimited data", "Free router setup", "Streaming-ready latency"] },
  { type: "home", label: "Family Fiber", speed: "300 Mbps", price: "Best for homes with multiple devices", popular: true, features: ["Priority installation", "Dual-band Wi-Fi router", "Online gaming and 4K streaming"] },
  { type: "home", label: "Ultra", speed: "1 Gbps", price: "Best for power users", popular: false, features: ["Gigabit fiber speed", "Mesh-ready setup", "Premium support queue"] },
  { type: "business", label: "Office Essential", speed: "200 Mbps", price: "For small offices and shops", popular: false, features: ["Static IP option", "Business-hour support", "Router configuration"] },
  { type: "business", label: "Dedicated Pro", speed: "500 Mbps", price: "For teams and cloud workflows", popular: true, features: ["Dedicated bandwidth", "SLA-ready monitoring", "Priority fault resolution"] },
  { type: "business", label: "Enterprise Fiber", speed: "Custom", price: "For multi-floor and campus networks", popular: false, features: ["Site survey included", "Managed last-mile setup", "Custom redundancy options"] },
];

export const processSteps: ProcessStep[] = [
  { n: "01", title: "Contact Us", desc: "Customer contacts NimbusLink to request a new internet connection." },
  { n: "02", title: "Availability Check", desc: "Our technical team checks fiber and network availability at your location." },
  { n: "03", title: "Installation", desc: "Fiber cable and equipment installation carried out by our trained technicians." },
  { n: "04", title: "Activation & Support", desc: "Internet activation followed by onboarding and ongoing customer support." },
];

export const why: WhyItem[] = [
  { icon: "bolt", title: "High Speed Internet", desc: "Fiber-backed speeds that hold steady across streaming, gaming and remote work." },
  { icon: "fiber", title: "Reliable Network Infrastructure", desc: "Built and maintained end-to-end, so uptime stays consistent across the network." },
  { icon: "team", title: "Professional Installation Team", desc: "Trained technicians handle cabling, routing and configuration the right way." },
  { icon: "support", title: "Fast Customer Support", desc: "Reach a real person quickly for complaints, queries or technical assistance." },
  { icon: "clock", title: "Affordable Internet Plans", desc: "Plans for homes, shops and enterprises designed around real usage needs." },
  { icon: "shield", title: "Secure Connectivity", desc: "Network-level safeguards that keep your connection private and protected." },
];

export const support: SupportItem[] = [
  { icon: "alert", title: "Complaint Support", desc: "Report service issues and get them tracked through to resolution." },
  { icon: "home", title: "New Connection Support", desc: "Guidance on plans, availability and the installation timeline." },
  { icon: "gear", title: "Technical Assistance", desc: "Help with router setup, connectivity drops and speed troubleshooting." },
  { icon: "phone", title: "Contact Information", desc: "Reach our team directly by phone, email or the form below." },
];

export const coverageTags = ["Residential Areas", "Commercial Hubs", "Office Parks", "New Developments"];

export const coverageAreas: CoverageArea[] = [
  { name: "Ranjit Avenue", pin: "143001", eta: "same-day feasibility check", aliases: ["ranjit avenue", "amritsar"] },
  { name: "Model Town", pin: "143001", eta: "24-hour feasibility check", aliases: ["model town"] },
  { name: "Civil Lines", pin: "143001", eta: "same-day feasibility check", aliases: ["civil lines"] },
  { name: "Airport Road", pin: "143101", eta: "48-hour feasibility check", aliases: ["airport road"] },
];

export interface NavItem {
  href: string;
  label: string;
  children?: { href: string; label: string }[];
}

export const navItems: NavItem[] = [
  { href: "#about", label: "About" },
  {
    href: "#services", label: "Services", children: [
      { href: "#plans", label: "Plans" },
      { href: "#process", label: "Installation" },
      { href: "#coverage", label: "Coverage" },
    ],
  },
  {
    href: "#support", label: "Support", children: [
      { href: "#contact", label: "Contact" },
    ],
  },
];

export const faqs: FaqItem[] = [
  { q: "How quickly can a new connection be installed?", a: "Most covered areas can be surveyed within one business day. Installation timing depends on fiber availability and building access." },
  { q: "Can I request business-grade bandwidth?", a: "Yes. Business plans can include dedicated bandwidth, static IP options and priority support depending on location." },
  { q: "What should I do during an outage?", a: "Use the support form or call the team with your registered mobile number so the complaint can be tracked against your account." },
];
