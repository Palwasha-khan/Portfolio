import React from 'react'
import {
  ExternalLink, Mail, Phone, MapPin,
  Code2, Layers, Wrench, Send, CheckCircle, ChevronDown,
  Sparkles, Star, Zap, Globe, BookOpen, Award, Briefcase, GraduationCap, X
} from 'lucide-react';

const About = () => {
  return (
    <>
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
    
    </>
  )
}

export default About