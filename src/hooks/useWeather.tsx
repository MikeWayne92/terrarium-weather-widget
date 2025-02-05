import { useQuery } from "@tanstack/react-query";

const API_KEY = "YOUR_API_KEY"; // Will be replaced with secure key management

const fetchWeather = async (lat: number, lon: number) => {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
  );
  if (!response.ok) {
    throw new Error("Weather data fetch failed");
  }
  return response.json();
};

export const useWeather = (lat: number, lon: number) => {
  return useQuery({
    queryKey: ["weather", lat, lon],
    queryFn: () => fetchWeather(lat, lon),
    refetchInterval: 300000, // Refetch every 5 minutes
  });
};