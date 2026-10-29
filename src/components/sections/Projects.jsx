import { useMemo, useState } from 'react';
import { projectCategories, projects } from '../../data/projects';
import ProjectCard from '../projects/ProjectCard';
import ProjectModal from '../projects/ProjectModal';
import Button from '../ui/Button';

export default function Projects() {
  const [filter, setFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const visibleProjects = useMemo(
    () => (filter === 'All' ? projects : projects.filter((project) => project.category === filter)),
    [filter],
  );

  return (
    <section className="section work-section" id="work">
      <div className="section-wrap">
        <div className="section-top">
          <div>
            <div className="section-kicker">MY WORK</div>
            <h2>Projects built to <em>make an impact.</em></h2>
          </div>
          <p className="section-intro">A selection of software, AI, data, and platform projects across industries. Open a project to explore its scope and technology.</p>
        </div>
        <div className="filters" aria-label="Filter projects">
          {projectCategories.map((category) => (
            <Button
              key={category}
              variant="filter"
              active={filter === category}
              onClick={() => setFilter(category)}
            >
              {category}
            </Button>
          ))}
        </div>
        <div className="project-grid">
          {visibleProjects.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={index}
              onOpen={() => setSelectedProject(project)}
            />
          ))}
        </div>
        <div className="work-foot">
          <span><span className="status-dot" /> More detail available on request</span>
          <Button variant="text" href="#contact">Have a project in mind?</Button>
        </div>
      </div>
      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </section>
  );
}
