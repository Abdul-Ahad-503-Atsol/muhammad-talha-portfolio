import { experience } from '../../data/experience';
import ExperienceItem from '../experience/ExperienceItem';

export default function Experience() {
  return (
    <section className="experience-section section" id="experience">
      <div className="section-wrap">
        {/* <div className="section-kicker">EXPERIENCE</div> */}
        <div
          className="experience-intro-card"
          style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: '28px', padding: 'clamp(24px,4vw,42px)', margin: '0 0 34px', background: '#e8eee5', border: '1px solid #d8e1d5', borderRadius: '24px', boxShadow: '0 12px 32px rgba(23,33,31,.06)', flexWrap: 'wrap' }}
        >
          <div style={{ flex: '1 1 320px' }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', padding: '7px 11px', borderRadius: '999px', background: 'rgba(255,255,255,.78)', color: '#506a57', fontSize: '.72rem', fontWeight: 700, letterSpacing: '.12em', marginBottom: '16px' }}>CAREER HIGHLIGHTS</span>
            <h2 style={{ margin: 0 }}>Experience that<br /><em>ships software.</em></h2>
          </div>
          <p className="section-intro" style={{ maxWidth: '390px', margin: '0', flex: '0 1 340px' }}>A career shaped by production systems, complex integrations, and cross-functional engineering.</p>
        </div>
        <div
          className="timeline"
          style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,320px),1fr))', gap: '18px', position: 'relative' }}
        >
          {experience.map((job) => <ExperienceItem key={job.company} {...job} />)}
        </div>
      </div>
    </section>
  );
}
