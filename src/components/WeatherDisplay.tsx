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
        return "/animations/sunny.json";
      case "cloudy":
        return "/animations/cloudy.json";
      case "rainy":
        return "/animations/rainy.json";
      case "snow":
        return "/animations/largesnowfall.json";
      case "light snow":
        return "/animations/snowfall.json";
      case "night":
        return "/animations/Moon.json";
      case "thunderstorm":
        return "/animations/thunderstorm.json";
      default:
        return "/animations/sunny.json";
    }
  };

  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center gap-6">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="w-40 h-40 rounded-full neomorphic shadow-[inset_5px_5px_10px_#bebebe,inset_-5px_-5px_10px_#ffffff] p-4"
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
        <h1 className="text-6xl font-bold bg-gradient-to-r from-gray-700 to-gray-900 bg-clip-text text-transparent">{temperature}°</h1>
        <p className="text-xl text-gray-600 capitalize neomorphic px-4 py-2 rounded-lg shadow-[3px_3px_6px_#bebebe,-3px_-3px_6px_#ffffff]">{condition}</p>
        <div className="flex items-center justify-center gap-2 text-gray-500">
          <span className="text-sm">Humidity</span>
          <span className="text-lg font-semibold neomorphic px-3 py-1 rounded-md shadow-[2px_2px_4px_#bebebe,-2px_-2px_4px_#ffffff]">{humidity}%</span>
        </div>
      </motion.div>
    </div>
  );
};