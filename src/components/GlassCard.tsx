import { cn } from "@/lib/utils";
import { motion, HTMLMotionProps } from "framer-motion";

interface GlassCardProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  className?: string;
}

export const GlassCard = ({ children, className, ...props }: GlassCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={cn(
        "rounded-3xl glass neomorphic p-8",
        "bg-gradient-to-b from-white/50 to-white/20",
        "shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff]",
        "border border-white/20",
        "backdrop-blur-lg",
        className
      )}
      {...props}
    >
      {children}
    </motion.div>
  );
};