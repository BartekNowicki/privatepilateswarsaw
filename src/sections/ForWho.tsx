import { Card, H2, Lead, Row, Section, Muted } from "./_ui";

export default function ForWho() {
  return (
    <Section tone="light">
      <H2>Who this is for</H2>
      <Lead>
        If your body feels “off” from travel, long hours at a desk, stress, or inconsistent workouts,
        private Pilates is a smart, low-friction way to feel strong and mobile again.
      </Lead>

      <Row>
        <Card title="Busy professionals" icon="🧑‍💼">
          You want something that fits your schedule, doesn’t waste time, and actually moves the needle.
        </Card>

        <Card title="Desk tension & stiffness" icon="💻">
          Tight hips, stiff upper back, achy neck/shoulders — we build mobility and strength with control.
        </Card>

        <Card title="A safe return to training" icon="🧠">
          If you’ve taken time off or feel unsure, we start calmly, build confidence, and progress step by step.
        </Card>

        <Card title="People who prefer privacy" icon="🏠">
          No crowded classes. No pressure. Just focused 1:1 coaching in a comfortable environment.
        </Card>
      </Row>

      <div style={{ marginTop: 22 }}>
        <Muted>
          Note: I’m not a medical clinic. If you have an acute injury or red-flag symptoms, I’ll ask you to
          consult a licensed healthcare professional first. Safety always comes first.
        </Muted>
      </div>
    </Section>
  );
}
