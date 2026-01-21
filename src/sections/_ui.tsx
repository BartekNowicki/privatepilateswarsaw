import React from "react";

const colors = {
  burgundy: "rgba(122, 31, 43, 1)",
  burgundySoft: "rgba(122,31,43,0.08)",
  burgundyBorder: "rgba(122,31,43,0.22)",
  burgundyTextSoft: "rgba(122,31,43,0.85)",
  burgundyHeader: "rgba(122, 31, 43, 0.45)",

  cardBg: "rgba(122,31,43,0.02)",

  ink: "#111",
  softBackground: `linear-gradient(
    180deg,
    rgba(122,31,43,0.08),
    rgba(255,255,255,0)
  )`,
  cardBgStrong: "rgba(122,31,43,0.055)",
};

export function Container({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        maxWidth: 1040,
        margin: "0 auto",
        padding: "0 20px",
      }}
    >
      {children}
    </div>
  );
}

export function Section({
  id,
  children,
  tone = "light",
}: {
  id?: string;
  children: React.ReactNode;
  tone?: "light" | "soft";
}) {
  return (
    <section
      id={id}
      style={{
        padding: "84px 0",
        background: tone === "soft" ? colors.softBackground : "transparent",
        borderTop: `1px solid ${colors.burgundyBorder}`,
      }}
    >
      <Container>{children}</Container>
    </section>
  );
}

export function H2({ children }: { children: React.ReactNode }) {
  return (
    <h2 style={{ fontSize: 30, margin: "0 0 14px", letterSpacing: -0.2 }}>
      {children}
    </h2>
  );
}

export function Lead({ children }: { children: React.ReactNode }) {
  return (
    <p
      style={{
        fontSize: 18,
        lineHeight: 1.7,
        margin: "0 0 18px",
        maxWidth: 820,
      }}
    >
      {children}
    </p>
  );
}

export function Muted({ children }: { children: React.ReactNode }) {
  return (
    <p style={{ margin: 0, opacity: 0.75, lineHeight: 1.6, maxWidth: 850 }}>
      {children}
    </p>
  );
}

export function Row({
  children,
  gap = 18,
}: {
  children: React.ReactNode;
  gap?: number;
}) {
  return (
    <div style={{ display: "flex", gap, flexWrap: "wrap", alignItems: "stretch" }}>
      {children}
    </div>
  );
}

export function Card({
  title,
  children,
  icon,
}: {
  title: string;
  children: React.ReactNode;
  icon?: string;
}) {
  return (
    <div
      style={{
        flex: "1 1 260px",
        border: `1px solid ${colors.burgundyBorder}`,
        borderRadius: 16,
        padding: 18,
        background: colors.cardBg,
        backdropFilter: "blur(6px)",
        boxShadow: "0 12px 32px rgba(0,0,0,0.06)",
      }}
    >
      <div style={{ display: "flex", gap: 10, alignItems: "center", marginBottom: 8 }}>
        {icon ? (
          <span
            aria-hidden
            style={{
              width: 28,
              height: 28,
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 10,
              border: `1px solid ${colors.burgundyBorder}`,
              background: colors.burgundySoft,
              color: colors.burgundy,
              fontSize: 14,
            }}
          >
            {icon}
          </span>
        ) : null}
        <div style={{ fontWeight: 700, color: colors.burgundyHeader }}>{title}</div>
      </div>

      <div style={{ opacity: 0.9, lineHeight: 1.6 }}>{children}</div>
    </div>
  );
}

export function ButtonLink({
  href,
  children,
  variant = "primary",
}: {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "ghost";
}) {
  const isPrimary = variant === "primary";

  return (
    <a
      href={href}
      style={{
        display: "inline-block",
        padding: "12px 18px",
        borderRadius: 12,
        textDecoration: "none",
        border: isPrimary
          ? `1px solid ${colors.burgundy}`
          : `1px solid ${colors.burgundyBorder}`,
        background: isPrimary ? colors.burgundy : "transparent",
        color: isPrimary ? "white" : colors.burgundy,
        fontWeight: 650,
      }}
    >
      {children}
    </a>
  );
}

export function ImageFrame({ src, alt }: { src: string; alt: string }) {
  return (
    <div
      style={{
        borderRadius: 18,
        overflow: "hidden",
        border: `1px solid ${colors.burgundyBorder}`,
        boxShadow: "0 18px 50px rgba(0,0,0,0.10)",
        background: colors.burgundySoft,
      }}
    >
      <img
        src={src}
        alt={alt}
        loading="lazy"
        style={{ width: "100%", height: "auto", display: "block" }}
      />
    </div>
  );
}

export function DividerLabel({ text }: { text: string }) {
  return (
    <div
      style={{
        display: "inline-flex",
        gap: 8,
        alignItems: "center",
        padding: "7px 12px",
        borderRadius: 999,
        border: `1px solid ${colors.burgundyBorder}`,
        background: "rgba(255,255,255,0.8)",
        fontSize: 13,
        fontWeight: 650,
        letterSpacing: 0.2,
        color: colors.burgundy,
      }}
    >
      {text}
    </div>
  );
}
