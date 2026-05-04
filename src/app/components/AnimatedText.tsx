import { ElementType } from 'react';
import { motion, Variants } from 'motion/react';

interface AnimatedTextProps {
  text: string;
  className?: string;
  el?: ElementType; // Soluciona el error del Wrapper y JSX
  delay?: number;
}

export const AnimatedText = ({ 
  text, 
  className = "", 
  el: Wrapper = "p",
  delay = 0 
}: AnimatedTextProps) => {
  const words = text.split(" ");

  // Añadimos el tipo explícito 'Variants' para solucionar el error de transición
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { 
        staggerChildren: 0.08,
        delayChildren: delay,
      },
    },
  };

  const wordVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 20,
      rotateX: -20,
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <Wrapper className={className}>
      <motion.span
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="inline-block"
      >
        {words.map((word, index) => (
          <motion.span 
            variants={wordVariants} 
            key={index} 
            className="inline-block mr-[0.25em]"
          >
            {word}
          </motion.span>
        ))}
      </motion.span>
    </Wrapper>
  );
};