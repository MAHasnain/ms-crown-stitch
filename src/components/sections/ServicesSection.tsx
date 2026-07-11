"use client";

import { useState } from "react";

const services = [
    {
        roman: "I",
        title: "Custom Embroidered Labels",
        desc: "Woven and embroidered labels crafted to your exact specifications. Perfect for clothing brands, uniforms, and premium garments.",
    },
    {
        roman: "II",
        title: "Design Digitizing",
        desc: "Send us your logo or artwork — we convert it into a professional embroidery digitizing file ready for any machine. You keep the file forever.",
    },
    {
        roman: "III",
        title: "Brand Patches & Badges",
        desc: "Iron-on and sew-on patches with vibrant thread colors. Ideal for uniforms, caps, jackets, and branded merchandise.",
    },
    {
        roman: "IV",
        title: "Bulk & Custom Orders",
        desc: "Flexible minimum order quantities with competitive pricing for bulk. Consistent quality at every scale.",
    },
];

export default function ServicesSection() {
    const [hoveredCard, setHoveredCard] = useState<string | null>(null);

    return (
        <section className="px-6 md:px-10 lg:px-16" style={{ paddingTop: "5rem", paddingBottom: "5rem" }}>

            {/* Thread Divider */}
            <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "4rem" }}>
                <div className="thread-line" />
                <div className="thread-diamond" />
                <div className="thread-line" />
            </div>

            {/* Section Label */}
            <div style={{
                fontFamily: "'Cinzel', serif",
                fontSize: "11px",
                letterSpacing: "0.3em",
                color: "var(--gold)",
                marginBottom: "3rem",
                display: "flex",
                alignItems: "center",
                gap: "0.75rem",
            }}>
                <span style={{ display: "block", width: "24px", height: "0.5px", background: "var(--gold)" }} />
                What We Do
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2">
                {services.map((service) => {
                    const isHovered = hoveredCard === service.roman;
                    return (
                        <div
                            key={service.roman}
                            onMouseEnter={() => setHoveredCard(service.roman)}
                            onMouseLeave={() => setHoveredCard(null)}
                            style={{
                                padding: "2rem",
                                border: "0.5px solid rgba(201,168,76,0.15)",
                                background: isHovered ? "rgba(201,168,76,0.03)" : "transparent",
                                borderColor: isHovered ? "rgba(201,168,76,0.4)" : "rgba(201,168,76,0.15)",
                                transition: "border-color 0.3s, background 0.3s",
                                cursor: "default",
                            }}
                        >
                            <div style={{
                                fontFamily: "'Cinzel', serif",
                                fontSize: "0.85rem",
                                color: "rgba(201,168,76,0.35)",
                                letterSpacing: "0.2em",
                                marginBottom: "1rem",
                            }}>
                                {service.roman}
                            </div>

                            <h3 style={{
                                fontFamily: "'Playfair Display', serif",
                                fontSize: "1.35rem",
                                fontWeight: 400,
                                color: "var(--white)",
                                marginBottom: "0.75rem",
                                lineHeight: 1.3,
                            }}>
                                {service.title}
                            </h3>

                            <p style={{
                                fontSize: "13px",
                                color: "var(--muted)",
                                lineHeight: 1.85,
                                fontWeight: 300,
                            }}>
                                {service.desc}
                            </p>

                            <a
                                href="/services"
                                style={{
                                    fontFamily: "'Cinzel', serif",
                                    display: "inline-flex",
                                    alignItems: "center",
                                    marginTop: "1.25rem",
                                    fontSize: "11px",
                                    letterSpacing: "0.2em",
                                    color: "var(--gold)",
                                    textDecoration: "none",
                                    opacity: isHovered ? 1 : 0.6,
                                    transition: "opacity 0.3s ease",
                                }}
                            >
                                Learn more
                                <span style={{
                                    display: "inline-block",
                                    marginLeft: "0.5rem",
                                    transform: isHovered ? "translateX(6px)" : "translateX(0)",
                                    transition: "transform 0.3s ease",
                                }}>
                                    →
                                </span>
                            </a>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}