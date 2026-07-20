"use client";

import Image from "next/image";
import { useState } from "react";
import ContactStrip from "@/components/sections/ContactStrip";

const portfolioItems = [
    { src: "/images/Machine horse.jpeg", label: "Running Horse Embroidery" },
    { src: "/images/Machine sun palm.jpeg", label: "Embroidery in Progress" },
    { src: "/images/Summer-sweatshirt.jpeg", label: "Summer Sweatshirt" },
    { src: "/images/minnie-tee.jpeg", label: "Character Embroidery" },
    { src: "/images/t1.jpg.jpeg", label: "Tiger Patch Tee" },
    { src: "/images/t2.jpg.jpeg", label: "Custom Graphic Tee" },
    { src: "/images/floral-bunny.jpeg", label: "Floral Bunny Detail" },
    { src: "/images/Horse tees frontback.jpeg", label: "Front & Back Design" },
];

export default function PortfolioPage() {
    const [hoveredItem, setHoveredItem] = useState<string | null>(null);

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
                    Our Work
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
                    A closer look at the craft
                </h1>
            </section>

            {/* Gallery Grid */}
            <section
                className="px-6 md:px-10 lg:px-16"
                style={{ paddingBottom: "5rem" }}
            >
                <div
                    className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4"
                    style={{ gap: "2px" }}
                >

                    {portfolioItems.map((item) => {
                        const isHovered = hoveredItem === item.label;
                        return (
                            <div
                                key={item.label}
                                style={{
                                    aspectRatio: "1/1",
                                    position: "relative",
                                    overflow: "hidden",
                                    cursor: "pointer",
                                }}
                                onMouseEnter={() => setHoveredItem(item.label)}
                                onMouseLeave={() => setHoveredItem(null)}
                            >
                                <Image
                                    src={item.src}
                                    alt={item.label}
                                    fill
                                    style={{
                                        objectFit: "cover",
                                        filter: isHovered
                                            ? "brightness(0.95) saturate(1)"
                                            : "brightness(0.8) saturate(0.9)",
                                        transform: isHovered ? "scale(1.04)" : "scale(1)",
                                        transition: "transform 0.5s, filter 0.5s",
                                    }}
                                />
                                <div
                                    style={{
                                        position: "absolute",
                                        inset: 0,
                                        display: "flex",
                                        alignItems: "flex-end",
                                        padding: "1rem",
                                        background:
                                            "linear-gradient(to top, rgba(10,10,10,0.7) 0%, transparent 50%)",
                                        opacity: isHovered ? 1 : 0,
                                        transition: "opacity 0.3s",
                                    }}
                                >
                                    <span
                                        style={{
                                            fontFamily: "'Cinzel', serif",
                                            fontSize: "10px",
                                            letterSpacing: "0.15em",
                                            color: "var(--gold)",
                                        }}
                                    >
                                        {item.label}
                                    </span>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </section>

            <ContactStrip />
        </>
    );
}