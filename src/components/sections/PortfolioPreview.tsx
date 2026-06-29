"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const portfolioItems = [
    { src: "/images/portfolio-1.jpg", label: "Brand Label", large: true },
    { src: "/images/portfolio-2.jpg", label: "Custom Patch", large: false },
    { src: "/images/portfolio-3.jpg", label: "Detail Work", large: false },
    { src: "/images/portfolio-4.jpg", label: "Woven Label", large: false },
];

export default function PortfolioPreview() {

    const [hoveredLink, setHoveredLink] = useState<string | null>(null);
    
    return (
        <section style={{ padding: "5rem 4rem" }}>

            {/* Header */}
            <div
                style={{
                    display: "flex",
                    alignItems: "flex-end",
                    justifyContent: "space-between",
                    marginBottom: "2.5rem",
                }}
            >
                <h2
                    style={{
                        fontFamily: "'Playfair Display', serif",
                        fontSize: "2.6rem",
                        fontWeight: 400,
                        color: "var(--white)",
                    }}
                >
                    Selected Work
                </h2>
                <Link
                    href="/portfolio"
                    onMouseEnter={() => setHoveredLink("portfolio")}
                    onMouseLeave={() => setHoveredLink(null)}
                    style={{
                        fontFamily: "'Cinzel', serif",
                        fontSize: "10px",
                        letterSpacing: "0.15em",
                        color: "var(--gold)",
                        textDecoration: "none",
                    }}
                >
                    View All
                    <span
                        style={{
                            display: "inline-block",
                            marginLeft: "0.5rem",
                            transform: hoveredLink === "portfolio" ? "translateX(6px)" : "translateX(0)",
                            transition: "transform 0.3s ease",
                        }}
                    >→</span>
                </Link>
            </div>

            {/* Grid */}
            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(3, 1fr)",
                    gap: "2px",
                }}
            >
                {portfolioItems.map((item) => (
                    <div
                        key={item.label}
                        style={{
                            gridColumn: item.large ? "span 2" : "span 1",
                            aspectRatio: item.large ? "2/1" : "1/1",
                            position: "relative",
                            overflow: "hidden",
                            cursor: "pointer",
                        }}
                        onMouseEnter={(e) => {
                            const overlay = e.currentTarget.querySelector(
                                ".overlay"
                            ) as HTMLElement;
                            const img = e.currentTarget.querySelector(
                                "img"
                            ) as HTMLElement;
                            if (overlay) overlay.style.opacity = "1";
                            if (img) {
                                img.style.transform = "scale(1.04)";
                                img.style.filter = "brightness(0.95) saturate(1)";
                            }
                        }}
                        onMouseLeave={(e) => {
                            const overlay = e.currentTarget.querySelector(
                                ".overlay"
                            ) as HTMLElement;
                            const img = e.currentTarget.querySelector(
                                "img"
                            ) as HTMLElement;
                            if (overlay) overlay.style.opacity = "0";
                            if (img) {
                                img.style.transform = "scale(1)";
                                img.style.filter = "brightness(0.8) saturate(0.9)";
                            }
                        }}
                    >
                        <Image
                            src={item.src}
                            alt={item.label}
                            fill
                            style={{
                                objectFit: "cover",
                                filter: "brightness(0.8) saturate(0.9)",
                                transition: "transform 0.5s, filter 0.5s",
                            }}
                        />
                        <div
                            className="overlay"
                            style={{
                                position: "absolute",
                                inset: 0,
                                display: "flex",
                                alignItems: "flex-end",
                                padding: "1rem",
                                background:
                                    "linear-gradient(to top, rgba(10,10,10,0.7) 0%, transparent 50%)",
                                opacity: 0,
                                transition: "opacity 0.3s",
                            }}
                        >
                            <span
                                style={{
                                    fontFamily: "'Cinzel', serif",
                                    fontSize: "9px",
                                    letterSpacing: "0.2em",
                                    color: "var(--gold)",
                                }}
                            >
                                {item.label}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}