import axios from "axios";

// const API_KEY = "7213719b20494d53aed5d4873250e6ac";

export const getNews = async () => {
  const res = await axios.get(
    
    `https://yardstick-4l5u.onrender.com/api/transactionamt/news-sources`
  );
  // console.log(res.data)
  return res.data;
};
