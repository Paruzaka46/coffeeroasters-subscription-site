import { useState } from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  document.body.style.backgroundColor = 'rgb(254, 252, 247)'

  return (
    <div>
      <Navbar/>
      <div className='text-[16px]'>
        <Home/>
      </div>
      <Footer/>
    </div>
  )
}

export default App
