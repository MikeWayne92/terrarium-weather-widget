import { GlassCard } from "./GlassCard";
import { WeatherDisplay } from "./WeatherDisplay";
import { motion } from "framer-motion";

export const Terrarium = () => {
  // Placeholder data - will be replaced with actual API data
  const weatherData = {
    temperature: 22,
    condition: "sunny",
    humidity: 65
  };

  return (
    <motion.div
      initial={{ scale: 0.95, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      className="w-full max-w-md mx-auto"
    >
      <GlassCard className="aspect-[3/4] relative overflow-hidden">
        <WeatherDisplay {...weatherData} />
      </GlassCard>
    </motion.div>
  );
};