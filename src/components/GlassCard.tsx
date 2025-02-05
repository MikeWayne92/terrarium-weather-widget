import { cn } from "@/lib/utils";
import { motion, HTMLMotionProps } from "framer-motion";

interface GlassCardProps extends Omit<HTMLMotionProps<"div">, "className"> {
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
        "bg-gradient-to-b from-white/40 to-white/10",
        "shadow-[0_8px_32px_0_rgba(31,38,135,0.37)]",
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