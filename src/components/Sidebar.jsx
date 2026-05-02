import React from 'react';

const Sidebar = ({ slides, current, onNav }) => {
  return (
    <div className="fixed left-0 top-0 h-screen w-[200px] bg-[#0A0A0A] border-r border-[#1A1A1A] z-[100] flex flex-col py-10">
      <div className="px-8 mb-16">
        <h1 className="font-display text-4xl text-gold font-bold tracking-tighter">AD</h1>
      </div>

      <nav className="flex-grow flex flex-col space-y-1">
        {slides.map((slide, i) => (
          <button
            key={i}
            onClick={() => onNav(i)}
            className={`group relative flex items-center px-8 py-3 transition-all duration-300 ${
              current === i ? 'bg-white/5' : 'hover:bg-white/5'
            }`}
          >
            {current === i && (
              <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-gold" />
            )}
            <div className="flex flex-col items-start">
              <span className={`text-[10px] font-bold tracking-widest mb-0.5 ${
                current === i ? 'text-gold' : 'text-gray-text group-hover:text-gold'
              }`}>
                {String(i + 1).padStart(2, '0')}
              </span>
              <span className={`text-[11px] font-bold uppercase tracking-widest transition-colors ${
                current === i ? 'text-white' : 'text-gray-text group-hover:text-white'
              }`}>
                {slide.label}
              </span>
            </div>
          </button>
        ))}
      </nav>

      <div className="px-8 mt-auto">
        <p className="text-[10px] text-gray-text/50 font-medium uppercase tracking-tighter">
          © 2025 American Dream
        </p>
      </div>
    </div>
  );
};

export default Sidebar;
