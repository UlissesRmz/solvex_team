import "./About.css"

export default function AboutSection() {
  const features = [
    {
      number: "01",
      title: "Process Automation",
      description:
        "We replace manual, error-prone processes with systems that run themselves — freeing your team for higher-value work.",
    },
    {
      number: "02",
      title: "Operational Efficiency",
      description:
        "Better data, faster decisions, less wasted effort — without disrupting what already works.",
    },
    {
      number: "03",
      title: "Custom Web Tools",
      description:
        "Software built for your exact context, not adapted from something generic.",
    },
    {
      number: "04",
      title: "Vibe Coding?",
      description:
        "Vibe Coding is our approach to building software that’s fast, flexible, and focused on your needs. We work in short cycles, with frequent feedback, so you can see progress and shape the product as it evolves.But not the main point. The main point is that we build software that works for you, not the other way around.",
    },
  ];

  return (
    <section
      id="about"
      style={{
        background: "rgb(17, 17, 16)",
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
        <div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "80px",
              alignItems: "start",
            }}
          >
            {/* Left content */}
            <div>
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "10px",
                  color: "rgb(155, 151, 144)",
                  fontSize: "12px",
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  marginBottom: "20px",
                }}
              >
                <span
                  style={{
                    display: "block",
                    width: "18px",
                    height: "1.5px",
                    background: "rgb(155, 151, 144)",
                  }}
                />

                About
              </span>

              <h2
                style={{
                  fontFamily: "Fraunces, serif",
                  fontSize: "clamp(2rem, 4vw, 3rem)",
                  fontWeight: 400,
                  color: "rgb(247, 244, 239)",
                  lineHeight: 1.15,
                  letterSpacing: "-0.02em",
                  marginBottom: "24px",
                }}
              >
                We build software
                <br />
                that earns its keep.
              </h2>

              <p
                style={{
                  fontSize: "16px",
                  lineHeight: 1.75,
                  color: "rgb(155, 151, 144)",
                  maxWidth: "420px",
                  margin: 0,
                }}
              >
                Solvex Tech is a software development company focused on one
                thing: building tools that make businesses operate better. Not
                vanity projects — systems that remove friction, surface
                information, and automate work your team shouldn't do by hand.
              </p>
            </div>

            {/* Right content */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              {features.map((feature) => (
                <div
                  key={feature.number}
                  style={{
                    padding: "28px 0",
                    borderBottom: "1px solid rgb(45, 44, 41)",
                    display: "flex",
                    gap: "20px",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "Fraunces, serif",
                      fontSize: "13px",
                      color: "rgb(41, 82, 227)",
                      fontWeight: 400,
                      minWidth: "28px",
                      paddingTop: "3px",
                    }}
                  >
                    {feature.number}
                  </span>

                  <div>
                    <div
                      style={{
                        fontSize: "15px",
                        fontWeight: 600,
                        color: "rgb(247, 244, 239)",
                        marginBottom: "8px",
                      }}
                    >
                      {feature.title}
                    </div>

                    <div
                      style={{
                        fontSize: "14px",
                        lineHeight: 1.65,
                        color: "rgb(155, 151, 144)",
                      }}
                    >
                      {feature.description}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}