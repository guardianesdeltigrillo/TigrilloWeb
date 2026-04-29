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
        
        {/* Product Grid - New Interactive Section */}
        <ProductGrid />
        
        {/* Extended Product Sections */}
     {/* 1. Tigrillo Quest */}
        <ProductSection
          id="busqueda"
          subtitle="Interactividad y Educación"
          title="Triviazoo"
          description="Un juego de trivia sobre el tigrillo!"
          image="https://images.unsplash.com/photo-1768566626252..."
          buttonText="Jugar Ahora"
          buttonLink="https://guardianes-del-tigrillo.itch.io/triviazoo"        />

        {/* 2. Triviazoo - 3D Interactive Section */}
        <ProductSection3D
          id="triviazoo"
          subtitle="Juego de Trivia Interactivo"
          title="Cedula AR"
          description="Conoce datos curiosos sobre nuestro amigo el tigrillo escaneando sus varias cedulas."
          reverse
          dark
          buttonText="Comenzar Trivia"
          buttonLink="/trivia" {/* <-- ADD YOUR LINK HERE */}
        />

        {/* 3. Mitazoo Podcast */}
        <ProductSection
          id="mitazoo"
          subtitle="Historias desde el Campo"
          title="Mitazoo Entrevista"
          description="Escucha conversaciones fascinantes con expertos."
          image="https://images.unsplash.com/photo-1562941995-6426bb43b439..."
          buttonText="Escuchar Episodios"
          buttonLink="https://spotify.com/your-podcast-link" {/* <-- EXTERNAL LINKS WORK TOO */}
        />

        {/* 4. Zooteka Encyclopedia */}
        <ProductSection
          id="zooteka"
          subtitle="Conocimiento Científico"
          title="Bot Jubi"
          description="Ten conversaciones con nuestro amigo Jubi el tigrillo."
          image="https://images.unsplash.com/photo-1620829846940..."
          reverse
          dark
          buttonText="Abrir Enciclopedia"
          buttonLink="/zooteka" {/* <-- ADD YOUR LINK HERE */}
        />

    
        {/* Partners Section */}
        <Partners />
      </main>

      <Footer />
    </div>
  );
}

export default App;