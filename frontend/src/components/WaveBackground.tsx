export default function WaveBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <svg
        className="absolute bottom-0 left-0 w-full h-full opacity-30"
        viewBox="0 0 1440 800"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="wave-gradient-1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.3" />
            <stop offset="50%" stopColor="#06b6d4" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#10b981" stopOpacity="0.3" />
          </linearGradient>
          <linearGradient id="wave-gradient-2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.2" />
            <stop offset="50%" stopColor="#10b981" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.25" />
          </linearGradient>
          <linearGradient id="wave-gradient-3" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#10b981" stopOpacity="0.2" />
            <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.2" />
          </linearGradient>
        </defs>

        <g className="animate-wave-1">
          <path
            fill="url(#wave-gradient-1)"
            d="M0,200 C320,280,420,120,720,200 C1020,280,1120,200,1440,240 L1440,800 L0,800 Z"
          >
            <animate
              attributeName="d"
              dur="20s"
              repeatCount="indefinite"
              values="
                M0,200 C320,280,420,120,720,200 C1020,280,1120,200,1440,240 L1440,800 L0,800 Z;
                M0,240 C320,160,420,240,720,180 C1020,120,1120,260,1440,200 L1440,800 L0,800 Z;
                M0,200 C320,280,420,120,720,200 C1020,280,1120,200,1440,240 L1440,800 L0,800 Z"
            />
          </path>
        </g>

        <g className="animate-wave-2">
          <path
            fill="url(#wave-gradient-2)"
            d="M0,320 C360,380,480,260,840,340 C1200,420,1320,300,1440,360 L1440,800 L0,800 Z"
          >
            <animate
              attributeName="d"
              dur="15s"
              repeatCount="indefinite"
              values="
                M0,320 C360,380,480,260,840,340 C1200,420,1320,300,1440,360 L1440,800 L0,800 Z;
                M0,360 C360,300,480,360,840,300 C1200,240,1320,380,1440,320 L1440,800 L0,800 Z;
                M0,320 C360,380,480,260,840,340 C1200,420,1320,300,1440,360 L1440,800 L0,800 Z"
            />
          </path>
        </g>

        <g className="animate-wave-3">
          <path
            fill="url(#wave-gradient-3)"
            d="M0,440 C300,500,600,380,900,460 C1200,540,1320,420,1440,480 L1440,800 L0,800 Z"
          >
            <animate
              attributeName="d"
              dur="25s"
              repeatCount="indefinite"
              values="
                M0,440 C300,500,600,380,900,460 C1200,540,1320,420,1440,480 L1440,800 L0,800 Z;
                M0,480 C300,420,600,500,900,440 C1200,380,1320,520,1440,460 L1440,800 L0,800 Z;
                M0,440 C300,500,600,380,900,460 C1200,540,1320,420,1440,480 L1440,800 L0,800 Z"
            />
          </path>
        </g>
      </svg>
    </div>
  );
}
