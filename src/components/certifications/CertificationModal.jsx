import { CheckCircle2 } from 'lucide-react';
import Modal from '../ui/Modal';
import { ASSET_BASE } from '../../constants';

export default function CertificationModal({ certificate, onClose }) {
  return (
    <Modal label={certificate.title} onClose={onClose} className="cert-modal">
      {certificate.image ? (
        <img
          src={`${ASSET_BASE}${certificate.image}`}
          alt={`${certificate.title} certificate`}
          className="certificate-image"
        />
      ) : (
        <div className="credential-placeholder">
          <CheckCircle2 size={44} />
          <span>{certificate.issuer}</span>
          <h2>{certificate.title}</h2>
          <p>{certificate.date}</p>
          <small>Credential details listed in professional profile.</small>
        </div>
      )}
      <div className="cert-modal-caption">
        <h3>{certificate.title}</h3>
        <p>{certificate.issuer} · {certificate.date}</p>
        {certificate.credentialUrl && (
          <a href={certificate.credentialUrl} target="_blank" rel="noreferrer">
            View credential
          </a>
        )}
      </div>
    </Modal>
  );
}
