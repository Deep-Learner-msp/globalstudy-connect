
import React from 'react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = "" }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <div className="w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center mr-2 shadow-sm">
        <img 
          src="/lovable-uploads/d6b310f2-72bc-4cd2-8ebb-fa64c80eea2e.png" 
          alt="Career-Guide Overseas Consultant Logo" 
          className="h-7 w-7 object-contain"
        />
      </div>
      <div className="flex flex-col justify-center">
        <span className="font-bold text-xl text-gray-900">Career-Guide</span>
        <span className="text-xs text-gray-500 -mt-1">Overseas Consultants</span>
      </div>
    </div>
  );
};

export default Logo;
