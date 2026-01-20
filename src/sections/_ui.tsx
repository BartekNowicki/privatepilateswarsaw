import React from "react";

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
        background:
          tone === "soft"
            ? "linear-gradient(180deg, rgba(0,0,0,0.04), rgba(0,0,0,0.02))"
            : "transparent",
        borderTop: "1px solid rgba(0,0,0,0.06)",
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
    <p style={{ fontSize: 18, lineHeight: 1.7, margin: "0 0 18px", maxWidth: 820 }}>
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
        border: "1px solid rgba(0,0,0,0.12)",
        borderRadius: 16,
        padding: 18,
        background: "rgba(255,255,255,0.6)",
        boxShadow: "0 10px 30px rgba(0,0,0,0.06)",
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
              border: "1px solid rgba(0,0,0,0.12)",
              background: "rgba(0,0,0,0.03)",
              fontSize: 14,
            }}
          >
            {icon}
          </span>
        ) : null}
        <div style={{ fontWeight: 700 }}>{title}</div>
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
        padding: "12px 16px",
        borderRadius: 12,
        textDecoration: "none",
        border: isPrimary ? "1px solid rgba(0,0,0,0.9)" : "1px solid rgba(0,0,0,0.18)",
        background: isPrimary ? "rgba(0,0,0,0.9)" : "transparent",
        color: isPrimary ? "white" : "rgba(0,0,0,0.9)",
        fontWeight: 650,
      }}
    >
      {children}
    </a>
  );
}

export function ImageFrame({
  src,
  alt,
}: {
  src: string;
  alt: string;
}) {
  return (
    <div
      style={{
        borderRadius: 18,
        overflow: "hidden",
        border: "1px solid rgba(0,0,0,0.12)",
        boxShadow: "0 18px 50px rgba(0,0,0,0.10)",
        background: "rgba(0,0,0,0.02)",
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
        padding: "7px 10px",
        borderRadius: 999,
        border: "1px solid rgba(0,0,0,0.14)",
        background: "rgba(255,255,255,0.65)",
        fontSize: 13,
        fontWeight: 650,
        letterSpacing: 0.2,
      }}
    >
      {text}
    </div>
  );
}
