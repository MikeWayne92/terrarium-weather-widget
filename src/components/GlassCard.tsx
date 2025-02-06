import { cn } from "@/lib/utils";
import { motion, HTMLMotionProps } from "framer-motion";
import { useState, useRef, useEffect } from "react";

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
        }px 60px #bebebe, ${-mousePosition.x * 20}px ${
          -mousePosition.y * 20
        }px 60px #ffffff`
      }}
      className={cn(
        "rounded-3xl glass neomorphic p-8",
        "bg-gradient-to-b from-white/50 to-white/20 dark:from-gray-800/50 dark:to-gray-900/20",
        "border border-white/20 dark:border-gray-700/20",
        "backdrop-blur-lg",
        "transition-shadow duration-200",
        className
      )}
      {...props}
    >
      {children}
    </motion.div>
  );
};