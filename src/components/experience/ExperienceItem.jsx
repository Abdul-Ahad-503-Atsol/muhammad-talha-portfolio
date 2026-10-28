import { useState } from 'react';
import ExperienceModal from './ExperienceModal';

export default function ExperienceItem({ role, company, points }) {
  const [expanded, setExpanded] = useState(false);
  const visiblePoints = points.slice(0, 2);

  return (
    <>
      <article
        className="timeline-item"
        style={{ display: 'flex', flexDirection: 'column', height: '100%', minHeight: '250px', boxSizing: 'border-box', padding: '24px', background: '#fff', border: '1px solid #e0e6df', borderRadius: '18px', boxShadow: '0 8px 24px rgba(23,33,31,.045)', position: 'relative', overflow: 'hidden' }}
      >
        <div className="timeline-content" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
          <div className="timeline-heading" style={{ marginBottom: '14px', minHeight: '72px' }}>
            <div>
              <h3 style={{ margin: '0 0 7px', lineHeight: 1.3 }}>{role}</h3>
              <b style={{ color: '#58715f', lineHeight: 1.4 }}>{company}</b>
            </div>
          </div>
          <ul style={{ margin: 0, paddingLeft: '18px', lineHeight: 1.7, flex: '1 1 auto' }}>
            {visiblePoints.map((point) => <li key={point} style={{ marginBottom: '8px' }}>{point}</li>)}
          </ul>
          {points.length > visiblePoints.length && (
            <button
              type="button"
              onClick={() => setExpanded(true)}
              style={{ alignSelf: 'flex-start', marginTop: '12px', padding: '5px 0', border: 0, background: 'transparent', color: '#58715f', fontSize: '.9rem', fontWeight: 650, textDecoration: 'underline', textUnderlineOffset: '3px', cursor: 'pointer' }}
            >
              See more +
            </button>
          )}
        </div>
      </article>
      {expanded && (
        <ExperienceModal
          role={role}
          company={company}
          points={points}
          onClose={() => setExpanded(false)}
        />
      )}
    </>
  );
}
