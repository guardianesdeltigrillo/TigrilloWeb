import { useState, useEffect, MouseEvent, ElementType } from "react";
import { motion } from "motion/react";
import {
  Home,
  BookOpen,
  Globe,
  Box,
  LayoutGrid,
  Users,
  Brain,
  Menu,
  X,
} from "lucide-react";
import { cn } from "../../lib/utils";

interface NavItem {
  label: string;
  href: string;
  icon: ElementType;
}

// Actualizamos el label de Jubi
const navItems: NavItem[] = [
  { label: "Inicio", href: "#inicio", icon: Home },
  { label: "Acerca de", href: "#acerca-de", icon: BookOpen },
  { label: "Importancia", href: "#importancia", icon: Globe },
  { label: "Jubi El Tigrillo", href: "#jubi-3d", icon: Box },
  { label: "Ecosistema", href: "#product-grid", icon: LayoutGrid },
  { label: "Aliados", href: "#aliados", icon: Users },
];

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
          <Brain className={cn("w-8 h-8", isScrolled ? "text-[#1a432e]" : "text-white")} />
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
              <item.icon size={16} />
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
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
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
              <item.icon size={20} />
              {item.label}
            </a>
          ))}
        </motion.div>
      )}
    </nav>
  );
};