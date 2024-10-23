import React from 'react';
import Ripples from 'react-ripples';

interface ButtonProps {
  text: string;                          // Required: Button text
  variant?: 'inline' | 'border';        // Optional: Type of button style
  bgColor?: string;                     // Optional: Background color (for border variant)
  textColor?: string;                   // Optional: Text color (for border variant)
  rippleColor?: string;                 // Optional: Ripple color
  borderColor?: string;
  gradient?: {                          // Optional: Gradient color object
    from: string;
    to: string;
  };
  classNames?: string;
}

const Button: React.FC<ButtonProps> = ({
  text,
  variant = 'border',
  bgColor = 'white',                   // Default background color for border variant
  textColor = 'text-main',             // Default text color for border variant
  rippleColor = '#00000022',           // Default ripple color
  classNames = "",
  borderColor="border-main",
  gradient,                            // Optional gradient object
}) => {
  const baseClasses = 'px-5 py-3 text-lg font-medium text-center transition-all duration-300 ease-in-out rounded-xl';
  
  // Default styles for inline variant with gradient support
  const inlineClasses = `
    ${gradient ? `bg-gradient-to-r from-${gradient.from} to-${gradient.to}` : 'bg-gradient-to-r from-main to-secondary'}
    text-white shadow-inner hover:brightness-110 hover:shadow-lg
    transition-all duration-300 ease-in-out
    hover:scale-105
    max-800:basis-1/2 rounded-xl
  `;

  // Styles for border variant
  const borderClasses = `
    ${bgColor} border ${textColor}
    transform hover:scale-105
    hover:outline hover:underline hover:outline-2 hover:outline-main
    max-800:basis-1/2 rounded-xl ${borderColor}
  `;

  return (
    <>
        {/* @ts-expect-error The component is working*/}
        <Ripples color={rippleColor} className="ripple-wrapper rounded-xl">
        <button
            className={`${baseClasses} ${variant === 'inline' ? inlineClasses : borderClasses} ${classNames}`}
        >
            {text}
        </button>
        </Ripples>
    </>
  );
};

export default Button;
