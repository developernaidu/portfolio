import React, { useState, useEffect } from 'react';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import About from './components/About';
import Resume from './components/Resume';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [view, setView] = useState('portfolio');
  const [accentColor, setAccentColor] = useState('#6366f1');
  const [bgTheme, setBgTheme] = useState('dark');

  const themes = [
    { name: 'Indigo', color: '#6366f1' },
    { name: 'Emerald', color: '#10b981' },
    { name: 'Rose', color: '#f43f5e' },
    { name: 'Amber', color: '#f59e0b' },
    { name: 'Cyan', color: '#06b6d4' }
  ];

  const bgThemes = [
    { name: 'Dark', color: '#0a0a0c', text: '#f8fafc', glass: 'rgba(15, 15, 20, 0.7)' },
    { name: 'Light', color: '#ffffff', text: '#1e293b', glass: 'rgba(255, 255, 255, 0.7)' },
    { name: 'Midnight', color: '#0f172a', text: '#f1f5f9', glass: 'rgba(15, 23, 42, 0.7)' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Update Hue/Accent
  useEffect(() => {
    document.documentElement.style.setProperty('--accent', accentColor);
    const r = parseInt(accentColor.slice(1, 3), 16);
    const g = parseInt(accentColor.slice(3, 5), 16);
    const b = parseInt(accentColor.slice(5, 7), 16);
    document.documentElement.style.setProperty('--accent-glow', `rgba(${r}, ${g}, ${b}, 0.5)`);
  }, [accentColor]);

  // Update Background
  useEffect(() => {
    const theme = bgThemes.find(t => t.name.toLowerCase() === bgTheme) || bgThemes[0];
    document.documentElement.style.setProperty('--bg-color', theme.color);
    document.documentElement.style.setProperty('--text-color', theme.text);
    document.documentElement.style.setProperty('--glass-bg', theme.glass);
    
    // Adjust borders and cards based on theme
    if (bgTheme === 'light') {
      document.documentElement.style.setProperty('--glass-border', 'rgba(0, 0, 0, 0.08)');
      document.documentElement.style.setProperty('--bg-card', 'rgba(0, 0, 0, 0.02)');
      document.documentElement.style.setProperty('--text-secondary', '#64748b');
    } else {
      document.documentElement.style.setProperty('--glass-border', 'rgba(255, 255, 255, 0.08)');
      document.documentElement.style.setProperty('--bg-card', 'rgba(255, 255, 255, 0.03)');
      document.documentElement.style.setProperty('--text-secondary', '#94a3b8');
    }
  }, [bgTheme]);

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
        padding: isScrolled ? '0.5rem 0' : '0.8rem 0',
        transition: 'var(--transition)',
        borderBottom: isScrolled ? '1px solid var(--glass-border)' : '1px solid transparent',
        background: isScrolled ? 'var(--glass-bg)' : 'rgba(10,10,12,0.8)',
        backdropFilter: 'blur(10px)'
      }}>
        <div className="container" style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center',
          gap: '0.5rem'
        }}>
          <div style={{ fontSize: '1.1rem', fontWeight: 800, fontFamily: 'var(--font-heading)', whiteSpace: 'nowrap' }}>
            developernaidu<span style={{ color: 'var(--primary)' }}>.</span>
          </div>
          
          <div style={{ display: 'flex', gap: '0.8rem', alignItems: 'center' }}>
            {/* Very Compact Mobile Nav Links */}
            <div style={{ display: 'flex', gap: '0.8rem', alignItems: 'center' }}>
              <button onClick={() => setView('resume')} style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-color)', cursor: 'pointer', background: 'none', border: 'none' }}>Resume</button>
              <a href="#projects" style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-color)' }}>Work</a>
              <a href="#contact" style={{ 
                fontSize: '0.7rem', 
                fontWeight: 700, 
                padding: '0.35rem 0.8rem', 
                borderRadius: '50px',
                backgroundColor: 'var(--primary)',
                color: 'white'
              }}>Hire</a>
            </div>
          </div>
        </div>
        
        {/* Sub-Nav for Mobile Settings (Optional/Compact) */}
        <div className="settings-sub-nav no-print" style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          gap: '15px', 
          padding: '8px 0', 
          borderTop: '1px solid var(--glass-border)',
          marginTop: '5px',
          overflowX: 'auto'
        }}>
          <div style={{ display: 'flex', gap: '4px', background: 'rgba(255,255,255,0.05)', padding: '2px 8px', borderRadius: '50px' }}>
            {bgThemes.map(t => (
              <button key={t.name} onClick={() => setBgTheme(t.name.toLowerCase())} style={{ fontSize: '0.55rem', padding: '2px 6px', borderRadius: '20px', background: bgTheme === t.name.toLowerCase() ? 'var(--accent)' : 'transparent', color: '#fff', border: 'none' }}>{t.name[0]}</button>
            ))}
          </div>
          <div style={{ display: 'flex', gap: '6px', background: 'rgba(255,255,255,0.05)', padding: '4px 10px', borderRadius: '50px' }}>
            {themes.map(t => (
              <button key={t.name} onClick={() => setAccentColor(t.color)} style={{ width: '12px', height: '12px', borderRadius: '50%', background: t.color, border: accentColor === t.color ? '1.5px solid white' : 'none' }} />
            ))}
          </div>
        </div>
      </nav>

      <div style={{ paddingTop: '80px' }}>
        {/* Hero Section */}
        <Hero onViewResume={() => setView('resume')} />
      </div>

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
