import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ChevronRight } from 'lucide-react';
import { cn } from '../../lib/utils';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { AnimatedText } from './AnimatedText';

interface ProductSectionProps {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  reverse?: boolean;
  buttonText?: string;
  buttonLink?: string;
  dark?: boolean;
  objectives?: string[]; 
}

export const ProductSection = ({
  id,
  title,
  subtitle,
  description,
  image,
  reverse = false,
  buttonText, 
  buttonLink, 
  dark = false,
  objectives,
}: ProductSectionProps) => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const yImage = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

  return (
    <section 
      ref={sectionRef} 
      id={id} 
      className={cn(
        "min-h-screen flex items-center py-20 px-6 md:px-24 overflow-hidden relative",
        dark ? "bg-[#1a432e] text-white" : "bg-[#f9f6f1] text-[#333]" 
      )}
    >
      {dark && (
        <motion.div 
          className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none"
          style={{ 
            backgroundImage: 'radial-gradient(#ffffff 2px, transparent 2px)',
            backgroundSize: '24px 24px',
            y: useTransform(scrollYProgress, [0, 1], ["0%", "-10%"])
          }} 
        />
      )}

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

            {/* Listado de Objetivos */}
            {objectives && objectives.length > 0 && (
              <ul className="space-y-4 mt-6">
                {objectives.map((obj, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.6 + (index * 0.1) }}
                    className="flex items-start gap-3"
                  >
                    <div className={cn(
                      "mt-2 w-2 h-2 shrink-0 border border-current rounded-sm",
                      dark ? "bg-white/20 text-white" : "bg-[#1a432e]/20 text-[#1a432e]"
                    )} />
                    <span className={cn(
                      "text-base md:text-lg font-medium leading-relaxed",
                      dark ? "text-white/90" : "text-[#444]"
                    )}>
                      {obj}
                    </span>
                  </motion.li>
                ))}
              </ul>
            )}
            
            {/* Botón Condicional */}
            {(buttonText && buttonLink) && (
              <a 
                href={buttonLink}
                className={cn(
                  "px-8 py-4 font-semibold inline-flex items-center gap-2 transition-all group w-fit mt-4",
                  dark 
                    ? "bg-white text-[#1a432e] hover:bg-white/90" 
                    : "bg-[#1a432e] text-white hover:bg-[#2e7d32]",
                  "rounded-none shadow-[4px_4px_0px_0px_rgba(0,0,0,0.15)] hover:shadow-none hover:translate-x-1 hover:translate-y-1"
                )}
              >
                {buttonText}
                <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
            )}
          </motion.div>

          {/* Imagen Parallax */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-1 w-full"
          >
            <div className="relative aspect-[4/3] rounded-none overflow-hidden shadow-[8px_8px_0px_0px_rgba(0,0,0,0.1)] border border-black/5">
              <motion.div 
                style={{ y: yImage }} 
                className="absolute inset-0 w-full h-full"
              >
                <ImageWithFallback
                  src={image}
                  alt={title}
                  className="w-full h-full object-cover scale-[1.25]"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};