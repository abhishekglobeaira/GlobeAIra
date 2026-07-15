import { useState } from "react";
import { ArrowRight, Calendar, MessageCircle, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import WaveBackground from "./WaveBackground";
import FloatingShapes from "./FloatingShapes";
import Navigation from "./Navigation";

export default function Hero() {
  const [flippedCards, setFlippedCards] = useState<number[]>([]);
  return (
    <section className="relative overflow-hidden bg-slate-950">
      <WaveBackground />
      <FloatingShapes />
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-transparent to-emerald-500/10" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-[120px] animate-pulse-slow" />
      <div
        className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/20 rounded-full blur-[120px] animate-pulse-slow"
        style={{ animationDelay: "2s" }}
      />

      <Navigation />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32">
        <div className="text-center space-y-8 animate-fade-in">
          <div className="inline-block animate-bounce-slow">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass-effect border border-cyan-500/30 text-cyan-300 text-sm font-medium shadow-glow-cyan">
              <Sparkles className="w-4 h-4 animate-spin-slow" />
              Engineered for Scale. Built for Resilience.
              <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
            </div>
          </div>

          <div className="space-y-4">
            <h1 className="text-5xl sm:text-6xl lg:text-8xl font-black leading-tight animate-slide-up">
              <span className="block text-white">Smartly Built.</span>
              <span className="block text-white">Fearlessly Scaled.</span>
              <span className="block mt-4 bg-gradient-to-r from-blue-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                Market-Resilient.
              </span>
            </h1>
          </div>

          <p
            className="max-w-3xl mx-auto text-xl sm:text-2xl text-slate-300 leading-relaxed animate-fade-in font-light"
            style={{ animationDelay: "0.2s" }}
          >
            We engineer{" "}
            <span className="text-cyan-400 font-semibold">
              adaptive systems
            </span>{" "}
            and{" "}
            <span className="text-emerald-400 font-semibold">
              your extended office in India
            </span>{" "}
            you fully control and own — systems that{" "}
            <span className="text-blue-400 font-semibold">
              don't break when the market does.
            </span>
          </p>

          <div
            className="flex flex-wrap items-center justify-center gap-6 text-base sm:text-lg animate-fade-in"
            style={{ animationDelay: "0.4s" }}
          >
            {[
              { text: "You own your code", color: "from-blue-400 to-cyan-400" },
              {
                text: "You own your data",
                color: "from-cyan-400 to-emerald-400",
              },
              {
                text: "You own your team cadence",
                color: "from-emerald-400 to-blue-400",
              },
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-2 group">
                <div
                  className={`w-2 h-2 rounded-full bg-gradient-to-r ${item.color} animate-pulse`}
                />
                <span className="text-white font-medium group-hover:text-cyan-400 transition-colors">
                  {item.text}
                </span>
              </div>
            ))}
          </div>

          <div
            className="flex flex-col sm:flex-row gap-4 justify-center pt-8 animate-scale-in"
            style={{ animationDelay: "0.6s" }}
          >
            <Link
              to="/contact"
              className="group relative inline-flex items-center justify-center gap-3 px-10 py-5 rounded-2xl bg-gradient-to-r from-blue-600 via-cyan-600 to-emerald-600 text-white text-lg font-bold overflow-hidden shadow-glow-lg hover:shadow-glow-cyan transition-all duration-300 transform hover:scale-105"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 via-emerald-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <Calendar className="w-6 h-6 relative z-10 group-hover:rotate-12 transition-transform" />
              <span className="relative z-10">Book Strategy Call</span>
              <ArrowRight className="w-6 h-6 relative z-10 group-hover:translate-x-2 transition-transform" />
            </Link>
            <a
              href="https://wa.me/919039064608"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-3 px-10 py-5 rounded-2xl glass-effect text-white text-lg font-bold hover:bg-white/10 transition-all duration-300 transform hover:scale-105 group"
            >
              <MessageCircle className="w-6 h-6 group-hover:rotate-12 transition-transform" />
              Chat on WhatsApp +91 90390 64608
            </a>
          </div>
        </div>

        <div
          className="mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 animate-fade-in"
          style={{ animationDelay: "0.8s" }}
        >
          {[
            {
              label: "No Middle Layers",
              value: "Direct Access",
              gradient: "from-blue-500 to-cyan-500",
              flip: "You speak directly with the people doing the work — no managers filtering reality.",
            },
            {
              label: "On Demand",
              value: "Elastic Scale",
              gradient: "from-cyan-500 to-emerald-500",
              flip: "Add or reduce team capacity based on real workload, not fixed contracts.",
            },
            {
              label: "Day One",
              value: "Full Ownership",
              gradient: "from-emerald-500 to-blue-500",
              flip: "From the first week, everything created belongs entirely to your company.",
            },
            {
              label: "Leave Anytime",
              value: "Zero Lock-ins",
              gradient: "from-blue-500 to-cyan-500",
              flip: "You continue only as long as value is delivered — nothing is held back if you move on.",
            },
          ].map((stat, index) => (
            <div
              key={index}
              className="group relative h-64 perspective cursor-pointer"
              style={{ animationDelay: `${0.9 + index * 0.1}s` }}
              onMouseEnter={() => setFlippedCards((prev) => [...prev, index])}
              onMouseLeave={() =>
                setFlippedCards((prev) => prev.filter((i) => i !== index))
              }
            >
              <div
                className={`flip-card-inner ${flippedCards.includes(index) ? "flipped" : ""}`}
              >
                <div className="flip-card-front p-8 rounded-2xl glass-effect border border-cyan-500/30 flex flex-col items-center justify-center text-center hover:bg-white/5 transition-all">
                  <div
                    className={`text-3xl font-black bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-3`}
                  >
                    {stat.value}
                  </div>
                  <div className="text-sm text-slate-400 font-medium mb-4">
                    {stat.label}
                  </div>
                  <p className="text-xs text-slate-500">Hover to reveal</p>
                </div>

                <div className="flip-card-back p-8 rounded-2xl glass-effect border border-cyan-500/30 flex items-center justify-center text-center bg-slate-900/50">
                  <p className="text-slate-300 text-sm leading-relaxed">
                    {stat.flip}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Success Metrics Section */}
        <div className="relative mt-32">
          {/* Background Effects */}
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-blue-500/5 to-emerald-500/5 rounded-[3rem]" />
          <div className="absolute -top-10 left-1/4 w-72 h-72 bg-cyan-500/10 rounded-full blur-[120px]" />
          <div className="absolute -bottom-10 right-1/4 w-72 h-72 bg-emerald-500/10 rounded-full blur-[120px]" />

          <div className="relative glass-effect border border-cyan-500/20 rounded-[2rem] p-8 sm:p-12 overflow-hidden">
            {/* Heading */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/30 bg-slate-900/40 text-cyan-300 text-sm font-medium mb-6">
                <Sparkles className="w-4 h-4 animate-pulse" />
                Proven Growth & Delivery
              </div>

              <h2 className="text-4xl sm:text-5xl font-black text-white mb-6">
                Trusted by
                <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-emerald-400 bg-clip-text text-transparent">
                  {" "}
                  Growing Companies
                </span>
              </h2>

              <p className="max-w-2xl mx-auto text-slate-400 text-lg leading-relaxed">
                Building scalable teams, delivering successful projects, and
                helping businesses grow with confidence.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  number: "25+",
                  label: "Clients Worldwide",
                  image:
                    "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop",
                  gradient: "from-blue-500 to-cyan-500",
                },
                {
                  number: "11-50+",
                  label: "Candidates Hired",
                  image:
                    "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop",
                  gradient: "from-cyan-500 to-emerald-500",
                },
                {
                  number: "100+",
                  label: "Successful Placements",
                  image:
                    "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1200&auto=format&fit=crop",
                  gradient: "from-emerald-500 to-blue-500",
                },
                {
                  number: "75+",
                  label: "Projects Delivered",
                  image:
                    "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",
                  gradient: "from-blue-500 to-cyan-500",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-3xl border border-white/10 bg-slate-900/40 backdrop-blur-xl hover:border-cyan-400/40 transition-all duration-500 hover:-translate-y-2"
                >
                  {/* Image */}
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.label}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                  </div>

                  {/* Content */}
                  <div className="absolute inset-0 flex flex-col justify-end p-6">
                    <div className="inline-block backdrop-blur-xl bg-slate-900/50 border border-white/10 rounded-2xl px-5 py-4 shadow-2xl">
                      <div
                        className={`text-5xl font-black mb-2 bg-gradient-to-r ${item.gradient} bg-clip-text text-transparent`}
                      >
                        {item.number}
                      </div>
                    </div>
                    <p className="text-white text-lg font-semibold">
                      {item.label}
                    </p>

                    {/* Animated Line */}
                    <div className="mt-4 w-12 h-1 rounded-full bg-gradient-to-r from-cyan-400 to-emerald-400 group-hover:w-24 transition-all duration-500" />
                  </div>

                  {/* Glow Effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-cyan-500/10 via-transparent to-emerald-500/10" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
