import ServicesSection from "@/components/sections/ServicesSection";

const processSteps = [
  {
    num: "01",
    title: "Share Your Design",
    desc: "Send us your logo, artwork, or design reference via WhatsApp or email. Any format works — JPG, PNG, PDF, or even a rough sketch.",
  },
  {
    num: "02",
    title: "We Digitize It",
    desc: "Our team converts your design into a professional embroidery digitizing file. You receive the file — it's yours to keep forever.",
  },
  {
    num: "03",
    title: "Production Begins",
    desc: "Once approved, we begin embroidering your labels or patches with precision. Every piece is quality checked before dispatch.",
  },
  {
    num: "04",
    title: "Delivered to You",
    desc: "Your order is carefully packed and delivered. Bulk orders welcome with consistent quality at every scale.",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section
        style={{
          padding: "6rem 4rem 4rem",
          borderBottom: "0.5px solid rgba(201,168,76,0.15)",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(ellipse at 30% 50%, rgba(201,168,76,0.04) 0%, transparent 60%)",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            fontFamily: "'Cinzel', serif",
            fontSize: "11px",
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
          Our Services
        </div>
        <h1
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "4rem",
            fontWeight: 400,
            lineHeight: 1.1,
            maxWidth: "600px",
          }}
        >
          Precision craft,{" "}
          <em style={{ fontStyle: "italic", color: "var(--gold)" }}>
            every stitch
          </em>
        </h1>
      </section>

      {/* Services Grid — reuse home section */}
      <ServicesSection />

      {/* Process Section */}
      <section style={{ padding: "5rem 4rem" }}>
        {/* Thread Divider */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "1rem",
            marginBottom: "4rem",
          }}
        >
          <div className="thread-line" />
          <div className="thread-diamond" />
          <div className="thread-line" />
        </div>

        <div
          style={{
            fontFamily: "'Cinzel', serif",
            fontSize: "11px",
            letterSpacing: "0.3em",
            color: "var(--gold)",
            marginBottom: "3rem",
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
          How It Works
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "0",
          }}
        >
          {processSteps.map((step, index) => (
            <div
              key={step.num}
              style={{
                padding: "2rem",
                borderLeft:
                  index === 0
                    ? "0.5px solid rgba(201,168,76,0.15)"
                    : "none",
                borderRight: "0.5px solid rgba(201,168,76,0.15)",
                borderTop: "0.5px solid rgba(201,168,76,0.15)",
                borderBottom: "0.5px solid rgba(201,168,76,0.15)",
              }}
            >
              <div
                style={{
                  fontFamily: "'Cinzel', serif",
                  fontSize: "2rem",
                  color: "rgba(201,168,76,0.15)",
                  marginBottom: "1.25rem",
                  fontWeight: 400,
                }}
              >
                {step.num}
              </div>
              <h3
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "1.2rem",
                  fontWeight: 400,
                  color: "var(--white)",
                  marginBottom: "0.75rem",
                  lineHeight: 1.3,
                }}
              >
                {step.title}
              </h3>
              <p
                style={{
                  fontSize: "12px",
                  color: "var(--muted)",
                  lineHeight: 1.85,
                  fontWeight: 300,
                }}
              >
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Strip */}
      <section
        style={{
          margin: "0 4rem 5rem",
          padding: "3rem",
          border: "0.5px solid rgba(201,168,76,0.2)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          background: "rgba(201,168,76,0.03)",
        }}
      >
        <div>
          <h3
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "1.9rem",
              fontWeight: 400,
              color: "var(--white)",
              marginBottom: "0.4rem",
            }}
          >
            Ready to get started?
          </h3>
          <p
            style={{
              fontFamily: "'Cinzel', serif",
              fontSize: "11px",
              letterSpacing: "0.1em",
              color: "var(--muted)",
            }}
          >
            Send us your design — we will take it from there
          </p>
        </div>
        <a
          href={`https://wa.me/923001234567`}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.6rem",
            padding: "0.8rem 1.6rem",
            background: "var(--gold)",
            color: "var(--black)",
            fontFamily: "'Cinzel', serif",
            fontSize: "11px",
            letterSpacing: "0.15em",
            textDecoration: "none",
          }}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
          WhatsApp Us
        </a>
      </section>
    </>
  );
}