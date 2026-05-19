import { Calendar, MessageCircle, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../components/image/logo.jpeg';
export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Careers', href: '/careers' },
    { label: 'Contact', href: '/contact' }
  ];

  const isActive = (href: string) => location.pathname === href;

  return (
    <nav className="relative border-b border-white/10 backdrop-blur-xl bg-slate-950/50 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-8">
            <Link to="/" className="flex items-center gap-3">
            <div>
             <img
              src={Logo}
              alt="GlobeAIra Logo"
              className="w-20 h-20 object-contain rounded-xl shadow-glow border border-white/10 bg-white/5 p-1"
            />
            </div>
              <div className="text-2xl font-bold text-gradient">
                GlobeAIra 
                <div className="text-sm font-bold text-gradient"><span>Tech Pvt Ltd</span></div>
              </div>
            </Link>

            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`px-4 py-2 rounded-lg hover:text-white hover:bg-white/5 transition-all duration-300 font-medium ${
                    isActive(link.href) ? 'text-cyan-400 bg-white/5' : 'text-slate-300'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Link
              to="/contact"
              className="hidden md:flex items-center gap-2 px-5 py-2.5 rounded-xl glass-effect text-white hover:bg-white/10 transition-all duration-300 group"
            >
              <Calendar className="w-4 h-4 group-hover:scale-110 transition-transform" />
              <span className="font-medium">Book Consultation</span>
            </Link>
            <a
              href="https://wa.me/919039064608"
              target="_blank"
              rel="noreferrer"
              className="hidden sm:flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 via-cyan-600 to-emerald-600 text-white font-medium hover:shadow-glow-lg transition-all duration-300 group"
            >
              <MessageCircle className="w-4 h-4 group-hover:scale-110 transition-transform" />
              <span>WhatsApp</span>
            </a>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-lg glass-effect text-white hover:bg-white/10 transition-all duration-300"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden mt-4 pt-4 border-t border-white/10">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`px-4 py-3 rounded-lg hover:text-white hover:bg-white/5 transition-all duration-300 font-medium ${
                    isActive(link.href) ? 'text-cyan-400 bg-white/5' : 'text-slate-300'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="#consultation"
                className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl glass-effect text-white hover:bg-white/10 transition-all duration-300 mt-2"
                onClick={() => setIsMenuOpen(false)}
              >
                <Calendar className="w-4 h-4" />
                <span className="font-medium">Book Consultation</span>
              </a>
            <a  
              href="https://wa.me/919039064608"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 via-cyan-600 to-emerald-600 text-white font-medium hover:shadow-glow-lg transition-all duration-300 transform hover:scale-105 group"
            >
              <MessageCircle className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              WhatsApp Us
            </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
} 
