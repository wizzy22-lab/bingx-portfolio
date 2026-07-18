'use client';

import { useEffect, useRef, useState, type CSSProperties } from 'react';

export type HeroCopy = {
  locale: 'en' | 'ko';
  subtitle: string;
  tags: string[];
  risk: { label: string; options: string[]; selected: number };
  strategy: { label: string; options: string[]; selected: number };
  meta: { label: string; lines: string[] }[];
  videoLabel: string;
};

type Wire = { d: string };
type Geo = { w: number; h: number; wires: Wire[] };

export default function HeroPanel(copy: HeroCopy) {
  const stageRef = useRef<HTMLDivElement>(null);
  const riskPillRef = useRef<HTMLSpanElement>(null);
  const strategyPillRef = useRef<HTMLSpanElement>(null);
  const phoneRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const [active, setActive] = useState(false);
  const [geo, setGeo] = useState<Geo | null>(null);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [played, setPlayed] = useState(false);

  // The hero sits above the fold, so drive the entrance on mount (a scroll-based
  // observer can miss the initial reveal for an element already in view). A short
  // timeout — not requestAnimationFrame, which is paused in background tabs — lets
  // the initial masked state paint so the CSS transition plays.
  useEffect(() => {
    const id = window.setTimeout(() => setActive(true), 60);
    return () => window.clearTimeout(id);
  }, []);

  // Detect reduced-motion preference.
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setReducedMotion(mq.matches);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);

  // Measure the selected pills and phone to draw connector wires.
  useEffect(() => {
    function measure() {
      const stage = stageRef.current;
      const phone = phoneRef.current;
      if (!stage || !phone) return;

      // Connectors only make sense in the 3-column desktop layout.
      if (window.innerWidth < 1024) {
        setGeo({ w: 0, h: 0, wires: [] });
        return;
      }

      const s = stage.getBoundingClientRect();
      const p = phone.getBoundingClientRect();
      const px = p.left - s.left; // phone left edge, stage-relative
      const pTop = p.top - s.top;
      const pBottom = pTop + p.height;

      // Each wire exits the selected pill's bottom, drops down, then runs
      // right into the phone — always descending so the elbow points down.
      const build = (pill: HTMLElement | null, drop: number): Wire | null => {
        if (!pill) return null;
        const b = pill.getBoundingClientRect();
        const x1 = b.left - s.left + b.width / 2;
        const y1 = b.bottom - s.top;
        // Clamp the horizontal run to sit within the phone's height.
        const yT = Math.min(Math.max(y1 + drop, pTop + 24), pBottom - 24);
        const r = Math.min(12, Math.abs(yT - y1) / 2);
        const vy = yT - r;
        const cornerX = x1 + r;
        const d = `M ${x1.toFixed(1)} ${y1.toFixed(1)} L ${x1.toFixed(1)} ${vy.toFixed(
          1,
        )} Q ${x1.toFixed(1)} ${yT.toFixed(1)} ${cornerX.toFixed(1)} ${yT.toFixed(
          1,
        )} L ${px.toFixed(1)} ${yT.toFixed(1)}`;
        return { d };
      };

      const w1 = build(riskPillRef.current, 48);
      const w2 = build(strategyPillRef.current, 48);

      setGeo({
        w: s.width,
        h: s.height,
        wires: [w1, w2].filter((w): w is Wire => w !== null),
      });
    }

    measure();
    const id = window.setTimeout(measure, 350); // re-measure after fonts settle
    window.addEventListener('resize', measure);
    return () => {
      window.clearTimeout(id);
      window.removeEventListener('resize', measure);
    };
  }, []);

  // Play the onboarding clip once, after the chip/connector sequence.
  useEffect(() => {
    if (!active || played || reducedMotion) return;
    const video = videoRef.current;
    if (!video) return;
    const id = window.setTimeout(() => {
      video.play().catch(() => {});
      setPlayed(true);
    }, 1100);
    return () => window.clearTimeout(id);
  }, [active, played, reducedMotion]);

  const isKr = copy.locale === 'ko';
  const hasWires = geo !== null && geo.wires.length > 0;

  return (
    <section id="hero" className="hero-section">
      <div className={`hero-panel${active ? ' is-in' : ''}`}>
        <img
          className="hero-panel__bg"
          src="/images/hero/hero-background.png"
          alt=""
          aria-hidden
        />

        <div className="hero-panel__inner">
          <div className="hero-stage" ref={stageRef}>
            {/* Lead — title, subtitle, tags */}
            <div className="hero-lead">
              <h1
                className={`reveal-h ds-display hero-lead__title${
                  isKr ? ' ds-kr' : ''
                }${active ? ' is-revealed' : ''}`}
              >
                <span className="reveal-h__mask">
                  <span className="reveal-h__inner">
                    BingX
                    <br />
                    AI Master
                  </span>
                </span>
              </h1>
              <p className={`ds-body-lg hero-lead__subtitle${isKr ? ' ds-kr' : ''}`}>
                {copy.subtitle}
              </p>
              <div className="hero-lead__tags">
                {copy.tags.map((tag) => (
                  <span key={tag} className={`ds-tag${isKr ? ' ds-kr' : ''}`}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Config — preference chips */}
            <div className="hero-config">
              <div className="hero-config__group">
                <p className="hero-config__label">{copy.risk.label}</p>
                <div
                  className="hero-chips"
                  role="group"
                  aria-label={copy.risk.label}
                >
                  {copy.risk.options.map((opt, i) => {
                    const selected = i === copy.risk.selected;
                    return (
                      <span
                        key={opt}
                        ref={selected ? riskPillRef : undefined}
                        className={`hero-chip${selected ? ' is-selected' : ''}`}
                      >
                        {opt}
                      </span>
                    );
                  })}
                </div>
              </div>

              <div className="hero-config__group">
                <p className="hero-config__label">{copy.strategy.label}</p>
                <div
                  className="hero-chips"
                  role="group"
                  aria-label={copy.strategy.label}
                >
                  {copy.strategy.options.map((opt, i) => {
                    const selected = i === copy.strategy.selected;
                    return (
                      <span
                        key={opt}
                        ref={selected ? strategyPillRef : undefined}
                        className={`hero-chip${selected ? ' is-selected' : ''}`}
                      >
                        {opt}
                      </span>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Phone — onboarding clip */}
            <div className="hero-phone" ref={phoneRef}>
              <video
                ref={videoRef}
                className="hero-phone__video"
                poster="/images/hero/phone-poster.png"
                muted
                playsInline
                preload="metadata"
                aria-label={copy.videoLabel}
              >
                <source src="/videos/feature-1-to-be.mp4" type="video/mp4" />
              </video>
            </div>

            {/* Connector wires (desktop only) */}
            {hasWires && (
              <svg
                className="hero-wires"
                width={geo.w}
                height={geo.h}
                viewBox={`0 0 ${geo.w} ${geo.h}`}
                preserveAspectRatio="none"
                aria-hidden
              >
                {geo.wires.map((wire, i) => (
                  <g
                    key={i}
                    style={{ '--wire-delay': `${0.35 + i * 0.25}s` } as CSSProperties}
                  >
                    <path className="hero-wires__path" d={wire.d} pathLength={1} />
                    {!reducedMotion && (
                      <circle className="hero-wires__dot" r={3}>
                        <animateMotion
                          dur="2.8s"
                          begin={`${1.3 + i * 0.25}s`}
                          repeatCount="indefinite"
                          path={wire.d}
                          keyPoints="0;1"
                          keyTimes="0;1"
                          calcMode="linear"
                        />
                      </circle>
                    )}
                  </g>
                ))}
              </svg>
            )}
          </div>

          {/* Meta */}
          <div className="hero-meta">
            {copy.meta.map((row) => (
              <div key={row.label} className="hero-meta__row">
                <p className="ds-eyebrow hero-meta__label">{row.label}</p>
                <div className={`hero-meta__value${isKr ? ' ds-kr' : ''}`}>
                  {row.lines.map((line, i) => (
                    <p key={i} className="ds-body">
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
