import { Player } from "@lottiefiles/react-lottie-player";
import { motion } from "framer-motion";

interface WeatherDisplayProps {
  temperature: number;
  condition: string;
  humidity: number;
}

export const WeatherDisplay = ({ temperature, condition, humidity }: WeatherDisplayProps) => {
  const getWeatherAnimation = (condition: string) => {
    // Placeholder animation URL - replace with actual Lottie animation URLs
    return "https://assets5.lottiefiles.com/packages/lf20_KUFdS6.json";
  };

  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="w-32 h-32 mb-4"
      >
        <Player
          autoplay
          loop
          src={getWeatherAnimation(condition)}
          style={{ width: "100%", height: "100%" }}
        />
      </motion.div>
      
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="text-center"
      >
        <h1 className="text-4xl font-bold mb-2">{temperature}°</h1>
        <p className="text-lg text-gray-600 capitalize mb-1">{condition}</p>
        <p className="text-sm text-gray-500">Humidity: {humidity}%</p>
      </motion.div>
    </div>
  );
};