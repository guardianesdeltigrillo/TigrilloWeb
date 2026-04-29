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
  link: string; // 1. Added link property
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
    link: '#', // Add your link here
  },
  {
    id: 'triviazoo',
    title: 'TRIVIAZOO',
    description: 'Pon a prueba tus conocimientos con nuestro juego de trivia móvil sobre el tigrillo lanudo y la conservación',
    icon: Brain,
    image: 'https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
    action: 'Jugar Trivia',
    color: 'from-amber-600/90 to-orange-900/90',
    link: '#', // Add your link here
  },
  {
    id: 'bot-jubi',
    title: 'BOT JUBI',
    description: 'Chatea con Jubi, nuestro bot de WhatsApp con la personalidad del tigrillo. Aprende mientras conversas',
    icon: MessageCircle,
    image: 'https://images.unsplash.com/photo-1614680376593-902f74cf0d41?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
    action: 'Chatear en WhatsApp',
    color: 'from-teal-600/90 to-cyan-900/90',
    link: 'https://wa.me/yournumber', // Example WhatsApp link
  },
  {
    id: 'entrevista',
    title: 'ENTREVISTA',
    description: 'Mira nuestra entrevista exclusiva en YouTube con expertos del zoológico que cuidan al tigrillo lanudo',
    icon: Video,
    image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
    action: 'Ver en YouTube',
    color: 'from-red-600/90 to-rose-900/90',
    link: 'https://youtube.com/your-video', // Example YouTube link
  },
];

export const ProductGrid = () => {
  return (
    <section className="min-h-screen flex items-center py-20 px-6 md:px-24 bg-gradient-to-br from-[#1a432e] to-[#0d2419]">
      <div className="max-w-7xl mx-auto w-full">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-white/60 text-sm font-bold uppercase tracking-widest">
            Experiencias Interactivas
          </span>
          <h2 className="text-4xl md:text-6xl font-serif text-white mt-4 mb-6">
            Explora Nuestros Productos
          </h2>
          <p className="text-white/80 text-lg max-w-3xl mx-auto">
            Descubre formas innovadoras de conectar con el tigrillo lanudo a través de tecnología y educación
          </p>
        </motion.div>

        {/* Grid de productos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {products.map((product, index) => (
            <motion.a // 2. Changed from motion.div to motion.a
              key={product.id}
              href={product.link} // 3. Added href
              target="_blank" // Opens in new tab
              rel="noopener noreferrer" // Security best practice
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl aspect-[4/3] cursor-pointer block" // Added block
            >
              {/* Imagen de fondo */}
              <div className="absolute inset-0 transition-transform duration-500 group-hover:scale-110">
                <ImageWithFallback
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Overlay gradient */}
              <div className={cn(
                "absolute inset-0 bg-gradient-to-br opacity-80 transition-opacity duration-300 group-hover:opacity-90",
                product.color
              )} />

              {/* Contenido */}
              <div className="relative h-full p-8 flex flex-col justify-between">
                {/* Icono */}
                <div className="flex justify-end">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-3 transition-transform duration-300 group-hover:scale-110">
                    <product.icon className="w-6 h-6 text-white" />
                  </div>
                </div>

                {/* Texto */}
                <div className="space-y-4">
                  <div>
                    <h3 className="text-3xl md:text-4xl font-bold text-white mb-3">
                      {product.title}
                    </h3>
                    <p className="text-white/90 text-sm md:text-base leading-relaxed">
                      {product.description}
                    </p>
                  </div>

                  {/* Botón (visual) */}
                  <div className="flex items-center gap-2 text-white font-semibold group/btn">
                    <span className="border-b-2 border-white/50 pb-1 transition-all group-hover/btn:border-white">
                      {product.action}
                    </span>
                    <ArrowRight className="w-5 h-5 transition-transform group-hover/btn:translate-x-1" />
                  </div>
                </div>
              </div>

              {/* Efecto de brillo al hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent" />
              </div>
            </motion.a>
          ))}
        </div>

        {/* Call to action adicional */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-16"
        >
          <p className="text-white/70 text-sm">
            ¿Tienes ideas para más experiencias? 
            <button className="ml-2 text-white underline hover:text-white/80 transition-colors">
              Contáctanos
            </button>
          </p>
        </motion.div>
      </div>
    </section>
  );
};