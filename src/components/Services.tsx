import { ArrowRight, Calendar, MessageCircle, Code, Users, Building2, Factory, Gamepad2, Cpu, CheckCircle, Layers } from 'lucide-react';
import { Link } from 'react-router-dom';
import Card3D from './Card3D';

export default function Services() {
  const services = [
    {
      title: 'AI & Automation Solutions',
      description: 'Turn manual chaos into auditable workflows and predictive operations - from data pipelines to LLM ops.',
      subtitle: 'Built for leaders searching AI automation with real governance.',
      outcomes: ['Cycle-time cuts', 'Error rates down', 'Decisions with telemetry'],
      icon: Cpu,
      gradient: 'from-blue-500 to-cyan-500',
      color: 'blue',
      link: '/services/ai-automation'
    },
    {
      title: 'SaaS / Product Engineering',
      description: 'From MVP to multi-region scale. Modular microservices, stable APIs, clean contracts - custom software development you never have to rebuild from scratch.',
      outcomes: ['Faster releases', 'Safer deploys', 'Sane cloud bills'],
      icon: Code,
      gradient: 'from-cyan-500 to-emerald-500',
      color: 'cyan',
      link: '/services/saas-product'
    },
    {
      title: 'C2H + DRM Teams',
      description: 'Your team, your rituals, your control. Interview the engineers, run the stand-ups, own the repos.',
      subtitle: 'Whether under Contract-to-Hire (C2H) or Dedicated Resource Model (DRM) - you get risk-free elasticity, transparent pricing, and conversion-ready teams.',
      outcomes: ['Elastic capacity', 'Zero middle layers', 'Hired after C2H evaluation'],
      icon: Users,
      gradient: 'from-emerald-500 to-blue-500',
      color: 'emerald',
      link: '/services/c2h-drm'
    },
    {
      title: 'Real Estate / Construction / BIM',
      description: 'From scattered files to cloud BIM with clash control, coordination dashboards, and lifecycle handover - proven BIM outsourcing.',
      outcomes: ['Fewer meetings', 'Fewer change orders', 'Predictable handovers'],
      icon: Building2,
      gradient: 'from-blue-500 to-cyan-500',
      color: 'blue',
      link: '/services/real-estate-bim'
    },
    {
      title: 'Manufacturing & Industrial Solutions',
      description: 'Automate what slows you down - MES data sanity, OT/IT sync, energy visibility, predictive maintenance.',
      subtitle: 'Because the factory of the future starts with visibility, not buzzwords.',
      outcomes: ['Production stability', 'Energy traceability', 'Real-time insights'],
      icon: Factory,
      gradient: 'from-cyan-500 to-emerald-500',
      color: 'cyan',
      link: '/services/manufacturing'
    },
    {
      title: 'Gaming / iGaming',
      description: 'Low-latency infra. Anti-fraud telemetry. Elastic load handling.',
      subtitle: 'Systems that absorb spikes - not collapse under them.',
      outcomes: ['Zero downtime', 'Safe scale', 'Market-ready resilience'],
      icon: Gamepad2,
      gradient: 'from-emerald-500 to-blue-500',
      color: 'emerald',
      link: '/services/gaming'
    }
  ];

  return (
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-transparent to-emerald-500/10" />
        <div className="absolute top-20 right-10 w-96 h-96 bg-cyan-500/20 rounded-full blur-[120px] animate-pulse-slow" />
        <div className="absolute bottom-40 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-[120px] animate-pulse-slow" style={{ animationDelay: '2s' }} />

        <section className="relative py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20 animate-fade-in">
              <div className="inline-block mb-6">
                <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass-effect border border-cyan-500/30 text-cyan-300 text-sm font-medium">
                  <Layers className="w-4 h-4" />
                  Our Services
                </div>
              </div>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black mb-6">
                <span className="block text-white drop-shadow-2xl">Pick What You Want to</span>
                <span className="block mt-2 bg-gradient-to-r from-blue-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                  Own Next
                </span>
              </h1>
              <p className="max-w-4xl mx-auto text-xl text-slate-300 leading-relaxed mb-6">
                <span className="font-bold text-white">Smartly Built. Fearlessly Scaled. Market-Resilient.</span>
              </p>
              <p className="max-w-4xl mx-auto text-lg text-slate-400 leading-relaxed">
                You are here to build the capability you control - not rent velocity you cannot predict.
                Below is the gateway to everything we do.
                <br />
                <span className="text-cyan-400 font-semibold">Each path is ownership-first - code, data, infra, and docs are yours from day one.</span>
              </p>
            </div>

            <Card3D>
              <div className="p-8 sm:p-12 rounded-2xl glass-effect border border-cyan-500/20 mb-20">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-black text-white mb-4">
                    Why People <span className="text-gradient">Choose Us</span>
                  </h2>
                  <p className="text-xl text-slate-300">
                    No black boxes. Direct access. Elastic teams. Transparent costs.
                    <br />
                    <span className="text-slate-400">We design for World-grade reliability with India-grade throughput.</span>
                  </p>
                </div>
              </div>
            </Card3D>
          </div>
        </section>

        <section className="relative py-24 bg-slate-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-12">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <Card3D key={index} className="group">
                    <div className={`p-8 sm:p-12 rounded-2xl glass-effect border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300`}>
                      <div className="grid lg:grid-cols-12 gap-8 items-start">
                        <div className="lg:col-span-2">
                          <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center shadow-glow group-hover:scale-110 transition-transform`}>
                            <Icon className="w-10 h-10 text-white" />
                          </div>
                        </div>

                        <div className="lg:col-span-10 space-y-6">
                          <div>
                            <h3 className="text-3xl font-black text-white mb-3">{service.title}</h3>
                            <p className="text-lg text-slate-300 leading-relaxed mb-2">
                              {service.description}
                            </p>
                            {service.subtitle && (
                              <p className="text-slate-400 leading-relaxed">
                                {service.subtitle}
                              </p>
                            )}
                          </div>

                          <div>
                            <p className="text-sm font-bold text-cyan-400 mb-3">OUTCOMES:</p>
                            <div className="flex flex-wrap gap-3">
                              {service.outcomes.map((outcome, i) => (
                                <div key={i} className="inline-flex items-center gap-2 px-4 py-2 rounded-lg glass-effect border border-white/10">
                                  <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.gradient}`} />
                                  <span className="text-slate-300 text-sm">{outcome}</span>
                                </div>
                              ))}
                            </div>
                          </div>

                          {service.link ? (
                            <Link
                              to={service.link}
                              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 via-cyan-600 to-emerald-600 text-white font-bold hover:shadow-glow-lg transition-all duration-300 group"
                            >
                              <span>Explore Service</span>
                              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                          ) : (
                            <a
                              href={`#${service.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
                              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 via-cyan-600 to-emerald-600 text-white font-bold hover:shadow-glow-lg transition-all duration-300 group"
                            >
                              <span>Explore Service</span>
                              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </Card3D>
                );
              })}
            </div>
          </div>
        </section>

        <section className="relative py-32 bg-slate-900/50">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-cyan-600/20 to-emerald-600/20" />
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <Card3D>
              <div className="p-12 rounded-3xl glass-effect border border-cyan-500/30">
                <h2 className="text-4xl sm:text-5xl font-black text-white mb-8">
                  Ready to <span className="text-gradient">Get Started?</span>
                </h2>
                <p className="text-xl text-slate-300 leading-relaxed mb-12">
                  Start adaptive. Build smart. Scale fearless.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="/contact"
                    className="group relative inline-flex items-center justify-center gap-3 px-10 py-5 rounded-2xl bg-gradient-to-r from-blue-600 via-cyan-600 to-emerald-600 text-white text-lg font-bold overflow-hidden shadow-glow-lg hover:shadow-glow-cyan transition-all duration-300 transform hover:scale-105"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 via-emerald-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <Calendar className="w-6 h-6 relative z-10 group-hover:rotate-12 transition-transform" />
                    <span className="relative z-10">Book 20-Min Strategy Call</span>
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
            </Card3D>
          </div>
        </section>
      </div>
  );
}
