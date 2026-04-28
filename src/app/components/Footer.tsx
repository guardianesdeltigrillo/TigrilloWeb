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
              <li><a href="#busqueda" className="hover:text-white transition-colors">Triviazoo</a></li>
              <li><a href="#podcast" className="hover:text-white transition-colors">Entrevista con expertos</a></li>
              <li><a href="#enciclopedia" className="hover:text-white transition-colors">Bot Jubi El Tigrillo</a></li>
              <li><a href="#comunidad" className="hover:text-white transition-colors">Cedula AR</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-serif mb-6">Conéctate</h3>
            <p className="text-white/70 leading-relaxed mb-6">
              Únete a nuestra comunidad y ayuda a proteger al tigrillo lanudo para las generaciones futuras.
            </p>
            <div className="flex gap-4">
              {/* Simple Social Icons Placeholders */}
              <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 cursor-pointer transition-colors">
                <span className="sr-only">Twitter</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
              </div>
              <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 cursor-pointer transition-colors">
                <span className="sr-only">Instagram</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.332 3.608 1.308.975.975 1.246 2.242 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.332 2.633-1.308 3.608-.975.975-2.242 1.246-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.332-3.608-1.308-.975-.975-1.246-2.242-1.308-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.332-2.633 1.308-3.608.975-.975 2.242-1.246 3.608-1.308 1.266-.058 1.646-.07 4.85-.07m0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.358-.2 6.78-2.618 6.98-6.98.058-1.281.072-1.689.072-4.947s-.014-3.667-.072-4.947c-.2-4.358-2.618-6.78-6.98-6.98-1.28-.058-1.689-.072-4.948-.072zM12 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zM18.406 4.406c-.81 0-1.467.657-1.467 1.467s.657 1.467 1.467 1.467 1.467-.657 1.467-1.467-.657-1.467-1.467-1.467z"/></svg>
              </div>
            </div>
          </div>
        </div>
        
        <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-white/50 text-sm">
            © 2026 Proyecto de Conservación del Tigrillo Lanudo. Todos los derechos reservados.
          </p>
          <div className="flex gap-8 text-white/50 text-sm">
            <a href="#" className="hover:text-white transition-colors">Privacidad</a>
            <a href="#" className="hover:text-white transition-colors">Términos</a>
            <a href="#" className="hover:text-white transition-colors">Contacto</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
