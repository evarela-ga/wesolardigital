/* ============================================================
   Shared components + icon set
   ============================================================ */
const { useState, useEffect, useRef } = React;

const LOGO_WHITE = "assets/goodapps-white.png";

/* ---- Clean stroke icon set (24x24, currentColor) ---- */
const ICONS = {
  sun: <g><circle cx="12" cy="12" r="4.2"/><path d="M12 2.5v2.4M12 19.1v2.4M2.5 12h2.4M19.1 12h2.4M5.2 5.2l1.7 1.7M17.1 17.1l1.7 1.7M18.8 5.2l-1.7 1.7M6.9 17.1l-1.7 1.7"/></g>,
  bolt: <path d="M13 2 4.5 13.2h6.2L10 22l8.5-11.2h-6.2L13 2Z"/>,
  chart: <g><path d="M4 20V4M4 20h16"/><path d="M8 16l3.5-4 3 2.5L20 7"/></g>,
  wallet: <g><rect x="3" y="6" width="18" height="13" rx="2.5"/><path d="M3 9.5h18M16.5 13h.01"/><path d="M16 6V4.5a1.5 1.5 0 0 0-2-1.4L5 6"/></g>,
  gear: <g><circle cx="12" cy="12" r="3.2"/><path d="M12 2.5v2M12 19.5v2M21.5 12h-2M4.5 12h-2M18.7 5.3l-1.4 1.4M6.7 17.3l-1.4 1.4M18.7 18.7l-1.4-1.4M6.7 6.7 5.3 5.3"/></g>,
  network: <g><circle cx="12" cy="5" r="2.4"/><circle cx="5" cy="18" r="2.4"/><circle cx="19" cy="18" r="2.4"/><path d="M10.3 6.9 6.7 16M13.7 6.9 17.3 16M7.4 18h9.2"/></g>,
  users: <g><circle cx="9" cy="8" r="3"/><path d="M3.5 19.5a5.5 5.5 0 0 1 11 0M16 6.2a3 3 0 0 1 0 5.6M20.5 19.5a5.5 5.5 0 0 0-3.6-5.2"/></g>,
  wrench: <path d="M14.5 6.5a3.8 3.8 0 0 0 4.9 4.9L21 13l-7.5 7.5a2.1 2.1 0 0 1-3-3L18 10 14.5 6.5Z M14.5 6.5 11.8 3.8a3.8 3.8 0 0 0-1.4 6.3"/>,
  data: <g><ellipse cx="12" cy="5.5" rx="7" ry="2.8"/><path d="M5 5.5v6c0 1.5 3.1 2.8 7 2.8s7-1.3 7-2.8v-6M5 11.5v6c0 1.5 3.1 2.8 7 2.8s7-1.3 7-2.8v-6"/></g>,
  shield: <g><path d="M12 2.5 4.5 5.5v5.5c0 4.7 3.2 8.3 7.5 10 4.3-1.7 7.5-5.3 7.5-10V5.5L12 2.5Z"/><path d="M9 12l2 2 4-4.2"/></g>,
  check: <path d="M4.5 12.5 9.5 17.5 20 6.5"/>,
  arrow: <path d="M5 12h14M13 6l6 6-6 6"/>,
  store: <g><path d="M4 9.5V20h16V9.5M3 9.5 5 4h14l2 5.5M3 9.5h18M3 9.5a2.4 2.4 0 0 0 4.5 0 2.4 2.4 0 0 0 4.5 0 2.4 2.4 0 0 0 4.5 0 2.4 2.4 0 0 0 4.5 0"/><path d="M9.5 20v-5h5v5"/></g>,
  ai: <g><path d="M12 3l1.8 4.4L18 9l-4.2 1.6L12 15l-1.8-4.4L6 9l4.2-1.6L12 3Z"/><path d="M18.5 15l.8 2 .7-2M5 16l.7 1.8.8-1.8" /></g>,
  handshake: <path d="M8 11 4 7l3-2 4 3h3l4-2 2 2-4 5-2-1.5M11 8l3.5 3.2a1.6 1.6 0 0 1-2.2 2.3l-.5-.5M12 13.5a1.6 1.6 0 1 1-2.2 2.3M9.8 15.8a1.6 1.6 0 1 1-2.2 2.3"/>,
  building: <g><rect x="5" y="3" width="14" height="18" rx="1.5"/><path d="M9 7h2M13 7h2M9 11h2M13 11h2M9 15h2M13 15h2M10 21v-3h4v3"/></g>,
  doc: <g><path d="M6 3h8l4 4v14H6V3Z"/><path d="M14 3v4h4M9 12h6M9 16h6"/></g>,
  layers: <g><path d="M12 3 3 8l9 5 9-5-9-5Z"/><path d="M3 13l9 5 9-5M3 8v0"/></g>,
  globe: <g><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.5 2.4 3.8 5.6 3.8 9s-1.3 6.6-3.8 9c-2.5-2.4-3.8-5.6-3.8-9S9.5 5.4 12 3Z"/></g>,
  coins: <g><ellipse cx="9" cy="7" rx="5.5" ry="2.6"/><path d="M3.5 7v4c0 1.4 2.5 2.6 5.5 2.6"/><ellipse cx="15" cy="13" rx="5.5" ry="2.6"/><path d="M9.5 13v4c0 1.4 2.5 2.6 5.5 2.6s5.5-1.2 5.5-2.6v-4"/></g>,
};

function Icon({ name, size = 24, stroke = 1.6, className = "", style }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth={stroke} strokeLinecap="round" strokeLinejoin="round"
      className={className} style={style} aria-hidden="true">
      {ICONS[name] || null}
    </svg>
  );
}

/* ---- Section wrapper ---- */
function Section({ id, alt, children, style, className = "" }) {
  return (
    <section id={id} className={`section ${alt ? "section--alt" : ""} ${className}`} style={style} data-screen-label={id}>
      <div className="wrap">{children}</div>
    </section>
  );
}

/* ---- Kicker ---- */
function Kicker({ num, children, green }) {
  return (
    <span className={`kicker ${green ? "kicker--green" : ""}`}>
      {num && <span className="num">{num}</span>}
      {children}
    </span>
  );
}

/* ---- Scroll reveal hook (IntersectionObserver + robust fallbacks) ---- */
function useReveal() {
  useEffect(() => {
    const reveal = (e) => e && e.classList.add("in");
    const all = () => document.querySelectorAll("[data-reveal]:not(.in)");

    // 1) Reveal anything already in or above the viewport immediately.
    const revealVisible = () => {
      const vh = window.innerHeight || document.documentElement.clientHeight;
      all().forEach(e => {
        const r = e.getBoundingClientRect();
        if (r.top < vh * 0.92) reveal(e);
      });
    };
    revealVisible();

    // 2) Observe below-fold elements for a graceful reveal on scroll.
    let io;
    if ("IntersectionObserver" in window) {
      io = new IntersectionObserver((entries) => {
        entries.forEach(en => {
          if (en.isIntersecting) { reveal(en.target); io.unobserve(en.target); }
        });
      }, { threshold: 0.12, rootMargin: "0px 0px -6% 0px" });
      all().forEach(e => io.observe(e));
    }

    // 3) Re-check on scroll/resize as a belt-and-suspenders.
    const onScroll = () => revealVisible();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    // 4) Guaranteed fallback: never leave anything permanently hidden.
    const t = setTimeout(() => { document.querySelectorAll("[data-reveal]").forEach(reveal); }, 1200);

    return () => {
      if (io) io.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      clearTimeout(t);
    };
  });
}

/* ---- Reveal wrapper ---- */
function R({ children, delay, as = "div", className = "", ...rest }) {
  const Tag = as;
  return <Tag data-reveal data-reveal-delay={delay} className={className} {...rest}>{children}</Tag>;
}

/* ---- Pill chip ---- */
function Chip({ children, icon }) {
  return <span className="chip">{icon && <Icon name={icon} size={14} />}{children}</span>;
}

Object.assign(window, { Icon, ICONS, Section, Kicker, useReveal, R, Chip, LOGO_WHITE,
  useState, useEffect, useRef });
