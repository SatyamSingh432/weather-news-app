import axios from "axios";

const API_KEY = "42c4b971a814e585d8112750f95fb5f8";

export const getWeather = async (city: string) => {
 
   try {
    const res = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather`,
      {
        params: {
          q: city,
          appid: API_KEY,
          units: "metric",
        },
      }
    );
    return res.data;
  } catch (error) {
    console.error("Error fetching weather:", error);
    throw error;
  }
};