import { useState } from 'react'
import './App.css'
import Home from './components/home/Home'
import Nav from './components/home/Nav'
import { Route, Routes } from 'react-router-dom'
import Semester from './components/semester/Semester'
import Year from './components/year/Year'
import Pyq from './components/pyq/Pyq'

function App() {
  const [count, setCount] = useState(0)

  return (
    
    <div className='bg-[#f8f8f8]'>
        <Nav/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/user/api/:branch" element={<Semester/>} />
          <Route path="/user/api/:branch/:semester" element={<Year/>} />
          <Route path="/user/api/:branch/:semester/:path" element={<Pyq/>} />
        </Routes>
    </div>
  )
}

export default App
