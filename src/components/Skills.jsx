import React from 'react';

const skillCategories = [
  {
    title: 'Frontend Development',
    icon: '💻',
    skills: ['React JS', 'TypeScript', 'Ant Design', 'Redux', 'JavaScript (ES6+)']
  },
  {
    title: 'Backend & Systems',
    icon: '⚙️',
    skills: ['Nest JS', 'Node.js', 'Microservices', 'REST APIs', 'Bull JS', 'WebSockets']
  },
  {
    title: 'Data & Devops',
    icon: '🗄️',
    skills: ['MySQL', 'Redis', 'NX Monorepo', 'Git/GitHub/GitLab', 'Cron Jobs']
  },
  {
    title: 'Business Logic',
    icon: '📦',
    skills: ['ERP Modules', 'Data Migration', 'Costing & Procurement', 'HRIS Systems']
  }
];

const Skills = () => {
  return (
    <section id="skills" className="container">
      <h2 className="section-title">Technical Skills</h2>
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
        gap: '2rem' 
      }}>
        {skillCategories.map((cat, index) => (
          <div key={index} className="glass" style={{ padding: '2.5rem', borderRadius: '32px' }}>
            <div style={{ 
              color: 'var(--primary)', 
              marginBottom: '1.5rem',
              width: '50px',
              height: '50px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'rgba(99, 102, 241, 0.1)',
              borderRadius: '16px',
              fontSize: '1.5rem'
            }}>
              {cat.icon}
            </div>
            <h3 style={{ marginBottom: '1.5rem', fontSize: '1.25rem' }}>{cat.title}</h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
              {cat.skills.map((skill, i) => (
                <div key={i} style={{ 
                  color: 'var(--text-secondary)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  fontSize: '0.95rem'
                }}>
                  <div style={{ width: '4px', height: '4px', borderRadius: '50%', background: 'var(--primary)' }}></div>
                  {skill}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
