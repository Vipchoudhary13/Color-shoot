import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Emptydiv } from './components/Emptydiv'
import { Circles } from './components/Circles'
import { Shootbtn } from './components/Shootbtn'

function App() {

  return (
    <div className="App">
      <div className='app-flex-cont'>
        <Emptydiv />
        <Circles />
        <Shootbtn />
      </div>
    </div>
  )
}

export default App
