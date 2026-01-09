import Banner from './components/Banner'
import Calendar from './components/Calendar'
import { useState } from 'react'
import './App.css'


function App() {
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const [month, setMonth] = useState(0);

  const changeMonth = (operation) => {
    setMonth((prevMonth) => {
      if (operation === "increment") {
        return (prevMonth + 1) % 12;
      } else {
        return (prevMonth - 1 + 12) % 12;
      }
    });
    return months[month];
  };

  return (
    <>
      <Banner />
      <Calendar changeMonth={changeMonth}  />
    </>
  )
}

export default App
