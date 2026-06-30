"use client";

import { useState, useEffect, useRef } from "react";
import { IconSignal } from "../lib/icons";
import { navItems } from "../lib/data";
import Tilt from "./Tilt";

function NavItem({ item, closeNav }: { item: typeof navItems[number]; closeNav: () => void }) {
  const [open, setOpen] = useState(false);
  const liRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    if (!item.children) return;
    const li = liRef.current;
    if (!li) return;
    const enter = () => { if (window.innerWidth > 640) setOpen(true); };
    const leave = () => { if (window.innerWidth > 640) setOpen(false); };
    li.addEventListener("mouseenter", enter);
    li.addEventListener("mouseleave", leave);
    return () => {
      li.removeEventListener("mouseenter", enter);
      li.removeEventListener("mouseleave", leave);
    };
  }, [item.children]);

  const toggle = (e: React.MouseEvent) => {
    if (!item.children) return;
    e.preventDefault();
    setOpen((o) => !o);
  };

  return (
    <li ref={liRef} className={item.children ? `nav-dd${open ? " is-open" : ""}` : ""}>
      <a
        href={item.href}
        onClick={item.children ? toggle : closeNav}
        className={item.children ? "nav-dd-parent" : ""}
      >
        {item.label}
        {item.children ? <span className="chevron">▶</span> : null}
      </a>
      {item.children ? (
        <ul className="nav-sub">
          {item.children.map((child) => (
            <li key={child.label}>
              <a href={child.href} onClick={closeNav}>{child.label}</a>
            </li>
          ))}
        </ul>
      ) : null}
    </li>
  );
}

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const close = () => { if (window.innerWidth > 640) setMenuOpen(false); };
    window.addEventListener("resize", close);
    return () => window.removeEventListener("resize", close);
  }, []);

  const toggle = () => setMenuOpen((o) => !o);
  const closeNav = () => { setMenuOpen(false); };

  return (
    <header>
      <div className="nav">
        <a href="#home" className="logo">
          <Tilt max={8} glare={false} className="inline-flex">
            <span className="logo-mark">
              <IconSignal size={19} />
            </span>
          </Tilt>
          NimbusLink
        </a>
        <nav
          className={`nav-links${menuOpen ? " is-open" : ""}`}
          id="primary-navigation"
        >
          <ul>
            {navItems.map((item) => (
              <NavItem key={item.label} item={item} closeNav={closeNav} />
            ))}
          </ul>
        </nav>
        <div className="nav-cta">
          <a href="#contact" className="btn btn-ghost">Contact Us</a>
          <a href="#contact" className="btn btn-primary">Get New Connection</a>
        </div>
        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={toggle}
        >
          ☰
        </button>
      </div>
    </header>
  );
}
