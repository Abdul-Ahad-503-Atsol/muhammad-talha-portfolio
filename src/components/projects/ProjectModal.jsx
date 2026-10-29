import Modal from '../ui/Modal';
import ProjectGraphic from '../ui/ProjectGraphic';
import Button from '../ui/Button';
import { CONTACT_EMAIL } from '../../constants';

export default function ProjectModal({ project, onClose }) {
  return (
    <Modal label={project.title} onClose={onClose} className="project-modal">
      <div className={`modal-art project-${project.visual}`}>
        {project.image ? (
          <img
            src={project.image}
            alt={`${project.title} dashboard screenshot`}
            className="project-modal-image"
            style={{ display: 'block', width: '100%', maxHeight: '350px', maxWidth: 'none', margin: 0, padding: 0, objectFit: 'cover', objectPosition: 'center', boxSizing: 'border-box' }}
          />
        ) : (
          <ProjectGraphic type={project.visual} />
        )}
      </div>
      <div className="modal-body">
        <span className="section-kicker">{project.category} / PROJECT DETAILS</span>
        <h2>{project.title}</h2>
        <p className="modal-lead">{project.summary}</p>
        <p>{project.detail}</p>
        <h3>Technology & focus</h3>
        <div className="project-tags modal-tags">
          {project.stack.map((item) => <span key={item}>{item}</span>)}
        </div>
        <div className="modal-actions">
          {project.url && (
            <Button href={project.url} target="_blank" rel="noopener noreferrer">
              Visit live website
            </Button>
          )}
          <Button href={`mailto:${CONTACT_EMAIL}?subject=Project%20Enquiry`}>
            Discuss a similar project
          </Button>
        </div>
      </div>
    </Modal>
  );
}
