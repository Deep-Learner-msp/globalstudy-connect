
import React from 'react';
interface LogoProps {
  className?: string;
}
const Logo: React.FC<LogoProps> = ({
  className = ""
}) => {
  return <div className={`flex items-center ${className}`}>
      <div className="w-10 h-10 rounded-full bg-brand-blue flex items-center justify-center mr-2 shadow-sm">
        <img alt="Career-Guide Overseas Consultant Logo" className="h-7 w-7 object-contain rounded-full" src="/lovable-uploads/717a1660-c37d-48e6-957c-03682f417a79.jpg" />
      </div>
      <div className="flex flex-col justify-center">
        <span className="font-bold text-xl text-gray-900">Career-Guide</span>
        <span className="text-xs text-gray-500 -mt-1">Overseas Consultants</span>
      </div>
    </div>;
};
export default Logo;
