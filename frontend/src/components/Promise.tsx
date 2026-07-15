import { Shield, Users, Zap, DollarSign, Unlock, Sparkles } from 'lucide-react';
import Card3D from './Card3D';

export default function Promise() {
  return (
    <section className="relative py-24 bg-slate-950 overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-500/20 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[150px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-effect text-cyan-300 text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            <span>The Promise</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6">
            The C2H + DRM Promise —{' '}
            <span className="text-gradient">
              Your Team, On Your Terms
            </span>
          </h2>
          <p className="max-w-3xl mx-auto text-xl text-slate-300 leading-relaxed">
            Hiring is slow. Outsourcing is opaque. "Staff-aug" often hides the real people behind the scenes.
            <br />
            <span className="text-cyan-400 font-semibold">C2H (Contract-to-Hire)</span> and <span className="text-emerald-400 font-semibold">DRM (Dedicated Resource Model)</span> change the game:
          </p>
        </div>

        <div className="relative group mb-12 animate-scale-in">
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-cyan-600 to-emerald-600 rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition duration-500" />
          <div className="relative glass-effect rounded-3xl p-10 sm:p-14">
            <p className="text-2xl text-white leading-relaxed text-center font-light">
              <span className="text-cyan-400 font-bold">Your interviews, your repos, your rituals</span> — with full IP and cost transparency.
              You get the team extension now, the option to hire later, and operational control from day one —
              <span className="text-emerald-400 font-bold"> without rebuilding anything or surrendering ownership.</span>
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: Users,
              title: 'Direct access',
              description: 'Meet the engineers. Daily standups. No middle layers.',
              gradient: 'from-cyan-500 via-cyan-400 to-emerald-500'
            },
            {
              icon: Zap,
              title: 'Elastic scale',
              description: 'Expand or contract teams without wrecking the roadmap.',
              gradient: 'from-emerald-500 via-emerald-400 to-blue-500'
            },
            {
              icon: DollarSign,
              title: 'Transparent commercials',
              description: 'Clear rates, clear burn, zero gotchas.',
              gradient: 'from-blue-500 via-cyan-400 to-cyan-500'
            },
            {
              icon: Unlock,
              title: 'Zero lock-ins',
              description: 'Walk away anytime and keep everything.',
              gradient: 'from-cyan-500 via-blue-400 to-emerald-500'
            }
          ].map((item, index) => {
            const Icon = item.icon;
            return (
              <Card3D key={index} className="group relative p-8 rounded-2xl glass-effect hover:bg-white/10 transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-20 rounded-2xl transition-opacity duration-500" style={{
                  background: `linear-gradient(135deg, rgba(59, 130, 246, 0.3), rgba(6, 182, 212, 0.3))`
                }} />
                <div className={`relative inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${item.gradient} mb-6 shadow-glow group-hover:scale-110 transition-transform duration-300`}
                     style={{ transform: 'translateZ(30px)' }}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="relative text-2xl font-bold text-white mb-3" style={{ transform: 'translateZ(20px)' }}>
                  {item.title}
                </h3>
                <p className="relative text-slate-400 leading-relaxed text-lg" style={{ transform: 'translateZ(10px)' }}>
                  {item.description}
                </p>
              </Card3D>
            );
          })}
        </div>
      </div>
    </section>
  );
}
