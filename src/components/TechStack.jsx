import React from 'react'
import { Code2, Layers, Wrench, Zap, Globe,} from 'lucide-react';

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

const TechStack = () => {

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
      { name: 'Node.js & Express', level: 85 },
      { name: 'PHP & Laravel', level: 70 }, 
      { name: 'REST APIs', level: 85 },
      { name: 'MongoDB / MySQL', level: 85 },
    ],
  },
  {
    name: 'AI & Data',
    icon: <Zap size={15} color="#ff9dbe" />,
    items: [
      { name: 'OpenAI / LLMs', level: 72 },
      { name: 'NLP', level: 70 },
      { name: 'Pandas & NumPy', level: 50 },
      { name: 'Data Analysis', level: 70 }, 
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
      { name: 'Postman', level: 80 },
      { name: 'Agile / Scrum', level: 80 },
    ],
  },
];
  return (
     <>
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
                   {['TypeScript', 'Vercel', 'Netlify', 'Postman', 'VS Code', 'Lovable',].map(t => (
                     <span key={t} className="tech-badge" style={{ fontSize: 11 }}>{t}</span>
                   ))}
                 </div>
               </div>
    </>
  )
}

export default TechStack