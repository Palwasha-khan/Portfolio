import React from 'react'
import { ExternalLink, Star,Zap, GraduationCap} from 'lucide-react';

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

const FeaturedProjects = ({ Github, Linkedin }) => {

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
  return (
     <>
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
    </>
  )
}

export default FeaturedProjects