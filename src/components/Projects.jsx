import React from 'react';

const projects = [
  {
    title: 'Exportx ERPX (Sai Resources)',
    industry: 'Coal Industry - Indonesia',
    description: 'Developed core ERP modules including Costing, Procurement, and Currency Conversion. Streamlined purchase and sales order creation workflows.',
    tech: ['React', 'TypeScript', 'NestJS', 'MySQL', 'Redux', 'NX', 'Crons'],
    role: 'Module Lead',
    icon: '📊'
  },
  {
    title: 'Sustainability Platform (Shahi)',
    industry: 'Apparel Industry',
    description: 'Enterprise sustainability project focused on waste management and environmental impact tracking for Shahi Apparel.',
    tech: ['React', 'TypeScript', 'NestJS', 'MySQL', 'Redux', 'NX', 'Ant Design'],
    role: 'Lead Developer',
    icon: '🌿'
  },
  {
    title: 'Sakku Eggs Portal',
    industry: 'Poultry Industry',
    description: 'A data-driven platform for tracking daily egg rates and feed data with automated WhatsApp/Email alerts and reporting bots.',
    tech: ['NestJS', 'TypeScript', 'React', 'WhatsApp API', 'Cron Jobs', 'Focus Integration', 'Bot Development'],
    role: 'System Architect',
    icon: '🥚'
  },
  {
    title: 'Xpparel SaaS',
    industry: 'Apparel Industry - Bangladesh',
    description: 'Microservices-based apparel management system covering packing, warehouse (FG), HRIS, and dispatch logistics.',
    tech: ['Microservices', 'NestJS', 'Bull JS', 'Redis', 'React', 'MySQL', 'NX'],
    role: 'Lead Developer',
    icon: '⚡'
  },
  {
    title: 'WFX Data Migration',
    industry: 'System Integration',
    description: 'Complex data migration service migrating legacy WFX data to Xpparel, handling large scale Excel/FS processing and API entity mapping.',
    tech: ['Node.js', 'FS', 'Excel Processing', 'Microservices', 'Bull JS', 'API Integration'],
    role: 'Integration Lead',
    icon: '📁'
  },
  {
    title: 'Swatches Library',
    industry: 'Open Source / Frontend Utility',
    description: 'A dedicated library for managing and implementing color swatches across professional UI components. Focused on consistency and developer productivity.',
    tech: ['JavaScript', 'CSS', 'UI/UX Design', 'GitLab'],
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
        gap: '2rem' 
      }}>
        {projects.map((project, index) => (
          <div key={index} className="glass" style={{ 
            padding: '2rem', 
            borderRadius: '24px',
            display: 'flex',
            flexDirection: 'column'
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
                letterSpacing: '0.1em'
              }}>{project.role}</span>
            </div>
            
            <h3 style={{ fontSize: '1.4rem', marginBottom: '0.5rem' }}>{project.title}</h3>
            <p style={{ color: 'var(--primary)', fontSize: '0.85rem', fontWeight: 600, marginBottom: '1rem' }}>{project.industry}</p>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', fontSize: '0.95rem', flexGrow: 1 }}>
              {project.description}
            </p>
            
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginTop: 'auto' }}>
              {project.tech.map((t, i) => (
                <span key={i} style={{ 
                  fontSize: '0.7rem', 
                  padding: '3px 10px', 
                  borderRadius: '6px', 
                  background: 'rgba(255, 255, 255, 0.05)',
                  color: 'var(--text-secondary)',
                  border: '1px solid var(--glass-border)'
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
