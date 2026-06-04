import CONTENT from '../content.js';
import { Reveal } from './Reveal.jsx';

export default function Contact({ lang }) {
  const C = CONTENT.contact;
  const L = C.links[lang];

  return (
    <section className="section wrap contact" id="contact">
      <Reveal className="marker">
        <span className="num">05</span>
        <span>{C.sectionLabel[lang]}</span>
        <span className="rule" />
      </Reveal>
      <div className="contact-grid">
        <div>
          <Reveal><h2 className="big">{C.title[lang]} <em>{C.titleEmph[lang]}</em></h2></Reveal>
          <Reveal><p className="contact-body">{C.body[lang]}</p></Reveal>
        </div>
        <Reveal className="contact-actions">
          <a className="crow" href={`mailto:${C.email}`}>
            <span>
              <span className="ck">Email</span>
              <span className="cv">{C.email}</span>
            </span>
            <span className="arr">→</span>
          </a>
          <a className="crow" href={`tel:${C.phoneRaw}`}>
            <span>
              <span className="ck">{L.call}</span>
              <span className="cv">{C.phone}</span>
            </span>
            <span className="arr">→</span>
          </a>
          <a className="crow" href={C.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <span>
              <span className="ck">{L.linkedin}</span>
              <span className="cv">bourguiba-firas</span>
            </span>
            <span className="arr">↗</span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
