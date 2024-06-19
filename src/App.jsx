import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Components/Home'
import Users from './Components/Users/Users'
import Notfound from './Components/notfound/Notfound'
import News from './Components/News/News'
import News2 from './Components/News/News2'

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/users' element={<Users />} />
        <Route path='/news' element={<News />} />
        <Route path='/yutuqlar' element={<News2 />} />
        <Route path='/*' element={<Notfound />} />
      </Routes>
    </div>
  )
}

export default App
