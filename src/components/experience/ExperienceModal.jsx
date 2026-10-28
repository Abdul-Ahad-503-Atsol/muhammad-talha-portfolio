import Modal from '../ui/Modal';

export default function ExperienceModal({ role, company, points, onClose }) {
  return (
    <Modal
      label={`${role} at ${company}`}
      onClose={onClose}
      className="experience-modal"
      backdropClassName="modal-backdrop modal-backdrop--top"
      closeContent="×"
      closeLabel="Close experience details"
    >
      <span style={{ display: 'block', marginBottom: '10px', fontSize: '.72rem', fontWeight: 750, letterSpacing: '.13em', color: '#58715f' }}>EXPERIENCE DETAILS</span>
      <h2 style={{ margin: '0 48px 6px 0', fontSize: 'clamp(1.5rem,3vw,2rem)', lineHeight: 1.25, color: '#202923' }}>{role}</h2>
      <b style={{ display: 'block', marginBottom: '24px', color: '#58715f' }}>{company}</b>
      <ul style={{ margin: 0, paddingLeft: '22px', lineHeight: 1.8, color: '#66736b' }}>
        {points.map((point, index) => <li key={`${index}-${point}`} style={{ marginBottom: '14px' }}>{point}</li>)}
      </ul>
      <button
        type="button"
        onClick={onClose}
        style={{ marginTop: '12px', padding: '11px 18px', border: 0, borderRadius: '10px', background: '#263b2d', color: '#fff', fontWeight: 650, cursor: 'pointer' }}
      >
        Close details
      </button>
    </Modal>
  );
}
