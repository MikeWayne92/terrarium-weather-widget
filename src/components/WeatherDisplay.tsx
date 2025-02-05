import { Player } from "@lottiefiles/react-lottie-player";
import { motion } from "framer-motion";

interface WeatherDisplayProps {
  temperature: number;
  condition: string;
  humidity: number;
}

export const WeatherDisplay = ({ temperature, condition, humidity }: WeatherDisplayProps) => {
  const getWeatherAnimation = (condition: string) => {
    switch (condition.toLowerCase()) {
      case "sunny":
        return "https://assets9.lottiefiles.com/packages/lf20_xlky4kvh.json";
      case "cloudy":
        return "https://assets9.lottiefiles.com/private_files/lf30_jrhj4nwg.json";
      case "rainy":
        return "https://assets9.lottiefiles.com/packages/lf20_bco9p3ju.json";
      default:
        return "https://assets9.lottiefiles.com/packages/lf20_xlky4kvh.json";
    }
  };

  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center gap-6">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="w-40 h-40"
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
        className="text-center space-y-3"
      >
        <h1 className="text-6xl font-bold text-gray-800">{temperature}°</h1>
        <p className="text-xl text-gray-600 capitalize">{condition}</p>
        <div className="flex items-center justify-center gap-2 text-gray-500">
          <span className="text-sm">Humidity</span>
          <span className="text-lg font-semibold">{humidity}%</span>
        </div>
      </motion.div>
    </div>
  );
};