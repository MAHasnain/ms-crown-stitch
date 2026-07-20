"use client";

import { useState } from "react";

export default function HeroSection() {
    const [hoveredLink, setHoveredLink] = useState<string | null>(null);
    const [ctaHovered, setCtaHovered] = useState(false);
    return (
         <section
            className="min-h-[70vh] sm:min-h-[80vh] md:min-h-[90vh]"
            style={{
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
                className="w-full h-full"
                style={{
                    position: "absolute",
                    inset: 0,
                    objectFit: "cover",
                    zIndex: 0,
                    filter: "brightness(0.35)",
                }}
            >
                <source src="https://res.cloudinary.com/dkqip1ihc/video/upload/v1782729283/Untitled_design_yl5u0t.mp4" type="video/mp4" />
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
                className="px-6 md:px-10 lg:px-16"
                style={{
                    position: "relative",
                    zIndex: 2,
                    maxWidth: "680px",
                }}
            >
                <div
                    style={{
                        fontFamily: "'Cinzel', serif",
                        fontSize: "clamp(11px, 2.5vw, 14px)",
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
                        fontSize: "clamp(2.4rem, 8vw, 5rem)",
                        fontWeight: 400,
                        lineHeight: 1.05,
                        letterSpacing: "0.01em",
                        marginBottom: "1.5rem",
                    }}
                >
                    Custom embroidery,
                    <br />
                    <em style={{ fontStyle: "italic", color: "var(--gold)" }}>
                        made and manufactured
                    </em>
                    <br />
                    right
                </h1>

                {/* Subtitle */}
                <p
                    style={{
                        fontSize: "13px",
                        color: "var(--muted)",
                        lineHeight: 1.9,
                        maxWidth: "460px",
                        marginBottom: "2.5rem",
                        fontWeight: 300,
                        letterSpacing: "0.02em",
                    }}
                >
                    From a single logo to thousands of finished pieces — we design,
                    digitize, and produce every order in-house, so you&apos;re never
                    juggling multiple vendors.
                </p>

                {/* CTAs */}
                <div className="flex flex-wrap items-center" style={{ gap: "1.5rem" }}>

                    <a
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
                            whiteSpace: "nowrap",
                        }}
                    >
                        Get a Quote
                    </a>
                    <a
                        href="/portfolio"
                        onMouseEnter={() => setHoveredLink("portfolio")}
                        onMouseLeave={() => setHoveredLink(null)}
                        style={{
                            fontFamily: "'Cinzel', serif",
                            fontSize: "13px",
                            letterSpacing: "0.15em",
                            color: hoveredLink === "portfolio" ? "var(--gold)" : "var(--white)",
                            transition: "color 0.3s",
                            textDecoration: "none",
                            display: "flex",
                            alignItems: "center",
                            gap: "0.5rem",
                            whiteSpace: "nowrap",
                        }}
                    >
                        See Our Work
                        <span style={{
                            display: "inline-block",
                            marginLeft: "0.5rem",
                            transform: hoveredLink === "portfolio" ? "translateX(6px)" : "translateX(0)",
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