import axios from "axios";

const API_KEY = "42c4b971a814e585d8112750f95fb5f8";

export const getWeather = async (lat: number, lon: number) => {
  // console.log(lat,lon)
 try {
    const res = await axios.get(
      `https://api.openweathermap.org/data/2.5/forecast`,
      {
        params: {
          lat,
          lon,
          appid: API_KEY,
        },
      }
    );

    // console.log( res.data.list);
if(!res.data.list){}

    return res.data.list.slice(0, 7); 
  } catch (error) {
    console.error(`Something went wrong2: ${error}`);
    return [];
  }

};