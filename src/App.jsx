import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Components/Home'
import Users from './Components/Users/Users'
import Notfound from './Components/notfound/Notfound'

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/users' element={<Users />} />
        <Route path='/*' element={<Notfound />} />
      </Routes>
    </div>
  )
}

export default App
