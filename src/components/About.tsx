import { useState } from 'react';
import { Target, Users, Globe, Shield, TrendingUp, CheckCircle, ArrowRight, Calendar, MessageCircle } from 'lucide-react';
import Card3D from './Card3D';

export default function About() {
  const [flippedCards, setFlippedCards] = useState<number[]>([]);
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
                  <Target className="w-4 h-4" />
                  About GlobeAIra
                </div>
              </div>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black mb-6">
                <span className="block text-white">Building Resilient Teams</span>
                <span className="block mt-2 bg-gradient-to-r from-blue-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                  For Markets That Never Stop
                </span>
              </h1>
              <p className="max-w-4xl mx-auto text-xl text-slate-300 leading-relaxed">
                We design adaptive systems and stand up elastic C2H + DRM teams you fully control and own.
                <br />
                <span className="text-cyan-400 font-semibold">No black boxes. No lock-ins. Just leverage you keep.</span>
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8 mb-32">
              <Card3D className="p-8 glass-effect rounded-2xl border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mb-6 shadow-glow">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Vision</h3>
                <p className="text-slate-300 leading-relaxed">
                  Enterprises own their capability — not their vendor's roadmap. Teams are elastic, processes transferable, and systems built to endure.
                </p>
              </Card3D>

              <Card3D className="p-8 glass-effect rounded-2xl border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500 to-emerald-500 flex items-center justify-center mb-6 shadow-glow">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Mission</h3>
                <p className="text-slate-300 leading-relaxed">
                  Engineer market-resilient delivery by combining architecture that bends without breaking with teams that scale without drama.
                </p>
              </Card3D>

              <Card3D className="p-8 glass-effect rounded-2xl border border-emerald-500/20 hover:border-emerald-500/40 transition-all duration-300">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500 to-blue-500 flex items-center justify-center mb-6 shadow-glow">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Operating System</h3>
                <p className="text-slate-300 leading-relaxed">
                  <span className="text-cyan-400 font-semibold">Resilience → Ownership → Permanence.</span>
                  <br />
                  That's not a slogan. It's our operating system.
                </p>
              </Card3D>
            </div>
          </div>
        </section>

        <section className="relative py-24 bg-slate-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-black text-white mb-6">
                Why a <span className="text-gradient">Resilient Team</span> Matters
              </h2>
              <p className="max-w-3xl mx-auto text-xl text-slate-300">
                Fragility is expensive: turnover, hand-offs, hero engineers, vendor roulette.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 mb-16">
              <Card3D>
                <div className="p-8 rounded-2xl glass-effect border border-red-500/20 h-full">
                  <div className="flex items-center gap-3 mb-6">
                    <h3 className="text-2xl font-bold text-white">The Problems</h3>
                  </div>
                  <ul className="space-y-4">
                    {[
                      'We scale people; quality nose-dives.',
                      'We "augmented" the headcount but lost control.',
                      'Every pivot means rebuilding from scratch.'
                    ].map((problem, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-2 h-2 mt-2 rounded-full bg-red-400 flex-shrink-0" />
                        <p className="text-slate-300 text-lg leading-relaxed">"{problem}"</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </Card3D>

              <Card3D>
                <div className="p-8 rounded-2xl glass-effect border border-emerald-500/20 h-full">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-cyan-500 flex items-center justify-center shadow-glow">
                      <CheckCircle className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">The Change We Build</h3>
                  </div>
                  <ul className="space-y-4">
                    {[
                      'C2H + DRM teams that plug into your rituals',
                      'Ownership by default — code, pipelines, infra, docs',
                      'Elasticity without chaos — scale on demand',
                      'Transparent commercials — no surprises'
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-2 h-2 mt-2 rounded-full bg-emerald-400 flex-shrink-0" />
                        <p className="text-slate-300 text-lg leading-relaxed">{item}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </Card3D>
            </div>

            <Card3D>
              <div className="p-8 rounded-2xl bg-gradient-to-br from-blue-600/10 via-cyan-600/10 to-emerald-600/10 border border-cyan-500/30 text-center">
                <p className="text-2xl font-bold text-white">
                  <span className="text-cyan-400">Result:</span> You don't rent capacity — you own continuity.
                </p>
              </div>
            </Card3D>
          </div>
        </section>

        <section className="relative py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-black text-white mb-6">
                <span className="text-gradient">World × India</span> Synergy
              </h2>
              <p className="max-w-3xl mx-auto text-xl text-slate-300">
                World sets the bar. India powers the build. Global delivery holds the line.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card3D className="group">
                <div className="p-8 rounded-2xl glass-effect border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 h-full">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mb-6 shadow-glow group-hover:scale-110 transition-transform">
                    <Globe className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">International</h3>
                  <p className="text-slate-400 mb-4">Standards & Stakeholders</p>
                  <p className="text-slate-300 leading-relaxed">
                    Enterprise governance, cost clarity, and executive alignment for CTOs, CIOs, CMOs, and project heads.
                  </p>
                </div>
              </Card3D>

              <Card3D className="group">
                <div className="p-8 rounded-2xl glass-effect border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 h-full">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500 to-emerald-500 flex items-center justify-center mb-6 shadow-glow group-hover:scale-110 transition-transform">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">India</h3>
                  <p className="text-slate-400 mb-4">Deep Engineering</p>
                  <p className="text-slate-300 leading-relaxed">
                    Senior architects and builders shipping clean code, clean docs, clean handovers. C2H + DRM teams tuned for real throughput.
                  </p>
                </div>
              </Card3D>

              <Card3D className="group">
                <div className="p-8 rounded-2xl glass-effect border border-emerald-500/20 hover:border-emerald-500/40 transition-all duration-300 h-full">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500 to-blue-500 flex items-center justify-center mb-6 shadow-glow group-hover:scale-110 transition-transform">
                    <TrendingUp className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Global</h3>
                  <p className="text-slate-400 mb-4">Continuity</p>
                  <p className="text-slate-300 leading-relaxed">
                    Cloud-native ops, GDPR-ready habits, and follow-the-sun iteration when missions demand it.
                  </p>
                </div>
              </Card3D>
            </div>

            <div className="mt-12 text-center">
              <p className="text-2xl font-bold text-gradient">
                Premium intent × practical velocity = resilience everywhere
              </p>
            </div>
          </div>
        </section>

        <section className="relative py-24 bg-slate-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-black text-white mb-6">
                What Our <span className="text-gradient">C2H + DRM Teams</span> Tackle
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: 'AI & Automation', items: ['Data pipelines', 'Workflow engines', 'LLM ops'], gradient: 'from-blue-500 to-cyan-500' },
                { title: 'SaaS Engineering', items: ['APIs', 'Microservices', 'Mobile/Web'], gradient: 'from-cyan-500 to-emerald-500' },
                { title: 'QA Engineering', items: ['Automation suites', 'Performance testing', 'CI/CD'], gradient: 'from-emerald-500 to-blue-500' },
                { title: 'BIM / AEC', items: ['Revit/IFC', 'Clash detection', 'Coordination'], gradient: 'from-blue-500 to-cyan-500' }
              ].map((category, index) => (
                <Card3D key={index} className="group">
                  <div className="p-6 rounded-2xl glass-effect border border-white/10 hover:border-cyan-500/40 transition-all duration-300 h-full">
                    <h3 className="text-xl font-bold text-white mb-3">{category.title}</h3>
                    <ul className="space-y-2">
                      {category.items.map((item, i) => (
                        <li key={i} className="text-slate-300 text-sm flex items-center gap-2">
                          <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${category.gradient}`} />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Card3D>
              ))}
            </div>

            <div className="mt-12 text-center">
              <p className="text-xl font-bold text-cyan-400">
                Own the pod. Own the output. Own the IP.
              </p>
            </div>
          </div>
        </section>

        <section className="relative py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-black text-white mb-6">
                How We Build <span className="text-gradient">Resilient Teams</span>
              </h2>
              <p className="text-xl text-slate-300">Our Discipline</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  step: '01',
                  title: 'Scope with spine',
                  description: 'Outcomes, stack, seniority mix, SLOs. We tell you what not to build.',
                  gradient: 'from-blue-500 to-cyan-500'
                },
                {
                  step: '02',
                  title: 'Interview & assemble',
                  description: 'You meet the exact engineers; no bait-and-switch.',
                  gradient: 'from-cyan-500 to-emerald-500'
                },
                {
                  step: '03',
                  title: 'Ship with proof',
                  description: 'Two-week rhythm, demos, telemetry, docs. Time-to-confidence is our north star.',
                  gradient: 'from-emerald-500 to-blue-500'
                },
                {
                  step: '04',
                  title: 'Handover by design',
                  description: 'Runbooks, ADRs, architecture maps, live walkthroughs.',
                  gradient: 'from-blue-500 to-cyan-500'
                },
                {
                  step: '05',
                  title: 'Convert or scale',
                  description: 'Keep team dedicated, scale them, or hire them under your banner post-contract.',
                  gradient: 'from-cyan-500 to-emerald-500'
                }
              ].map((process, index) => (
                <Card3D key={index} className="group">
                  <div className="p-8 rounded-2xl glass-effect border border-white/10 hover:border-cyan-500/40 transition-all duration-300 h-full">
                    <div className={`text-5xl font-black bg-gradient-to-r ${process.gradient} bg-clip-text text-transparent mb-4 group-hover:scale-110 transition-transform`}>
                      {process.step}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{process.title}</h3>
                    <p className="text-slate-300 leading-relaxed">{process.description}</p>
                  </div>
                </Card3D>
              ))}
            </div>
          </div>
        </section>

        <section className="relative py-24 bg-slate-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-black text-white mb-6">
                <span className="text-gradient">Principles</span> We Refuse to Bend
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: 'Ownership first', description: 'Repos, pipelines, infra, docs: yours on day one.', gradient: 'from-blue-500 to-cyan-500' },
                { title: 'Adaptive architecture', description: 'Modular, event-driven, graceful degradation.', gradient: 'from-cyan-500 to-emerald-500' },
                { title: 'Direct access', description: 'No middle layers between you and the team.', gradient: 'from-emerald-500 to-blue-500' },
                { title: 'Transparent costs', description: 'Clear burn, forecasted velocity, opt-out cliffs.', gradient: 'from-blue-500 to-cyan-500' },
                { title: 'Security baked-in', description: 'Least privilege, rotation, auditability.', gradient: 'from-cyan-500 to-emerald-500' },
                { title: 'No hostages', description: 'Exit anytime and keep everything.', gradient: 'from-emerald-500 to-blue-500' }
              ].map((principle, index) => (
                <Card3D key={index} className="group">
                  <div className="p-6 rounded-2xl glass-effect border border-white/10 hover:border-emerald-500/40 transition-all duration-300">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${principle.gradient} mb-4 group-hover:scale-110 transition-transform`}></div>
                    <h3 className="text-lg font-bold text-white mb-2">{principle.title}</h3>
                    <p className="text-slate-300 text-sm leading-relaxed">{principle.description}</p>
                  </div>
                </Card3D>
              ))}
            </div>
          </div>
        </section>

        <section className="relative py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-black text-white mb-6">
                How We <span className="text-gradient">Measure Ourselves</span>
              </h2>
            </div>

            <Card3D>
              <div className="p-8 rounded-2xl glass-effect border border-cyan-500/20">
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    { metric: 'Stability under load', detail: 'SLOs > vanity traffic', gradient: 'from-blue-500 to-cyan-500' },
                    { metric: 'Change failure rate ↓', detail: 'Safer deploys, fewer rollbacks', gradient: 'from-cyan-500 to-emerald-500' },
                    { metric: 'Lead time for changes ↓', detail: 'Small, frequent, reversible', gradient: 'from-emerald-500 to-blue-500' },
                    { metric: 'Handover readiness', detail: 'Zero knowledge debt', gradient: 'from-blue-500 to-cyan-500' },
                    { metric: 'Cost traceability', detail: 'People + infra — visible and predictable', gradient: 'from-cyan-500 to-emerald-500' },
                    { metric: 'Client trust', detail: 'They can leave without losing anything', gradient: 'from-emerald-500 to-blue-500' }
                  ].map((item, index) => (
                    <div key={index} className="group">
                      <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${item.gradient} mb-3 group-hover:scale-110 transition-transform`}></div>
                      <h4 className="text-lg font-bold text-white mb-2">{item.metric}</h4>
                      <p className="text-slate-300 text-sm">{item.detail}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Card3D>

            <div className="mt-12 text-center">
              <p className="text-xl font-bold text-cyan-400">
                Clients stay with us for one reason: they can leave without losing anything.
                <br />
                <span className="text-white">That's real trust.</span>
              </p>
            </div>
          </div>
        </section>

        <section className="relative py-24 bg-slate-900/50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl sm:text-5xl font-black text-white mb-6">
                What We <span className="text-gradient">Don't Do</span>
              </h2>
            </div>

            <Card3D>
              <div className="p-8 rounded-2xl glass-effect border border-red-500/20">
                <div className="grid sm:grid-cols-2 gap-6">
                  {[
                    'Sell "agile," ship waterfall.',
                    'Hide juniors behind seniors.',
                    'Make you pay twice for the same mistake.',
                    "Lock you in - dependence isn't partnership."
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-6 h-6 mt-0.5 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0">
                        <span className="text-red-400 text-sm font-bold">✕</span>
                      </div>
                      <p className="text-slate-300 leading-relaxed">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Card3D>
          </div>
        </section>

        <section className="relative py-32">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-cyan-600/20 to-emerald-600/20" />
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <Card3D>
              <div className="p-12 rounded-3xl glass-effect border border-cyan-500/30">
                <h2 className="text-4xl sm:text-5xl font-black text-white mb-8">
                  The <span className="text-gradient">Short Version</span>
                </h2>
                <p className="text-xl text-slate-300 leading-relaxed mb-12">
                  If you want a headcount, you can hire anywhere.
                  <br />
                  If you want continuity, you hire your resilient C2H + DRM team <span className="text-cyan-400 font-bold">WITH US</span>.
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

        <section className="relative py-16 bg-slate-900/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl sm:text-5xl font-black text-white mb-6">
                <span className="text-gradient">Future Scope</span>
              </h2>
              <p className="text-xl text-slate-300">Expanding your options as trust deepens</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: 'D2H & FTE roadmap',
                  gradient: 'from-emerald-500 to-cyan-500',
                  flip: 'As trust deepens, teams can move fully into your company smoothly and legally.'
                },
                {
                  title: 'Continuity guaranteed',
                  gradient: 'from-cyan-500 to-blue-500',
                  flip: 'No matter the model, ownership and control always remain with you.'
                }
              ].map((item, index) => (
                <div
                  key={index}
                  className="group relative h-64 perspective cursor-pointer"
                  onMouseEnter={() => setFlippedCards(prev => [...prev, index])}
                  onMouseLeave={() => setFlippedCards(prev => prev.filter(i => i !== index))}
                >
                  <div className={`flip-card-inner ${flippedCards.includes(index) ? 'flipped' : ''}`}>
                    <div className="flip-card-front p-8 rounded-2xl glass-effect border border-emerald-500/30 flex flex-col items-center justify-center text-center hover:bg-white/5 transition-all">
                      <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${item.gradient} mb-6 shadow-glow`}></div>
                      <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
                      <p className="text-xs text-slate-500">Hover to reveal</p>
                    </div>

                    <div className="flip-card-back p-8 rounded-2xl glass-effect border border-emerald-500/30 flex items-center justify-center text-center bg-slate-900/50">
                      <p className="text-slate-300 leading-relaxed">{item.flip}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
  );
}
