"use client";

import ContactStrip from "@/components/sections/ContactStrip";

const stats = [
  { number: "10+", label: "Years of Hands-On Experience" },
  { number: "100%", label: "In-House Design & Digitizing" },
  { number: "1 to 1,000s", label: "Any Order Size, Same Standard" },
];

const differentiators = [
  {
    roman: "I",
    title: "In-house design & digitizing",
    desc: "No back-and-forth with outside designers. Every file is digitized under one roof, so nothing gets delayed waiting on a third party.",
  },
  {
    roman: "II",
    title: "Built to scale with you",
    desc: "Whether it's a single test run or a full production order, our setup is flexible enough to handle both without compromising on quality.",
  },
  {
    roman: "III",
    title: "Quality checked at every step",
    desc: "We inspect throughout the process, not just at the end — so issues get caught early, not after the full order is already stitched.",
  },
  {
    roman: "IV",
    title: "A real person to talk to",
    desc: "You're not routed through a call center. You talk directly to the people making your order, from quote to delivery.",
  },
];

export default function AboutPage() {
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
          About Us
        </div>
        <h1
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(2.4rem, 7vw, 4.2rem)",
            fontWeight: 400,
            color: "var(--white)",
            maxWidth: "620px",
            lineHeight: 1.1,
          }}
        >
          Stitched with
          <br />
          <em style={{ fontStyle: "italic", color: "var(--gold)" }}>
            purpose
          </em>
        </h1>
      </section>

      {/* Stats Row */}
      <section
        className="px-6 md:px-10 lg:px-16 grid grid-cols-1 sm:grid-cols-3"
        style={{ paddingBottom: "4rem", gap: "2px" }}
      >
        {stats.map((stat) => (
          <div
            key={stat.label}
            style={{
              padding: "2rem 1.5rem",
              border: "0.5px solid rgba(201,168,76,0.2)",
              textAlign: "center",
            }}
          >
            <div
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(2rem, 4vw, 2.8rem)",
                fontWeight: 400,
                color: "var(--gold)",
                lineHeight: 1.1,
                marginBottom: "0.5rem",
              }}
            >
              {stat.number}
            </div>
            <div
              style={{
                fontFamily: "'Cinzel', serif",
                fontSize: "10px",
                letterSpacing: "0.15em",
                color: "var(--muted)",
              }}
            >
              {stat.label}
            </div>
          </div>
        ))}
      </section>

      {/* Thread Divider */}
      <div
        className="px-6 md:px-10 lg:px-16"
        style={{ display: "flex", alignItems: "center", gap: "1rem", paddingBottom: "4rem" }}
      >
        <div className="thread-line" />
        <div className="thread-diamond" />
        <div className="thread-line" />
      </div>

      {/* Our Story */}
      <section
        className="px-6 md:px-10 lg:px-16 grid grid-cols-1 md:grid-cols-2"
        style={{ paddingBottom: "5rem", gap: "3rem" }}
      >
        <div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.75rem",
              marginBottom: "1.25rem",
            }}
          >
            <span style={{ display: "block", width: "20px", height: "0.5px", background: "var(--gold)" }} />
            <h2
              style={{
                fontFamily: "'Cinzel', serif",
                fontSize: "13px",
                letterSpacing: "0.2em",
                color: "var(--gold)",
                fontWeight: 500,
              }}
            >
              OUR STORY
            </h2>
          </div>
          <p
            style={{
              fontSize: "15px",
              color: "var(--white)",
              opacity: 0.85,
              lineHeight: 2,
              fontWeight: 300,
            }}
          >
            MS Crown Stitch was built on a simple frustration: businesses
            needing embroidery done well kept having to choose between good
            design and reliable production — rarely both from the same
            place. We started this studio to close that gap, offering the
            same craftsmanship whether the order is one piece or one
            thousand.
          </p>
        </div>
        <div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.75rem",
              marginBottom: "1.25rem",
            }}
          >
            <span style={{ display: "block", width: "20px", height: "0.5px", background: "var(--gold)" }} />
            <h2
              style={{
                fontFamily: "'Cinzel', serif",
                fontSize: "13px",
                letterSpacing: "0.2em",
                color: "var(--gold)",
                fontWeight: 500,
              }}
            >
              LED BY EXPERIENCE
            </h2>
          </div>
          <p
            style={{
              fontSize: "15px",
              color: "var(--white)",
              opacity: 0.85,
              lineHeight: 2,
              fontWeight: 300,
            }}
          >
            While MS Crown Stitch is a new studio, it&apos;s led by a founder
            with over 10 years of direct, hands-on experience in embroidery
            digitizing and production. The fundamentals — clean stitching,
            accurate color matching, dependable timelines — aren&apos;t
            something we&apos;re still figuring out. They&apos;re the
            standard we started with.
          </p>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="px-6 md:px-10 lg:px-16" style={{ paddingBottom: "5rem" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.75rem",
            marginBottom: "2rem",
          }}
        >
          <span style={{ display: "block", width: "20px", height: "0.5px", background: "var(--gold)" }} />
          <h2
            style={{
              fontFamily: "'Cinzel', serif",
              fontSize: "13px",
              letterSpacing: "0.2em",
              color: "var(--gold)",
              fontWeight: 500,
            }}
          >
            WHAT MAKES US DIFFERENT
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: "1px" }}>
          {differentiators.map((item) => (
            <div
              key={item.roman}
              style={{
                padding: "2rem",
                border: "0.5px solid rgba(201,168,76,0.15)",
                transition: "border-color 0.3s, background 0.3s",
              }}
            >
              <div
                style={{
                  fontFamily: "'Cinzel', serif",
                  fontSize: "0.85rem",
                  color: "rgba(201,168,76,0.35)",
                  letterSpacing: "0.2em",
                  marginBottom: "1rem",
                }}
              >
                {item.roman}
              </div>
              <h3
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "1.3rem",
                  fontWeight: 400,
                  color: "var(--white)",
                  marginBottom: "0.75rem",
                }}
              >
                {item.title}
              </h3>
              <p
                style={{
                  fontSize: "13.5px",
                  color: "var(--muted)",
                  lineHeight: 1.9,
                  fontWeight: 300,
                }}
              >
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section
        className="px-6 md:px-10 lg:px-16"
        style={{ paddingBottom: "5rem", textAlign: "center" }}
      >
        <p
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(1.5rem, 4vw, 2.4rem)",
            fontStyle: "italic",
            color: "var(--gold)",
            maxWidth: "780px",
            margin: "0 auto",
            lineHeight: 1.5,
          }}
        >
          &quot;Every stitch a statement — precision isn&apos;t a feature
          here, it&apos;s the whole point.&quot;
        </p>
      </section>

      <ContactStrip />
    </>
  );
}