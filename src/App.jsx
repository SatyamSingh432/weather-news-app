import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react'
import Weather from "./pages/Weather";
import './App.css'
function App() {
  const [count, setCount] = useState(0)

  return (
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Weather />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
