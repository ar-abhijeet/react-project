import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from '../components/Card.jsx';
function App() {

  return (
    <>
      <div>
        <Card title = "Sparrow" btnText = "know-more"/>
        <Card title = "Eagle" btnText = "click-now"/>
      </div>
    </>
  )
}

export default App
