import { Building2, Target, Calendar, MessageCircle, ArrowRight, Layers, Clock, BarChart, Box, Eye, Users, TrendingDown, Briefcase } from 'lucide-react';
import Navigation from '../components/Navigation';
import WaveBackground from '../components/WaveBackground';
import FloatingShapes from '../components/FloatingShapes';
import Card3D from '../components/Card3D';
import { Link } from 'react-router-dom';

export default function RealEstateBIMPage() {
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
                Real Estate / Construction / BIM
              </span>
            </h1>
            <p className="text-2xl md:text-3xl text-slate-300 mb-4 font-light">
              Build Once. Handover Without Drama.
            </p>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              BIM modeling · Revit outsourcing · CRM & visualization tools you own
            </p>
          </div>

          <Card3D className="bg-slate-900/50 backdrop-blur-sm border border-blue-500/20 p-10 rounded-2xl max-w-5xl mx-auto mb-12">
            <div className="space-y-6">
              <p className="text-slate-300 text-lg leading-relaxed">
                The real estate industry runs on precision, but misaligned drawings, RFIs, and delayed handovers often turn projects into chaos.
              </p>
              <p className="text-slate-300 text-lg leading-relaxed">
                <span className="text-cyan-400 font-semibold">Our answer:</span> C2H (Contract-to-Hire) and DRM (Dedicated Resource Model) teams that build predictable, traceable BIM ecosystems — from design to site to sales — so your teams can coordinate faster, deliver cleaner, and retain control of every model, file, and metric.
              </p>
            </div>
          </Card3D>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link
              to="/contact"
              className="group bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all flex items-center gap-2"
            >
              <Calendar className="w-6 h-6" />
              Book 20-Min Strategy Call
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
        </div>
      </section>

      <section className="relative py-20 px-6 bg-gradient-to-b from-transparent to-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">
              What We Build
            </span>
          </h2>
          <p className="text-xl text-slate-400 text-center mb-16">(and Why It Keeps Working)</p>

          <div className="space-y-8">
            {whatWeBuild.map((item, index) => (
              <Card3D key={index} className="bg-slate-900/50 backdrop-blur-sm border border-cyan-500/20 p-8 rounded-2xl hover:border-cyan-500/40 transition-all">
                <div className="flex items-start gap-6">
                  <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-lg p-4 flex-shrink-0">
                    <item.icon className="w-10 h-10 text-cyan-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-3">{item.title}</h3>
                    <p className="text-slate-300 text-lg mb-3 leading-relaxed">{item.description}</p>
                    <p className="text-cyan-400 text-base italic">{item.tagline}</p>
                  </div>
                </div>
              </Card3D>
            ))}
          </div>

          <Card3D className="bg-slate-900/50 backdrop-blur-sm border border-emerald-500/20 p-8 rounded-2xl text-center max-w-3xl mx-auto mt-12">
            <p className="text-lg text-slate-300">
              (Need rapid capacity? Deploy <span className="text-emerald-400 font-semibold">C2H/DRM teams</span> to scale instantly — while your IP remains yours.)
            </p>
          </Card3D>
        </div>
      </section>

      <section className="relative py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-emerald-400 text-transparent bg-clip-text">
              How We Deliver
            </span>
          </h2>
          <p className="text-xl text-slate-400 text-center mb-16">Balanced, Transparent, Zero Black Boxes</p>

          <div className="space-y-6 max-w-5xl mx-auto">
            {howWeDeliver.map((step, index) => (
              <Card3D key={index} className="bg-slate-900/50 backdrop-blur-sm border border-blue-500/20 p-8 rounded-xl hover:border-blue-500/40 transition-all">
                <div className="flex items-start gap-6">
                  <div className="bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 text-2xl font-bold text-white">
                    {step.number}
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
          <p className="text-xl text-slate-400 text-center mb-16">(Developers & Contractors Care About This)</p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {typicalImpact.map((impact, index) => (
              <Card3D key={index} className="bg-slate-900/50 backdrop-blur-sm border border-emerald-500/20 p-8 rounded-xl hover:border-emerald-500/40 transition-all">
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 rounded-lg p-3 flex-shrink-0">
                    <TrendingDown className="w-8 h-8 text-emerald-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{impact.metric}</h3>
                    <p className="text-slate-400">{impact.description}</p>
                  </div>
                </div>
              </Card3D>
            ))}
          </div>

          <Card3D className="bg-slate-900/50 backdrop-blur-sm border border-cyan-500/20 p-8 rounded-2xl text-center max-w-3xl mx-auto">
            <p className="text-xl text-slate-300">
              <span className="text-emerald-300 font-semibold">Translation:</span> from confusion to control, dependency to ownership.
            </p>
          </Card3D>
        </div>
      </section>

      <section className="relative py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 text-transparent bg-clip-text">
              Who This Is For
            </span>
          </h2>
          <p className="text-xl text-slate-400 text-center mb-16">(Builders of Stability)</p>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {whoThisIsFor.map((audience, index) => (
              <Card3D key={index} className="bg-slate-900/50 backdrop-blur-sm border border-cyan-500/20 p-8 rounded-xl hover:border-cyan-500/40 transition-all">
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-lg p-3 flex-shrink-0">
                    <audience.icon className="w-8 h-8 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{audience.role}</h3>
                    <p className="text-slate-400">{audience.description}</p>
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
            <span className="bg-gradient-to-r from-blue-400 to-emerald-400 text-transparent bg-clip-text">
              Delivery Models
            </span>
          </h2>

          <div className="space-y-6 max-w-5xl mx-auto mb-12">
            {deliveryModels.map((model, index) => (
              <Card3D key={index} className="bg-slate-900/50 backdrop-blur-sm border border-blue-500/20 p-8 rounded-xl hover:border-blue-500/40 transition-all">
                <h3 className="text-2xl font-bold text-white mb-3">{model.title}</h3>
                <p className="text-slate-300 text-lg">{model.description}</p>
              </Card3D>
            ))}
          </div>

          <Card3D className="bg-slate-900/50 backdrop-blur-sm border border-emerald-500/20 p-8 rounded-2xl text-center max-w-3xl mx-auto">
            <p className="text-xl text-slate-300">
              <span className="text-emerald-300 font-semibold">Result:</span> capacity today, capability you can hire tomorrow.
            </p>
          </Card3D>
        </div>
      </section>

      <section className="relative py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-500 text-transparent bg-clip-text">
              Fast Answers
            </span>
          </h2>
          <p className="text-xl text-slate-400 text-center mb-16">Common Questions</p>

          <div className="space-y-6">
            {fastAnswers.map((faq, index) => (
              <Card3D key={index} className="bg-slate-900/50 backdrop-blur-sm border border-blue-500/20 p-8 rounded-xl">
                <h3 className="text-xl font-bold text-white mb-3">{faq.question}</h3>
                <p className="text-slate-300 text-lg">{faq.answer}</p>
              </Card3D>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-20 px-6 bg-gradient-to-b from-transparent to-slate-900/50">
        <div className="max-w-5xl mx-auto">
          <Card3D className="bg-slate-900/50 backdrop-blur-sm border border-cyan-500/20 p-10 rounded-2xl">
            <h2 className="text-3xl font-bold text-white mb-4">
              Future Scope — Expanding Into D2H & FTE
            </h2>
            <p className="text-slate-300 text-lg leading-relaxed mb-4">
              D2H (Dedicated-to-Hire) and FTE models remain on GlobeAIra Tech roadmap for large developers and EPCs seeking in-house BIM excellence.
            </p>
            <p className="text-slate-400 text-lg leading-relaxed">
              The foundation stays constant — you own code, models, data, and documentation from day one.
            </p>
          </Card3D>
        </div>
      </section>

      <section className="relative py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <Card3D className="bg-gradient-to-br from-blue-600/20 to-emerald-600/20 backdrop-blur-sm border border-cyan-500/30 p-12 rounded-2xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
              Ready to Build Once, Handover Without Drama?
            </h2>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
              <Link
                to="/contact"
                className="group bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all flex items-center gap-2"
              >
                <Calendar className="w-6 h-6" />
                Book 20-Min Strategy Call
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
    </div>
  );
}

const whatWeBuild = [
  {
    icon: Box,
    title: 'Production-Grade BIM Modeling (LOD 300-400)',
    description: 'Revit/IFC coordination across architectural, structural, and MEP streams - clean templates, naming conventions, and Revit families that do not collapse under deadlines.',
    tagline: 'Clarity by default. Rework optional.',
  },
  {
    icon: Target,
    title: 'Clash Control & Coordination',
    description: 'Rule-based checks, issue routing, constructability reviews before site work.',
    tagline: 'Fix in BIM - not in concrete.',
  },
  {
    icon: Clock,
    title: '4D/5D & Site Dashboards',
    description: 'Schedule and cost visibility in one pane - linking models to time, quantity, and budget.',
    tagline: 'One screen. Zero guesswork.',
  },
  {
    icon: Eye,
    title: 'Reality Capture - As-Built',
    description: 'Drone/LiDAR scans, deviation maps, COBie/FM packs - consistent digital twins that survive handover.',
    tagline: 'The model does not die at commissioning.',
  },
  {
    icon: BarChart,
    title: 'Sales / CRM & Visualization Tools',
    description: 'Interactive stacking plans, real-time inventory, price sync, and 3D models for buyers.',
    tagline: 'One truth across design, sales, and site.',
  },
];

const howWeDeliver = [
  {
    number: '1',
    title: 'Scope with spine',
    description: 'Outcomes, standards (ISO 19650), will not builds.',
  },
  {
    number: '2',
    title: 'Architecture first',
    description: 'CDE design, access rules, naming, lineage.',
  },
  {
    number: '3',
    title: 'Pilot - prove',
    description: 'One tower/zone; track clash rate, RFI volume, cycle time.',
  },
  {
    number: '4',
    title: 'Harden & operate',
    description: 'CI/CD for scripts, cost guards, and audit trails.',
  },
  {
    number: '5',
    title: 'Handover by design',
    description: 'Runbooks, asset registers, live walkthroughs. No hostages.',
  },
];

const typicalImpact = [
  {
    metric: 'Clash-related rework down 30-50%',
    description: 'Early detection and resolution in BIM prevents costly on-site fixes.',
  },
  {
    metric: 'RFI volume reduced',
    description: 'Significantly reduced with early constructability control and coordination.',
  },
  {
    metric: 'Handover variance down 25-40%',
    description: 'Lifecycle-ready deliverables ensure smooth project closeout.',
  },
  {
    metric: 'Coordination efficiency up',
    description: 'Visible ownership and clear responsibilities accelerate collaboration.',
  },
  {
    metric: 'Change orders reduced',
    description: 'Governed workflows prevent scope creep and uncontrolled changes.',
  },
  {
    metric: 'Translation',
    description: 'From confusion to control, dependency to ownership.',
  },
];

const whoThisIsFor = [
  {
    icon: Building2,
    role: 'Project Heads / EPCs',
    description: 'Clarity, accountability, predictable handovers.',
  },
  {
    icon: Layers,
    role: 'BIM Leads / Architects',
    description: 'Cleaner models, standardization, less rework.',
  },
  {
    icon: Users,
    role: 'CTO / CIO',
    description: 'Unified CDE, data governance, integration-ready assets.',
  },
  {
    icon: Briefcase,
    role: 'CEO / CFO',
    description: 'Visibility into time, cost, and quality — before they slip.',
  },
];

const deliveryModels = [
  {
    title: 'C2H / DRM teams',
    description: 'Your interviews, your rituals, your models. Hire after proof.',
  },
  {
    title: 'Fixed-Scope Engagements',
    description: 'LOD/ISO deliverables with acceptance gates.',
  },
  {
    title: 'Hybrid Model',
    description: 'Core BIM ops + elastic teams for cost/schedule analytics.',
  },
];

const fastAnswers = [
  {
    question: 'Do we own everything?',
    answer: 'Yes — models, scripts, CDE setup, and asset registers belong to you.',
  },
  {
    question: 'Can we convert the team later?',
    answer: 'Yes — through C2H conversion after performance proof, without IP friction.',
  },
  {
    question: 'What tools do you work with?',
    answer: 'Revit, Navisworks, Solibri, Dynamo, Power BI, custom dashboards.',
  },
  {
    question: 'Can you start mid-project?',
    answer: 'Yes — we rebaseline, backfill, and stabilize without breaking continuity.',
  },
];
