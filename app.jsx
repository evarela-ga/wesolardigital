/* ============================================================
   App shell : nav + compose + scroll progress + reveal
   ============================================================ */

const NAV = [
  { id: "oportunidad", label: "Oportunidad" },
  { id: "plataforma", label: "Plataforma" },
  { id: "ingresos", label: "Ingresos" },
  { id: "alternativas", label: "Alternativas" },
  { id: "roadmap", label: "Roadmap" },
  { id: "acuerdo", label: "Acuerdo" },
];

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      setProgress(max > 0 ? (window.scrollY / max) * 100 : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`nav ${scrolled ? "nav--scrolled" : ""}`}>
      <div className="wrap nav-inner">
        <a href="#inicio" className="nav-brand" aria-label="GoodApps">
          <img src={LOGO_WHITE} alt="GoodApps" className="nav-logo" />
          <span className="nav-x">×</span>
          <span className="nav-we">WE SOLAR</span>
        </a>
        <div className={`nav-links ${open ? "open" : ""}`}>
          {NAV.map(n => (
            <a key={n.id} href={`#${n.id}`} onClick={() => setOpen(false)}>{n.label}</a>
          ))}
        </div>
        <div className="nav-right">
          <a href="#contacto" className="btn btn--gold nav-cta">Iniciar proyecto</a>
          <button className={`nav-burger ${open ? "on" : ""}`} type="button" aria-label="Menú"
            onClick={() => setOpen(o => !o)}>
            <span></span><span></span><span></span>
          </button>
        </div>
      </div>
      <div className="nav-progress" style={{ width: `${progress}%` }}></div>
    </nav>
  );
}

function App() {
  useReveal();
  return (
    <React.Fragment>
      <Nav />
      <main>
        <Hero />
        <Oportunidad />
        <ProveedorSocio />
        <Ecosistema />
        <QuienAporta />
        <Ingresos />
        <Alternativas />
        <Recomendacion />
        <Roadmap />
        <Casos />
        <Condiciones />
        <Riesgos />
        <ModeloAcuerdo />
        <CTA />
      </main>
    </React.Fragment>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
