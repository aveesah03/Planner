import Banner from './components/Banner'
import Calendar from './components/Calendar'
import { useState } from 'react'
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Banner />
      <Calendar />
    </>
  )
}

export default App
