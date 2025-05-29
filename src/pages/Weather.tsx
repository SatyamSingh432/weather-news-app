import { useState } from "react";
import { getWeather } from "../services/weather";
import { getCityCoordinates } from "../services/geo";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
const Weather = () => { const [city, setCity] = useState("");
  const [forecast, setForecast] = useState<any[]>([]);

  const searchForecast = async () => {
    const {lat,lon} = await getCityCoordinates(city);
    const dailyData = await getWeather(lat, lon);
    //  console.log(dailyData)
    setForecast(dailyData);

  };

  return (
   <div className="relative h-screen w-full overflow-hidden bg-gradient-to-b from-[#0b0b2b] via-[#1b2735] to-[#090a0f] flex">
  {/* Static stars */}
  <div className="absolute w-[1px] h-[1px] bg-white twinkle"></div>
  <div className="absolute w-[1px] h-[1px] bg-white twinkle-reverse"></div>

  {/* Shooting stars */}
  <div className="absolute top-[20%] left-[-100px] w-[100px] h-[2px] bg-gradient-to-r from-white to-transparent shoot"></div>
  <div className="absolute top-[35%] left-[-100px] w-[100px] h-[2px] bg-gradient-to-r from-white to-transparent shoot [animation-delay:1s]"></div>
  <div className="absolute top-[50%] left-[-100px] w-[100px] h-[2px] bg-gradient-to-r from-white to-transparent shoot [animation-delay:2s]"></div>
   <div className="p-4 flex justify-center flex-col gap-4 pt-6">
      <div className="mb-4 w-screen flex justify-center items-center flex-1 py">
        <input
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="border p-1 mr-2 text-white text-lg rounded-lg pr-6 pl-2"
          placeholder="Enter city name.."
        >
          </input> 
          

        <button
          onClick={searchForecast} 
          className="text-white  flex items-center gap-2 relative "
        >
        <div className="absolute top-[-86px] right-[-59px] z-1">
           <DotLottieReact
      src="https://lottie.host/2f0d1a10-2d4b-4f55-bdf4-b2d05df8b01d/faGA2cvhRH.lottie"
      loop
      autoplay
      style={{ width: "250px", height: "200px" }}
    />
        </div>
         
         <span className="z-10 pl-14 font-medium text-[#121212] text-xl">
          Check Weather
          </span> 
        </button>
        
        
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {forecast.map((day, index) => (
          <div
            key={index}
            className="border rounded-lg p-4 shadow-md bg-white text-black"
          >
            <h3 className="font-bold text-lg">
              {new Date(day.dt * 1000).toLocaleDateString()}
            </h3>
            <p>Temp: {day.main.temp.toFixed(0) - 273 }°C</p>
            <p>Humidity: {day.main.humidity}%</p>
            <p>Wind: {day.wind.speed} m/s</p>
            <p>{day.weather[0].main} - {day.weather[0].description}</p>
            <img
              src={`https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
              alt={day.weather[0].description}
              className="w-12 h-12"
            />
          </div>
        ))}
      </div>
    </div>
</div>
   
  )
};

export default Weather;
