import React from 'react';

const About = () => {
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
            I specialize in building complex ERP systems and microservices-based architectures that solve real-world industry challenges.
          </p>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: 'var(--text-secondary)' }}>
              📅 <span>Born June 10, 2000</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: 'var(--text-secondary)' }}>
              ❤️ <span>Hobbies: Volleyball, Cricket</span>
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          <div className="glass" style={{ padding: '2rem', borderRadius: '30px' }}>
            <h3 style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              🎓 Education
            </h3>
            
            <div style={{ marginBottom: '1.5rem' }}>
              <p style={{ fontWeight: 700, fontSize: '1.1rem' }}>Diploma in Mechanical Engineering</p>
              <p style={{ color: 'var(--primary)', fontSize: '0.9rem' }}>2015 — 2018</p>
            </div>
            
            <div>
              <p style={{ fontWeight: 700, fontSize: '1.1rem' }}>10th Standard</p>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>Yellamamba Public School, Jami (VZM Dist)</p>
              <p style={{ color: 'var(--primary)', fontSize: '0.9rem' }}>Completed 2015</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
