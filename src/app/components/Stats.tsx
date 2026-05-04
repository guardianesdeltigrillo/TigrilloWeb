import { motion } from 'motion/react';

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
    <section className="py-24 bg-[#f9f6f1] px-6">
      <div className="max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-serif text-[#1a432e] mb-6">El Tigrillo Lanudo</h2>
          <p className="text-lg text-[#555] max-w-3xl mx-auto mb-16 leading-relaxed">
            La oncilla, también conocida como tigrillo lanudo o pequeño gato manchado, es un felino salvaje nativo de los bosques nubosos y regiones montañosas de América Central y del Sur. Con su distintivo pelaje moteado y naturaleza tímida, este felino esquivo enfrenta crecientes amenazas por la pérdida y fragmentación del hábitat.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              className="flex flex-col items-center"
            >
              <div className="w-32 h-32 rounded-full border border-[#1a432e]/10 bg-white flex items-center justify-center mb-6 shadow-sm">
                <span className="text-3xl font-bold text-[#1a432e]">{stat.value}</span>
              </div>
              <h3 className="text-xl font-bold text-[#1a432e] mb-1">{stat.unit}</h3>
              <p className="text-[#666] text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
