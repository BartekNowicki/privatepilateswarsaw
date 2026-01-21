import React, { useState } from "react";
import { H2, Lead, Section, Row, Card, Muted, ImageFrame } from "./_ui";
import { Lightbox } from "../components/Lightbox";

import about1 from "../assets/about-1.jpg";
import about2 from "../assets/about-2.jpg";
import about3 from "../assets/about-3.jpg";

export default function AboutMe() {
  const [activeImage, setActiveImage] = useState<string | null>(null);

  return (
    <Section tone="light">
      <H2>About me</H2>

      <Lead>
        I’m a certified Pilates instructor focused on quality of movement, biomechanics,
        and a practical approach that improves how you feel in everyday life —
        not just how you perform in a session.
      </Lead>

      <Row>
        <Card title="Personalized coaching" icon="🤝">
          I work 1:1, which means your session is built around your body, your history,
          and your goals — every time.
        </Card>

        <Card title="Clear and calm progression" icon="🧘">
          We move step by step. My job is to make training feel safe, understandable,
          and sustainable.
        </Card>

        <Card title="Clear communication" icon="💬">
          English-first sessions, smooth scheduling, and a professional yet approachable
          way of working.
        </Card>
      </Row>

      {/* 3-photo mini gallery */}
      <div style={{ marginTop: 32 }}>
        <Row gap={16}>
          {[about1, about2, about3].map((img, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setActiveImage(img)}
              style={{
                flex: "1 1 260px",
                cursor: "zoom-in",
                padding: 0,
                border: "none",
                background: "transparent",
                textAlign: "inherit",
              }}
              aria-label="Open photo"
            >
              <ImageFrame src={img} alt="Pilates practice photo" />
            </button>
          ))}
        </Row>
      </div>

      <div style={{ marginTop: 18 }}>
        <Muted>
          These photos reflect how I work — focused, calm, and attentive to detail.
          Sessions take place in clients’ homes or in a downtown studio equipped with a reformer.
        </Muted>
      </div>

      {activeImage && (
        <Lightbox
          src={activeImage}
          alt="Pilates practice photo"
          onClose={() => setActiveImage(null)}
        />
      )}
    </Section>
  );
}
