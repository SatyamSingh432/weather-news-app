import { useState } from "react";
import { getWeather } from "../services/weather";
import { getCityCoordinates } from "../services/geo";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import WeatherCard from "../components/WeatherCard";
import ExampleChart from "../components/Chart";
const Weather = () => { const [city, setCity] = useState("");
  const [forecast, setForecast] = useState<any[]>([]);
  const [open,setOpen]=useState(false)
  const [loading, setLoading] = useState(false);

  const searchForecast = async () => {
    setLoading(true)
    const {lat,lon} = await getCityCoordinates(city,setLoading,setCity);
    
    const dailyData = await getWeather(lat, lon);
    //  console.log(dailyData)
    if(dailyData){
      setLoading(false)
    setForecast(dailyData);
    setCity("")
    setOpen(true)
    }
    

  };

  return (
   <div className="relative  w-full overflow-hidden bg-gradient-to-b from-[#0b0b2b] via-[#1b2735] to-[#090a0f] flex">
  <div className="absolute w-[1px] h-[1px] bg-white twinkle"></div>
  <div className="absolute w-[1px] h-[1px] bg-white twinkle-reverse"></div>
  <div className="absolute top-[20%] left-[-100px] w-[100px] h-[2px] bg-gradient-to-r from-white to-transparent shoot"></div>
  <div className="absolute top-[35%] left-[-100px] w-[100px] h-[2px] bg-gradient-to-r from-white to-transparent shoot [animation-delay:1s]"></div>
  <div className="absolute top-[50%] left-[-100px] w-[100px] h-[2px] bg-gradient-to-r from-white to-transparent shoot [animation-delay:2s]"></div>
   <div className={open?"p-4 flex  justify-center flex-col gap-4 pt-6 ":"p-4 h-screen flex justify-center flex-col gap-4 pt-6 "} >
      {loading?<div className="flex justify-center items-center h-screen w-screen">
          <span className="inline-block w-12 h-12 border-4 border-red-900 border-b-transparent rounded-full animate-spin" />
        </div>:(
         <>
         <div className="mb-4 w-screen flex flex-col md:flex-row gap-4 justify-center items-center flex-1 py flex-1">
        <input
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="border p-1 mr-2 text-white text-lg rounded-lg pr-6 pl-2 w-[250px] z-20"
          placeholder="Enter city name.."
        >
          </input> 
        <button
          onClick={searchForecast} 
          className="text-white  flex items-center gap-2 relative "
        >
        <div className="absolute top-[-86px] right-[-52px] z-1">
           <DotLottieReact
            src="https://lottie.host/2f0d1a10-2d4b-4f55-bdf4-b2d05df8b01d/faGA2cvhRH.lottie"
            loop
            autoplay
            style={{ width: "250px", height: "200px" }}
           />
        </div>
         <span className="z-10 md:pl-14 font-medium text-[#121212] text-xl">
          Check Weather
          </span> 
        </button> 
      </div>
      {open&&<>
      <div className="px-2 sm:px-4 md:px-6 lg:px-8  w-[94%]">

      <ExampleChart forecast={forecast}/>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 pr-8">
        {forecast.map((day, index) => (
         <WeatherCard key={index}  day={day} />
        ))}
      </div>
      </>
      }
         </>
        )}
      
      
    </div>
</div>
   
  )
};

export default Weather;
