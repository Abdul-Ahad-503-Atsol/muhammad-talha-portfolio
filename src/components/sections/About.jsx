import { ASSET_BASE } from '../../constants';
import Button from '../ui/Button';

export default function About() {
  return (
    <section className="section-wrap section about-section" id="about">
      <div className="about-grid">
        <div>
          <h2>Good software should make <em>hard things</em> feel simpler.</h2>
          <div className="about-photo">
            <img src={`${ASSET_BASE}portrait.png`} alt="Muhammad Talha" />
            <div><strong>Muhammad Talha</strong><span>Software Engineer · AI Systems</span></div>
          </div>
        </div>
        <div className="about-content">
          <p className="lead">I'm a certified Software Engineer with 8+ years of experience designing, developing, and deploying software solutions at scale.</p>
          <p>My work spans AI-driven platforms, law-enforcement systems, SaaS applications, financial systems, healthcare solutions, and e-commerce. I care about clean architecture, security, performance, and long-term maintainability.</p>
          <p>My core stack includes Python, Django, FastAPI, .NET Core, AWS, GCP, and Azure. I’m focused on intelligent, agent-driven platforms and scalable SaaS products that combine modern AI capabilities with modular, production-grade engineering.</p>
          <Button variant="text" className="about-cv-link" href={`${ASSET_BASE}Muhammad-Talha-CV.pdf`} download>Download my CV</Button>
        </div>
      </div>
    </section>
  );
}
