import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react'
import Weather from "./pages/Weather";
import News from "./pages/News";
import './App.css'
function App() {

  return (
     <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Weather />} /> */}
        <Route path="/" element={<News />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App
