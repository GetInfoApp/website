import React, { useId } from 'react';

interface LogoProps {
  className?: string;
  size?: number;
}

const Logo: React.FC<LogoProps> = ({ className = "", size = 32 }) => {
  const uid = useId();
  const gradId = `logo-grad-${uid}`;

  return (
    <div
      className={`relative flex items-center justify-center ${className}`}
      style={{ width: size, height: size }}
    >
      <svg
        viewBox="0 0 100 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        <defs>
          <linearGradient id={gradId} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(168, 65%, 32%)" />
            <stop offset="100%" stopColor="hsl(22, 90%, 55%)" />
          </linearGradient>
        </defs>

        {/* Map-pin body — teal→orange gradient, transparent background */}
        <path
          d="M50 110 C46 98 16 72 16 44 A34 34 0 1 1 84 44 C84 72 54 98 50 110 Z"
          fill={`url(#${gradId})`}
        />

        {/* White inner circle */}
        <circle cx="50" cy="44" r="21" fill="white" fillOpacity="0.95" />

        {/* Info "i" — dot */}
        <circle cx="50" cy="36" r="3.5" fill="hsl(168, 65%, 32%)" />

        {/* Info "i" — stem */}
        <rect x="46.5" y="42" width="7" height="14" rx="3.5" fill="hsl(168, 65%, 32%)" />
      </svg>
    </div>
  );
};

export default Logo;
