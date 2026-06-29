"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const [ctaHovered, setCtaHovered] = useState(false);

  return (
    <nav
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "1.5rem 4rem",
        borderBottom: "0.5px solid rgba(201,168,76,0.2)",
        position: "sticky",
        top: 0,
        background: "rgba(10,10,10,0.95)",
        backdropFilter: "blur(8px)",
        zIndex: 100,
      }}
    >
      {/* Logo */}
      <Link
        href="/"
        style={{
          fontFamily: "'Cinzel', serif",
          fontSize: "1.1rem",
          fontWeight: 500,
          letterSpacing: "0.18em",
          color: "var(--gold)",
          textDecoration: "none",
          transition: "opacity 0.3s",
        }}
      >
        MS Crown Stitch
      </Link>

      {/* Nav Links */}
      <ul style={{ display: "flex", gap: "2.5rem", listStyle: "none" }}>
        {navLinks.map((item) => (
          <li key={item.href} style={{ position: "relative" }}>
            <Link
              href={item.href}
              onMouseEnter={() => setHoveredLink(item.href)}
              onMouseLeave={() => setHoveredLink(null)}
              style={{
                fontFamily: "'Cinzel', serif",
                fontSize: "12px",
                letterSpacing: "0.18em",
                color: hoveredLink === item.href ? "var(--gold)" : "var(--muted)",
                textDecoration: "none",
                transition: "color 0.3s",
                paddingBottom: "4px",
                display: "inline-block",
              }}
            >
              {item.label}
              {/* Underline slide-in effect */}
              <span
                style={{
                  display: "block",
                  height: "0.5px",
                  background: "var(--gold)",
                  marginTop: "3px",
                  transform: hoveredLink === item.href ? "scaleX(1)" : "scaleX(0)",
                  transformOrigin: "left",
                  transition: "transform 0.3s ease",
                }}
              />
            </Link>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <Link
        href="/contact"
        onMouseEnter={() => setCtaHovered(true)}
        onMouseLeave={() => setCtaHovered(false)}
        style={{
          fontFamily: "'Cinzel', serif",
          fontSize: "12px",
          letterSpacing: "0.15em",
          color: ctaHovered ? "var(--gold)" : "var(--black)",
          background: ctaHovered ? "transparent" : "var(--gold)",
          border: "0.5px solid var(--gold)",
          padding: "0.65rem 1.5rem",
          textDecoration: "none",
          transition: "all 0.35s ease",
        }}
      >
        Get a Quote
      </Link>
    </nav>
  );
}