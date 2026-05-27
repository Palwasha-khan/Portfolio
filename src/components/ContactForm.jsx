import React, { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function ContactForm({ info, Github, Linkedin, onSuccess }) {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [statusMessage, setStatusMessage] = useState({ text: '', isError: false })

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Name is required';
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) e.email = 'Valid email required';
    if (!form.message.trim() || form.message.length < 10) e.message = 'Message must be at least 10 characters';
    return e;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { 
      setErrors(errs); 
      return; 
    }

    setLoading(true);
    setStatusMessage({ text: '', isError: false });

    const formData = { 
      access_key: import.meta.env.VITE_WEB3FORMS_KEY, 
      name: form.name,
      email: form.email,
      message: form.message,
      subject: `New Portfolio Message from ${form.name}`,
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(formData)
      });

      const result = await response.json();

      if (result.success) {
        setStatusMessage({ text: '✨ Message sent successfully to my inbox!', isError: false });
        setForm({ name: '', email: '', message: '' }); 
        setErrors({});
        if (onSuccess) onSuccess();
      } else {
        setStatusMessage({ text: result.message || 'Something went wrong.', isError: true });
      }
    } catch (error) {
      setStatusMessage({ text: 'Network error. Please try again.', isError: true });
    } finally {
      setLoading(false);
    }
  };
  // Maps clean variables to match your exact styling parameters
  const contactItems = [
    { Icon: Mail, label: 'Email', val: info?.email, href: info?.email ? `mailto:${info.email}` : null, c: '#ff9dbe' },
    { Icon: Phone, label: 'Phone', val: info?.phone, href: info?.phone ? `tel:${info.phone}` : null, c: '#c4b0ff' },
    { Icon: MapPin, label: 'Location', val: info?.location, href: null, c: '#ff9dbe' },
    { Icon: Github, label: 'GitHub', val: 'github.com/palwashakhan', href: info?.github, c: '#c4b0ff' },
    { Icon: Linkedin, label: 'LinkedIn', val: 'Connect on LinkedIn', href: info?.linkedin, c: '#ff9dbe' },
  ];

  return (
    <div style={{ padding: '100px 0' }}>
      {/* SECTION HEADER */}
      <div style={{ textAlign: 'center', marginBottom: 56 }}>
        <span className="section-tag"><Mail size={10} /> Contact</span>
        <h2 style={{ margin: '18px 0 14px', fontSize: 38, fontWeight: 900, color: '#fff', letterSpacing: '-0.03em' }}>
          Let's <span className="gradient-text">Work Together</span>
        </h2>
        <p style={{ margin: 0, fontSize: 16, color: '#4a4060', maxWidth: 450, marginLeft: 'auto', marginRight: 'auto', lineHeight: '1.7' }}>
          Have a project in mind or just want to connect? I'd love to hear from you.
        </p>
      </div>

      {/* TWO COLUMN CONTACT GRID */}
      <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1fr) minmax(0,1.5fr)', gap: 24, maxWidth: 920, margin: '0 auto' }} className="contact-grid">
        
        {/* LEFT COLUMN: CONTACT DETAILS */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {contactItems.map(({ Icon, label, val, href, c }) => {
            if (!Icon) return null; // Safe guard if components are still processing
            return (
              <div key={label} className="notebook-card" style={{ padding: '16px 20px', display: 'flex', alignItems: 'center', gap: 14 }}>
                <div style={{ width: 40, height: 40, borderRadius: 11, background: 'rgba(196,176,255,0.05)', border: '1px solid rgba(196,176,255,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Icon size={16} color={c} />
                </div>
                <div>
                  <p style={{ margin: 0, fontSize: 10, color: '#3a3050', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase' }}>{label}</p>
                  {href ? (
                    <a 
                      href={href} 
                      target={href.startsWith('http') ? '_blank' : undefined} 
                      rel="noopener noreferrer"
                      style={{ fontSize: 13, color: '#c4b0ff', fontWeight: 500, textDecoration: 'none', transition: 'color 0.2s' }}
                      onMouseEnter={e => e.target.style.color = '#ff9dbe'}
                      onMouseLeave={e => e.target.style.color = '#c4b0ff'}
                    >
                      {val}
                    </a>
                  ) : (
                    <p style={{ margin: 0, fontSize: 13, color: '#c4b0ff', fontWeight: 500 }}>{val}</p>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* RIGHT COLUMN: INTERACTIVE FORM CONTAINER */}
        <div className="notebook-card" style={{ padding: '36px 40px' }}>
          <h3 style={{ margin: '0 0 4px', fontSize: 20, fontWeight: 800, color: '#fff' }}>Send a Message ✉️</h3>
          <p style={{ margin: '0 0 28px', fontSize: 13, color: '#3a3050' }}>I typically reply within 24 hours.</p>
          
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
              {loading ? 'Sending...' : 'Send Message'}
            </button>
          </form>

          
        </div>

      </div>
    </div>
  );
}