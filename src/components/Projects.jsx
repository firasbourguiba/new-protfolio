import CONTENT from '../content.js';
import { Reveal } from './Reveal.jsx';

export default function Projects({ lang, role }) {
  const C = CONTENT.projects;
  const UI = CONTENT.ui;
  const roleObj = CONTENT.roles.find((r) => r.id === role) || CONTENT.roles[0];
  const order = roleObj.projects;
  const isAll = role === 'all';
  const items = [...C.items].sort((a, b) => order.indexOf(a.id) - order.indexOf(b.id));

  return (
    <section className="section wrap" id="projects">
      <Reveal className="marker">
        <span className="num">03</span>
        <span>{C.sectionLabel[lang]}</span>
        <span className="rule" />
      </Reveal>
      <Reveal><h2 className="h-section">{C.title[lang]} <em>{C.titleEmph[lang]}</em></h2></Reveal>
      <Reveal><p className="lead">{C.intro[lang]}</p></Reveal>

      <div className="proj-list">
        {items.map((p, i) => {
          const dim = !isAll && order.indexOf(p.id) >= 3;
          return (
            <Reveal key={p.id} className={`proj-card ${dim ? 'dim' : ''}`} style={{ transitionDelay: `${i * 55}ms` }}>
              <div className="proj-main">
                <div className="proj-target">
                  <span className="crh">↳ {lang === 'fr' ? 'Cible' : 'Target'}:</span>
                  {p.target[lang]}
                </div>
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
                <a href={p.url} target="_blank" rel="noopener noreferrer" className="proj-link" aria-label={`${UI.viewProject[lang]} — ${p.name[lang]}`}>
                  {UI.viewProject[lang]}<span className="arr">↗</span>
                </a>
              </div>
            </Reveal>
          );
        })}
      </div>

      <Reveal className="proj-soon">
        <span className="soon-badge">{C.upcoming.label[lang]}</span>
        <div>
          <div className="sn">{C.upcoming.name[lang]}</div>
          <div className="sd">{C.upcoming.desc[lang]}</div>
          <div className="proj-tags" style={{ marginTop: 12 }}>
            {C.upcoming.tags.map((t) => <span className="tag" key={t}>{t}</span>)}
          </div>
        </div>
        <span className="soon-pill">{UI.soon[lang]} ···</span>
      </Reveal>
    </section>
  );
}
