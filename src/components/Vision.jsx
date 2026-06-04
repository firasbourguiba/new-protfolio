import CONTENT from '../content.js';
import { Reveal } from './Reveal.jsx';

export default function Vision({ lang }) {
  const C = CONTENT.vision;

  return (
    <section className="section wrap" id="vision">
      <Reveal className="marker">
        <span className="num">04</span>
        <span>{C.sectionLabel[lang]}</span>
        <span className="rule" />
      </Reveal>
      <div className="vis-cols">
        <div>
          <Reveal><h2 className="h-section">{C.title[lang]} <em>{C.titleEmph[lang]}</em></h2></Reveal>
          <Reveal><p className="vision-lead">{C.lead[lang]}</p></Reveal>
          <Reveal className="vis-quote" style={{ marginTop: 48 }}>
            <div className="qt">"{C.quote[lang]}"</div>
            <div className="qa">— {CONTENT.meta.name} · {CONTENT.meta.location}</div>
          </Reveal>
        </div>
        <div className="principles">
          {C.principles.map((p, i) => (
            <Reveal key={i} className="principle" style={{ transitionDelay: `${i * 70}ms` }}>
              <div className="pn">{p.n}</div>
              <div>
                <div className="pt">{p.title[lang]}</div>
                <p className="pb">{p.body[lang]}</p>
                <div className="ptags">
                  {p.tags.map((t) => <span className="tag" key={t}>{t}</span>)}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
