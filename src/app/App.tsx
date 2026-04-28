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
          title="Búsqueda del Tigrillo"
          description="Un juego de aventuras educativo e interactivo donde exploras los bosques nubosos, aprendes sobre el comportamiento de la oncilla y tomas decisiones clave para su conservación. Vive la experiencia de ser un investigador en el campo y descubre los secretos que guarda la selva."
          image="https://images.unsplash.com/photo-1768566626252-53f0fdeaba82?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuYXR1cmUlMjBnYW1lJTIwYWR2ZW50dXJlciUyMGp1bmdsZSUyMGV4cGxvcmF0aW9ufGVufDF8fHx8MTc3MTE3MzI5N3ww&ixlib=rb-4.1.0&q=80&w=1080"
          buttonText="Jugar Ahora"
        />

        {/* 2. Triviazoo - 3D Interactive Section */}
        <ProductSection3D
          id="triviazoo"
          subtitle="Juego de Trivia Interactivo"
          title="Triviazoo"
          description="Pon a prueba tus conocimientos sobre el tigrillo lanudo con nuestro juego interactivo 3D. Explora un modelo tridimensional del felino mientras respondes preguntas sobre su anatomía, comportamiento y hábitat. Una experiencia educativa inmersiva que combina diversión y aprendizaje sobre esta especie en peligro."
          reverse
          dark
          buttonText="Comenzar Trivia"
        />

        {/* 3. Mitazoo Podcast */}
        <ProductSection
          id="mitazoo"
          subtitle="Historias desde el Campo"
          title="Mitazoo Podcast"
          description="Escucha conversaciones fascinantes con biólogos de campo, conservacionistas y comunidades locales que trabajan incansablemente para proteger al tigrillo lanudo. Cada episodio te transporta a lo profundo del ecosistema andino, compartiendo éxitos, desafíos y la pasión por la vida silvestre."
          image="https://images.unsplash.com/photo-1562941995-6426bb43b439?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBtaWNyb3Bob25lJTIwZm9yZXN0JTIwbmF0dXJlJTIwcmVjb3JkaW5nJTIwcG9kY2FzdHxlbnwxfHx8fDE3NzExNzMyOTd8MA&ixlib=rb-4.1.0&q=80&w=1080"
          buttonText="Escuchar Episodios"
        />

        {/* 4. Zooteka Encyclopedia */}
        <ProductSection
          id="zooteka"
          subtitle="Conocimiento Científico"
          title="Zooteka"
          description="Explora nuestra completa enciclopedia digital con información detallada sobre la biología, comportamiento y conservación del tigrillo lanudo. Una base de datos rigurosa diseñada para estudiantes, investigadores y entusiastas de la naturaleza que buscan profundizar en el conocimiento de esta especie."
          image="https://images.unsplash.com/photo-1620829846940-dfa49f707ac7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvbGQlMjBzY2llbnRpZmljJTIwbmF0dXJlJTIwYm9va3MlMjBlbmN5Y2xvcGVkaWElMjBsaWJyYXJ5fGVufDF8fHx8MTc3MTE3MzI5N3ww&ixlib=rb-4.1.0&q=80&w=1080"
          reverse
          dark
          buttonText="Abrir Enciclopedia"
        />

        {/* 5. Datazoo - Fun Facts */}
        <ProductSection
          id="datazoo"
          subtitle="Datos Curiosos"
          title="Datazoo"
          description="Descubre información fascinante y poco conocida sobre el tigrillo lanudo. Desde sus habilidades de caza hasta sus patrones de comportamiento únicos, nuestra colección de datos curiosos te sorprenderá y te ayudará a apreciar aún más a este extraordinario felino silvestre."
          image="https://images.unsplash.com/photo-1758599668408-dfb4a7ed22c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aWxkbGlmZSUyMGNvbnNlcnZhdGlvbiUyMGdyb3VwJTIwY29tbXVuaXR5JTIwbmF0dXJlJTIwb3V0ZG9vcnN8ZW58MXx8fHwxNzcxMTczMjk3fDA&ixlib=rb-4.1.0&q=80&w=1080"
          buttonText="Ver Datos"
        />

        {/* Partners Section */}
        <Partners />
      </main>

      <Footer />
    </div>
  );
}

export default App;