import { Card, H2, Lead, Row, Section } from "./_ui";

export default function HowIWork() {
  return (
    <Section tone="soft">
      <H2>How I work</H2>
      <Lead>
        My sessions are structured, supportive, and practical. We focus on what you need most, and we track progress
        so you feel real changes — not just a “good workout.”
      </Lead>

      <Row>
        <Card title="1) Assess & prioritize" icon="🎯">
          We identify what’s driving discomfort or limitation (posture, control, mobility, strength) and choose a clear focus.
        </Card>

        <Card title="2) Train with intention" icon="🧩">
          Pilates fundamentals, breath + control, progressive loading — adapted to your body and your goals.
        </Card>

        <Card title="3) Build a simple plan" icon="🗺️">
          You’ll know what we’re doing and why. Optional short “between-session” routines if you want extra momentum.
        </Card>

        <Card title="4) Progress you can feel" icon="📈">
          Less stiffness, better posture, stronger core support, smoother movement — measured by how you function day to day.
        </Card>
      </Row>
    </Section>
  );
}
