import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Components/Home'
import Users from './Components/Users/Users'

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/users' element={<Users />} />
      </Routes>
    </div>
  )
}

export default App
