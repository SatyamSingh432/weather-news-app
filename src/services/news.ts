import axios from "axios";

const API_KEY = "7213719b20494d53aed5d4873250e6ac";

export const getNews = async () => {
  const res = await axios.get(
    `https://newsapi.org/v2/top-headlines/sources?apiKey=${API_KEY}`
  );
  
  return res.data.sources;
};
