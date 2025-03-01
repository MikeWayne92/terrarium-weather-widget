import { Input } from "./ui/input";
import { useState } from "react";
import { Search } from "lucide-react";
import { Button } from "./ui/button";

interface LocationSearchProps {
  onLocationSelect: (lat: number, lon: number) => void;
}

export const LocationSearch = ({ onLocationSelect }: LocationSearchProps) => {
  const [search, setSearch] = useState("");

  const handleSearch = async () => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/geo/1.0/direct?q=${search}&limit=1&appid=e8c9171e93c86bab5da82e2b24905801`
      );
      const data = await response.json();
      if (data.length > 0) {
        onLocationSelect(data[0].lat, data[0].lon);
      }
    } catch (error) {
      console.error("Error searching location:", error);
    }
  };

  return (
    <div className="flex gap-2 w-full max-w-xs mx-auto mb-6 relative z-50 px-4 md:px-0">
      <Input
        placeholder="Enter location..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onKeyPress={(e) => e.key === "Enter" && handleSearch()}
        className="flex-1 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm"
      />
      <Button onClick={handleSearch} size="icon" className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm hover:bg-white/90 dark:hover:bg-gray-700/90">
        <Search className="h-4 w-4" />
      </Button>
    </div>
  );
};