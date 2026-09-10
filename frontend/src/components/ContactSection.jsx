import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Copy, 
  Check, 
  User, 
  MessageSquare, 
  FileText, 
  Sparkles,
  ArrowRight,
  Download
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import contactDeskImg from '../assets/contact_desk.jpg';
import Toast from './Toast';

const ContactSection = () => {
  const { personal } = portfolioData;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    _gotcha: '',
  });

  const [status, setStatus] = useState({ type: '', message: '' });
  const [copiedField, setCopiedField] = useState(null);
  const [toast, setToast] = useState({ message: '', type: 'info' });

  const handleCopy = (text, fieldName) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    const label = fieldName === 'email' ? 'Email address' : fieldName === 'phone' ? 'Phone number' : 'Location';
    setToast({
      message: `${label} copied to clipboard! ✨`,
      type: 'copied'
    });
    setTimeout(() => setCopiedField(null), 2000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      const err = 'Please fill in all required fields.';
      setStatus({ type: 'error', message: err });
      setToast({ message: err, type: 'error' });
      return;
    }

    try {
      setStatus({ type: 'loading', message: 'Sending message...' });
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json().catch(() => ({}));

      if (res.ok) {
        const successMsg = data.message || 'Thank you! Your message has been received. I will reply soon! ♡';
        setStatus({
          type: 'success',
          message: successMsg,
        });
        setToast({ message: successMsg, type: 'success' });
        setFormData({ name: '', email: '', subject: '', message: '', _gotcha: '' });
      } else {
        const errMsg = data.error || 'Failed to send message. Please check your inputs and try again.';
        setStatus({
          type: 'error',
          message: errMsg,
        });
        setToast({ message: errMsg, type: 'error' });
      }
    } catch {
      const failMsg = 'Could not connect to server. Please try again later or email me directly.';
      setStatus({
        type: 'error',
        message: failMsg,
      });
      setToast({ message: failMsg, type: 'error' });
    }
  };

  return (
    <div className="relative min-h-screen py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Ambient background glow */}
      <div className="ambient-glow-purple top-20 left-10" />
      <div className="ambient-glow-pink top-80 right-10" />

      {/* TOP HEADER */}
      <div className="relative z-10 flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
        <div>
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-semibold tracking-wider uppercase mb-3">
            <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse"></span>
            <span>GET IN TOUCH</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            Let's Build <br className="hidden sm:block" />
            Something <span className="text-gradient-purple-pink">Exceptional.</span>
          </h1>

          <p className="text-slate-400 text-base sm:text-lg mt-3 max-w-xl">
            I'm always open to discussing new engineering opportunities, full-time roles, or collaborating on ambitious projects.
          </p>
        </div>

        <div className="flex items-center space-x-3 px-4 py-2.5 rounded-2xl bg-[#0e1327]/80 border border-purple-500/25 backdrop-blur-md shadow-md sm:self-end">
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></div>
          <span className="text-xs font-semibold text-slate-200">Rapid Response &bull; 24h</span>
        </div>
      </div>

      {/* MAIN TWO-COLUMN CONTAINER */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
        
        {/* LEFT: SEND ME A MESSAGE FORM (7 cols) */}
        <div className="lg:col-span-7">
          <div className="reference-card rounded-3xl p-6 sm:p-8 relative">
            
            <div className="flex items-center space-x-3 mb-6">
              <div className="contact-form-icon w-8 h-8 rounded-xl bg-purple-500/20 flex items-center justify-center text-purple-400">
                <Mail className="w-4 h-4" />
              </div>
              <h2 className="text-lg sm:text-xl font-bold text-white">
                Send Me a Message
              </h2>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Invisible Honeypot Spam Trap for bots */}
              <input
                type="text"
                name="_gotcha"
                value={formData._gotcha}
                onChange={(e) => setFormData({ ...formData, _gotcha: e.target.value })}
                tabIndex="-1"
                autoComplete="off"
                className="hidden opacity-0 absolute -z-50 pointer-events-none"
              />

              {/* Row: Name and Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="relative">
                  <User className="w-4 h-4 text-slate-400 absolute left-4 top-3.5" />
                  <input
                    type="text"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-[#080b18]/90 border border-slate-800 focus:border-purple-500 rounded-2xl pl-11 pr-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-purple-500 transition-all"
                    required
                  />
                </div>

                <div className="relative">
                  <Mail className="w-4 h-4 text-slate-400 absolute left-4 top-3.5" />
                  <input
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-[#080b18]/90 border border-slate-800 focus:border-purple-500 rounded-2xl pl-11 pr-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-purple-500 transition-all"
                    required
                  />
                </div>
              </div>

              {/* Subject */}
              <div className="relative">
                <FileText className="w-4 h-4 text-slate-400 absolute left-4 top-3.5" />
                <input
                  type="text"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full bg-[#080b18]/90 border border-slate-800 focus:border-purple-500 rounded-2xl pl-11 pr-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-purple-500 transition-all"
                />
              </div>

              {/* Message textarea */}
              <div className="relative">
                <MessageSquare className="w-4 h-4 text-slate-400 absolute left-4 top-4" />
                <textarea
                  rows="4"
                  placeholder="Your Message..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-[#080b18]/90 border border-slate-800 focus:border-purple-500 rounded-2xl pl-11 pr-4 py-3.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-purple-500 transition-all resize-none"
                  required
                ></textarea>
              </div>

              {/* Submit Status Feedback */}
              {status.message && (
                <div className={`p-3 rounded-xl text-xs font-medium ${
                  status.type === 'error' 
                     ? 'bg-rose-500/10 border border-rose-500/30 text-rose-300' 
                    : 'bg-emerald-500/10 border border-emerald-500/30 text-emerald-300'
                }`}>
                  {status.message}
                </div>
              )}

              {/* Full Width Submit Button */}
              <button
                type="submit"
                disabled={status.type === 'loading'}
                className="w-full btn-gradient-connect flex items-center justify-center space-x-2 py-3.5 px-6 rounded-2xl text-sm font-semibold cursor-pointer shadow-[0_4px_25px_rgba(217,70,239,0.35)] disabled:opacity-60 disabled:cursor-not-allowed"
              >
                <Send className="w-4 h-4" />
                <span>{status.type === 'loading' ? 'Sending Message...' : 'Send Message'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <p className="text-center text-xs text-slate-400 pt-1 flex items-center justify-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                <span>Guaranteed reply within 24 business hours</span>
              </p>

            </form>

          </div>
        </div>

        {/* RIGHT: CONTACT INFO & SOCIALS (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          
          {/* Contact Information Card */}
          <div className="reference-card rounded-3xl p-6 sm:p-7 relative">
            <h3 className="text-base font-bold text-white mb-5">
              Contact Information
            </h3>

            <div className="space-y-4">
              
              {/* Email Card */}
              <div className="contact-card-email bg-[#090d1c]/90 border border-slate-800/90 rounded-2xl p-3.5 flex items-center justify-between group hover:border-purple-500/30 transition-all">
                <div className="flex items-center space-x-3.5 overflow-hidden">
                  <div className="contact-icon-box w-10 h-10 rounded-xl bg-pink-500/20 text-pink-400 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="truncate">
                    <div className="text-[11px] text-slate-400 font-medium">Email</div>
                    <div className="text-sm font-semibold text-white truncate">{personal.email}</div>
                  </div>
                </div>

                <button 
                  onClick={() => handleCopy(personal.email, 'email')}
                  className="contact-action-btn p-2 rounded-lg bg-slate-800/80 hover:bg-purple-600/30 text-slate-300 hover:text-white transition-colors cursor-pointer"
                  title="Copy email"
                >
                  {copiedField === 'email' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Phone Card */}
              <div className="contact-card-phone bg-[#090d1c]/90 border border-slate-800/90 rounded-2xl p-3.5 flex items-center justify-between group hover:border-purple-500/30 transition-all">
                <div className="flex items-center space-x-3.5 overflow-hidden">
                  <div className="contact-icon-box w-10 h-10 rounded-xl bg-sky-500/20 text-sky-400 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="truncate">
                    <div className="text-[11px] text-slate-400 font-medium">Phone</div>
                    <div className="text-sm font-semibold text-white truncate">{personal.phone}</div>
                  </div>
                </div>

                <button 
                  onClick={() => handleCopy(personal.phone, 'phone')}
                  className="contact-action-btn p-2 rounded-lg bg-slate-800/80 hover:bg-purple-600/30 text-slate-300 hover:text-white transition-colors cursor-pointer"
                  title="Copy phone"
                >
                  {copiedField === 'phone' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Location Card */}
              <div className="contact-card-location bg-[#090d1c]/90 border border-slate-800/90 rounded-2xl p-3.5 flex items-center justify-between group hover:border-purple-500/30 transition-all">
                <div className="flex items-center space-x-3.5 overflow-hidden">
                  <div className="contact-icon-box w-10 h-10 rounded-xl bg-purple-500/20 text-purple-400 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div className="truncate">
                    <div className="text-[11px] text-slate-400 font-medium">Location</div>
                    <div className="text-sm font-semibold text-white truncate">{personal.location}</div>
                  </div>
                </div>

                <button 
                  onClick={() => handleCopy(personal.location, 'location')}
                  className="contact-action-btn p-2 rounded-lg bg-slate-800/80 hover:bg-purple-600/30 text-slate-300 hover:text-white transition-colors cursor-pointer"
                  title="Copy location"
                >
                  {copiedField === 'location' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Resume Card */}
              <a
                href="/Pooja_Patil_Resume.pdf"
                download="Pooja_Patil_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-card-resume bg-[#090d1c]/90 border border-slate-800/90 hover:border-pink-500/40 rounded-2xl p-3.5 flex items-center justify-between group transition-all cursor-pointer"
                title="Download Resume (PDF)"
              >
                <div className="flex items-center space-x-3.5 overflow-hidden">
                  <div className="contact-icon-box w-10 h-10 rounded-xl bg-pink-500/20 text-pink-400 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                    <FileText className="w-5 h-5" />
                  </div>
                  <div className="truncate">
                    <div className="text-[11px] text-slate-400 font-medium">Curriculum Vitae</div>
                    <div className="text-sm font-semibold text-white group-hover:text-pink-300 transition-colors">Download Resume (PDF)</div>
                  </div>
                </div>

                <div className="contact-action-btn p-2 rounded-lg bg-slate-800/80 group-hover:bg-pink-600/30 text-slate-300 group-hover:text-white transition-colors">
                  <Download className="w-4 h-4 text-pink-400" />
                </div>
              </a>

            </div>

          </div>

          {/* Let's Be Social Card */}
          <div className="reference-card rounded-3xl p-6 relative">
            <h3 className="text-base font-bold text-white mb-1">
              Let's Be Social
            </h3>
            <p className="text-xs text-slate-400 mb-4">
              Connect with me on these platforms
            </p>

            <div className="flex items-center space-x-3">
              {[
                { name: 'GitHub', icon: '🐙', url: personal.socials.github },
                { name: 'LinkedIn', icon: '💼', url: personal.socials.linkedin },
                { name: 'Mail', icon: '✉️', url: personal.socials.email },
              ].map((soc, idx) => (
                <a
                  key={idx}
                  href={soc.url}
                  target="_blank"
                  rel="noreferrer"
                  className="social-link-btn w-11 h-11 rounded-2xl bg-[#090d1c] border border-slate-800 hover:border-purple-500/50 flex items-center justify-center text-slate-300 hover:text-white hover:bg-purple-600/20 transition-all hover:scale-110"
                  title={soc.name}
                >
                  <span className="text-lg">{soc.icon}</span>
                </a>
              ))}
            </div>

            <div className="mt-6 flex justify-end">
              <span className="text-xs font-semibold text-purple-300">
                Pooja Patil &bull; Open to Work
              </span>
            </div>
          </div>

        </div>

      </div>

      {/* BOTTOM BANNER: OPEN TO NEW OPPORTUNITIES */}
      <div className="relative z-10 reference-card rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 border border-purple-500/30 bg-gradient-to-r from-purple-950/40 via-slate-900/80 to-slate-900/80 shadow-[0_10px_35px_rgba(168,85,247,0.15)]">
        <div className="flex items-center space-x-5">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-purple-600 to-pink-500 flex items-center justify-center flex-shrink-0 shadow-[0_0_20px_rgba(217,70,239,0.4)]">
            <Sparkles className="w-7 h-7 text-white" />
          </div>
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">
              Open to New Opportunities
            </h3>
            <p className="text-slate-400 text-sm max-w-xl">
              Let's create something meaningful together. I'm currently open to full-time roles, freelance projects and exciting collaborations.
            </p>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <div className="hidden lg:flex items-center space-x-2 text-xs font-semibold text-purple-300 px-3.5 py-2 rounded-full bg-purple-500/10 border border-purple-500/20">
            <span>⚡ High-Impact Delivery</span>
          </div>
          <a
            href={`mailto:${personal.email}`}
            className="btn-gradient-connect flex items-center space-x-2 px-6 py-3 rounded-full text-sm font-semibold cursor-pointer whitespace-nowrap"
          >
            <span>Let's Connect</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Floating Glassmorphic Toast Notification */}
      <Toast 
        message={toast.message} 
        type={toast.type} 
        onClose={() => setToast({ message: '', type: 'info' })} 
      />

    </div>
  );
};

export default ContactSection;
