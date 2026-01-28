import Navbar from './Navbar';
import './calendar.css';
import { useEffect, useState } from 'react';

export default function Calendar(props) {
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const days = ['Sun', 'Mon', 'Tues', 'Wed', 'Thrus', 'Fri', 'Sat'];        
    const [firstDay, setFirstDay] = useState(new Date("2026", props.month).getDay());
    const [lastDate, setLastDate] = useState(new Date("2026", props.month+1, "0").getDate());

    useEffect(()=> {
        setFirstDay(new Date("2026", props.month).getDay());
        setLastDate(new Date("2026", props.month+1, "0").getDate());
    }, [props.month]);
  

    return (
        <>
            <Navbar changeMonth={props.changeMonth} month={months[props.month]}/>
            <div className="calendar">

                {days.map((day) => (
                    <div className='days' key={day} >{day}</div>
                ))}

                {Array.from({length: firstDay}).map((_, index) => (
                    <div className="date" key={index}></div>
                ))}

                {Array.from({length: lastDate}).map( (_, date) => (
                    <div className="date" key={date}>
                       {date+1}
                    </div>
                ))}

                {Array.from({length: 35-(lastDate+firstDay)}).map( (_, index) => (
                    <div className="date" key={index}>
                       
                    </div>
                ))}


            </div>
        </>
    );
}
