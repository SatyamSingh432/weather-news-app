import axios from "axios";

const API_KEY = "7213719b20494d53aed5d4873250e6ac";

export const getNews = async () => {
  const res = await axios.get(
    `https://newsapi.org/v2/everything?q=Apple&from=2025-05-20&sortBy=popularity&apiKey=${API_KEY}`
  );
  console.log(res)
  return res.data.articles;
};
