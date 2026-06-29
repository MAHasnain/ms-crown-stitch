"use client";

import { useState } from "react";

export default function HeroSection() {
    const [hoveredLink, setHoveredLink] = useState<string | null>(null);
    const [ctaHovered, setCtaHovered] = useState(false);
    return (
        <section
            style={{
                minHeight: "90vh",
                position: "relative",
                display: "flex",
                alignItems: "center",
                overflow: "hidden",
            }}
        >
            {/* Full-bleed Background Video */}
            <video
                autoPlay
                muted
                loop
                playsInline
                style={{
                    position: "absolute",
                    inset: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    zIndex: 0,
                    filter: "brightness(0.35)",
                }}
            >
                <source src="https://player.cloudinary.com/embed/?cloud_name=dkqip1ihc&public_id=Untitled_design_yl5u0t" type="video/mp4" />
            </video>

            <div
                style={{
                    position: "absolute",
                    inset: 0,
                    background:
                        "linear-gradient(to right, rgba(10,10,10,0.85) 40%, rgba(10,10,10,0.2) 100%)",
                    zIndex: 1,
                }}
            />

            <div
                style={{
                    position: "relative",
                    zIndex: 2,
                    padding: "0 4rem",
                    maxWidth: "680px",
                }}
            >
                <div
                    style={{
                        fontFamily: "'Cinzel', serif",
                        fontSize: "14px",
                        letterSpacing: "0.3em",
                        color: "var(--gold)",
                        marginBottom: "1.5rem",
                        display: "flex",
                        alignItems: "center",
                        gap: "0.75rem",
                    }}
                >
                    <span
                        style={{
                            display: "block",
                            width: "32px",
                            height: "0.5px",
                            background: "var(--gold)",
                        }}
                    />
                    Custom Embroidery & Digitizing
                </div>

                {/* Headline */}
                <h1
                    style={{
                        fontFamily: "'Playfair Display', serif",
                        fontSize: "5.5rem",
                        fontWeight: 400,
                        lineHeight: 1.05,
                        letterSpacing: "0.01em",
                        marginBottom: "1.5rem",
                    }}
                >
                    Crafted with
                    <br />
                    <em style={{ fontStyle: "italic", color: "var(--gold)" }}>
                        precision,
                    </em>
                    <br />
                    stitched to last
                </h1>

                {/* Subtitle */}
                <p
                    style={{
                        fontSize: "13px",
                        color: "var(--muted)",
                        lineHeight: 1.9,
                        maxWidth: "420px",
                        marginBottom: "2.5rem",
                        fontWeight: 300,
                        letterSpacing: "0.02em",
                    }}
                >
                    Premium embroidered labels and custom digitizing for brands that
                    demand quality. Every stitch a statement.
                </p>

                {/* CTAs */}
                <div style={{ display: "flex", alignItems: "center", gap: "2rem" }}>

                    <a
                        href="/portfolio"
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
                        View Our Work
                    </a>
                    <a
                        href="/services"
                        onMouseEnter={() => setHoveredLink("services")}
                        onMouseLeave={() => setHoveredLink(null)}
                        style={{
                            fontFamily: "'Cinzel', serif",
                            fontSize: "13px",
                            letterSpacing: "0.15em",
                            color: hoveredLink === "services" ? "var(--gold)" : "var(--white)" ,
                            transition: "color 0.3s",
                            textDecoration: "none",
                            display: "flex",
                            alignItems: "center",
                            gap: "0.5rem",
                        }}
                    >
                        Our Services
                        <span style={{
                            display: "inline-block",
                            marginLeft: "0.5rem",
                            transform: hoveredLink === "services" ? "translateX(6px)" : "translateX(0)",
                            transition: "transform 0.3s ease",
                        }}>
                            →
                        </span>
                    </a>
                </div>
            </div>

            {/* Bottom fade */}
            <div
                style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: "120px",
                    background: "linear-gradient(to top, var(--black), transparent)",
                    zIndex: 2,
                }}
            />
        </section>
    );
}