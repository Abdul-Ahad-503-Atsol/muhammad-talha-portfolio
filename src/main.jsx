import { useEffect, useMemo, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowDownRight, ArrowRight, ArrowUpRight, BrainCircuit, CheckCircle2, Code2, Database, Github, Linkedin, Mail, Menu, Server, ShieldCheck, Sparkles, Star, X } from 'lucide-react';
import './styles.css';

const A = '/assets/';
const projects = [
  {
  title: 'MezAgent — AI CRM & Client Acquisition',
  category: 'AI / SaaS',
  summary: 'An AI-powered CRM and client-acquisition platform with personalised outreach, referrals, and human escalation.',
  stack: ['LangGraph', 'RAG', 'Qdrant', 'Django', 'WebSockets', 'CRM integrations', 'Email outreach'],
  detail: 'Developed an AI-powered CRM and client-acquisition platform that connects businesses with verified professionals to generate qualified leads and manage high-value client referrals. Features include personalised LinkedIn and email outreach, LangGraph-driven AI personas, dedicated RAG knowledge bases, real-time messaging, referral tracking, commission management, and escalation to a human when AI assistance should not continue.',
  url: 'https://mezagent.com/',
  visual: 'referral',
image: '/assets/mezagent-dashboard.png'},
  { title: 'THREEInsurance by Berkshire Hathaway', category: 'InsurTech', summary: 'A digital insurance platform designed to simplify risk management with online quotes, policy self-service, and claims workflows.', stack: ['Python', 'Django', 'Django REST Framework', 'Celery', 'PostgreSQL', 'Auth0', 'Stripe', 'Docker'], detail: 'ThreeInsurance by Berkshire Hathaway is a next-generation insurance platform designed to modernise how individuals and businesses manage risk. The platform supports digital quotation, customer self-service, policy management, and claims processing, with an emphasis on secure, transparent customer experiences and reliable third-party integrations.', url: 'https://threeinsurance.com/', visual: 'insurance',image: '/assets/threeinsurance.png' },

{
  title: 'Advanced Situational Awareness System',
  category: 'Situational Awareness',
  summary: 'A real-time situational-awareness platform for law-enforcement and security agencies in Pakistan.',
  stack: ['Python', 'Django', 'Django REST Framework', 'GIS', 'PostgreSQL'],
  detail: 'A real-time situational-awareness platform developed for law-enforcement and security agencies in Pakistan. It brings together large datasets, sensor inputs, and operational intelligence in a secure interface. AI-driven analysis and interactive visualisation support commanders in understanding incidents, assessing potential threats, and making data-informed operational decisions.',
  visual: 'awareness',
image: '/assets/advance.png'},

 {
  title: 'AI-Enabled Healthcare — Peerlogic',
  category: 'Healthcare AI',
  summary: 'AI-powered appointment and conversation workflows for dental and veterinary practices.',
  stack: ['Python', 'Django REST Framework', 'PostgreSQL', 'LLMs', 'Amazon Bedrock', 'LLaMA', 'RabbitMQ', 'Celery', 'Redis', 'Google Cloud Run', 'Docker'],
  detail: 'A healthcare system built to improve appointment booking for dental and veterinary practices in the United States. AI-enabled workflows help reduce the burden of manual scheduling and make it easier to analyse booking patterns and business outcomes. The related Peerlogic platform focuses on conversational intelligence, turning call transcripts and conversations into useful operational insights.',
  url: 'https://www.peerlogic.com/',
  visual: 'peerlogic',
  image: '/assets/peerlogic.png'
},

{
  title: 'U.S. Property Tax Collection System',
  category: 'FinTech',
  summary: 'A secure property-tax collection and administration system serving eight parishes.',
  stack: ['Python', 'Django', 'Django REST Framework', 'Pandas', 'NumPy', 'AWS', 'PostgreSQL', 'Materialized Views'],
  detail: 'A property-tax management system for eight parishes. Residents can submit payments through a secure web application, while tax-office teams use centralised tools for collection and distribution activities. The platform focuses on secure payment workflows, efficient administration, and reporting.',
  url: 'https://securetax.us/',
  visual: 'tax',
  image: '/assets/securetax.png'
},

  { title: 'Comverse — Multi-Vendor Commerce', category: 'E-commerce', summary: 'A multi-vendor e-commerce marketplace for managing stores, vendors, locations, orders, and fulfilment.', stack: ['Python', 'Django', 'Django REST Framework', 'MySQL', 'Docker', 'Redis', 'Angular 12', 'AWS'], detail: 'Developed a scalable, feature-rich multi-vendor e-commerce marketplace enabling businesses to manage multiple stores, vendors, and locations through a unified platform. Features include product and order management, CRM, CMS, payment gateway integrations, logistics services, ERP integration, wishlists, discounts, store locators, push notifications, advanced reporting, and shipping management.', url: 'https://comverseglobal.com/', visual: 'commerce', image: '/assets/comverse.png',},

  { title: 'Moufit — Fitness & Health Platform', category: 'Healthcare AI', summary: 'A multi-partner fitness and health platform.', stack: ['Python', 'Django', 'Django REST Framework', 'MySQL', 'Docker', 'Angular 12'], detail: 'A multi-partner fitness and health system built to bring partner services together through a digital platform. The project stack included a Python/Django backend and an Angular-based frontend.', url: 'https://www.mou.fit/', visual: 'health',image: '/assets/moufit.png', },


  { title: 'Pakistan Cricket Board Shopping Store', category: 'E-commerce', summary: 'An online store for official Pakistan cricket merchandise, apparel, accessories, and customised products.', stack: ['Python', 'Django', 'Django REST Framework', 'MySQL', 'Docker', 'Redis', 'Angular 12', 'AWS'], detail: 'The Pakistan Cricket Board official merchandise store is a multi-location e-commerce platform where cricket fans can browse and purchase official team jerseys, apparel, accessories, and customised merchandise. It supports product browsing, order management, and domestic and international delivery workflows.', url: 'https://shop.pcb.com.pk/', visual: 'commerce' ,image: '/assets/pcb.png',},

  { title: 'DropEsy — Dropshipping Automation', category: 'E-commerce', summary: 'A dropshipping middleware platform connecting Shopify merchants with suppliers and fulfilment workflows.', stack: ['Python', 'Django', 'Django REST Framework', 'MySQL', 'Docker', 'Angular 12', 'Shopify integrations'], detail: 'A dropshipping platform connecting online stores with suppliers across the US, Europe, and Pakistan. It helps sellers discover products, import listings into Shopify stores, synchronise inventory and pricing, and streamline order fulfilment without managing physical inventory, packaging, or shipping. Additional capabilities include supplier integrations, branded invoicing, and product discounts.', url: 'https://www.dropesy.com/',  visual: 'workflow', },

  { title: 'Destination — Daewoo Tourism', category: 'Travel & Tourism', summary: 'A tourism platform that helps travellers explore destinations in Pakistan and plan trips along their route.', stack: ['Python', 'Django', 'Django REST Framework', 'MySQL', 'Docker', 'Angular 12', 'Flutter'], detail: 'A tourism concept by Daewoo Express that uses technology to help people explore destinations across Pakistan. The mobile app provides curated travel plans from a user’s location, including estimated travel days, nearby points of interest, hotels, and restaurants. The project included Android and iOS apps, an administrative content panel, and a central backend for shared calculations and data.', url: 'https://destinations.com.pk/', visual: 'logistics',image: '/assets/destination.png', },

  { title: 'ADSO Freight Management', category: 'Logistics', summary: 'A freight-management system for transport operations, HR, company setup, and internal workflows.', stack: ['ASP.NET Core 3.1', '.NET Core', 'Microsoft Azure', 'SQL Database', 'Git'], detail: 'A comprehensive freight-management system designed to streamline logistics operations and internal business processes. Modules include user management, transport management, freight project library, HR management, company setup for companies, groups, and branches, and general settings for contracts, clauses, freight types, and freight attributes.', url: 'https://adso-uae.com/', visual: 'logistics',image: '/assets/adso.png', },

  { title: 'Magna Food Company', category: 'Business Websites', summary: 'A responsive website and content-management system for a UK-based foodservice company.', stack: ['Orchard Core CMS', 'ASP.NET Core 3.0', 'Razor Pages', 'Microsoft Azure', 'Docker'], detail: 'Built a responsive web application for a UK-based foodservice company, featuring company information, product catalogues, career opportunities, kitchen stories, and client details. Implemented an Orchard Core CMS administration panel to manage website content, product categories, subcategories, and job postings.', url: 'https://www.magnafoodservice.co.uk/', visual: 'research',image: '/assets/magna.png', },

  { title: 'Leopards Courier App', category: 'Logistics', summary: 'A Shopify embedded app integrating courier operations, consignment generation, reports, and shipment tracking.', stack: ['.NET Core 2.3', 'Entity Framework', 'MySQL', 'Docker', 'Shopify Sharp', 'Shopify Embedded App SDK', 'Hangfire'], detail: 'A Shopify embedded application integrating Leopards Courier services. Its workflows include consignment-note generation, fulfilment-order reports, and order tracking to support shipping operations for online merchants.', url: 'https://www.leopardscourier.com/', visual: 'logistics',image: '/assets/leopard.png', },

  { title: 'WellmeAI — Mental Wellness Platform', category: 'Healthcare AI', summary: 'An AI-powered mental wellness platform for emotional support, mindfulness, journaling, and mood insights.', stack: ['FastAPI', 'OpenAI API', 'LangChain', 'AI integrations'], detail: 'An AI-powered mental wellness platform designed to provide personalised emotional support, stress-management guidance, and mindfulness support. Features include a conversational companion, AI-powered journaling, mood-pattern analysis, and personalised coping strategies to help users improve daily emotional wellbeing.', url: 'https://www.wellmeai.com/', visual: 'health',image: '/assets/wellmeai.png', },

  { title: 'Narratize — Product Innovation Intelligence', category: 'AI / SaaS', summary: 'An AI platform that helps product-development teams centralise technical knowledge and accelerate innovation.', stack: ['AI agents', 'LLM integration', 'Knowledge management', 'SaaS'], detail: 'Narratize helps product-development teams centralise technical knowledge, automate documentation, and accelerate innovation. It brings enterprise information and expert knowledge into searchable product hubs, supporting technical-document generation, research, compliance evaluation, and evidence-based product-development decisions through specialised AI agents and workflows.', url: 'https://narratize.com/', visual: 'research',image: '/assets/narratize.png', },
];
const categories = ['All', ...new Set(projects.map(p => p.category))];
const skills = [
  'Python', 'Django', 'Node.js', 'PostgreSQL', 'Angular', 'JavaScript', 'TypeScript', 'OpenAPI',
  'Web Development', 'LangChain', 'FastAPI', 'React', 'Amazon Web Services', 'Artificial Intelligence',
  'Machine Learning', 'AI Agent Development', 'Retrieval Augmented Generation', 'Claude Code',
  'Meta API', 'Model Context Protocol (MCP)',
  'Next.js', 'REST API Development', 'MongoDB', 'Redis', 'Tailwind CSS', 'OpenAI API',
  'Anthropic Claude API', 'Google Gemini API', 'AI Application Development', 'LangGraph',
  'Vector Databases', 'Qdrant', 'Prompt Engineering', 'LLM Integration', 'Multi-Agent Systems',
  'AI Workflow Automation', 'n8n Automation', 'API Integration', 'Stripe Integration', 'Git & GitHub',
  'Docker', 'AWS', 'Google Cloud Platform (GCP)', 'DigitalOcean', 'CI/CD', 'Database Design',
  'WebSockets', 'Authentication & Authorization', 'Cloud Deployment', 'AI Chatbot Development',
  'Full-Stack Development', 'AI-Powered SaaS Development', 'System Architecture'
];
const certs = [
  { title: 'Certified Principal Software Engineer', issuer: 'micro1', date: 'December 2024', image: 'micro1-certificate.jpeg', note: 'Passed micro1’s AI interview and certified as a Principal Software Engineer.' },
  { title: 'Python (Basic)', issuer: 'HackerRank', date: 'February 2026', image: 'python-basic-certificate.png', note: 'Python skill certification.' },
  { title: 'Problem Solving (Intermediate)', issuer: 'HackerRank', date: 'February 2026', image: 'problem-solving-certificate.png', note: 'Problem-solving skill certification.' },
  { title: 'Software Engineer', issuer: 'HackerRank', date: 'February 2026', image: 'software-engineer-certificate.png', note: 'Software Engineer role certification.' },
  { title: 'Deliver Ads and Evaluate Outcomes with Facebook Pixel', issuer: 'Meta', date: 'February 2019', image: null, note: 'Credential listed on LinkedIn.' },
  { title: 'Google Analytics for Beginners', issuer: 'Google', date: 'February 2019 · Expired February 2022', image: null, note: 'Credential listed on LinkedIn; expired in February 2022.' },
];

const reviewImages = [
  { image: 'review 1.png', alt: 'Client review for AI workflow development' },
  { image: 'review 2.png', alt: 'Client review for SaaS CRM development' },
  { image: 'review 3.png', alt: 'Client review for fintech and insurtech development' },
  { image: 'review 4.png', alt: 'Client review for AI-powered referral platform development' },
  { image: 'review 5.png', alt: 'Client review for GIS, AI, and data engineering' },
  { image: 'review 6.png', alt: 'Client review highlighting communication and delivery' },
];
function StarIcon({ size = 16 }) { return <Star size={size} fill="currentColor" aria-hidden="true" />; }

function App() {
  const [filter, setFilter] = useState('All');
  const [selected, setSelected] = useState(null);
  const [menu, setMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [cert, setCert] = useState(null);
  const [showAllSkills, setShowAllSkills] = useState(false);
  const [showWelcome, setShowWelcome] = useState(false);
  const [reviewIndex, setReviewIndex] = useState(0);
  const [reviewsPaused, setReviewsPaused] = useState(false);

  useEffect(() => {
    const welcomeTimer = window.setTimeout(() => setShowWelcome(true), 3000);
    return () => window.clearTimeout(welcomeTimer);
  }, []);

  useEffect(() => {
    if (reviewsPaused) return;
    const timer = window.setInterval(() => {
      setReviewIndex(current => (current + 1) % reviewImages.length);
    }, 5000);
    return () => window.clearInterval(timer);
  }, [reviewsPaused]);
  
  useEffect(() => { const fn = () => setScrolled(window.scrollY > 18); window.addEventListener('scroll', fn); return () => window.removeEventListener('scroll', fn); }, []);
  useEffect(() => { document.body.style.overflow = selected || cert ? 'hidden' : ''; return () => { document.body.style.overflow = ''; }; }, [selected, cert]);
  const visible = useMemo(() => filter === 'All' ? projects : projects.filter(p => p.category === filter), [filter]);
  const closeMenu = () => setMenu(false);
  return <>
    <header className={`header ${scrolled ? 'header-scrolled' : ''}`}>
      <a className="brand" href="#home" onClick={closeMenu}><span className="brand-mark">MT<span>.</span></span><span className="brand-name">Muhammad Talha<small>Software Engineer · AI Systems</small></span></a>
      <button className="mobile-toggle" onClick={() => setMenu(!menu)} aria-label="Toggle navigation">{menu ? <X/> : <Menu/>}</button>
      <nav className={menu ? 'nav nav-open' : 'nav'}>
        <a href="#about" onClick={closeMenu}>About</a><a href="#work" onClick={closeMenu}>My Work</a><a href="#expertise" onClick={closeMenu}>Expertise</a><a href="#experience" onClick={closeMenu}>Experience</a><a href="#reviews" onClick={closeMenu}>Reviews</a><a href="#certifications" onClick={closeMenu}>Certifications</a><a className="nav-contact" href="#contact" onClick={closeMenu}>Let’s talk </a>
      </nav>
    </header>
    <main>
      <section className="hero section-wrap" id="home">
        <div className="hero-grid" aria-hidden="true"><span/><span/><span/><span/><span/><span/><span/><span/><span/></div>
        <div className="hero-copy reveal">
          <div className="eyebrow"><span className="status-dot"/> AI & FULL-STACK SOFTWARE ENGINEERING</div>
          <h1>Engineering <span className="headline-accent">intelligent</span><br/>products for the<br/><span className="outline-text">real world.</span></h1>
          <p className="hero-sub">I build dependable software, AI-powered workflows, and scalable platforms that turn complex problems into practical products.</p>
          <div className="hero-actions"><a className="btn btn-dark" href="#work">Explore my work <ArrowDownRight size={17}/></a><a className="text-link" href="#contact">Let’s build something <ArrowUpRight size={16}/></a></div>
          <div className="hero-proof"><div className="proof-item"><strong>8+</strong><span>Years in software</span></div><div className="proof-separator"/><div className="proof-item"><strong>AI + SaaS</strong><span>Product engineering</span></div><div className="proof-separator"/><div className="proof-item"><strong>End-to-end</strong><span>From design to deployment</span></div></div>
        </div>
        <div className="hero-visual reveal delay-1"><div className="orbit orbit-one"/><div className="orbit orbit-two"/><div className="portrait-frame"><img src={A+'portrait.png'} alt="Muhammad Talha portrait"/></div><div className="floating-card card-ai"><span className="float-icon"><BrainCircuit size={18}/></span><span><b>AI systems</b><small>Useful, not just hype</small></span></div><div className="floating-card card-code"><span className="float-icon dark-icon"><Code2 size={18}/></span><span><b>Production-ready</b><small>Clean architecture</small></span></div><div className="hero-stamp"><Sparkles size={16}/><span>Build with<br/>purpose</span></div></div>
    
      </section>
      <section className="intro-strip"><div className="section-wrap strip-inner"><span>PYTHON & BACKEND</span><i>✳</i><span>AGENTIC AI</span><i>✳</i><span>SCALABLE SAAS</span><i>✳</i><span>CLOUD ENGINEERING</span><i>✳</i><span>API ARCHITECTURE</span></div></section>
      <section className="section-wrap section about-section" id="about"><div className="about-grid"><div><h2>Good software should make <em>hard things</em> feel simpler.</h2><div className="about-photo"><img src={A+'portrait.png'} alt="Muhammad Talha"/><div><strong>Muhammad Talha</strong><span>Software Engineer · AI Systems</span></div></div></div><div className="about-content"><p className="lead">I'm a certified Software Engineer with 8+ years of experience designing, developing, and deploying software solutions at scale.</p><p>My work spans AI-driven platforms, law-enforcement systems, SaaS applications, financial systems, healthcare solutions, and e-commerce. I care about clean architecture, security, performance, and long-term maintainability.</p><p>My core stack includes Python, Django, FastAPI, .NET Core, AWS, GCP, and Azure. I’m focused on intelligent, agent-driven platforms and scalable SaaS products that combine modern AI capabilities with modular, production-grade engineering.</p><a className="inline-link" href="/assets/Muhammad-Talha-CV.pdf" download>Download my CV <ArrowDownRight size={16}/></a></div></div></section>
      <section className="section work-section" id="work"><div className="section-wrap"><div className="section-top"><div><div className="section-kicker">MY WORK</div><h2>Projects built to <em>make an impact.</em></h2></div><p className="section-intro">A selection of software, AI, data, and platform projects across industries. Open a project to explore its scope and technology.</p></div><div className="filters" aria-label="Filter projects">{categories.map(c => <button key={c} className={filter === c ? 'filter active' : 'filter'} onClick={() => setFilter(c)}>{c}</button>)}</div><div className="project-grid">{visible.map((p, i) => <article className={`project-card project-${p.visual}`} key={p.title} role="button" tabIndex={0} aria-label={`Open details for ${p.title}`} onClick={e=>{if(!e.target.closest('a, button')) setSelected(p)}} onKeyDown={e=>{if((e.key==='Enter'||e.key===' ') && e.target===e.currentTarget){e.preventDefault();setSelected(p)}}} style={{'--i': i, display:'flex', height:'100%', cursor:'pointer'}}><div className="project-open" style={{display:'flex', flexDirection:'column', width:'100%', height:'100%'}}><div className="project-art"><div className="art-top"><span>{p.category}</span><span className="art-index">{String(i + 1).padStart(2, '0')}</span></div>
<div
  className="art-graphic"
  style={{ width: '100%', overflow: 'hidden', padding: 0, margin: 0, boxSizing: 'border-box' }}
>
  {p.image ? (
    <img
      src={p.image}
      alt={`${p.title} website screenshot`}
      className="project-real-image"
      loading="lazy"
      style={{ display: 'block', width: '100%', height: '100%', maxWidth: 'none', margin: 0, padding: 0, objectFit: 'cover', objectPosition: 'top center', boxSizing: 'border-box' }}
    />
  ) : (
    <ProjectGraphic type={p.visual} />
  )}
</div>
<div className="art-bottom" style={{justifyContent:'flex-end',color:'#fff'}}><span className="circle-arrow"><ArrowUpRight size={18}/></span></div></div><div className="project-info" style={{display:'flex', flexDirection:'column', flex:'1 1 auto'}}><h3>{p.title}</h3><p className="project-summary" style={{marginBottom:'4px',lineHeight:1.6}}>{p.summary}{' '}<button type="button" onClick={(e) => { e.stopPropagation(); setSelected(p); }} style={{display:'inline',border:0,background:'transparent',padding:0,margin:0,cursor:'pointer',color:'inherit',font:'inherit',fontSize:'inherit',fontWeight:'inherit',textDecoration:'underline',textUnderlineOffset:'3px',whiteSpace:'nowrap',transition:'color 180ms ease, opacity 180ms ease'}} onMouseEnter={e=>{e.currentTarget.style.color='#43845b';e.currentTarget.style.opacity='0.82'}} onMouseLeave={e=>{e.currentTarget.style.color='inherit';e.currentTarget.style.opacity='1'}}>See more <ArrowUpRight size={13} style={{display:'inline',verticalAlign:'middle'}}/></button></p><div className="project-card-actions" style={{display:'flex',gap:'10px',alignItems:'center',flexWrap:'wrap',marginTop:'auto',paddingTop:'14px'}}>{p.url ? <a className="inline-link" href={p.url} target="_blank" rel="noopener noreferrer" onClick={e=>e.stopPropagation()} style={{fontSize:'0.88rem',padding:'8px 13px',border:'1px solid #17211f',borderRadius:'999px',textDecoration:'none',whiteSpace:'nowrap',fontWeight:600,display:'inline-flex',alignItems:'center',gap:'5px',background:'#fff',color:'#17211f',transition:'background 180ms ease, color 180ms ease, transform 180ms ease, box-shadow 180ms ease',boxShadow:'0 1px 0 rgba(0,0,0,.04)'}} onMouseEnter={e=>{e.currentTarget.style.background='#17211f';e.currentTarget.style.color='#fff';e.currentTarget.style.transform='translateY(-2px)';e.currentTarget.style.boxShadow='0 5px 14px rgba(23,33,31,.16)'}} onMouseLeave={e=>{e.currentTarget.style.background='#fff';e.currentTarget.style.color='#17211f';e.currentTarget.style.transform='translateY(0)';e.currentTarget.style.boxShadow='0 1px 0 rgba(0,0,0,.04)'}}>Live website <ArrowUpRight size={14}/></a> : <button type="button" className="inline-link" onClick={() => setSelected(p)} title="No live website URL was provided; open project details instead" style={{fontSize:'0.88rem',padding:'8px 13px',border:'1px solid #17211f',borderRadius:'999px',background:'#fff',color:'#17211f',cursor:'pointer',whiteSpace:'nowrap',fontWeight:600,display:'inline-flex',alignItems:'center',gap:'5px',transition:'background 180ms ease, color 180ms ease, transform 180ms ease, box-shadow 180ms ease'}} onMouseEnter={e=>{e.currentTarget.style.background='#17211f';e.currentTarget.style.color='#fff';e.currentTarget.style.transform='translateY(-2px)';e.currentTarget.style.boxShadow='0 5px 14px rgba(23,33,31,.16)'}} onMouseLeave={e=>{e.currentTarget.style.background='#fff';e.currentTarget.style.color='#17211f';e.currentTarget.style.transform='translateY(0)';e.currentTarget.style.boxShadow='none'}}>Live website <ArrowUpRight size={14}/></button>}</div></div></div></article>)}</div><div className="work-foot"><span><span className="status-dot"/> More detail available on request</span><a href="#contact" className="inline-link">Have a project in mind? <ArrowUpRight size={16}/></a></div></div></section>
      <section className="section reviews-section" id="reviews">
        <style>{`
          .reviews-section { padding: clamp(72px, 9vw, 120px) 0; overflow: hidden; background: #f6f8f5; color: #202923; }
          .reviews-inner { width: min(1200px, calc(100% - 40px)); margin: 0 auto; }
          .reviews-heading { display:flex; align-items:flex-end; justify-content:space-between; gap:28px; margin-bottom:36px; }
          .reviews-kicker { display:inline-block; margin-bottom:16px; color:#58715f; font-size:.74rem; font-weight:750; letter-spacing:.15em; }
          .reviews-heading h2 { margin:0; font-size:clamp(2rem,5vw,3.5rem); line-height:1.12; letter-spacing:-.045em; }
          .reviews-heading h2 em { color:#58715f; font-weight:500; }
          .reviews-intro { max-width:380px; margin:0; color:#68756b; line-height:1.75; }
          .review-stars { display:flex; align-items:center; gap:3px; color:#ed7a27; }
          .reviews-viewport { overflow:hidden; padding:12px 0 24px; }
          .reviews-track { display:grid; grid-template-columns:repeat(2,minmax(0,1fr)); gap:22px; }
          .review-card { box-sizing:border-box; min-width:0; overflow:hidden; padding:15px; border:1px solid #e0e6df; border-radius:22px; background:#fff; box-shadow:0 10px 30px rgba(23,33,31,.055); animation:reviewSlideIn .35s ease both; }
          .review-card:hover { transform:translateY(-3px); border-color:#cbd8ca; box-shadow:0 18px 42px rgba(23,33,31,.11); }
          .review-card-top,.review-card-footer { display:flex; align-items:center; justify-content:space-between; gap:12px; }
          .review-card-top { margin-bottom:11px; }
          .review-label { color:#58715f; font-size:.73rem; font-weight:650; }
          .review-image-wrap { display:flex; align-items:center; justify-content:center; width:100%; aspect-ratio:16/6; overflow:hidden; border:1px solid #edf0ed; border-radius:12px; background:#fff; }
          .review-image-wrap img { display:block; width:100%; height:100%; object-fit:contain; object-position:center; }
          .review-card-footer { padding-top:12px; color:#68756b; font-size:.82rem; }
          .review-card-footer svg { color:#58715f; }
          .reviews-controls { display:flex; justify-content:center; align-items:center; gap:14px; margin-top:14px; }
          .reviews-arrow { width:42px; height:42px; display:grid; place-items:center; border:1px solid #d9e1d8; border-radius:50%; background:#fff; color:#263b2d; cursor:pointer; transition:background .2s,color .2s,transform .2s; }
          .reviews-arrow:hover { background:#263b2d; color:#fff; transform:translateY(-2px); }
          .reviews-dots { display:flex; align-items:center; justify-content:center; gap:8px; }
          .reviews-dot { width:9px; height:9px; padding:0; border:0; border-radius:50%; background:#cbd5ca; cursor:pointer; transition:transform .2s,background .2s; }
          .reviews-dot[aria-current="true"] { background:#58715f; transform:scale(1.35); }
          .reviews-note { margin:15px 0 0; color:#788179; font-size:.84rem; text-align:center; }
          @keyframes reviewSlideIn { from { opacity:.5; transform:translateY(5px); } to { opacity:1; transform:translateY(0); } }
          @media(max-width:700px) { .reviews-heading { align-items:flex-start; flex-direction:column; gap:22px; } .reviews-track { grid-template-columns:minmax(0,1fr); gap:14px; } .review-card { padding:12px; border-radius:17px; } }
          @media(prefers-reduced-motion:reduce) { .review-card { animation:none; } }
        `}</style>
        <div className="reviews-inner">
          <div className="section-kicker">CLIENT REVIEWS</div>
          <div className="reviews-heading">
            <div><span className="reviews-kicker">TRUST BUILT THROUGH DELIVERY</span><h2>Good work speaks.<br/><em>Clients confirm it.</em></h2></div>
          </div>
          <p className="reviews-intro" style={{marginBottom:'24px'}}>A selection of feedback on engineering quality, communication, reliability, and delivery.</p>
          <div className="reviews-viewport" aria-label="Client reviews carousel" onMouseEnter={() => setReviewsPaused(true)} onMouseLeave={() => setReviewsPaused(false)} onFocus={() => setReviewsPaused(true)} onBlur={(event) => { if (!event.currentTarget.contains(event.relatedTarget)) setReviewsPaused(false); }}>
            <div className="reviews-track">
              {[0,1].map(offset => {
                const review = reviewImages[(reviewIndex + offset) % reviewImages.length];
                return <article
  className="review-card"
  key={`${review.image}-${reviewIndex}-${offset}`}
>
                  <div className="review-card-top"><span className="review-stars" aria-label="Five stars">{[1,2,3,4,5].map(star=><StarIcon key={star}/>)}</span><span className="review-label">Client feedback</span></div>
                  <div className="review-image-wrap"><img src={`/assets/${encodeURIComponent(review.image)}`} alt={review.alt} loading="eager" onError={(event) => console.error('Unable to load review image:', event.currentTarget.src)} /></div>
                  <div className="review-card-footer"><span>Project review</span><ArrowUpRight size={17}/></div>
                </article>;
              })}
            </div>
          </div>
          <div className="reviews-controls" aria-label="Review carousel controls">
            <button type="button" className="reviews-arrow" aria-label="Previous reviews" onClick={() => setReviewIndex(i => (i - 1 + reviewImages.length) % reviewImages.length)}><ArrowRight size={18} style={{transform:'rotate(180deg)'}}/></button>
            <div className="reviews-dots">{reviewImages.map((review,index)=><button key={review.image} type="button" className="reviews-dot" aria-label={`Show review ${index+1}`} aria-current={reviewIndex===index?'true':'false'} onClick={() => setReviewIndex(index)} />)}</div>
            <button type="button" className="reviews-arrow" aria-label="Next reviews" onClick={() => setReviewIndex(i => (i + 1) % reviewImages.length)}><ArrowRight size={18}/></button>
          </div>
          <p className="reviews-note">Original review screenshots are shown without rewriting the client feedback.</p>
        </div>
      </section>
      <section className="section-wrap section expertise-section" id="expertise"><div className="section-kicker">EXPERTISE</div><div className="section-top"><h2>From first sketch<br/>to <em>stable scale.</em></h2><p className="section-intro">A practical engineering toolkit for building and improving real products—from APIs and data to AI workflows and cloud infrastructure.</p></div><div className="expertise-grid"><ExpertiseCard icon={<BrainCircuit/>} number="01" title="AI & Agentic Systems" text="LLM integrations, AI workflows, conversational intelligence, retrieval-augmented generation, and practical automation." tags={['OpenAI API','LangChain','LangGraph','RAG']}/><ExpertiseCard icon={<Code2/>} number="02" title="Full-Stack Engineering" text="Robust backends and intuitive product interfaces built around maintainable architecture and clear API contracts." tags={['Python','Django','FastAPI','React','.NET Core']}/><ExpertiseCard icon={<Database/>} number="03" title="Data & Performance" text="Reliable data models, query optimisation, asynchronous processing, and reporting pipelines that hold up under load." tags={['PostgreSQL','Redis','Celery','PostGIS']}/><ExpertiseCard icon={<Server/>} number="04" title="Cloud & Delivery" text="Deployment workflows, integrations, cloud infrastructure, testing, and operational reliability." tags={['AWS','GCP','Azure','Docker','CI/CD']}/></div><div className="skills-panel"><div className="skills-panel-heading"><span className="skills-label">TECH STACK</span><h3>Tools I work with</h3><p>Technologies and capabilities I use to build reliable products.</p></div><div className="skills-panel-content"><div className="skill-cloud">{skills.slice(0, showAllSkills ? skills.length : 20).map(s=><span key={s}>{s}</span>)}</div><button className="skills-toggle" onClick={() => setShowAllSkills(!showAllSkills)}>{showAllSkills ? "Show fewer skills" : "View 20+ more skills"} <ArrowDownRight size={15}/></button></div></div></section>
      <section className="experience-section section" id="experience"><style>{"@keyframes experienceCardIn { from { opacity: 0; transform: translateY(18px) scale(.985); } to { opacity: 1; transform: translateY(0) scale(1); } } .timeline { isolation: isolate; } .timeline-item { animation: experienceCardIn .65s cubic-bezier(.2,.75,.25,1) both; transition: transform .28s ease, border-color .28s ease, box-shadow .28s ease !important; } .timeline-item:nth-child(1) { animation-delay: .04s; } .timeline-item:nth-child(2) { animation-delay: .10s; } .timeline-item:nth-child(3) { animation-delay: .16s; } .timeline-item:nth-child(4) { animation-delay: .22s; } .timeline-item:nth-child(5) { animation-delay: .28s; } .timeline-item:nth-child(6) { animation-delay: .34s; } .timeline-item::before, .timeline-item::after { content: none !important; display: none !important; } .timeline-item:hover { transform: none !important; box-shadow: 0 18px 38px rgba(23,33,31,.14) !important; } .timeline-item button { transition: color .2s ease, transform .2s ease; } .timeline-item button:hover { color: #263b2d !important; transform: translateX(3px); } @media (prefers-reduced-motion: reduce) { .timeline-item { animation: none !important; transition: none !important; } .timeline-item::before, .timeline-item::after { transition: none !important; } }"}</style><div className="section-wrap"><div className="section-kicker">EXPERIENCE</div><div className="experience-intro-card" style={{display:"flex",alignItems:"flex-end",justifyContent:"space-between",gap:"28px",padding:"clamp(24px,4vw,42px)",margin:"0 0 34px",background:"#e8eee5",border:"1px solid #d8e1d5",borderRadius:"24px",boxShadow:"0 12px 32px rgba(23,33,31,.06)",flexWrap:"wrap"}}><div style={{flex:"1 1 320px"}}><span style={{display:"inline-flex",alignItems:"center",padding:"7px 11px",borderRadius:"999px",background:"rgba(255,255,255,.78)",color:"#506a57",fontSize:".72rem",fontWeight:700,letterSpacing:".12em",marginBottom:"16px"}}>CAREER HIGHLIGHTS</span><h2 style={{margin:0}}>Experience that<br/><em>ships software.</em></h2></div><p className="section-intro" style={{maxWidth:"390px",margin:"0",flex:"0 1 340px"}}>A career shaped by production systems, complex integrations, and cross-functional engineering.</p></div><div className="timeline" style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(min(100%,320px),1fr))",gap:"18px",position:"relative"}}>
<TimelineItem role="Principal Software Engineer" company="Search Atlas" points={['Contribute to engineering work across software products and platform capabilities.','Apply full-stack engineering and backend problem-solving to build maintainable, production-ready solutions.']}/>
<TimelineItem role="Principal Software Engineer" company="Radity" points={['Improved reliability of Socotra, Stripe, and Auth0 integrations, reducing 503-related failures by 99%.','Optimised PostgreSQL queries and eliminated N+1 issues, reducing API response times by 80%.','Designed 100+ REST APIs for policy lifecycle, quote processing, and claims workflows; supported scaling for 2M+ active users.']}/>
<TimelineItem role="Senior Software Engineer" company="Datics AI" points={['Built AI pipelines for sentiment analysis, call-outcome classification, and entity extraction across 100K+ conversations daily.','Integrated six VOIP providers and engineered transcript-processing workflows using Google Cloud Functions.','Established GitHub Actions CI/CD pipelines, reducing deployment time by 85%; worked across law-enforcement, fintech, and conversational AI products.']}/>
<TimelineItem role="Senior Software Engineer" company="Ginkgo Retail" points={['Worked as a Senior Software Engineer supporting retail software and product development.']}/>
<TimelineItem role="Software Engineer" company="Devsinc — Middle East & Africa" points={['Delivered e-commerce systems spanning 30+ modules across order management, logistics, inventory, and fulfilment.','Built payment gateways, Shopify middleware, and omnichannel order aggregation for 130+ retailers.','Designed courier logistics workflows supporting shipment tracking, route optimisation, and delivery management for 12M+ parcels annually.']}/>
<TimelineItem role=".NET Core Intern" company="Tech Bridge Consultancy" points={['Contributed to .NET Core MVC web applications, business logic, and SQL Server database work.','Supported debugging, testing, and deployment while learning collaborative software development practices.']}/>
</div>
      </div></section>
      <section className="section-wrap section cert-section" id="certifications"><div className="section-kicker">CERTIFICATIONS</div><div className="section-top"><h2>Always learning.<br/><em>Always improving.</em></h2><p className="section-intro">Selected certifications and credentials listed in my professional profile.</p></div><div className="cert-grid">{certs.map(c=><button className="cert-card" key={c.title} onClick={()=>setCert(c)}><div className="cert-icon">{c.issuer==='micro1'?<ShieldCheck/>:<CheckCircle2/>}</div><div className="cert-copy"><span>{c.issuer} · {c.date}</span><h3>{c.title}</h3><p>{c.note}</p></div><ArrowUpRight className="cert-arrow" size={18}/></button>)}</div></section>
      <section className="contact-section section" id="contact"><div className="section-wrap contact-inner"><div className="section-kicker">CONTACT</div><div className="contact-layout"><div><h2>Have a challenge<br/>worth <em>solving?</em></h2><p className="contact-copy">Tell me what you’re building, what’s slowing you down, or where AI could make a practical difference. Let’s talk about the next step.</p><a className="btn btn-light" href="mailto:captiontalha@gmail.com?subject=Project%20Enquiry">Start a conversation <ArrowUpRight size={17}/></a></div><div className="contact-card"><span className="contact-card-label">GET IN TOUCH</span><a href="mailto:captiontalha@gmail.com" className="contact-line"><Mail/><span><small>Email</small><b>captiontalha@gmail.com</b></span><ArrowUpRight/></a><a href="https://www.linkedin.com/in/muhammadtalha05/" target="_blank" rel="noreferrer" className="contact-line"><Linkedin/><span><small>LinkedIn</small><b>Connect professionally</b></span><ArrowUpRight/></a><a href="https://github.com/mtalha5" target="_blank" rel="noreferrer" className="contact-line"><Github/><span><small>GitHub</small><b>Explore code</b></span><ArrowUpRight/></a><div className="availability"><span className="status-dot"/> Open to thoughtful conversations and challenging projects</div></div></div></div></section>
    </main>
    <footer className="footer"><div className="section-wrap footer-inner"><a className="brand" href="#home"><span className="brand-mark">MT<span>.</span></span><span className="brand-name">Muhammad Talha<small>Software Engineer · AI Systems</small></span></a><span>Built with care. © {new Date().getFullYear()} Muhammad Talha</span><a href="#home" className="back-top">Back to top ↑</a></div></footer>
    {selected && <div className="modal-backdrop" onMouseDown={e=>{if(e.target===e.currentTarget)setSelected(null)}}><div className="project-modal" role="dialog" aria-modal="true" aria-label={selected.title}><button className="modal-close" onClick={()=>setSelected(null)} aria-label="Close"><X/></button><div className={`modal-art project-${selected.visual}`}>
  {selected.image ? (
    <img
      src={selected.image}
      alt={`${selected.title} dashboard screenshot`}
      className="project-modal-image"
      style={{ display: 'block', width: '100%', height: '100%', maxWidth: 'none', margin: 0, padding: 0, objectFit: 'contain', objectPosition: 'center', boxSizing: 'border-box' }}
    />
  ) : (
    <ProjectGraphic type={selected.visual} />
  )}
</div><div className="modal-body"><span className="section-kicker">{selected.category} / PROJECT DETAILS</span><h2>{selected.title}</h2><p className="modal-lead">{selected.summary}</p><p>{selected.detail}</p><h3>Technology & focus</h3><div className="project-tags modal-tags">{selected.stack.map(s=><span key={s}>{s}</span>)}</div><div style={{display:'flex',gap:'12px',flexWrap:'wrap',alignItems:'center'}}>{selected.url && <a className="btn btn-dark" href={selected.url} target="_blank" rel="noopener noreferrer">Visit live website <ArrowUpRight size={16}/></a>}<a className="btn btn-dark" href="mailto:captiontalha@gmail.com?subject=Project%20Enquiry">Discuss a similar project <ArrowUpRight size={16}/></a></div></div></div></div>}
    {cert && <div className="modal-backdrop" onMouseDown={e=>{if(e.target===e.currentTarget)setCert(null)}}><div className="cert-modal" role="dialog" aria-modal="true" aria-label={cert.title}><button className="modal-close" onClick={()=>setCert(null)} aria-label="Close"><X/></button>{cert.image ? <img src={A+cert.image} alt={`${cert.title} certificate`} className="certificate-image"/> : <div className="credential-placeholder"><CheckCircle2 size={44}/><span>{cert.issuer}</span><h2>{cert.title}</h2><p>{cert.date}</p><small>Credential details listed in professional profile.</small></div>}<div className="cert-modal-caption"><h3>{cert.title}</h3><p>{cert.issuer} · {cert.date}</p>{cert.title==='Python (Basic)'&&<a href="https://www.hackerrank.com/certificates/6a48a836ad80" target="_blank" rel="noreferrer">View credential <ArrowUpRight size={14}/></a>}{cert.title==='Problem Solving (Intermediate)'&&<a href="https://www.hackerrank.com/certificates/888d9e99a63b" target="_blank" rel="noreferrer">View credential <ArrowUpRight size={14}/></a>}</div></div></div>}
    {showWelcome && (
      <div
        onMouseDown={(event) => {
          if (event.target === event.currentTarget) setShowWelcome(false);
        }}
        style={{
          position: 'fixed', inset: 0, zIndex: 10000,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          padding: '20px', background: 'rgba(15,24,19,.58)',
          backdropFilter: 'blur(6px)'
        }}
      >
        <div
          className="welcome-popup-motion"
          role="dialog"
          aria-modal="true"
          aria-labelledby="welcome-popup-title"
          style={{
            position: 'relative', width: '100%', maxWidth: '520px',
            boxSizing: 'border-box', padding: 'clamp(26px,5vw,40px)',
            borderRadius: '22px', background: '#fff', color: '#202923',
            boxShadow: '0 28px 90px rgba(0,0,0,.25)',
            animation: 'welcomePopupIn .35s ease both'
          }}
        >
          <style>{`@keyframes welcomePopupIn { from { opacity: 0; transform: translateY(12px) scale(.98); } to { opacity: 1; transform: translateY(0) scale(1); } } @media (prefers-reduced-motion: reduce) { .welcome-popup-motion { animation: none !important; } }`}</style>
          <button
            type="button"
            onClick={() => setShowWelcome(false)}
            aria-label="Close welcome popup"
            style={{
              position: 'absolute', top: '12px', right: '14px',
              width: '36px', height: '36px', border: '1px solid #e0e6df',
              borderRadius: '50%', background: '#f6f8f5', color: '#25332b',
              fontSize: '24px', lineHeight: 1, cursor: 'pointer'
            }}
          >×</button>
          <span style={{ display: 'block', marginBottom: '14px', color: '#58715f', fontSize: '.75rem', fontWeight: 750, letterSpacing: '.13em' }}>WELCOME</span>
          <h2 id="welcome-popup-title" style={{ margin: '0 22px 12px 0', fontSize: 'clamp(1.65rem,4vw,2.25rem)', lineHeight: 1.2 }}>
            Welcome to the<br />
            <em style={{ color: '#58715f' }}>Muhammad Talha Portfolio</em>
          </h2>
          <p style={{ margin: '0 0 26px', color: '#66736b', lineHeight: 1.7 }}>
            Explore projects, engineering experience, and AI-powered solutions.
          </p>
          <div style={{ display: 'flex', justifyContent: 'space-between', gap: '12px', flexWrap: 'wrap' }}>
            <button
              type="button"
              onClick={() => setShowWelcome(false)}
              style={{ padding: '11px 17px', border: '1px solid #d8e1d5', borderRadius: '999px', background: '#f6f8f5', color: '#263b2d', fontWeight: 650, cursor: 'pointer' }}
            >Thank you</button>
            <button
              type="button"
              onClick={() => setShowWelcome(false)}
              style={{ padding: '11px 19px', border: 0, borderRadius: '999px', background: '#263b2d', color: '#fff', fontWeight: 650, cursor: 'pointer' }}
            >I’m a client</button>
          </div>
        </div>
      </div>
    )}
  </>;
}
function ExpertiseCard({icon,number,title,text,tags}) { return <article className="expertise-card"><div className="expertise-card-top"><span className="expertise-icon">{icon}</span><span className="expertise-number">{number}</span></div><h3>{title}</h3><p>{text}</p><div className="expertise-tags">{tags.map(t=><span key={t}>{t}</span>)}</div></article>; }
function TimelineItem({role,company,points}) {
  const [expanded, setExpanded] = useState(false);
  const visiblePoints = points.slice(0, 2);
  useEffect(() => {
    if (!expanded) return;
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, [expanded]);
  return <>
    <article className="timeline-item" style={{display:"flex",flexDirection:"column",height:"100%",minHeight:"250px",boxSizing:"border-box",padding:"24px",background:"#fff",border:"1px solid #e0e6df",borderRadius:"18px",boxShadow:"0 8px 24px rgba(23,33,31,.045)",position:"relative",overflow:"hidden"}}>
      <div className="timeline-content" style={{display:"flex",flexDirection:"column",height:"100%"}}>
        <div className="timeline-heading" style={{marginBottom:"14px",minHeight:"72px"}}><div><h3 style={{margin:"0 0 7px",lineHeight:1.3}}>{role}</h3><b style={{color:"#58715f",lineHeight:1.4}}>{company}</b></div></div>
        <ul style={{margin:0,paddingLeft:"18px",lineHeight:1.7,flex:"1 1 auto"}}>{visiblePoints.map(p=><li key={p} style={{marginBottom:"8px"}}>{p}</li>)}</ul>
        {points.length > visiblePoints.length && <button type="button" onClick={()=>setExpanded(true)} style={{alignSelf:"flex-start",marginTop:"12px",padding:"5px 0",border:0,background:"transparent",color:"#58715f",fontSize:".9rem",fontWeight:650,textDecoration:"underline",textUnderlineOffset:"3px",cursor:"pointer"}}>See more +</button>}
      </div>
    </article>
    {expanded && <div className="modal-backdrop" style={{position:"fixed",inset:0,zIndex:9999,display:"flex",alignItems:"center",justifyContent:"center",padding:"20px",background:"rgba(16,25,20,.62)",backdropFilter:"blur(5px)"}} onMouseDown={e=>{if(e.target===e.currentTarget)setExpanded(false)}}>
      <div role="dialog" aria-modal="true" aria-label={`${role} at ${company}`} style={{position:"relative",width:"min(100%,680px)",maxHeight:"min(85vh,760px)",overflowY:"auto",boxSizing:"border-box",padding:"clamp(24px,4vw,36px)",borderRadius:"22px",background:"#fff",boxShadow:"0 24px 80px rgba(0,0,0,.25)"}}>
        <button type="button" onClick={()=>setExpanded(false)} aria-label="Close experience details" style={{position:"absolute",top:"16px",right:"16px",width:"38px",height:"38px",border:"1px solid #e0e6df",borderRadius:"50%",background:"#f6f8f5",color:"#25332b",fontSize:"24px",lineHeight:1,cursor:"pointer"}}>×</button>
        <span style={{display:"block",marginBottom:"10px",fontSize:".72rem",fontWeight:750,letterSpacing:".13em",color:"#58715f"}}>EXPERIENCE DETAILS</span>
        <h2 style={{margin:"0 48px 6px 0",fontSize:"clamp(1.5rem,3vw,2rem)",lineHeight:1.25,color:"#202923"}}>{role}</h2>
        <b style={{display:"block",marginBottom:"24px",color:"#58715f"}}>{company}</b>
        <ul style={{margin:0,paddingLeft:"22px",lineHeight:1.8,color:"#66736b"}}>{points.map((p,i)=><li key={`${i}-${p}`} style={{marginBottom:"14px"}}>{p}</li>)}</ul>
        <button type="button" onClick={()=>setExpanded(false)} style={{marginTop:"12px",padding:"11px 18px",border:0,borderRadius:"10px",background:"#263b2d",color:"#fff",fontWeight:650,cursor:"pointer"}}>Close details</button>
      </div>
    </div>}
  </>;
}
function ProjectGraphic({type}) { const icons={insurance:<><div className="graphic-shield"><ShieldCheck size={55}/></div><div className="graphic-pill pill-a">POLICY / ACTIVE</div><div className="graphic-pill pill-b">QUOTE → CLAIM</div></>,tax:<><div className="graphic-chart"><i/><i/><i/><i/><i/><i/></div><div className="graphic-number">$ <span>Tax systems</span></div><div className="graphic-pill pill-a">SECURE PAYMENTS</div></>,awareness:<><div className="radar"><span/><span/><span/><i/></div><div className="graphic-pill pill-a">LIVE INTELLIGENCE</div></>,peerlogic:<><div className="waveform">{Array.from({length:23},(_,i)=><i key={i} style={{'--h':`${15+((i*17)%48)}px`}}/>)}</div><div className="graphic-pill pill-a">CONVERSATION → INSIGHT</div></>,workflow:<><div className="node-flow"><span>INPUT</span><i/><span>FSM</span><i/><span>OUTPUT</span></div><div className="graphic-pill pill-a">DETERMINISTIC AI</div></>,referral:<><div className="network-graphic"><span/><span/><span/><span/><i/><i/><i/></div><div className="graphic-pill pill-a">REFERRAL NETWORK</div></>,logistics:<><div className="route-map"><svg viewBox="0 0 280 150"><path d="M20 125 C60 125,48 45,95 55 S130 125,168 85 S210 30,260 25"/><circle cx="20" cy="125" r="6"/><circle cx="95" cy="55" r="6"/><circle cx="168" cy="85" r="6"/><circle cx="260" cy="25" r="6"/></svg></div><div className="graphic-pill pill-a">TRACK · ROUTE · DELIVER</div></>,commerce:<><div className="commerce-boxes"><span/><span/><span/></div><div className="graphic-pill pill-a">OMNICHANNEL COMMERCE</div></>,health:<><div className="health-cross"><span/><i/></div><div className="graphic-pill pill-a">CARE WORKFLOWS</div></>,research:<><div className="research-orbs"><span/><span/><span/></div><div className="graphic-pill pill-a">AI PRODUCT SYSTEMS</div></>}; return <div className={`graphic graphic-${type}`}>{icons[type] || icons.workflow}</div>; }

createRoot(document.getElementById('root')).render(<App/>);