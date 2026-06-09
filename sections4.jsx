/* ============================================================
   Sections 10–14 : Casos (tabs) · Condiciones · Riesgos
                    · Modelo recomendado · CTA · Footer
   ============================================================ */

/* ---------- 10 · CASOS DE USO — tabs ---------- */
const CASOS = [
  { id: "inv", tab: "Inversor", icon: "wallet",
    title: "Un inversor compra paneles",
    steps: ["Entra a WE SOLAR y selecciona un parque", "Compra una participación equivalente a paneles", "Firma digitalmente y paga", "Visualiza generación, rendimiento e impacto ambiental"] },
  { id: "coop", tab: "Cooperativa", icon: "handshake",
    title: "Una cooperativa gestiona energía",
    steps: ["Ve generación e inyección a red en vivo", "Administra créditos energéticos", "Reparte ingresos a sus socios", "Descarga reportes mensuales auditables"] },
  { id: "tec", tab: "Técnico", icon: "wrench",
    title: "Un técnico resuelve una alerta",
    steps: ["El sistema detecta baja generación", "Crea automáticamente una orden de trabajo", "Asigna al técnico y mide el SLA", "Actualiza el estado del parque al resolver"] },
  { id: "mkt", tab: "Marketplace", icon: "store",
    title: "Marketplace secundario",
    steps: ["Un inversor quiere salir de su posición", "Publica sus paneles en el marketplace", "Otro usuario los compra", "La plataforma cobra comisión por la operación"] },
  { id: "scale", tab: "Escala", icon: "globe",
    title: "WE SOLAR escala a nuevos parques",
    steps: ["Cada nuevo parque se carga en la plataforma", "Se publica para inversión", "Se conecta a datos reales de generación", "Se administra todo desde el mismo sistema"] },
];

function Casos() {
  const [tab, setTab] = useState(0);
  const c = CASOS[tab];
  return (
    <Section id="casos" alt>
      <div className="op-head">
        <R><Kicker num="09">Ejemplos prácticos</Kicker></R>
        <R as="h2" className="h-1" delay="1" style={{ marginTop: 22, maxWidth: "20ch" }}>
          Cómo se vive la plataforma, <span className="grad-gold">caso por caso</span>
        </R>
      </div>
      <R className="casos" delay="1">
        <div className="casos-tabs" role="tablist">
          {CASOS.map((ca, i) => (
            <button key={ca.id} role="tab" aria-selected={tab === i} type="button"
              className={`casos-tab ${tab === i ? "on" : ""}`} onClick={() => setTab(i)}>
              <Icon name={ca.icon} size={18} />{ca.tab}
            </button>
          ))}
        </div>
        <div className="casos-panel" key={c.id}>
          <div className="casos-panel-l">
            <span className="casos-panel-ic"><Icon name={c.icon} size={30} /></span>
            <h3 className="h-2">{c.title}</h3>
          </div>
          <ol className="casos-steps">
            {c.steps.map((s, i) => (
              <li key={i}><span className="casos-step-n">{i + 1}</span>{s}</li>
            ))}
          </ol>
        </div>
      </R>
    </Section>
  );
}

/* ---------- 11 · CONDICIONES CLAVE — checklist ---------- */
const CONDICIONES = [
  "Fee inicial de desarrollo",
  "Participación en WE SOLAR Digital o derecho de conversión",
  "Revenue share sobre ingresos digitales",
  "Fee mensual de mantenimiento",
  "Propiedad intelectual definida por capas",
  "Exclusividad limitada por zona, tiempo y cumplimiento de hitos",
  "Derecho económico sobre módulos satélite",
  "Acceso a datos necesarios para operación y mejora",
  "Hitos de validación comercial",
  "Mecanismo de salida o recompra",
];

function Condiciones() {
  return (
    <Section id="condiciones">
      <div className="op-head">
        <R><Kicker num="10" green>Condiciones clave</Kicker></R>
        <R as="h2" className="h-1" delay="1" style={{ marginTop: 22, maxWidth: "22ch" }}>
          Lo que GoodApps debería negociar <span className="grad-green">desde el inicio</span>
        </R>
      </div>
      <div className="cond-grid">
        {CONDICIONES.map((t, i) => (
          <R key={t} className="cond-item" delay={(i % 4) + 1}>
            <span className="cond-check"><Icon name="check" size={16} /></span>
            <span>{t}</span>
          </R>
        ))}
      </div>
    </Section>
  );
}

/* ---------- 12 · RIESGOS Y MITIGACIONES ---------- */
const RIESGOS = [
  { r: "Riesgo regulatorio", i: "Alto", m: "Definir la figura legal de token / crédito antes de escalar." },
  { r: "Falta de foco", i: "Medio / alto", m: "Empezar con MVP inversor + parque comunitario." },
  { r: "Datos no reales", i: "Alto", m: "Integrar medidores y reportes auditables." },
  { r: "GoodApps crea valor sin capturarlo", i: "Alto", m: "Pactar equity, revenue share y módulos futuros desde el inicio." },
  { r: "Exclusividad excesiva", i: "Medio", m: "Limitar por tiempo, zona y facturación mínima." },
  { r: "Baja adopción comercial", i: "Medio", m: "Validar demanda antes de construir todos los perfiles." },
];
const impactClass = (i) => i === "Alto" ? "imp--high" : i === "Medio" ? "imp--mid" : "imp--midhigh";

function Riesgos() {
  return (
    <Section id="riesgos" alt>
      <div className="op-head">
        <R><Kicker num="11">Riesgos y mitigaciones</Kicker></R>
        <R as="h2" className="h-1" delay="1" style={{ marginTop: 22, maxWidth: "20ch" }}>
          Cada riesgo, con su <span className="grad-gold">plan de mitigación</span>
        </R>
      </div>
      <div className="risk-table">
        <div className="risk-head" aria-hidden="true"><span>Riesgo</span><span>Impacto</span><span>Mitigación</span></div>
        {RIESGOS.map((row, i) => (
          <R key={row.r} className="risk-row" delay={(i % 3) + 1}>
            <div className="risk-r"><Icon name="shield" size={18} className="risk-ic" />{row.r}</div>
            <div><span className={`imp ${impactClass(row.i)}`}>{row.i}</span></div>
            <div className="risk-m">{row.m}</div>
          </R>
        ))}
      </div>
    </Section>
  );
}

/* ---------- 13 · MODELO RECOMENDADO DE ACUERDO ---------- */
const ACUERDO = [
  { icon: "wallet", t: "Fee inicial reducido" },
  { icon: "gear", t: "Mantenimiento mensual" },
  { icon: "chart", t: "Revenue share sobre ingresos digitales" },
  { icon: "handshake", t: "Opción de equity o participación accionaria" },
  { icon: "ai", t: "Derecho sobre módulos satélite" },
  { icon: "layers", t: "Propiedad intelectual claramente definida" },
  { icon: "shield", t: "Exclusividad limitada y condicionada a hitos" },
];

function ModeloAcuerdo() {
  return (
    <Section id="acuerdo">
      <R className="deal" delay="1">
        <div className="deal-l">
          <Kicker num="12" green>Modelo recomendado de acuerdo</Kicker>
          <h2 className="h-1 deal-title" style={{ marginTop: 22 }}>
            GoodApps desarrolla y opera la <span className="grad-gold">capa digital crítica</span> de WE SOLAR Digital
          </h2>
          <p className="lead" style={{ marginTop: 20, color: "var(--ink-soft)" }}>A cambio de:</p>
          <ul className="deal-list">
            {ACUERDO.map(d => (
              <li key={d.t}><span className="deal-ic"><Icon name={d.icon} size={18} /></span>{d.t}</li>
            ))}
          </ul>
        </div>
        <div className="deal-r">
          <div className="deal-quote">
            <Icon name="bolt" size={28} className="deal-quote-ic" />
            <p className="h-2">
              WE SOLAR construye parques solares. GoodApps construye el <span className="grad-green">sistema</span> que
              los convierte en un negocio digital escalable.
            </p>
          </div>
        </div>
      </R>
    </Section>
  );
}

/* ---------- 14 · CTA + FOOTER ---------- */
function CTA() {
  return (
    <section id="contacto" className="cta" data-screen-label="cta">
      <div className="cta-bg" aria-hidden="true"><div className="cta-grid"></div><div className="cta-glow"></div></div>
      <div className="wrap cta-inner">
        <R><Kicker num="13">Próximo paso</Kicker></R>
        <R as="h2" className="h-display cta-title" delay="1">Definir el acuerdo estratégico<br/>y construir el <span className="grad-gold">MVP</span></R>
        <R as="p" className="lead cta-lead" delay="2">
          El siguiente paso recomendado es una mesa de trabajo entre WE SOLAR y GoodApps para definir
          alcance del MVP, estructura económica, propiedad intelectual, exclusividad, hitos de validación
          y roadmap de desarrollo.
        </R>
        <R as="div" className="cta-actions" delay="3">
          <a className="btn btn--gold" href="#inicio">Iniciar WE SOLAR Digital <Icon name="arrow" size={18} className="arr" /></a>
          <a className="btn btn--ghost" href="#alternativas">Revisar alternativas</a>
        </R>
      </div>
      <footer className="footer">
        <div className="wrap footer-inner">
          <div className="footer-brand">
            <img src={LOGO_WHITE} alt="GoodApps" className="footer-logo" />
            <p className="muted footer-tag">Soluciones + Software · socio tecnológico estratégico de WE SOLAR Digital.</p>
          </div>
          <nav className="footer-nav">
            <a href="#oportunidad">Oportunidad</a>
            <a href="#plataforma">Plataforma</a>
            <a href="#alternativas">Alternativas</a>
            <a href="#roadmap">Roadmap</a>
            <a href="#acuerdo">Acuerdo</a>
          </nav>
        </div>
        <div className="wrap footer-foot">
          <span className="muted">© 2026 GoodApps · Propuesta confidencial para WE SOLAR</span>
          <span className="muted">Documento estratégico · v1.0</span>
        </div>
      </footer>
    </section>
  );
}

Object.assign(window, { Casos, Condiciones, Riesgos, ModeloAcuerdo, CTA });
