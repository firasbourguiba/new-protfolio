/* App shell — global state: lang + role + tweaks */
const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "accent": "#e7b85a",
  "display": "serif",
  "grain": true
}/*EDITMODE-END*/;

const ACCENTS = ["#e7b85a", "#6fd6c6", "#b3a0e8", "#e8896a"];

function App() {
  const [t, setTweak] = window.useTweaks(TWEAK_DEFAULTS);
  const [lang, setLangRaw] = React.useState(() => localStorage.getItem("fb_lang") || "fr");
  const [role, setRoleRaw] = React.useState(() => localStorage.getItem("fb_role") || "all");
  const [flash, setFlash] = React.useState(false);
  const firstRole = React.useRef(true);

  const setLang = (l) => { setLangRaw(l); localStorage.setItem("fb_lang", l); };
  const setRole = (r) => { setRoleRaw(r); localStorage.setItem("fb_role", r); };

  React.useEffect(() => { document.documentElement.lang = lang; }, [lang]);

  // apply tweaks -> CSS vars / classes
  React.useEffect(() => {
    document.documentElement.style.setProperty("--accent", t.accent);
  }, [t.accent]);
  React.useEffect(() => {
    document.documentElement.style.setProperty(
      "--serif",
      t.display === "grotesk" ? "'Hanken Grotesk', system-ui, sans-serif" : "'Instrument Serif', Georgia, serif"
    );
  }, [t.display]);
  React.useEffect(() => {
    document.body.classList.toggle("no-grain", !t.grain);
  }, [t.grain]);

  React.useEffect(() => {
    if (firstRole.current) { firstRole.current = false; return; }
    if (role === "all") return;
    setFlash(true);
    const tm = setTimeout(() => setFlash(false), 2200);
    return () => clearTimeout(tm);
  }, [role]);

  return (
    <React.Fragment>
      <window.Nav lang={lang} setLang={setLang} />
      <window.Hero lang={lang} role={role} setRole={setRole} />
      <window.Skills lang={lang} role={role} />
      <window.Experience lang={lang} />
      <window.Projects lang={lang} role={role} />
      <window.Vision lang={lang} />
      <window.Contact lang={lang} />
      <window.Footer lang={lang} />

      <div className={`flash ${flash ? "show" : ""}`}>
        <span className="dot" />{window.CONTENT.ui.reorganised[lang]}
      </div>

      <window.TweaksPanel title="Tweaks">
        <window.TweakSection label={lang === "fr" ? "Identité visuelle" : "Visual identity"} />
        <window.TweakColor label={lang === "fr" ? "Accent" : "Accent"} value={t.accent}
          options={ACCENTS} onChange={(v) => setTweak("accent", v)} />
        <window.TweakRadio label={lang === "fr" ? "Titres" : "Headlines"} value={t.display}
          options={["serif", "grotesk"]} onChange={(v) => setTweak("display", v)} />
        <window.TweakToggle label={lang === "fr" ? "Grain cinéma" : "Film grain"} value={t.grain}
          onChange={(v) => setTweak("grain", v)} />
        <window.TweakSection label={lang === "fr" ? "Langue" : "Language"} />
        <window.TweakRadio label={lang === "fr" ? "Langue" : "Language"} value={lang}
          options={["fr", "en"]} onChange={(v) => setLang(v)} />
      </window.TweaksPanel>
    </React.Fragment>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
