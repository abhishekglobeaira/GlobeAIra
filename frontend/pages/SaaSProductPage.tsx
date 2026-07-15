import { Rocket, Code2, Zap, Target, TrendingDown, Shield, Layers, Smartphone, Brain, Settings, DollarSign, Activity, Calendar, MessageCircle, ArrowRight, Lock } from 'lucide-react';
import Navigation from '../components/Navigation';
import WaveBackground from '../components/WaveBackground';
import FloatingShapes from '../components/FloatingShapes';
import Card3D from '../components/Card3D';
import { Link } from 'react-router-dom';

export default function SaaSProductPage() {
  return (
    <div className="min-h-screen bg-slate-950">
      <WaveBackground />
      <FloatingShapes />
      <Navigation />

      <section className="relative pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 via-cyan-500 to-emerald-400 text-transparent bg-clip-text">
                Tech / SaaS / Product Engineering
              </span>
            </h1>
            <p className="text-2xl md:text-3xl text-slate-300 mb-4 font-light">
              Build Once. Scale Without the Rewrite Tax.
            </p>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Modular products • MVPs that graduate • Cloud that behaves
            </p>
          </div>

          <Card3D className="bg-slate-900/50 backdrop-blur-sm border border-blue-500/20 p-10 rounded-2xl max-w-5xl mx-auto mb-12">
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-red-400 mb-3">The Reality:</h3>
                <p className="text-slate-300 text-lg">
                  Release trains slip, microservices turn into macro-mess, and every pivot feels like a rebuild.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-emerald-400 mb-3">Our Answer:</h3>
                <p className="text-slate-300 text-lg">
                  We engineer adaptive SaaS that you own end-to-end — built through <span className="text-cyan-400 font-semibold">C2H (Contract-to-Hire)</span> and <span className="text-cyan-400 font-semibold">DRM (Dedicated Resource Model)</span> frameworks that make velocity predictable, handover transparent, and ownership permanent.
                </p>
              </div>
            </div>
          </Card3D>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link
              to="/contact"
              className="group bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all flex items-center gap-2"
            >
              <Calendar className="w-6 h-6" />
              Book Consultation
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="https://wa.me/"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gradient-to-r from-emerald-500 to-green-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-lg hover:shadow-emerald-500/50 transition-all flex items-center gap-2"
            >
              <MessageCircle className="w-6 h-6" />
              WhatsApp Us
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </section>

      <section className="relative py-20 px-6 bg-gradient-to-b from-transparent to-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">
              What Changes When We Build With You
            </span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {whatChanges.map((change, index) => (
              <Card3D key={index} className="bg-slate-900/50 backdrop-blur-sm border border-cyan-500/20 p-8 rounded-2xl hover:border-cyan-500/40 transition-all">
                <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-lg p-4 w-fit mb-6">
                  <change.icon className="w-10 h-10 text-cyan-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{change.title}</h3>
                <p className="text-slate-300 text-lg">{change.description}</p>
              </Card3D>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-emerald-400 text-transparent bg-clip-text">
              Where We Excel
            </span>
          </h2>
          <p className="text-xl text-slate-400 text-center mb-16">(and How It Feels in Practice)</p>

          <div className="grid md:grid-cols-2 gap-8">
            {expertise.map((area, index) => (
              <Card3D key={index} className="bg-slate-900/50 backdrop-blur-sm border border-blue-500/20 p-8 rounded-2xl hover:border-blue-500/40 transition-all">
                <div className="bg-gradient-to-br from-blue-500/10 to-emerald-500/10 rounded-lg p-4 w-fit mb-6">
                  <area.icon className="w-10 h-10 text-blue-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{area.title}</h3>
                <p className="text-slate-300 text-lg">{area.description}</p>
              </Card3D>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-20 px-6 bg-gradient-to-b from-transparent to-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 text-transparent bg-clip-text">
              Delivery Models That Keep You in Control
            </span>
          </h2>

          <div className="space-y-6 max-w-5xl mx-auto mb-12">
            {deliveryModels.map((model, index) => (
              <Card3D key={index} className="bg-slate-900/50 backdrop-blur-sm border border-cyan-500/20 p-8 rounded-xl hover:border-cyan-500/40 transition-all">
                <h3 className="text-2xl font-bold text-cyan-400 mb-3">{model.title}</h3>
                <p className="text-slate-300 text-lg">{model.description}</p>
              </Card3D>
            ))}
          </div>

          <Card3D className="bg-gradient-to-br from-emerald-600/20 to-cyan-600/20 backdrop-blur-sm border border-emerald-500/30 p-8 rounded-2xl text-center max-w-3xl mx-auto">
            <p className="text-2xl text-white font-light">
              <span className="font-bold text-emerald-300">Result:</span> capacity today, capability you can hire tomorrow.
            </p>
          </Card3D>
        </div>
      </section>

      <section className="relative py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 text-transparent bg-clip-text">
              How We Work
            </span>
          </h2>
          <p className="text-xl text-slate-400 text-center mb-16">(FAB Done Right)</p>

          <div className="space-y-6">
            {process.map((step, index) => (
              <Card3D key={index} className="bg-slate-900/50 backdrop-blur-sm border border-blue-500/20 p-8 rounded-xl hover:border-blue-500/40 transition-all">
                <div className="flex items-start gap-6">
                  <div className="bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 text-2xl font-bold text-white">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-3">{step.title}</h3>
                    <p className="text-slate-300 text-lg">{step.description}</p>
                  </div>
                </div>
              </Card3D>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-20 px-6 bg-gradient-to-b from-transparent to-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 text-transparent bg-clip-text">
              Proof You Can Feel on Graphs
            </span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
            {metrics.map((metric, index) => (
              <Card3D key={index} className="bg-slate-900/50 backdrop-blur-sm border border-emerald-500/20 p-8 rounded-xl hover:border-emerald-500/40 transition-all">
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 rounded-lg p-3 flex-shrink-0">
                    <TrendingDown className="w-8 h-8 text-emerald-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{metric.metric}</h3>
                    <p className="text-slate-400">{metric.through}</p>
                  </div>
                </div>
              </Card3D>
            ))}
          </div>

          <Card3D className="bg-slate-900/50 backdrop-blur-sm border border-cyan-500/20 p-8 rounded-2xl text-center max-w-3xl mx-auto">
            <p className="text-xl text-slate-300 italic">
              Leaders stay for one reason: <span className="text-cyan-300 font-semibold">they can leave without losing anything.</span> That's real trust.
            </p>
          </Card3D>
        </div>
      </section>

      <section className="relative py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 text-transparent bg-clip-text">
              Who This Page Is For
            </span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {audience.map((role, index) => (
              <Card3D key={index} className="bg-slate-900/50 backdrop-blur-sm border border-blue-500/20 p-6 rounded-xl hover:border-blue-500/40 transition-all">
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-lg p-3 flex-shrink-0">
                    <role.icon className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{role.title}</h3>
                    <p className="text-slate-400">{role.needs}</p>
                  </div>
                </div>
              </Card3D>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-20 px-6 bg-gradient-to-b from-transparent to-slate-900/50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">
              FAQs
            </span>
          </h2>
          <p className="text-xl text-slate-400 text-center mb-16">(Fast)</p>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <Card3D key={index} className="bg-slate-900/50 backdrop-blur-sm border border-blue-500/20 p-8 rounded-xl">
                <h3 className="text-xl font-bold text-white mb-3">{faq.question}</h3>
                <p className="text-slate-300 text-lg">{faq.answer}</p>
              </Card3D>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <Card3D className="bg-gradient-to-br from-blue-600/20 to-emerald-600/20 backdrop-blur-sm border border-cyan-500/30 p-12 rounded-2xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
              Ready to Build Adaptive SaaS?
            </h2>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
              <Link
                to="/contact"
                className="group bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all flex items-center gap-2"
              >
                <Calendar className="w-6 h-6" />
                Book a 20-Minute Strategy Call
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="https://wa.me/"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-gradient-to-r from-emerald-500 to-green-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-lg hover:shadow-emerald-500/50 transition-all flex items-center gap-2"
              >
                <MessageCircle className="w-6 h-6" />
                Chat on WhatsApp
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
            <p className="text-2xl text-slate-200 font-light">
              Start adaptive. Build smart. Scale fearless.
            </p>
          </Card3D>
        </div>
      </section>

      <section className="relative py-20 px-6 bg-gradient-to-b from-transparent to-slate-900/50">
        <div className="max-w-5xl mx-auto">
          <Card3D className="bg-slate-900/50 backdrop-blur-sm border border-blue-500/20 p-10 rounded-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">
                Future Scope — Expanding Into D2H & FTE
              </span>
            </h2>
            <p className="text-lg text-slate-300 leading-relaxed text-center">
              Quantar Quest will soon reintroduce <span className="text-cyan-400 font-semibold">D2H (Dedicated-to-Hire)</span> and <span className="text-cyan-400 font-semibold">FTE</span> models for enterprises ready to internalize mature teams. The core principle remains: <span className="text-emerald-300 font-semibold">you own what we build — from day one to forever.</span>
            </p>
          </Card3D>
        </div>
      </section>
    </div>
  );
}

const whatChanges = [
  {
    icon: Shield,
    title: 'Stability You Can Ship',
    description: 'CI/CD, contract tests, and SLOs you can actually read.',
  },
  {
    icon: Zap,
    title: 'Speed Without Drama',
    description: 'Small, reversible releases; feature flow that compounds instead of collapses.',
  },
  {
    icon: DollarSign,
    title: 'Costs Under Control',
    description: 'Right-sized cloud, observability, and guardrails from day one.',
  },
  {
    icon: Lock,
    title: 'Zero Lock-Ins',
    description: 'Repos, pipelines, infra, and runbooks — yours from the start.',
  },
];

const expertise = [
  {
    icon: Rocket,
    title: 'Product Strategy → MVP → Scale',
    description: 'We trim scope without trimming ambition. MVPs are designed to graduate, not be rewritten.',
  },
  {
    icon: Layers,
    title: 'Architecture & APIs',
    description: 'Clean interfaces. Domain boundaries that don\'t leak. Events where it matters; monolith where it\'s saner.',
  },
  {
    icon: Smartphone,
    title: 'Web & Mobile Apps',
    description: 'Accessible, fast, and testable. Performance budgets and UX patterns your team can actually maintain.',
  },
  {
    icon: Brain,
    title: 'AI Integrations',
    description: 'Retrieval-augmented workflows, approval loops, and model evaluation pipelines. Built for compliance, not chaos.',
  },
];

const deliveryModels = [
  {
    title: 'C2H / DRM teams',
    description: 'Your interviews, your rituals, your repos. Evaluate → hire after proof.',
  },
  {
    title: 'Fixed-Scope Builds',
    description: 'Clear milestones, proof at every gate.',
  },
  {
    title: 'Hybrid Model',
    description: 'Core build + elastic pod for scale, QA, or support tiers.',
  },
];

const process = [
  {
    title: 'Scope with spine',
    description: 'Outcomes, constraints, and won\'t-builds.',
  },
  {
    title: 'Architecture first',
    description: 'Diagrams, ADRs, trade-offs before timelines.',
  },
  {
    title: 'Build → Prove',
    description: 'Two-week beats, tests, load checks, failure drills.',
  },
  {
    title: 'Handover by design',
    description: 'Runbooks, pipelines, live walkthroughs. No hostages.',
  },
];

const metrics = [
  {
    metric: 'Change-failure rate ↓',
    through: 'through CI/CD & contract tests',
  },
  {
    metric: 'Lead time ↓',
    through: 'via modularity & smaller PRs',
  },
  {
    metric: 'Downtime ↓ up to 60%',
    through: 'with SRE discipline',
  },
  {
    metric: 'Cloud waste ↓',
    through: 'via cost telemetry & right-sizing',
  },
];

const audience = [
  {
    icon: Code2,
    title: 'CTO / VP Eng',
    needs: 'Boring reliability, reversible changes, sane interfaces.',
  },
  {
    icon: Settings,
    title: 'CIO / Ops',
    needs: 'Fewer tickets, predictable burn, audit-ready trails.',
  },
  {
    icon: Target,
    title: 'Founder / CEO',
    needs: 'Runway protected; product you can defend.',
  },
  {
    icon: Activity,
    title: 'CMO / Growth',
    needs: 'Faster experiments, cleaner attribution loops.',
  },
];

const faqs = [
  {
    question: 'Do we own everything?',
    answer: 'Yes — repos, infra, pipelines, and docs are yours from day one.',
  },
  {
    question: 'Can we start small?',
    answer: 'Yes — pilot one module → prove → scale.',
  },
  {
    question: 'Can we hire later?',
    answer: 'Yes — through C2H conversion after proof cycles, with zero IP friction.',
  },
  {
    question: 'Where\'s the team based?',
    answer: 'India delivery engine, with overlap hours baked in.',
  },
];
