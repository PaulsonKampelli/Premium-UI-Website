import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import Modal from './Modal';
import { useKeyboardNav } from '../hooks/useKeyboardNav';
import { ChevronLeft, ChevronRight, Maximize, Play, Info } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const DeckShell = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);
  const [modalData, setModalData] = useState({ isOpen: false, title: '' });

  const openModal = (title) => setModalData({ isOpen: true, title });
  const closeModal = () => setModalData({ isOpen: false, title: '' });

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setDirection(1);
      setCurrentSlide(prev => prev + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setDirection(-1);
      setCurrentSlide(prev => prev - 1);
    }
  };

  const jumpToSlide = (index) => {
    setDirection(index > currentSlide ? 1 : -1);
    setCurrentSlide(index);
  };

  useKeyboardNav(nextSlide, prevSlide);

  // Variants for the sliding transition
  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      x: direction < 0 ? '100%' : '-100%',
      opacity: 0,
    },
  };

  const SlideComponent = slides[currentSlide].component;

  return (
    <div className="flex bg-bg-primary text-white overflow-hidden h-screen select-none font-inter">
      <Sidebar 
        slides={slides} 
        current={currentSlide} 
        onNav={jumpToSlide} 
      />

      <main className="flex-grow ml-[200px] relative bg-[#050505]">
        {/* Top Progress Bar */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-white/5 z-50">
          <motion.div 
            className="h-full bg-gold"
            initial={{ width: 0 }}
            animate={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
            transition={{ type: 'spring', damping: 20 }}
          />
        </div>

        <div className="w-full h-full relative overflow-hidden">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentSlide}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.4 }
              }}
              className="absolute inset-0"
            >
              <SlideComponent 
                isActive={true} 
                onInquire={openModal}
                onNext={nextSlide}
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Deck Navigation Controls (Digideck Style) */}
        <div className="absolute bottom-10 right-10 flex items-center space-x-6 z-[100] bg-black/40 backdrop-blur-md border border-white/10 p-2 pl-6">
          <div className="flex flex-col items-end">
            <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-gold mb-1">Slide</span>
            <span className="text-xl font-display font-bold leading-none">
              {String(currentSlide + 1).padStart(2, '0')} <span className="text-white/30 text-sm font-inter">/ {String(slides.length).padStart(2, '0')}</span>
            </span>
          </div>

          <div className="flex border-l border-white/10 ml-4">
            <button 
              onClick={prevSlide}
              disabled={currentSlide === 0}
              className={`p-4 transition-colors ${currentSlide === 0 ? 'text-white/10' : 'text-white hover:bg-gold hover:text-black'}`}
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={nextSlide}
              disabled={currentSlide === slides.length - 1}
              className={`p-4 border-l border-white/10 transition-colors ${currentSlide === slides.length - 1 ? 'text-white/10' : 'text-white hover:bg-gold hover:text-black'}`}
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        {/* Utility Bar */}
        <div className="absolute top-10 right-10 flex space-x-4 z-[100]">
           <button onClick={() => window.location.reload()} className="p-2 text-white/30 hover:text-white transition-colors" title="Reset Presentation">
              <Play size={16} />
           </button>
           <button onClick={() => document.documentElement.requestFullscreen()} className="p-2 text-white/30 hover:text-white transition-colors" title="Full Screen">
              <Maximize size={16} />
           </button>
        </div>
      </main>

      <Modal 
        isOpen={modalData.isOpen} 
        onClose={closeModal} 
        title={modalData.title} 
      />
    </div>
  );
};

export default DeckShell;
