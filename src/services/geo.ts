import axios from "axios";

const API_KEY = "42c4b971a814e585d8112750f95fb5f8";

export const getCityCoordinates = async (city: string) => {
    try {
        const response = await axios.get(
    `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${API_KEY}`
  );
//   console.log(response.data)
  return response.data[0]; 
    } catch (error) {
        console.error(`something went wrong ${error}`)
    }
  
};
