
import { cn } from "@/lib/utils";
import { motion, HTMLMotionProps } from "framer-motion";
import { useState, useRef } from "react";

interface GlassCardProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  className?: string;
}

export const GlassCard = ({ children, className, ...props }: GlassCardProps) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    const y = ((e.clientY - rect.top) / rect.height) * 2 - 1;
    setMousePosition({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePosition({ x: 0, y: 0 });
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        boxShadow: `${mousePosition.x * 20}px ${
          mousePosition.y * 20
        }px 60px rgba(190,190,190,0.3), ${-mousePosition.x * 20}px ${
          -mousePosition.y * 20
        }px 60px rgba(255,255,255,0.3)`
      }}
      className={cn(
        "rounded-3xl glass p-6 md:p-8 relative z-10",
        "bg-gradient-to-b from-white/30 to-white/10 dark:from-gray-800/30 dark:to-gray-900/10",
        "border border-white/20 dark:border-gray-700/20",
        "backdrop-blur-xl",
        "shadow-lg dark:shadow-2xl",
        "transition-all duration-200",
        className
      )}
      {...props}
    >
      {children}
    </motion.div>
  );
};
