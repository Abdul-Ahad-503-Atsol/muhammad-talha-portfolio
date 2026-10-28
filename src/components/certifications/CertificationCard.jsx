import { CheckCircle2, ShieldCheck } from 'lucide-react';

export default function CertificationCard({ certificate, onOpen }) {
  return (
    <button type="button" className="cert-card" onClick={onOpen}>
      <div className="cert-icon">
        {certificate.issuer === 'micro1' ? <ShieldCheck /> : <CheckCircle2 />}
      </div>
      <div className="cert-copy">
        <span>{certificate.issuer} · {certificate.date}</span>
        <h3>{certificate.title}</h3>
        <p>{certificate.note}</p>
      </div>
    </button>
  );
}
