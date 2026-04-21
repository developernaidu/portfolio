import React from 'react';
import profileImg from '../assets/profile.png';

const Resume = () => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div style={{ padding: '2rem', background: '#e0e0e0', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      {/* Print Button (Hidden during print) */}
      <button 
        onClick={handlePrint} 
        className="no-print"
        style={{ 
          background: '#1e293b', 
          color: '#fff', 
          padding: '0.75rem 2rem', 
          borderRadius: '50px',
          fontWeight: 600,
          marginBottom: '2rem',
          cursor: 'pointer',
          boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
        }}
      >
        🖨️ Print / Save as PDF
      </button>

      {/* Resume Paper */}
      <div id="resume-paper" style={{
        width: '210mm',
        minHeight: '297mm',
        background: '#fff',
        display: 'grid',
        gridTemplateColumns: '32% 68%',
        boxShadow: '0 0 40px rgba(0,0,0,0.2)',
        color: '#1a1a1a',
        fontFamily: "'Inter', sans-serif",
        lineHeight: '1.4',
        overflow: 'hidden'
      }}>
        
        {/* SIDEBAR (Left) */}
        <aside style={{ background: '#1e293b', color: '#fff', padding: '40px 30px' }}>
          {/* Profile Picture */}
          <div style={{ 
            width: '150px', 
            height: '150px', 
            borderRadius: '50%', 
            border: '4px solid #fff', 
            margin: '0 auto 40px',
            overflow: 'hidden',
            background: '#334155'
          }}>
            <img 
              src={profileImg} 
              alt="Kilaparthi Yernaidu" 
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              onError={(e) => { e.target.style.display = 'none'; e.target.parentNode.innerHTML = '👨‍💻'; }}
            />
          </div>

          {/* CONTACT */}
          <div style={{ marginBottom: '40px' }}>
            <h2 style={{ fontSize: '1.1rem', letterSpacing: '1px', marginBottom: '15px', borderBottom: '1px solid rgba(255,255,255,0.2)', paddingBottom: '5px' }}>CONTACT</h2>
            <div style={{ fontSize: '0.85rem', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><span>📞</span> <span>+91 9515603659</span></div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', whiteSpace: 'nowrap' }}><span>✉️</span> <span>naidulokesh728@gmail.com</span></div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><span>📍</span> <span>Vizag, AP</span></div>
            </div>
          </div>

          {/* EDUCATION */}
          <div style={{ marginBottom: '40px' }}>
            <h2 style={{ fontSize: '1.1rem', letterSpacing: '1px', marginBottom: '15px', borderBottom: '1px solid rgba(255,255,255,0.2)', paddingBottom: '5px' }}>EDUCATION</h2>
            <div style={{ fontSize: '0.85rem' }}>
              <p style={{ fontWeight: 700, marginBottom: '5px' }}>2015 - 2018</p>
              <p style={{ marginBottom: '15px' }}>Diploma in MECH Engineering</p>
              
              <p style={{ fontWeight: 700, marginBottom: '5px' }}>2015</p>
              <p>10th Standard - Yellamamba Public School</p>
            </div>
          </div>

          {/* EXPERTISE / SKILLS */}
          <div style={{ marginBottom: '40px' }}>
            <h2 style={{ fontSize: '1.1rem', letterSpacing: '1px', marginBottom: '15px', borderBottom: '1px solid rgba(255,255,255,0.2)', paddingBottom: '5px' }}>EXPERTISE</h2>
            <ul style={{ fontSize: '0.85rem', paddingLeft: '15px', listStyleType: 'circle' }}>
              <li style={{ marginBottom: '8px' }}>Full Stack Development (Node.js, React)</li>
              <li style={{ marginBottom: '8px' }}>RESTful API & Microservices Design</li>
              <li style={{ marginBottom: '8px' }}>ERP System Architecture</li>
              <li style={{ marginBottom: '8px' }}>Database Modeling & Optimization</li>
              <li style={{ marginBottom: '8px' }}>Data Migration & ETL</li>
              <li style={{ marginBottom: '8px' }}>Enterprise Logic Management</li>
            </ul>
          </div>

          <div>
            <h2 style={{ fontSize: '1.1rem', letterSpacing: '1px', marginBottom: '15px', borderBottom: '1px solid rgba(255,255,255,0.2)', paddingBottom: '5px' }}>SKILLS</h2>
            <div style={{ fontSize: '0.85rem', lineHeight: '1.8', display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <span>• REACT</span>
              <span>• NODE JS</span>
              <span>• NEST JS</span>
              <span>• REDIS</span>
              <span>• MYSQL</span>
              <span>• MICRO SERVICES</span>
              <span>• TYPESCRIPT</span>
              <span>• NX</span>
              <span>• BULL JS</span>
              <span>• EXCEL / FS Processing</span>
            </div>
          </div>
        </aside>

        {/* MAIN BODY (Right) */}
        <main style={{ padding: '60px 50px' }}>
          <div style={{ marginBottom: '40px' }}>
            <h1 style={{ fontSize: '3rem', fontWeight: 800, margin: '0', color: '#1e293b' }}>KILAPARTHI <span style={{ fontWeight: 400 }}>YERNAIDU</span></h1>
            <p style={{ fontSize: '1.2rem', color: '#64748b', letterSpacing: '2px', marginTop: '5px' }}>FULL STACK DEVELOPER</p>
          </div>

          {/* SUMMARY */}
          <section style={{ marginBottom: '15px' }}>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#1e293b', marginBottom: '12px', borderBottom: '3px solid #1e293b', width: 'fit-content', paddingRight: '20px' }}>PROFESSIONAL SUMMARY</h2>
            <p style={{ fontSize: '0.9rem', color: '#475569', textAlign: 'justify', margin: '0' }}>
              Dedicated Full Stack Engineer with over 2 years of experience in architecting and developing high-performance ERP systems and complex automation solutions. Expert in React.js, Node.js, NestJS, and TypeScript. Specializing in digitizing large-scale manual workflows, RESTful API Design, Background Processing (BullJS/Redis), and Database Schema Optimization. Adept at leading cross-functional teams to deliver scalable, production-ready software.
            </p>
          </section>

          {/* EXPERIENCE */}
          <section>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#1e293b', marginBottom: '15px', borderBottom: '3px solid #1e293b', width: 'fit-content', paddingRight: '20px' }}>WORK EXPERIENCE</h2>
            
            <div style={{ marginBottom: '25px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 800, margin: '0' }}>SCHEMAX EXPORT TECHNO CRAFT</h3>
                <span style={{ fontSize: '0.9rem', color: '#64748b' }}>2022 - PRESENT</span>
              </div>
              <p style={{ color: '#1e3a8a', fontWeight: 600, fontSize: '0.95rem', margin: '0 0 10px 0' }}>Full Stack Developer</p>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.85rem', color: '#475569' }}>
                <div style={{ margin: '0' }}>
                  <strong style={{ color: '#1e293b' }}>Exportx ERPX: </strong>
                  Led development of Costing, Procurement, and Currency Conversion modules. Streamlined PO/SO creation and master data management components for Indonesian Coal Industry project (Sai Resources).
                </div>
                <div style={{ margin: '0' }}>
                  <strong style={{ color: '#1e293b' }}>Xpparel SaaS: </strong>
                  Architected packing, dispatch, and warehouse modules using Microservices. Implemented resilient background job processing with BullJS and Redis for Bangladesh Apparel Industry project.
                </div>
                <div style={{ margin: '0' }}>
                  <strong style={{ color: '#1e293b' }}>Sakku Industry Portal: </strong>
                  Automated daily egg rate tracking with WhatsApp/Email alerts. Built complex reporting structures and third-party Focus integrations for Portfolio Poultry project.
                </div>
                <div style={{ margin: '0' }}>
                  <strong style={{ color: '#1e293b' }}>Swatches Library (Open Source): </strong>
                  Developed a specialized UI utility for consistent color swatch management across professional frontend applications.
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&display=swap');
        @media print {
          .no-print { display: none !important; }
          body { background: #fff !important; padding: 0 !important; }
          #resume-paper { box-shadow: none !important; margin: 0 !important; width: 210mm !important; }
        }
      `}} />
    </div>
  );
};

export default Resume;
