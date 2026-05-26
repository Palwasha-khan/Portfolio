import React from 'react'
import {
  ExternalLink, Mail, Phone, MapPin,
  Code2, Layers, Wrench, Send, CheckCircle, ChevronDown,
  Sparkles, Star, Zap, Globe, BookOpen, Award, Briefcase, GraduationCap, X
} from 'lucide-react';

const Hero = ({ personalInfo, Github, Linkedin }) => {

    const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
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
                   <button onClick={() => handleScroll('featured')} className="btn-primary" style={{ padding: '14px 30px', fontSize: 15 }}>
                     <Star size={15} /> View My Work
                   </button>
                   <button onClick={() => handleScroll('contact')} className="btn-outline" style={{ padding: '14px 30px', fontSize: 15 }}>
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
                     { v: 'BS', l: 'Software Eng.' },
                     
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
               <button onClick={() => handleScroll('about')} style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 5 }}>
                 <span style={{ fontSize: 10, color: '#3a3050', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase' }}>Scroll</span>
                 <ChevronDown size={16} color="#3a3050" style={{ animation: 'float 2.2s ease-in-out infinite' }} />
               </button>
             </div>
           </section>
  )
}

export default Hero