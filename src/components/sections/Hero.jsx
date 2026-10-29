import { BrainCircuit, Code2, Sparkles } from 'lucide-react';
import { ASSET_BASE, BOOKING_URL } from '../../constants';
import Button from '../ui/Button';

export default function Hero() {
  return (
    <section className="hero section-wrap" id="home">
      <div className="hero-grid" aria-hidden="true"><span /><span /><span /><span /><span /><span /><span /><span /><span /></div>
      <div className="hero-copy reveal">
        <div className="eyebrow"><span className="status-dot" /> AI & FULL-STACK SOFTWARE ENGINEERING</div>
        <h1>Engineering <span className="headline-accent">intelligent</span><br />products for the<br /><span className="outline-text">real world.</span></h1>
        <p className="hero-sub">I build dependable software, AI-powered workflows, and scalable platforms that turn complex problems into practical products.</p>
        <div className="hero-actions">
          <Button href="#work">Explore my work</Button>
          <Button variant="accent" href={BOOKING_URL} target="_blank" rel="noopener noreferrer">Book a meeting</Button>
        </div>
        <div className="hero-proof">
          <div className="proof-item"><strong>8+</strong><span>Years in software</span></div>
          <div className="proof-separator" />
          <div className="proof-item"><strong>AI + SaaS</strong><span>Product engineering</span></div>
          <div className="proof-separator" />
          <div className="proof-item"><strong>End-to-end</strong><span>From design to deployment</span></div>
        </div>
      </div>
      <div className="hero-visual reveal delay-1">
        <div className="orbit orbit-one" />
        <div className="orbit orbit-two" />
        <div className="portrait-frame"><img src={`${ASSET_BASE}portrait.png`} alt="Muhammad Talha portrait" /></div>
        <div className="floating-card card-ai">
          <span className="float-icon"><BrainCircuit size={18} /></span>
          <span><b>AI systems</b><small>Useful, not just hype</small></span>
        </div>
        <div className="floating-card card-code">
          <span className="float-icon dark-icon"><Code2 size={18} /></span>
          <span><b>Production-ready</b><small>Clean architecture</small></span>
        </div>
        <div className="hero-stamp"><Sparkles size={16} /><span>Build with<br />purpose</span></div>
      </div>
    </section>
  );
}
