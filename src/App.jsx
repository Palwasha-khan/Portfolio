import React, { useState, useEffect, useRef } from 'react';
import {
  ExternalLink, Mail, Phone, MapPin,
  Code2, Layers, Wrench, Send, CheckCircle, ChevronDown,
  Sparkles, Star, Zap, Globe, BookOpen, Award, Briefcase, GraduationCap, X
} from 'lucide-react';

// Custom SVG icons for Github and LinkedIn (not in this lucide-react version)
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
  name: 'Palwasha Aamir',
  title: 'Software Engineer',
  tagline: 'Full-Stack Developer & AI Enthusiast',
  bio: 'A passionate Software Engineering graduate with hands-on experience building full-stack web applications, integrating AI/ML solutions, and delivering clean, scalable code. Skilled in the MERN stack, PHP/Laravel, and modern dev tooling.',
  email: 'palwashaaamir123@gmail.com',
  phone: '+44 7835 342024',
  location: 'United Kingdom',
  linkedin: 'https://linkedin.com/in/palwasha-aamir',
  github: 'https://github.com/palwashaaamir',
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

const skillCategories = [
  {
    name: 'Frontend',
    icon: <Globe size={15} color="#ff9dbe" />,
    items: [
      { name: 'React.js', level: 90 },
      { name: 'JavaScript (ES6+)', level: 88 },
      { name: 'HTML5 & CSS3', level: 92 },
      { name: 'Tailwind CSS', level: 88 },
      { name: 'Bootstrap', level: 80 },
    ],
  },
  {
    name: 'Backend',
    icon: <Code2 size={15} color="#c4b0ff" />,
    items: [
      { name: 'Node.js & Express', level: 82 },
      { name: 'PHP & Laravel', level: 78 },
      { name: 'Python & Django', level: 80 },
      { name: 'REST APIs', level: 85 },
      { name: 'MongoDB / MySQL', level: 80 },
    ],
  },
  {
    name: 'AI & Data',
    icon: <Zap size={15} color="#ff9dbe" />,
    items: [
      { name: 'OpenAI / LLMs', level: 72 },
      { name: 'NLP', level: 70 },
      { name: 'Pandas & NumPy', level: 72 },
      { name: 'Data Analysis', level: 74 },
      { name: 'PostgreSQL', level: 76 },
    ],
  },
  {
    name: 'Tools',
    icon: <Wrench size={15} color="#c4b0ff" />,
    items: [
      { name: 'Git & GitHub', level: 88 },
      { name: 'Stripe API', level: 78 },
      { name: 'Cloudinary', level: 75 },
      { name: 'Figma', level: 68 },
      { name: 'Agile / Scrum', level: 80 },
    ],
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

// ─── SKILL CARD ───────────────────────────────────────────────────────────────

function SkillCard({ name, icon, items }) {
  return (
    <div className="notebook-card" style={{ padding: '28px 28px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 22 }}>
        <div style={{
          width: 36, height: 36, borderRadius: 10, flexShrink: 0,
          background: 'linear-gradient(135deg, rgba(255,102,153,0.12), rgba(139,80,255,0.12))',
          border: '1px solid rgba(196,176,255,0.18)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>{icon}</div>
        <span style={{ fontSize: 15, fontWeight: 700, color: '#f0eeff' }}>{name}</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 13 }}>
        {items.map(s => (
          <div key={s.name}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 5 }}>
              <span style={{ fontSize: 13, color: '#c4b0ff', fontWeight: 500 }}>{s.name}</span>
              <span style={{ fontSize: 11, color: '#4a4060', fontWeight: 600 }}>{s.level}%</span>
            </div>
            <div style={{ height: 5, background: 'rgba(196,176,255,0.07)', borderRadius: 99, overflow: 'hidden' }}>
              <div style={{
                height: '100%', width: `${s.level}%`,
                background: 'linear-gradient(90deg, #ff6699, #8b50ff)',
                borderRadius: 99, transition: 'width 1.3s cubic-bezier(0.4,0,0.2,1)',
              }} />
            </div>
          </div>
        ))}
      </div>
    </div>
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

// ─── CONTACT FORM ─────────────────────────────────────────────────────────────

function ContactForm({ onSuccess }) {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Name is required';
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) e.email = 'Valid email required';
    if (!form.message.trim() || form.message.length < 10) e.message = 'Message must be at least 10 characters';
    return e;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setForm({ name: '', email: '', message: '' });
      setErrors({});
      onSuccess();
    }, 1300);
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
      {[
        { key: 'name', label: 'Your Name', placeholder: 'Jane Doe', type: 'text' },
        { key: 'email', label: 'Email Address', placeholder: 'jane@example.com', type: 'email' },
      ].map(({ key, label, placeholder, type }) => (
        <div key={key}>
          <label style={{ display: 'block', fontSize: 11, fontWeight: 700, color: '#c4b0ff', marginBottom: 7, letterSpacing: '0.06em', textTransform: 'uppercase' }}>
            {label}
          </label>
          <input
            type={type}
            className="notebook-input"
            placeholder={placeholder}
            value={form[key]}
            onChange={e => setForm(p => ({ ...p, [key]: e.target.value }))}
          />
          {errors[key] && <p style={{ margin: '5px 0 0', fontSize: 11, color: '#ff6699', fontWeight: 500 }}>{errors[key]}</p>}
        </div>
      ))}

      <div>
        <label style={{ display: 'block', fontSize: 11, fontWeight: 700, color: '#c4b0ff', marginBottom: 7, letterSpacing: '0.06em', textTransform: 'uppercase' }}>
          Message
        </label>
        <textarea
          className="notebook-input"
          rows={5}
          placeholder="Tell me about your project or just say hello..."
          value={form.message}
          onChange={e => setForm(p => ({ ...p, message: e.target.value }))}
        />
        {errors.message && <p style={{ margin: '5px 0 0', fontSize: 11, color: '#ff6699', fontWeight: 500 }}>{errors.message}</p>}
      </div>

      <button
        type="submit"
        disabled={loading}
        className="btn-primary"
        style={{ width: '100%', justifyContent: 'center', padding: '15px', fontSize: 14, opacity: loading ? 0.75 : 1 }}
      >
        {loading ? (
          <>
            <span style={{
              width: 16, height: 16, border: '2.5px solid rgba(255,255,255,0.25)',
              borderTopColor: 'white', borderRadius: '50%', display: 'inline-block',
              animation: 'spinBtn 0.65s linear infinite',
            }} />
            Sending...
          </>
        ) : (
          <><Send size={15} /> Send Message</>
        )}
      </button>

      <style>{`@keyframes spinBtn { to { transform: rotate(360deg); } }`}</style>
    </form>
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
      <section id="hero" style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
        {/* Orbs */}
        {[
          { top: '10%', left: '5%', size: 520, color: 'rgba(255,102,153,0.11)' },
          { top: '25%', right: '3%', size: 640, color: 'rgba(139,80,255,0.09)' },
          { bottom: '8%', left: '45%', size: 420, color: 'rgba(196,176,255,0.07)' },
        ].map((orb, i) => (
          <div key={i} style={{
            position: 'absolute', borderRadius: '50%', pointerEvents: 'none',
            width: orb.size, height: orb.size,
            background: `radial-gradient(circle, ${orb.color} 0%, transparent 65%)`,
            ...(orb.top ? { top: orb.top } : { bottom: orb.bottom }),
            ...(orb.left ? { left: orb.left } : { right: orb.right }),
            transform: orb.bottom ? 'translateX(-50%)' : 'none',
          }} />
        ))}

        {/* Floating widgets */}
        <div className="animate-float" style={{
          position: 'absolute', top: '18%', right: '10%', padding: '12px 18px',
          background: 'rgba(255,102,153,0.08)', border: '1px solid rgba(255,102,153,0.18)',
          borderRadius: 16, backdropFilter: 'blur(10px)', fontSize: 22,
          display: 'flex', alignItems: 'center', gap: 8,
        }}>
          <span>🚀</span>
          <span style={{ fontSize: 12, color: '#ff9dbe', fontWeight: 600 }}>Building things</span>
        </div>

        <div className="animate-float-delay" style={{
          position: 'absolute', bottom: '28%', right: '18%', padding: '10px 14px',
          background: 'rgba(139,80,255,0.08)', border: '1px solid rgba(139,80,255,0.2)',
          borderRadius: 14, backdropFilter: 'blur(10px)', fontSize: 20,
        }}>💡</div>

        <div className="animate-float" style={{
          animationDelay: '2.5s',
          position: 'absolute', top: '58%', left: '4%', padding: '10px 14px',
          background: 'rgba(196,176,255,0.07)', border: '1px solid rgba(196,176,255,0.15)',
          borderRadius: 14, backdropFilter: 'blur(10px)', fontSize: 18,
        }}>✨</div>

        <div style={{ maxWidth: 1120, margin: '0 auto', padding: '100px 28px 60px', width: '100%' }}>
          <div style={{ maxWidth: 740 }}>

            <div style={{ marginBottom: 28, animationDelay: '0s' }} className="animate-slide-in-up">
              <span className="section-tag">
                <Sparkles size={10} /> Open to Opportunities
              </span>
            </div>

            <div className="animate-slide-in-up" style={{ animationDelay: '0.08s' }}>
              <p style={{ margin: '0 0 6px', fontSize: 17, color: '#7a6d90', fontWeight: 600 }}>
                Hi there, I'm 👋
              </p>
              <h1 style={{
                margin: '0 0 4px', lineHeight: 1.0, letterSpacing: '-0.045em', color: '#ffffff',
                fontSize: 'clamp(52px, 8vw, 84px)', fontWeight: 900,
              }}>
                {personalInfo.name}
              </h1>
            </div>

            <h2 className="animate-shimmer" style={{
              margin: '8px 0 26px', letterSpacing: '-0.025em', fontWeight: 800,
              fontSize: 'clamp(20px, 3.5vw, 34px)', lineHeight: 1.25,
            }}>
              {personalInfo.tagline}
            </h2>

            <p className="animate-fade-in" style={{
              fontSize: 17, lineHeight: '1.78', color: '#9185a8',
              maxWidth: 600, margin: '0 0 38px',
            }}>
              {personalInfo.bio}
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, marginBottom: 52 }} className="animate-fade-in">
              <button onClick={() => scrollTo('featured')} className="btn-primary" style={{ padding: '14px 30px', fontSize: 15 }}>
                <Star size={15} /> View My Work
              </button>
              <button onClick={() => scrollTo('contact')} className="btn-outline" style={{ padding: '14px 30px', fontSize: 15 }}>
                <Mail size={15} /> Get in Touch
              </button>
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="btn-outline" style={{ padding: '14px 18px' }}>
                <Github size={16} />
              </a>
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="btn-outline" style={{ padding: '14px 18px' }}>
                <Linkedin size={16} />
              </a>
            </div>

            {/* Stats row */}
            <div style={{ display: 'flex', gap: 40, flexWrap: 'wrap' }}>
              {[
                { v: '6+', l: 'Projects Built' },
                { v: '4', l: 'Tech Stacks' },
                { v: 'BSc', l: 'Software Eng.' },
                { v: 'UK', l: 'Based' },
              ].map(({ v, l }) => (
                <div key={l}>
                  <p style={{
                    margin: 0, fontSize: 30, fontWeight: 900, letterSpacing: '-0.04em',
                    background: 'linear-gradient(135deg, #ff9dbe, #c4b0ff)',
                    WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                  }}>{v}</p>
                  <p style={{ margin: 0, fontSize: 12, color: '#4a4060', fontWeight: 600, letterSpacing: '0.03em' }}>{l}</p>
                </div>
              ))}
            </div>

          </div>
        </div>

        {/* Scroll hint */}
        <div style={{ position: 'absolute', bottom: 36, left: '50%', transform: 'translateX(-50%)' }}>
          <button onClick={() => scrollTo('about')} style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 5 }}>
            <span style={{ fontSize: 10, color: '#3a3050', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase' }}>Scroll</span>
            <ChevronDown size={16} color="#3a3050" style={{ animation: 'float 2.2s ease-in-out infinite' }} />
          </button>
        </div>
      </section>

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
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <span className="section-tag"><Layers size={10} /> Tech Stack</span>
            <h2 style={{ margin: '18px 0 0', fontSize: 38, fontWeight: 900, color: '#fff', letterSpacing: '-0.03em' }}>
              Skills & <span className="gradient-text">Technologies</span>
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(270px, 1fr))', gap: 18 }}>
            {skillCategories.map(cat => (
              <SkillCard key={cat.name} name={cat.name} icon={cat.icon} items={cat.items} />
            ))}
          </div>

          {/* Also familiar with */}
          <div style={{
            marginTop: 24, padding: '24px 32px', borderRadius: 16,
            background: 'rgba(196,176,255,0.025)', border: '1px solid rgba(196,176,255,0.07)',
            textAlign: 'center',
          }}>
            <p style={{ margin: '0 0 14px', fontSize: 11, fontWeight: 700, color: '#3a3050', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
              Also familiar with
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, justifyContent: 'center' }}>
              {['TypeScript', 'GraphQL', 'Docker', 'Firebase', 'Vercel', 'Netlify', 'Postman', 'VS Code', 'Linux / CLI', 'JIRA', 'Jest'].map(t => (
                <span key={t} className="tech-badge" style={{ fontSize: 11 }}>{t}</span>
              ))}
            </div>
          </div>
        </FadeSection>

        {/* ─── CONTACT ─── */}
        <FadeSection id="contact" style={{ padding: '100px 0' }}>
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <span className="section-tag"><Mail size={10} /> Contact</span>
            <h2 style={{ margin: '18px 0 14px', fontSize: 38, fontWeight: 900, color: '#fff', letterSpacing: '-0.03em' }}>
              Let's <span className="gradient-text">Work Together</span>
            </h2>
            <p style={{ margin: 0, fontSize: 16, color: '#4a4060', maxWidth: 450, marginLeft: 'auto', marginRight: 'auto', lineHeight: '1.7' }}>
              Have a project in mind or just want to connect? I'd love to hear from you.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1fr) minmax(0,1.5fr)', gap: 24, maxWidth: 920, margin: '0 auto' }} className="contact-grid">

            {/* Info cards */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {[
                { Icon: Mail, label: 'Email', val: personalInfo.email, href: `mailto:${personalInfo.email}`, c: '#ff9dbe' },
                { Icon: Phone, label: 'Phone', val: personalInfo.phone, href: `tel:${personalInfo.phone}`, c: '#c4b0ff' },
                { Icon: MapPin, label: 'Location', val: personalInfo.location, href: null, c: '#ff9dbe' },
                { Icon: Github, label: 'GitHub', val: 'github.com/palwashaaamir', href: personalInfo.github, c: '#c4b0ff' },
                { Icon: Linkedin, label: 'LinkedIn', val: 'Connect on LinkedIn', href: personalInfo.linkedin, c: '#ff9dbe' },
              ].map(({ Icon, label, val, href, c }) => (
                <div key={label} className="notebook-card" style={{ padding: '16px 20px', display: 'flex', alignItems: 'center', gap: 14 }}>
                  <div style={{ width: 40, height: 40, borderRadius: 11, background: 'rgba(196,176,255,0.05)', border: '1px solid rgba(196,176,255,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Icon size={16} color={c} />
                  </div>
                  <div>
                    <p style={{ margin: 0, fontSize: 10, color: '#3a3050', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase' }}>{label}</p>
                    {href ? (
                      <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer"
                        style={{ fontSize: 13, color: '#c4b0ff', fontWeight: 500, textDecoration: 'none' }}
                        onMouseEnter={e => e.target.style.color = '#ff9dbe'}
                        onMouseLeave={e => e.target.style.color = '#c4b0ff'}
                      >{val}</a>
                    ) : (
                      <p style={{ margin: 0, fontSize: 13, color: '#c4b0ff', fontWeight: 500 }}>{val}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Form */}
            <div className="notebook-card" style={{ padding: '36px 40px' }}>
              <h3 style={{ margin: '0 0 4px', fontSize: 20, fontWeight: 800, color: '#fff' }}>Send a Message ✉️</h3>
              <p style={{ margin: '0 0 28px', fontSize: 13, color: '#3a3050' }}>I typically reply within 24 hours.</p>
              <ContactForm onSuccess={() => setNotification(true)} />
            </div>

          </div>
        </FadeSection>

      </div>

      {/* ─── FOOTER ─── */}
      <footer style={{ borderTop: '1px solid rgba(196,176,255,0.07)', padding: '32px 28px', marginTop: 16 }}>
        <div style={{ maxWidth: 1120, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16 }}>
          <p style={{ margin: 0, fontSize: 13, color: '#3a3050' }}>
            <span style={{ background: 'linear-gradient(135deg, #ff9dbe, #c4b0ff)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', fontWeight: 800 }}>
              Palwasha Khan
            </span>
            {' '}· Built with React & Tailwind CSS · {new Date().getFullYear()}
          </p>
          <div style={{ display: 'flex', gap: 16 }}>
            {[
              { href: personalInfo.github, Icon: Github },
              { href: personalInfo.linkedin, Icon: Linkedin },
              { href: `mailto:${personalInfo.email}`, Icon: Mail },
            ].map(({ href, Icon }) => (
              <a key={href} href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer"
                style={{ color: '#3a3050', transition: 'color 0.2s', display: 'flex' }}
                onMouseEnter={e => e.currentTarget.style.color = '#c4b0ff'}
                onMouseLeave={e => e.currentTarget.style.color = '#3a3050'}
              >
                <Icon size={17} />
              </a>
            ))}
          </div>
        </div>
      </footer>

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
