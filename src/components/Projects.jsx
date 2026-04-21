import React from 'react';

const projects = [
  {
    title: 'Exportx ERPX (Sai Resources)',
    industry: 'Coal Industry (Indonesia)',
    description: 'Developed core ERP modules including Costing, Procurement, and Currency Conversion.',
    points: ['Lead: Costing modules, Master management, PO/SO creation, Procurement, and Currency conversion.'],
    tech: ['React JS', 'NestJS', 'MySQL', 'NX Monorepo', 'Redux', 'Ant Design'],
    role: 'Lead Developer',
    icon: '🏗️'
  },
  {
    title: 'Sustainability Project (Shahi)',
    industry: 'Apparel Industry',
    description: 'Pioneered the planning and architectural structure for an industrial waste management system.',
    points: ['Lead: Project Planning, Core Structure development, and UI Designing.'],
    tech: ['NestJS', 'React JS', 'Redux', 'TypeScript', 'MySQL'],
    role: 'Project Architect',
    icon: '♻️'
  },
  {
    title: 'Sakku Project (Egg Rates)',
    industry: 'Poultry Industry',
    description: 'Developed a real-time data portal with WhatsApp/Email alerts and Focus ERP integration.',
    points: ['Lead: Architecture, Integration with Focus ERP, real-time alert systems, and reports.'],
    tech: ['NestJS', 'WhatsApp API', 'Cron Jobs', 'Focus Integration', 'Bot Dev'],
    role: 'Lead Full Stack',
    icon: '🥚'
  },
  {
    title: 'Xpparel Project (Bangladesh)',
    industry: 'Apparel SaaS',
    description: 'Built scalable microservices for packing, warehouse, and dispatch modules for a Bangladesh client.',
    points: ['Lead: Packing module, FG-Warehouse, Dispatch, Logistics, and HRIS integration.'],
    tech: ['Microservices', 'Bull JS', 'Redis', 'NestJS', 'Node.js'],
    role: 'Module Lead',
    icon: '👕'
  },
  {
    title: 'WFX to Xpparel ETL Engine',
    industry: 'Data Migration',
    description: 'Engineered a high-speed migration engine for transferring massive multi-tenant datasets.',
    points: ['Lead: Engineered migration engine, API management, Disk I/O (FS), and Excel ETL.'],
    tech: ['Node.js (FS)', 'Excel processing', 'BullJS', 'Redis', 'ETL'],
    role: 'ETL Lead',
    icon: '🔄'
  },
  {
    title: 'Swatches Library',
    industry: 'Open Source / Utility',
    description: 'A dedicated library for managing and implementing color swatches across professional UI components.',
    points: ['Implements real-time swatch sync using WebSockets and cross-platform UI logic.'],
    tech: ['JavaScript', 'WebSockets', 'UI/UX Design', 'GitLab'],
    role: 'Creator',
    icon: '🎨'
  }
];

const Projects = () => {
  return (
    <section id="projects" className="container">
      <h2 className="section-title">Professional Projects</h2>
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', 
        gap: '2.5rem' 
      }}>
        {projects.map((project, index) => (
          <div key={index} className="glass" style={{ 
            padding: '2.5rem', 
            borderRadius: '24px',
            display: 'flex',
            flexDirection: 'column',
            position: 'relative',
            borderLeft: '4px solid var(--primary)'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem' }}>
              <div style={{ 
                width: '48px', 
                height: '48px', 
                background: 'rgba(99, 102, 241, 0.1)', 
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.5rem'
              }}>
                {project.icon}
              </div>
              <span style={{ 
                fontSize: '0.7rem', 
                fontWeight: 700, 
                textTransform: 'uppercase', 
                color: 'var(--primary)',
                letterSpacing: '0.1em',
                background: 'rgba(99, 102, 241, 0.05)',
                padding: '4px 12px',
                borderRadius: '20px'
              }}>{project.role}</span>
            </div>
            
            <h3 style={{ fontSize: '1.4rem', marginBottom: '0.5rem' }}>{project.title}</h3>
            <p style={{ color: 'var(--primary)', fontSize: '0.85rem', fontWeight: 600, marginBottom: '1rem' }}>{project.industry}</p>
            
            <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem', fontSize: '0.95rem' }}>
              {project.description}
            </p>

            <ul style={{ 
              margin: '0 0 1.5rem 0', 
              paddingLeft: '1.2rem', 
              listStyleType: 'disc', 
              fontSize: '0.9rem', 
              color: 'var(--text-primary)',
              opacity: 0.9,
              flexGrow: 1
            }}>
              {project.points.map((p, i) => (
                <li key={i} style={{ marginBottom: '0.4rem' }}>{p}</li>
              ))}
            </ul>
            
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: 'auto' }}>
              {project.tech.map((t, i) => (
                <span key={i} style={{ 
                  fontSize: '0.7rem', 
                  padding: '4px 10px', 
                  borderRadius: '6px', 
                  background: 'rgba(255, 255, 255, 0.03)',
                  color: 'var(--text-secondary)',
                  border: '1px solid var(--glass-border)',
                  fontWeight: 500
                }}>{t}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
