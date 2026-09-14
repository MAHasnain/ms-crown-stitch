"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { label: "Services", href: "/services" },
  { label: "Our Designs", href: "/our designs" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const [ctaHovered, setCtaHovered] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav
      className="flex items-center justify-between px-6 py-5 md:px-10 lg:px-16"
      style={{
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
        onClick={() => setMenuOpen(false)}
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
        <Image src="/images/ms-cs-gold-logo.png" alt="MS Crown Stitch Logo" width={140} height={50} />
      </Link>

      {/* Desktop Nav Links */}
      <ul className="hidden md:flex" style={{ gap: "2.5rem", listStyle: "none" }}>
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

      {/* Desktop CTA */}
      <Link
        href="/contact"
        onMouseEnter={() => setCtaHovered(true)}
        onMouseLeave={() => setCtaHovered(false)}
        className="hidden md:inline-block"
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

      {/* Mobile Hamburger Button */}
      <button
        aria-label="Toggle menu"
        onClick={() => setMenuOpen((v) => !v)}
        className="md:hidden flex flex-col justify-center items-center gap-1.5 p-2"
        style={{ background: "transparent", border: "none", cursor: "pointer" }}
      >
        <span
          style={{
            display: "block",
            width: "22px",
            height: "1px",
            background: "var(--gold)",
            transition: "transform 0.3s ease",
            transform: menuOpen ? "rotate(45deg) translate(4px, 4px)" : "none",
          }}
        />
        <span
          style={{
            display: "block",
            width: "22px",
            height: "1px",
            background: "var(--gold)",
            opacity: menuOpen ? 0 : 1,
            transition: "opacity 0.2s ease",
          }}
        />
        <span
          style={{
            display: "block",
            width: "22px",
            height: "1px",
            background: "var(--gold)",
            transition: "transform 0.3s ease",
            transform: menuOpen ? "rotate(-45deg) translate(4px, -4px)" : "none",
          }}
        />
      </button>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div
          className="md:hidden flex flex-col"
          style={{
            position: "absolute",
            top: "100%",
            left: 0,
            right: 0,
            background: "rgba(10,10,10,0.98)",
            borderBottom: "0.5px solid rgba(201,168,76,0.2)",
            padding: "1.5rem 1.5rem 2rem",
            gap: "1.5rem",
          }}
        >
          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              style={{
                fontFamily: "'Cinzel', serif",
                fontSize: "13px",
                letterSpacing: "0.18em",
                color: "var(--muted)",
                textDecoration: "none",
              }}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            style={{
              fontFamily: "'Cinzel', serif",
              fontSize: "12px",
              letterSpacing: "0.15em",
              color: "var(--black)",
              background: "var(--gold)",
              border: "0.5px solid var(--gold)",
              padding: "0.75rem 1.5rem",
              textDecoration: "none",
              textAlign: "center",
              marginTop: "0.5rem",
            }}
          >
            Get a Quote
          </Link>
        </div>
      )}
    </nav>
  );
}