import React from 'react';

interface LogoProps {
  variant?: 'default' | 'white';
}

const Logo: React.FC<LogoProps> = ({ variant = 'default' }) => {
  const textColor = variant === 'white' ? 'text-white' : 'text-white';
  const outlineColor = variant === 'white' ? 'text-white' : 'text-black';
  
  return (
    <div className="flex flex-col items-center">
      <div className={`font-bold text-3xl tracking-tight ${textColor} relative`} style={{ textShadow: '2px 2px 0 #000, -2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000' }}>
        MH
      </div>
      <div className={`font-medium text-lg tracking-tight ${textColor} relative`} style={{ textShadow: '1px 1px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000' }}>
        store
      </div>
    </div>
  );
};

export default Logo;