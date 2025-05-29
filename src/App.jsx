import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react'
import Weather from "./pages/Weather";
import Sidebar from "./components/SideBar";
import News from "./pages/News";
import './App.css'
function App() {

  return (
     <BrowserRouter>
      <div className="flex">
        <div className ="fixed z-33">
        <Sidebar />
        </div>
        <div className="">
          <Routes>
            <Route path="/news" element={<News />} />
            <Route path="/" element={<Weather />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
