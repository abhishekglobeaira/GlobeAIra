import { Users, CheckCircle, Target, Shield, Zap, TrendingUp, Calendar, MessageCircle, ArrowRight, FileCheck, Clock, DollarSign, UserCheck, Code, GitBranch, Lock } from 'lucide-react';
import Navigation from '../components/Navigation';
import WaveBackground from '../components/WaveBackground';
import FloatingShapes from '../components/FloatingShapes';
import Card3D from '../components/Card3D';
import { Link } from 'react-router-dom';

export default function C2HDRMPage() {
  return (
    <div className="min-h-screen bg-slate-950">
      <WaveBackground />
      <FloatingShapes />
      <Navigation />

      <section className="relative pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-emerald-400 via-cyan-500 to-blue-400 text-transparent bg-clip-text">
                C2H + DRM Teams
              </span>
            </h1>
            <p className="text-2xl md:text-3xl text-slate-300 mb-4 font-light">
              Your Team. Your Rituals. Your Control.
            </p>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Interview the engineers, run the stand-ups, own the repos.
            </p>
          </div>

          <Card3D className="bg-slate-900/50 backdrop-blur-sm border border-emerald-500/20 p-10 rounded-2xl max-w-5xl mx-auto mb-12">
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-emerald-400 mb-3">The Model:</h3>
                <p className="text-slate-300 text-lg">
                  Whether under <span className="text-cyan-400 font-semibold">Contract-to-Hire (C2H)</span> or <span className="text-cyan-400 font-semibold">Dedicated Resource Model (DRM)</span> — you get risk-free elasticity, transparent pricing, and conversion-ready teams.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-blue-400 mb-3">The Outcome:</h3>
                <p className="text-slate-300 text-lg">
                  Elastic capacity, zero middle layers, hired after C2H evaluation.
                </p>
              </div>
            </div>
          </Card3D>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link
              to="/contact"
              className="group bg-gradient-to-r from-emerald-500 to-cyan-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-lg hover:shadow-emerald-500/50 transition-all flex items-center gap-2"
            >
              <Calendar className="w-6 h-6" />
              Book Consultation
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="https://wa.me/"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gradient-to-r from-blue-500 to-emerald-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-lg hover:shadow-blue-500/50 transition-all flex items-center gap-2"
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
              What Makes This Different
            </span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card3D key={index} className="bg-slate-900/50 backdrop-blur-sm border border-emerald-500/20 p-8 rounded-2xl hover:border-emerald-500/40 transition-all">
                <div className="bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 rounded-lg p-4 w-fit mb-6">
                  <benefit.icon className="w-10 h-10 text-emerald-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{benefit.title}</h3>
                <p className="text-slate-300 text-lg">{benefit.description}</p>
              </Card3D>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 text-transparent bg-clip-text">
              How It Works
            </span>
          </h2>
          <p className="text-xl text-slate-400 text-center mb-16">Step-by-Step Process</p>

          <div className="grid md:grid-cols-2 gap-8">
            {howItWorks.map((step, index) => (
              <Card3D key={index} className="bg-slate-900/50 backdrop-blur-sm border border-cyan-500/20 p-8 rounded-2xl hover:border-cyan-500/40 transition-all">
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

      <section className="relative py-20 px-6 bg-gradient-to-b from-transparent to-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-blue-400 to-emerald-400 text-transparent bg-clip-text">
              Model Comparison
            </span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <Card3D className="bg-slate-900/50 backdrop-blur-sm border border-emerald-500/20 p-10 rounded-2xl">
              <div className="bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 rounded-lg p-4 w-fit mb-6">
                <UserCheck className="w-12 h-12 text-emerald-400" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-4">Contract-to-Hire (C2H)</h3>
              <p className="text-slate-300 text-lg mb-6">
                Evaluate engineers in real production conditions, then convert to permanent hires with zero IP or transition friction.
              </p>
              <div className="space-y-4">
                {c2hFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-emerald-400 flex-shrink-0 mt-1" />
                    <p className="text-slate-300">{feature}</p>
                  </div>
                ))}
              </div>
            </Card3D>

            <Card3D className="bg-slate-900/50 backdrop-blur-sm border border-cyan-500/20 p-10 rounded-2xl">
              <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-lg p-4 w-fit mb-6">
                <Users className="w-12 h-12 text-cyan-400" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-4">Dedicated Resource Model (DRM)</h3>
              <p className="text-slate-300 text-lg mb-6">
                Dedicated team members who work exclusively on your projects with full integration into your processes and culture.
              </p>
              <div className="space-y-4">
                {drmFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-1" />
                    <p className="text-slate-300">{feature}</p>
                  </div>
                ))}
              </div>
            </Card3D>
          </div>
        </div>
      </section>

      <section className="relative py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-emerald-400 to-blue-400 text-transparent bg-clip-text">
              What You Get
            </span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {deliverables.map((item, index) => (
              <Card3D key={index} className="bg-slate-900/50 backdrop-blur-sm border border-emerald-500/20 p-6 rounded-xl hover:border-emerald-500/40 transition-all">
                <div className="bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 rounded-lg p-3 w-fit mb-4">
                  <item.icon className="w-8 h-8 text-emerald-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-slate-400">{item.description}</p>
              </Card3D>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-20 px-6 bg-gradient-to-b from-transparent to-slate-900/50">
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

      <section className="relative py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <Card3D className="bg-gradient-to-br from-emerald-600/20 to-cyan-600/20 backdrop-blur-sm border border-emerald-500/30 p-12 rounded-2xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
              Ready to Build Your Team?
            </h2>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
              <Link
                to="/contact"
                className="group bg-gradient-to-r from-emerald-500 to-cyan-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-lg hover:shadow-emerald-500/50 transition-all flex items-center gap-2"
              >
                <Calendar className="w-6 h-6" />
                Book a Strategy Call
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="https://wa.me/"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-gradient-to-r from-blue-500 to-emerald-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-lg hover:shadow-blue-500/50 transition-all flex items-center gap-2"
              >
                <MessageCircle className="w-6 h-6" />
                Chat on WhatsApp
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
            <p className="text-2xl text-slate-200 font-light">
              Your interviews. Your rituals. Your team.
            </p>
          </Card3D>
        </div>
      </section>
    </div>
  );
}

const benefits = [
  {
    icon: UserCheck,
    title: 'You Interview & Approve',
    description: 'Every engineer on your team is vetted by you. No surprises, no mismatches.',
  },
  {
    icon: GitBranch,
    title: 'Your Repos, Your Rules',
    description: 'Direct access to your repositories. No intermediary, no delays.',
  },
  {
    icon: Clock,
    title: 'Your Timezone Overlap',
    description: 'Scheduled overlap hours ensure real-time collaboration when you need it.',
  },
  {
    icon: DollarSign,
    title: 'Transparent Pricing',
    description: 'No hidden fees. No markup mysteries. Just clear, predictable costs.',
  },
  {
    icon: Zap,
    title: 'Elastic Capacity',
    description: 'Scale up or down based on your needs. No long-term lock-ins.',
  },
  {
    icon: Lock,
    title: 'Zero IP Friction',
    description: 'Everything built is yours. Full ownership from day one.',
  },
];

const howItWorks = [
  {
    title: 'Define Your Needs',
    description: 'Tell us your tech stack, team size, and skill requirements. We match profiles within 48 hours.',
  },
  {
    title: 'Interview Candidates',
    description: 'You conduct technical interviews and culture fits. You decide who joins your team.',
  },
  {
    title: 'Onboard & Integrate',
    description: 'Engineers join your daily stand-ups, use your tools, follow your processes.',
  },
  {
    title: 'Evaluate & Convert',
    description: 'For C2H: After proof cycles, convert to permanent hires with zero friction. For DRM: Continue with dedicated resources.',
  },
];

const c2hFeatures = [
  'Trial period with full production integration',
  'Smooth conversion to permanent hire',
  'No recruitment fees after conversion',
  'Complete IP transfer from day one',
  'Risk-free evaluation period',
];

const drmFeatures = [
  'Dedicated engineers for your projects',
  'Full integration into your team culture',
  'Flexible engagement duration',
  'Direct communication channels',
  'Predictable monthly costs',
];

const deliverables = [
  {
    icon: Code,
    title: 'Clean Code',
    description: 'Production-ready, maintainable code following your standards.',
  },
  {
    icon: FileCheck,
    title: 'Documentation',
    description: 'Comprehensive docs, runbooks, and knowledge transfer.',
  },
  {
    icon: Target,
    title: 'Quality Assurance',
    description: 'Tested, reviewed code with CI/CD integration.',
  },
  {
    icon: Shield,
    title: 'Security First',
    description: 'Secure coding practices and regular security audits.',
  },
  {
    icon: TrendingUp,
    title: 'Continuous Improvement',
    description: 'Regular retrospectives and process optimization.',
  },
  {
    icon: Users,
    title: 'Team Collaboration',
    description: 'Seamless integration with your existing team.',
  },
];

const faqs = [
  {
    question: 'What is the minimum engagement period?',
    answer: 'We recommend a minimum of 3 months to ensure proper evaluation and integration. For C2H, the trial period is typically 3-6 months.',
  },
  {
    question: 'Can I switch from DRM to C2H?',
    answer: 'Yes, you can transition from DRM to C2H if you decide to hire the engineers permanently. We make this transition seamless.',
  },
  {
    question: 'What happens to the IP and code?',
    answer: 'All intellectual property, code, and work products are yours from day one. No questions, no conditions.',
  },
  {
    question: 'How do you ensure quality?',
    answer: 'Engineers are pre-vetted, you conduct final interviews, and we provide ongoing performance monitoring and support.',
  },
  {
    question: 'What if an engineer doesn\'t work out?',
    answer: 'We provide a replacement within 2 weeks at no additional cost. Your satisfaction is guaranteed.',
  },
  {
    question: 'Can I scale the team size?',
    answer: 'Absolutely. You can add or reduce team members with 2 weeks notice, giving you complete flexibility.',
  },
];
