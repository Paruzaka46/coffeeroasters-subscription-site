import { useState } from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'

function App() {
  const [count, setCount] = useState(0)

  document.body.style.backgroundColor = 'rgb(254, 252, 247)'

  return (
    <div>
      <Navbar/>
      <div className='text-[16px]'>
        <Home/>
      </div>
    </div>
  )
}

export default App
