"use client";

import { useState } from "react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [fileName, setFileName] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isSubmitting) return;
    setIsSubmitting(true);
    setSubmitError(false);

    const formData = new FormData(e.currentTarget);

    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        body: formData, // no headers/Content-Type — browser sets multipart boundary itself
      });
      if (res.ok) {
        setSubmitted(true);
        setTimeout(() => {
          document.getElementById("form-status")?.scrollIntoView({ behavior: "smooth", block: "center" });
        }, 50);
      } else {
        console.error("Server responded with an error");
        setSubmitError(true);
      }
    } catch (err) {
      console.error("Failed to submit:", err);
      setSubmitError(true);
    } finally {
      setIsSubmitting(false);
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
            <input type="date" name="deadline" placeholder="e.g. within 3 weeks" style={inputStyle} />
          </div>

          {/* Embroidery Backing dropdown */}
          <div>
            <label style={labelStyle}>Embroidery Backing</label>
            <select
              name="backing"
              defaultValue=""
              required
              style={{
                ...inputStyle,
                appearance: "none",
                WebkitAppearance: "none",
                cursor: "pointer",
                backgroundImage:
                  "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23c9a84c' stroke-width='2'><polyline points='6 9 12 15 18 9'/></svg>\")",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "right 1rem center",
                backgroundSize: "14px",
              }}
            >
              <option value="" disabled>
                Select an option
              </option>
              <option value="Iron On" style={{ color: "#000" }}>Iron On</option>
              <option value="Sew On" style={{ color: "#000" }}>Sew On</option>
              <option value="Velcro" style={{ color: "#000" }}>Velcro</option>
              <option value="Peel and Stick" style={{ color: "#000" }}>Peel and Stick</option>
            </select>
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
              disabled={isSubmitting}
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
              {isSubmitting && (
                <span
                  style={{
                    width: "12px",
                    height: "12px",
                    border: "2px solid rgba(0,0,0,0.3)",
                    borderTopColor: "var(--black)",
                    borderRadius: "50%",
                    display: "inline-block",
                    animation: "spin 0.7s linear infinite",
                  }}
                />
              )}
              {isSubmitting ? "Submitting..." : "Submit Project"}
            </button>
            {submitError && (
              <p style={{ fontSize: "12px", color: "#e0a03a", marginTop: "0.9rem" }}>
                Something went wrong — please try again, or reach out on WhatsApp.
              </p>
            )}
            <style jsx>{`
              @keyframes spin {
                to { transform: rotate(360deg); }
              }
            `}</style>
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
              href="tel:+923432044470"
              style={{
                fontSize: "14px",
                color: "var(--gold)",
                opacity: 0.9,
                textDecoration: "none",
              }}
            >
              📞 +92 343 2044470
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

          <div style={{ display: "flex", gap: "1rem", marginTop: "1.75rem" }}>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              style={{
                width: "38px",
                height: "38px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border: "0.5px solid rgba(201,168,76,0.3)",
                color: "var(--gold)",
                transition: "background 0.3s, color 0.3s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "var(--gold)";
                e.currentTarget.style.color = "var(--black)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.color = "var(--gold)";
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="2" width="20" height="20" rx="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>

            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              style={{
                width: "38px",
                height: "38px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border: "0.5px solid rgba(201,168,76,0.3)",
                color: "var(--gold)",
                transition: "background 0.3s, color 0.3s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "var(--gold)";
                e.currentTarget.style.color = "var(--black)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.color = "var(--gold)";
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22 12a10 10 0 1 0-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.4h-1.2c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.4 2.9h-2.4v7A10 10 0 0 0 22 12z" />
              </svg>
            </a>

            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
              style={{
                width: "38px",
                height: "38px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border: "0.5px solid rgba(201,168,76,0.3)",
                color: "var(--gold)",
                transition: "background 0.3s, color 0.3s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "var(--gold)";
                e.currentTarget.style.color = "var(--black)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.color = "var(--gold)";
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M16.6 5.82a4.28 4.28 0 0 1-1.9-3.02h-3.1v13.4a2.6 2.6 0 1 1-2.6-2.6c.24 0 .47.03.7.09V10.6a5.66 5.66 0 0 0-.7-.04A5.7 5.7 0 1 0 14.7 16.3V9.16a7.4 7.4 0 0 0 4.3 1.38V7.44a4.28 4.28 0 0 1-2.4-1.62z" />
              </svg>
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