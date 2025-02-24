import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ServiceCard from "./components/Servicecard";


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
          <h2>Our Services</h2>
      <div className="service-list">
        <ServiceCard title="Web Development" description="We build fast and scalable websites." />
        <ServiceCard title="App Development" description="Custom mobile applications tailored to your needs." />
      </div>
    </>
  )
}

export default App

