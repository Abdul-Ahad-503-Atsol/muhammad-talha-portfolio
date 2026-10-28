import { useEffect, useState } from 'react';

export default function WelcomePopup() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => setVisible(true), 3000);
    return () => window.clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) setVisible(false);
      }}
      style={{
        position: 'fixed', inset: 0, zIndex: 10000,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: '20px', background: 'rgba(15,24,19,.58)',
        backdropFilter: 'blur(6px)',
      }}
    >
      <div
        className="welcome-popup-motion"
        role="dialog"
        aria-modal="true"
        aria-labelledby="welcome-popup-title"
        style={{
          position: 'relative', width: '100%', maxWidth: '520px',
          boxSizing: 'border-box', padding: 'clamp(26px,5vw,40px)',
          borderRadius: '22px', background: '#fff', color: '#202923',
          boxShadow: '0 28px 90px rgba(0,0,0,.25)',
          animation: 'welcomePopupIn .35s ease both',
        }}
      >
        <button
          type="button"
          onClick={() => setVisible(false)}
          aria-label="Close welcome popup"
          style={{
            position: 'absolute', top: '12px', right: '14px',
            width: '36px', height: '36px', border: '1px solid #e0e6df',
            borderRadius: '50%', background: '#f6f8f5', color: '#25332b',
            fontSize: '24px', lineHeight: 1, cursor: 'pointer',
          }}
        >×</button>
        <span style={{ display: 'block', marginBottom: '14px', color: '#58715f', fontSize: '.75rem', fontWeight: 750, letterSpacing: '.13em' }}>WELCOME</span>
        <h2 id="welcome-popup-title" style={{ margin: '0 22px 12px 0', fontSize: 'clamp(1.65rem,4vw,2.25rem)', lineHeight: 1.2 }}>
          Welcome to the<br />
          <em style={{ color: '#58715f' }}>Muhammad Talha Portfolio</em>
        </h2>
        <p style={{ margin: '0 0 26px', color: '#66736b', lineHeight: 1.7 }}>
          Explore projects, engineering experience, and AI-powered solutions.
        </p>
        <div style={{ display: 'flex', justifyContent: 'space-between', gap: '12px', flexWrap: 'wrap' }}>
          <button
            type="button"
            onClick={() => setVisible(false)}
            style={{ padding: '11px 17px', border: '1px solid #d8e1d5', borderRadius: '999px', background: '#f6f8f5', color: '#263b2d', fontWeight: 650, cursor: 'pointer' }}
          >Thank you</button>
          <button
            type="button"
            onClick={() => setVisible(false)}
            style={{ padding: '11px 19px', border: 0, borderRadius: '999px', background: '#263b2d', color: '#fff', fontWeight: 650, cursor: 'pointer' }}
          >I’m a client</button>
        </div>
      </div>
    </div>
  );
}
