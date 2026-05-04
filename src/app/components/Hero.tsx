import { motion } from 'motion/react';
import { ChevronRight } from 'lucide-react';
import tigrilloImage from '../../imports/image-1.png';
import { AnimatedText } from './AnimatedText'; 

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
        {/* Oscurecí un poco el gradiente para que el texto resalte más */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
      </div>

      <div className="relative z-10 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <span className="inline-block px-4 py-1.5 bg-white/20 backdrop-blur-md border border-white/30 rounded-full text-white text-sm font-medium mb-6 tracking-wide shadow-lg">
            Leopardus tigrinus
          </span>
        </motion.div>

        {/* 1. TÍTULO ANIMADO */}
        <AnimatedText 
          text="Tigrillo Lanudo"
          el="h1"
          className="text-5xl md:text-7xl font-serif text-white mb-6 leading-tight drop-shadow-xl"
          delay={0.2}
        />

        {/* 2. DESCRIPCIÓN ANIMADA */}
        <AnimatedText 
          text="Un ecosistema digital inmersivo dedicado a la conservación, investigación y celebración de uno de los felinos silvestres más esquivos y fascinantes de los Andes."
          el="p"
          className="text-xl md:text-2xl text-white/90 mb-10 leading-relaxed max-w-2xl font-light"
          delay={0.6} // Empieza justo cuando el título está terminando
        />
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }} // Aparecen después de los textos
          className="flex flex-wrap gap-4"
        >
          <button className="px-8 py-4 bg-[#2e7d32] text-white rounded-lg font-semibold flex items-center gap-2 hover:bg-[#1a432e] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
            Explorar Conservación
            <ChevronRight size={20} className="animate-pulse" />
          </button>
          <button className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/30 text-white rounded-lg font-semibold flex items-center gap-2 hover:bg-white/20 transition-all duration-300 hover:shadow-lg">
            Ver Galería
          </button>
        </motion.div>
      </div>

      {/* Scroll indicator interactivo */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/60 flex flex-col items-center gap-2"
      >
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center p-1 backdrop-blur-sm"
        >
          <div className="w-1.5 h-2.5 bg-white rounded-full shadow-glow" />
        </motion.div>
      </motion.div>
    </section>
  );
};