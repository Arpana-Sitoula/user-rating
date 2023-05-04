import React from 'react'
import ActiveState from './pages/ActiveState'
import ThankyouState from './pages/ThankyouState'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  const nums = [
    {id:1, val:"1"},
    {id:2, val:"2"},
    {id:3, val:"3"},
    {id:4, val:"4"},
    {id:5, val:"5"} 
  ]
  return (
    <div className='app'>
    <div className='container'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <ActiveState nums={nums}/>}/>
          <Route path='thankyou/' element={<ThankyouState nums={nums} />}/>  
        </Routes>
      </BrowserRouter>
    </div>
    </div>
  )
}

export default App
