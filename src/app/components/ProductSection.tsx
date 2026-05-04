import { motion } from 'motion/react';
import { ChevronRight } from 'lucide-react';
import { cn } from '../../lib/utils';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { AnimatedText } from './AnimatedText'; // <-- Importamos la animación

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
}

export const ProductSection = ({
  id,
  title,
  subtitle,
  description,
  image,
  reverse = false,
  buttonText = 'Explorar',
  buttonLink = '#',
  dark = false,
}: ProductSectionProps) => {
  return (
    <section 
      id={id} 
      className={cn(
        "min-h-screen flex items-center py-20 px-6 md:px-24",
        dark ? "bg-[#1a432e] text-white" : "bg-white text-[#333]"
      )}
    >
      <div className="max-w-7xl mx-auto w-full">
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
                "text-sm font-bold uppercase tracking-widest",
                dark ? "text-white/60" : "text-[#2e7d32]"
              )}>
                {subtitle}
              </span>
              
              {/* Título Animado */}
              <AnimatedText 
                text={title}
                el="h2"
                className="text-4xl md:text-5xl font-serif leading-tight"
                delay={0.2}
              />
            </div>

            {/* Descripción Animada */}
            <AnimatedText 
              text={description}
              el="p"
              className={cn(
                "text-lg leading-relaxed",
                dark ? "text-white/80" : "text-[#555]"
              )}
              delay={0.4}
            />
            
            <a 
              href={buttonLink}
              className={cn(
                "px-8 py-4 rounded-lg font-semibold inline-flex items-center gap-2 transition-all group w-fit",
                dark 
                  ? "bg-white text-[#1a432e] hover:bg-white/90" 
                  : "bg-[#1a432e] text-white hover:bg-[#2e7d32]"
              )}
            >
              {buttonText}
              <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>

          {/* Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-1 w-full"
          >
            <div className="relative aspect-4/3 rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src={image}
                alt={title}
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};