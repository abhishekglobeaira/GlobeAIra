export default function Particle3D() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40">
      {[...Array(15)].map((_, i) => {
        const size = Math.random() * 4 + 2;
        const left = Math.random() * 100;
        const animationDuration = Math.random() * 20 + 15;
        const delay = Math.random() * 5;
        const gradient = i % 3 === 0
          ? 'from-blue-500 to-cyan-500'
          : i % 3 === 1
            ? 'from-cyan-500 to-emerald-500'
            : 'from-emerald-500 to-blue-500';

        return (
          <div
            key={i}
            className={`absolute w-${Math.floor(size)} h-${Math.floor(size)} bg-gradient-to-br ${gradient} rounded-full`}
            style={{
              left: `${left}%`,
              bottom: '-20px',
              animation: `particleFloat ${animationDuration}s linear infinite`,
              animationDelay: `${delay}s`,
              filter: 'blur(2px)',
              opacity: Math.random() * 0.5 + 0.3,
            }}
          />
        );
      })}

      <style>{`
        @keyframes particleFloat {
          0% {
            transform: translateY(0) translateX(0) scale(0);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(-100vh) translateX(${Math.random() * 200 - 100}px) scale(1.5);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}
