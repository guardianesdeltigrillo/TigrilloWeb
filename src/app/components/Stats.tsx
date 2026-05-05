import { motion } from 'motion/react';
import { AnimatedText } from './AnimatedText';

const stats = [
  {
    value: '2-3',
    unit: 'Kilogramos',
    label: 'Peso promedio del adulto',
  },
  {
    value: 'VU',
    unit: 'Vulnerable',
    label: 'Estado de conservación UICN',
  },
  {
    value: '1500+',
    unit: 'Metros',
    label: 'Elevación típica del hábitat',
  },
];

export const Stats = () => {
  return (
    // 1. Cambiamos el fondo a verde oscuro
    <section className="py-24 bg-[#1a432e] px-6">
      <div className="max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          {/* Textos invertidos a blanco */}
          <AnimatedText 
            text="El Tigrillo Lanudo"
            el="h2"
            className="text-4xl md:text-5xl font-serif text-white mb-6"
            delay={0.1}
          />
          
          <AnimatedText 
            text="La oncilla, también conocida como tigrillo lanudo o pequeño gato manchado, es un felino salvaje nativo de los bosques nubosos y regiones montañosas de América Central y del Sur. Con su distintivo pelaje moteado y naturaleza tímida, este felino esquivo enfrenta crecientes amenazas por la pérdida y fragmentación del hábitat."
            el="p"
            className="text-lg text-white/80 max-w-3xl mx-auto leading-relaxed"
            delay={0.3}
          />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 + (index * 0.2), duration: 0.5 }}
              className="flex flex-col items-center"
            >
              {/* 2. Círculos con estilo cristal translucido */}
              <div className="w-32 h-32 rounded-full border border-white/20 bg-white/10 flex items-center justify-center mb-6 shadow-sm backdrop-blur-sm">
                <span className="text-3xl font-bold text-white">{stat.value}</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-1">{stat.unit}</h3>
              <p className="text-white/60 text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};