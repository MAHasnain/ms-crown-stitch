"use client";

import Image from "next/image";
import { useState } from "react";
import ContactStrip from "@/components/sections/ContactStrip";

const portfolioItems = [
    { src: "https://res.cloudinary.com/dkqip1ihc/image/upload/v1788980916/Machine_horse_pn5yx1.jpg", label: "Running Horse Embroidery" },
    { src: "https://res.cloudinary.com/dkqip1ihc/image/upload/v1788980911/Summer-sweatshirt_lh5qrs.jpg", label: "Summer Sweatshirt" },
    { src: "https://res.cloudinary.com/dkqip1ihc/image/upload/v1788980909/minnie-tee_edtjcl.jpg", label: "Character Embroidery" },
    { src: "https://res.cloudinary.com/dkqip1ihc/image/upload/v1788980910/t1.jpg_l4jcph.jpg", label: "Tiger Patch Tee" },
    { src: "https://res.cloudinary.com/dkqip1ihc/image/upload/v1788980910/t2.jpg_esbwbi.jpg", label: "Custom Graphic Tee" },
    { src: "https://res.cloudinary.com/dkqip1ihc/image/upload/v1788980915/floral-bunny_yborcy.jpg", label: "Floral Bunny Detail" },
    { src: "https://res.cloudinary.com/dkqip1ihc/image/upload/v1788980916/Horse_tees_frontback_c9gmnn.jpg", label: "Front & Back Design" },
    { src: "https://res.cloudinary.com/dkqip1ihc/image/upload/v1788980914/puff-2_lrjigm.jpg", label: "Puff Sleeve Detail" },
    { src: "https://res.cloudinary.com/dkqip1ihc/image/upload/v1788980915/puff_a1qazq.jpg", label: "3D Puff Detail" },
    { src: "https://res.cloudinary.com/dkqip1ihc/image/upload/v1788980915/horse_puff_ggditz.png", label: "Hoodie Puff front design" },
    { src: "https://res.cloudinary.com/dkqip1ihc/image/upload/v1788980912/cap-1_lwkz4j.jpg", label: "Cap Design" },
    { src: "https://res.cloudinary.com/dkqip1ihc/image/upload/v1788980912/cap-2_ruryhl.jpg", label: "Cap Front Design" },
    { src: "https://res.cloudinary.com/dkqip1ihc/image/upload/v1788980912/cap-3_k4u18w.jpg", label: "Multiple Color Design" },
    { src: "https://res.cloudinary.com/dkqip1ihc/image/upload/v1788980911/10_mhq8ze.jpg", label: "Key chain Embroidery" },
    { src: "https://res.cloudinary.com/dkqip1ihc/image/upload/v1788980910/1_vfzta7.jpg", label: "Embroidery in Progress" },
    { src: "https://res.cloudinary.com/dkqip1ihc/image/upload/v1788980914/chenille-embroidery-2_dwtfu1.jpg", label: "Letter Chenille Embroidery" },
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