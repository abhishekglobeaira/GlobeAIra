import { useState } from 'react';
import { Building2, Factory, Cpu, Gamepad2, Sparkles } from 'lucide-react';

export default function Industries() {
  const [flippedCards, setFlippedCards] = useState<number[]>([]);
  const industries = [
    {
      icon: Building2,
      title: 'Real Estate / Construction / BIM',
      front: 'Clash-free coordination, predictable handovers.',
      back: 'Helping teams to spot design issues early, reduce costly rework, and keep projects moving with clear coordination and predictable handovers.',
      gradient: 'from-blue-600 to-cyan-600'
    },
    {
      icon: Factory,
      title: 'Manufacturing & Industrial',
      front: 'Automation ROI, MES/OT data sanity.',
      back: 'We bring clarity to operations data, reduce unplanned downtime, and ensure automation delivers measurable returns, not just dashboards.',
      gradient: 'from-cyan-600 to-emerald-600'
    },
    {
      icon: Cpu,
      title: 'Tech / SaaS',
      front: 'Clean microservices, safe deploys, sane costs.',
      back: 'Maintaining the systems that handle growth smoothly, avoid performance bottlenecks, and keep costs under control as usage scales.',
      gradient: 'from-emerald-600 to-blue-600'
    },
    {
      icon: Gamepad2,
      title: 'Gaming / iGaming',
      front: 'Low-latency infra, anti-fraud telemetry, 10x readiness.',
      back: 'We help you design infrastructure that stays fast and reliable under heavy traffic, protects against abuse, and scales safely during peak demand.',
      gradient: 'from-blue-600 to-cyan-600'
    }
  ];

  return (
    <section className="relative py-24 bg-slate-900 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(59,130,246,0.1),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(16,185,129,0.1),transparent_60%)]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-effect text-cyan-300 text-sm font-medium mb-6 animate-bounce-slow">
            <Sparkles className="w-4 h-4 animate-spin-slow" />
            <span>Industries</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6">
            Built for Leaders Who{' '}
            <span className="text-gradient">
              Can't Afford Downtime
            </span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            return (
              <div
                key={index}
                className="group relative h-80 perspective cursor-pointer"
                onMouseEnter={() => setFlippedCards(prev => [...prev, index])}
                onMouseLeave={() => setFlippedCards(prev => prev.filter(i => i !== index))}
              >
                <div className={`flip-card-inner ${flippedCards.includes(index) ? 'flipped' : ''}`}>
                  <div
                    className={`absolute -inset-1 bg-gradient-to-r ${industry.gradient} rounded-3xl opacity-0 group-hover:opacity-50 blur-xl transition duration-500`}
                  />
                  <div className="flip-card-front p-8 rounded-3xl glass-effect hover:bg-white/10 transition-all duration-500 flex flex-col justify-center">
                    <div className="mb-6">
                      <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl glass-effect border border-white/10 mb-4">
                        <Icon className="w-7 h-7 text-cyan-400" />
                      </div>
                    </div>
                    <h3 className="text-lg font-bold text-white mb-3 leading-tight">
                      {industry.title}
                    </h3>
                    <p className="text-slate-300 leading-relaxed text-sm">
                      {industry.front}
                    </p>
                    <p className="text-xs text-slate-500 mt-4">Hover to reveal</p>
                  </div>

                  <div className="flip-card-back p-8 rounded-3xl glass-effect bg-slate-900/50 flex items-center justify-center">
                    <p className="text-slate-300 leading-relaxed text-sm">
                      {industry.back}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
