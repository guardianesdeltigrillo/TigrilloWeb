import { motion } from 'motion/react';
import { cn } from '../../lib/utils';
import { AnimatedText } from './AnimatedText';

interface ProductSection3DProps {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  reverse?: boolean;
  dark?: boolean;
}

export const ProductSection3D = ({
  id,
  title,
  subtitle,
  description,
  reverse = false,
  dark = false,
}: ProductSection3DProps) => {
  
  return (
    <section 
      id={id} 
      className={cn(
        "min-h-screen flex items-center py-20 px-6 md:px-24 overflow-hidden relative",
        dark ? "bg-[#1a432e] text-white" : "bg-[#f9f6f1] text-[#333]" 
      )}
    >
      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className={cn(
          "flex flex-col md:flex-row items-center gap-12 md:gap-24",
          reverse ? "md:flex-row-reverse" : ""
        )}>
          {/* Content */}
          <motion.div 
            initial={{ opacity: 0, x: reverse ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-1 space-y-8"
          >
            <div className="space-y-4">
              <span className={cn(
                "text-sm font-bold uppercase tracking-widest inline-block mb-2",
                dark ? "text-white/60" : "text-[#2e7d32]"
              )}>
                {subtitle}
              </span>
              
              <AnimatedText 
                text={title}
                el="h2"
                className="text-4xl md:text-5xl font-serif leading-tight"
                delay={0.2}
              />
            </div>

            <AnimatedText 
              text={description}
              el="p"
              className={cn(
                "text-lg leading-relaxed",
                dark ? "text-white/80" : "text-[#555]"
              )}
              delay={0.4}
            />
          </motion.div>

          {/* 3D Canvas Container */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-1 w-full"
          >
            <div className={cn(
              "relative aspect-square w-full max-w-lg mx-auto rounded-none overflow-hidden shadow-[8px_8px_0px_0px_rgba(0,0,0,0.1)] border border-black/5 flex items-center justify-center",
              dark ? "bg-white/5" : "bg-black/5"
            )}>
               {/* AQUÍ VA TU COMPONENTE DE SPLINE O THREE.JS */}
               <p className={cn("font-medium", dark ? "text-white/50" : "text-black/50")}>
                 Modelo 3D de Jubi
               </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};