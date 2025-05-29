import axios from "axios";

const API_KEY = "42c4b971a814e585d8112750f95fb5f8";

export const getCityCoordinates = async (city: string, setLoading,setCity) => {
    try {
        const response = await axios.get(
    `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${API_KEY}`
  );
  if(response.data[0]===undefined){
    alert("Please enter valid city name")
    setLoading(false)
    setCity('')
  }
  console.log(response.data[0])
  return response.data[0]; 
    } catch (error) {
        console.error(`something went wrong ${error}`)
    }
  
};
