import React from 'react';

const About = () => {
  const yearsExp = new Date().getFullYear() - 2022;
  const age = new Date().getFullYear() - 2000;

  return (
    <section id="about" className="container">
      <h2 className="section-title">About Me</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'start' }}>
        <div className="glass" style={{ padding: '3rem', borderRadius: '40px' }}>
          <h3 style={{ marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
             🏢 Professional Journey
          </h3>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', fontSize: '1.05rem', lineHeight: '1.8' }}>
            I am a Full Stack Developer currently contributing to major enterprise projects at <strong>Schemax Export Techno Craft Pvt. Ltd</strong> (since January 2022). 
            I specialize in building complex ERP systems and microservices-based architectures that solve real-world industry challenges with {yearsExp}+ years of focused experience.
          </p>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: 'var(--text-secondary)' }}>
              📅 <span>Born June 10, 2000 ({age} Years Old)</span>
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          <div className="glass" style={{ padding: '3rem', borderRadius: '32px' }}>
            <p style={{ fontSize: '1.2rem', lineHeight: '1.8', color: 'var(--text-secondary)', marginBottom: '2rem' }}>
              Hello! I'm <strong>K. Yernaidu</strong>, a dedicated Full Stack Developer with a passion for building complex enterprise systems. My journey in technology is driven by a desire to solve real-world problems through clean code and efficient architecture.
            </p>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem' }}>
              <div>
                <h3 style={{ borderBottom: '2px solid var(--primary)', display: 'inline-block', marginBottom: '1rem' }}>Education</h3>
                <p style={{ color: 'var(--text-muted)' }}>Diploma in MECH Engineering - Machilipatnam GVT College (2018)</p>
              </div>
              <div>
                <h3 style={{ borderBottom: '2px solid var(--primary)', display: 'inline-block', marginBottom: '1rem' }}>Location</h3>
                <p style={{ color: 'var(--text-muted)' }}>Visakhapatnam, AP</p>
              </div>
              <div>
                <h3 style={{ borderBottom: '2px solid var(--primary)', display: 'inline-block', marginBottom: '1rem' }}>Hobbies</h3>
                <p style={{ color: 'var(--text-muted)' }}>Volley Ball, Cricket</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
