"use client";

import { useState } from "react";
import ContactStrip from "@/components/sections/ContactStrip";
import EmbroideryTypes from "@/components/sections/EmbroideryTypes";

const services = [
  {
    roman: "I",
    title: "Custom Embroidered Labels",
    desc: "Woven and embroidered labels crafted to your exact specifications. Perfect for clothing brands, uniforms, and premium garments. We match thread colors precisely to your brand palette and can produce labels in any shape or size.",
    points: [
      "Any size, shape, or thread color",
      "Minimum order as low as 50 pieces",
      "Woven, embroidered, or damask finish",
    ],
  },
  {
    roman: "II",
    title: "Design Digitizing",
    desc: "Send us your logo or artwork — our digitizing team converts it into a professional embroidery file ready for any machine. The file is yours to keep and reuse for future orders, with no recurring fees.",
    points: [
      "48-hour turnaround on most files",
      "Compatible with all major embroidery machines",
      "Free revision if stitch quality isn't right",
    ],
  },
  {
    roman: "III",
    title: "Brand Patches & Badges",
    desc: "Iron-on and sew-on patches with vibrant, fade-resistant thread colors. Ideal for uniforms, caps, jackets, team merchandise, and promotional giveaways.",
    points: [
      "Iron-on, sew-on, or Velcro backing",
      "Bold color matching for logos",
      "Durable stitching that survives repeated washing",
    ],
  },
  {
    roman: "IV",
    title: "Bulk & Custom Orders",
    desc: "Flexible minimum order quantities with competitive per-unit pricing as volume increases. Whether it's 50 pieces or 5,000, we maintain consistent quality across the entire batch.",
    points: [
      "Volume-based pricing tiers",
      "Sample approval before full production",
      "Reliable delivery timelines for large orders",
    ],
  },
];

export default function ServicesPage() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  return (
    <>
      {/* Page Header */}
      <section
        className="px-6 md:px-10 lg:px-16"
        style={{ paddingTop: "5rem", paddingBottom: "3rem" }}
      >
        <div
          style={{
            fontFamily: "'Cinzel', serif",
            fontSize: "11px",
            letterSpacing: "0.3em",
            color: "var(--gold)",
            marginBottom: "1.25rem",
            display: "flex",
            alignItems: "center",
            gap: "0.75rem",
          }}
        >
          <span
            style={{
              display: "block",
              width: "24px",
              height: "0.5px",
              background: "var(--gold)",
            }}
          />
          What We Do
        </div>
        <h1
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(2.2rem, 6vw, 3.6rem)",
            fontWeight: 400,
            color: "var(--white)",
            maxWidth: "700px",
            lineHeight: 1.15,
          }}
        >
          Embroidery services built for brands that care about detail
        </h1>
      </section>

      {/* Services List */}
      <section
        className="px-6 md:px-10 lg:px-16"
        style={{ paddingBottom: "5rem" }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: "1px" }}>
          {services.map((service) => {
            const isHovered = hoveredCard === service.roman;
            return (
              <div
                key={service.roman}
                className="p-6 sm:p-8 md:p-10"
                onMouseEnter={() => setHoveredCard(service.roman)}
                onMouseLeave={() => setHoveredCard(null)}
                style={{
                  border: "0.5px solid rgba(201,168,76,0.15)",
                  background: isHovered ? "rgba(201,168,76,0.03)" : "transparent",
                  borderColor: isHovered
                    ? "rgba(201,168,76,0.4)"
                    : "rgba(201,168,76,0.15)",
                  transition: "border-color 0.3s, background 0.3s",
                }}
              >
                <div
                  style={{
                    fontFamily: "'Cinzel', serif",
                    fontSize: "0.9rem",
                    color: "rgba(201,168,76,0.35)",
                    letterSpacing: "0.2em",
                    marginBottom: "1rem",
                  }}
                >
                  {service.roman}
                </div>

                <h2
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "1.6rem",
                    fontWeight: 400,
                    color: "var(--white)",
                    marginBottom: "0.9rem",
                    lineHeight: 1.3,
                  }}
                >
                  {service.title}
                </h2>

                <p
                  style={{
                    fontSize: "13px",
                    color: "var(--muted)",
                    lineHeight: 1.9,
                    fontWeight: 300,
                    marginBottom: "1.5rem",
                  }}
                >
                  {service.desc}
                </p>

                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.6rem" }}>
                  {service.points.map((point) => (
                    <li
                      key={point}
                      style={{
                        fontSize: "12px",
                        color: "var(--muted)",
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "0.6rem",
                        letterSpacing: "0.02em",
                      }}
                    >
                      <span style={{ color: "var(--gold)" }}>—</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </section>

      <EmbroideryTypes />

      <ContactStrip />
    </>
  );
}