
import { GlassCard } from "./GlassCard";
import { WeatherDisplay } from "./WeatherDisplay";
import { LocationSearch } from "./LocationSearch";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export const Terrarium = () => {
  const [weatherData, setWeatherData] = useState({
    temperature: 22,
    condition: "Clear",
    humidity: 65
  });
  const [coords, setCoords] = useState({ lat: 51.5074, lon: -0.1278 }); // Default to London

  const fetchWeather = async (lat: number, lon: number) => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=e8c9171e93c86bab5da82e2b24905801`
      );
      const data = await response.json();
      console.log("Weather API response:", data);
      setWeatherData({
        temperature: Math.round(data.main.temp),
        condition: data.weather[0].main,
        humidity: data.main.humidity
      });
    } catch (error) {
      console.error("Error fetching weather:", error);
    }
  };

  useEffect(() => {
    fetchWeather(coords.lat, coords.lon);
  }, [coords]);

  return (
    <motion.div
      initial={{ scale: 0.95, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-sm mx-auto px-4 md:px-0"
    >
      <div className="relative z-20 mb-4">
        <LocationSearch
          onLocationSelect={(lat, lon) => setCoords({ lat, lon })}
        />
      </div>
      <GlassCard className="aspect-[3/4] relative overflow-hidden">
        <WeatherDisplay {...weatherData} />
      </GlassCard>
    </motion.div>
  );
};
