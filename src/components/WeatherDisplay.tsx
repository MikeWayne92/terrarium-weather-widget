import { Player } from "@lottiefiles/react-lottie-player";
import { motion } from "framer-motion";

interface WeatherDisplayProps {
  temperature: number;
  condition: string;
  humidity: number;
}

export const WeatherDisplay = ({ temperature, condition, humidity }: WeatherDisplayProps) => {
  const getWeatherAnimation = (condition: string) => {
    // Map OpenWeather conditions to our animation files
    const conditionMap: { [key: string]: string } = {
      "Clear": "/animations/sunny.json",
      "Clouds": "/animations/cloudy.json",
      "Rain": "/animations/rainy.json",
      "Snow": "/animations/largesnowfall.json",
      "Drizzle": "/animations/rainy.json",
      "Thunderstorm": "/animations/thunderstorm.json",
      "Mist": "/animations/cloudy.json",
      "Fog": "/animations/cloudy.json",
      "Clear-night": "/animations/Moon.json"
    };
    
    return conditionMap[condition] || "/animations/sunny.json";
  };

  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center gap-6 px-4 md:px-6">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="w-32 h-32 md:w-40 md:h-40 rounded-full neomorphic shadow-[inset_5px_5px_10px_#bebebe,inset_-5px_-5px_10px_#ffffff] dark:shadow-[inset_5px_5px_10px_rgba(0,0,0,0.5),inset_-5px_-5px_10px_rgba(255,255,255,0.1)] p-4"
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
        className="text-center space-y-3 w-full"
      >
        <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-gray-700 to-gray-900 dark:from-gray-200 dark:to-gray-400 bg-clip-text text-transparent">{temperature}°</h1>
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 capitalize neomorphic px-4 py-2 rounded-lg shadow-[3px_3px_6px_#bebebe,-3px_-3px_6px_#ffffff] dark:shadow-[3px_3px_6px_rgba(0,0,0,0.5),-3px_-3px_6px_rgba(255,255,255,0.1)]">{condition}</p>
        <div className="flex items-center justify-center gap-2 text-gray-500 dark:text-gray-400">
          <span className="text-sm">Humidity</span>
          <span className="text-lg font-semibold neomorphic px-3 py-1 rounded-md shadow-[2px_2px_4px_#bebebe,-2px_-2px_4px_#ffffff] dark:shadow-[2px_2px_4px_rgba(0,0,0,0.5),-2px_-2px_4px_rgba(255,255,255,0.1)]">{humidity}%</span>
        </div>
      </motion.div>
    </div>
  );
};