import React, { useState, useEffect } from 'react';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import About from './components/About';
import Resume from './components/Resume';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [view, setView] = useState('portfolio'); // 'portfolio' or 'resume'

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (view === 'resume') {
    return (
      <div style={{ position: 'relative' }}>
        <button
          onClick={() => setView('portfolio')}
          style={{ position: 'fixed', top: '20px', left: '20px', zIndex: 1000, background: '#1a1a1a', color: '#fff', padding: '10px 20px', borderRadius: '50px', cursor: 'pointer' }}
          className="no-print"
        >
          ← Back to Portfolio
        </button>
        <Resume />
      </div>
    );
  }

  return (
    <div className="app">
      {/* Navigation */}
      <nav className={`glass`} style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        padding: isScrolled ? '1rem 0' : '1.5rem 0',
        transition: 'var(--transition)',
        borderBottom: isScrolled ? '1px solid var(--glass-border)' : '1px solid transparent',
        background: isScrolled ? 'var(--glass-bg)' : 'transparent'
      }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ fontSize: '1.5rem', fontWeight: 700, fontFamily: 'var(--font-heading)' }}>
            developernaidu<span style={{ color: 'var(--primary)' }}>.</span>
          </div>
          <div style={{ display: 'flex', gap: '2.5rem', alignItems: 'center' }}>
            <a href="#about" style={{ fontSize: '0.9rem', fontWeight: 500, color: 'var(--text-secondary)' }}>About</a>
            <a href="#projects" style={{ fontSize: '0.9rem', fontWeight: 500, color: 'var(--text-secondary)' }}>Projects</a>
            <a href="#skills" style={{ fontSize: '0.9rem', fontWeight: 500, color: 'var(--text-secondary)' }}>Skills</a>
            <button onClick={() => setView('resume')} style={{ fontSize: '0.9rem', fontWeight: 500, color: 'var(--text-secondary)' }}>Resume</button>
            <a href="#contact" style={{
              fontSize: '0.9rem',
              fontWeight: 600,
              padding: '0.5rem 1.25rem',
              borderRadius: '50px',
              backgroundColor: 'var(--primary)',
              color: 'white'
            }}>Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <Hero onViewResume={() => setView('resume')} />

      {/* About Section */}
      <About />

      {/* Projects Section */}
      <Projects />

      {/* Skills Section */}
      <Skills />

      {/* Contact Section */}
      <section id="contact" className="container" style={{ textAlign: 'center', padding: '10rem 0' }}>
        <h2 className="section-title">Get In Touch</h2>
        <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto 1.5rem', fontSize: '1.1rem' }}>
          Interested in working together on ERP, Microservices, or Data Integration projects?
        </p>
        <p style={{ color: 'var(--primary)', fontWeight: 600, fontSize: '1.2rem', marginBottom: '3rem' }}>
          📞 +91 9515603659
        </p>
        <p style={{ color: 'var(--primary)', fontWeight: 600, fontSize: '1.2rem', marginBottom: '3rem' }}>
          ✉️ naidulokesh728@gmail.com
        </p>
        <a href="mailto:naidulokesh728@gmail.com" style={{
          fontSize: '1.25rem',
          fontWeight: 700,
          padding: '1.5rem 4rem',
          borderRadius: '100px',
          background: 'var(--primary)',
          color: 'white',
          boxShadow: '0 20px 40px var(--primary-glow)',
          display: 'inline-block',
          transition: 'var(--transition)'
        }}>
          Say Hello
        </a>
      </section>

      {/* Footer */}
      <footer className="glass" style={{ padding: '4rem 0', borderTop: '1px solid var(--glass-border)' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
            © 2026 Kilaparthi Yernaidu (@developernaidu).
          </p>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <button onClick={() => setView('resume')} style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Resume</button>
            <a href="#" style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>GitHub</a>
            <a href="#" style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>LinkedIn</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
