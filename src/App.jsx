import { useState } from 'react'
import Pad from './components/Pad.jsx'
import padsData from './data/pads.js'
import './App.css'

function App() {
  const [pads, setPads] = useState(padsData)
  
  const buttonElements = pads.map(pad => (
    <Pad toggle={toggle} id={pad.id} key={pad.id} color={pad.color} on={pad.on}/>
  ))
  
  function toggle (id) {
    console.log(id)
    console.log(pads)

    setPads(prevPads => prevPads.map(pad => 
      pad.id === id ? { ...pad, on: !pad.on} : pad
    ))
  }

  return (
    <>
      <div>{buttonElements}</div>
    </>
  )
}

export default App
