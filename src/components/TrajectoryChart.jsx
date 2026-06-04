import { useState, useEffect, useRef } from 'react';
import CONTENT from '../content.js';
import { observeReveal } from './Reveal.jsx';

function smoothPath(pts) {
  if (pts.length < 2) return '';
  let d = `M ${pts[0].px} ${pts[0].py}`;
  for (let i = 0; i < pts.length - 1; i++) {
    const p0 = pts[i - 1] || pts[i];
    const p1 = pts[i];
    const p2 = pts[i + 1];
    const p3 = pts[i + 2] || p2;
    const t = 0.16;
    const c1x = p1.px + (p2.px - p0.px) * t;
    const c1y = p1.py + (p2.py - p0.py) * t;
    const c2x = p2.px - (p3.px - p1.px) * t;
    const c2y = p2.py - (p3.py - p1.py) * t;
    d += ` C ${c1x} ${c1y}, ${c2x} ${c2y}, ${p2.px} ${p2.py}`;
  }
  return d;
}

export default function TrajectoryChart({ lang }) {
  const C = CONTENT.trajectory;
  const [hover, setHover] = useState(null);
  const [drawn, setDrawn] = useState(false);
  const ref = useRef(null);
  const lineRef = useRef(null);

  const W = 470, H = 290;
  const padL = 16, padR = 16, padT = 26, padB = 34;
  const xMax = 3.3, yMax = 100;

  const pts = C.points.map((p) => ({
    ...p,
    px: padL + (p.x / xMax) * (W - padL - padR),
    py: padT + (1 - p.y / yMax) * (H - padT - padB),
  }));
  const linePath = smoothPath(pts);
  const areaPath = `${linePath} L ${pts[pts.length - 1].px} ${H - padB} L ${pts[0].px} ${H - padB} Z`;

  useEffect(() => observeReveal(ref.current, () => setDrawn(true)), []);

  useEffect(() => {
    if (drawn && lineRef.current) {
      const len = lineRef.current.getTotalLength();
      lineRef.current.style.transition = 'none';
      lineRef.current.style.strokeDasharray = len;
      lineRef.current.style.strokeDashoffset = len;
      void lineRef.current.getBoundingClientRect();
      lineRef.current.style.transition = 'stroke-dashoffset 2.1s cubic-bezier(0.22,1,0.36,1)';
      lineRef.current.style.strokeDashoffset = '0';
    }
  }, [drawn]);

  return (
    <div className="viz-card reveal" ref={ref}>
      <div className="viz-head">
        <span className="viz-title">{C.title[lang]}</span>
        <span className="viz-ylabel">{C.yLabel[lang]} ↑</span>
      </div>
      <div style={{ position: 'relative' }}>
        <svg className="viz-svg" viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="xMidYMid meet">
          <defs>
            <linearGradient id="areaG" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.28" />
              <stop offset="100%" stopColor="var(--accent)" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="lineG" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="var(--viz-2)" />
              <stop offset="100%" stopColor="var(--accent)" />
            </linearGradient>
          </defs>

          {[0.25, 0.5, 0.75].map((g, i) => (
            <line key={i} x1={padL} x2={W - padR}
              y1={padT + g * (H - padT - padB)} y2={padT + g * (H - padT - padB)}
              stroke="var(--line-soft)" strokeWidth="1" />
          ))}
          <line x1={padL} x2={W - padR} y1={H - padB} y2={H - padB} stroke="var(--line)" strokeWidth="1" />

          <path d={areaPath} fill="url(#areaG)"
            style={{ opacity: drawn ? 1 : 0, transition: 'opacity 1.4s ease 0.6s' }} />
          <path ref={lineRef} d={linePath} fill="none" stroke="url(#lineG)"
            strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />

          {pts.map((p, i) => (
            <g key={i} className="viz-dot"
              onMouseEnter={() => setHover(i)}
              onMouseLeave={() => setHover(null)}
              style={{ opacity: drawn ? 1 : 0, transition: `opacity .4s ease ${0.9 + i * 0.18}s` }}>
              <circle cx={p.px} cy={p.py} r="14" fill="transparent" />
              <circle cx={p.px} cy={p.py} r={hover === i ? 7 : 5}
                fill={i === pts.length - 1 ? 'var(--accent)' : 'var(--bg)'}
                stroke={i === pts.length - 1 ? 'var(--accent)' : 'var(--viz-2)'} strokeWidth="2.4"
                style={{ transition: 'r .2s' }} />
              {i === pts.length - 1 && (
                <circle cx={p.px} cy={p.py} r="5" fill="var(--accent)">
                  <animate attributeName="r" values="5;13;5" dur="2.4s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0.7;0;0.7" dur="2.4s" repeatCount="indefinite" />
                </circle>
              )}
            </g>
          ))}
        </svg>

        {hover !== null && (
          <div className="viz-tip show" style={{
            left: `${(pts[hover].px / W) * 100}%`,
            top: `${(pts[hover].py / H) * 100}%`,
            transform: `translate(${pts[hover].px > W * 0.6 ? '-100%' : '0'}, calc(-100% - 14px))`,
          }}>
            <div className="d">{pts[hover].date}</div>
            <div className="t">{lang === 'fr' ? pts[hover].titleFr : pts[hover].titleEn}</div>
            <div className="x">{lang === 'fr' ? pts[hover].descFr : pts[hover].descEn}</div>
          </div>
        )}
      </div>
      <div className="viz-caption">{C.caption[lang]}</div>
    </div>
  );
}
