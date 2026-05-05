import { motion, useScroll, useSpring } from 'motion/react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Stats } from './components/Stats';
import { ProductSection } from './components/ProductSection';
import { ProductSection3D } from './components/ProductSection3D';
import { ProductGrid } from './components/ProductGrid';
import { Partners } from './components/Partners';
import { Footer } from './components/Footer';
import { CustomCursor } from './components/CustomCursor';

function App() {
  const { scrollYProgress } = useScroll();
  
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="min-h-screen bg-[#f9f6f1] overflow-x-hidden scroll-smooth relative cursor-none">
      
      <CustomCursor />

      <motion.div
        className="fixed top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#2e7d32] to-[#4caf50] z-[100]"
        style={{ scaleX, transformOrigin: "0%" }}
      />

      <Navbar />
      
      <main>
        {/* 1. Hero */}
        <Hero />
        
        {/* 2. Stats (Estadísticas breves) */}
        <Stats />
        
        {/* 3. Acerca de */}
        <ProductSection
          id="acerca-de"
          subtitle="Museo Digital"
          title="Acerca de Zooteka"
          description="Zooteka es una enciclopedia multimedia interactiva diseñada para la divulgación y protección del Leopardus tigrinus. Nuestro objetivo es crear un espacio puramente educativo y de exploración visual que conecte a las personas con la riqueza natural de nuestros ecosistemas."
          image="https://images.unsplash.com/photo-1456926631375-92c8ce872def?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
          buttonText="Conocer Más"
          buttonLink="#inicio"
        />

        {/* 4. Importancia */}
        <ProductSection
          id="importancia"
          subtitle="Impacto Ambiental"
          title="¿Por qué es vital su protección?"
          description="El tigrillo lanudo actúa como un guardián silencioso del equilibrio natural. Proteger su hábitat beneficia a innumerables especies y comunidades, asegurando la vitalidad y la preservación de los bosques y de regiones montañosas como el Altiplano que dependen de este frágil ecosistema."
          image="https://images.unsplash.com/photo-1511497584788-876760111969?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
          reverse
          dark
          buttonText="Súmate a la Causa"
          buttonLink="#aliados" 
        />

        {/* 5. Jubi 3D */}
        <ProductSection3D
          id="jubi-3d"
          subtitle="Exploración Anatómica"
          title="Conoce a Jubi en 3D"
          description="Interactúa con Jubi, nuestro modelo tridimensional de alta fidelidad. Observa de cerca los detalles de su pelaje moteado y su fisionomía, características evolutivas que le permiten ser un cazador sigiloso en los densos bosques nubosos."
          buttonText="Interactuar con el Modelo"
          buttonLink="#jubi-3d" 
        />

        {/* 6. Product Grid (Ecosistema de links externos) */}
        <ProductGrid />
    
        {/* 7. Aliados */}
        <Partners />
      </main>

      <Footer />
    </div>
  );
}

export default App;