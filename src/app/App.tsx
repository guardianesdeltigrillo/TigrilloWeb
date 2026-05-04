import { motion, useScroll, useSpring } from 'motion/react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Stats } from './components/Stats';
import { ProductSection } from './components/ProductSection';
import { ProductSection3D } from './components/ProductSection3D';
import { ProductGrid } from './components/ProductGrid';
import { Partners } from './components/Partners';
import { Footer } from './components/Footer';

function App() {
  // 1. Hook para detectar el scroll
  const { scrollYProgress } = useScroll();
  
  // 2. Le damos un efecto de "resorte" (spring) para que no se vea rígido
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="min-h-screen bg-[#f9f6f1] overflow-x-hidden scroll-smooth relative">
      
      {/* 3. La barra animada */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#2e7d32] to-[#4caf50] z-[100]"
        style={{ scaleX, transformOrigin: "0%" }}
      />

      <Navbar />
      
      <main>
        <Hero />
        <Stats />
        <ProductGrid />
        
        <ProductSection
          id="triviazoo"
          subtitle="Gamificación Educativa"
          title="Triviazoo: El Desafío del Guardián"
          description="Conviértete en un experto en biodiversidad mientras te diviertes. Triviazoo es una experiencia interactiva diseñada para poner a prueba tus conocimientos sobre el ecosistema andino y las estrategias de conservación necesarias para proteger al tigrillo lanudo."
          image="https://images.unsplash.com/photo-1606326608606-aa0b62935f2b"
          buttonText="Jugar Ahora"
          buttonLink="https://guardianes-del-tigrillo.itch.io/triviazoo"
        />

        <ProductSection3D
          id="cedula-ar"
          subtitle="Realidad Aumentada Inmersiva"
          title="Cédula AR: Identidad Digital"
          description="Explora la anatomía y los secretos del tigrillo desde una perspectiva única. Al escanear nuestras cédulas de identificación, desbloqueas una experiencia de realidad aumentada con modelos 3D detallados y datos científicos que cobran vida frente a tus ojos."
          reverse
          dark
          buttonText="Explorar Cédulas"
          buttonLink="#cedula-ar" 
        />

        <ProductSection
          id="entrevista"
          subtitle="Ciencia y Conservación"
          title="Mitazoo: Diálogos de Campo"
          description="Escucha las historias de quienes están en la primera línea de la protección silvestre. Acompañamos a biólogos y expertos en una serie de entrevistas profundas donde descubrimos los retos, las victorias y la importancia vital de preservar a los felinos de Sudamérica."
          image="https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d"
          buttonText="Ver Entrevista"
          buttonLink="#entrevista" 
        />

        <ProductSection
          id="bot-jubi"
          subtitle="Inteligencia Artificial con Propósito"
          title="Bot Jubi: Tu Guía en el Bosque"
          description="Conoce a Jubi, nuestro asistente inteligente con la esencia del tigrillo. A través de una conversación cercana y dinámica, Jubi resuelve tus dudas sobre la especie, comparte hallazgos científicos y te enseña cómo tus acciones pueden impactar positivamente en el bosque nuboso."
          image="https://images.unsplash.com/photo-1614680376593-902f74cf0d41"
          reverse
          dark
          buttonText="Chatear con Jubi"
          buttonLink="https://wa.me/tu-numero" 
        />
    
        <Partners />
      </main>

      <Footer />
    </div>
  );
}

export default App;