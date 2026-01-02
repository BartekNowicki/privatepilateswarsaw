export default function Hero() {
  return (
    <section style={{ padding: "72px 20px", maxWidth: 980, margin: "0 auto" }}>
      <p style={{ margin: 0, opacity: 0.8 }}>Pilates 1:1 • Warszawa • dojazd + reformer (Wilcza)</p>

      <h1 style={{ fontSize: 44, lineHeight: 1.1, margin: "16px 0" }}>
        Indywidualne sesje Pilates, które realnie poprawiają komfort ciała
      </h1>

      <p style={{ fontSize: 18, lineHeight: 1.6, maxWidth: 720 }}>
        Współczesne podejście ukierunkowane na przeciwdziałanie skutkom siedzenia, stresu i przeciążeń.
        Pracujemy spokojnie, bezpiecznie i z jasnym planem progresji — w domu klienta lub na reformerze.
      </p>

      <div style={{ display: "flex", gap: 12, marginTop: 20, flexWrap: "wrap" }}>
        <a
          href="#kontakt"
          style={{
            display: "inline-block",
            padding: "12px 16px",
            borderRadius: 10,
            textDecoration: "none",
            border: "1px solid currentColor",
          }}
        >
          Umów pierwszą sesję
        </a>

        <a
          href="#pierwsza-sesja"
          style={{
            display: "inline-block",
            padding: "12px 16px",
            borderRadius: 10,
            textDecoration: "none",
            border: "1px solid rgba(0,0,0,0.2)",
            opacity: 0.9,
          }}
        >
          Zobacz jak wygląda start
        </a>
      </div>
    </section>
  );
}
