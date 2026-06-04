import { useState, useEffect, useRef } from 'react';
import CONTENT from './content.js';
import { useTweaks } from './hooks/useTweaks.js';
import Nav from './components/Nav.jsx';
import Hero from './components/Hero.jsx';
import Skills from './components/Skills.jsx';
import Experience from './components/Experience.jsx';
import Projects from './components/Projects.jsx';
import Vision from './components/Vision.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import {
  TweaksPanel,
  TweakSection,
  TweakColor,
  TweakRadio,
  TweakToggle,
} from './components/TweaksPanel.jsx';

const TWEAK_DEFAULTS = { accent: '#e7b85a', display: 'serif', grain: true };
const ACCENTS = ['#e7b85a', '#6fd6c6', '#b3a0e8', '#e8896a'];

export default function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const [lang, setLangRaw] = useState(() => localStorage.getItem('fb_lang') || 'fr');
  const [role, setRoleRaw] = useState(() => localStorage.getItem('fb_role') || 'all');
  const [flash, setFlash] = useState(false);
  const firstRole = useRef(true);

  const setLang = (l) => { setLangRaw(l); localStorage.setItem('fb_lang', l); };
  const setRole = (r) => { setRoleRaw(r); localStorage.setItem('fb_role', r); };

  useEffect(() => { document.documentElement.lang = lang; }, [lang]);

  useEffect(() => {
    document.documentElement.style.setProperty('--accent', t.accent);
  }, [t.accent]);

  useEffect(() => {
    document.documentElement.style.setProperty(
      '--serif',
      t.display === 'grotesk' ? "'Hanken Grotesk', system-ui, sans-serif" : "'Instrument Serif', Georgia, serif"
    );
  }, [t.display]);

  useEffect(() => {
    document.body.classList.toggle('no-grain', !t.grain);
  }, [t.grain]);

  useEffect(() => {
    if (firstRole.current) { firstRole.current = false; return; }
    if (role === 'all') return;
    setFlash(true);
    const tm = setTimeout(() => setFlash(false), 2200);
    return () => clearTimeout(tm);
  }, [role]);

  return (
    <>
      <Nav lang={lang} setLang={setLang} />
      <Hero lang={lang} role={role} setRole={setRole} />
      <Skills lang={lang} role={role} />
      <Experience lang={lang} />
      <Projects lang={lang} role={role} />
      <Vision lang={lang} />
      <Contact lang={lang} />
      <Footer lang={lang} />

      <div className={`flash ${flash ? 'show' : ''}`}>
        <span className="dot" />{CONTENT.ui.reorganised[lang]}
      </div>

      <TweaksPanel title="Tweaks">
        <TweakSection label={lang === 'fr' ? 'Identité visuelle' : 'Visual identity'} />
        <TweakColor label="Accent" value={t.accent} options={ACCENTS} onChange={(v) => setTweak('accent', v)} />
        <TweakRadio label={lang === 'fr' ? 'Titres' : 'Headlines'} value={t.display}
          options={['serif', 'grotesk']} onChange={(v) => setTweak('display', v)} />
        <TweakToggle label={lang === 'fr' ? 'Grain cinéma' : 'Film grain'} value={t.grain}
          onChange={(v) => setTweak('grain', v)} />
        <TweakSection label={lang === 'fr' ? 'Langue' : 'Language'} />
        <TweakRadio label={lang === 'fr' ? 'Langue' : 'Language'} value={lang}
          options={['fr', 'en']} onChange={(v) => setLang(v)} />
      </TweaksPanel>
    </>
  );
}
