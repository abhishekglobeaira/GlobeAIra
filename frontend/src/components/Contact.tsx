import { useState } from 'react';
import { MessageCircle, Phone, Calendar, MapPin, Mail, Clock, Shield, CheckCircle, ArrowRight, User, Building, Code, Zap } from 'lucide-react';
import Card3D from './Card3D';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    companyName: '',
    projectType: '',
    projectDetails: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const backendUrl = import.meta.env.VITE_BACKEND_URL ?? '/api';

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch(`${backendUrl}/contacts`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const message = await response.text();
        throw new Error(message || 'Unable to submit contact request');
      }

      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        companyName: '',
        projectType: '',
        projectDetails: '',
      });
    } catch (error) {
      console.error('Contact form submission failed:', error);
      alert(error instanceof Error ? error.message : 'Contact form submission failed');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative">
      <section className="relative py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-block mb-6">
              <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass-effect border border-cyan-500/30 text-cyan-300 text-sm font-medium">
                <MessageCircle className="w-4 h-4" />
                Let's Connect
              </div>
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black mb-6">
              <span className="block text-white drop-shadow-2xl">Talk Directly With</span>
              <span className="block mt-2 bg-gradient-to-r from-blue-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                Your Future Tech Team
              </span>
            </h1>
            <p className="max-w-4xl mx-auto text-xl text-slate-300 leading-relaxed mb-6">
              <span className="text-cyan-400 font-semibold">No sales maze. No bots. No scripts.</span>
              <br />
              Just real architects and delivery leads who ship what you own.
            </p>
            <p className="max-w-4xl mx-auto text-lg text-slate-400 leading-relaxed">
              Looking for AI automation, custom software development, BIM outsourcing, or dedicated C2H / DRM teams that scale on your terms?
              Start here. You own code, data, infra, and docs from day one.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            <Card3D className="group">
              <a
                href="https://wa.me/919039064608"
                className="block p-8 rounded-2xl glass-effect border border-emerald-500/20 hover:border-emerald-500/40 transition-all duration-300 h-full"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500 to-cyan-500 flex items-center justify-center mb-6 shadow-glow group-hover:scale-110 transition-transform">
                  <MessageCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">WhatsApp</h3>
                <p className="text-slate-400 mb-4 text-sm">Fastest Response</p>
                <p className="text-slate-300 leading-relaxed mb-4">
                  Share context; get a reply with a transparent next step plan within minutes.
                </p>
                <div className="inline-flex items-center gap-2 text-cyan-400 font-medium group-hover:gap-3 transition-all">
                  <span>Chat Now</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </a>
            </Card3D>

            <Card3D className="group">
              <a
                href="tel:+91 90390 64608"
                className="block p-8 rounded-2xl glass-effect border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 h-full"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mb-6 shadow-glow group-hover:scale-110 transition-transform">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Call</h3>
                <p className="text-slate-400 mb-4 text-sm">Speak With a Lead Architect</p>
                <p className="text-slate-300 leading-relaxed mb-4">
                  No BD layers. Ask hard questions about scope, team design, or SLA fit.
                </p>
                <div className="inline-flex items-center gap-2 text-cyan-400 font-medium group-hover:gap-3 transition-all">
                  <span>Call Now</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </a>
            </Card3D>

            <Card3D className="group">
              <a
                href="#form"
                className="block p-8 rounded-2xl glass-effect border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 h-full"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500 to-emerald-500 flex items-center justify-center mb-6 shadow-glow group-hover:scale-110 transition-transform">
                  <Calendar className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Form</h3>
                <p className="text-slate-400 mb-4 text-sm">Quick Start Brief</p>
                <p className="text-slate-300 leading-relaxed mb-4">
                  Tell us your goals, stack, and timeline. We'll send a first-cut C2H / DRM plan.
                </p>
                <div className="inline-flex items-center gap-2 text-cyan-400 font-medium group-hover:gap-3 transition-all">
                  <span>Fill Form</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </a>
            </Card3D>

            <Card3D className="group">
              <a
                href="#map"
                className="block p-8 rounded-2xl glass-effect border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 h-full"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-emerald-500 flex items-center justify-center mb-6 shadow-glow group-hover:scale-110 transition-transform">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Map</h3>
                <p className="text-slate-400 mb-4 text-sm">Visit Us</p>
                <p className="text-slate-300 leading-relaxed mb-4">
                  Our strategy hub × India delivery engine. Global reach, local accountability.
                </p>
                <div className="inline-flex items-center gap-2 text-cyan-400 font-medium group-hover:gap-3 transition-all">
                  <span>Open Map</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </a>
            </Card3D>
          </div>

          <div className="text-center mb-20">
            <p className="text-2xl font-bold text-gradient">
              Start small. Build smart. Scale fearless.
            </p>
          </div>
        </div>
      </section>

      <section id="form" className="relative py-24 bg-slate-900/50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-black text-white mb-6">
              <span className="text-gradient">Quick Start</span> Brief
            </h2>
            <p className="text-xl text-slate-300">
              Share your requirements and we'll respond with a detailed plan
            </p>
          </div>

          <div className="rounded-2xl glass-effect border border-cyan-500/20 p-8 sm:p-12 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:shadow-[0_0_30px_rgba(34,211,238,0.12)]">
            <form className="space-y-6" onSubmit={handleSubmit}>
              {submitted && (
                <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-4 text-emerald-300">
                  Thanks! Your request has been sent successfully.
                </div>
              )}

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white font-medium mb-2 flex items-center gap-2">
                    <User className="w-4 h-4 text-cyan-400" />
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                    className="w-full px-4 py-3 rounded-xl glass-effect border border-white/10 text-white placeholder-slate-500 focus:border-cyan-500/50 hover:border-cyan-500/40 focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-white font-medium mb-2 flex items-center gap-2">
                    <Mail className="w-4 h-4 text-cyan-400" />
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@company.com"
                    required
                    className="w-full px-4 py-3 rounded-xl glass-effect border border-white/10 text-white placeholder-slate-500 focus:border-cyan-500/50 hover:border-cyan-500/40 focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white font-medium mb-2 flex items-center gap-2">
                    <Phone className="w-4 h-4 text-cyan-400" />
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 9XXX-XXX-XXX"
                    required
                    className="w-full px-4 py-3 rounded-xl glass-effect border border-white/10 text-white placeholder-slate-500 focus:border-cyan-500/50 hover:border-cyan-500/40 focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-white font-medium mb-2 flex items-center gap-2">
                    <Building className="w-4 h-4 text-cyan-400" />
                    Company Name
                  </label>
                  <input
                    type="text"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    placeholder="Your Company"
                    className="w-full px-4 py-3 rounded-xl glass-effect border border-white/10 text-white placeholder-slate-500 focus:border-cyan-500/50 hover:border-cyan-500/40 focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-white font-medium mb-2 flex items-center gap-2">
                  <Code className="w-4 h-4 text-cyan-400" />
                  Project Type
                </label>
                <select
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl glass-effect border border-white/10 text-white bg-slate-900/50 focus:border-cyan-500/50 hover:border-cyan-500/40 focus:outline-none transition-colors"
                >
                  <option value="" style={{ backgroundColor: '#1e293b', color: '#ffffff' }}>Select a service</option>
                  <option value="ai" style={{ backgroundColor: '#1e293b', color: '#ffffff' }}>AI & Automation</option>
                  <option value="saas" style={{ backgroundColor: '#1e293b', color: '#ffffff' }}>SaaS / Product Engineering</option>
                  <option value="qa" style={{ backgroundColor: '#1e293b', color: '#ffffff' }}>QA Engineering</option>
                  <option value="bim" style={{ backgroundColor: '#1e293b', color: '#ffffff' }}>BIM / AEC</option>
                  <option value="c2h" style={{ backgroundColor: '#1e293b', color: '#ffffff' }}>C2H / DRM Teams</option>
                  <option value="other" style={{ backgroundColor: '#1e293b', color: '#ffffff' }}>Other</option>
                </select>
              </div>

              <div>
                <label className="block text-white font-medium mb-2 flex items-center gap-2">
                  <MessageCircle className="w-4 h-4 text-cyan-400" />
                  Project Details
                </label>
                <textarea
                  rows={6}
                  name="projectDetails"
                  value={formData.projectDetails}
                  onChange={handleChange}
                  placeholder="Tell us about your goals, tech stack, timeline, and team requirements..."
                  className="w-full px-4 py-3 rounded-xl glass-effect border border-white/10 text-white placeholder-slate-500 focus:border-cyan-500/50 hover:border-cyan-500/40 focus:outline-none transition-colors resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full inline-flex items-center justify-center gap-3 px-10 py-5 rounded-2xl  bg-gradient-to-r from-blue-600 via-cyan-600 to-emerald-600 text-white text-lg font-bold overflow-hidden shadow-glow-lg hover:shadow-glow-cyan transition-all duration-300 transform hover:scale-105"
              >
                <Calendar className="w-6 h-6" />
                <span>{isSubmitting ? 'Submitting...' : 'Submit Request'}</span>
                <ArrowRight className="w-6 h-6" />
              </button>
            </form>
          </div>
        </div>
      </section>

      <section className="relative py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-black text-white mb-6">
              Why People <span className="text-gradient">Choose Us</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {[
              {
                title: 'Ownership by Design',
                description: 'Your code, data, and cloud from day one.',
                icon: Shield,
                gradient: 'from-blue-500 to-cyan-500'
              },
              {
                title: 'International-Premium, India-Speed',
                description: 'GCC hours, scalable delivery.',
                icon: Zap,
                gradient: 'from-cyan-500 to-emerald-500'
              },
              {
                title: 'Zero Lock-In',
                description: 'Transparent repos, IaC, and handover runbooks.',
                icon: CheckCircle,
                gradient: 'from-emerald-500 to-blue-500'
              },
              {
                title: 'C2H + DRM Flexibility',
                description: 'Try talent under contract; hire post-proof without disruption.',
                icon: Clock,
                gradient: 'from-blue-500 to-cyan-500'
              }
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <Card3D key={index} className="group">
                  <div className="p-6 rounded-2xl glass-effect border border-white/10 hover:border-cyan-500/40 transition-all duration-300 h-full">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center mb-4 shadow-glow group-hover:scale-110 transition-transform`}>
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-slate-300 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </Card3D>
              );
            })}
          </div>

          <Card3D>
            <div className="p-8 sm:p-12 rounded-2xl glass-effect border border-cyan-500/20">
              <div className="text-center mb-8">
                <h3 className="text-3xl sm:text-4xl font-black text-white mb-4">
                  What You Get in <span className="text-gradient">20 Minutes</span>
                </h3>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  {
                    text: 'Clear cost range and delivery timeline (no "TBD")',
                    icon: '💎'
                  },
                  {
                    text: 'Team plan (roles, seniority, overlap hours)',
                    icon: '👥'
                  },
                  {
                    text: 'Risk & feasibility notes so you avoid surprises',
                    icon: '⚠️'
                  },
                  {
                    text: 'Next steps: discovery sprint or direct build. NDA-first if you prefer',
                    icon: '🚀'
                  }
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-4 group">
                    <div className="text-3xl group-hover:scale-110 transition-transform">{item.icon}</div>
                    <p className="text-slate-300 leading-relaxed flex-1">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </Card3D>
        </div>
      </section>

      <section id="map" className="relative py-24 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-black text-white mb-6">
              <span className="text-gradient">Our Locations</span>
            </h2>
            <p className="text-xl text-slate-300">
              Global reach, local accountability
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card3D>
              <div className="p-8 rounded-2xl glass-effect border border-blue-500/20 h-full">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center shadow-glow flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">Strategy Hub</h3>
                    <p className="text-slate-400">International Operations</p>
                  </div>
                </div>
                <div className="space-y-3 text-slate-300">
                  <p>Global coordination center</p>
                  <p>Enterprise governance</p>
                  <p>Executive alignment</p>
                </div>
              </div>
            </Card3D>

            <Card3D>
              <div className="p-8 rounded-2xl glass-effect border border-emerald-500/20 h-full">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-cyan-500 flex items-center justify-center shadow-glow flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">Delivery Engine</h3>
                    <p className="text-slate-400">India Operations</p>
                  </div>
                </div>
                <div className="space-y-3 text-slate-300">
                  <p>Deep engineering talent</p>
                  <p>Scalable delivery teams</p>
                  <p>24/7 follow-the-sun support</p>
                </div>
              </div>
            </Card3D>
          </div>

          <div className="mt-12">
            <div className="rounded-2xl overflow-hidden border border-cyan-500/20 relative">

              <iframe
                src="https://www.google.com/maps?q=Indore+Madhya+Pradesh+India&output=embed"
                className="w-full h-[450px] border-0"
                loading="lazy"
                allowFullScreen
              />

              {/* 📍 Location Label */}
              <div className="absolute bottom-4 left-4 bg-black/70 backdrop-blur-md px-4 py-2 rounded-lg text-white text-sm border border-white/10">
                📍 Indore, Madhya Pradesh, India
              </div>

            </div>
          </div>
        </div>
      </section>

      <section className="relative py-16 bg-slate-900/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card3D>
            <div className="p-8 rounded-2xl glass-effect border border-emerald-500/30">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-cyan-500 flex items-center justify-center flex-shrink-0 shadow-glow">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-3">
                    Future Scope - Expanding Into <span className="text-gradient">D2H & FTE</span>
                  </h3>
                  <p className="text-slate-300 leading-relaxed mb-4">
                    Quantar Quest will extend its model portfolio with D2H (Dedicated-to-Hire) and FTE engagements for clients seeking
                    long-term in-house continuity after successful C2H or DRM engagements.
                  </p>
                  <p className="text-slate-300 leading-relaxed">
                    Whichever route you take - contract, dedicated, or permanent -{' '}
                    <span className="text-cyan-400 font-semibold">you always keep ownership.</span>
                  </p>
                </div>
              </div>
            </div>
          </Card3D>
        </div>
      </section>

      <section className="relative py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex flex-wrap justify-center gap-3 text-sm text-slate-400 mb-6">
              <a href="#" className="hover:text-cyan-400 transition-colors">Contract-to-Hire</a>
              <span>•</span>
              <a href="#" className="hover:text-cyan-400 transition-colors">Dedicated Resource Model</a>
              <span>•</span>
              <a href="#" className="hover:text-cyan-400 transition-colors">AI & Automation</a>
              <span>•</span>
              <a href="#" className="hover:text-cyan-400 transition-colors">SaaS Engineering</a>
              <span>•</span>
              <a href="#" className="hover:text-cyan-400 transition-colors">BIM Outsourcing</a>
              <span>•</span>
              <a href="#" className="hover:text-cyan-400 transition-colors">Case Studies</a>
            </div>
            <p className="text-slate-500 text-sm">
              Serving: <span className="text-cyan-400 font-medium">Global Markets</span>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
