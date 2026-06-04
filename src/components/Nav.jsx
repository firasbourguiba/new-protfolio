import { useState, useEffect } from 'react';
import CONTENT from '../content.js';

export default function Nav({ lang, setLang }) {
  const C = CONTENT;
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const items = [
    ['skills', C.nav.skills],
    ['experience', C.nav.experience],
    ['projects', C.nav.projects],
    ['vision', C.nav.vision],
    ['contact', C.nav.contact],
  ];

  return (
    <nav className={`nav ${scrolled ? 'scrolled' : ''}`} aria-label="Navigation principale">
      <a href="#top" className="brand">
        <span className="dot" />FIRAS B.
      </a>
      <div className="nav-links">
        {items.map(([id, lbl]) => (
          <a key={id} href={`#${id}`}>{lbl[lang]}</a>
        ))}
      </div>
      <div className="nav-right">
        <div className="lang" role="group" aria-label="Langue">
          <button
            className={lang === 'fr' ? 'on' : ''}
            onClick={() => setLang('fr')}
            aria-pressed={lang === 'fr'}
          >FR</button>
          <button
            className={lang === 'en' ? 'on' : ''}
            onClick={() => setLang('en')}
            aria-pressed={lang === 'en'}
          >EN</button>
        </div>
      </div>
    </nav>
  );
}
