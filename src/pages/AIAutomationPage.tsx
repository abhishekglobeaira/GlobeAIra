import { CheckCircle, Cpu, Bot, BarChart3, Brain, Database, Zap, Target, TrendingUp, Users, Code, Shield, ArrowRight, Calendar, MessageCircle, GitBranch, FileCode, Workflow } from 'lucide-react';
import Navigation from '../components/Navigation';
import WaveBackground from '../components/WaveBackground';
import FloatingShapes from '../components/FloatingShapes';
import Card3D from '../components/Card3D';
import { Link } from 'react-router-dom';

export default function AIAutomationPage() {
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
                AI & Automation Solutions
              </span>
            </h1>
            <p className="text-2xl md:text-3xl text-slate-300 mb-4 font-light">
              Make Work Flow. Make Outcomes Predictable.
            </p>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Workflow bots • Analytics & dashboards • Predictive systems you own
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto mb-20">
            <Card3D className="bg-slate-900/50 backdrop-blur-sm border border-red-500/20 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-red-400 mb-4 flex items-center gap-3">
                <Target className="w-8 h-8" />
                The Problem (Said Out Loud)
              </h3>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-1">•</span>
                  <span>Manual handoffs. Swivel-chair ops.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-1">•</span>
                  <span>Noisy dashboards. "AI pilots" that never leave the lab.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-1">•</span>
                  <span>Costs up, confidence down.</span>
                </li>
              </ul>
            </Card3D>

            <Card3D className="bg-slate-900/50 backdrop-blur-sm border border-emerald-500/20 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-emerald-400 mb-4 flex items-center gap-3">
                <Zap className="w-8 h-8" />
                The Transformation
              </h3>
              <div className="space-y-4 text-slate-300">
                <p>
                  We build automation you can trust — through <span className="text-cyan-400 font-semibold">C2H (Contract-to-Hire)</span> and <span className="text-cyan-400 font-semibold">DRM (Dedicated Resource Model)</span> frameworks that give you resource control, zero IP friction, and measurable ROI.
                </p>
                <p className="text-emerald-300 font-medium">
                  You own code, data, infra, and docs from day one.
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
              What We Build
            </span>
          </h2>
          <p className="text-xl text-slate-400 text-center mb-16">(Owned, Auditable, Resilient)</p>

          <div className="grid md:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <Card3D key={index} className="bg-slate-900/50 backdrop-blur-sm border border-cyan-500/20 p-8 rounded-2xl hover:border-cyan-500/40 transition-all">
                <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-lg p-4 w-fit mb-6">
                  <solution.icon className="w-10 h-10 text-cyan-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{solution.title}</h3>
                <p className="text-slate-300 text-lg mb-4">{solution.description}</p>
                <p className="text-emerald-300 font-medium italic">{solution.tagline}</p>
              </Card3D>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-20 px-6 bg-gradient-to-b from-transparent to-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-blue-400 to-emerald-400 text-transparent bg-clip-text">
              Why C2H + DRM Makes Automation Stick
            </span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card3D key={index} className="bg-slate-900/50 backdrop-blur-sm border border-blue-500/20 p-6 rounded-xl hover:border-blue-500/40 transition-all">
                <div className="bg-gradient-to-br from-blue-500/10 to-emerald-500/10 rounded-lg p-4 w-fit mb-4">
                  <benefit.icon className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                <p className="text-slate-400">{benefit.description}</p>
              </Card3D>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 text-transparent bg-clip-text">
              How We Deliver
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
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 text-transparent bg-clip-text">
              Typical Impact
            </span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {impact.map((stat, index) => (
              <Card3D key={index} className="bg-slate-900/50 backdrop-blur-sm border border-emerald-500/20 p-8 rounded-xl text-center hover:border-emerald-500/40 transition-all">
                <div className="text-4xl md:text-5xl font-bold text-emerald-400 mb-4">{stat.metric}</div>
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
              Ready to Automate What Matters?
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
              Start adaptive. Automate smart. Scale fearless.
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
              As part of GlobeAIra Tech roadmap, <span className="text-cyan-400 font-semibold">D2H (Dedicated-to-Hire)</span> and <span className="text-cyan-400 font-semibold">FTE</span> models will soon join C2H + DRM — giving enterprises the freedom to convert proven automation teams into permanent, embedded teams that keep evolving with their systems.
            </p>
          </Card3D>
        </div>
      </section>
    </div>
  );
}

const solutions = [
  {
    icon: Bot,
    title: 'Workflow Bots & Orchestration',
    description: 'Human-in-the-loop automations, SLAs, approvals, and audit trails.',
    tagline: 'Less clickwork. More throughput. Proof in the logs.',
  },
  {
    icon: BarChart3,
    title: 'Analytics & Executive Dashboards',
    description: 'One source of truth with drill-downs, alerts, and KPI-tied visibility.',
    tagline: 'Telemetry before opinions. Decisions that stand up in reviews.',
  },
  {
    icon: Brain,
    title: 'Predictive & Cognitive Systems',
    description: 'Forecasting, anomaly detection, and process intelligence that learns — without compromising compliance.',
    tagline: 'Intelligence that learns, without sacrificing compliance.',
  },
  {
    icon: Database,
    title: 'Integrations & LLM Ops',
    description: 'Data pipelines, vector storage, and retrieval workflows that keep models explainable and cost-capped.',
    tagline: 'Explainable models, capped costs.',
  },
];

const benefits = [
  {
    icon: TrendingUp,
    title: 'Elastic Scale',
    description: 'Add or reduce automation engineers without breaking continuity.',
  },
  {
    icon: FileCode,
    title: 'Transparent Handover',
    description: 'All scripts, playbooks, and pipelines live in your repos.',
  },
  {
    icon: Users,
    title: 'Conversion-Ready Teams',
    description: 'Evaluate, then hire — risk-free, after proof of delivery.',
  },
  {
    icon: BarChart3,
    title: 'Predictable ROI',
    description: 'Cost per run, cycle-time cuts, and uptime reports included.',
  },
];

const process = [
  {
    title: 'Scope with spine',
    description: 'Define what to automate and what not to.',
  },
  {
    title: 'Architect for resilience',
    description: 'ADRs, flowcharts, and data models before a single cron job.',
  },
  {
    title: 'Build → Prove',
    description: 'Deploy in two-week beats; logs, load, and latency validated.',
  },
  {
    title: 'Handover by design',
    description: 'Full documentation, IaC, and walkthroughs. No vendor fog.',
  },
];

const impact = [
  {
    metric: '50–70%',
    description: 'reduction in manual cycle time within 90 days',
  },
  {
    metric: '3×',
    description: 'higher process visibility from live dashboards',
  },
  {
    metric: 'Zero',
    description: 'downtime in 24×7 ops environments after automation rollout',
  },
];

const audience = [
  {
    icon: Workflow,
    title: 'COO / Process Head',
    needs: 'Measurable throughput, zero shadow work.',
  },
  {
    icon: Code,
    title: 'CTO / Engineering Lead',
    needs: 'Scalable automations that pass audit.',
  },
  {
    icon: Target,
    title: 'Founder / CEO',
    needs: 'Visibility that translates to margin.',
  },
  {
    icon: Database,
    title: 'Ops / Data Teams',
    needs: 'Fewer pivots, faster truth.',
  },
];

const engagementOptions = [
  {
    title: 'Fixed-Scope Automation Sprint',
    description: 'Clear milestones, defined metrics, NDA-first.',
  },
  {
    title: 'C2H / DRM teams',
    description: 'Your interviews, your rituals, your repos. Hire after delivery proof.',
  },
  {
    title: 'Hybrid Model',
    description: 'Pilot → scale → convert; perfect for orgs new to automation.',
  },
];

const faqs = [
  {
    question: 'Will we own the automations?',
    answer: 'Yes — workflows, APIs, and infra scripts are yours.',
  },
  {
    question: 'Can we hire the same team later?',
    answer: 'Yes — through C2H evaluation after the initial delivery cycle.',
  },
  {
    question: 'Can you integrate with legacy systems?',
    answer: 'Yes — ERP, CRM, or proprietary — we automate around constraints, not excuses.',
  },
];
