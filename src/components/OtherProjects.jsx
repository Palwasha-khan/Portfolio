import React from 'react'
import { Code2  , ExternalLink} from 'lucide-react'; 

const otherProjects = [
  {
    title: 'SiPa Recipes',
    description: 'A full-stack recipe sharing web app built with PHP and MySQL. Users can browse recipes by category, submit their own with image upload, leave star ratings, and contact the platform. Features a MySQL trigger that auto-recalculates average ratings.',
    tech: ['PHP', 'MySQL', 'Bootstrap', 'JavaScript', 'WOW.js'],
    icon: '🍽️',
    codeUrl: 'https://github.com/Palwasha-khan/recipee-website',
    liveUrl: 'https://www.linkedin.com/posts/palwasha-khan2201_webengineering-semesterproject-php-activity-7378407675392401408-cY4c/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFtL3bEBRqxEZ0-J9_SUAz5v9ZjDeFX4Lvw',
  },
  {
    title: 'Todo App',
    description: 'A task management app built with PHP and Laravel following MVC architecture. Supports full CRUD operations, task status tracking by priority and completion state, and secure database integration using Eloquent ORM.',
    tech: ['PHP', 'Laravel', 'MySQL', 'Bootstrap', 'Blade'],
    icon: '✅',
    codeUrl: 'https://github.com/Palwasha-khan/Todo-app',
    liveUrl: 'https://www.linkedin.com/posts/palwasha-khan2201_laravel-php-webdevelopment-activity-7377980452088987648-D60X/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFtL3bEBRqxEZ0-J9_SUAz5v9ZjDeFX4Lvw',
  },
  {
    title: 'Golf Club Project',
    description: 'A pixel-perfect front-end clone of the Sidcup Family Golf website showcasing advanced CSS animations, a custom animated cursor with blur effect, 3D card hover effects, infinite scrolling text, and scroll-triggered animations using GSAP ScrollTrigger.',
    tech: ['HTML5', 'CSS3', 'JavaScript', 'GSAP', 'RemixIcon'],
    icon: '⛳',
    codeUrl: 'https://github.com/Palwasha-khan/Golf-club-project',
    liveUrl: 'https://golf-club-project-ten.vercel.app/',
  },
  {
    title: 'Devsland Landing Page',
    description: 'A sleek responsive one-page landing page with smooth scroll navigation, sticky header, and a mobile-first design. Built with semantic HTML5 and Bootstrap 5 for a clean minimalist UI. Deployed live on Vercel.',
    tech: ['HTML5', 'CSS3', 'Bootstrap 5'],
    icon: '🌐',
    codeUrl: 'https://github.com/Palwasha-khan/devsland-web-project',
    liveUrl: 'https://devsland-web-project-m1o8yroad-palwasha-khans-projects-5703552d.vercel.app/',
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
                <div style={{ display: 'flex', gap: 8 }}>
                  <a
                  href={p.codeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline"
                  style={{ flex: 1, justifyContent: 'center', fontSize: 13 }}
                >
                  <Github size={13} /> GitHub
                </a>
                  <a
                  href={p.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline"
                  style={{ flex: 1, justifyContent: 'center', fontSize: 13 }}
                >
                  <ExternalLink size={13} /> Live Demo
                </a>
              </div>
              </div>
            ))}
          </div>
    </>
  )
}

export default OtherProjects