import { Section, H2, Lead, Card, Row, Muted, ButtonLink } from "./_ui";

export default function CTA() {
  const email = "bartosznowickihq@gmail.com";
  const phone = "+48 605 769 837";
  const whatsappLink = "https://wa.me/48605769837";

  return (
    <Section id="contact" tone="soft">
      <H2>Get in touch</H2>

      <Lead>
        If you’re interested in private Pilates sessions in Warsaw — at your home, office,
        or on a reformer downtown — feel free to reach out.
      </Lead>

      <Row>
        <Card title="Contact details" icon="📍">
          <div style={{ lineHeight: 1.8 }}>
            <div>
              <strong>Email:</strong>{" "}
              <a href={`mailto:${email}`} style={linkStyle}>
                {email}
              </a>
            </div>

            <div style={{ marginTop: 6 }}>
              <strong>WhatsApp (preferred):</strong>{" "}
              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                style={linkStyle}
              >
                {phone}
              </a>
            </div>

            <div style={{ marginTop: 14 }}>
              <Muted>
                WhatsApp is the fastest way to reach me. I’m often teaching sessions and
                can’t take phone calls, but I always reply to messages as soon as I’m free.
              </Muted>
            </div>
          </div>
        </Card>

        <Card title="What to include in your message" icon="💬">
          <ul style={{ margin: 0, paddingLeft: 18, lineHeight: 1.8 }}>
            <li>Where you’d like to train (home, office, or reformer)</li>
            <li>Your general availability</li>
            <li>Any goals or concerns you’d like to work on</li>
          </ul>

          <div style={{ marginTop: 14 }}>
            <ButtonLink href="#first-session" variant="accent">
              See how the first session works
            </ButtonLink>
          </div>
        </Card>
      </Row>

      <div style={{ marginTop: 18 }}>
        <Muted>
          I personally reply to all inquiries. Typical response time is within 24 hours.
        </Muted>
      </div>
    </Section>
  );
}

const linkStyle: React.CSSProperties = {
  textDecoration: "none",
  borderBottom: "1px solid rgba(0,0,0,0.3)",
  paddingBottom: 1,
};
