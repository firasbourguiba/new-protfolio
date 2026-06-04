import CONTENT from '../content.js';
import TrajectoryChart from './TrajectoryChart.jsx';

export default function Hero({ lang, role, setRole }) {
  const C = CONTENT;
  const H = C.hero;
  const roleObj = C.roles.find((r) => r.id === role) || C.roles[0];

  return (
    <header className="hero wrap" id="top">
      <div className="hero-grid">
        <div>
          <div className="avail">
            <span className="pulse" />
            {C.meta.available[lang]}
          </div>
          <h1>
            <span className="name">{C.meta.name}</span>
          </h1>
          <div className="tagline">{C.meta.role[lang]} · {H.eyebrow[lang]}</div>
          <p className="hero-sub">{roleObj.tagline[lang]}</p>
          <p className="hero-sub" style={{ marginTop: 14, color: 'var(--faint)' }}>{H.sub[lang]}</p>

          <div className="hero-cta">
            <a href="#projects" className="btn btn-primary">
              {H.ctaProjects[lang]}<span className="arr">→</span>
            </a>
            <a href="#contact" className="btn btn-ghost">{H.ctaContact[lang]}</a>
          </div>

          <div className="rolebar">
            <div className="q">
              <span style={{ color: 'var(--accent)' }}>◆</span>
              {H.roleQuestion[lang]}
            </div>
            <div className="roles" role="group" aria-label={H.roleQuestion[lang]}>
              {C.roles.map((r) => (
                <button
                  key={r.id}
                  className={`role-chip ${role === r.id ? 'on' : ''}`}
                  onClick={() => setRole(r.id)}
                  aria-pressed={role === r.id}
                >
                  {r.label[lang]}
                </button>
              ))}
            </div>
          </div>
        </div>

        <TrajectoryChart lang={lang} />
      </div>

      <div className="stats">
        {C.stats.map((s, i) => (
          <div className="stat" key={i}>
            <div className={`v ${s.value.startsWith('+') ? 'accent' : ''}`}>{s.value}</div>
            <div className="l">{s.label[lang]}</div>
          </div>
        ))}
      </div>
    </header>
  );
}
