
import React from "react";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  center?: boolean;
  light?: boolean;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ 
  title, 
  subtitle, 
  center = false,
  light = false 
}) => {
  return (
    <div className={`mb-12 ${center ? "text-center" : ""}`}>
      <h2 className={`heading-lg mb-4 ${light ? "text-white" : "text-brand-black"}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-lg ${light ? "text-gray-300" : "text-gray-600"}`}>
          {subtitle}
        </p>
      )}
      <div className={`h-1 w-24 bg-brand-gold mt-4 ${center ? "mx-auto" : ""}`}></div>
    </div>
  );
};

export default SectionTitle;
