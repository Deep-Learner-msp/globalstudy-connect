
import React from 'react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = "" }) => {
  return (
    <div className={`font-bold text-xl text-brand-blue ${className}`}>
      Career-Guide
    </div>
  );
};

export default Logo;
