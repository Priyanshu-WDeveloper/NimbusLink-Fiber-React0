"use client";

import { useEffect, useRef } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import PulseDivider from "./components/PulseDivider";
import AboutSection from "./components/AboutSection";
import ServicesSection from "./components/ServicesSection";
import PlansSection from "./components/PlansSection";
import ProcessSection from "./components/ProcessSection";
import WhySection from "./components/WhySection";
import CoverageSection from "./components/CoverageSection";
import SupportSection from "./components/SupportSection";
import ContactSection from "./components/ContactSection";
import PolicySection from "./components/PolicySection";
import Footer from "./components/Footer";
import WhatsAppFloat from "./components/WhatsAppFloat";

export default function Home() {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    if (!("IntersectionObserver" in window)) {
      document.querySelectorAll(".reveal").forEach((el) => el.classList.add("in"));
      return;
    }

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            observerRef.current?.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    const items = document.querySelectorAll(".reveal:not(.in)");
    items.forEach((el) => observerRef.current?.observe(el));

    return () => observerRef.current?.disconnect();
  });

  return (
    <>
      <Header />
      <Hero />
      <PulseDivider />
      <AboutSection />
      <ServicesSection />
      <PlansSection />
      <ProcessSection />
      <WhySection />
      <CoverageSection />
      <SupportSection />
      <ContactSection />
      <PolicySection />
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
