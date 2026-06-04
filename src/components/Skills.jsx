import { useState, useRef, useEffect } from 'react';
import CONTENT from '../content.js';
import { Reveal, observeReveal } from './Reveal.jsx';

export default function Skills({ lang, role }) {
  const C = CONTENT.skills;
  const roleObj = CONTENT.roles.find((r) => r.id === role) || CONTENT.roles[0];
  const order = roleObj.skills;
  const isAll = role === 'all';
  const cats = [...C.categories].sort((a, b) => order.indexOf(a.id) - order.indexOf(b.id));
  const [vis, setVis] = useState(false);
  const ref = useRef(null);

  useEffect(() => observeReveal(ref.current, () => setVis(true)), []);

  return (
    <section className="section wrap" id="skills" ref={ref}>
      <Reveal className="marker">
        <span className="num">01</span>
        <span>{C.sectionLabel[lang]}</span>
        <span className="rule" />
      </Reveal>
      <Reveal><h2 className="h-section">{C.title[lang]} <em>{C.titleEmph[lang]}</em></h2></Reveal>
      <Reveal><p className="lead">{C.intro[lang]}</p></Reveal>
      <div className="skills-grid">
        {cats.map((cat, i) => {
          const hot = !isAll && order[0] === cat.id;
          const dim = !isAll && order.indexOf(cat.id) >= 2;
          return (
            <Reveal
              key={cat.id}
              className={`skill-card ${hot ? 'hot' : ''} ${dim ? 'dim' : ''}`}
              style={{ transitionDelay: `${i * 70}ms` }}
            >
              <div className="skill-head">
                <span className="name">{cat.name[lang]}</span>
                <span className="pct">{cat.level}%</span>
              </div>
              <div className="bar">
                <i style={{ width: vis ? `${cat.level}%` : 0, transitionDelay: `${i * 120}ms` }} />
              </div>
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
