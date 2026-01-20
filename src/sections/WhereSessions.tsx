import { Card, H2, Lead, Row, Section, ImageFrame, Muted } from "./_ui";
import equipment from "../assets/equipment.jpg";
import reformer from "../assets/reformer.jpg";

export default function WhereSessions() {
  const img1 = "https://picsum.photos/seed/pilates-home/1200/800";
  const img2 = "https://picsum.photos/seed/pilates-reformer/1200/800";

  return (
    <Section tone="light">
      <H2>Where sessions happen</H2>
      <Lead>
        Most clients choose the easy option: I come to your home or office in Warsaw. If you’d like equipment-based work,
        we can also train on a reformer in a downtown studio.
      </Lead>

      <Row gap={18}>
        <div style={{ flex: "1 1 420px", minWidth: 280 }}>
          <ImageFrame src={equipment} alt="At-home Pilates session" />
        </div>
        <div style={{ flex: "1 1 420px", minWidth: 280 }}>
          <ImageFrame src={reformer} alt="Reformer Pilates session" />
        </div>
      </Row>

      <div style={{ marginTop: 18 }}>
        <Row>
          <Card title="At your home or office" icon="🚗">
            I bring what we need for a high-quality session. Minimal setup, maximum value.
          </Card>

          <Card title="Reformer option (downtown)" icon="🏙️">
            Great when you want more equipment variety, precision, and progressive resistance. Location: central Warsaw.
          </Card>

          <Card title="Flexible scheduling" icon="🗓️">
            Weekday mornings, daytime, or evenings depending on availability. We’ll find a rhythm that works.
          </Card>
        </Row>
      </div>

      <div style={{ marginTop: 18 }}>
        <Muted>
          If you’re unsure whether home sessions or reformer sessions are best for you, we’ll decide together after the first session.
        </Muted>
      </div>
    </Section>
  );
}
