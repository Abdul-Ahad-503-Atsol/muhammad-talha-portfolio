import { useState } from 'react';
import { BrainCircuit, Code2, Database, Server } from 'lucide-react';
import { skills } from '../../data/skills';
import ExpertiseCard from '../ui/ExpertiseCard';
import Button from '../ui/Button';

const expertiseAreas = [
  {
    icon: <BrainCircuit />,
    number: '01',
    title: 'AI & Agentic Systems',
    text: 'LLM integrations, AI workflows, conversational intelligence, retrieval-augmented generation, and practical automation.',
    tags: ['OpenAI API', 'LangChain', 'LangGraph', 'RAG'],
  },
  {
    icon: <Code2 />,
    number: '02',
    title: 'Full-Stack Engineering',
    text: 'Robust backends and intuitive product interfaces built around maintainable architecture and clear API contracts.',
    tags: ['Python', 'Django', 'FastAPI', 'React', '.NET Core'],
  },
  {
    icon: <Database />,
    number: '03',
    title: 'Data & Performance',
    text: 'Reliable data models, query optimisation, asynchronous processing, and reporting pipelines that hold up under load.',
    tags: ['PostgreSQL', 'Redis', 'Celery', 'PostGIS'],
  },
  {
    icon: <Server />,
    number: '04',
    title: 'Cloud & Delivery',
    text: 'Deployment workflows, integrations, cloud infrastructure, testing, and operational reliability.',
    tags: ['AWS', 'GCP', 'Azure', 'Docker', 'CI/CD'],
  },
];

const INITIAL_SKILL_COUNT = 20;

export default function Expertise() {
  const [showAllSkills, setShowAllSkills] = useState(false);
  const visibleSkills = showAllSkills ? skills : skills.slice(0, INITIAL_SKILL_COUNT);

  return (
    <section className="section-wrap section expertise-section" id="expertise">
      {/* <div className="section-kicker">EXPERTISE</div> */}
      <div className="section-top">
        <h2>From first sketch<br />to <em>stable scale.</em></h2>
        <p className="section-intro">A practical engineering toolkit for building and improving real products—from APIs and data to AI workflows and cloud infrastructure.</p>
      </div>
      <div className="expertise-grid">
        {expertiseAreas.map((area) => <ExpertiseCard key={area.number} {...area} />)}
      </div>
      <div className="skills-panel">
        <div className="skills-panel-heading">
          <span className="skills-label">TECH STACK</span>
          <h3>Tools I work with</h3>
          <p>Technologies and capabilities I use to build reliable products.</p>
        </div>
        <div className="skills-panel-content">
          <div className="skill-cloud">
            {visibleSkills.map((skill) => <span key={skill}>{skill}</span>)}
          </div>
          <Button variant="toggle" onClick={() => setShowAllSkills((show) => !show)}>
            {showAllSkills ? 'Show fewer skills' : 'View 20+ more skills'}
          </Button>
        </div>
      </div>
    </section>
  );
}
