/* ============================================================
   Sections 1–3 : Hero · Oportunidad · Proveedor vs Socio
   ============================================================ */

/* ---------- HERO ---------- */
function Hero() {
  return (
    <header id="inicio" className="hero" data-screen-label="hero">
      <div className="hero-bg" aria-hidden="true">
        <div className="hero-grid"></div>
        <div className="hero-glow hero-glow--gold"></div>
        <div className="hero-glow hero-glow--green"></div>
      </div>
      <div className="wrap hero-inner">
        <div className="hero-copy">
          <R as="span" className="chip hero-chip"><Icon name="handshake" size={15} /> Propuesta de sociedad estratégica</R>
          <R as="h1" className="h-display hero-title" delay="1">
            Una alianza para construir el<br/><span className="grad-gold">negocio digital</span> de la <span className="grad-green">energía solar</span>
          </R>
          <R as="p" className="lead hero-lead" delay="2">
            GoodApps propone ser el <strong>socio tecnológico estratégico</strong> de WE SOLAR Digital:
            la plataforma que conecta parques solares, inversores, cooperativas, técnicos, datos,
            pagos y liquidaciones en un ecosistema escalable.
          </R>
          <R as="div" className="hero-cta" delay="3">
            <a className="btn btn--gold" href="#alternativas">Ver propuesta estratégica <Icon name="arrow" size={18} className="arr" /></a>
            <a className="btn btn--ghost" href="#ingresos">Explorar modelo de negocio</a>
          </R>
          <R as="div" className="hero-meta" delay="4">
            <div><span className="hero-meta-k">WE SOLAR aporta</span><span className="hero-meta-v">Parques · clientes · operación</span></div>
            <div className="hero-meta-div"></div>
            <div><span className="hero-meta-k">GoodApps aporta</span><span className="hero-meta-v">Plataforma · producto · IA</span></div>
          </R>
        </div>

        <R as="div" className="hero-visual" delay="2">
          <FlowConsole />
        </R>
      </div>
      <a href="#oportunidad" className="hero-scroll" aria-label="Bajar">
        <span>Recorrer la propuesta</span>
        <Icon name="arrow" size={16} style={{ transform: "rotate(90deg)" }} />
      </a>
    </header>
  );
}

/* The hero "platform flow" console: physical world → platform core → digital outputs */
function FlowConsole() {
  const inputs = [
    { icon: "sun", label: "Parques solares" },
    { icon: "building", label: "Operación física" },
    { icon: "handshake", label: "Cooperativas" },
  ];
  const outputs = [
    { icon: "wallet", label: "Inversores" },
    { icon: "users", label: "Socios" },
    { icon: "wrench", label: "Técnicos" },
    { icon: "data", label: "Datos" },
    { icon: "coins", label: "Liquidaciones" },
  ];
  return (
    <div className="console">
      <div className="console-head">
        <span className="dot"></span><span className="dot"></span><span className="dot"></span>
        <span className="console-title">WE SOLAR Digital · ecosistema</span>
        <span className="console-live"><i></i>en vivo</span>
      </div>
      <div className="console-body">
        <div className="flow-label">WE SOLAR — mundo físico</div>
        <div className="flow-row">
          {inputs.map(n => (
            <div className="flow-node" key={n.label}><Icon name={n.icon} size={20} /><span>{n.label}</span></div>
          ))}
        </div>
        <div className="flow-pipe"><span></span><span></span><span></span></div>
        <div className="flow-core">
          <div className="flow-core-mark"><Icon name="layers" size={22} /></div>
          <div className="flow-core-txt">
            <strong>Capa digital · GoodApps</strong>
            <span>Plataforma · arquitectura · IA · integraciones</span>
          </div>
          <span className="flow-core-pulse"></span>
        </div>
        <div className="flow-pipe flow-pipe--out"><span></span><span></span><span></span></div>
        <div className="flow-label">Negocio digital escalable</div>
        <div className="flow-grid">
          {outputs.map(n => (
            <div className="flow-chip" key={n.label}><Icon name={n.icon} size={16} /><span>{n.label}</span></div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ---------- 2 · LA OPORTUNIDAD ---------- */
function Oportunidad() {
  const cards = [
    { icon: "gear", title: "SaaS solar operativo", body: "Monitoreo, mantenimiento, alertas, gestión de activos, técnicos y reportes en tiempo real.", color: "green" },
    { icon: "chart", title: "Plataforma de inversión solar", body: "Compra de paneles, fracciones comunitarias, rendimiento, billetera digital y marketplace.", color: "gold" },
    { icon: "coins", title: "Liquidación cooperativa", body: "Generación, inyección a red, reparto a socios, créditos energéticos y auditoría transparente.", color: "green" },
  ];
  return (
    <Section id="oportunidad" alt>
      <div className="op-head">
        <R><Kicker num="01">La oportunidad</Kicker></R>
        <R as="h2" className="h-1" delay="1" style={{ marginTop: 22, maxWidth: "20ch" }}>
          La oportunidad no es desarrollar una app. Es construir la <span className="grad-gold">infraestructura digital</span> del negocio solar.
        </R>
        <R as="p" className="lead" delay="2" style={{ marginTop: 24, maxWidth: "60ch" }}>
          WE SOLAR no necesita únicamente una plataforma operativa. Necesita una capa digital que permita
          vender, administrar, medir, liquidar y escalar parques solares comunitarios — conectando inversores,
          cooperativas, operadores, técnicos, clientes anfitriones, contratos, pagos, datos de generación,
          créditos energéticos y reportes.
        </R>
      </div>
      <div className="op-grid">
        {cards.map((c, i) => (
          <R key={c.title} className={`card op-card op-card--${c.color}`} delay={i + 1}>
            <span className={`op-ic op-ic--${c.color}`}><Icon name={c.icon} size={26} /></span>
            <h3 className="h-3">{c.title}</h3>
            <p className="muted" style={{ marginTop: 12 }}>{c.body}</p>
          </R>
        ))}
      </div>
    </Section>
  );
}

/* ---------- 3 · PROVEEDOR vs SOCIO ---------- */
function ProveedorSocio() {
  const proveedor = [
    "GoodApps cobra por horas o por proyecto.",
    "WE SOLAR se queda con todo el upside.",
    "GoodApps es reemplazable.",
    "No hay incentivos de largo plazo.",
    "Cada nuevo módulo se negocia desde cero.",
  ];
  const socio = [
    "GoodApps participa del negocio digital.",
    "Incentivos completamente alineados.",
    "Plataforma que evoluciona continuamente.",
    "Revenue share, equity u opción de conversión.",
    "Los módulos satélite son parte del acuerdo.",
  ];
  return (
    <Section id="modelo">
      <div className="op-head">
        <R><Kicker num="02" green>Posicionamiento</Kicker></R>
        <R as="h2" className="h-1" delay="1" style={{ marginTop: 22, maxWidth: "22ch" }}>
          De proveedor de software a <span className="grad-green">socio tecnológico estratégico</span>
        </R>
      </div>
      <div className="vs">
        <R className="vs-col vs-col--old" delay="1">
          <div className="vs-tag vs-tag--old">Modelo proveedor</div>
          <ul className="vs-list">
            {proveedor.map(t => <li key={t}><Icon name="arrow" size={16} className="vs-x" />{t}</li>)}
          </ul>
        </R>
        <div className="vs-mid" aria-hidden="true"><Icon name="arrow" size={22} /></div>
        <R className="vs-col vs-col--new" delay="2">
          <div className="vs-tag vs-tag--new">Modelo socio estratégico</div>
          <ul className="vs-list">
            {socio.map(t => <li key={t}><Icon name="check" size={16} className="vs-c" />{t}</li>)}
          </ul>
        </R>
      </div>
      <R className="quote-band" delay="2">
        <Icon name="bolt" size={26} className="quote-ic" />
        <p className="h-2 quote-txt">
          GoodApps no vende horas. Aporta la <span className="grad-gold">capa digital</span> que hace que WE SOLAR sea
          escalable, medible, confiable y <span className="grad-green">monetizable</span>.
        </p>
      </R>
    </Section>
  );
}

Object.assign(window, { Hero, Oportunidad, ProveedorSocio });
