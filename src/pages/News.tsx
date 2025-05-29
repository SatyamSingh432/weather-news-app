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
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
  getNews().then((articles) => {
    const filtered = articles.filter((ele) => ele.category === category);
    setArticles(filtered);
    setLoading(false)
  });
}, [category]);
 console.log(articles)
 const changeHandler =(e)=>{
 setCategory(e.target.value)
 }
 const clickHandler = (url1,sef)=>{
  // console.log("satt")
 setUrl(url1)
 setDes(sef)
        setModalOpen(true)
}

  return (

    <div className="relative  w-screen overflow-hidden bg-gradient-to-b from-[#0b0b2b] via-[#1b2735] to-[#090a0f] flex flex-col">
  <div className="absolute w-[1px] h-[1px] bg-white twinkle"></div>
  <div className="absolute w-[1px] h-[1px] bg-white twinkle-reverse"></div>
  <div className="absolute top-[20%] left-[-100px] w-[100px] h-[2px] bg-gradient-to-r from-white to-transparent shoot"></div>
  <div className="absolute top-[35%] left-[-100px] w-[100px] h-[2px] bg-gradient-to-r from-white to-transparent shoot [animation-delay:1s]"></div>
  <div className="absolute top-[50%] left-[-100px] w-[100px] h-[2px] bg-gradient-to-r from-white to-transparent shoot [animation-delay:2s]"></div>
    {loading?<div className="flex justify-center items-center h-screen w-screen">
          <span className="inline-block w-12 h-12 border-4 border-red-900 border-b-transparent rounded-full animate-spin" />
        </div>:<>
         <div className="w-full flex justify-center pt-10 "> 
     <select className="w-[300px] h-[40px] border-gray-400 text-white rounded-md px-2 border-2 " name="cars" id="cars" value={category} onChange={changeHandler}>
     <option value="general">general</option>
     <option value="sports">sports</option>
     <option value="business">business</option>
     <option value="technology">technology</option>
     <option value="entertainment">entertainment</option>
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
        </>}
   
    </div>

  );
};

export default News;
