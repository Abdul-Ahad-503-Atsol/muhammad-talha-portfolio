import { ShieldCheck } from 'lucide-react';

const graphics = {
  insurance: (
    <>
      <div className="graphic-shield"><ShieldCheck size={55} /></div>
      <div className="graphic-pill pill-a">POLICY / ACTIVE</div>
      <div className="graphic-pill pill-b">QUOTE → CLAIM</div>
    </>
  ),
  tax: (
    <>
      <div className="graphic-chart"><i /><i /><i /><i /><i /><i /></div>
      <div className="graphic-number">$ <span>Tax systems</span></div>
      <div className="graphic-pill pill-a">SECURE PAYMENTS</div>
    </>
  ),
  awareness: (
    <>
      <div className="radar"><span /><span /><span /><i /></div>
      <div className="graphic-pill pill-a">LIVE INTELLIGENCE</div>
    </>
  ),
  peerlogic: (
    <>
      <div className="waveform">
        {Array.from({ length: 23 }, (_, index) => (
          <i key={index} style={{ '--h': `${15 + ((index * 17) % 48)}px` }} />
        ))}
      </div>
      <div className="graphic-pill pill-a">CONVERSATION → INSIGHT</div>
    </>
  ),
  workflow: (
    <>
      <div className="node-flow"><span>INPUT</span><i /><span>FSM</span><i /><span>OUTPUT</span></div>
      <div className="graphic-pill pill-a">DETERMINISTIC AI</div>
    </>
  ),
  referral: (
    <>
      <div className="network-graphic"><span /><span /><span /><span /><i /><i /><i /></div>
      <div className="graphic-pill pill-a">REFERRAL NETWORK</div>
    </>
  ),
  logistics: (
    <>
      <div className="route-map">
        <svg viewBox="0 0 280 150">
          <path d="M20 125 C60 125,48 45,95 55 S130 125,168 85 S210 30,260 25" />
          <circle cx="20" cy="125" r="6" />
          <circle cx="95" cy="55" r="6" />
          <circle cx="168" cy="85" r="6" />
          <circle cx="260" cy="25" r="6" />
        </svg>
      </div>
      <div className="graphic-pill pill-a">TRACK · ROUTE · DELIVER</div>
    </>
  ),
  commerce: (
    <>
      <div className="commerce-boxes"><span /><span /><span /></div>
      <div className="graphic-pill pill-a">OMNICHANNEL COMMERCE</div>
    </>
  ),
  health: (
    <>
      <div className="health-cross"><span /><i /></div>
      <div className="graphic-pill pill-a">CARE WORKFLOWS</div>
    </>
  ),
  research: (
    <>
      <div className="research-orbs"><span /><span /><span /></div>
      <div className="graphic-pill pill-a">AI PRODUCT SYSTEMS</div>
    </>
  ),
};

export default function ProjectGraphic({ type }) {
  return <div className={`graphic graphic-${type}`}>{graphics[type] || graphics.workflow}</div>;
}
