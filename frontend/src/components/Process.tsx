import { Search, Users, Rocket, TrendingUp, Sparkles } from 'lucide-react';

export default function Process() {
  const steps = [
    {
      icon: Search,
      number: '01',
      title: 'Scope with spine',
      description: 'Outcomes, stack, seniority mix, SLOs.',
      gradient: 'from-blue-600 to-cyan-600'
    },
    {
      icon: Users,
      number: '02',
      title: 'Interview & assemble',
      description: 'You meet the exact engineers; we finalize your pod.',
      gradient: 'from-cyan-600 to-emerald-600'
    },
    {
      icon: Rocket,
      number: '03',
      title: 'Build & prove',
      description: 'Two-week rhythm, demos, telemetry, docs.',
      gradient: 'from-emerald-600 to-blue-600'
    },
    {
      icon: TrendingUp,
      number: '04',
      title: 'Transfer or scale',
      description: 'Keep as dedicated, scale up/down, or hire them into your org.',
      gradient: 'from-blue-600 to-cyan-600'
    }
  ];

  return (
    <section className="relative py-24 bg-slate-950 overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-20" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500/20 rounded-full blur-[120px] animate-pulse-slow" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-[120px] animate-pulse-slow" style={{ animationDelay: '2s' }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-effect text-blue-300 text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            <span>Our Process</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6">
            How C2H + DRM Work
          </h2>
          <p className="max-w-3xl mx-auto text-2xl">
            <span className="text-gradient font-bold">Simple. Sane. Fast.</span>
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative group">
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-20 left-full w-full h-1 bg-gradient-to-r from-cyan-500/50 via-emerald-500/30 to-transparent z-0">
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/50 via-emerald-500/30 to-transparent blur-sm" />
                  </div>
                )}

                <div className="relative h-full">
                  <div className={`absolute -inset-1 bg-gradient-to-r ${step.gradient} rounded-3xl opacity-0 group-hover:opacity-50 blur-xl transition duration-500`} />
                  <div className="relative h-full p-8 rounded-3xl glass-effect hover:bg-white/10 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2">
                    <div className={`absolute -top-6 -left-6 w-16 h-16 rounded-2xl bg-gradient-to-br ${step.gradient} flex items-center justify-center text-white text-xl font-black shadow-glow group-hover:scale-110 transition-transform duration-300`}>
                      {step.number}
                    </div>

                    <div className="mb-6 mt-4">
                      <Icon className="w-10 h-10 text-cyan-400 group-hover:text-emerald-400 transition-colors" />
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-3">
                      {step.title}
                    </h3>
                    <p className="text-slate-300 leading-relaxed text-lg">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-cyan-600 via-emerald-600 to-blue-600 rounded-3xl blur-xl opacity-40 group-hover:opacity-60 transition duration-500" />
          <div className="relative p-10 rounded-3xl glass-effect">
            <p className="text-center text-2xl text-white leading-relaxed">
              <span className="text-cyan-400 font-bold">Humans for judgment.</span>{' '}
              <span className="text-emerald-400 font-bold">Machines for repetition.</span>{' '}
              <span className="font-bold">Documentation as a deliverable.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
