import React from "react";
import { motion } from "motion/react";
import {
  Home,
  Gamepad2,
  Brain,
  Mic,
  BookOpen,
  BarChart3,
  Menu,
  X,
} from "lucide-react";
import { cn } from "../../lib/utils";

interface NavItem {
  label: string;
  href: string;
  icon: React.ElementType;
}

const navItems: NavItem[] = [
  { label: "Inicio", href: "#inicio", icon: Home },
  { label: "Triviazoo", href: "#busqueda", icon: Gamepad2 },
  { label: "Cedula AR", href: "#triviazoo", icon: Brain },
  { label: 'Entrevista', href: "#mitazoo", icon: Mic },
  { label: "Bot Jubi", href: "#datazoo", icon: BarChart3 },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] =
    React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
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
          : "bg-transparent",
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-[#1a432e] rounded-full flex items-center justify-center text-white font-bold text-lg">
            TL
          </div>
          <div className="hidden sm:block">
            <h1
              className={cn(
                "font-bold leading-tight",
                isScrolled ? "text-[#1a432e]" : "text-white",
              )}
            >
              Tigrillo Lanudo
            </h1>
            <p
              className={cn(
                "text-xs opacity-80",
                isScrolled ? "text-[#1a432e]" : "text-white",
              )}
            >
              Wildlife Conservation Hub
            </p>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => scrollToSection(e, item.href)}
              className={cn(
                "flex items-center gap-2 text-sm font-medium transition-colors hover:opacity-70",
                isScrolled ? "text-[#1a432e]" : "text-white",
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
            isScrolled ? "text-[#1a432e]" : "text-white",
          )}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X size={24} />
          ) : (
            <Menu size={24} />
          )}
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
              className="flex items-center gap-3 text-[#1a432e] font-medium py-2"
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