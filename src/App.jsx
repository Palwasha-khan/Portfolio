import React, { useState, useEffect, useRef } from 'react';
import {
  ExternalLink, Mail, Phone, MapPin,
  Code2, Layers, Wrench, Send, CheckCircle, ChevronDown,
  Sparkles, Star, Zap, Globe, BookOpen, Award, Briefcase, GraduationCap, X
} from 'lucide-react';
import ContactForm from './components/ContactForm';
import TechStack from './components/TechStack';
import Footer from './components/Footer';
import Hero from './components/Hero';

// Custom SVG icons for Github and LinkedIn 

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

// ─── DATA ────────────────────────────────────────────────────────────────────

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

const featuredProjects = [
  {
    id: 1,
    title: 'Startup Mentor',
    subtitle: 'Final Year Project — AI-Powered Startup Idea Evaluator',
    badge: '🎓 Final Year Project',
    accentBorder: 'rgba(255,102,153,0.3)',
    iconBg: 'from-pink-500 to-purple-600',
    icon: '🚀',
    description:
      'An intelligent web platform leveraging Large Language Models (LLMs) and Natural Language Processing (NLP) to rigorously evaluate startup viability. The system performs multi-dimensional AI-driven analysis—assessing market fit, competition landscape, revenue model strength, and technical feasibility—delivering a comprehensive viability score and actionable strategic insights.',
    features: [
      'LLM & NLP-powered idea analysis engine',
      'Multi-dimensional viability scoring system',
      'Market research & competitor intelligence',
      'Revenue model & technical feasibility assessment',
      'Interactive dashboard with AI-generated reports',
      'Django REST API backend architecture',
    ],
    tech: ['Python', 'Django', 'OpenAI API', 'NLP', 'React', 'Tailwind CSS', 'PostgreSQL', 'REST API'],
    gradientAccent: 'rgba(255,102,153,0.12)',
    badgeBg: 'rgba(255,102,153,0.15)',
    badgeColor: '#ffb3cc',
    badgeBorder: 'rgba(255,102,153,0.3)',
    codeUrl: 'https://github.com/palwashaaamir',
    demoUrl: '#',
  },
  {
    id: 2,
    title: 'SparkCart',
    subtitle: 'Full-Stack MERN E-Commerce Platform',
    badge: '💎 Featured Project',
    accentBorder: 'rgba(139,80,255,0.3)',
    iconBg: 'from-purple-500 to-indigo-600',
    icon: '💎',
    description:
      'A production-ready, full-stack e-commerce platform purpose-built for selling handmade jewellery. Features a complete shopping experience from browsable product catalogue to secure checkout, with Stripe-powered payments, Cloudinary-managed media, and a robust admin dashboard for inventory and order management.',
    features: [
      'Full Stripe payment gateway integration',
      'Cloudinary media management & optimised image delivery',
      'JWT-based authentication & secure user sessions',
      'Admin dashboard for orders, inventory & analytics',
      'Cart, wishlist, and real-time stock updates',
      'Responsive design with mobile-first approach',
    ],
    tech: ['MongoDB', 'Express.js', 'React', 'Node.js', 'Stripe API', 'Cloudinary', 'JWT', 'Tailwind CSS'],
    gradientAccent: 'rgba(139,80,255,0.12)',
    badgeBg: 'rgba(139,80,255,0.15)',
    badgeColor: '#c4b0ff',
    badgeBorder: 'rgba(139,80,255,0.35)',
    codeUrl: 'https://github.com/palwashaaamir',
    demoUrl: '#',
  },
];

const otherProjects = [
  {
    title: "Crafter's Den",
    description: 'A full-stack web app for a crafts and arts store built with PHP & Laravel, featuring product management, user authentication, and a clean shopping experience.',
    tech: ['PHP', 'Laravel', 'MySQL', 'Bootstrap'],
    icon: '🎨',
    codeUrl: 'https://github.com/palwashaaamir',
  },
  {
    title: 'SpendSmart',
    description: 'A personal finance tracker and budgeting app built in React, helping users log expenses, categorise spending, and visualise budget health with intuitive charts.',
    tech: ['React', 'JavaScript', 'CSS', 'LocalStorage'],
    icon: '💰',
    codeUrl: 'https://github.com/palwashaaamir',
  },
  {
    title: 'GreenBite',
    description: 'A sustainability-focused recipe web app promoting plant-based eating. Users explore recipes, calculate eco-impact scores, and save favourites.',
    tech: ['HTML', 'CSS', 'JavaScript', 'API Integration'],
    icon: '🌱',
    codeUrl: 'https://github.com/palwashaaamir',
  },
  {
    title: 'Python Data Analysis',
    description: 'Exploratory data analysis and visualisation projects using Python—covering statistical analysis, pattern recognition, and matplotlib/seaborn visualisations.',
    tech: ['Python', 'Pandas', 'Matplotlib', 'Seaborn'],
    icon: '📊',
    codeUrl: 'https://github.com/palwashaaamir',
  },
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

// ─── FEATURED CARD ────────────────────────────────────────────────────────────

function FeaturedCard({ p }) {
  return (
    <div className="featured-card">
      {/* Subtle background gradient */}
      <div style={{
        position: 'absolute', inset: 0, borderRadius: 24, pointerEvents: 'none',
        background: `radial-gradient(ellipse at 20% 50%, ${p.gradientAccent} 0%, transparent 55%)`,
      }} />

      <div style={{
        position: 'relative', zIndex: 1,
        display: 'grid', gridTemplateColumns: '1fr 1fr',
      }} className="fc-grid">

        {/* LEFT */}
        <div style={{ padding: '42px 48px', borderRight: '1px solid rgba(196,176,255,0.07)' }} className="fc-left">
          {/* Badge */}
          <div style={{ marginBottom: 22 }}>
            <span style={{
              padding: '5px 14px', borderRadius: 9999, fontSize: 11, fontWeight: 700,
              letterSpacing: '0.04em', background: p.badgeBg,
              border: `1px solid ${p.badgeBorder}`, color: p.badgeColor,
            }}>{p.badge}</span>
          </div>

          {/* Title row */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 16 }}>
            <div style={{
              width: 56, height: 56, borderRadius: 16, flexShrink: 0, fontSize: 28,
              background: `linear-gradient(135deg, ${p.gradientAccent.replace('0.12', '0.3')}, rgba(139,80,255,0.25))`,
              border: `1px solid ${p.accentBorder}`,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              boxShadow: `0 8px 24px ${p.accentBorder}`,
            }}>{p.icon}</div>
            <div>
              <h3 style={{ margin: 0, fontSize: 26, fontWeight: 900, color: '#ffffff', letterSpacing: '-0.03em' }}>{p.title}</h3>
              <p style={{ margin: '4px 0 0', fontSize: 13, color: '#7a6d90', fontWeight: 500 }}>{p.subtitle}</p>
            </div>
          </div>

          <p style={{ fontSize: 14, lineHeight: '1.75', color: '#9b8eb8', margin: '0 0 24px' }}>{p.description}</p>

          {/* Tech badges */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 28 }}>
            {p.tech.map(t => <span key={t} className="tech-badge">{t}</span>)}
          </div>

          {/* CTA */}
          <div style={{ display: 'flex', gap: 10 }}>
            <a href={p.codeUrl} target="_blank" rel="noopener noreferrer" className="btn-primary">
              <Github size={14} /> View Code
            </a>
            <a href={p.demoUrl} className="btn-outline">
              <ExternalLink size={14} /> Live Demo
            </a>
          </div>
        </div>

        {/* RIGHT */}
        <div style={{ padding: '42px 48px', background: 'rgba(196,176,255,0.012)' }} className="fc-right">
          <p style={{ margin: '0 0 18px', fontSize: 11, fontWeight: 800, color: '#c4b0ff', letterSpacing: '0.14em', textTransform: 'uppercase' }}>
            Key Features
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {p.features.map((f, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 11 }}>
                <div style={{
                  width: 22, height: 22, borderRadius: 7, flexShrink: 0, marginTop: 1,
                  background: 'linear-gradient(135deg, rgba(255,102,153,0.12), rgba(139,80,255,0.12))',
                  border: '1px solid rgba(196,176,255,0.18)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <div style={{ width: 7, height: 7, borderRadius: '50%', background: 'linear-gradient(135deg, #ff6699, #8b50ff)' }} />
                </div>
                <span style={{ fontSize: 13.5, color: '#c0b8d8', lineHeight: '1.55', fontWeight: 400 }}>{f}</span>
              </div>
            ))}
          </div>

          {/* Highlight box */}
          <div style={{
            marginTop: 28, padding: '18px 20px', borderRadius: 14,
            background: 'rgba(196,176,255,0.035)', border: '1px solid rgba(196,176,255,0.1)',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 7, marginBottom: 8 }}>
              <Zap size={12} color="#ff9dbe" />
              <span style={{ fontSize: 10, fontWeight: 800, color: '#ff9dbe', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Tech Highlight</span>
            </div>
            <p style={{ margin: 0, fontSize: 12.5, color: '#6b5f85', lineHeight: '1.65' }}>
              {p.id === 1
                ? 'Integrates state-of-the-art LLM APIs with custom NLP pipelines to deliver context-aware startup analysis at scale.'
                : "End-to-end Stripe payment flows with webhook handling, combined with Cloudinary's CDN for optimised, high-performance media delivery."}
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
 

// ─── APP ──────────────────────────────────────────────────────────────────────

export default function App() {
  const [notification, setNotification] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id) => {
    setMobileMenuOpen(false);
    setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }), 50);
  };

  const navLinks = [
    { id: 'about', label: 'About' },
    { id: 'featured', label: 'Featured' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'contact', label: 'Contact' },
  ];

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
          <button onClick={() => scrollTo('hero')} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <div style={{
                width: 34, height: 34, borderRadius: 10,
                background: 'linear-gradient(135deg, #ff6699, #8b50ff)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 14, fontWeight: 900, color: 'white',
                boxShadow: '0 4px 14px rgba(139,80,255,0.35)',
              }}>PA</div>
              <span style={{ fontSize: 15, fontWeight: 700, color: '#f0eeff' }}>Palwasha Aamir</span>
            </div>
          </button>

          {/* Links (desktop) */}
          <div style={{ display: 'flex', gap: 30 }} className="nav-desktop">
            {navLinks.map(({ id, label }) => (
              <button key={id} className="nav-link" onClick={() => scrollTo(id)} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
                {label}
              </button>
            ))}
          </div>

          <a href={`mailto:${personalInfo.email}`} className="btn-primary" style={{ padding: '9px 18px', fontSize: 13 }}>
            <Mail size={13} /> Hire Me
          </a>
        </div>
      </nav>

      {/* ─── HERO ─── */}
      <Hero personalInfo={personalInfo} Github={Github} Linkedin={Linkedin}/>

  

      {/* ─── CONTENT WRAPPER ─── */}
      <div style={{ maxWidth: 1120, margin: '0 auto', padding: '0 28px' }}>

        {/* ─── ABOUT ─── */}
        <FadeSection id="about" style={{ padding: '100px 0' }}>
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <span className="section-tag"><BookOpen size={10} /> About Me</span>
            <h2 style={{ margin: '18px 0 0', fontSize: 38, fontWeight: 900, color: '#fff', letterSpacing: '-0.03em' }}>
              My <span className="gradient-text">Journey</span>
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }} className="about-grid">
            {/* Experience */}
            <div className="notebook-card" style={{ padding: '30px 32px' }}>
              <div style={{ display: 'flex', gap: 10, alignItems: 'center', marginBottom: 20 }}>
                <div style={{ width: 34, height: 34, borderRadius: 10, background: 'linear-gradient(135deg, rgba(255,102,153,0.12), rgba(139,80,255,0.12))', border: '1px solid rgba(196,176,255,0.18)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Briefcase size={15} color="#c4b0ff" />
                </div>
                <h3 style={{ margin: 0, fontSize: 15, fontWeight: 700, color: '#f0eeff' }}>Experience</h3>
              </div>
              <div style={{ paddingLeft: 18, borderLeft: '2px solid rgba(255,102,153,0.3)' }}>
                <p style={{ margin: '0 0 2px', fontSize: 14, fontWeight: 700, color: '#fff' }}>Software Engineering Intern</p>
                <p style={{ margin: '0 0 4px', fontSize: 12, color: '#ff9dbe', fontWeight: 600 }}>Tech Industry · UK</p>
                <p style={{ margin: '0 0 10px', fontSize: 11, color: '#4a4060', fontWeight: 500 }}>2024</p>
                <p style={{ margin: 0, fontSize: 13, color: '#9185a8', lineHeight: '1.7' }}>
                  Contributed to full-stack feature development, collaborated in Agile sprints, and assisted with REST API integration and QA testing workflows.
                </p>
              </div>
            </div>

            {/* Education */}
            <div className="notebook-card" style={{ padding: '30px 32px' }}>
              <div style={{ display: 'flex', gap: 10, alignItems: 'center', marginBottom: 20 }}>
                <div style={{ width: 34, height: 34, borderRadius: 10, background: 'linear-gradient(135deg, rgba(255,102,153,0.12), rgba(139,80,255,0.12))', border: '1px solid rgba(196,176,255,0.18)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <GraduationCap size={15} color="#c4b0ff" />
                </div>
                <h3 style={{ margin: 0, fontSize: 15, fontWeight: 700, color: '#f0eeff' }}>Education</h3>
              </div>
              <div style={{ paddingLeft: 18, borderLeft: '2px solid rgba(139,80,255,0.35)' }}>
                <p style={{ margin: '0 0 2px', fontSize: 14, fontWeight: 700, color: '#fff' }}>BSc (Hons) Software Engineering</p>
                <p style={{ margin: '0 0 4px', fontSize: 12, color: '#a880ff', fontWeight: 600 }}>University · United Kingdom</p>
                <p style={{ margin: '0 0 10px', fontSize: 11, color: '#4a4060', fontWeight: 500 }}>2021 – 2025</p>
                <p style={{ margin: 0, fontSize: 13, color: '#9185a8', lineHeight: '1.7' }}>
                  FYP: <em style={{ color: '#c4b0ff' }}>Startup Mentor</em> — AI startup viability evaluator. Core modules: Algorithms, Software Architecture, ML, Web Dev, Database Systems.
                </p>
              </div>
            </div>

            {/* Certifications */}
            <div className="notebook-card" style={{ padding: '30px 32px', gridColumn: '1 / -1' }}>
              <div style={{ display: 'flex', gap: 10, alignItems: 'center', marginBottom: 20 }}>
                <div style={{ width: 34, height: 34, borderRadius: 10, background: 'linear-gradient(135deg, rgba(255,102,153,0.12), rgba(139,80,255,0.12))', border: '1px solid rgba(196,176,255,0.18)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Award size={15} color="#c4b0ff" />
                </div>
                <h3 style={{ margin: 0, fontSize: 15, fontWeight: 700, color: '#f0eeff' }}>Certifications & Achievements</h3>
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
                {[
                  'Python Programming – Foundational & Intermediate',
                  'JavaScript Full-Stack Development',
                  'Responsive Web Design – freeCodeCamp',
                  'React Developer Certification',
                  'MongoDB for JavaScript Developers',
                ].map((cert, i) => (
                  <div key={i} style={{
                    display: 'flex', alignItems: 'center', gap: 8,
                    padding: '9px 16px', borderRadius: 10, fontSize: 13, fontWeight: 500,
                    background: 'rgba(196,176,255,0.04)', border: '1px solid rgba(196,176,255,0.13)',
                    color: '#c4b0ff',
                  }}>
                    <CheckCircle size={12} color="#ff9dbe" />
                    {cert}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </FadeSection>

        {/* ─── FEATURED PROJECTS ─── */}
        <FadeSection id="featured" style={{ padding: '100px 0' }}>
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <span className="section-tag"><Star size={10} /> Featured Work</span>
            <h2 style={{ margin: '18px 0 14px', fontSize: 38, fontWeight: 900, color: '#fff', letterSpacing: '-0.03em' }}>
              Flagship <span className="gradient-text">Applications</span>
            </h2>
            <p style={{ margin: 0, fontSize: 16, color: '#4a4060', maxWidth: 520, marginLeft: 'auto', marginRight: 'auto', lineHeight: '1.7' }}>
              Two showcase projects demonstrating full-stack depth, AI integration, and real-world engineering.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
            {featuredProjects.map(p => <FeaturedCard key={p.id} p={p} />)}
          </div>
        </FadeSection>

        {/* ─── OTHER PROJECTS ─── */}
        <FadeSection id="projects" style={{ padding: '100px 0' }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <span className="section-tag"><Code2 size={10} /> More Projects</span>
            <h2 style={{ margin: '18px 0 0', fontSize: 38, fontWeight: 900, color: '#fff', letterSpacing: '-0.03em' }}>
              Other <span className="gradient-text">Work</span>
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(285px, 1fr))', gap: 18 }}>
            {otherProjects.map(p => (
              <div key={p.title} className="notebook-card" style={{ padding: '28px', display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 14 }}>
                  <div style={{
                    width: 44, height: 44, borderRadius: 13, flexShrink: 0, fontSize: 22,
                    background: 'linear-gradient(135deg, rgba(255,102,153,0.1), rgba(139,80,255,0.1))',
                    border: '1px solid rgba(196,176,255,0.14)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>{p.icon}</div>
                  <h3 style={{ margin: 0, fontSize: 16, fontWeight: 700, color: '#fff' }}>{p.title}</h3>
                </div>
                <p style={{ margin: '0 0 16px', fontSize: 13.5, color: '#6a6080', lineHeight: '1.7', flex: 1 }}>{p.description}</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 5, marginBottom: 18 }}>
                  {p.tech.map(t => <span key={t} className="tech-badge" style={{ fontSize: 10.5 }}>{t}</span>)}
                </div>
                <a href={p.codeUrl} target="_blank" rel="noopener noreferrer" className="btn-outline" style={{ width: '100%', justifyContent: 'center', fontSize: 13 }}>
                  <Github size={13} /> View on GitHub
                </a>
              </div>
            ))}
          </div>
        </FadeSection>

        {/* ─── SKILLS ─── */}
        <FadeSection id="skills" style={{ padding: '100px 0' }}>
        <TechStack /> 
        </FadeSection>

        {/* ─── CONTACT Form ─── */}
        <FadeSection id="contact" style={{ padding: '100px 0' }}>
        <ContactForm info={personalInfo} Github={Github} Linkedin={Linkedin} onSuccess={() => setNotification(true)} />
        </FadeSection>
         
      </div>

      {/* ─── FOOTER ─── */}
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
