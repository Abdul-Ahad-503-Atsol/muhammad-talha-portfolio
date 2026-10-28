import { useState } from 'react';
import { certificates } from '../../data/certificates';
import CertificationCard from '../certifications/CertificationCard';
import CertificationModal from '../certifications/CertificationModal';

export default function Certifications() {
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  return (
    <section className="section-wrap section cert-section" id="certifications">
      <div className="section-kicker">CERTIFICATIONS</div>
      <div className="section-top">
        <h2>Always learning.<br /><em>Always improving.</em></h2>
        <p className="section-intro">Selected certifications and credentials listed in my professional profile.</p>
      </div>
      <div className="cert-grid">
        {certificates.map((certificate) => (
          <CertificationCard
            key={certificate.title}
            certificate={certificate}
            onOpen={() => setSelectedCertificate(certificate)}
          />
        ))}
      </div>
      {selectedCertificate && (
        <CertificationModal
          certificate={selectedCertificate}
          onClose={() => setSelectedCertificate(null)}
        />
      )}
    </section>
  );
}
