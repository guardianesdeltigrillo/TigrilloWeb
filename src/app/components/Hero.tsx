import React from 'react';
import { motion } from 'motion/react';
import { ChevronRight, Play } from 'lucide-react';
import tigrilloImage from '../../imports/image-1.png';

export const Hero = () => {
  return (
    <section id="inicio" className="relative h-screen w-full flex items-center justify-start px-6 md:px-24 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={tigrilloImage}
          alt="Tigrillo Lanudo en su hábitat natural"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent" />
      </div>

      <div className="relative z-10 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-white text-sm font-medium mb-6">
            Leopardus tigrinus
          </span>
          <h1 className="text-5xl md:text-7xl font-serif text-white mb-6 leading-tight">
            Tigrillo Lanudo
          </h1>
          <p className="text-xl text-white/90 mb-10 leading-relaxed max-w-2xl">
            Un centro de conocimiento digital dedicado a la conservación, investigación y celebración de uno de los felinos silvestres más esquivos de Sudamérica.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <button className="px-8 py-4 bg-[#1a432e] text-white rounded-lg font-semibold flex items-center gap-2 hover:bg-[#2e7d32] transition-colors shadow-lg">
              Explorar Conservación
              <ChevronRight size={20} />
            </button>
            <button className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/30 text-white rounded-lg font-semibold flex items-center gap-2 hover:bg-white/20 transition-colors">
              Ver Galería
            </button>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/60 flex flex-col items-center gap-2"
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-white rounded-full" />
        </div>
      </motion.div>
    </section>
  );
};
