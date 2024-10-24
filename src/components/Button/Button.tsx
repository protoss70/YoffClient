import React from 'react';
import Ripples from 'react-ripples';

interface ButtonProps {
  text: string;                          // Required: Button text
  variant?: 'inline' | 'border';        // Optional: Type of button style
  bgColor?: string;                     // Optional: Background color (for border variant)
  textColor?: string;                   // Optional: Text color (for border variant)
  rippleColor?: string;                 // Optional: Ripple color
  borderColor?: string;                 // Optional: Border color
  gradient?: {                          // Optional: Gradient color object
    from: string;
    to: string;
  };
  buttonClasses?: string;               // Optional: Additional classes for button
  wrapperClasses?: string;              // Optional: Additional classes for wrapper
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void; // Click handler accepting event
}

const Button: React.FC<ButtonProps> = ({
  text,
  variant = 'border',
  bgColor = 'white',                   // Default background color for border variant
  textColor = 'text-main',             // Default text color for border variant
  rippleColor = '#00000022',           // Default ripple color
  buttonClasses = "",
  wrapperClasses = "",
  borderColor = "border-main",
  gradient,                            // Optional gradient object
  onClick,                             // Click handler
}) => {
  const baseClasses = 'px-5 py-3 text-lg font-medium text-center transition-all duration-300 ease-in-out rounded-xl';
  
  // Default styles for inline variant with gradient support
  const inlineClasses = `
    ${gradient ? `bg-gradient-to-r from-${gradient.from} to-${gradient.to}` : 'bg-gradient-to-r from-main to-secondary'}
    text-white shadow-inner hover:brightness-110 hover:shadow-lg
    transition-all duration-300 ease-in-out
    hover:scale-110
    rounded-xl ${bgColor}
  `;

  // Styles for border variant
  const borderClasses = `
    ${bgColor} border ${textColor}
    transform hover:scale-105
    hover:outline hover:underline hover:outline-2 hover:outline-main
    rounded-xl ${borderColor}
  `;

  return (
    <>
      {/* @ts-expect-error The component is working */}
      <Ripples color={rippleColor} className={`ripple-wrapper rounded-xl ${wrapperClasses}`}>
        <button
          className={`${baseClasses} ${variant === 'inline' ? inlineClasses : borderClasses} ${buttonClasses}`}
          onClick={onClick} // Pass the onClick handler here
        >
          {text}
        </button>
      </Ripples>
    </>
  );
};

export default Button;
