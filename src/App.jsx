import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Plan from './components/Plan'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  document.body.style.backgroundColor = 'rgb(254, 252, 247)'

  return (
    <div>
      <Navbar/>
      <div className='text-[16px]'>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>}/>
          <Route path="/plan" element={<Plan/>}/>
       </Routes>
      </div>
      <Footer/>
    </div>
  )
}

export default App
