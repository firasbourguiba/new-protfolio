/* Experience, Projects, Vision, Contact, Footer */

function Experience({ lang }) {
  const C = window.CONTENT.experience;
  return (
    <section className="section wrap" id="experience">
      <window.Reveal className="marker"><span className="num">02</span><span>{C.sectionLabel[lang]}</span><span className="rule" /></window.Reveal>
      <window.Reveal><h2 className="h-section">{C.title[lang]} <em>{C.titleEmph[lang]}</em></h2></window.Reveal>
      <div className="exp-list">
        {C.items.map((it, i) => (
          <window.Reveal key={i} className="exp-item" style={{ transitionDelay: `${i * 60}ms` }}>
            <div className="exp-period">{it.period[lang]}</div>
            <div className="exp-body">
              <div className="org">{it.org}</div>
              <div className="role">{it.role[lang]} · {it.place}</div>
              {it.impact && <div className="exp-impact">{it.impact[lang]}</div>}
              <ul className="exp-bullets">
                {it.bullets[lang].map((b, j) => <li key={j}>{b}</li>)}
              </ul>
            </div>
          </window.Reveal>
        ))}
      </div>
    </section>
  );
}

function Projects({ lang, role }) {
  const C = window.CONTENT.projects;
  const roleObj = window.CONTENT.roles.find((r) => r.id === role) || window.CONTENT.roles[0];
  const order = roleObj.projects;
  const isAll = role === "all";
  const UI = window.CONTENT.ui;
  const items = [...C.items].sort((a, b) => order.indexOf(a.id) - order.indexOf(b.id));
  return (
    <section className="section wrap" id="projects">
      <window.Reveal className="marker"><span className="num">03</span><span>{C.sectionLabel[lang]}</span><span className="rule" /></window.Reveal>
      <window.Reveal><h2 className="h-section">{C.title[lang]} <em>{C.titleEmph[lang]}</em></h2></window.Reveal>
      <window.Reveal><p className="lead">{C.intro[lang]}</p></window.Reveal>
      <div className="proj-list">
        {items.map((p, i) => {
          const dim = !isAll && order.indexOf(p.id) >= 3;
          return (
            <window.Reveal key={p.id} className={`proj-card ${dim ? "dim" : ""}`} style={{ transitionDelay: `${i * 55}ms` }}>
              <div className="proj-main">
                <div className="proj-target"><span className="crh">↳ {lang === "fr" ? "Cible" : "Target"}:</span>{p.target[lang]}</div>
                <div className="proj-name">{p.name[lang]}</div>
                <div className="proj-kind">{p.kind[lang]}</div>
                <p className="proj-desc">{p.desc[lang]}</p>
                <div className="proj-tags">
                  {p.tags.map((t) => <span className="tag" key={t}>{t}</span>)}
                </div>
              </div>
              <div className="proj-side">
                <div className="proj-metric">
                  <div className="mv">{p.metric.value}</div>
                  <div className="ml">{p.metric.label[lang]}</div>
                </div>
                <a href={p.url} target="_blank" rel="noopener" className="proj-link">
                  {UI.viewProject[lang]}<span className="arr">↗</span>
                </a>
              </div>
            </window.Reveal>
          );
        })}
      </div>

      <window.Reveal className="proj-soon">
        <span className="soon-badge">{C.upcoming.label[lang]}</span>
        <div>
          <div className="sn">{C.upcoming.name[lang]}</div>
          <div className="sd">{C.upcoming.desc[lang]}</div>
          <div className="proj-tags" style={{ marginTop: 12 }}>
            {C.upcoming.tags.map((t) => <span className="tag" key={t}>{t}</span>)}
          </div>
        </div>
        <span className="soon-pill">{window.CONTENT.ui.soon[lang]} ···</span>
      </window.Reveal>
    </section>
  );
}

function Vision({ lang }) {
  const C = window.CONTENT.vision;
  return (
    <section className="section wrap" id="vision">
      <window.Reveal className="marker"><span className="num">04</span><span>{C.sectionLabel[lang]}</span><span className="rule" /></window.Reveal>
      <div className="vis-cols">
        <div>
          <window.Reveal><h2 className="h-section">{C.title[lang]} <em>{C.titleEmph[lang]}</em></h2></window.Reveal>
          <window.Reveal><p className="vision-lead">{C.lead[lang]}</p></window.Reveal>
          <window.Reveal className="vis-quote" style={{ marginTop: 48 }}>
            <div className="qt">“{C.quote[lang]}”</div>
            <div className="qa">— {window.CONTENT.meta.name} · {window.CONTENT.meta.location}</div>
          </window.Reveal>
        </div>
        <div className="principles">
          {C.principles.map((p, i) => (
            <window.Reveal key={i} className="principle" style={{ transitionDelay: `${i * 70}ms` }}>
              <div className="pn">{p.n}</div>
              <div>
                <div className="pt">{p.title[lang]}</div>
                <p className="pb">{p.body[lang]}</p>
                <div className="ptags">
                  {p.tags.map((t) => <span className="tag" key={t}>{t}</span>)}
                </div>
              </div>
            </window.Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact({ lang }) {
  const C = window.CONTENT.contact;
  const L = C.links[lang];
  return (
    <section className="section wrap contact" id="contact">
      <window.Reveal className="marker"><span className="num">05</span><span>{C.sectionLabel[lang]}</span><span className="rule" /></window.Reveal>
      <div className="contact-grid">
        <div>
          <window.Reveal><h2 className="big">{C.title[lang]} <em>{C.titleEmph[lang]}</em></h2></window.Reveal>
          <window.Reveal><p className="contact-body">{C.body[lang]}</p></window.Reveal>
        </div>
        <window.Reveal className="contact-actions">
          <a className="crow" href={`mailto:${C.email}`}>
            <span><span className="ck">Email</span><span className="cv">{C.email}</span></span>
            <span className="arr">→</span>
          </a>
          <a className="crow" href={`tel:${C.phoneRaw}`}>
            <span><span className="ck">{L.call}</span><span className="cv">{C.phone}</span></span>
            <span className="arr">→</span>
          </a>
          <a className="crow" href={C.linkedin} target="_blank" rel="noopener">
            <span><span className="ck">{L.linkedin}</span><span className="cv">bourguiba-firas</span></span>
            <span className="arr">↗</span>
          </a>
        </window.Reveal>
      </div>
    </section>
  );
}

function Footer({ lang }) {
  const M = window.CONTENT.meta;
  return (
    <footer className="foot">
      <span>{M.name.toUpperCase()} — {M.role[lang]}</span>
      <span>{M.location} · {lang === "fr" ? "Paris 2026" : "Paris 2026"}</span>
    </footer>
  );
}

window.Experience = Experience;
window.Projects = Projects;
window.Vision = Vision;
window.Contact = Contact;
window.Footer = Footer;
