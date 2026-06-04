import CONTENT from '../content.js';
import { Reveal } from './Reveal.jsx';

export default function Experience({ lang }) {
  const C = CONTENT.experience;

  return (
    <section className="section wrap" id="experience">
      <Reveal className="marker">
        <span className="num">02</span>
        <span>{C.sectionLabel[lang]}</span>
        <span className="rule" />
      </Reveal>
      <Reveal><h2 className="h-section">{C.title[lang]} <em>{C.titleEmph[lang]}</em></h2></Reveal>
      <div className="exp-list">
        {C.items.map((it, i) => (
          <Reveal key={i} className="exp-item" style={{ transitionDelay: `${i * 60}ms` }}>
            <div className="exp-period">{it.period[lang]}</div>
            <div className="exp-body">
              <div className="org">{it.org}</div>
              <div className="role">{it.role[lang]} · {it.place}</div>
              {it.impact && <div className="exp-impact">{it.impact[lang]}</div>}
              <ul className="exp-bullets">
                {it.bullets[lang].map((b, j) => <li key={j}>{b}</li>)}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
