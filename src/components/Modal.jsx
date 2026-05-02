import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Check } from 'lucide-react';
import { GoldButton } from './Buttons';

const Modal = ({ isOpen, onClose, title }) => {
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setSubmitted(false);
      const handleEsc = (e) => {
        if (e.key === 'Escape') onClose();
      };
      window.addEventListener('keydown', handleEsc);
      return () => window.removeEventListener('keydown', handleEsc);
    }
  }, [isOpen, onClose]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/90 z-[1000] backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.96, x: '-50%', y: '-50%' }}
            animate={{ opacity: 1, scale: 1, x: '-50%', y: '-50%' }}
            exit={{ opacity: 0, scale: 0.96, x: '-50%', y: '-50%' }}
            className="fixed top-1/2 left-1/2 w-[520px] max-w-[90vw] bg-[#111111] border-t-[3px] border-gold p-6 md:p-5 z-[1001]"
          >
            <button
              onClick={onClose}
              className="absolute top-2 md:top-4 right-2 md:right-4 p-2 md:p-4 text-gray-text hover:text-white transition-colors z-50"
              aria-label="Close Modal"
            >
              <X size={24} className="md:w-7 md:h-7" />
            </button>

            {!submitted ? (
              <>
                <h2 className="font-display text-3xl text-white mb-8">{title}</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-[10px] uppercase tracking-widest text-gray-text mb-2">Full Name *</label>
                    <input
                      required
                      type="text"
                      className="w-full bg-[#1A1A1A] border border-border-color p-3 text-white focus:outline-none focus:border-gold"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] uppercase tracking-widest text-gray-text mb-2">Company *</label>
                    <input
                      required
                      type="text"
                      className="w-full bg-[#1A1A1A] border border-border-color p-3 text-white focus:outline-none focus:border-gold"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] uppercase tracking-widest text-gray-text mb-2">Email *</label>
                      <input
                        required
                        type="email"
                        className="w-full bg-[#1A1A1A] border border-border-color p-3 text-white focus:outline-none focus:border-gold"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] uppercase tracking-widest text-gray-text mb-2">Phone</label>
                      <input
                        type="tel"
                        className="w-full bg-[#1A1A1A] border border-border-color p-3 text-white focus:outline-none focus:border-gold"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-[10px] uppercase tracking-widest text-gray-text mb-2">Message</label>
                    <textarea
                      rows={4}
                      className="w-full bg-[#1A1A1A] border border-border-color p-3 text-white focus:outline-none focus:border-gold resize-none"
                    />
                  </div>
                  <GoldButton className="w-full">Send Inquiry</GoldButton>
                </form>
              </>
            ) : (
              <div className="text-center py-12">
                <div className="inline-flex items-center justify-center w-16 height-16 bg-gold/10 text-gold mb-6">
                   <Check size={40} />
                </div>
                <h3 className="font-display text-2xl text-white mb-4">Thank you.</h3>
                <p className="text-gray-text mb-8">We'll be in touch within 24 hours.</p>
                <GoldButton onClick={onClose} className="w-full">Close Window</GoldButton>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default Modal;
