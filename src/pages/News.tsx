import { useEffect, useState } from "react";
import { getNews } from "../services/news";
import NewsCard from "../components/NewsCard";
import Modal from "../components/Modal";
const News = () => {
  const [articles, setArticles] = useState([]);
  const [category, setCategory] = useState("general")
  const [des,setDes]=useState("")
  const [modalOpen , setModalOpen] = useState(false)
  const [ url, setUrl]=useState("")
  useEffect(() => {
  getNews().then((articles) => {
    const filtered = articles.filter((ele) => ele.category === category);
    setArticles(filtered);
  });
}, [category]);
 console.log(articles)
 const changeHandler =(e)=>{
 setCategory(e.target.value)
 }
 const clickHandler = (url1,sef)=>{
  console.log("satt")
 setUrl(url1)
 setDes(sef)
        setModalOpen(true)
}

  return (

    <div className="w-screen">
    <div className="w-full flex justify-center pt-10 "> 
     <select className="w-[300px] h-[40px] border-gray-400 rounded-md px-2 border-2 " name="cars" id="cars" onChange={changeHandler}>
     <option value="general">general</option>
     <option value="sports">sports</option>
     <option value="business">business</option>
     <option value="technology">technology</option>
     <option value="entertainment">entertainment</option>
     <option value="health">health</option>
     </select>
    </div>
    
    <div className="p-10 ">
      {articles.map((a: any, i) => (
       ( <NewsCard onClick={()=>clickHandler(a.url,a.description)} setModalOpen={setModalOpen} key={i} a={a} />)
      ))}
    </div>
    {modalOpen && (
   <Modal url={url} des={des} category={category} onClose={() => setModalOpen(false)} />
)}
    </div>

  );
};

export default News;
