import React, { useState, useEffect, useRef } from 'react';
import { Mail, CheckCircle, X } from 'lucide-react';
import ContactForm from './components/ContactForm';
import TechStack from './components/TechStack';
import Footer from './components/Footer';
import Hero from './components/Hero';
import About from './components/About';
import FeaturedProjects from './components/FeaturedProjects';
import OtherProjects from './components/OtherProjects';

function Github({ size = 16, color = 'currentColor' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color} xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
    </svg>
  );
}

function Linkedin({ size = 16, color = 'currentColor' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color} xmlns="http://www.w3.org/2000/svg">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  );
}
 
const personalInfo = {
  name: 'Palwasha  ',
  title: 'Software Engineer',
  tagline: 'Full-Stack Developer & AI Enthusiast',
  bio: 'A passionate Software Engineering graduate with hands-on experience building full-stack web applications, integrating AI/ML solutions, and delivering clean, scalable code. Skilled in the MERN stack, PHP/Laravel, and modern dev tooling.',
  email: 'palwashakhan.2201@gmail.com',
  phone: '+92 324 6948538',
  location: 'Islamabad , Pakistan',
  linkedin: 'https://www.linkedin.com/in/palwasha-khan2201/',
  github: 'https://github.com/Palwasha-khan/',
};

const navLinks = [
    { id: 'about', label: 'About' },
    { id: 'featured', label: 'Featured' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'contact', label: 'Contact' },
];

// ─── NOTIFICATION ─────────────────────────────────────────────────────────────

function Notification({ show, onClose }) {
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    if (show) {
      setExiting(false);
      const t = setTimeout(() => {
        setExiting(true);
        setTimeout(onClose, 380);
      }, 4200);
      return () => clearTimeout(t);
    }
  }, [show, onClose]);

  if (!show) return null;

  return (
    <div style={{ position: 'fixed', top: 24, left: '50%', transform: 'translateX(-50%)', zIndex: 9999 }}>
      <div
        style={{
          animation: exiting ? 'notificationOut 0.38s ease-in forwards' : 'notificationIn 0.45s cubic-bezier(0.175,0.885,0.32,1.275) forwards',
          background: 'linear-gradient(135deg, rgba(14,8,26,0.98), rgba(22,12,42,0.98))',
          border: '1px solid rgba(196,176,255,0.35)',
          borderRadius: 18,
          padding: '18px 24px 22px',
          boxShadow: '0 24px 64px rgba(139,80,255,0.35), 0 4px 16px rgba(0,0,0,0.6)',
          display: 'flex',
          alignItems: 'center',
          gap: 14,
          minWidth: 340,
          backdropFilter: 'blur(20px)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div style={{
          width: 44, height: 44, borderRadius: '50%', flexShrink: 0,
          background: 'linear-gradient(135deg, #ff6699, #8b50ff)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          boxShadow: '0 4px 16px rgba(139,80,255,0.4)',
        }}>
          <CheckCircle size={22} color="white" />
        </div>
        <div style={{ flex: 1 }}>
          <p style={{ margin: 0, fontWeight: 800, fontSize: 15, color: '#ffffff' }}>Message Sent! ✨</p>
          <p style={{ margin: '3px 0 0', fontSize: 13, color: '#9b8eb8', lineHeight: '1.4' }}>
            Thanks for reaching out — I'll reply soon!
          </p>
        </div>
        <button
          onClick={() => { setExiting(true); setTimeout(onClose, 380); }}
          style={{ background: 'none', border: 'none', color: '#4a4060', cursor: 'pointer', padding: 4, display: 'flex', flexShrink: 0, transition: 'color 0.2s' }}
          onMouseEnter={e => e.currentTarget.style.color = '#c4b0ff'}
          onMouseLeave={e => e.currentTarget.style.color = '#4a4060'}
        >
          <X size={16} />
        </button>

        {/* Progress bar */}
        <div style={{
          position: 'absolute', bottom: 0, left: 0, right: 0, height: 3,
          background: 'rgba(196,176,255,0.1)',
        }}>
          <div style={{
            height: '100%',
            background: 'linear-gradient(90deg, #ff6699, #8b50ff)',
            borderRadius: '0 0 18px 18px',
            animation: show && !exiting ? 'progressShrink 4.2s linear forwards' : 'none',
          }} />
        </div>
      </div>
      <style>{`
        @keyframes progressShrink { from { width: 100%; } to { width: 0; } }
      `}</style>
    </div>
  );
}

// ─── SECTION FADE-IN ──────────────────────────────────────────────────────────

function FadeSection({ children, id, style = {} }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.07 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return (
    <section
      id={id}
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(36px)',
        transition: 'opacity 0.75s ease, transform 0.75s ease',
        ...style,
      }}
    >
      {children}
    </section>
  );
}

// ─── APP ──────────────────────────────────────────────────────────────────────
export default function App() {
  const [notification, setNotification] = useState(false); 
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };


  return (
    <div className="grid-bg" style={{ minHeight: '100vh', overflowX: 'hidden' }}>

      <Notification show={notification} onClose={() => setNotification(false)} />

      {/* ─── NAV ─── */}
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        padding: '16px 0',
        background: scrolled ? 'rgba(10,6,18,0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(24px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(196,176,255,0.08)' : 'none',
        transition: 'all 0.4s ease',
      }}>
        <div style={{ maxWidth: 1120, margin: '0 auto', padding: '0 28px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          {/* Logo */}
          <button onClick={() => handleScroll('hero')} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <div style={{
                width: 34, height: 34, borderRadius: 10,
                background: 'linear-gradient(135deg, #ff6699, #8b50ff)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 14, fontWeight: 900, color: 'white',
                boxShadow: '0 4px 14px rgba(139,80,255,0.35)',
              }}>PA</div>
              <span style={{ fontSize: 15, fontWeight: 700, color: '#f0eeff' }}>Palwasha </span>
            </div>
          </button>

          {/* Links (desktop) */}
          <div style={{ display: 'flex', gap: 30 }} className="nav-desktop">
            {navLinks.map(({ id, label }) => (
              <button key={id} className="nav-link" onClick={() => handleScroll(id)} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
                {label}
              </button>
            ))}
          </div>

          <a href={`mailto:${personalInfo.email}`} className="btn-primary" style={{ padding: '9px 18px', fontSize: 13 }}>
            <Mail size={13} /> Hire Me
          </a>
        </div>
      </nav>
 
      <Hero personalInfo={personalInfo} Github={Github} Linkedin={Linkedin}/>

      {/* ─── CONTENT WRAPPER ─── */}
      <div style={{ maxWidth: 1120, margin: '0 auto', padding: '0 28px' }}>
 
        <FadeSection id="about" style={{ padding: '100px 0' }}>
          <About />
        </FadeSection>
 
        <FadeSection id="featured" style={{ padding: '100px 0' }}>
        <FeaturedProjects Github={Github} Linkedin={Linkedin} />
        </FadeSection>
 
        <FadeSection id="projects" style={{ padding: '100px 0' }}>
          <OtherProjects Github={Github} Linkedin={Linkedin} />
        </FadeSection>
 
        <FadeSection id="skills" style={{ padding: '100px 0' }}>
        <TechStack /> 
        </FadeSection>
 
        <FadeSection id="contact" style={{ padding: '100px 0' }}>
        <ContactForm info={personalInfo} Github={Github} Linkedin={Linkedin} onSuccess={() => setNotification(true)} />
        </FadeSection>
         
      </div>
 
      <Footer personalInfo={personalInfo} Github={Github} Linkedin={Linkedin} Mail={Mail} />

      {/* ─── RESPONSIVE STYLES ─── */}
      <style>{`
        @media (max-width: 860px) {
          .fc-grid { grid-template-columns: 1fr !important; }
          .fc-left { border-right: none !important; border-bottom: 1px solid rgba(196,176,255,0.07) !important; padding: 30px 28px !important; }
          .fc-right { padding: 30px 28px !important; }
          .about-grid { grid-template-columns: 1fr !important; }
          .about-grid > div:last-child { grid-column: 1 !important; }
          .contact-grid { grid-template-columns: 1fr !important; }
          .nav-desktop { display: none !important; }
        }
        @media (max-width: 640px) {
          .fc-left { padding: 24px 20px !important; }
          .fc-right { padding: 24px 20px !important; }
        }
      `}</style>

    </div>
  );
}
