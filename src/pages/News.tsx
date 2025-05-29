import { useEffect, useState } from "react";
import { getNews } from "../services/news";

const News = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    getNews().then(setArticles);
  }, []);

  return (
    <div className="p-4">
      {articles.map((a: any, i) => (
        <div key={i} className="mb-4 border-b pb-2">
          <h2 className="font-bold">{a.title}</h2>
          <p>{a.description}</p>
          <a href={a.url} target="_blank" rel="noopener noreferrer" className="text-blue-500">Read more</a>
        </div>
      ))}
    </div>
  );
};

export default News;
