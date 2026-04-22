import React from 'react';
import profileImg from '../assets/profile.png';

// import { Github, Linkedin, Mail, ChevronDown } from 'lucide-react';

const Hero = ({ onViewResume }) => {
  return (
    <section className="hero" style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'relative',
      background: 'radial-gradient(circle at 50% 50%, rgba(99, 102, 241, 0.1) 0%, transparent 70%)',
      color: '#fff'
    }}>
      <div className="container animate-fade" style={{ textAlign: 'center' }}>
        <div style={{ 
          width: '180px', 
          height: '180px', 
          borderRadius: '50%', 
          border: '4px solid var(--primary)', 
          margin: '0 auto 2rem',
          overflow: 'hidden',
          boxShadow: '0 0 30px var(--primary-glow)',
          background: 'rgba(99, 102, 241, 0.1)'
        }}>
          <img 
            src={profileImg} 
            alt="Kilaparthi Yernaidu" 
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            onError={(e) => { e.target.style.display = 'none'; e.target.parentNode.innerHTML = '<div style="font-size: 4rem; display: flex; align-items: center; justify-content: center; height: 100%;">👨‍💻</div>'; }}
          />
        </div>
        <p style={{
          color: 'var(--primary)',
          fontWeight: 600,
          letterSpacing: '0.2em',
          marginBottom: '1rem',
          textTransform: 'uppercase'
        }}>@developernaidu</p>

        <h1 style={{
          fontSize: 'clamp(3rem, 8vw, 5rem)',
          marginBottom: '1.5rem',
          background: 'linear-gradient(to right, #fff, #94a3b8)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent'
        }}>K. Yernaidu</h1>

        <h2 style={{
          fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
          color: 'var(--text-secondary)',
          marginBottom: '2rem',
          maxWidth: '800px',
          margin: '0 auto 2.5rem'
        }}>
          Full Stack Developer at <span style={{ color: 'var(--primary)' }}>Schemax Export Techno Craft</span>. Specializing in ERP solutions and Microservices.
        </h2>

        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginBottom: '4rem', flexWrap: 'wrap' }}>
          <a href="#projects" className="glass" style={{
            padding: '1.25rem 2.5rem',
            borderRadius: '100px',
            fontWeight: 600,
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem'
          }}>
            View My Work
          </a>
          <button onClick={onViewResume} style={{
            padding: '1.25rem 2.5rem',
            borderRadius: '100px',
            fontWeight: 600,
            border: '1px solid var(--primary)',
            color: 'var(--primary)',
            display: 'block',
            transition: 'var(--transition)',
            cursor: 'pointer',
            background: 'transparent'
          }}>
            View & Download Resume
          </button>
          <a href="#contact" style={{
            padding: '1.25rem 2.5rem',
            borderRadius: '100px',
            fontWeight: 600,
            background: 'var(--primary)',
            color: 'white',
            boxShadow: '0 10px 20px var(--primary-glow)',
            display: 'block'
          }}>
            Contact Me
          </a>
        </div>

        <div style={{ display: 'flex', gap: '2.5rem', justifyContent: 'center', alignItems: 'center' }}>
          <a href="https://www.linkedin.com/in/kilaparthi-yernaidu-232689246/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary)', fontWeight: 600, textDecoration: 'none', fontSize: '1.1rem' }}>LinkedIn Profile 🔗</a>
          <span style={{ color: 'var(--text-muted)' }}>Scroll down to see more</span>
        </div>
      </div>

      <div style={{
        position: 'absolute',
        bottom: '2rem',
        animation: 'float 2s infinite ease-in-out',
        color: 'var(--text-muted)'
      }}>
        {/* <ChevronDown size={32} /> */}
        ↓
      </div>
    </section>
  );
};

export default Hero;
