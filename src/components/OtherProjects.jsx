import React from 'react'
import { Code2 } from 'lucide-react'; 

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
const OtherProjects = ({Github, Linkedin}) => {
  return (
    <>
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
    </>
  )
}

export default OtherProjects