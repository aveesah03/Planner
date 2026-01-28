import Banner from './components/Banner'
import Calendar from './components/Calendar'
import { useState, useEffect } from 'react'
import './App.css'


function App() {
  
  const [month, setMonth] = useState(0);

  const changeMonth = (operation) => {
    setMonth((prevMonth) => {
      if (operation === "increment") {
        return (prevMonth + 1) % 12;
      } else {
        return (prevMonth - 1 + 12) % 12;
      }
    });
  };

  return (
    <>
      <Banner />
      <Calendar changeMonth={changeMonth}  month={month}/>
    </>
  )
}

export default App
