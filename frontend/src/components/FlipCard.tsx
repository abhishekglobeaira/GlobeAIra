import React, { useState } from 'react';

interface FlipCardProps {
  front: {
    icon: string;
    title: string;
    value?: string;
  };
  back: string;
  gradient: string;
}

export default function FlipCard({ front, back, gradient }: FlipCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="h-64 cursor-pointer perspective"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div
        className="relative w-full h-full transition-transform duration-500 transform-gpu"
        style={{
          transformStyle: 'preserve-3d',
          transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
        }}
      >
        <div
          className={`absolute w-full h-full p-8 rounded-2xl glass-effect border border-cyan-500/30 flex flex-col items-center justify-center text-center`}
          style={{ backfaceVisibility: 'hidden' }}
        >
          <div className="text-5xl mb-4">{front.icon}</div>
          <h3 className={`text-2xl font-black text-white mb-2`}>{front.title}</h3>
          {front.value && (
            <div className={`text-3xl font-black bg-gradient-to-r ${gradient} bg-clip-text text-transparent`}>
              {front.value}
            </div>
          )}
          <p className="text-xs text-slate-400 mt-4">Click to reveal</p>
        </div>

        <div
          className={`absolute w-full h-full p-8 rounded-2xl glass-effect border border-cyan-500/30 flex items-center justify-center text-center`}
          style={{
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
          }}
        >
          <p className="text-slate-300 leading-relaxed">{back}</p>
        </div>
      </div>
    </div>
  );
}
