import { ArrowUpRight, Github, Linkedin, Mail } from 'lucide-react';
import { CONTACT_EMAIL } from '../../constants';

export default function Contact() {
  return (
    <section className="contact-section section" id="contact">
      <div className="section-wrap contact-inner">
        <div className="section-kicker">CONTACT</div>
        <div className="contact-layout">
          <div>
            <h2>Have a challenge<br />worth <em>solving?</em></h2>
            <p className="contact-copy">Tell me what you’re building, what’s slowing you down, or where AI could make a practical difference. Let’s talk about the next step.</p>
            <a className="btn btn-light" href={`mailto:${CONTACT_EMAIL}?subject=Project%20Enquiry`}>Start a conversation <ArrowUpRight size={17} /></a>
          </div>
          <div className="contact-card">
            <span className="contact-card-label">GET IN TOUCH</span>
            <a href={`mailto:${CONTACT_EMAIL}`} className="contact-line">
              <Mail />
              <span><small>Email</small><b>{CONTACT_EMAIL}</b></span>
              <ArrowUpRight />
            </a>
            <a href="https://www.linkedin.com/in/muhammadtalha05/" target="_blank" rel="noreferrer" className="contact-line">
              <Linkedin />
              <span><small>LinkedIn</small><b>Connect professionally</b></span>
              <ArrowUpRight />
            </a>
            <a href="https://github.com/mtalha5" target="_blank" rel="noreferrer" className="contact-line">
              <Github />
              <span><small>GitHub</small><b>Explore code</b></span>
              <ArrowUpRight />
            </a>
            <div className="availability">
              <span className="status-dot" /> Open to thoughtful conversations and challenging projects
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
