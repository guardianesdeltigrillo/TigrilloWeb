import React from 'react';

export const Footer = () => {
  return (
    <footer className="bg-[#1a432e] text-white py-20 px-6 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-20">
          <div>
            <h3 className="text-xl font-serif mb-6">Sobre el Tigrillo Lanudo</h3>
            <p className="text-white/70 leading-relaxed">
              Un centro digital integral dedicado a la conservación y estudio de la oncilla (Leopardus tigrinus) para las generaciones futuras.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-serif mb-6">Nuestros Productos</h3>
            <ul className="space-y-4 text-white/70">
              <li><a href="#triviazoo" className="hover:text-white transition-colors">Triviazoo</a></li>
              <li><a href="#entrevista" className="hover:text-white transition-colors">Entrevista con expertos</a></li>
              <li><a href="#bot-jubi" className="hover:text-white transition-colors">Bot Jubi El Tigrillo</a></li>
              <li><a href="#cedula-ar" className="hover:text-white transition-colors">Cedula AR</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-serif mb-6">Conéctate</h3>
            <p className="text-white/70 leading-relaxed mb-6">
              Únete a nuestra comunidad y ayuda a proteger al tigrillo lanudo para las generaciones futuras.
            </p>
            {/* Social Icons Placeholder Below */}
          </div>
        </div>
      </div>
    </footer>
  );
};