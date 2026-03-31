import React from 'react';

interface LogoProps {
  className?: string;
  size?: number;
}

const Logo: React.FC<LogoProps> = ({ className = "", size = 32 }) => {
  return (
    <div className={`relative flex items-center justify-center ${className}`} style={{ width: size, height: size }}>
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        <defs>
          <linearGradient id="logo-gradient" x1="22%" y1="22%" x2="78%" y2="78%">
            <stop offset="0%" stopColor="#6366F1" />
            <stop offset="100%" stopColor="#10B981" />
          </linearGradient>
        </defs>

        {/* Background Circle */}
        <circle cx="50" cy="50" r="48" fill="#0F172A" />
        
        {/* Outer Glow (Subtle) */}
        <circle cx="50" cy="50" r="45" stroke="#6366F1" strokeOpacity="0.2" strokeWidth="1" />

        {/* Stylized G / Frame */}
        <path
          d="M78 50C78 34.54 65.46 22 50 22C34.54 22 22 34.54 22 50C22 65.46 34.54 78 50 78H78V50H55"
          stroke="url(#logo-gradient)"
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Pulse Line */}
        <path
          d="M30 55H42L46 42L54 68L58 55H70"
          stroke="white"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        
        {/* Info Dot (i) */}
        <circle cx="50" cy="34" r="3.5" fill="#10B981" />
      </svg>
    </div>
  );
};

export default Logo;
