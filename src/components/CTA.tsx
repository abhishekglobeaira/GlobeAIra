import { Calendar, MessageCircle, ArrowRight, Sparkles } from 'lucide-react';
import FloatingShapes from './FloatingShapes';

export default function CTA() {
  return (
    <section className="relative py-24 bg-slate-950 overflow-hidden">
      <FloatingShapes />
      <div className="absolute inset-0 bg-grid-pattern opacity-20" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-gradient-radial from-blue-500/30 via-cyan-500/20 to-transparent rounded-full blur-3xl" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative group">
          <div className="absolute -inset-2 bg-gradient-to-r from-blue-600 via-cyan-600 to-emerald-600 rounded-[3rem] blur-2xl opacity-75 group-hover:opacity-100 transition duration-500 animate-glow" />
          <div className="relative rounded-[3rem] bg-gradient-to-br from-blue-600 via-cyan-600 to-emerald-600 p-1">
            <div className="rounded-[2.8rem] bg-slate-950 p-12 sm:p-16 relative overflow-hidden">
              <div className="absolute inset-0 bg-grid-pattern opacity-10" />
              <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/20 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl" />

              <div className="relative text-center space-y-8">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-effect text-cyan-300 text-sm font-medium mb-4 animate-bounce-slow">
                  <Sparkles className="w-4 h-4 animate-spin-slow" />
                  <span>Ready to Get Started?</span>
                </div>

                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight">
                  Ready to Stand Up a Team<br />
                  <span className="text-gradient">You Actually Own?</span>
                </h2>

                <p className="text-2xl text-slate-300 max-w-2xl mx-auto font-light">
                  Start with a pod. Keep what works. Hire when you're sure.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
                  <a
                    href="/contact"
                    className="group inline-flex items-center justify-center gap-3 px-10 py-5 rounded-2xl bg-gradient-to-r from-blue-600 via-cyan-600 to-emerald-600 text-white text-lg font-bold shadow-glow-lg hover:shadow-glow-cyan transition-all duration-300 transform hover:scale-105 relative overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 via-emerald-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <Calendar className="w-6 h-6 relative z-10 group-hover:rotate-12 transition-transform" />
                    <span className="relative z-10">Book a 20-Minute Strategy Call</span>
                    <ArrowRight className="w-6 h-6 relative z-10 group-hover:translate-x-2 transition-transform" />
                  </a>
                  <a
                    href="https://wa.me/919039064608"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-3 px-10 py-5 rounded-2xl glass-effect text-white text-lg font-bold hover:bg-white/10 transition-all duration-300 transform hover:scale-105 group"
                  >
                    <MessageCircle className="w-6 h-6 group-hover:rotate-12 transition-transform" />
                    Chat on WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-cyan-600 via-emerald-600 to-blue-600 rounded-3xl opacity-20 group-hover:opacity-40 blur-xl transition duration-500" />
          <div className="relative p-10 rounded-3xl glass-effect">
            <h3 className="text-3xl font-black text-white mb-6 text-center">
              <span className="text-gradient">Future Scope</span> — Expanding Into D2H & FTE
            </h3>
            <p className="text-slate-300 leading-relaxed text-center text-lg max-w-3xl mx-auto">
              GlobeAIra Tech will soon extend its model portfolio with <span className="text-cyan-400 font-bold">D2H (Dedicated-to-Hire)</span> and <span className="text-emerald-400 font-bold">FTE engagements</span> — enabling clients seeking deeper long-term integrations to transition seamlessly from Contract-to-Hire or Dedicated Resource setups into permanent models under their own entity.
              Our roadmap ensures continuity — whichever route you take, you always keep ownership.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
