"use client";

import Image from "next/image";
import { useState } from "react";

const embroideryTypes = [
  {
    src: "/images/minnie-tee.jpeg",
    title: "Flat Embroidery",
    desc: "The classic, clean stitch style ideal for logos, text, and everyday branding.",
  },
  {
    src: "/images/services/chenille-embroidery.png",
    title: "Chenille Embroidery",
    desc: "Bold, textured, varsity-style stitching that stands out on jackets and caps.",
  },
  {
    src: "/images/services/3d-puff-embroidery.jpg",
    title: "3D Puff Embroidery",
    desc: "Raised, dimensional stitching that gives logos a bold, tactile look.",
  },
  {
    src: "/images/services/cap-embroidery.jpeg",
    title: "Cap Embroidery",
    desc: "Precision stitching built for curved surfaces like caps and hats.",
  },
  {
    src: "/images/services/10.jpg",
    title: "Keychain Embroidery",
    desc: "Small-format embroidery for merchandise, giveaways, and accessories.",
  },
];

export default function EmbroideryTypes() {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  return (
    <section className="px-6 md:px-10 lg:px-16" style={{ paddingBottom: "5rem" }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "0.75rem",
          marginBottom: "2rem",
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
        <h2
          style={{
            fontFamily: "'Cinzel', serif",
            fontSize: "11px",
            letterSpacing: "0.3em",
            color: "var(--gold)",
            fontWeight: 500,
          }}
        >
          TYPES OF EMBROIDERY WE OFFER
        </h2>
      </div>

      <div
        className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5"
        style={{ gap: "2px" }}
      >
        {embroideryTypes.map((item) => {
          const isHovered = hoveredItem === item.title;
          return (
            <div
              key={item.title}
              onMouseEnter={() => setHoveredItem(item.title)}
              onMouseLeave={() => setHoveredItem(null)}
              style={{ cursor: "default" }}
            >
              <div
                style={{
                  aspectRatio: "1/1",
                  position: "relative",
                  overflow: "hidden",
                  marginBottom: "0.9rem",
                }}
              >
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                  style={{
                    objectFit: "cover",
                    filter: isHovered
                      ? "brightness(0.95) saturate(1)"
                      : "brightness(0.8) saturate(0.9)",
                    transform: isHovered ? "scale(1.04)" : "scale(1)",
                    transition: "transform 0.5s, filter 0.5s",
                  }}
                />
              </div>
              <h3
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "1.05rem",
                  fontWeight: 400,
                  color: "var(--white)",
                  marginBottom: "0.4rem",
                }}
              >
                {item.title}
              </h3>
              <p
                style={{
                  fontSize: "12px",
                  color: "var(--muted)",
                  lineHeight: 1.7,
                  fontWeight: 300,
                }}
              >
                {item.desc}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
