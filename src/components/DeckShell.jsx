import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import Modal from './Modal';
import { useKeyboardNav } from '../hooks/useKeyboardNav';
import { ChevronLeft, ChevronRight, Maximize, Play, Info, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Suspense } from 'react';

const DeckShell = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [modalData, setModalData] = useState({ isOpen: false, title: '' });

  const openModal = (title) => setModalData({ isOpen: true, title });
  const closeModal = () => setModalData({ isOpen: false, title: '' });

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setDirection(1);
      setCurrentSlide(prev => prev + 1);
      setIsSidebarOpen(false);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setDirection(-1);
      setCurrentSlide(prev => prev - 1);
      setIsSidebarOpen(false);
    }
  };

  const jumpToSlide = (index) => {
    setDirection(index > currentSlide ? 1 : -1);
    setCurrentSlide(index);
    setIsSidebarOpen(false);
  };

  useKeyboardNav(nextSlide, prevSlide);

  // Variants for the sliding transition
  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? '20%' : '-20%',
      opacity: 0,
      filter: 'blur(10px)'
    }),
    center: {
      x: 0,
      opacity: 1,
      filter: 'blur(0px)',
      transition: {
        x: { type: "spring", stiffness: 400, damping: 40 },
        opacity: { duration: 0.3 },
        filter: { duration: 0.3 }
      }
    },
    exit: (direction) => ({
      x: direction < 0 ? '20%' : '-20%',
      opacity: 0,
      filter: 'blur(10px)',
      transition: {
        x: { type: "spring", stiffness: 400, damping: 40 },
        opacity: { duration: 0.25 },
        filter: { duration: 0.25 }
      }
    }),
  };

  const SlideComponent = slides[currentSlide].component;

  return (
    <div className="flex bg-bg-primary text-white overflow-hidden h-screen h-dvh select-none font-inter">
      {/* Mobile Menu Toggle */}
      <button 
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className="fixed top-6 right-6 z-[110] md:hidden p-3 bg-gold text-black shadow-2xl active:scale-90 transition-transform"
        aria-label="Toggle Menu"
      >
        {isSidebarOpen ? <X size={20} /> : <Play size={20} className="rotate-90" />}
      </button>

      <Sidebar 
        slides={slides} 
        current={currentSlide} 
        onNav={jumpToSlide} 
        isOpen={isSidebarOpen}
      />

      <main className="flex-grow relative bg-[#050505] md:ml-[200px]">
        {/* Top Progress Bar */}
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-white/5 z-50">
          <motion.div 
            className="h-full bg-gold shadow-[0_0_10px_rgba(201,168,76,0.5)]"
            initial={{ width: 0 }}
            animate={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
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
              className="absolute inset-0 z-10"
            >
              <Suspense fallback={
                <div className="h-full w-full flex items-center justify-center bg-bg-primary">
                  <div className="w-8 h-8 border-2 border-gold border-t-transparent animate-spin" />
                </div>
              }>
                <SlideComponent 
                  isActive={true} 
                  onInquire={openModal}
                  onNext={nextSlide}
                />
              </Suspense>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Deck Navigation Controls */}
        <div className="absolute bottom-4 left-4 right-4 md:bottom-10 md:right-10 md:left-auto flex items-center justify-between md:justify-end md:space-x-6 z-[100]">
          <div className="bg-black/60 backdrop-blur-xl border border-white/10 p-2 md:p-3 px-4 md:px-6 flex items-center space-x-6 shadow-2xl">
            <div className="flex flex-col items-end">
              <span className="text-[8px] md:text-[10px] uppercase tracking-[0.2em] font-bold text-gold mb-0.5">Slide</span>
              <span className="text-base md:text-xl font-display font-bold leading-none">
                {String(currentSlide + 1).padStart(2, '0')} <span className="text-white/30 text-xs md:text-sm font-inter font-normal">/ {String(slides.length).padStart(2, '0')}</span>
              </span>
            </div>

            <div className="flex border-l border-white/10 ml-4">
              <button 
                onClick={prevSlide}
                disabled={currentSlide === 0}
                className={`p-3 md:p-4 transition-colors ${currentSlide === 0 ? 'text-white/5' : 'text-white hover:text-gold active:scale-90'}`}
              >
                <ChevronLeft size={24} />
              </button>
              <button 
                onClick={nextSlide}
                disabled={currentSlide === slides.length - 1}
                className={`p-3 md:p-4 border-l border-white/10 transition-colors ${currentSlide === slides.length - 1 ? 'text-white/5' : 'text-white hover:text-gold active:scale-90'}`}
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
        </div>

        {/* Utility Bar - Desktop Only */}
        <div className="hidden md:flex absolute top-10 right-10 space-x-4 z-[100]">
           <button onClick={() => window.location.reload()} className="p-2 text-white/30 hover:text-white transition-colors" title="Reset Presentation">
              <Play size={14} />
           </button>
           <button onClick={() => {
              if (!document.fullscreenElement) {
                document.documentElement.requestFullscreen();
              } else {
                document.exitFullscreen();
              }
           }} className="p-2 text-white/30 hover:text-white transition-colors" title="Full Screen">
              <Maximize size={14} />
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
