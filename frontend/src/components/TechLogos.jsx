import React from 'react';

export const TechLogo = ({ type, className = "w-7 h-7" }) => {
  switch (type) {
    case 'react':
      return (
        <svg className={className} viewBox="-11.5 -10.23174 23 20.46348" fill="none">
          <circle cx="0" cy="0" r="2.05" fill="#61dafb" />
          <g stroke="#61dafb" strokeWidth="1" fill="none">
            <ellipse rx="11" ry="4.2" />
            <ellipse rx="11" ry="4.2" transform="rotate(60)" />
            <ellipse rx="11" ry="4.2" transform="rotate(120)" />
          </g>
        </svg>
      );
    case 'nextjs':
      return (
        <div className={`${className} rounded-full bg-black border border-white/20 flex items-center justify-center font-bold text-white text-xs`}>
          N
        </div>
      );
    case 'javascript':
      return (
        <div className={`${className} bg-[#f7df1e] text-black font-extrabold rounded-md flex items-end justify-end p-1 text-[11px] leading-none`}>
          JS
        </div>
      );
    case 'typescript':
      return (
        <div className={`${className} bg-[#3178c6] text-white font-extrabold rounded-md flex items-end justify-end p-1 text-[11px] leading-none`}>
          TS
        </div>
      );
    case 'html5':
      return (
        <div className={`${className} bg-[#e34f26] text-white font-black rounded-md flex items-center justify-center text-sm`}>
          5
        </div>
      );
    case 'css3':
      return (
        <div className={`${className} bg-[#1572b6] text-white font-black rounded-md flex items-center justify-center text-sm`}>
          3
        </div>
      );
    case 'tailwind':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="#38bdf8">
          <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z" />
        </svg>
      );
    case 'nodejs':
      return (
        <div className={`${className} rounded-md bg-[#339933] text-white font-bold flex items-center justify-center text-xs`}>
          node
        </div>
      );
    case 'mongodb':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="#47a248">
          <path d="M12 0C12 0 4 8.5 4 14.5C4 18.642 7.358 22 11.5 22C11.83 22 12 21.83 12 21.5V0ZM12 0C12 0 20 8.5 20 14.5C20 18.642 16.642 22 12.5 22C12.17 22 12 21.83 12 21.5V0Z" />
        </svg>
      );
    case 'git':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="#f05032">
          <path d="M2.6 10.59L10.6 2.6a2 2 0 0 1 2.83 0l8 8a2 2 0 0 1 0 2.83l-8 8a2 2 0 0 1-2.83 0l-8-8a2 2 0 0 1 0-2.84zm11.9 3.91a2 2 0 1 0-2.83 0l-1.67-1.67a2 2 0 0 0 0-1.66l1.67-1.67a2 2 0 1 0-1.42 1.41l-1.41 1.42a2 2 0 1 0 0 2.83l1.41 1.41a2 2 0 1 0 4.25-1.67z" />
        </svg>
      );
    case 'github':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor">
          <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
        </svg>
      );
    case 'figma':
      return (
        <svg className={className} viewBox="0 0 38 57" fill="none">
          <path d="M19 28.5C19 23.2533 23.2533 19 28.5 19C33.7467 19 38 23.2533 38 28.5C38 33.7467 33.7467 38 28.5 38C23.2533 38 19 33.7467 19 28.5Z" fill="#1ABCFE"/>
          <path d="M0 47.5C0 42.2533 4.25329 38 9.5 38H19V47.5C19 52.7467 14.7467 57 9.5 57C4.25329 57 0 52.7467 0 47.5Z" fill="#0ACF83"/>
          <path d="M19 0V19H28.5C33.7467 19 38 14.7467 38 9.5C38 4.25329 33.7467 0 28.5 0H19Z" fill="#FF7262"/>
          <path d="M0 9.5C0 14.7467 4.25329 19 9.5 19H19V0H9.5C4.25329 0 0 4.25329 0 9.5Z" fill="#F24E1E"/>
          <path d="M0 28.5C0 33.7467 4.25329 38 9.5 38H19V19H9.5C4.25329 19 0 23.2533 0 28.5Z" fill="#A259FF"/>
        </svg>
      );
    default:
      return null;
  }
};
