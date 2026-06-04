/* Nav, Hero, Stats, Skills */
const { useState: useStateB, useEffect: useEffectB, useRef: useRefB } = React;

function observeReveal(el, cb, fbMs) {
  if (!el) return () => {};
  let done = false;
  // safety: if transitions are paused/never run, force the element visible
  const guard = () => setTimeout(() => {
    if (el && parseFloat(getComputedStyle(el).opacity) < 0.05) {
      el.style.transition = "none";
      el.style.opacity = "1";
      el.style.transform = "none";
    }
  }, 950);
  let obs;
  const finish = () => {
    if (done) return;
    done = true;
    cb();
    guard();
    if (obs) obs.disconnect();
    clearTimeout(fb);
  };
  obs = new IntersectionObserver(([e]) => {
    if (e.isIntersecting) finish();
  }, { threshold: 0.08, rootMargin: "0px 0px -4% 0px" });
  obs.observe(el);
  const r = el.getBoundingClientRect();
  if (r.top < (window.innerHeight || 800) * 0.96) finish();
  const fb = setTimeout(finish, fbMs || 2600);
  return () => { obs.disconnect(); clearTimeout(fb); };
}
window.observeReveal = observeReveal;

function Reveal({ children, className = "", as = "div", style, ...rest }) {
  const ref = useRefB(null);
  useEffectB(() => observeReveal(ref.current, () => ref.current && ref.current.classList.add("in")), []);
  const Tag = as;
  return <Tag ref={ref} className={`reveal ${className}`} style={style} {...rest}>{children}</Tag>;
}

function Nav({ lang, setLang }) {
  const C = window.CONTENT;
  const [scrolled, setScrolled] = useStateB(false);
  useEffectB(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const items = [
    ["skills", C.nav.skills], ["experience", C.nav.experience],
    ["projects", C.nav.projects], ["vision", C.nav.vision], ["contact", C.nav.contact],
  ];
  return (
    <nav className={`nav ${scrolled ? "scrolled" : ""}`}>
      <a href="#top" className="brand"><span className="dot" />FIRAS B.</a>
      <div className="nav-links">
        {items.map(([id, lbl]) => <a key={id} href={`#${id}`}>{lbl[lang]}</a>)}
      </div>
      <div className="nav-right">
        <div className="lang">
          <button className={lang === "fr" ? "on" : ""} onClick={() => setLang("fr")}>FR</button>
          <button className={lang === "en" ? "on" : ""} onClick={() => setLang("en")}>EN</button>
        </div>
      </div>
    </nav>
  );
}

function Hero({ lang, role, setRole }) {
  const C = window.CONTENT;
  const H = C.hero;
  const roleObj = C.roles.find((r) => r.id === role) || C.roles[0];
  return (
    <header className="hero wrap" id="top">
      <div className="hero-grid">
        <div>
          <div className="avail"><span className="pulse" />{C.meta.available[lang]}</div>
          <h1>
            <span className="name">{C.meta.name}</span>
          </h1>
          <div className="tagline">{C.meta.role[lang]} · {H.eyebrow[lang]}</div>
          <p className="hero-sub">{roleObj.tagline[lang]}</p>
          <p className="hero-sub" style={{ marginTop: 14, color: "var(--faint)" }}>{H.sub[lang]}</p>

          <div className="hero-cta">
            <a href="#projects" className="btn btn-primary">{H.ctaProjects[lang]}<span className="arr">→</span></a>
            <a href="#contact" className="btn btn-ghost">{H.ctaContact[lang]}</a>
          </div>

          <div className="rolebar">
            <div className="q"><span style={{ color: "var(--accent)" }}>◆</span>{H.roleQuestion[lang]}</div>
            <div className="roles">
              {C.roles.map((r) => (
                <button key={r.id}
                  className={`role-chip ${role === r.id ? "on" : ""}`}
                  onClick={() => setRole(r.id)}>
                  {r.label[lang]}
                </button>
              ))}
            </div>
          </div>
        </div>

        <window.TrajectoryChart lang={lang} />
      </div>

      <div className="stats">
        {C.stats.map((s, i) => (
          <div className="stat" key={i}>
            <div className={`v ${s.value.startsWith("+") ? "accent" : ""}`}>{s.value}</div>
            <div className="l">{s.label[lang]}</div>
          </div>
        ))}
      </div>
    </header>
  );
}

function Skills({ lang, role }) {
  const C = window.CONTENT.skills;
  const roleObj = window.CONTENT.roles.find((r) => r.id === role) || window.CONTENT.roles[0];
  const order = roleObj.skills;
  const isAll = role === "all";
  const cats = [...C.categories].sort((a, b) => order.indexOf(a.id) - order.indexOf(b.id));
  const [vis, setVis] = useStateB(false);
  const ref = useRefB(null);
  useEffectB(() => window.observeReveal(ref.current, () => setVis(true)), []);
  return (
    <section className="section wrap" id="skills" ref={ref}>
      <Reveal className="marker"><span className="num">01</span><span>{C.sectionLabel[lang]}</span><span className="rule" /></Reveal>
      <Reveal><h2 className="h-section">{C.title[lang]} <em>{C.titleEmph[lang]}</em></h2></Reveal>
      <Reveal><p className="lead">{C.intro[lang]}</p></Reveal>
      <div className="skills-grid">
        {cats.map((cat, i) => {
          const hot = !isAll && order[0] === cat.id;
          const dim = !isAll && order.indexOf(cat.id) >= 2;
          return (
            <Reveal key={cat.id} className={`skill-card ${hot ? "hot" : ""} ${dim ? "dim" : ""}`} style={{ transitionDelay: `${i * 70}ms` }}>
              <div className="skill-head">
                <span className="name">{cat.name[lang]}</span>
                <span className="pct">{cat.level}%</span>
              </div>
              <div className="bar"><i style={{ width: vis ? `${cat.level}%` : 0, transitionDelay: `${i * 120}ms` }} /></div>
              <div className="skill-tags">
                {cat.tags.map((t) => <span className="tag" key={t}>{t}</span>)}
              </div>
              {cat.note && <div className="skill-note">{cat.note[lang]}</div>}
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}

window.Reveal = Reveal;
window.Nav = Nav;
window.Hero = Hero;
window.Skills = Skills;
