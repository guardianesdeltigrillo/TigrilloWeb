import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';

export const CustomCursor = () => {
  // Valores de movimiento instantáneo para el punto central
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  // Estado para saber si estamos sobre un elemento clickeable
  const [isHovered, setIsHovered] = useState(false);

  // Físicas de "resorte" para la figura geométrica exterior (el rombo)
  const springConfig = { damping: 25, stiffness: 400, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // Detectamos si el cursor está sobre un botón, un enlace, o un elemento clickeable
      if (
        target.tagName.toLowerCase() === 'button' || 
        target.tagName.toLowerCase() === 'a' || 
        target.closest('a') || 
        target.closest('button')
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [cursorX, cursorY]);

  // Si el usuario está en un dispositivo táctil (celular), no renderizamos el cursor
  if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) {
    return null;
  }

  return (
    <>
      {/* 1. Punto central preciso e instantáneo */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-white rounded-none pointer-events-none z-[9999] mix-blend-difference"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%'
        }}
      />
      
      {/* 2. Figura geométrica reactiva (Rombo / Target) */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 border-2 border-white pointer-events-none z-[9998] mix-blend-difference flex items-center justify-center overflow-hidden"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          rotate: isHovered ? 90 : 45, // Gira frenéticamente al hacer hover
          scale: isHovered ? 1.8 : 1,  // Se expande
          borderRadius: isHovered ? "50%" : "0%" // Pasa de rombo a círculo
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        {/* Relleno fantasma que aparece al interactuar */}
         <motion.div 
           className="w-full h-full bg-white"
           animate={{ opacity: isHovered ? 0.2 : 0 }}
           transition={{ duration: 0.2 }}
         />
      </motion.div>
    </>
  );
};