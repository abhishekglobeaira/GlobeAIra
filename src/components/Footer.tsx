import { Calendar, MessageCircle, Mail, MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from './image/logo.jpeg';

export default function Footer() {
  const footerLinks = {
    company: [
      { label: 'Home', href: '/' },
      { label: 'About', href: '/about' },
      { label: 'Services', href: '/services' },
      { label: 'Careers', href: '/careers' },
      { label: 'Contact', href: '/contact' }
    ],
    services: [
      { label: 'AI & Automation', href: '/services#ai-automation' },
      { label: 'SaaS Engineering', href: '/services#saas' },
      { label: 'C2H + DRM Teams', href: '/services#c2h-drm' },
      { label: 'BIM / AEC', href: '/services#bim' }
    ],
    contact: [
      { icon: Mail, label: 'connect@globeaira.com', href: 'mailto:connect@globeaira.com' },
      { icon: Phone, label: '+91 9039064608', href: 'tel:+91 9039064608' },
      { icon: MapPin, label: 'Global Operations', href: '/contact/' }
    ]
  };

  return (
    <footer className="relative bg-slate-950 border-t border-white/10 overflow-hidden">
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-[150px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
            <img
              src={logo}
              alt="GlobeAIra Logo"
              className="w-20 h-20 object-contain rounded-xl shadow-glow border border-white/10 bg-white/5 p-1"
            />
              <div className="text-2xl font-black text-gradient">
                GlobeAIra
                <div><span className='text-sm font-bold text-gradient'>Tech Pvt Ltd</span></div>
              </div>
            </div><br>
            </br>
            <p className="text-white font-bold leading-relaxed mb-2">
              Your Team, On Your Terms
            </p>
            <p className="text-cyan-400 font-bold mb-4">
              Own Everything
            </p>
            <p className="text-slate-400 leading-relaxed text-sm">
              Building resilient teams for markets that never stop moving.
            </p>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-slate-400 hover:text-cyan-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-slate-400 hover:text-cyan-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4">Contact</h3>
            <ul className="space-y-3">
              {footerLinks.contact.map((item) => {
                const Icon = item.icon;
                return (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      className="flex items-center gap-2 text-slate-400 hover:text-cyan-400 transition-colors"
                    >
                      <Icon className="w-4 h-4" />
                      <span className="text-sm">{item.label}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <a
            href="/contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl glass-effect text-white font-medium hover:bg-white/10 transition-all duration-300 transform hover:scale-105 group"
          >
            <Calendar className="w-5 h-5 group-hover:rotate-12 transition-transform" />
            Book Consultation
          </a>
          <a
            href="https://wa.me/+919039064608"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 via-cyan-600 to-emerald-600 text-white font-medium hover:shadow-glow-lg transition-all duration-300 transform hover:scale-105 group"
          >
            <MessageCircle className="w-5 h-5 group-hover:rotate-12 transition-transform" />
            WhatsApp Us
          </a>
        </div>

        <div className="pt-8 border-t border-white/10 text-center">
          <p className="text-slate-400">
            © {new Date().getFullYear()} <span className="text-cyan-400 font-semibold">GlobeAIra Tech Pvt Ltd</span>. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
