import { CheckCircle, Code, Rocket, Shield, TrendingUp, Users, Zap, Target, BarChart3, Lock, Database, ArrowRight, Calendar, MessageCircle } from 'lucide-react';
import Navigation from '../components/Navigation';
import WaveBackground from '../components/WaveBackground';
import FloatingShapes from '../components/FloatingShapes';
import Card3D from '../components/Card3D';
import { Link } from 'react-router-dom';

export default function CustomSoftwarePage() {
  return (
    <div className="min-h-screen bg-slate-950">
      <WaveBackground />
      <FloatingShapes />
      <Navigation />

      <section className="relative pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-emerald-400 text-transparent bg-clip-text">
                Custom Software Development
              </span>
            </h1>
            <p className="text-2xl md:text-3xl text-slate-300 mb-4 font-light">
              Build What You'll Actually Own
            </p>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Full-cycle builds. SaaS apps. AI integrations. Zero lock-ins.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto mb-20">
            <Card3D className="bg-slate-900/50 backdrop-blur-sm border border-red-500/20 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-red-400 mb-4 flex items-center gap-3">
                <Target className="w-8 h-8" />
                The Problem (You Already Know It)
              </h3>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-1">•</span>
                  <span>Roadmaps slip. Vendors hide people.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-1">•</span>
                  <span>Rewrites every 18 months.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-1">•</span>
                  <span>Costs up, control down.</span>
                </li>
              </ul>
            </Card3D>

            <Card3D className="bg-slate-900/50 backdrop-blur-sm border border-emerald-500/20 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-emerald-400 mb-4 flex items-center gap-3">
                <Rocket className="w-8 h-8" />
                The Transformation
              </h3>
              <div className="space-y-4 text-slate-300">
                <p>
                  We design and deliver adaptive software through <span className="text-cyan-400 font-semibold">C2H (Contract-to-Hire)</span> and <span className="text-cyan-400 font-semibold">DRM (Dedicated Resource Model)</span> frameworks — giving you full control over your system and the people behind it.
                </p>
                <p className="text-emerald-300 font-medium">
                  You own code, data, infra, and documentation from day one — built for World-Class reliability, delivered with India-grade throughput.
                </p>
              </div>
            </Card3D>
          </div>
        </div>
      </section>

      <section className="relative py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">
              What You Get
            </span>
          </h2>
          <p className="text-xl text-slate-400 text-center mb-16">(Outcomes, Not Buzzwords)</p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {outcomes.map((outcome, index) => (
              <Card3D key={index} className="bg-slate-900/50 backdrop-blur-sm border border-cyan-500/20 p-6 rounded-xl hover:border-cyan-500/40 transition-all">
                <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-lg p-4 w-fit mb-4">
                  <outcome.icon className="w-8 h-8 text-cyan-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{outcome.title}</h3>
                <p className="text-slate-400">{outcome.description}</p>
              </Card3D>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-20 px-6 bg-gradient-to-b from-transparent to-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-blue-400 to-emerald-400 text-transparent bg-clip-text">
              Where We Excel
            </span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card3D key={index} className="bg-slate-900/50 backdrop-blur-sm border border-blue-500/20 p-8 rounded-2xl hover:border-blue-500/40 transition-all">
                <div className="bg-gradient-to-br from-blue-500/10 to-emerald-500/10 rounded-lg p-4 w-fit mb-6">
                  <service.icon className="w-10 h-10 text-blue-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-slate-300">
                      <CheckCircle className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-emerald-300 font-medium italic">{service.tagline}</p>
              </Card3D>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 text-transparent bg-clip-text">
              How We Build
            </span>
          </h2>
          <p className="text-xl text-slate-400 text-center mb-16">(PAS + Proof Baked In)</p>

          <div className="space-y-6">
            {process.map((step, index) => (
              <Card3D key={index} className="bg-slate-900/50 backdrop-blur-sm border border-cyan-500/20 p-8 rounded-xl hover:border-cyan-500/40 transition-all">
                <div className="flex items-start gap-6">
                  <div className="bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 text-2xl font-bold text-white">
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
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 text-transparent bg-clip-text">
              Typical Impact
            </span>
          </h2>
          <p className="text-xl text-slate-400 text-center mb-16">(Representative Results)</p>

          <div className="grid md:grid-cols-3 gap-8">
            {impact.map((stat, index) => (
              <Card3D key={index} className="bg-slate-900/50 backdrop-blur-sm border border-emerald-500/20 p-8 rounded-xl text-center hover:border-emerald-500/40 transition-all">
                <div className="text-5xl font-bold text-emerald-400 mb-4">{stat.metric}</div>
                <p className="text-xl text-slate-300">{stat.description}</p>
              </Card3D>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 text-transparent bg-clip-text">
              Who This Page Is Written For
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
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">
              Engagement Options
            </span>
          </h2>

          <div className="space-y-6">
            {engagementOptions.map((option, index) => (
              <Card3D key={index} className="bg-slate-900/50 backdrop-blur-sm border border-cyan-500/20 p-8 rounded-xl hover:border-cyan-500/40 transition-all">
                <h3 className="text-2xl font-bold text-cyan-400 mb-3">{option.title}</h3>
                <p className="text-slate-300 text-lg">{option.description}</p>
              </Card3D>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-emerald-400 text-transparent bg-clip-text">
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

      <section className="relative py-20 px-6 bg-gradient-to-b from-transparent to-slate-900/50">
        <div className="max-w-4xl mx-auto">
          <Card3D className="bg-gradient-to-br from-blue-600/20 to-emerald-600/20 backdrop-blur-sm border border-cyan-500/30 p-12 rounded-2xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
              Ready to Build What You'll Own?
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
              Start adapting. Build smart. Scale fearless.
            </p>
          </Card3D>
        </div>
      </section>

      <section className="relative py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <Card3D className="bg-slate-900/50 backdrop-blur-sm border border-blue-500/20 p-10 rounded-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">
                Future Scope — Expanding Into D2H & FTE
              </span>
            </h2>
            <p className="text-lg text-slate-300 leading-relaxed text-center">
              GlobeAIra Tech is adding <span className="text-cyan-400 font-semibold">D2H (Dedicated-to-Hire)</span> and <span className="text-cyan-400 font-semibold">FTE</span> engagement options as part of its long-term roadmap — giving enterprise clients the flexibility to evolve from C2H/DRM teams into permanent, in-house divisions while preserving continuity and IP ownership.
            </p>
          </Card3D>
        </div>
      </section>
    </div>
  );
}

const outcomes = [
  {
    icon: Zap,
    title: 'Stable releases, faster',
    description: 'CI/CD, test automation, and SLOs you can read.',
  },
  {
    icon: TrendingUp,
    title: 'Elastic capacity',
    description: 'Spin up a C2H or DRM team, scale on demand, and hire after proof — no rebuilds.',
  },
  {
    icon: Shield,
    title: 'Transparent costs',
    description: 'Forecasted velocity, opt-out cliffs, no hidden burn.',
  },
  {
    icon: Lock,
    title: 'Compliance ready',
    description: 'GDPR-minded data flows, access controls, and full audit trails.',
  },
];

const services = [
  {
    icon: Rocket,
    title: 'SaaS / Product Engineering',
    features: [
      'Modular microservices, stable APIs',
      'Web/mobile clients, multi-region readiness',
      'From MVP to scale without the rewrite tax',
    ],
    tagline: 'From MVP to scale without the rewrite tax.',
  },
  {
    icon: Code,
    title: 'AI Integrations & Workflow Automation',
    features: [
      'Data pipelines, LLM ops',
      'Approval flows with audit-ready decisions',
      'Humans for judgment. Machines for repetition',
    ],
    tagline: 'Humans for judgment. Machines for repetition.',
  },
  {
    icon: Database,
    title: 'Data & Analytics',
    features: [
      'Warehousing, BI, ML evaluation',
      'Lineage tracking and SLAs',
      'Telemetry before opinions',
    ],
    tagline: 'Telemetry before opinions.',
  },
];

const process = [
  {
    title: 'Scope with spine',
    description: 'Outcomes, constraints, and "won\'t-builds."',
  },
  {
    title: 'Architecture first',
    description: 'Diagrams, ADRs, threat models before timelines.',
  },
  {
    title: 'Build → Prove',
    description: 'Iteration in two-week beats; load tests, failure drills, docs.',
  },
  {
    title: 'Handover by design',
    description: 'Runbooks, pipelines, and live walkthroughs. No hostages.',
  },
];

const impact = [
  {
    metric: '40%',
    description: 'lower vendor spend via ownership-first delivery',
  },
  {
    metric: '60%',
    description: 'less downtime from SRE discipline and automation',
  },
  {
    metric: '3×',
    description: 'faster feature flow after modularizing legacy cores',
  },
];

const audience = [
  {
    icon: Code,
    title: 'CTO / VP Eng',
    needs: 'Clean interfaces, reversible changes, boring reliability.',
  },
  {
    icon: Users,
    title: 'CIO / Ops',
    needs: 'Fewer tickets, predictable costs, dashboards that tell the truth.',
  },
  {
    icon: Target,
    title: 'Founder / CEO',
    needs: 'Runway protected; product you can defend.',
  },
  {
    icon: BarChart3,
    title: 'CMO / Growth',
    needs: 'Faster experiments, tighter feedback loops.',
  },
];

const engagementOptions = [
  {
    title: 'Fixed-Scope Build',
    description: 'Crystal-clear scope, milestones, and sign-offs.',
  },
  {
    title: 'C2H / DRM teams',
    description: 'Your interviews, your rituals, your repos. Hire when ready.',
  },
  {
    title: 'Hybrid Model',
    description: 'Core build + elastic teams to scale, QA, or L2/L3 ops.',
  },
];

const faqs = [
  {
    question: 'Will we own everything?',
    answer: 'Yes — repos, pipelines, infra, and docs are yours.',
  },
  {
    question: 'Can we hire the team later?',
    answer: 'Yes — through C2H evaluation and smooth transition.',
  },
  {
    question: 'Can we start small?',
    answer: 'Yes — pilot one module, prove ROI, then scale.',
  },
];
