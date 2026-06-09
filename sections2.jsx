/* ============================================================
   Sections 4–6 : Plataforma multilateral (ecosistema interactivo)
                  · Quién aporta qué · Fuentes de ingresos
   ============================================================ */

/* ---------- 4 · PLATAFORMA MULTILATERAL — diagrama interactivo ---------- */
const ECO_NODES = [
  { id: "inversores", icon: "wallet", label: "Inversores", desc: "Compran fracciones de paneles, siguen su rendimiento y operan su billetera digital." },
  { id: "cooperativas", icon: "handshake", label: "Cooperativas", desc: "Gestionan generación, reparto a socios y créditos energéticos desde la plataforma." },
  { id: "operadores", icon: "building", label: "Operadores", desc: "Administran activos, contratos y la operación comercial de cada parque." },
  { id: "tecnicos", icon: "wrench", label: "Técnicos", desc: "Reciben órdenes de trabajo, resuelven alertas y actualizan el estado de los parques." },
  { id: "anfitriones", icon: "users", label: "Clientes anfitriones", desc: "Aportan techos y predios; visualizan generación e impacto en tiempo real." },
  { id: "parques", icon: "sun", label: "Parques solares", desc: "Activos físicos conectados a datos reales de generación e inyección a red." },
  { id: "datos", icon: "data", label: "Datos energéticos", desc: "Medición, telemetría y reportes auditables que alimentan toda la plataforma." },
  { id: "pagos", icon: "coins", label: "Pagos y liquidaciones", desc: "Cobros, reparto automático, créditos y conciliación entre todos los actores." },
];

function Ecosistema() {
  const [active, setActive] = useState("parques");
  const R_PCT = 38;
  const node = ECO_NODES.find(n => n.id === active);

  return (
    <Section id="plataforma" alt>
      <div className="op-head op-head--center">
        <R><Kicker num="03">Plataforma multilateral</Kicker></R>
        <R as="h2" className="h-1" delay="1" style={{ marginTop: 22, maxWidth: "18ch", marginInline: "auto" }}>
          WE SOLAR Digital conecta a <span className="grad-gold">todos los actores</span> del negocio solar
        </R>
        <R as="p" className="lead" delay="2" style={{ marginTop: 22, maxWidth: "58ch", marginInline: "auto" }}>
          WE SOLAR construye y opera parques solares. GoodApps construye y mantiene la plataforma que convierte
          esos parques en un negocio digital escalable. <span className="muted">Tocá cada nodo para explorar.</span>
        </R>
      </div>

      <R className="eco-wrap" delay="2">
        <div className="eco-diagram">
          <svg className="eco-lines" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
            {ECO_NODES.map((n, i) => {
              const a = (Math.PI * 2 * i) / ECO_NODES.length - Math.PI / 2;
              const x = 50 + R_PCT * Math.cos(a);
              const y = 50 + R_PCT * Math.sin(a);
              return <line key={n.id} x1="50" y1="50" x2={x} y2={y}
                className={`eco-line ${active === n.id ? "on" : ""}`} />;
            })}
          </svg>

          <button className="eco-core" type="button" aria-label="GoodApps">
            <img src={LOGO_WHITE} alt="GoodApps" className="eco-core-logo" />
            <span className="eco-core-sub">núcleo tecnológico</span>
            <span className="eco-core-ring"></span>
          </button>

          {ECO_NODES.map((n, i) => {
            const a = (Math.PI * 2 * i) / ECO_NODES.length - Math.PI / 2;
            const x = 50 + R_PCT * Math.cos(a);
            const y = 50 + R_PCT * Math.sin(a);
            return (
              <button key={n.id} type="button"
                className={`eco-node ${active === n.id ? "on" : ""}`}
                style={{ left: `${x}%`, top: `${y}%` }}
                onClick={() => setActive(n.id)}
                onMouseEnter={() => setActive(n.id)}>
                <Icon name={n.icon} size={20} />
                <span>{n.label}</span>
              </button>
            );
          })}
        </div>

        <div className="eco-info">
          <span className="eco-info-tag"><Icon name={node.icon} size={16} /> {node.label}</span>
          <p className="eco-info-desc">{node.desc}</p>
          <div className="eco-info-foot">
            <span className="muted">WE SOLAR <em>opera</em> · GoodApps <em>conecta</em></span>
          </div>
        </div>
      </R>
    </Section>
  );
}

/* ---------- 5 · QUIÉN APORTA QUÉ ---------- */
const APORTES = [
  {
    actor: "WE SOLAR", tone: "gold", icon: "sun",
    aporta: "Parques solares, clientes, operación, marca, conocimiento energético y relaciones con cooperativas.",
    recibe: "Escalabilidad, canal digital, monetización y control operativo.",
  },
  {
    actor: "GoodApps", tone: "green", icon: "layers",
    aporta: "Plataforma, arquitectura, UX/UI, IA, integraciones, soporte, mantenimiento y roadmap tecnológico.",
    recibe: "Fee inicial, revenue share, opción de equity y participación en módulos futuros.",
  },
  {
    actor: "WE SOLAR Digital", tone: "teal", icon: "globe",
    aporta: "Unidad de negocio que explota la plataforma, datos, marketplace, licencias y servicios digitales.",
    recibe: "Ingresos propios y valorización del activo digital.",
  },
];

function QuienAporta() {
  return (
    <Section id="aportes">
      <div className="op-head">
        <R><Kicker num="04" green>Quién aporta qué</Kicker></R>
        <R as="h2" className="h-1" delay="1" style={{ marginTop: 22, maxWidth: "20ch" }}>
          Cada parte aporta lo que mejor sabe hacer — y <span className="grad-green">recibe en consecuencia</span>
        </R>
      </div>
      <div className="aporta-grid">
        <div className="aporta-head" aria-hidden="true">
          <span>Actor</span><span>Aporta</span><span>Recibe</span>
        </div>
        {APORTES.map((a, i) => (
          <R key={a.actor} className={`aporta-row aporta-row--${a.tone}`} delay={i + 1}>
            <div className="aporta-actor">
              <span className={`aporta-ic aporta-ic--${a.tone}`}><Icon name={a.icon} size={22} /></span>
              <strong>{a.actor}</strong>
            </div>
            <div className="aporta-cell"><span className="aporta-lbl">Aporta</span>{a.aporta}</div>
            <div className="aporta-cell"><span className="aporta-lbl">Recibe</span>{a.recibe}</div>
          </R>
        ))}
      </div>
    </Section>
  );
}

/* ---------- 6 · FUENTES DE INGRESOS ---------- */
const INGRESOS = [
  { n: "01", icon: "sun", title: "Venta primaria de paneles", body: "Comisión o margen sobre paneles vendidos digitalmente.", plat: true },
  { n: "02", icon: "chart", title: "Crowdfunding solar", body: "Comisión por capital captado para financiar parques comunitarios.", plat: true },
  { n: "03", icon: "coins", title: "Tokens o créditos energéticos", body: "Fee por retiro, conversión, administración o spread.", plat: true },
  { n: "04", icon: "gear", title: "SaaS de operación y mantenimiento", body: "Abono por parque, usuario, cooperativa o MW gestionado.", plat: true },
  { n: "05", icon: "handshake", title: "Liquidación cooperativa", body: "Comisión por administrar reparto de energía, créditos o ingresos.", plat: false },
  { n: "06", icon: "store", title: "Marketplace secundario", body: "Comisión por reventa o alquiler de paneles entre usuarios.", plat: true },
  { n: "07", icon: "ai", title: "Módulos satélite", body: "CRM, app técnica, API de medidores, reportes, IA, contabilidad, simuladores.", plat: true },
];

function Ingresos() {
  return (
    <Section id="ingresos" alt>
      <div className="op-head">
        <R><Kicker num="05">Fuentes de ingresos</Kicker></R>
        <R as="h2" className="h-1" delay="1" style={{ marginTop: 22, maxWidth: "20ch" }}>
          Cómo monetiza <span className="grad-gold">WE SOLAR Digital</span>
        </R>
        <R as="p" className="lead" delay="2" style={{ marginTop: 20, maxWidth: "56ch" }}>
          Siete corrientes de ingreso que crecen con la plataforma. <span className="ing-key"><i></i> dependen directamente de la capa digital</span>
        </R>
      </div>
      <div className="ing-grid">
        {INGRESOS.map((c, i) => (
          <R key={c.n} className={`card ing-card ${c.plat ? "ing-card--plat" : ""}`} delay={(i % 4) + 1}>
            <div className="ing-top">
              <span className="ing-ic"><Icon name={c.icon} size={22} /></span>
              <span className="ing-n">{c.n}</span>
            </div>
            <h3 className="ing-title">{c.title}</h3>
            <p className="muted ing-body">{c.body}</p>
            {c.plat && <span className="ing-flag"><i></i>Plataforma GoodApps</span>}
          </R>
        ))}
        <R className="ing-note" delay="2">
          <Icon name="bolt" size={22} className="ing-note-ic" />
          <p>GoodApps debería participar en las fuentes de ingreso que <strong>dependen directamente de la plataforma digital</strong>.</p>
        </R>
      </div>
    </Section>
  );
}

Object.assign(window, { Ecosistema, QuienAporta, Ingresos });
