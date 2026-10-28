import { ArrowUpRight } from 'lucide-react';
import ProjectGraphic from '../ui/ProjectGraphic';

export default function ProjectCard({ project, index, onOpen }) {
  return (
    <article
      className={`project-card project-${project.visual}`}
      role="button"
      tabIndex={0}
      aria-label={`Open details for ${project.title}`}
      onClick={(event) => {
        if (!event.target.closest('a, button')) onOpen();
      }}
      onKeyDown={(event) => {
        if ((event.key === 'Enter' || event.key === ' ') && event.target === event.currentTarget) {
          event.preventDefault();
          onOpen();
        }
      }}
      style={{ '--i': index }}
    >
      <div className="project-open">
        <div className="project-art">
          <div className="art-top">
            <span>{project.category}</span>
            <span className="art-index">{String(index + 1).padStart(2, '0')}</span>
          </div>
          <div className="art-graphic">
            {project.image ? (
              <img
                src={project.image}
                alt={`${project.title} website screenshot`}
                className="project-real-image"
                loading="lazy"
              />
            ) : (
              <ProjectGraphic type={project.visual} />
            )}
          </div>
          {/* <div className="art-bottom">
            <span className="circle-arrow"><ArrowUpRight size={18} /></span>
          </div> */}
        </div>
        <div className="project-info">
          <h3>{project.title}</h3>
          <p className="project-summary">
            {project.summary}{' '}
            <button
              type="button"
              className="project-see-more"
              onClick={(event) => {
                event.stopPropagation();
                onOpen();
              }}
            >
              See more <ArrowUpRight size={13} style={{ display: 'inline', verticalAlign: 'middle' }} />
            </button>
          </p>
          <div className="project-card-actions">
            {project.url ? (
              <a
                className="project-site-link"
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(event) => event.stopPropagation()}
              >
                Live website <ArrowUpRight size={14} />
              </a>
            ) : (
              <button
                type="button"
                className="project-site-link"
                title="No live website URL was provided; open project details instead"
                onClick={(event) => {
                  event.stopPropagation();
                  onOpen();
                }}
              >
                Live website <ArrowUpRight size={14} />
              </button>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
