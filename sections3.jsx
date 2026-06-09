/* ============================================================
   Sections 7–9 : 5 Alternativas (acordeón) · Recomendación
                  · Roadmap (timeline navegable)
   ============================================================ */

/* ---------- 7 · LAS 5 ALTERNATIVAS — acordeón ---------- */
const ALTS = [
  {
    n: "01", title: "Socio tecnológico con equity", icon: "handshake",
    body: "GoodApps desarrolla la plataforma central y los módulos satélite a cambio de un fee inicial reducido, participación accionaria y mantenimiento mensual.",
    ej: "GoodApps construye el flujo de inversión solar y recibe participación en WE SOLAR Digital.",
  },
  {
    n: "02", title: "Digital Operating Partner con revenue share", icon: "chart",
    body: "GoodApps participa de los ingresos generados por la plataforma: venta de paneles, tokens, abonos SaaS, marketplace y módulos.",
    ej: "Cada operación digital cerrada genera una comisión compartida.",
  },
  {
    n: "03", title: "Nueva sociedad conjunta — WE SOLAR Digital", icon: "globe",
    body: "WE SOLAR y GoodApps crean una unidad o sociedad donde WE SOLAR aporta el negocio físico y GoodApps la plataforma digital.",
    ej: "WE SOLAR construye parques; WE SOLAR Digital administra inversores, datos, pagos y liquidaciones.",
  },
  {
    n: "04", title: "SaaS white-label", icon: "layers",
    body: "GoodApps desarrolla una plataforma propia de comunidades solares y WE SOLAR la usa como primer socio implementador.",
    ej: "“WE SOLAR Platform powered by GoodApps”.",
  },
  {
    n: "05", title: "Entrada por fases con opción de equity", icon: "shield",
    body: "GoodApps desarrolla por etapas, validando hitos antes de escalar, con derecho a convertir parte del desarrollo en equity o revenue share.",
    ej: "MVP inicial → integraciones reales → conversión societaria.",
    rec: true,
  },
];

function Alternativas() {
  const [open, setOpen] = useState(2);
  return (
    <Section id="alternativas">
      <div className="op-head">
        <R><Kicker num="06" green>Alternativas estratégicas</Kicker></R>
        <R as="h2" className="h-1" delay="1" style={{ marginTop: 22, maxWidth: "20ch" }}>
          Cinco caminos para estructurar la <span className="grad-green">sociedad</span>
        </R>
      </div>
      <div className="acc">
        {ALTS.map((a, i) => {
          const isOpen = open === i;
          return (
            <R key={a.n} className={`acc-item ${isOpen ? "open" : ""}`} delay={(i % 3) + 1}>
              <button className="acc-bar" type="button" aria-expanded={isOpen}
                onClick={() => setOpen(isOpen ? -1 : i)}>
                <span className="acc-n">{a.n}</span>
                <span className="acc-ic"><Icon name={a.icon} size={20} /></span>
                <span className="acc-title">{a.title}</span>
                {a.rec && <span className="acc-rec">Recomendada</span>}
                <span className="acc-toggle" aria-hidden="true"><Icon name="arrow" size={18} /></span>
              </button>
              <div className="acc-panel" style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}>
                <div className="acc-panel-in">
                  <p className="acc-body">{a.body}</p>
                  <div className="acc-ej">
                    <span className="acc-ej-lbl">Ejemplo práctico</span>
                    <p>{a.ej}</p>
                  </div>
                </div>
              </div>
            </R>
          );
        })}
      </div>
    </Section>
  );
}

/* ---------- 8 · RECOMENDACIÓN PRINCIPAL ---------- */
const REC_PHASES = [
  { p: "Fase 1", t: "MVP transaccional" },
  { p: "Fase 2", t: "Integraciones reales" },
  { p: "Fase 3", t: "Conversión societaria / revenue share" },
  { p: "Fase 4", t: "Plataforma multilateral" },
  { p: "Fase 5", t: "Escalabilidad y white-label" },
];

function Recomendacion() {
  return (
    <Section id="recomendacion" alt>
      <R className="rec-box" delay="1">
        <div className="rec-glow" aria-hidden="true"></div>
        <div className="rec-top">
          <Kicker num="07">Recomendación principal</Kicker>
          <h2 className="h-1 rec-title">
            Combinar <span className="grad-gold">sociedad conjunta</span> + <span className="grad-green">entrada por fases</span>
          </h2>
          <p className="lead rec-lead">
            Crear una unidad digital separada — <strong>WE SOLAR Digital</strong> — avanzando por fases, con hitos claros
            y el derecho de GoodApps a convertir parte del desarrollo en participación o revenue share.
          </p>
        </div>
        <div className="rec-phases">
          {REC_PHASES.map((ph, i) => (
            <React.Fragment key={ph.p}>
              <div className="rec-phase">
                <span className="rec-phase-dot">{i + 1}</span>
                <span className="rec-phase-p">{ph.p}</span>
                <span className="rec-phase-t">{ph.t}</span>
              </div>
              {i < REC_PHASES.length - 1 && <span className="rec-phase-arr" aria-hidden="true"><Icon name="arrow" size={16} /></span>}
            </React.Fragment>
          ))}
        </div>
      </R>
    </Section>
  );
}

/* ---------- 9 · ROADMAP — timeline navegable ---------- */
const ROADMAP = [
  { p: "Fase 1", title: "Validación comercial y legal", icon: "shield",
    items: ["Definir figura legal de token / crédito", "Estructura contractual", "Simulador financiero", "Landing pública", "Captación de interesados"] },
  { p: "Fase 2", title: "MVP transaccional", icon: "wallet",
    items: ["Registro de inversor", "Selección de panel", "Contrato digital", "Pago o reserva", "Dashboard del inversor", "Panel administrador"] },
  { p: "Fase 3", title: "Operación real", icon: "data",
    items: ["Integración con medidores", "Datos reales de generación", "Tarifas", "Liquidaciones", "Reportes auditables"] },
  { p: "Fase 4", title: "Plataforma multilateral", icon: "network",
    items: ["Perfil cooperativa", "Perfil técnico", "Órdenes de trabajo", "Alertas", "IA", "Mantenimiento predictivo"] },
  { p: "Fase 5", title: "Escalabilidad", icon: "globe",
    items: ["Marketplace secundario", "App móvil", "APIs", "White-label", "Expansión geográfica", "Módulos para terceros"] },
];

function Roadmap() {
  const [active, setActive] = useState(0);
  const phase = ROADMAP[active];
  return (
    <Section id="roadmap">
      <div className="op-head">
        <R><Kicker num="08" green>Roadmap de implementación</Kicker></R>
        <R as="h2" className="h-1" delay="1" style={{ marginTop: 22, maxWidth: "18ch" }}>
          De la validación a la <span className="grad-green">escala</span>, en cinco fases
        </R>
      </div>

      <R className="rm" delay="1">
        <div className="rm-track" role="tablist" aria-label="Fases del roadmap">
          <div className="rm-line" aria-hidden="true"><span style={{ width: `${(active / (ROADMAP.length - 1)) * 100}%` }}></span></div>
          {ROADMAP.map((ph, i) => (
            <button key={ph.p} role="tab" aria-selected={active === i} type="button"
              className={`rm-step ${active === i ? "on" : ""} ${i < active ? "done" : ""}`}
              onClick={() => setActive(i)}>
              <span className="rm-dot"><Icon name={i < active ? "check" : ph.icon} size={18} /></span>
              <span className="rm-p">{ph.p}</span>
            </button>
          ))}
        </div>

        <div className="rm-panel" key={active}>
          <div className="rm-panel-head">
            <span className="rm-panel-ic"><Icon name={phase.icon} size={26} /></span>
            <div>
              <span className="rm-panel-p">{phase.p}</span>
              <h3 className="h-2">{phase.title}</h3>
            </div>
          </div>
          <ul className="rm-items">
            {phase.items.map(it => (
              <li key={it}><Icon name="check" size={16} className="rm-check" />{it}</li>
            ))}
          </ul>
        </div>
      </R>
    </Section>
  );
}

Object.assign(window, { Alternativas, Recomendacion, Roadmap });
