import React from 'react'

const Footer = ({ personalInfo, Github, Linkedin, Mail }) => {
  return (
     <>
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
     </>
  )
}

export default Footer