import React from 'react';
import { motion } from 'motion/react';
import { Scan, Brain, MessageCircle, Video, ArrowRight } from 'lucide-react';
import { cn } from '../../lib/utils';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface Product {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType;
  image: string;
  action: string;
  color: string;
  link: string;
}

const products: Product[] = [
  {
    id: 'cedula-ar',
    title: 'CÉDULA AR',
    description: 'Escanea la cédula del tigrillo desde tu celular y descubre un modelo 3D interactivo con datos curiosos fascinantes',
    icon: Scan,
    image: 'https://images.unsplash.com/photo-1617802690658-1173a812650d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
    action: 'Escanear Ahora',
    color: 'from-emerald-600/90 to-green-900/90',
    link: '#cedula-ar', 
  },
  {
    id: 'triviazoo',
    title: 'TRIVIAZOO',
    description: 'Pon a prueba tus conocimientos con nuestro juego de trivia móvil sobre el tigrillo lanudo y la conservación',
    icon: Brain,
    image: 'https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
    action: 'Jugar Trivia',
    color: 'from-amber-600/90 to-orange-900/90',
    link: '#triviazoo',
  },
  {
    id: 'bot-jubi',
    title: 'BOT JUBI',
    description: 'Chatea con Jubi, nuestro bot de WhatsApp con la personalidad del tigrillo. Aprende mientras conversas',
    icon: MessageCircle,
    image: 'https://images.unsplash.com/photo-1614680376593-902f74cf0d41?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
    action: 'Chatear en WhatsApp',
    color: 'from-teal-600/90 to-cyan-900/90',
    link: '#bot-jubi', 
  },
  {
    id: 'entrevista',
    title: 'ENTREVISTA',
    description: 'Mira nuestra entrevista exclusiva en YouTube con expertos del zoológico que cuidan al tigrillo lanudo',
    icon: Video,
    image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
    action: 'Ver Entrevista',
    color: 'from-blue-600/90 to-indigo-900/90',
    link: '#entrevista',
  }
];

export const ProductGrid = () => {
  return (
    <section className="py-24 bg-white px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif text-[#1a432e] mb-6">Explora Nuestro Ecosistema</h2>
          <p className="text-lg text-[#555] max-w-2xl mx-auto">
            Descubre formas interactivas de aprender y ayudar en la conservación del tigrillo lanudo a través de nuestras experiencias digitales.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {products.map((product, index) => (
            <motion.a
              href={product.link}
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl aspect-[4/3] md:aspect-auto md:h-[400px] shadow-xl flex items-end cursor-pointer"
            >
              <div className="absolute inset-0 z-0">
                <ImageWithFallback
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className={cn("absolute inset-0 z-10 bg-gradient-to-t opacity-90 transition-opacity duration-300", product.color)} />
              
              <div className="relative z-20 p-8 md:p-10 w-full h-full flex flex-col justify-end">
                <div className="transform transition-transform duration-500 group-hover:-translate-y-4">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30 text-white">
                      <product.icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-2xl font-bold tracking-wider text-white">{product.title}</h3>
                  </div>
                  
                  <div className="h-0 opacity-0 group-hover:h-auto group-hover:opacity-100 group-hover:mb-6 transition-all duration-500 overflow-hidden">
                    <p className="text-white/90 text-lg leading-relaxed">
                      {product.description}
                    </p>
                  </div>

                  <div className="flex items-center gap-2 text-white font-semibold group/btn">
                    <span className="border-b-2 border-white/50 pb-1 transition-all group-hover/btn:border-white">
                      {product.action}
                    </span>
                    <ArrowRight className="w-5 h-5 transition-transform group-hover/btn:translate-x-1" />
                  </div>
                </div>
              </div>

              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};