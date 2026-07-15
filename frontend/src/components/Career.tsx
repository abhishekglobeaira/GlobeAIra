import { useState } from "react";
import {
  Briefcase,
  Users,
  Target,
  TrendingUp,
  MapPin,
  Clock,
  DollarSign,
  Heart,
  MessageCircle,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import Card3D from "./Card3D";
import ApplicationModal from "./ApplicationModal";

export default function Career() {
  const [selectedJob, setSelectedJob] = useState<number | null>(null);
  const [applicationModalOpen, setApplicationModalOpen] = useState(false);
  const [applicationJobIndex, setApplicationJobIndex] = useState<number | null>(null);

  const jobs = [
    {
      title: "Senior Backend Engineer (Rust & Serverless)",
      type: "Full-time",
      location: "Remote",
      experience: "5+ years",
      description:
        "Build high-performance, memory-safe backend systems using Rust in a serverless cloud architecture.",
      requirements: [
        "5+ years backend development experience",
        "Strong expertise in Rust (ownership, lifetimes, async)",
        "Experience with Axum, Tokio, Serde or similar tools",
        "Experience with serverless & event-driven architecture",
        "Infrastructure as Code (Terraform)",
        "Strong focus on performance, reliability, and automation",
      ],
      benefits: [
        "High ownership role",
        "Work on cutting-edge backend systems",
        "Flexible work culture",
        "Growth opportunities",
      ],
    },
    {
      title: "PixiJS Developer / Frontend Engineer",
      type: "Full-time",
      location: "Remote",
      experience: "3+ years",

      description:
        "Build high-performance interactive slot game interfaces using PixiJS and modern web technologies.",
      requirements: [
        "3+ years frontend or HTML5 game development",
        "Strong PixiJS expertise",
        "JavaScript & canvas rendering knowledge",
        "Experience with browser-based games",
        "Understanding of animations & performance optimization",
      ],
      benefits: [
        "Work on interactive gaming experiences",
        "Creative development environment",
        "Growth opportunities",
        "Flexible hours",
      ],
    },
    {
      title: "Senior Backend Engineer (Node.js - Game Engine)",
      type: "Full-time",
      location: "Remote",
      experience: "5+ years",

      description:
        "Develop real-time backend systems, game engines, and RNG systems for high-performance gaming platforms.",
      requirements: [
        "Strong Node.js backend experience",
        "Experience with real-time / event-driven systems",
        "Knowledge of async programming",
        "Experience with Redis, caching, and databases",
        "Understanding of high-concurrency systems",
      ],
      benefits: [
        "Work on game engine architecture",
        "Exposure to RNG systems",
        "High-impact role",
        "Flexible work culture",
      ],
    },
    {
      title: "Senior SDET (Automation Engineer)",
      type: "Full-time",
      location: "Remote",
      experience: "5+ years",

      description:
        "Build scalable automation frameworks and ensure high-quality releases across backend and frontend systems.",
      requirements: [
        "5+ years in SDET / QA automation",
        "Strong coding skills (Python/JS/Java)",
        "Experience with Playwright, Cypress, Selenium",
        "API and backend testing experience",
        "CI/CD integration knowledge",
      ],
      benefits: [
        "Own testing strategy",
        "High-impact role",
        "Growth-focused team",
        "Flexible work culture",
      ],
    },
    {
      title: "Data Engineer",
      type: "Full-time",
      location: "Remote",
      experience: "3-6 years",

      description:
        "Build scalable data pipelines and infrastructure for analytics and business intelligence.",
      requirements: [
        "Strong experience with data pipelines",
        "Python or Java proficiency",
        "SQL & data warehouse experience",
        "ETL tools (Airflow, dbt, Prefect)",
        "Cloud platforms (AWS/GCP/Azure)",
      ],
      benefits: [
        "Work on large-scale data systems",
        "Cross-team collaboration",
        "Ownership-driven environment",
        "Career growth",
      ],
    },
    {
      title: "Senior Backend Engineer (Python)",
      type: "Full-time",
      location: "Remote",
      experience: "5+ years",

      description:
        "Design secure, scalable backend systems for high-transaction and compliance-driven platforms.",
      requirements: [
        "5+ years backend development",
        "Strong Python expertise",
        "Experience building scalable APIs",
        "Knowledge of distributed systems",
        "Experience with CI/CD pipelines",
      ],
      benefits: [
        "Work on high-transaction systems",
        "Exposure to fintech/compliance systems",
        "High ownership",
        "Growth opportunities",
      ],
    },
  ];
  const values = [
    {
      icon: Target,
      title: "Mission-Driven",
      description:
        "We build solutions that matter, solving real problems for enterprises worldwide.",
    },
    {
      icon: Users,
      title: "Team First",
      description:
        "Collaboration and mutual respect are at the heart of everything we do.",
    },
    {
      icon: TrendingUp,
      title: "Continuous Growth",
      description:
        "We invest in your development through mentorship, training, and challenging projects.",
    },
    {
      icon: Heart,
      title: "Work-Life Balance",
      description:
        "Flexible hours, remote work options, and a supportive environment.",
    },
  ];

  const perks = [
  {
    icon: DollarSign,
    title: "High Growth Compensation",
    description:
      "Industry-leading salary packages with rewarding performance incentives",
  },
  {
    icon: Heart,
    title: "Wellness & Care",
    description:
      "Comprehensive medical coverage and wellness support for your family",
  },
  {
    icon: Clock,
    title: "Work-Life Flexibility",
    description:
      "Flexible schedules designed around productivity and balance",
  },
  {
    icon: MapPin,
    title: "Work From Anywhere",
    description:
      "Enjoy the freedom to work remotely across India",
  },
  {
    icon: Briefcase,
    title: "Upskilling Support",
    description:
      "Dedicated yearly budget for certifications, courses, and events",
  },
  {
    icon: TrendingUp,
    title: "Accelerated Career Path",
    description:
      "Opportunities for rapid growth, mentorship, and leadership development",
  },
  {
    icon: Users,
    title: "Collaborative Culture",
    description:
      "Work with talented teams in a supportive and innovation-driven environment",
  },
  {
    icon: Target,
    title: "Impactful Projects",
    description:
      "Build products and solutions used by clients and users globally",
  },
  {
    icon: MessageCircle,
    title: "Open Communication",
    description:
      "Transparent leadership and a culture that values every voice",
  },
];
  return (
    <div className="relative">
      {/* Hero Section — FIX: added pb-0 to remove the dark gap after hero */}
      <section className="relative overflow-hidden pb-0">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-transparent to-emerald-500/20 z-0" />

        {/* Bottom Blend (removes dark line) */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-900 z-0" />

        {/* Glow Effect 1 */}
        <div className="absolute top-20 right-10 w-96 h-96 bg-cyan-500/30 rounded-full blur-[120px] animate-pulse-slow z-0" />

        {/* Glow Effect 2 (FIXED position) */}
        <div
          className="absolute top-[120px] left-10 w-72 h-72 bg-blue-500/30 rounded-full blur-[120px] animate-pulse-slow z-0"
          style={{ animationDelay: "2s" }}
        />

        {/* FIX: changed py-24 to pt-24 pb-0 so no extra bottom space is added */}
        <div className="pt-24 pb-0 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20 animate-fade-in">
              <div className="inline-block mb-6">
                <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass-effect border border-cyan-500/30 text-cyan-300 text-sm font-medium">
                  <Briefcase className="w-4 h-4" />
                  Join Our Team
                </div>
              </div>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black mb-6">
                <span className="block text-white">Build Your Future</span>
                <span className="block mt-2 bg-gradient-to-r from-blue-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                  With GlobeAIra
                </span>
              </h1>
              <p className="max-w-4xl mx-auto text-xl text-slate-300 leading-relaxed">
                Join a team that's redefining how enterprises build resilient
                technology.
                <br />
                <span className="text-cyan-400 font-semibold">
                  Work on cutting-edge projects. Grow your career. Make an
                  impact.
                </span>
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pb-24">
              <a
                href="#openings"
                className="group relative inline-flex items-center justify-center gap-3 px-10 py-5 rounded-2xl bg-gradient-to-r from-blue-600 via-cyan-600 to-emerald-600 text-white text-lg font-bold overflow-hidden shadow-glow-lg hover:shadow-glow-cyan transition-all duration-300 transform hover:scale-105"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 via-emerald-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <Briefcase className="w-6 h-6 relative z-10 group-hover:rotate-12 transition-transform" />
                <span className="relative z-10">View Open Positions</span>
                <ArrowRight className="w-6 h-6 relative z-10 group-hover:translate-x-2 transition-transform" />
              </a>
              <a
                href="https://wa.me/919039064608"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-3 px-10 py-5 rounded-2xl glass-effect text-white text-lg font-bold hover:bg-white/10 transition-all duration-300 transform hover:scale-105 group"
              >
                <MessageCircle className="w-6 h-6 group-hover:rotate-12 transition-transform" />
                Chat with Us +91 90390 64608
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="relative py-19 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-black text-white mb-6">
              Our <span className="text-gradient">Values</span>
            </h2>
            <p className="max-w-3xl mx-auto text-xl text-slate-300">
              The principles that guide how we work and grow together.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card3D key={index} className="group">
                <div className="p-8 rounded-2xl glass-effect border border-white/10 hover:border-cyan-500/40 transition-all duration-300 h-full">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mb-6 shadow-glow group-hover:scale-110 transition-transform">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {value.title}
                  </h3>
                  <p className="text-slate-300 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </Card3D>
            ))}
          </div>
        </div>
      </section>

      {/* Perks Section */}
      <section className="relative py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-black text-white mb-6">
              Why Join <span className="text-gradient">GlobeAIra</span>?
            </h2>
            <p className="max-w-3xl mx-auto text-xl text-slate-300">
              We offer more than just a job — we provide an environment where
              you can thrive.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {perks.map((perk, index) => (
              <Card3D key={index} className="group">
                <div className="p-6 rounded-2xl glass-effect border border-white/10 hover:border-emerald-500/40 transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <perk.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">
                    {perk.title}
                  </h3>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    {perk.description}
                  </p>
                </div>
              </Card3D>
            ))}
          </div>
        </div>
      </section>

      {/* Job Openings Section */}
      <section id="openings" className="relative py-24 bg-slate-900/50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-16">
      <h2 className="text-4xl sm:text-5xl font-black text-white mb-6">
        Current <span className="text-gradient">Openings</span>
      </h2>
      <p className="max-w-3xl mx-auto text-xl text-slate-300">
        Join us in building the next generation of enterprise solutions.
      </p>
    </div>

    <div className="space-y-6">
      {jobs.map((job, index) => (
        <div key={index} className="group">
          <div className="p-8 rounded-2xl glass-effect border border-white/10 hover:border-cyan-500/40 transition-all duration-300">
            
            <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-6">
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  {job.title}
                </h3>

                <div className="flex flex-wrap items-center gap-4 text-sm text-slate-400">
                  <div className="flex items-center gap-1">
                    <Briefcase className="w-4 h-4" />
                    {job.type}
                  </div>

                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    {job.location}
                  </div>

                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {job.experience}
                  </div>
                </div>
              </div>

              <button
                onClick={() =>
                  setSelectedJob(selectedJob === index ? null : index)
                }
                className="mt-4 lg:mt-0 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-medium hover:opacity-90 transition-all duration-300"
              >
                {selectedJob === index ? "Hide Details" : "View Details"}
              </button>
            </div>

            <p className="text-slate-300 mb-4">
              {job.description}
            </p>

            {selectedJob === index && (
              <div className="mt-6 pt-6 border-t border-white/10">
                <div className="grid md:grid-cols-2 gap-6">

                  {/* Requirements */}
                  <div>
                    <h4 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-emerald-400" />
                      Requirements
                    </h4>

                    <ul className="space-y-2">
                      {job.requirements.map((req, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-slate-300"
                        >
                          <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 flex-shrink-0" />
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Benefits */}
                  <div>
                    <h4 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                      <Heart className="w-5 h-5 text-emerald-400" />
                      Benefits
                    </h4>

                    <ul className="space-y-2">
                      {job.benefits.map((benefit, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-slate-300"
                        >
                          <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full mt-2 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Buttons */}
                <div className="mt-6 flex flex-wrap gap-4">
                  <button
                    onClick={() => {
                      setApplicationJobIndex(index);
                      setApplicationModalOpen(true);
                    }}
                    className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-medium hover:opacity-90 transition-all duration-300"
                  >
                    Apply Now
                  </button>

                  <a
                    href="https://wa.me/919039064608"
                    target="_blank"
                    rel="noreferrer"
                    className="px-6 py-3 rounded-xl glass-effect text-white hover:bg-white/10 transition-all duration-300"
                  >
                    Ask Questions
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  </div>
</section>
            
      
      {/* CTA Section */}
      <section className="relative py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-cyan-600/20 to-emerald-600/20" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <Card3D>
            <div className="p-12 rounded-3xl glass-effect border border-cyan-500/30">
              <h2 className="text-4xl sm:text-5xl font-black text-white mb-8">
                Ready to <span className="text-gradient">Join Our Team</span>?
              </h2>
              <p className="text-xl text-slate-300 leading-relaxed mb-12">
                Don't see a perfect match? We're always looking for talented
                individuals.
                <br />
                Send us your resume and let's discuss opportunities.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:careers@globeaira.com"
                  className="group relative inline-flex items-center justify-center gap-3 px-10 py-5 rounded-2xl bg-gradient-to-r from-blue-600 via-cyan-600 to-emerald-600 text-white text-lg font-bold overflow-hidden shadow-glow-lg hover:shadow-glow-cyan transition-all duration-300 transform hover:scale-105"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 via-emerald-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <Briefcase className="w-6 h-6 relative z-10 group-hover:rotate-12 transition-transform" />
                  <span className="relative z-10">Send Your Resume</span>
                  <ArrowRight className="w-6 h-6 relative z-10 group-hover:translate-x-2 transition-transform" />
                </a>
                <a
                  href="https://wa.me/919039064608"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-3 px-10 py-5 rounded-2xl glass-effect text-white text-lg font-bold hover:bg-white/10 transition-all duration-300 transform hover:scale-105 group"
                >
                  <MessageCircle className="w-6 h-6 group-hover:rotate-12 transition-transform" />
                  Chat with Us +91 9039064608
                </a>
              </div>
            </div>
          </Card3D>
        </div>
      </section>

      {/* Application Modal */}
      <ApplicationModal
        isOpen={applicationModalOpen}
        jobTitle={
          applicationJobIndex !== null ? jobs[applicationJobIndex].title : ""
        }
        onClose={() => {
          setApplicationModalOpen(false);
          setApplicationJobIndex(null);
        }}
      />
    </div>
  );
}
