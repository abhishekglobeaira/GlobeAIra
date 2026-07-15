import { Quote, Star, Sparkles } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      quote: 'Finally a staffing model that hands over everything. No lock-ins.',
      author: 'Founder',
      company: 'Travel Tech',
      gradient: 'from-blue-600 to-cyan-600'
    },
    {
      quote: 'Team felt like our own team from week one.',
      author: 'VP Engineering',
      company: 'SaaS',
      gradient: 'from-cyan-600 to-emerald-600'
    },
    {
      quote: 'C2H gave us real control and clarity before hiring full-time.',
      author: 'Head of Projects',
      company: 'Real Estate',
      gradient: 'from-emerald-600 to-blue-600'
    }
  ];

  return (
    <section className="relative py-24 bg-slate-900 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(59,130,246,0.1),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(16,185,129,0.1),transparent_60%)]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-effect text-cyan-300 text-sm font-medium mb-6 animate-bounce-slow">
            <Sparkles className="w-4 h-4 animate-spin-slow" />
            <span>Testimonials</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6">
            What{' '}
            <span className="text-gradient">
              Leaders Say
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group relative"
            >
              <div className={`absolute -inset-1 bg-gradient-to-r ${testimonial.gradient} rounded-3xl opacity-0 group-hover:opacity-50 blur-xl transition duration-500`} />
              <div className="relative h-full p-10 rounded-3xl glass-effect hover:bg-white/10 transition-all duration-500 transform hover:scale-105">
                <div className={`absolute -top-6 -left-6 w-16 h-16 rounded-2xl bg-gradient-to-br ${testimonial.gradient} flex items-center justify-center shadow-glow group-hover:scale-110 transition-transform duration-300`}>
                  <Quote className="w-8 h-8 text-white" />
                </div>

                <div className="flex gap-1 mb-6 mt-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>

                <p className="text-slate-200 text-xl leading-relaxed mb-8 font-light">
                  "{testimonial.quote}"
                </p>
                <div className="pt-6 border-t border-white/10">
                  <p className="text-white font-bold text-lg">{testimonial.author}</p>
                  <p className="text-cyan-400 font-medium">{testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
