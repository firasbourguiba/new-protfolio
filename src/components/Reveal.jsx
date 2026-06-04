import { useRef, useEffect } from 'react';

function observeReveal(el, cb) {
  if (!el) return () => {};
  let done = false;
  let fb;
  const guard = () => setTimeout(() => {
    if (el && parseFloat(getComputedStyle(el).opacity) < 0.05) {
      el.style.transition = 'none';
      el.style.opacity = '1';
      el.style.transform = 'none';
    }
  }, 950);
  let obs;
  const finish = () => {
    if (done) return;
    done = true;
    cb();
    guard();
    if (obs) obs.disconnect();
    clearTimeout(fb);
  };
  obs = new IntersectionObserver(([e]) => {
    if (e.isIntersecting) finish();
  }, { threshold: 0.08, rootMargin: '0px 0px -4% 0px' });
  obs.observe(el);
  const r = el.getBoundingClientRect();
  if (r.top < (window.innerHeight || 800) * 0.96) finish();
  fb = setTimeout(finish, 2600);
  return () => { obs.disconnect(); clearTimeout(fb); };
}

export function Reveal({ children, className = '', as: Tag = 'div', style, ...rest }) {
  const ref = useRef(null);
  useEffect(() => observeReveal(ref.current, () => ref.current && ref.current.classList.add('in')), []);
  return (
    <Tag ref={ref} className={`reveal ${className}`} style={style} {...rest}>
      {children}
    </Tag>
  );
}

export { observeReveal };
