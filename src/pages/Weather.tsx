import { useState } from "react";
import { getWeather } from "../services/weather";

const Weather = () => {
  const [city, setCity] = useState("");
  const [data, setData] = useState<any>(null);

  const handleSearch = async () => {
    const result = await getWeather(city);
    setData(result);
  };

  return (
    <div className="p-4">
      <input
        value={city}
        onChange={(e) => setCity(e.target.value)}
        className="border p-2 mr-2"
        placeholder="Enter city"
      />
      <button onClick={handleSearch} className="bg-blue-500 text-white px-4 py-2">
        Search
      </button>
      {data && (
        <div className="mt-4">
          <h2 className="text-xl font-bold">{data.name}</h2>
          <p>Temp: {data.main.temp}°C</p>
          <p>Humidity: {data.main.humidity}%</p>
          <p>Wind: {data.wind.speed} m/s</p>
        </div>
      )}
    </div>
  );
};

export default Weather;
