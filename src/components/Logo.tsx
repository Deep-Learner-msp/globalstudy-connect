
import React from 'react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = "" }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <img 
        src="/lovable-uploads/d6b310f2-72bc-4cd2-8ebb-fa64c80eea2e.png" 
        alt="Career-Guide Overseas Consultant Logo" 
        className="h-auto max-h-16 w-auto"
      />
    </div>
  );
};

export default Logo;
