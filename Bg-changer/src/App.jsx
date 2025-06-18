import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ButtonList from '../components/ButtonList'

function App({color}) {
  const [color, setbgColor] = useState("white");
  return (
    <>
      <ButtonList setbgColor={setbgColor} />
    </>
  )
}

export default App
