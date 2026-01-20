import { H2, Lead, Section, Row, Card, Muted } from "./_ui";

export default function AboutMe() {
  return (
    <Section tone="light">
      <H2>About me</H2>
      <Lead>
        I’m a Pilates instructor focused on quality of movement, biomechanics, and a practical approach that improves how you
        feel in everyday life — not just how you perform in a session.
      </Lead>

      <Row>
        <Card title="Personalized coaching" icon="🤝">
          I work 1:1, which means your session is built around your body, your history, and your goals — every time.
        </Card>

        <Card title="Clear and calm progression" icon="🧘">
          We move step by step. My job is to make training feel safe, understandable, and sustainable.
        </Card>

        <Card title="Expat-friendly communication" icon="🇺🇸">
          English-first sessions, easy scheduling, and a professional, friendly tone — like a high-quality private service in the US.
        </Card>
      </Row>

      <div style={{ marginTop: 18 }}>
        <Muted>
          When you add your real photos, this section becomes a trust-builder. I’d include 1–2 sentences on your training background
          and where you work (Warsaw + downtown reformer location) once you want to publish.
        </Muted>
      </div>
    </Section>
  );
}
