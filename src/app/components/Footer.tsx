import { Instagram, Youtube } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-[#1a432e] text-white py-20 px-6 border-t border-white/10 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-20">
          
          {/* Columna 1 */}
          <div>
            <h3 className="text-xl font-serif mb-6 uppercase tracking-widest">Sobre el Tigrillo</h3>
            <p className="text-white/70 leading-relaxed font-medium">
              Un centro digital integral dedicado a la conservación y estudio de la oncilla (Leopardus tigrinus) para las generaciones futuras.
            </p>
          </div>
          
          {/* Columna 2 */}
          <div>
            <h3 className="text-xl font-serif mb-6 uppercase tracking-widest">Navegación</h3>
            <ul className="space-y-4 text-white/70 font-medium">
              <li><a href="#acerca-de" className="hover:text-white hover:translate-x-2 transition-all inline-block">Acerca de Zooteka</a></li>
              <li><a href="#importancia" className="hover:text-white hover:translate-x-2 transition-all inline-block">Impacto Ambiental</a></li>
              <li><a href="#jubi-3d" className="hover:text-white hover:translate-x-2 transition-all inline-block">Jubi El Tigrillo</a></li>
              <li><a href="#product-grid" className="hover:text-white hover:translate-x-2 transition-all inline-block">Ecosistema Digital</a></li>
            </ul>
          </div>

          {/* Columna 3: Redes Sociales */}
          <div>
            <h3 className="text-xl font-serif mb-6 uppercase tracking-widest">Conéctate</h3>
            <p className="text-white/70 leading-relaxed mb-6 font-medium">
              Únete a nuestra comunidad en redes sociales y ayuda a visibilizar la protección del ecosistema andino.
            </p>
            
            <div className="flex items-center gap-4">
              
              <a 
                href="https://www.instagram.com/guardianesdeltigrillo/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 border border-white/30 flex items-center justify-center bg-transparent hover:bg-white hover:text-[#1a432e] transition-all duration-300 rounded-none shadow-[4px_4px_0px_0px_rgba(255,255,255,0.15)] hover:shadow-none hover:translate-x-1 hover:translate-y-1"
                aria-label="Instagram"
              >
                <Instagram size={22} />
              </a>

              <a 
                href="https://www.youtube.com/channel/UCIlUX880JsQe2MERLP6246A" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 border border-white/30 flex items-center justify-center bg-transparent hover:bg-white hover:text-[#1a432e] transition-all duration-300 rounded-none shadow-[4px_4px_0px_0px_rgba(255,255,255,0.15)] hover:shadow-none hover:translate-x-1 hover:translate-y-1"
                aria-label="YouTube"
              >
                <Youtube size={22} />
              </a>

              <a 
                href="https://www.tiktok.com/@guardianes.del.ti?_r=1&_t=ZS-968fgryhXeO" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 border border-white/30 flex items-center justify-center bg-transparent hover:bg-white hover:text-[#1a432e] transition-all duration-300 rounded-none shadow-[4px_4px_0px_0px_rgba(255,255,255,0.15)] hover:shadow-none hover:translate-x-1 hover:translate-y-1"
                aria-label="TikTok"
              >
                <svg 
                  viewBox="0 0 24 24" 
                  fill="currentColor" 
                  className="w-[22px] h-[22px]"
                >
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </a>

            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 mt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-white/50 text-sm font-medium">
          <p>© {new Date().getFullYear()} Zooteka. Todos los derechos reservados.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Términos de Uso</a>
            <a href="#" className="hover:text-white transition-colors">Privacidad</a>
          </div>
        </div>
      </div>
    </footer>
  );
};