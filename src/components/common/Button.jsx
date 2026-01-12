import React from 'react';

const Button = ({ 
  children, 
  onClick, 
  variant = 'primary', 
  className = '', 
  icon = null,
  type = 'button'
}) => {

  // Base styles (Responsive)
  const baseStyles = `
    inline-flex items-center justify-center gap-2
    rounded-full font-medium cursor-pointer
    transition-all duration-300
    whitespace-nowrap

    /* Responsive sizing */
    px-4 py-2 text-sm min-h-[40px]
    sm:px-5 sm:py-2.5 sm:text-sm sm:min-h-[44px]
    md:px-6 md:py-3 md:text-base md:min-h-[48px]
  `;

  const variants = {
    primary: `
      bg-[linear-gradient(92.52deg,#B22F0E_2.1%,#D73D17_105.99%)]
      text-white
      hover:brightness-90
      active:scale-[0.97]
    `,
    secondary: `
      bg-white text-[#C4431B]
      border border-[#C4431B]
      hover:bg-[#FFF5F2]
      active:scale-[0.97]
    `,
    outline: `
      bg-transparent text-[#2D2D2D]
      border border-[#2D2D2D]
      hover:bg-black/5
      active:scale-[0.97]
    `,
    tab: `
      bg-[#F7F3EF] text-[#4A4A4A]
      hover:bg-[#EAE2D9]
      active:scale-[0.97]
    `
  };

  return (
    <button 
      type={type}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      <span className="flex items-center gap-2">
        {children}
        {icon && (
          <span className="flex items-center text-[1em]">
            {icon}
          </span>
        )}
      </span>
    </button>
  );
};

export default Button;
