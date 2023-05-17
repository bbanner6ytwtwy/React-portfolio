import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Index from "./pages/Index"

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
       <Route index element={<Index />}/>
       <Route path="/" element={<Index />}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
