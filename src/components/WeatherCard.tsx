import React from "react";

const WeatherCard = ({day})=>{
    console.log(day)
    return(
      <div
  className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-5 shadow-lg text-white flex flex-col items-center justify-between gap-3 transition-transform duration-300 hover:scale-[1.02]"
>
  <h3 className="font-semibold text-xl">
    {new Date(day.dt * 1000).toLocaleDateString("en-US", {
      weekday: "short",
      day: "numeric",
      month: "short",
    })}
  </h3>

  <img
    src={`https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
    alt={day.weather[0].description}
    className="w-16 h-16"
  />

  <div className="text-center space-y-1">
    <p className="text-lg font-medium">{day.weather[0].main}</p>
    <p className="text-sm italic text-gray-300">{day.weather[0].description}</p>
  </div>

  <div className="mt-2 space-y-1 text-sm text-gray-200">
    <p>🌡 Temp: {Math.round(day.main.temp - 273)}°C</p>
    <p>💧 Humidity: {day.main.humidity}%</p>
    <p>🌬 Wind: {day.wind.speed} m/s</p>
  </div>
        </div>
    )
}
export default WeatherCard
