import React from "react";
import Modal from "./Modal";
const  NewsCard = ({a,onClick})=>{
    return(
        <div onClick={onClick} className="mb-4 border-b pb-2 border rounded-lg p-2 border-gray-400 cursor-pointer">
          <h2 className="font-bold">{a.title}</h2>
          <p>{a.description}</p>
          <p href={a.url} target="_blank" rel="noopener noreferrer" className="text-blue-500">Read more</p>
        </div>
    )
}
export default NewsCard;