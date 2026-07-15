import { Factory, CheckCircle, Target, Zap, TrendingUp, Calendar, MessageCircle, ArrowRight, Activity, BarChart, Settings, Gauge, Cpu, Lightbulb, ShieldCheck, TrendingDown } from 'lucide-react';
import Navigation from '../components/Navigation';
import WaveBackground from '../components/WaveBackground';
import FloatingShapes from '../components/FloatingShapes';
import Card3D from '../components/Card3D';
import { Link } from 'react-router-dom';

export default function ManufacturingPage() {
  return (
    <div className="min-h-screen bg-slate-950">
      <WaveBackground />
      <FloatingShapes />
      <Navigation />

      <section className="relative pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-emerald-500 to-blue-400 text-transparent bg-clip-text">
                Manufacturing & Industrial Solutions
              </span>
            </h1>
            <p className="text-2xl md:text-3xl text-slate-300 mb-4 font-light">
              Automate What Slows You Down
            </p>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              MES data sanity • OT/IT sync • Energy visibility • Predictive maintenance
            </p>
          </div>

          <Card3D className="bg-slate-900/50 backdrop-blur-sm border border-cyan-500/20 p-10 rounded-2xl max-w-5xl mx-auto mb-12">
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-red-400 mb-3">The Reality:</h3>
                <p className="text-slate-300 text-lg">
                  Production data trapped in silos, OT and IT speaking different languages, energy costs invisible until the bill arrives, and maintenance that's always reactive.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-emerald-400 mb-3">Our Approach:</h3>
                <p className="text-slate-300 text-lg">
                  <span className="text-cyan-400 font-semibold">Because the factory of the future starts with visibility, not buzzwords.</span> We deliver MES integration, OT/IT convergence, energy monitoring, and predictive maintenance systems that actually work.
                </p>
              </div>
            </div>
          </Card3D>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link
              to="/contact"
              className="group bg-gradient-to-r from-cyan-500 to-emerald-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all flex items-center gap-2"
            >
              <Calendar className="w-6 h-6" />
              Book Consultation
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="https://wa.me/"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gradient-to-r from-emerald-500 to-blue-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-lg hover:shadow-emerald-500/50 transition-all flex items-center gap-2"
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
            <span className="bg-gradient-to-r from-cyan-400 to-emerald-500 text-transparent bg-clip-text">
              What We Build
            </span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <Card3D key={index} className="bg-slate-900/50 backdrop-blur-sm border border-cyan-500/20 p-10 rounded-2xl hover:border-cyan-500/40 transition-all">
                <div className="bg-gradient-to-br from-cyan-500/10 to-emerald-500/10 rounded-lg p-4 w-fit mb-6">
                  <solution.icon className="w-12 h-12 text-cyan-400" />
                </div>
                <h3 className="text-3xl font-bold text-white mb-4">{solution.title}</h3>
                <p className="text-slate-300 text-lg mb-6">{solution.description}</p>
                <div className="space-y-3">
                  {solution.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-1" />
                      <p className="text-slate-400">{feature}</p>
                    </div>
                  ))}
                </div>
              </Card3D>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-emerald-400 to-blue-400 text-transparent bg-clip-text">
              Key Capabilities
            </span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {capabilities.map((capability, index) => (
              <Card3D key={index} className="bg-slate-900/50 backdrop-blur-sm border border-emerald-500/20 p-8 rounded-2xl hover:border-emerald-500/40 transition-all">
                <div className="bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 rounded-lg p-4 w-fit mb-6">
                  <capability.icon className="w-10 h-10 text-emerald-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{capability.title}</h3>
                <p className="text-slate-300 text-lg">{capability.description}</p>
              </Card3D>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-20 px-6 bg-gradient-to-b from-transparent to-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 text-transparent bg-clip-text">
              Measurable Outcomes
            </span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
            {outcomes.map((outcome, index) => (
              <Card3D key={index} className="bg-slate-900/50 backdrop-blur-sm border border-emerald-500/20 p-8 rounded-xl hover:border-emerald-500/40 transition-all">
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 rounded-lg p-3 flex-shrink-0">
                    <TrendingDown className="w-8 h-8 text-emerald-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{outcome.metric}</h3>
                    <p className="text-slate-400">{outcome.description}</p>
                  </div>
                </div>
              </Card3D>
            ))}
          </div>

          <Card3D className="bg-slate-900/50 backdrop-blur-sm border border-cyan-500/20 p-8 rounded-2xl text-center max-w-3xl mx-auto">
            <p className="text-xl text-slate-300">
              <span className="text-emerald-300 font-semibold">Production stability. Energy traceability. Real-time insights.</span>
            </p>
          </Card3D>
        </div>
      </section>

      <section className="relative py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 text-transparent bg-clip-text">
              Implementation Process
            </span>
          </h2>
          <p className="text-xl text-slate-400 text-center mb-16">Phased & Proven</p>

          <div className="space-y-6 max-w-5xl mx-auto">
            {process.map((step, index) => (
              <Card3D key={index} className="bg-slate-900/50 backdrop-blur-sm border border-cyan-500/20 p-8 rounded-xl hover:border-cyan-500/40 transition-all">
                <div className="flex items-start gap-6">
                  <div className="bg-gradient-to-br from-cyan-500 to-emerald-500 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 text-2xl font-bold text-white">
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
              Technology Stack
            </span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card3D className="bg-slate-900/50 backdrop-blur-sm border border-cyan-500/20 p-10 rounded-2xl">
              <h3 className="text-2xl font-bold text-white mb-6">Industrial Protocols</h3>
              <div className="space-y-3">
                {protocols.map((protocol, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-cyan-500 to-emerald-500" />
                    <p className="text-slate-300">{protocol}</p>
                  </div>
                ))}
              </div>
            </Card3D>

            <Card3D className="bg-slate-900/50 backdrop-blur-sm border border-emerald-500/20 p-10 rounded-2xl">
              <h3 className="text-2xl font-bold text-white mb-6">Integration Platforms</h3>
              <div className="space-y-3">
                {platforms.map((platform, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500" />
                    <p className="text-slate-300">{platform}</p>
                  </div>
                ))}
              </div>
            </Card3D>
          </div>
        </div>
      </section>

      <section className="relative py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-emerald-500 text-transparent bg-clip-text">
              FAQs
            </span>
          </h2>
          <p className="text-xl text-slate-400 text-center mb-16">Common Questions</p>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <Card3D key={index} className="bg-slate-900/50 backdrop-blur-sm border border-cyan-500/20 p-8 rounded-xl">
                <h3 className="text-xl font-bold text-white mb-3">{faq.question}</h3>
                <p className="text-slate-300 text-lg">{faq.answer}</p>
              </Card3D>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-20 px-6 bg-gradient-to-b from-transparent to-slate-900/50">
        <div className="max-w-4xl mx-auto">
          <Card3D className="bg-gradient-to-br from-cyan-600/20 to-emerald-600/20 backdrop-blur-sm border border-emerald-500/30 p-12 rounded-2xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
              Ready to Modernize Your Operations?
            </h2>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
              <Link
                to="/contact"
                className="group bg-gradient-to-r from-cyan-500 to-emerald-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all flex items-center gap-2"
              >
                <Calendar className="w-6 h-6" />
                Book a Strategy Call
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="https://wa.me/"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-gradient-to-r from-emerald-500 to-blue-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-lg hover:shadow-emerald-500/50 transition-all flex items-center gap-2"
              >
                <MessageCircle className="w-6 h-6" />
                Chat on WhatsApp
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
            <p className="text-2xl text-slate-200 font-light">
              Visibility first. Automation next. Results guaranteed.
            </p>
          </Card3D>
        </div>
      </section>
    </div>
  );
}

const solutions = [
  {
    icon: Settings,
    title: 'MES Integration & Data Sanity',
    description: 'Connect your Manufacturing Execution System to ERP, quality systems, and analytics platforms.',
    features: [
      'Real-time production data synchronization',
      'Data validation and cleansing pipelines',
      'Automated reporting and KPI dashboards',
      'Historical data analysis and trending',
    ],
  },
  {
    icon: Activity,
    title: 'OT/IT Convergence',
    description: 'Bridge the gap between Operational Technology and Information Technology systems.',
    features: [
      'Secure OT network connectivity',
      'Protocol translation and data normalization',
      'Edge computing and data preprocessing',
      'Cybersecurity for industrial systems',
    ],
  },
  {
    icon: Zap,
    title: 'Energy Monitoring & Optimization',
    description: 'Real-time visibility into energy consumption across production lines and facilities.',
    features: [
      'Sub-meter level energy monitoring',
      'Cost allocation by product and process',
      'Peak demand management',
      'Carbon footprint tracking',
    ],
  },
  {
    icon: Gauge,
    title: 'Predictive Maintenance',
    description: 'Shift from reactive to predictive maintenance with IoT sensors and machine learning.',
    features: [
      'Equipment health monitoring',
      'Anomaly detection and alerts',
      'Failure prediction models',
      'Maintenance scheduling optimization',
    ],
  },
];

const capabilities = [
  {
    icon: BarChart,
    title: 'Real-Time Dashboards',
    description: 'Live production metrics, energy consumption, and equipment status in intuitive dashboards.',
  },
  {
    icon: Cpu,
    title: 'Edge Computing',
    description: 'Process data at the edge for low-latency decision-making and reduced bandwidth costs.',
  },
  {
    icon: ShieldCheck,
    title: 'OT Security',
    description: 'Industrial-grade cybersecurity for SCADA, PLC, and other OT systems.',
  },
  {
    icon: Lightbulb,
    title: 'AI/ML Integration',
    description: 'Machine learning models for quality prediction, optimization, and anomaly detection.',
  },
  {
    icon: Target,
    title: 'KPI Tracking',
    description: 'Automated calculation and tracking of OEE, MTTR, MTBF, and other manufacturing KPIs.',
  },
  {
    icon: TrendingUp,
    title: 'Continuous Improvement',
    description: 'Data-driven insights to identify bottlenecks and improvement opportunities.',
  },
];

const outcomes = [
  {
    metric: 'Production Stability ↑',
    description: 'Reduce unplanned downtime through predictive maintenance and real-time monitoring.',
  },
  {
    metric: 'Energy Costs ↓',
    description: 'Optimize energy usage with visibility into consumption patterns and peak demand.',
  },
  {
    metric: 'Quality Improvements',
    description: 'Early detection of quality issues through real-time data analysis.',
  },
  {
    metric: 'Data-Driven Decisions',
    description: 'Replace gut-feel decisions with insights from real production data.',
  },
];

const process = [
  {
    title: 'Discovery & Assessment',
    description: 'Map existing systems, identify data sources, and define integration requirements. Conduct OT security assessment.',
  },
  {
    title: 'Pilot Implementation',
    description: 'Start with a single production line or use case. Prove value before scaling.',
  },
  {
    title: 'Integration & Deployment',
    description: 'Connect systems, implement data pipelines, and deploy dashboards. All with minimal production disruption.',
  },
  {
    title: 'Optimization & Scale',
    description: 'Refine models, add more data sources, and scale to additional lines or facilities.',
  },
];

const protocols = [
  'OPC UA',
  'Modbus TCP/RTU',
  'MQTT',
  'Ethernet/IP',
  'Profinet',
  'BACnet',
];

const platforms = [
  'Ignition SCADA',
  'Kepware',
  'ThingWorx',
  'Azure IoT',
  'AWS IoT',
  'Custom IoT platforms',
];

const faqs = [
  {
    question: 'Do we need to stop production for implementation?',
    answer: 'No. We design implementations to minimize disruption, typically working during scheduled maintenance windows or off-shifts.',
  },
  {
    question: 'How do you ensure OT security?',
    answer: 'We follow IEC 62443 standards, implement network segmentation, and use secure protocols. OT security is built-in, not bolted-on.',
  },
  {
    question: 'Can you work with legacy equipment?',
    answer: 'Yes. We have experience retrofitting legacy machines with modern sensors and connectivity while maintaining existing operations.',
  },
  {
    question: 'What about data ownership?',
    answer: 'All data, systems, and IP are yours. We provide solutions you own and can maintain independently.',
  },
  {
    question: 'How long does implementation take?',
    answer: 'A pilot project typically takes 4-8 weeks. Full-scale deployment timelines depend on facility size and complexity.',
  },
  {
    question: 'Do you provide ongoing support?',
    answer: 'Yes. We offer training, documentation, and optional support packages. Our goal is to make you self-sufficient.',
  },
];
