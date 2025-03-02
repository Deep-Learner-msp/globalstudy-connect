
import React from 'react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = "" }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <img 
        src="/lovable-uploads/4733ef62-f2db-41f5-8032-e5b4484a7954.png" 
        alt="Career-Guide Overseas Consultant Logo" 
        className="h-auto max-h-16 w-auto"
      />
    </div>
  );
};

export default Logo;
