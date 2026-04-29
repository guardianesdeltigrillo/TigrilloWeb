import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Stats } from './components/Stats';
import { ProductSection } from './components/ProductSection';
import { ProductSection3D } from './components/ProductSection3D';
import { ProductGrid } from './components/ProductGrid';
import { Partners } from './components/Partners';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#f9f6f1] overflow-x-hidden scroll-smooth">
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <Hero />
        
        {/* Intro & Stats Section */}
        <Stats />
        
        {/* Product Grid - Ecosistema de productos con fondo verde */}
        <ProductGrid />
        
        {/* Secciones Detalladas de Productos */}
        
        {/* 1. Triviazoo */}
        <ProductSection
          id="triviazoo"
          subtitle="Gamificación Educativa"
          title="Triviazoo: El Desafío del Guardián"
          description="Conviértete en un experto en biodiversidad mientras te diviertes. Triviazoo es una experiencia interactiva diseñada para poner a prueba tus conocimientos sobre el ecosistema andino y las estrategias de conservación necesarias para proteger al tigrillo lanudo."
          image="https://images.unsplash.com/photo-1606326608606-aa0b62935f2b"
          buttonText="Jugar Ahora"
          buttonLink="https://guardianes-del-tigrillo.itch.io/triviazoo"
        />

        {/* 2. Cedula AR - Sección 3D */}
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

        {/* 3. Mitazoo Entrevista */}
        <ProductSection
          id="entrevista"
          subtitle="Ciencia y Conservación"
          title="Mitazoo: Diálogos de Campo"
          description="Escucha las historias de quienes están en la primera línea de la protección silvestre. Acompañamos a biólogos y expertos en una serie de entrevistas profundas donde descubrimos los retos, las victorias y la importancia vital de preservar a los felinos de Sudamérica."
          image="https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d"
          buttonText="Ver Entrevista"
          buttonLink="https://www.youtube.com" // Cambiar por el link real
        />

        {/* 4. Bot Jubi */}
        <ProductSection
          id="bot-jubi"
          subtitle="Inteligencia Artificial con Propósito"
          title="Bot Jubi: Tu Guía en el Bosque"
          description="Conoce a Jubi, nuestro asistente inteligente con la esencia del tigrillo. A través de una conversación cercana y dinámica, Jubi resuelve tus dudas sobre la especie, comparte hallazgos científicos y te enseña cómo tus acciones pueden impactar positivamente en el bosque nuboso."
          image="https://images.unsplash.com/photo-1614680376593-902f74cf0d41"
          reverse
          dark
          buttonText="Chatear con Jubi"
          buttonLink="https://wa.me/tu-numero" // Link a WhatsApp
        />
    
        {/* Partners Section */}
        <Partners />
      </main>

      <Footer />
    </div>
  );
}

export default App;