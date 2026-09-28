"use client";
import "./ServicesSection.css";
import { useEffect, useRef, useState } from "react";

const services = [
  {
    number: "01",
    title: "Custom Web Applications",
    description:
      "End-to-end applications built around your specific workflows — not retrofitted from templates. From client portals to complex data platforms.",
  },
  {
    number: "02",
    title: "Process Automation",
    description:
      "Identify and eliminate repetitive manual work. We map your operations and build systems that run themselves.",
  },
  {
    number: "03",
    title: "Internal Tools & Dashboards",
    description:
      "Purpose-built interfaces for your team: operational visibility, approval workflows, reporting and data management.",
  },
  {
    number: "04",
    title: "System Integrations",
    description:
      "Connect your CRM, ERP, data sources, and third-party APIs into one coherent operational stack.",
  },
  {
    number: "05",
    title: "Technical Consulting",
    description:
      "Architecture reviews, technology selection, and engineering leadership for teams that need a clear direction before committing to a build.",
  },
  {
    number: "06",
    title: "Legacy Modernization",
    description:
      "Migrate aging systems to maintainable web infrastructure without disrupting live operations.",
  },
];

function ServicesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(section);
        }
      },
      {
        threshold: 0.15,
      },
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="services"
      style={{
        background: "rgb(247, 244, 239)",
        padding: "112px 0",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 32px",
        }}
      >
        {/* Header */}
        <div
          className={`reveal ${isVisible ? "is-visible" : ""}`}
          style={{
            transitionDelay: "0s",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              marginBottom: "64px",
              flexWrap: "wrap",
              gap: "20px",
            }}
          >
            <div>
              <div className="label-pill">Services</div>

              <h2
                style={{
                  fontFamily: "Fraunces, serif",
                  fontSize: "clamp(2rem, 4vw, 3rem)",
                  fontWeight: 400,
                  color: "rgb(17, 17, 16)",
                  lineHeight: 1.15,
                  letterSpacing: "-0.02em",
                  margin: 0,
                }}
              >
                What we build.
              </h2>
            </div>

            <p
              style={{
                fontSize: "14px",
                color: "rgb(155, 151, 144)",
                maxWidth: "340px",
                lineHeight: 1.65,
                margin: 0,
              }}
            >
              Every engagement starts with understanding your problem. Then we
              pick the right approach.
            </p>
          </div>
        </div>

        {/* Grid */}
        <div
          className={`services-grid ${hoveredCard !== null ? "has-hover" : ""}`}
        >
          {services.map((service, index) => {
            const isHovered = hoveredCard === index;
            const isDimmed = hoveredCard !== null && hoveredCard !== index;

            return (
              <div
                key={service.number}
                className={`reveal ${isVisible ? "is-visible" : ""}`}
                style={{
                  transitionDelay: `${index * 0.05}s`,
                }}
              >
                <div
                  className={`service-card ${
                    isHovered ? "is-hovered" : ""
                  } ${isDimmed ? "is-dimmed" : ""}`}
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <div
                    style={{
                      fontFamily: "Fraunces, serif",
                      fontSize: "13px",
                      color: "rgb(41, 82, 227)",
                      marginBottom: "16px",
                      fontWeight: 400,
                    }}
                  >
                    {service.number}
                  </div>

                  <h3>{service.title}</h3>

                  <p>{service.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>


    </section>
  );
}

export default ServicesSection;
