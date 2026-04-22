import React from 'react';
import profileImg from '../assets/profile.png';

// Note: To use your actual logo, save the image as 'schemax_logo.png' in 'src/assets/'
const schemaxLogo = '/src/assets/schemax_logo.png';

const Resume = () => {
  const yearsExp = new Date().getFullYear() - 2022;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div style={{ padding: '2rem', background: '#e0e0e0', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      {/* Header Buttons */}
      <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem' }} className="no-print">
        <button
          onClick={handlePrint}
          style={{
            background: '#1e293b',
            color: '#fff',
            padding: '0.75rem 2rem',
            borderRadius: '50px',
            fontWeight: 600,
            cursor: 'pointer',
            boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
            border: 'none'
          }}
        >
          🖨️ Print Resume
        </button>
        <button
          onClick={handlePrint}
          style={{
            background: 'var(--primary, #6366f1)',
            color: '#fff',
            padding: '0.75rem 2rem',
            borderRadius: '50px',
            fontWeight: 600,
            cursor: 'pointer',
            boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
            border: 'none'
          }}
        >
          📥 Download PDF
        </button>
      </div>

      {/* Resume Paper */}
      <div id="resume-paper" className="resume-grid" style={{
        width: '100%',
        maxWidth: '230mm',
        minHeight: '297mm',
        background: '#fff',
        boxShadow: '0 0 50px rgba(0,0,0,0.25)',
        color: '#1a1a1a',
        fontFamily: "'Inter', sans-serif",
        lineHeight: '1.25',
        overflow: 'hidden',
        margin: '2rem auto'
      }}>

        {/* SIDEBAR (Left) */}
        <aside style={{ background: '#1e293b', color: '#fff', padding: '30px 20px' }}>
          {/* Profile Picture */}
          <div style={{
            width: '120px',
            height: '120px',
            borderRadius: '50%',
            border: '4px solid #fff',
            margin: '0 auto 20px',
            overflow: 'hidden',
            background: '#334155',
            boxShadow: '0 5px 15px rgba(0,0,0,0.3)'
          }}>
            <img
              src={profileImg}
              alt="K. Yernaidu"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              onError={(e) => { e.target.style.display = 'none'; e.target.parentNode.innerHTML = '👨‍💻'; }}
            />
          </div>

          {/* CONTACT */}
          <div style={{ marginBottom: '20px' }}>
            <h2 style={{ fontSize: '0.95rem', fontWeight: 700, letterSpacing: '1px', marginBottom: '10px', borderBottom: '1px solid rgba(255,255,255,0.2)', paddingBottom: '3px' }}>CONTACT</h2>
            <div style={{ fontSize: '0.75rem', display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><span>📞</span> <span>+91 9515603659</span></div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', wordBreak: 'break-all' }}><span>✉️</span> <span>naidulokesh728@gmail.com</span></div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><span>📍</span> <span>Visakhapatnam, AP</span></div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', wordBreak: 'break-all' }}><span>🔗</span> <span>linkedin.com/in/kilaparthi-yernaidu-232689246/</span></div>
            </div>
          </div>

          {/* EXPERTISE / SKILLS */}
          <div style={{ marginBottom: '20px' }}>
            <h2 style={{ fontSize: '0.95rem', fontWeight: 700, letterSpacing: '1px', marginBottom: '10px', borderBottom: '1px solid rgba(255,255,255,0.2)', paddingBottom: '3px' }}>EXPERTISE</h2>
            <ul style={{ fontSize: '0.78rem', paddingLeft: '15px', listStyleType: 'circle', lineHeight: '1.4' }}>
              <li style={{ marginBottom: '4px' }}>Full Stack (Node / React)</li>
              <li style={{ marginBottom: '4px' }}>Rest API & Microservices</li>
              <li style={{ marginBottom: '4px' }}>ERP System Architecture</li>
              <li style={{ marginBottom: '4px' }}>Database & ETL Migration</li>
            </ul>
          </div>

          <div style={{ marginBottom: '20px' }}>
            <h2 style={{ fontSize: '0.95rem', fontWeight: 700, letterSpacing: '1px', marginBottom: '10px', borderBottom: '1px solid rgba(255,255,255,0.2)', paddingBottom: '3px' }}>TECH SKILLS</h2>
            <div style={{ fontSize: '0.72rem', lineHeight: '1.4', display: 'flex', flexDirection: 'column', gap: '3px' }}>
              <span>• ReactJS, TypeScript, AntD</span>
              <span>• Node.js, NestJS, MySQL</span>
              <span>• Redis, BullJS, Microservices</span>
              <span>• NX, Redux, WebSockets</span>
              <span>• Git, GitLab, Cron Jobs</span>
            </div>
          </div>

          {/* EDUCATION */}
          <div style={{ marginBottom: '20px' }}>
            <h2 style={{ fontSize: '0.95rem', fontWeight: 700, letterSpacing: '1px', marginBottom: '10px', borderBottom: '1px solid rgba(255,255,255,0.2)', paddingBottom: '3px' }}>EDUCATION</h2>
            <div style={{ fontSize: '0.75rem' }}>
              <p style={{ fontWeight: 700 }}>2015 - 2018</p>
              <p style={{ marginBottom: '8px' }}>Diploma in MECH Engineering - Machilipatnam GVT College</p>
              <p style={{ fontWeight: 700 }}>2015</p>
              <p>10th Standard</p>
            </div>
          </div>

          <div style={{ marginBottom: '20px' }}>
            <h2 style={{ fontSize: '0.95rem', fontWeight: 700, letterSpacing: '1px', marginBottom: '10px', borderBottom: '1px solid rgba(255,255,255,0.2)', paddingBottom: '3px' }}>PERSONAL</h2>
            <div style={{ fontSize: '0.7rem', display: 'flex', flexDirection: 'column', gap: '5px' }}>
              <div><strong>Name:</strong> k.Yernaidu</div>
              <div><strong>DOB:</strong> 10-Jun-2000</div>
              <div><strong>Languages:</strong> Telugu, English, Hindi</div>
              <div><strong>Nationality:</strong> Indian</div>
              <div><strong>Marital Status:</strong> Single</div>
              <div><strong>Mother Tongue:</strong> Telugu</div>
              <div style={{ marginTop: '3px' }}>
                <strong>Current Address:</strong><br/>
                MVP, Sector 6, Visakhapatnam
              </div>
              <div style={{ marginTop: '3px' }}>
                <strong>Permanent Address:</strong><br/>
                Laxmipuram(v), Jami(m), Vizyanagaram(Dt)
              </div>
            </div>
          </div>

          <div>
            <h2 style={{ fontSize: '0.95rem', fontWeight: 700, letterSpacing: '1px', marginBottom: '10px', borderBottom: '1px solid rgba(255,255,255,0.2)', paddingBottom: '3px' }}>HOBBIES</h2>
            <div style={{ fontSize: '0.75rem' }}>
              Volley Ball, Cricket
            </div>
          </div>
        </aside>

        {/* MAIN BODY (Right) */}
        <main style={{ padding: '30px 35px' }}>
          <div style={{ marginBottom: '20px' }}>
            <h1 style={{ fontSize: '2.5rem', fontWeight: 800, margin: '0', color: '#1e293b', lineHeight: '1' }}>K. <span style={{ fontWeight: 400 }}>YERNAIDU</span></h1>
            <p style={{ fontSize: '1rem', color: '#64748b', letterSpacing: '2px', marginTop: '5px' }}>FULL STACK DEVELOPER</p>
          </div>

          {/* SUMMARY */}
          <section style={{ margin: '0 0 5px 0', padding: '0' }}>
            <h2 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#1e293b', margin: '0 0 5px 0', borderBottom: '2px solid #1e293b', paddingBottom: '2px' }}>PROFESSIONAL SUMMARY</h2>
            <p style={{ fontSize: '0.85rem', color: '#475569', textAlign: 'justify', margin: '0', padding: '0' }}>
              Dedicated Full Stack Engineer with over {yearsExp} years of experience in architecting and developing high-performance ERP systems and complex automation solutions. Expert in React.js, Node.js, NestJS, and TypeScript. Specializing in digitizing large-scale manual workflows, RESTful API Design, Background Processing (BullJS/Redis), and Database Schema Optimization. Adept at leading cross-functional teams to deliver scalable, production-ready software.
            </p>
          </section>

          {/* EXPERIENCE */}
          {/* EXPERIENCE */}
          <section style={{ margin: '15px 0 0 0', padding: '0' }}>
            <h2 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#1e293b', margin: '0 0 12px 0', borderBottom: '2px solid #1e293b', paddingBottom: '3px' }}>WORK EXPERIENCE</h2>
            
            <div style={{ marginBottom: '10px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 800, margin: '0', color: '#1e293b' }}>SCHEMAX EXPORT TECHNO CRAFT</h3>
                <span style={{ fontSize: '0.85rem', color: '#475569', fontWeight: 600 }}>2022 - PRESENT</span>
              </div>
              
              <div style={{ position: 'relative', paddingLeft: '25px', marginTop: '5px' }}>
                {/* Vertical Timeline Line */}
                <div style={{ 
                  position: 'absolute', 
                  left: '7px', 
                  top: '10px', 
                  bottom: '5px', 
                  width: '2px', 
                  background: '#1e3a8a' 
                }}></div>
                
                {/* Timeline Top Dot */}
                <div style={{ 
                  position: 'absolute', 
                  left: '3px', 
                  top: '0px', 
                  width: '10px', 
                  height: '10px', 
                  borderRadius: '50%', 
                  background: '#1e3a8a',
                  border: '2px solid #fff' 
                }}></div>

                <p style={{ color: '#1e3a8a', fontWeight: 700, fontSize: '0.95rem', margin: '0 0 15px 0' }}>Full Stack Developer</p>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                  {/* Project 1 */}
                  <div>
                    <div style={{ fontWeight: 800, fontSize: '0.9rem', color: '#1e293b' }}>1. Exportx ERPX (Sai Resources) - Coal Industry (Indonesia)</div>
                    <div style={{ fontSize: '0.75rem', color: '#64748b', fontStyle: 'italic', marginBottom: '4px' }}>React JS, AntD, TS, NestJS, MySQL, NX, Redux, UserManagement</div>
                    <ul style={{ fontSize: '0.8rem', color: '#475569', paddingLeft: '18px', listStyleType: 'disc', margin: '0', lineHeight: '1.4' }}>
                      <li>Lead: Costing modules, Master management, PO/SO creation, Procurement, and Currency conversion.</li>
                    </ul>
                  </div>

                  {/* Project 2 */}
                  <div>
                    <div style={{ fontWeight: 800, fontSize: '0.9rem', color: '#1e293b' }}>2. Sustainability Project (Shahi) - Apparel Industry</div>
                    <div style={{ fontSize: '0.75rem', color: '#64748b', fontStyle: 'italic', marginBottom: '4px' }}>React JS, NestJS, TS, MySQL, NX, Redux, UserManagement</div>
                    <ul style={{ fontSize: '0.8rem', color: '#475569', paddingLeft: '18px', listStyleType: 'disc', margin: '0', lineHeight: '1.4' }}>
                      <li>Lead: Project Planning, Core Structure development, and UI Designing.</li>
                    </ul>
                  </div>

                  {/* Project 3 */}
                  <div>
                    <div style={{ fontWeight: 800, fontSize: '0.9rem', color: '#1e293b' }}>3. Sakku Project - Poultry/Eggs Industry (Rate Tracking)</div>
                    <div style={{ fontSize: '0.75rem', color: '#64748b', fontStyle: 'italic', marginBottom: '4px' }}>NestJS, WhatsApp/Email Alerts, Focus Integration, Bot Screenshot, Crons</div>
                    <ul style={{ fontSize: '0.8rem', color: '#475569', paddingLeft: '18px', listStyleType: 'disc', margin: '0', lineHeight: '1.4' }}>
                      <li>Lead: Architecture, Integration with Focus ERP, real-time alert systems, and reports.</li>
                    </ul>
                  </div>

                  {/* Project 4 */}
                  <div>
                    <div style={{ fontWeight: 800, fontSize: '0.9rem', color: '#1e293b' }}>4. Xpparel Project - Apparel Industry (Bangladesh)</div>
                    <div style={{ fontSize: '0.75rem', color: '#64748b', fontStyle: 'italic', marginBottom: '4px' }}>Microservices, NestJS, BullJS, Redis, React, NX, HRIS Module</div>
                    <ul style={{ fontSize: '0.8rem', color: '#475569', paddingLeft: '18px', listStyleType: 'disc', margin: '0', lineHeight: '1.4' }}>
                      <li>Lead: Packing module, FG-Warehouse, Dispatch, Logistics, and HRIS integration.</li>
                    </ul>
                  </div>

                  {/* Project 5 */}
                  <div>
                    <div style={{ fontWeight: 800, fontSize: '0.9rem', color: '#1e293b' }}>5. WFX to Xpparel Data Migration (Automated ETL)</div>
                    <div style={{ fontSize: '0.75rem', color: '#64748b', fontStyle: 'italic', marginBottom: '4px' }}>Node.js (FS), Excel processing, BullJS, Redis, NestJS, Microservices</div>
                    <ul style={{ fontSize: '0.8rem', color: '#475569', paddingLeft: '18px', listStyleType: 'disc', margin: '0', lineHeight: '1.4' }}>
                      <li>Lead: Engineered migration engine, API management, Disk I/O (FS), and Excel ETL.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&display=swap');
        
        .resume-grid {
          display: grid;
          grid-template-columns: 35% 65%;
        }

        @media (max-width: 850px) {
          .resume-grid {
            grid-template-columns: 1fr !important;
          }
          #resume-paper {
            margin: 0 !important;
            border-radius: 0 !important;
          }
        }

        @media print {
          .no-print { display: none !important; }
          body { background: #fff !important; padding: 0 !important; }
          #resume-paper { 
            box-shadow: none !important; 
            margin: 0 !important; 
            width: 210mm !important; 
            max-width: none !important;
          }
          .resume-grid {
            grid-template-columns: 35% 65% !important;
          }
        }
      `}} />
    </div>
  );
};

export default Resume;
