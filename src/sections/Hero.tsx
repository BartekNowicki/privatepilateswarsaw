import { ButtonLink, Container, DividerLabel, ImageFrame, Row } from "./_ui";
import heroImg from "../assets/hero.jpg";

export default function Hero() {

  return (
    <section
      style={{
        padding: "86px 0 72px",
        background:
          "radial-gradient(900px 500px at 10% 10%, rgba(0,0,0,0.06), transparent 60%), radial-gradient(900px 500px at 80% 20%, rgba(0,0,0,0.05), transparent 60%)",
      }}
    >
      <Container>
        <Row gap={28}>
          <div style={{ flex: "1 1 520px", minWidth: 280 }}>
            <DividerLabel text="Private 1:1 Pilates • Warsaw • I come to you (home or office)" />
            <h1
              style={{
                fontSize: 46,
                lineHeight: 1.08,
                margin: "16px 0 12px",
                letterSpacing: -0.6,
              }}
            >
              Feel better in your body —
              without rearranging your life.
            </h1>

            <p style={{ fontSize: 18, lineHeight: 1.7, maxWidth: 720, margin: "0 0 18px" }}>
              I offer private, personalized Pilates sessions in Warsaw — at your home or office.
              If you prefer equipment-based training, we can also work on a reformer in a fully equipped
              studio downtown.
            </p>

            <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 18 }}>
              <ButtonLink href="#contact" variant="primary">
                Book a first session
              </ButtonLink>
              <ButtonLink href="#first-session" variant="accent">
                What the first session looks like
              </ButtonLink>
            </div>

            <div style={{ marginTop: 18, opacity: 0.85, lineHeight: 1.65 }}>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
                <span>✅ Gentle, progressive approach</span>
                <span>✅ Clear plan (not random workouts)</span>
                <span>✅ Great for desk tension & stiffness</span>
                <span>✅ English-first, expat-friendly</span>
              </div>
            </div>

            <div style={{ marginTop: 22, fontSize: 13, opacity: 0.75 }}>
              Popular with: busy professionals • expats • people who want consistent progress
            </div>
          </div>

          <div style={{ flex: "1 1 420px", minWidth: 280 }}>
            <ImageFrame
              src={heroImg}
              alt="Private Pilates session in a clean, modern setting"
            />
            <div style={{ marginTop: 10, display: "flex", gap: 10, flexWrap: "wrap" }}>
              <DividerLabel text="Home sessions" />
              <DividerLabel text="Office sessions" />
              <DividerLabel text="Reformer downtown" />
            </div>
          </div>
        </Row>
      </Container>
    </section>
  );
}
