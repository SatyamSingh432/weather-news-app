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
    <div className="p-4 flex h-screen justify-center flex-col">
      <div className="mb-4 w-screen flex justify-center items-center flex-1 ">
        
          
        <input
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="border p-2 mr-2"
          placeholder="Enter city"
        />
        <button
          onClick={searchForecast} 
          className=" text-white  flex items-center gap-2 relative"
        >
        <div className="absolute top-[-112px] right-[-338px]">
           <DotLottieReact
      src="https://lottie.host/dd7fdff7-0246-4517-914d-d0d6d1759418/DojMoQVlYC.lottie"
      loop
      autoplay
      style={{ width: "700px", height: "250px" }}
    />
        </div>
         
          check  weather
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
  )
};

export default Weather;
