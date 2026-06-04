import CONTENT from '../content.js';

export default function Footer({ lang }) {
  const M = CONTENT.meta;
  return (
    <footer className="foot">
      <span>{M.name.toUpperCase()} — {M.role[lang]}</span>
      <span>{M.location} · Paris 2026</span>
    </footer>
  );
}
