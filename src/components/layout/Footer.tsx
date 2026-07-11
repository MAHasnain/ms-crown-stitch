"use client";

import Link from "next/link";
import { useState } from "react";

export default function Footer() {
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);


  const currentYear = new Date().getFullYear();
  return (
    <footer
      className="flex flex-col md:flex-row md:items-center md:justify-between px-6 md:px-10 lg:px-16"
      style={{
        padding: "2.5rem 1.5rem",
        borderTop: "0.5px solid rgba(201,168,76,0.15)",
        gap: "1.5rem",
        marginTop: "3rem",
        textAlign: "center",
      }}
    >
      {/* Logo */}
      <span
        style={{
          fontFamily: "'Cinzel', serif",
          fontSize: "0.9rem",
          fontWeight: 500,
          letterSpacing: "0.2em",
          color: "var(--gold)",
        }}
      >
        MS Crown Stitch
      </span>

      {/* Footer Links */}
      <ul className="flex flex-wrap justify-center" style={{ gap: "2rem", listStyle: "none" }}>
        {[
          { label: "Services", href: "/services" },
          { label: "Portfolio", href: "/portfolio" },
          { label: "Contact", href: "/contact" },
        ].map((item) => (
          <li key={item.href}>
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
              }}
            >
              {item.label}
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

      {/* Copyright */}
      <span
        style={{
          fontFamily: "'Cinzel', serif",
          fontSize: "12px",
          color: "var(--muted)",
          letterSpacing: "0.1em",
        }}
      >
        © {currentYear} MS Crown Stitch · All rights reserved
      </span>


    </footer>
  );
}