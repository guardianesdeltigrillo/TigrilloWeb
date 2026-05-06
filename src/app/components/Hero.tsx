import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import tigrilloImage from '../../imports/image-1.png';
import { AnimatedText } from './AnimatedText';

export const Hero = () => {
  const ref = useRef(null);
  
  // 1. Hook para detectar el scroll en esta sección
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  // 2. Transformaciones Parallax (Multi-capa)
  // La imagen baja lentamente (creando profundidad)
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  // La textura de puntos sube, creando contraste de movimiento
  const yPattern = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);
  // El texto frontal se desvanece y sube ligeramente
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacityText = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} id="inicio" className="relative h-screen w-full flex items-center justify-start px-6 md:px-24 overflow-hidden bg-black">
      
      {/* --- CAPA 1: FONDO PARALLAX --- */}
      <motion.div 
        className="absolute inset-0 z-0" 
        style={{ y: yBg }}
      >
        {/* Usamos scale-110 para que al moverse no se vean los bordes cortados */}
        <img
          src={tigrilloImage}
          alt="Tigrillo Lanudo en su hábitat natural"
          className="w-full h-full object-cover scale-[1.15]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent" />
      </motion.div>

      {/* --- CAPA 2: TEXTURA GEOMÉTRICA (Alto Contraste) --- */}
      <motion.div 
        className="absolute inset-0 z-0 opacity-[0.15] pointer-events-none"
        style={{ 
          y: yPattern,
          backgroundImage: 'radial-gradient(#ffffff 1.5px, transparent 1.5px)',
          backgroundSize: '24px 24px'
        }} 
      />

      {/* --- CAPA 3: CONTENIDO FRONTAL --- */}
      <motion.div 
        className="relative z-10 max-w-3xl"
        style={{ y: yText, opacity: opacityText }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <span className="inline-block px-4 py-1.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-sm text-white text-sm font-bold uppercase tracking-widest mb-6 shadow-lg">
            Tigrillo Lanudo(Leopardus tigrinus)
          </span>
        </motion.div>

        <AnimatedText 
          text="Zooteka"
          el="h1"
          className="text-5xl md:text-7xl font-serif text-white mb-6 leading-tight drop-shadow-2xl"
          delay={0.2}
        />

        <AnimatedText 
          text="Un ecosistema digital inmersivo dedicado a la conservación, investigación y celebración de uno de los felinos silvestres más esquivos y fascinantes de los Andes."
          el="p"
          className="text-xl md:text-2xl text-white/80 mb-10 leading-relaxed max-w-2xl font-light"
          delay={0.6} 
        />
      </motion.div>

      {/* Indicador de Scroll */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/60 flex flex-col items-center gap-2"
      >
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="w-6 h-10 border-2 border-white/40 flex justify-center p-1 backdrop-blur-sm"
        >
          <div className="w-1.5 h-2.5 bg-white shadow-glow" />
        </motion.div>
      </motion.div>
    </section>
  );
};