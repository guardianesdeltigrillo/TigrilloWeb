import { motion } from 'motion/react';
import { AlertTriangle, Scale, Mountain } from 'lucide-react';
import { AnimatedText } from './AnimatedText';

// Importamos el fondo
import fondo1 from '../../imports/fondo 1.png';

const stats = [
  {
    value: '2-3',
    unit: 'Kilogramos',
    label: 'Peso promedio del adulto',
    Icon: Scale,
    iconColor: 'text-white',
  },
  {
    value: 'VU', 
    unit: 'Vulnerable',
    label: 'Estado de conservación UICN',
    Icon: AlertTriangle,
    iconColor: 'text-red-500', 
  },
  {
    value: '1500+',
    unit: 'Metros',
    label: 'Elevación típica del hábitat',
    Icon: Mountain,
    iconColor: 'text-white',
  },
];

export const Stats = () => {
  return (
    <section 
      className="py-24 bg-[#1a432e] px-6"
      style={{ 
        backgroundImage: `url('${fondo1}')`, 
        backgroundSize: 'cover', 
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-16"
        >
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
              <div className="w-32 h-32 rounded-full border border-white/20 bg-white/10 flex items-center justify-center mb-6 shadow-sm backdrop-blur-sm">
                <stat.Icon 
                  className={`w-14 h-14 drop-shadow-md ${stat.iconColor}`} 
                  strokeWidth={1.5} 
                />
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-1">
                {stat.value === 'VU' ? stat.unit : `${stat.value} ${stat.unit}`}
              </h3>
              <p className="text-white/60 text-sm text-center max-w-[200px]">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};