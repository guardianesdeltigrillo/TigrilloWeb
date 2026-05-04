import { useRef, ElementType } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Scan, Brain, MessageCircle, Video, ArrowRight } from 'lucide-react';
import { cn } from '../../lib/utils';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { AnimatedText } from './AnimatedText';

interface Product {
  id: string;
  title: string;
  description: string;
  icon: ElementType;
  image: string;
  action: string;
  color: string;
  link: string;
}

// ... [Mantén tu arreglo const products: Product[] = [...] exactamente igual] ...
const products: Product[] = [
  {
    id: 'cedula-ar',
    title: 'CÉDULA AR',
    description: 'Lleva la conservación a tu realidad. Escanea la cédula del tigrillo y desbloquea un modelo 3D interactivo para explorar sus rasgos y secretos en un entorno inmersivo.',
    icon: Scan,
    image: 'https://images.unsplash.com/photo-1617802690658-1173a812650d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
    action: 'Escanear Ahora',
    color: 'from-emerald-500/80 to-green-900/90',
    link: '#cedula-ar', 
  },
  {
    id: 'triviazoo',
    title: 'TRIVIAZOO',
    description: '¿Cuánto sabes sobre el Guardián de los Andes? Pon a prueba tu destreza en un desafío de trivia diseñado para aprender divirtiéndote sobre la biodiversidad y la protección del tigrillo.',
    icon: Brain,
    image: 'https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
    action: 'Jugar Trivia',
    color: 'from-amber-500/80 to-orange-900/90',
    link: '#triviazoo',
  },
  {
    id: 'bot-jubi',
    title: 'BOT JUBI',
    description: 'Conversa con el alma del bosque. Jubi, nuestro bot inteligente, te acompaña en una charla dinámica para resolver tus dudas y enseñarte todo sobre su hábitat en tiempo real.',
    icon: MessageCircle,
    image: 'https://images.unsplash.com/photo-1614680376593-902f74cf0d41?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
    action: 'Chatear con Jubi',
    color: 'from-teal-500/80 to-cyan-900/90',
    link: '#bot-jubi', 
  },
  {
    id: 'entrevista',
    title: 'ENTREVISTA',
    description: 'Voces expertas por la vida silvestre. Sumérgete en una charla profunda con los especialistas que dedican su vida a la protección y cuidado del tigrillo en un encuentro exclusivo.',
    icon: Video,
    image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
    action: 'Ver Entrevista',
    color: 'from-blue-500/80 to-indigo-900/90',
    link: '#entrevista',
  }
];

export const ProductGrid = () => {
  const ref = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  // Velocidades parallax para los distintos elementos decorativos
  const yShape1 = useTransform(scrollYProgress, [0, 1], ["-15%", "25%"]);
  const yShape2 = useTransform(scrollYProgress, [0, 1], ["20%", "-20%"]);
  const yShape3 = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <section ref={ref} className="py-24 bg-[#0d2419] px-6 relative overflow-hidden">
      
      {/* CAPA DE FONDO PARALLAX GEOMÉTRICO */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        {/* Cuadro angulado gigante */}
        <motion.div 
          style={{ y: yShape1, rotate: 15 }} 
          className="absolute -top-10 -left-32 w-[500px] h-[500px] border-[40px] border-emerald-500/10 rounded-sm"
        />
        
        {/* Textura Halftone de alto contraste */}
        <motion.div 
          style={{ 
            y: yShape2, 
            backgroundImage: 'radial-gradient(rgba(255,255,255,0.08) 2px, transparent 2px)',
            backgroundSize: '16px 16px' 
          }} 
          className="absolute top-1/4 -right-10 w-2/3 h-2/3"
        />
        
        {/* Acento geométrico inferior */}
        <motion.div 
          style={{ y: yShape3, rotate: -25 }} 
          className="absolute -bottom-20 right-20 w-80 h-80 bg-white/5 shadow-2xl"
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <AnimatedText 
            text="Explora Nuestro Ecosistema Digital"
            el="h2"
            className="text-4xl md:text-5xl font-serif text-white mb-6 uppercase tracking-tight"
            delay={0.1}
          />
          
          <AnimatedText 
            text="Descubre formas interactivas de conectar con la naturaleza. Cada una de nuestras herramientas está diseñada para educar y movilizar la conservación del tigrillo lanudo."
            el="p"
            className="text-lg text-white/70 max-w-2xl mx-auto leading-relaxed"
            delay={0.4}
          />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {products.map((product, index) => (
            <motion.a
              href={product.link}
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 + (index * 0.1) }}
              className="group relative overflow-hidden rounded-none aspect-[4/3] md:aspect-auto md:h-[420px] shadow-2xl flex items-end cursor-pointer border border-white/10"
            >
              {/* Imagen con un ligero zoom parallax al hacer hover */}
              <div className="absolute inset-0 z-0">
                <ImageWithFallback
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              
              <div className={cn(
                "absolute inset-0 z-10 bg-gradient-to-t opacity-90 transition-opacity duration-300 group-hover:opacity-95",
                product.color
              )} />
              
              <div className="relative z-20 p-8 md:p-10 w-full h-full flex flex-col justify-end">
                <div className="transform transition-transform duration-500 group-hover:-translate-y-2">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-sm bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/30 text-white">
                      <product.icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-3xl font-black tracking-widest text-white drop-shadow-md uppercase">
                      {product.title}
                    </h3>
                  </div>
                  
                  <div className="h-0 opacity-0 group-hover:h-auto group-hover:opacity-100 group-hover:mb-6 transition-all duration-500 overflow-hidden">
                    <p className="text-white/90 text-lg leading-relaxed font-medium">
                      {product.description}
                    </p>
                  </div>

                  <div className="flex items-center gap-2 text-white font-bold group/btn uppercase tracking-widest text-sm">
                    <span className="border-b-2 border-transparent pb-1 transition-all group-hover/btn:border-white">
                      {product.action}
                    </span>
                    <ArrowRight className="w-5 h-5 transition-transform group-hover/btn:translate-x-2" />
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};