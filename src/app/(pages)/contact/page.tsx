"use client";

import { useState } from "react";

export default function ContactPage() {
    const [submitted, setSubmitted] = useState(false);
    const [fileName, setFileName] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);

        try {
            const res = await fetch("/api/quote", {
                method: "POST",
                body: formData, // no headers/Content-Type — browser sets multipart boundary itself
            });
            if (res.ok) {
                setSubmitted(true);
            } else {
                console.error("Server responded with an error");
            }
        } catch (err) {
            console.error("Failed to submit:", err);
        }
    };

    const inputStyle: React.CSSProperties = {
        width: "100%",
        background: "transparent",
        border: "0.5px solid rgba(201,168,76,0.25)",
        color: "var(--white)",
        padding: "0.85rem 1rem",
        fontSize: "13px",
        fontFamily: "inherit",
        outline: "none",
    };

    const labelStyle: React.CSSProperties = {
        fontFamily: "'Cinzel', serif",
        fontSize: "10px",
        letterSpacing: "0.15em",
        color: "var(--gold)",
        marginBottom: "0.6rem",
        display: "block",
    };

    return (
        <section
            className="px-6 md:px-10 lg:px-16"
            style={{ paddingTop: "5rem", paddingBottom: "6rem" }}
        >
            {/* Header */}
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
                <span style={{ display: "block", width: "24px", height: "0.5px", background: "var(--gold)" }} />
                Get a Quote
            </div>
            <h1
                style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "clamp(2.2rem, 6vw, 3.6rem)",
                    fontWeight: 400,
                    color: "var(--white)",
                    maxWidth: "700px",
                    lineHeight: 1.15,
                    marginBottom: "1rem",
                }}
            >
                Tell Us About Your Project
            </h1>
            <p
                style={{
                    fontSize: "13px",
                    color: "var(--muted)",
                    lineHeight: 1.9,
                    maxWidth: "560px",
                    fontWeight: 300,
                    marginBottom: "3rem",
                }}
            >
                Send us your design, how many pieces you need, the fabric, and your
                deadline — we&apos;ll get back to you with a quote within 24 hours.
            </p>

            {submitted ? (
                <div
                    style={{
                        border: "0.5px solid rgba(201,168,76,0.4)",
                        padding: "2.5rem",
                        maxWidth: "560px",
                    }}
                >
                    <h3
                        style={{
                            fontFamily: "'Playfair Display', serif",
                            fontSize: "1.4rem",
                            color: "var(--gold)",
                            marginBottom: "0.75rem",
                        }}
                    >
                        Got it — thank you.
                    </h3>
                    <p style={{ fontSize: "13px", color: "var(--muted)", lineHeight: 1.8 }}>
                        We&apos;ve received your project details and will reach out within
                        24 hours with a quote.
                    </p>
                </div>
            ) : (
                <form
                    onSubmit={handleSubmit}
                    className="grid grid-cols-1 md:grid-cols-2"
                    style={{ gap: "1.75rem", maxWidth: "780px" }}
                >
                    <div>
                        <label style={labelStyle}>Company Name</label>
                        <input type="text" name="companyName" required style={inputStyle} />
                    </div>
                    <div>
                        <label style={labelStyle}>Contact Person</label>
                        <input type="text" name="contactPerson" required style={inputStyle} />
                    </div>
                    <div>
                        <label style={labelStyle}>Email</label>
                        <input type="email" name="email" required style={inputStyle} />
                    </div>
                    <div>
                        <label style={labelStyle}>Phone</label>
                        <input type="tel" name="phone" required style={inputStyle} />
                    </div>
                    <div>
                        <label style={labelStyle}>Quantity Needed</label>
                        <input type="text" name="quantity" placeholder="e.g. 200 pieces" style={inputStyle} />
                    </div>
                    <div>
                        <label style={labelStyle}>Deadline</label>
                        <input type="text" name="deadline" placeholder="e.g. within 3 weeks" style={inputStyle} />
                    </div>
                    <div className="md:col-span-2">
                        <label style={labelStyle}>Project Details</label>
                        <textarea
                            name="details"
                            rows={5}
                            placeholder="Fabric type, design notes, anything else we should know"
                            style={{ ...inputStyle, resize: "vertical" }}
                        />
                    </div>
                    <div className="md:col-span-2">
                        <label style={labelStyle}>Upload Artwork</label>
                        <label
                            style={{
                                ...inputStyle,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between",
                                cursor: "pointer",
                            }}
                        >
                            <span style={{ color: fileName ? "var(--white)" : "var(--muted)" }}>
                                {fileName ?? "Choose a file..."}
                            </span>
                            <span style={{ color: "var(--gold)", fontSize: "11px", letterSpacing: "0.1em" }}>
                                BROWSE
                            </span>
                            <input
                                type="file"
                                name="artwork"
                                accept="image/*,.pdf,.ai,.eps"
                                style={{ display: "none" }}
                                onChange={(e) => setFileName(e.target.files?.[0]?.name ?? null)}
                            />
                        </label>
                    </div>
                    <div className="md:col-span-2" style={{ marginTop: "0.5rem" }}>
                        <button
                            type="submit"
                            style={{
                                fontFamily: "'Cinzel', serif",
                                fontSize: "12px",
                                letterSpacing: "0.15em",
                                color: "var(--black)",
                                background: "var(--gold)",
                                border: "0.5px solid var(--gold)",
                                padding: "0.85rem 2.5rem",
                                cursor: "pointer",
                            }}
                        >
                            Submit Project
                        </button>
                    </div>
                </form>
            )}

            {/* Thread Divider */}
            <div style={{ display: "flex", alignItems: "center", gap: "1rem", margin: "5rem 0 3rem" }}>
                <div className="thread-line" />
                <div className="thread-diamond" />
                <div className="thread-line" />
            </div>

            {/* Location / Map */}
            <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: "3rem" }}>
                <div>
                    <div
                        style={{
                            fontFamily: "'Cinzel', serif",
                            fontSize: "11px",
                            letterSpacing: "0.3em",
                            color: "var(--gold)",
                            marginBottom: "1.25rem",
                        }}
                    >
                        OUR STUDIO
                    </div>
                    <h2
                        style={{
                            fontFamily: "'Playfair Display', serif",
                            fontSize: "1.8rem",
                            fontWeight: 400,
                            color: "var(--white)",
                            marginBottom: "1rem",
                        }}
                    >
                        Visit or reach out — whichever&apos;s easier
                    </h2>
                    <p
                        style={{
                            fontSize: "13px",
                            color: "var(--muted)",
                            lineHeight: 1.9,
                            fontWeight: 300,
                            marginBottom: "1.5rem",
                            maxWidth: "420px",
                        }}
                    >
                        Reach out directly — we usually reply within 24 hours.
                    </p>
                    <div style={{ display: "flex", flexDirection: "column", gap: "0.8rem" }}>
                        <a
                            href="tel:+923421738429"
                            style={{
                                fontSize: "14px",
                                color: "var(--gold)",
                                opacity: 0.9,
                                textDecoration: "none",
                            }}
                        >
                            📞 +92 342 1738429
                        </a>
                        <a
                            href="mailto:shaheer@mscrownstitch.com"
                            style={{
                                fontSize: "14px",
                                color: "var(--gold)",
                                opacity: 0.9,
                                textDecoration: "none",
                            }}
                        >
                            ✉️ shaheer@mscrownstitch.com
                        </a>
                        <a
                            href="mailto:farhan@mscrownstitch.com"
                            style={{
                                fontSize: "14px",
                                color: "var(--gold)",
                                opacity: 0.9,
                                textDecoration: "none",
                            }}
                        >
                            ✉️ farhan@mscrownstitch.com
                        </a>
                    </div>
                </div>

                <div
                    style={{
                        border: "0.5px solid rgba(201,168,76,0.2)",
                        overflow: "hidden",
                        minHeight: "280px",
                    }}
                >
                    <iframe
                        title="MS Crown Stitch studio location"
                        src="https://maps.google.com/maps?q=24.8346731,67.1321441&z=17&output=embed"
                        width="100%"
                        height="100%"
                        style={{ border: 0, minHeight: "280px", filter: "grayscale(0.4) invert(0.9) contrast(0.9)" }}
                        loading="lazy"
                    />
                </div>
            </div>
        </section>
    );
}