import { Target, Code, TestTube, Boxes, Sparkles } from 'lucide-react';
import Card3D from './Card3D';
import Particle3D from './Particle3D';

export default function Benefits() {
  const teams = [
    {
      icon: Target,
      title: 'AI & Automation',
      description: 'Data pipelines, workflow automation, LLM ops',
      gradient: 'from-blue-600 via-blue-500 to-cyan-600',
      iconBg: 'from-blue-500/20 to-cyan-500/20'
    },
    {
      icon: Code,
      title: 'SaaS / Product Engineering',
      description: 'Full-stack, APIs, mobile, microservices',
      gradient: 'from-cyan-600 via-cyan-500 to-emerald-600',
      iconBg: 'from-cyan-500/20 to-emerald-500/20'
    },
    {
      icon: TestTube,
      title: 'QA Engineering',
      description: 'Automation suites, performance testing',
      gradient: 'from-emerald-600 via-emerald-500 to-blue-600',
      iconBg: 'from-emerald-500/20 to-blue-500/20'
    },
    {
      icon: Boxes,
      title: 'BIM / AEC',
      description: 'Revit/IFC, clash detection, coordination',
      gradient: 'from-blue-600 via-cyan-500 to-emerald-600',
      iconBg: 'from-blue-500/20 to-emerald-500/20'
    }
  ];

  return (
    <section className="relative py-24 bg-slate-900 overflow-hidden">
      <Particle3D />
      <div className="absolute inset-0 bg-grid-pattern opacity-10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-blue-500/20 to-transparent rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-effect text-emerald-300 text-sm font-medium mb-6 animate-bounce-slow">
            <Sparkles className="w-4 h-4 animate-spin-slow" />
            <span>Expert Teams</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6">
            Teams You Can Point at{' '}
            <span className="text-gradient">
              Hard Problems
            </span>
          </h2>
          <p className="max-w-3xl mx-auto text-xl text-slate-300 leading-relaxed">
            Each pod is built for <span className="text-cyan-400 font-semibold">resilience</span> — capacity today, capability tomorrow.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {teams.map((team, index) => {
            const Icon = team.icon;
            return (
              <Card3D key={index} className="group relative">
                <div className={`absolute -inset-1 bg-gradient-to-r ${team.gradient} rounded-3xl opacity-0 group-hover:opacity-50 blur-xl transition duration-500`} />
                <div className="relative h-full p-10 rounded-3xl glass-effect hover:bg-white/10 transition-all duration-500">
                  <div className={`relative inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br ${team.iconBg} border border-white/10 mb-6 group-hover:scale-110 transition-transform duration-300`}
                       style={{ transform: 'translateZ(40px)' }}>
                    <Icon className="w-10 h-10 text-cyan-400 group-hover:text-emerald-400 transition-colors" />
                  </div>
                  <h3 className="text-3xl font-black text-white mb-4" style={{ transform: 'translateZ(30px)' }}>
                    {team.title}
                  </h3>
                  <p className="text-slate-300 text-xl leading-relaxed" style={{ transform: 'translateZ(20px)' }}>
                    {team.description}
                  </p>
                </div>
              </Card3D>
            );
          })}
        </div>
      </div>
    </section>
  );
}
