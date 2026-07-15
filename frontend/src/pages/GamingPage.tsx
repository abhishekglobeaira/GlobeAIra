import { CheckCircle, Target, Shield, Zap, TrendingUp, Calendar, MessageCircle, ArrowRight, Activity, Clock, ShieldCheck, Server, Globe, Lock, Gauge } from 'lucide-react';
import Navigation from '../components/Navigation';
import WaveBackground from '../components/WaveBackground';
import FloatingShapes from '../components/FloatingShapes';
import Card3D from '../components/Card3D';
import { Link } from 'react-router-dom';

export default function GamingPage() {
  return (
    <div className="min-h-screen bg-slate-950">
      <WaveBackground />
      <FloatingShapes />
      <Navigation />

      <section className="relative pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-emerald-400 via-blue-500 to-cyan-400 text-transparent bg-clip-text">
                Gaming / iGaming
              </span>
            </h1>
            <p className="text-2xl md:text-3xl text-slate-300 mb-4 font-light">
              Systems That Absorb Spikes — Not Collapse Under Them
            </p>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Low-latency infra • Anti-fraud telemetry • Elastic load handling
            </p>
          </div>

          <Card3D className="bg-slate-900/50 backdrop-blur-sm border border-emerald-500/20 p-10 rounded-2xl max-w-5xl mx-auto mb-12">
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-red-400 mb-3">The Challenge:</h3>
                <p className="text-slate-300 text-lg">
                  Traffic spikes that crash servers, fraud patterns that slip through, latency that breaks immersion, and compliance that feels like a moving target.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-emerald-400 mb-3">Our Solution:</h3>
                <p className="text-slate-300 text-lg">
                  Low-latency infrastructure, anti-fraud telemetry, and elastic load handling. <span className="text-cyan-400 font-semibold">Zero downtime. Safe scale. Market-ready resilience.</span>
                </p>
              </div>
            </div>
          </Card3D>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link
              to="/contact"
              className="group bg-gradient-to-r from-emerald-500 to-blue-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-lg hover:shadow-emerald-500/50 transition-all flex items-center gap-2"
            >
              <Calendar className="w-6 h-6" />
              Book Consultation
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="https://wa.me/"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gradient-to-r from-cyan-500 to-emerald-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all flex items-center gap-2"
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
            <span className="bg-gradient-to-r from-emerald-400 to-cyan-500 text-transparent bg-clip-text">
              What We Build
            </span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <Card3D key={index} className="bg-slate-900/50 backdrop-blur-sm border border-emerald-500/20 p-10 rounded-2xl hover:border-emerald-500/40 transition-all">
                <div className="bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 rounded-lg p-4 w-fit mb-6">
                  <solution.icon className="w-12 h-12 text-emerald-400" />
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
            <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 text-transparent bg-clip-text">
              Core Capabilities
            </span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {capabilities.map((capability, index) => (
              <Card3D key={index} className="bg-slate-900/50 backdrop-blur-sm border border-cyan-500/20 p-8 rounded-2xl hover:border-cyan-500/40 transition-all">
                <div className="bg-gradient-to-br from-cyan-500/10 to-emerald-500/10 rounded-lg p-4 w-fit mb-6">
                  <capability.icon className="w-10 h-10 text-cyan-400" />
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
            <span className="bg-gradient-to-r from-emerald-400 to-blue-400 text-transparent bg-clip-text">
              Platform Features
            </span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card3D key={index} className="bg-slate-900/50 backdrop-blur-sm border border-emerald-500/20 p-6 rounded-xl hover:border-emerald-500/40 transition-all">
                <div className="flex items-start gap-3 mb-4">
                  <div className="bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 rounded-lg p-2 flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-emerald-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white">{feature.title}</h3>
                </div>
                <p className="text-slate-400">{feature.description}</p>
              </Card3D>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-blue-400 to-emerald-400 text-transparent bg-clip-text">
              Performance Guarantees
            </span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
            {guarantees.map((guarantee, index) => (
              <Card3D key={index} className="bg-slate-900/50 backdrop-blur-sm border border-cyan-500/20 p-8 rounded-xl hover:border-cyan-500/40 transition-all">
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-br from-cyan-500/10 to-emerald-500/10 rounded-lg p-3 flex-shrink-0">
                    <guarantee.icon className="w-8 h-8 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{guarantee.title}</h3>
                    <p className="text-slate-400">{guarantee.description}</p>
                  </div>
                </div>
              </Card3D>
            ))}
          </div>

          <Card3D className="bg-slate-900/50 backdrop-blur-sm border border-emerald-500/20 p-8 rounded-2xl text-center max-w-3xl mx-auto">
            <p className="text-xl text-slate-300">
              <span className="text-emerald-300 font-semibold">Zero downtime. Safe scale. Market-ready resilience.</span>
            </p>
          </Card3D>
        </div>
      </section>

      <section className="relative py-20 px-6 bg-gradient-to-b from-transparent to-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 text-transparent bg-clip-text">
              Implementation Approach
            </span>
          </h2>
          <p className="text-xl text-slate-400 text-center mb-16">Battle-Tested Process</p>

          <div className="space-y-6 max-w-5xl mx-auto">
            {process.map((step, index) => (
              <Card3D key={index} className="bg-slate-900/50 backdrop-blur-sm border border-cyan-500/20 p-8 rounded-xl hover:border-cyan-500/40 transition-all">
                <div className="flex items-start gap-6">
                  <div className="bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 text-2xl font-bold text-white">
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

      <section className="relative py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 text-transparent bg-clip-text">
              Technology Stack
            </span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card3D className="bg-slate-900/50 backdrop-blur-sm border border-emerald-500/20 p-10 rounded-2xl">
              <h3 className="text-2xl font-bold text-white mb-6">Infrastructure</h3>
              <div className="space-y-3">
                {infrastructure.map((tech, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500" />
                    <p className="text-slate-300">{tech}</p>
                  </div>
                ))}
              </div>
            </Card3D>

            <Card3D className="bg-slate-900/50 backdrop-blur-sm border border-cyan-500/20 p-10 rounded-2xl">
              <h3 className="text-2xl font-bold text-white mb-6">Gaming Platforms</h3>
              <div className="space-y-3">
                {platforms.map((platform, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-cyan-500 to-emerald-500" />
                    <p className="text-slate-300">{platform}</p>
                  </div>
                ))}
              </div>
            </Card3D>
          </div>
        </div>
      </section>

      <section className="relative py-20 px-6 bg-gradient-to-b from-transparent to-slate-900/50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            <span className="bg-gradient-to-r from-emerald-400 to-cyan-500 text-transparent bg-clip-text">
              FAQs
            </span>
          </h2>
          <p className="text-xl text-slate-400 text-center mb-16">Common Questions</p>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <Card3D key={index} className="bg-slate-900/50 backdrop-blur-sm border border-emerald-500/20 p-8 rounded-xl">
                <h3 className="text-xl font-bold text-white mb-3">{faq.question}</h3>
                <p className="text-slate-300 text-lg">{faq.answer}</p>
              </Card3D>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <Card3D className="bg-gradient-to-br from-emerald-600/20 to-cyan-600/20 backdrop-blur-sm border border-emerald-500/30 p-12 rounded-2xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
              Ready to Scale Your Gaming Platform?
            </h2>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
              <Link
                to="/contact"
                className="group bg-gradient-to-r from-emerald-500 to-blue-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-lg hover:shadow-emerald-500/50 transition-all flex items-center gap-2"
              >
                <Calendar className="w-6 h-6" />
                Book a Strategy Call
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="https://wa.me/"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-gradient-to-r from-cyan-500 to-emerald-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all flex items-center gap-2"
              >
                <MessageCircle className="w-6 h-6" />
                Chat on WhatsApp
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
            <p className="text-2xl text-slate-200 font-light">
              Built to handle spikes. Designed for scale. Ready for market.
            </p>
          </Card3D>
        </div>
      </section>
    </div>
  );
}

const solutions = [
  {
    icon: Server,
    title: 'Low-Latency Infrastructure',
    description: 'Sub-50ms response times with globally distributed edge nodes and optimized routing.',
    features: [
      'Multi-region deployment with edge caching',
      'WebSocket and real-time protocol optimization',
      'CDN integration for static assets',
      'Database read replicas and sharding',
    ],
  },
  {
    icon: ShieldCheck,
    title: 'Anti-Fraud & Security',
    description: 'Multi-layered fraud detection with real-time pattern analysis and automated responses.',
    features: [
      'Behavioral analytics and anomaly detection',
      'Device fingerprinting and IP tracking',
      'Transaction monitoring and risk scoring',
      'Automated blocking and alert systems',
    ],
  },
  {
    icon: Zap,
    title: 'Elastic Load Handling',
    description: 'Auto-scaling infrastructure that absorbs traffic spikes without degradation.',
    features: [
      'Kubernetes-based orchestration',
      'Horizontal and vertical scaling',
      'Load balancing with health checks',
      'Predictive scaling based on patterns',
    ],
  },
  {
    icon: Lock,
    title: 'Compliance & Licensing',
    description: 'Built-in compliance for gaming regulations across multiple jurisdictions.',
    features: [
      'Geo-blocking and region restrictions',
      'Audit trails and reporting',
      'Age verification integration',
      'Responsible gaming features',
    ],
  },
];

const capabilities = [
  {
    icon: Activity,
    title: 'Real-Time Gaming',
    description: 'WebSocket infrastructure for multiplayer, live betting, and real-time updates.',
  },
  {
    icon: Globe,
    title: 'Global Scale',
    description: 'Multi-region deployment with latency optimization for worldwide players.',
  },
  {
    icon: Gauge,
    title: 'Performance Monitoring',
    description: 'Real-time observability with alerting for latency, errors, and capacity.',
  },
  {
    icon: Target,
    title: 'Payment Integration',
    description: 'Secure payment processing with multiple gateways and currency support.',
  },
  {
    icon: ShieldCheck,
    title: 'DDoS Protection',
    description: 'Multi-layer DDoS mitigation to keep your platform online during attacks.',
  },
  {
    icon: TrendingUp,
    title: 'Analytics & BI',
    description: 'Player behavior analytics, revenue tracking, and business intelligence.',
  },
];

const features = [
  {
    title: 'Player Management',
    description: 'User registration, KYC, identity verification, and account management.',
  },
  {
    title: 'Game Integration',
    description: 'APIs for casino games, sports betting, live dealer, and custom games.',
  },
  {
    title: 'Wallet & Transactions',
    description: 'Multi-currency wallets with deposits, withdrawals, and bonus management.',
  },
  {
    title: 'Bonus Engine',
    description: 'Flexible bonus rules, promotions, free spins, and loyalty programs.',
  },
  {
    title: 'Live Betting',
    description: 'Real-time odds updates, in-play betting, and cash-out functionality.',
  },
  {
    title: 'Back Office',
    description: 'Admin panel for operations, reporting, player support, and risk management.',
  },
];

const guarantees = [
  {
    icon: Clock,
    title: '99.99% Uptime SLA',
    description: 'High-availability architecture with automatic failover and redundancy.',
  },
  {
    icon: Zap,
    title: '<50ms Latency',
    description: 'Optimized for real-time gaming with sub-50ms response times in target regions.',
  },
  {
    icon: TrendingUp,
    title: 'Auto-Scaling',
    description: 'Automatically handle 10x traffic spikes without manual intervention.',
  },
  {
    icon: Shield,
    title: 'Security Certified',
    description: 'PCI-DSS compliant payment processing and SOC 2 security standards.',
  },
];

const process = [
  {
    title: 'Requirements & Compliance',
    description: 'Define gaming verticals, target markets, licensing requirements, and compliance needs.',
  },
  {
    title: 'Architecture Design',
    description: 'Design scalable architecture with load testing, security audits, and performance benchmarks.',
  },
  {
    title: 'Platform Development',
    description: 'Build core platform with game integrations, payment processing, and fraud detection.',
  },
  {
    title: 'Testing & Launch',
    description: 'Load testing, penetration testing, soft launch, and gradual rollout with monitoring.',
  },
];

const infrastructure = [
  'Kubernetes / Docker',
  'AWS / GCP / Azure',
  'Redis / ElastiCache',
  'PostgreSQL / MongoDB',
  'Kafka / RabbitMQ',
  'CloudFlare / Akamai',
];

const platforms = [
  'Unity / Unreal Engine',
  'HTML5 Gaming Frameworks',
  'Sports Betting APIs',
  'Casino Game Providers',
  'Live Dealer Platforms',
  'Payment Gateway SDKs',
];

const faqs = [
  {
    question: 'Which gaming licenses do you support?',
    answer: 'We have experience with Malta, Curacao, UK, Gibraltar, and other major gaming jurisdictions. We help design platforms that meet specific regulatory requirements.',
  },
  {
    question: 'How do you prevent fraud and abuse?',
    answer: 'Multi-layered approach including behavioral analytics, device fingerprinting, transaction monitoring, and machine learning models for fraud detection.',
  },
  {
    question: 'Can you handle live betting traffic spikes?',
    answer: 'Yes. Our elastic infrastructure is designed for event-driven spikes typical in live betting, with auto-scaling and predictive capacity planning.',
  },
  {
    question: 'What about responsible gaming features?',
    answer: 'We build in deposit limits, self-exclusion, reality checks, and other responsible gaming tools required by most jurisdictions.',
  },
  {
    question: 'How long does platform development take?',
    answer: 'An MVP gaming platform typically takes 3-4 months. Full-featured platforms with multiple game types take 6-9 months depending on scope.',
  },
  {
    question: 'Do you provide ongoing support and updates?',
    answer: 'Yes. We offer managed services including infrastructure management, security updates, new game integrations, and feature development.',
  },
];
