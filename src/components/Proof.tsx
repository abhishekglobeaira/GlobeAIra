import { Clock, Shield, Target, TrendingDown, Sparkles, CheckCircle } from 'lucide-react';

export default function Proof() {
  const metrics = [
    {
      icon: Clock,
      title: 'Time-to-confidence',
      description: 'Over time-to-hello',
      gradient: 'from-blue-600 to-cyan-600'
    },
    {
      icon: Shield,
      title: 'SLO-first stability',
      description: 'Change-failure drops with CI/CD',
      gradient: 'from-cyan-600 to-emerald-600'
    },
    {
      icon: Target,
      title: 'Handover-ready',
      description: 'Complete runbooks included',
      gradient: 'from-emerald-600 to-blue-600'
    },
    {
      icon: TrendingDown,
      title: 'Total cost traceability',
      description: 'People + infra transparency',
      gradient: 'from-blue-600 to-cyan-600'
    }
  ];

  return (
    <section className="relative py-24 bg-slate-950 overflow-hidden">
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-emerald-500/20 rounded-full blur-[150px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-effect text-emerald-300 text-sm font-medium mb-6">
            <CheckCircle className="w-4 h-4" />
            <span>Proven Results</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6">
            Proof in{' '}
            <span className="text-gradient">
              How We Operate
            </span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {metrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <div
                key={index}
                className="group relative"
              >
                <div className={`absolute -inset-1 bg-gradient-to-r ${metric.gradient} rounded-3xl opacity-0 group-hover:opacity-50 blur-xl transition duration-500`} />
                <div className="relative h-full p-8 rounded-3xl glass-effect hover:bg-white/10 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2">
                  <div className="mb-6">
                    <Icon className="w-12 h-12 text-cyan-400 group-hover:text-emerald-400 transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    {metric.title}
                  </h3>
                  <p className="text-slate-300 leading-relaxed">
                    {metric.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-cyan-600 to-emerald-600 rounded-3xl blur-2xl opacity-60 group-hover:opacity-80 transition duration-500 animate-pulse-slow" />
          <div className="relative p-12 sm:p-16 rounded-3xl glass-effect">
            <div className="text-center">
              <p className="text-2xl sm:text-3xl text-white font-semibold mb-6">
                Clients stay for one reason:
              </p>
              <p className="text-3xl sm:text-4xl lg:text-6xl font-black text-gradient leading-tight">
                They can leave without losing anything.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
