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
        return "https://lottie.host/58802e41-c6df-49f1-9def-31c3c1bf8c7c/uJpQgKvxDY.json";
      case "cloudy":
        return "https://lottie.host/f1b6e98d-8c0e-4c3d-9e04-c8dedf2e0749/MHBd1S1tYX.json";
      case "rainy":
        return "https://lottie.host/ec2dd4de-6aa9-4e8c-9c4e-556c4e0d6f01/C3P1qeKxVS.json";
      default:
        return "https://lottie.host/58802e41-c6df-49f1-9def-31c3c1bf8c7c/uJpQgKvxDY.json";
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