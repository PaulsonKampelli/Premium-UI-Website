import React from 'react';

const Sidebar = ({ slides, current, onNav }) => {
  // Group slides by chapter
  const chapters = slides.reduce((acc, slide, index) => {
    if (!acc[slide.chapter]) acc[slide.chapter] = [];
    acc[slide.chapter].push({ ...slide, index });
    return acc;
  }, {});

  return (
    <div className="fixed left-0 top-0 h-screen w-[200px] bg-[#050505] border-r border-white/5 z-[100] flex flex-col py-12">
      <div className="px-8 mb-12">
        <h1 className="font-display text-4xl text-gold font-bold tracking-tighter">AD</h1>
        <p className="text-[9px] uppercase tracking-[0.3em] text-white/40 mt-1 font-bold">Sales Deck</p>
      </div>

      <div className="flex-grow overflow-y-auto overflow-x-hidden px-4 space-y-8">
        {Object.entries(chapters).map(([chapterName, chapterSlides]) => (
          <div key={chapterName} className="space-y-2">
            <h3 className="px-4 text-[9px] uppercase tracking-[0.4em] text-gold/50 font-black">
              {chapterName}
            </h3>
            <div className="space-y-1">
              {chapterSlides.map((slide) => (
                <button
                  key={slide.index}
                  onClick={() => onNav(slide.index)}
                  className={`w-full group relative flex items-center px-4 py-2 transition-all duration-300 ${
                    current === slide.index ? 'bg-white/5' : 'hover:bg-white/5'
                  }`}
                >
                  {current === slide.index && (
                    <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gold" />
                  )}
                  <span className={`text-[10px] font-bold w-6 ${
                    current === slide.index ? 'text-gold' : 'text-white/20 group-hover:text-gold/50'
                  }`}>
                    {String(slide.index + 1).padStart(2, '0')}
                  </span>
                  <span className={`text-[10px] font-bold uppercase tracking-widest transition-colors ${
                    current === slide.index ? 'text-white' : 'text-white/40 group-hover:text-white'
                  }`}>
                    {slide.label}
                  </span>
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="px-8 mt-auto pt-8">
        <p className="text-[9px] text-white/20 font-medium uppercase tracking-tighter">
          © 2025 American Dream
        </p>
      </div>
    </div>
  );
};

export default Sidebar;
