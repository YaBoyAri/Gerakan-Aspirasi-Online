import React from 'react'
import './App.css'
import Navbar from "./Component/Navbar";
import Home from "./Component/Home";
import About from "./Component/About";
import Footer from "./Component/Footer"

const App = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:p-0 p-0">
      <div className="max-w-7xl w-full ">
        <Navbar/>
        <Home/>
        <About/>
        <Footer/>
      </div>
    </main>
  )
}

export default App