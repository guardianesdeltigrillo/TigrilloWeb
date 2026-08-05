import { useState, useEffect, MouseEvent } from "react";
import { motion } from "motion/react";
// We keep Menu and X from lucide-react since they weren't in your SVG folder[cite: 1]
import { Menu, X } from "lucide-react"; 
import { cn } from "../../lib/utils";

// ==========================================
// SVG File Imports
// Adjust the relative paths (../../) to match where Navbar.tsx is located 
// relative to the 'imports' folder shown in your screenshot.
// ==========================================
import homeSvg from "../../imports/iconos/iconos/SVG/Home.svg";
import acercaDeSvg from "../../imports/iconos/iconos/SVG/acerca de.svg";
import importanciaSvg from "../../imports/iconos/iconos/SVG/importancia.svg";
import jubiSvg from "../../imports/iconos/iconos/SVG/Jubi.svg";
import ecosistemaSvg from "../../imports/iconos/iconos/SVG/ecosistema.svg";
import aliadosSvg from "../../imports/iconos/iconos/SVG/aliados.svg";
import zootekaSvg from "../../imports/iconos/iconos/SVG/zooteka.svg";

// ==========================================
// Navigation Configuration
// ==========================================
interface NavItem {
  label: string;
  href: string;
  iconSrc: string;
}

const navItems: NavItem[] = [
  { label: "Inicio", href: "#inicio", iconSrc: homeSvg },
  { label: "Acerca de", href: "#acerca-de", iconSrc: acercaDeSvg },
  { label: "Importancia", href: "#importancia", iconSrc: importanciaSvg },
  { label: "Jubi El Tigrillo", href: "#jubi-3d", iconSrc: jubiSvg },
  { label: "Ecosistema", href: "#product-grid", iconSrc: ecosistemaSvg },
  { label: "Aliados", href: "#aliados", iconSrc: aliadosSvg },
];

// ==========================================
// Navbar Component
// ==========================================
export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const offsetTop = (element as HTMLElement).offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-[#e2e2e2]"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          {/* Increased Zooteka Logo from w-8 h-8 to w-9 h-9 (36px) */}
          <img 
            src={zootekaSvg} 
            alt="Zooteka Logo" 
            className={cn("w-9 h-9", isScrolled ? "opacity-100" : "opacity-90")} 
          />
          <span className={cn("text-xl font-bold font-serif", isScrolled ? "text-[#1a432e]" : "text-white")}>
            Zooteka
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => scrollToSection(e, item.href)}
              className={cn(
                "flex items-center gap-2 text-sm font-medium transition-colors hover:opacity-70",
                isScrolled ? "text-[#1a432e]" : "text-white"
              )}
            >
              {/* Increased Desktop Icon Size to w-5 h-5 (20px) */}
              <img src={item.iconSrc} alt={item.label} className="w-5 h-5 object-contain" />
              {item.label}
            </a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button
          className={cn(
            "md:hidden p-2",
            isScrolled ? "text-[#1a432e]" : "text-white"
          )}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 right-0 bg-white border-b border-[#e2e2e2] p-6 flex flex-col gap-4 shadow-lg md:hidden"
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => scrollToSection(e, item.href)}
              className="flex items-center gap-3 text-[#1a432e] font-medium"
            >
              {/* Increased Mobile Icon Size to w-6 h-6 (24px) */}
              <img src={item.iconSrc} alt={item.label} className="w-6 h-6 object-contain" />
              {item.label}
            </a>
          ))}
        </motion.div>
      )}
    </nav>
  );
};