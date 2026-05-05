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

// 1. IMPORTA TUS IMÁGENES AQUÍ:
import imagenAcercaDe from 'src/imports/acerca-de.png'; 
import imagenImportancia from 'src/imports/tu-imagen-importancia.jpeg'; 

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
        <Hero />
        <Stats />
        
        {/* Acerca de */}
        <ProductSection
          id="acerca-de"
          subtitle="Museo Digital"
          title="Acerca de Zooteka"
          description="Zooteka es una enciclopedia multimedia interactiva diseñada para la divulgación y protección del Leopardus tigrinus. Nuestro objetivo es crear un espacio puramente educativo y de exploración visual que conecte a las personas con la riqueza natural de nuestros ecosistemas."
          image={imagenAcercaDe} // 2. USA LA VARIABLE AQUÍ (sin comillas)
          buttonText="Conocer Más"
          buttonLink="#inicio"
        />

        {/* Importancia */}
        <ProductSection
          id="importancia"
          subtitle="Impacto Ambiental"
          title="¿Por qué es vital su protección?"
          description="El tigrillo lanudo actúa como un guardián silencioso del equilibrio natural. Proteger su hábitat beneficia a innumerables especies y comunidades, asegurando la vitalidad y la preservación de los bosques y de regiones montañosas como el Altiplano que dependen de este frágil ecosistema."
          image={imagenImportancia} // 2. USA LA VARIABLE AQUÍ (sin comillas)
          reverse
          dark
          buttonText="Súmate a la Causa"
          buttonLink="#aliados" 
        />

        {/* Jubi 3D (No usa imagen estática, usa el canvas 3D) */}
        <ProductSection3D
          id="jubi-3d"
          subtitle="Exploración Anatómica"
          title="Conoce a Jubi el tigrillo"
          description="Jubi es nuestro amigo el tigrillo, es un poco timido, pero solo es un fotógrafo que busca tranquilidad, tiene hábitos nocturnos, aunque es activo a veces de día, le encanta trepar árboles y escuchar musica en soledad."
          buttonText="Interactuar con el Modelo"
          buttonLink="#jubi-3d" 
        />

        <ProductGrid />
        <Partners />
      </main>

      <Footer />
    </div>
  );
}

export default App;