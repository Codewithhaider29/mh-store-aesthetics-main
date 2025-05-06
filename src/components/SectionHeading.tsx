
import React from 'react';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  alignment?: 'left' | 'center' | 'right';
  titleClassName?: string; // Added this property
  subtitleClassName?: string; // Added this property
}

const SectionHeading = ({ title, subtitle, alignment = 'center' }: SectionHeadingProps) => {
  const alignmentClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  };
  
  return (
    <div className={`${alignmentClasses[alignment]} mb-8`}>
      <h2 className="text-3xl md:text-4xl font-bold text-mh-black-dark">{title}</h2>
      {subtitle && (
        <p className="mt-2 text-gray-600">{subtitle}</p>
      )}
      <div className={`h-1 bg-mh-pink w-24 mt-4 ${alignment === 'center' ? 'mx-auto' : alignment === 'right' ? 'ml-auto' : ''}`}></div>
    </div>
  );
};

export default SectionHeading;
