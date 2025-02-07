
import { Player } from "@lottiefiles/react-lottie-player";
import { motion } from "framer-motion";

interface WeatherDisplayProps {
  temperature: number;
  condition: string;
  humidity: number;
}

export const WeatherDisplay = ({ temperature, condition, humidity }: WeatherDisplayProps) => {
  const getWeatherAnimation = (condition: string) => {
    // Convert condition to lowercase for case-insensitive comparison
    const normalizedCondition = condition.toLowerCase();
    
    // Map OpenWeather conditions to our animation files
    const conditionMap: { [key: string]: string } = {
      "clear": "/animations/sunny.json",
      "clouds": "/animations/cloudy.json",
      "rain": "/animations/rainy.json",
      "snow": "/animations/largesnowfall.json",
      "drizzle": "/animations/rainy.json",
      "thunderstorm": "/animations/thunderstorm.json",
      "mist": "/animations/cloudy.json",
      "fog": "/animations/cloudy.json",
      "haze": "/animations/cloudy.json",
      "smoke": "/animations/cloudy.json",
      "dust": "/animations/cloudy.json",
      "sand": "/animations/cloudy.json",
      "ash": "/animations/cloudy.json",
      "squall": "/animations/rainy.json",
      "tornado": "/animations/thunderstorm.json"
    };

    console.log("Current weather condition:", normalizedCondition);
    const animationPath = conditionMap[normalizedCondition] || "/animations/sunny.json";
    console.log("Selected animation:", animationPath);
    
    return animationPath;
  };

  return (
    <div className="relative w-full h-full flex flex-col items-center justify-between gap-4 px-4 py-6 md:px-6">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="w-28 h-28 md:w-40 md:h-40 rounded-full neomorphic 
          shadow-[inset_5px_5px_10px_rgba(190,190,190,0.5),inset_-5px_-5px_10px_rgba(255,255,255,0.5)] 
          dark:shadow-[inset_5px_5px_10px_rgba(0,0,0,0.5),inset_-5px_-5px_10px_rgba(255,255,255,0.1)] 
          p-4 bg-white/50 dark:bg-gray-800/50"
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
        className="text-center space-y-4 w-full"
      >
        <h1 className="text-5xl md:text-6xl font-bold text-gray-800 dark:text-gray-100">
          {temperature}°
        </h1>
        <p className="text-lg md:text-xl text-gray-700 dark:text-gray-200 capitalize 
          neomorphic px-4 py-2 rounded-lg 
          shadow-[3px_3px_6px_rgba(190,190,190,0.5),-3px_-3px_6px_rgba(255,255,255,0.5)]
          dark:shadow-[3px_3px_6px_rgba(0,0,0,0.5),-3px_-3px_6px_rgba(255,255,255,0.1)]
          bg-white/30 dark:bg-gray-800/30"
        >
          {condition}
        </p>
        <div className="flex items-center justify-center gap-2 text-gray-600 dark:text-gray-300 mt-4">
          <span className="text-sm">Humidity</span>
          <span className="text-lg font-semibold neomorphic px-3 py-1 rounded-md 
            shadow-[2px_2px_4px_rgba(190,190,190,0.5),-2px_-2px_4px_rgba(255,255,255,0.5)]
            dark:shadow-[2px_2px_4px_rgba(0,0,0,0.5),-2px_-2px_4px_rgba(255,255,255,0.1)]
            bg-white/20 dark:bg-gray-800/20"
          >
            {humidity}%
          </span>
        </div>
      </motion.div>
    </div>
  );
};
