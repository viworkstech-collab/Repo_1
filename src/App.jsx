import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Services from './pages/Services'
import About from './pages/About'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Services></Services>
      <About></About>
    </>
  )
}

export default App
