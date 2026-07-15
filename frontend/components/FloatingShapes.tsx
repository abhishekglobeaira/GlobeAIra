export default function FloatingShapes() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute top-20 left-[10%] w-32 h-32 animate-float">
        <div className="w-full h-full bg-gradient-to-br from-blue-500/20 to-cyan-500/10 rounded-3xl rotate-12 backdrop-blur-sm"
             style={{
               transform: 'perspective(1000px) rotateX(20deg) rotateY(-20deg)',
               boxShadow: '0 25px 50px -12px rgba(59, 130, 246, 0.3)'
             }} />
      </div>

      <div className="absolute top-40 right-[15%] w-24 h-24 animate-float-delayed">
        <div className="w-full h-full bg-gradient-to-br from-cyan-500/20 to-emerald-500/10 rounded-full backdrop-blur-sm"
             style={{
               transform: 'perspective(1000px) rotateX(-15deg) rotateY(15deg)',
               boxShadow: '0 25px 50px -12px rgba(6, 182, 212, 0.3)'
             }} />
      </div>

      <div className="absolute bottom-40 left-[20%] w-28 h-28 animate-float">
        <div className="w-full h-full bg-gradient-to-br from-emerald-500/20 to-blue-500/10 rounded-2xl -rotate-12 backdrop-blur-sm"
             style={{
               transform: 'perspective(1000px) rotateX(25deg) rotateY(25deg)',
               boxShadow: '0 25px 50px -12px rgba(16, 185, 129, 0.3)',
               animationDelay: '1s'
             }} />
      </div>

      <div className="absolute top-[60%] right-[8%] w-20 h-20 animate-float-delayed">
        <div className="w-full h-full bg-gradient-to-br from-blue-500/20 to-emerald-500/10 rounded-3xl rotate-45 backdrop-blur-sm"
             style={{
               transform: 'perspective(1000px) rotateX(-20deg) rotateY(-25deg)',
               boxShadow: '0 25px 50px -12px rgba(59, 130, 246, 0.3)'
             }} />
      </div>

      <div className="absolute top-[30%] left-[5%] w-16 h-16 animate-float">
        <div className="w-full h-full bg-gradient-to-br from-cyan-500/15 to-blue-500/10 rounded-full backdrop-blur-sm"
             style={{
               transform: 'perspective(1000px) rotateX(15deg) rotateY(-15deg)',
               boxShadow: '0 20px 40px -10px rgba(6, 182, 212, 0.3)',
               animationDelay: '2s'
             }} />
      </div>

      <div className="absolute bottom-[20%] right-[25%] w-36 h-36 animate-float-delayed">
        <div className="w-full h-full bg-gradient-to-br from-emerald-500/15 to-cyan-500/10 rounded-[2rem] rotate-[30deg] backdrop-blur-sm"
             style={{
               transform: 'perspective(1000px) rotateX(-25deg) rotateY(20deg)',
               boxShadow: '0 30px 60px -15px rgba(16, 185, 129, 0.3)'
             }} />
      </div>
    </div>
  );
}
