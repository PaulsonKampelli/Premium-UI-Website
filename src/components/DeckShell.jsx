import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Modal from './Modal';
import { useKeyboardNav } from '../hooks/useKeyboardNav';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const DeckShell = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [modalData, setModalData] = useState({ isOpen: false, title: '' });

  const openModal = (title) => setModalData({ isOpen: true, title });
  const closeModal = () => setModalData({ isOpen: false, title: '' });

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) setCurrentSlide(prev => prev + 1);
  };

  const prevSlide = () => {
    if (currentSlide > 0) setCurrentSlide(prev => prev - 1);
  };

  useKeyboardNav(nextSlide, prevSlide);

  return (
    <div className="flex bg-bg-primary text-white overflow-hidden h-screen select-none">
      <Sidebar 
        slides={slides} 
        current={currentSlide} 
        onNav={setCurrentSlide} 
      />

      <main className="flex-grow ml-[200px] relative">
        <div className="w-full h-full relative overflow-hidden">
          {slides.map((slide, i) => {
            const SlideComponent = slide.component;
            return (
              <div
                key={i}
                className="absolute inset-0 transition-opacity duration-600 ease-in-out"
                style={{
                  opacity: i === currentSlide ? 1 : 0,
                  pointerEvents: i === currentSlide ? 'auto' : 'none',
                  zIndex: i === currentSlide ? 10 : 0
                }}
              >
                <SlideComponent 
                  isActive={i === currentSlide} 
                  onInquire={openModal}
                  onNext={nextSlide}
                />
              </div>
            );
          })}
        </div>

        {/* Slide Counter */}
        <div className="absolute bottom-10 right-10 z-[50]">
          <span className="text-gray-text font-inter text-xs tracking-widest font-bold">
            {String(currentSlide + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
          </span>
        </div>

        {/* Navigation Arrows */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex items-center space-x-12 z-[50]">
          {currentSlide > 0 && (
            <button 
              onClick={prevSlide}
              className="text-gray-text hover:text-gold transition-colors flex items-center space-x-2 group"
            >
              <ChevronLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
              <span className="text-[10px] uppercase tracking-widest font-bold">Prev</span>
            </button>
          )}
          
          {currentSlide < slides.length - 1 && (
            <button 
              onClick={nextSlide}
              className="text-gray-text hover:text-gold transition-colors flex items-center space-x-2 group"
            >
              <span className="text-[10px] uppercase tracking-widest font-bold">Next</span>
              <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
          )}
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
