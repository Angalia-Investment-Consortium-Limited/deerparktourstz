// Traditional African Pattern Components
// Inspired by authentic Tanzanian and East African textile designs

interface PatternProps {
  className?: string;
  opacity?: number;
}

export const AdinkraPattern = ({ className = "", opacity = 0.1 }: PatternProps) => (
  <svg 
    className={`absolute inset-0 w-full h-full ${className}`} 
    style={{ opacity }}
    viewBox="0 0 100 100" 
    preserveAspectRatio="xMidYMid slice"
  >
    <defs>
      <pattern id="adinkra" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
        <g fill="currentColor">
          {/* Gye Nyame - Supreme God symbol */}
          <circle cx="10" cy="10" r="1.5" />
          <path d="M10 5 L10 15 M5 10 L15 10" stroke="currentColor" strokeWidth="0.5" fill="none" />
          <circle cx="10" cy="5" r="0.8" fill="none" stroke="currentColor" strokeWidth="0.3" />
          <circle cx="10" cy="15" r="0.8" fill="none" stroke="currentColor" strokeWidth="0.3" />
        </g>
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#adinkra)" />
  </svg>
);

export const GeometricTribes = ({ className = "", opacity = 0.08 }: PatternProps) => (
  <svg 
    className={`absolute inset-0 w-full h-full ${className}`} 
    style={{ opacity }}
    viewBox="0 0 120 120" 
    preserveAspectRatio="xMidYMid slice"
  >
    <defs>
      <pattern id="geometric" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
        <g fill="none" stroke="currentColor" strokeWidth="0.5">
          {/* Diamond patterns */}
          <polygon points="20,5 35,20 20,35 5,20" />
          <polygon points="20,10 30,20 20,30 10,20" />
          {/* Connecting lines */}
          <line x1="20" y1="0" x2="20" y2="5" />
          <line x1="20" y1="35" x2="20" y2="40" />
          <line x1="0" y1="20" x2="5" y2="20" />
          <line x1="35" y1="20" x2="40" y2="20" />
        </g>
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#geometric)" />
  </svg>
);

export const BaobabLeaves = ({ className = "", opacity = 0.06 }: PatternProps) => (
  <svg 
    className={`absolute inset-0 w-full h-full ${className}`} 
    style={{ opacity }}
    viewBox="0 0 80 80" 
    preserveAspectRatio="xMidYMid slice"
  >
    <defs>
      <pattern id="baobab" x="0" y="0" width="25" height="25" patternUnits="userSpaceOnUse">
        <g fill="currentColor">
          {/* Stylized baobab leaf/branch */}
          <path d="M12.5 5 Q15 8 12.5 12 Q10 8 12.5 5" opacity="0.7" />
          <path d="M12.5 13 Q15 16 12.5 20 Q10 16 12.5 13" opacity="0.5" />
          <circle cx="12.5" cy="12.5" r="0.5" opacity="0.8" />
        </g>
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#baobab)" />
  </svg>
);

export const WavePattern = ({ className = "", opacity = 0.05 }: PatternProps) => (
  <svg 
    className={`absolute inset-0 w-full h-full ${className}`} 
    style={{ opacity }}
    viewBox="0 0 100 20" 
    preserveAspectRatio="none"
  >
    <defs>
      <pattern id="waves" x="0" y="0" width="50" height="20" patternUnits="userSpaceOnUse">
        <path 
          d="M0 10 Q12.5 0 25 10 T50 10" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="0.5"
        />
        <path 
          d="M0 15 Q12.5 5 25 15 T50 15" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="0.3"
          opacity="0.6"
        />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#waves)" />
  </svg>
);

// Section divider with African motifs
export const AfricanDivider = ({ className = "" }: { className?: string }) => (
  <div className={`relative py-8 flex items-center justify-center ${className}`}>
    <div className="flex items-center space-x-4">
      <svg width="20" height="20" viewBox="0 0 20 20" className="text-primary">
        <polygon points="10,2 18,18 2,18" fill="currentColor" opacity="0.7" />
        <circle cx="10" cy="12" r="2" fill="currentColor" />
      </svg>
      
      <div className="h-px bg-gradient-to-r from-transparent via-primary to-transparent w-32"></div>
      
      <svg width="24" height="24" viewBox="0 0 24 24" className="text-primary">
        <circle cx="12" cy="12" r="3" fill="none" stroke="currentColor" strokeWidth="1" />
        <path d="M12 6 L12 18 M6 12 L18 12" stroke="currentColor" strokeWidth="0.5" />
        <circle cx="12" cy="6" r="1.5" fill="currentColor" opacity="0.6" />
        <circle cx="12" cy="18" r="1.5" fill="currentColor" opacity="0.6" />
        <circle cx="6" cy="12" r="1.5" fill="currentColor" opacity="0.6" />
        <circle cx="18" cy="12" r="1.5" fill="currentColor" opacity="0.6" />
      </svg>
      
      <div className="h-px bg-gradient-to-r from-transparent via-primary to-transparent w-32"></div>
      
      <svg width="20" height="20" viewBox="0 0 20 20" className="text-primary">
        <polygon points="10,2 18,18 2,18" fill="currentColor" opacity="0.7" />
        <circle cx="10" cy="12" r="2" fill="currentColor" />
      </svg>
    </div>
  </div>
);