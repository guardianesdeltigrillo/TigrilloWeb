import { FC } from 'react';
import { motion } from 'motion/react';
import { ExternalLink } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { AnimatedText } from './AnimatedText';

interface Partner {
  id: string;
  name: string;
  logo: string;
  website?: string;
  description?: string;
}

const partnersData: Partner[] = [
  {
    id: '1',
    name: 'Fundación Naturaleza',
    logo: 'https://images.unsplash.com/photo-1599508704512-2f19efd1e35f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
    website: 'https://fundacionnaturaleza.org',
    description: 'Conservación de especies en peligro'
  },
  {
    id: '2',
    name: 'Zoológico Nacional',
    logo: 'https://images.unsplash.com/photo-1535083783855-76ae62b2914e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
    website: 'https://zoologiconacional.gov',
    description: 'Protección y cuidado de fauna silvestre'
  },
  {
    id: '3',
    name: 'Universidad Andina',
    logo: 'https://images.unsplash.com/photo-1562774053-701939374585?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
    website: 'https://uandina.edu',
    description: 'Investigación en biodiversidad'
  },
  {
    id: '4',
    name: 'Eco Partners',
    logo: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
    description: 'Apoyo en conservación comunitaria'
  },
  {
    id: '5',
    name: 'Wildlife Conservation',
    logo: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
    website: 'https://wildlifeconservation.org',
    description: 'Protección global de especies'
  },
  {
    id: '6',
    name: 'Comunidad Verde',
    logo: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
    website: 'https://comunidadverde.org',
    description: 'Educación ambiental'
  },
];

export const Partners = () => {
  return (
    <section className="min-h-screen flex items-center py-20 px-6 md:px-24 bg-gradient-to-br from-[#f9f6f1] to-[#e8e3d8]">
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-[#2e7d32]/70 text-sm font-bold uppercase tracking-widest inline-block mb-4">
            Trabajamos en Conjunto
          </span>
          
          <AnimatedText 
            text="Nuestros Aliados"
            el="h2"
            className="text-4xl md:text-6xl font-serif text-[#1a432e] mb-6"
            delay={0.1}
          />
          
          <AnimatedText 
            text="Gracias a la colaboración de estas organizaciones e instituciones, podemos llevar adelante nuestro compromiso con la conservación del tigrillo lanudo"
            el="p"
            className="text-[#1a432e]/80 text-lg max-w-3xl mx-auto"
            delay={0.3}
          />
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 lg:gap-8">
          {partnersData.map((partner, index) => (
            <PartnerCard key={partner.id} partner={partner} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center mt-16 p-8 bg-white/60 backdrop-blur-sm rounded-2xl border border-[#2e7d32]/20"
        >
          <AnimatedText 
            text="¿Quieres ser nuestro aliado?"
            el="h3"
            className="text-2xl font-serif text-[#1a432e] mb-3"
            delay={0.4}
          />
          
          <AnimatedText 
            text="Si tu organización comparte nuestra pasión por la conservación, únete a nuestro esfuerzo para proteger al tigrillo lanudo"
            el="p"
            className="text-[#1a432e]/70 mb-6 max-w-2xl mx-auto"
            delay={0.6}
          />
          
          <motion.button 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1 }}
            className="px-8 py-3 bg-[#2e7d32] text-white rounded-full hover:bg-[#1a432e] transition-colors font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 duration-200"
          >
            Convertirse en Aliado
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

interface PartnerCardProps {
  partner: Partner;
  index: number;
}

const PartnerCard: FC<PartnerCardProps> = ({ partner, index }) => {
  const content = (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.8 + (index * 0.1) }} // Retrasado para que salga después de los textos
      className="group relative bg-white rounded-xl p-6 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-transparent hover:border-[#2e7d32]/20 overflow-hidden"
    >
      {partner.website && (
        <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
          <div className="bg-[#2e7d32] text-white rounded-full p-1.5 shadow-md">
            <ExternalLink className="w-3 h-3" />
          </div>
        </div>
      )}

      <div className="aspect-square mb-4 flex items-center justify-center overflow-hidden rounded-lg bg-transparent">
        <ImageWithFallback
          src={partner.logo}
          alt={partner.name}
          className="w-full h-full object-contain p-4 grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500 ease-out"
        />
      </div>

      <h3 className="text-center text-sm font-semibold text-[#1a432e] mb-2 group-hover:text-[#2e7d32] transition-colors">
        {partner.name}
      </h3>

      {partner.description && (
        <p className="text-xs text-[#1a432e]/60 text-center line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 h-0 group-hover:h-auto">
          {partner.description}
        </p>
      )}
    </motion.div>
  );

  if (partner.website) {
    return (
      <a
        href={partner.website}
        target="_blank"
        rel="noopener noreferrer"
        className="block focus:outline-none focus:ring-2 focus:ring-[#2e7d32] focus:ring-offset-2 rounded-xl"
      >
        {content}
      </a>
    );
  }

  return content;
};