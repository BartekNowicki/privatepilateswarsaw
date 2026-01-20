import { Card, H2, Lead, Row, Section } from "./_ui";

export default function FirstSession() {
  return (
    <Section id="first-session" tone="soft">
      <H2>What your first session looks like</H2>
      <Lead>
        The first session is calm and informative. We’ll clarify goals, assess movement basics, and start training right away
        — with exercises that feel safe, effective, and tailored to you.
      </Lead>

      <Row>
        <Card title="Quick intake" icon="📝">
          Your goals, daily routine, training background, any limitations, and what you want to improve.
        </Card>

        <Card title="Movement check" icon="🧭">
          Simple observations to understand mobility, control, breathing patterns, and how you move under light load.
        </Card>

        <Card title="Your first workout" icon="✅">
          We begin with a smart baseline session. You’ll leave feeling more “put together,” not destroyed.
        </Card>

        <Card title="Next steps" icon="➡️">
          We agree on a plan: frequency, focus areas, and how we’ll progress over the next few weeks.
        </Card>
      </Row>
    </Section>
  );
}
