import Navbar from './Navbar';
import './calendar.css';

export default function Calendar(props) {
    let cal = [];
    //const days = Array.from({length: 7});
    const days = ['Mon', 'Tues', 'Wed', 'Thrus', 'Fri', 'Sat', 'Sun']

    for (let i = 0; i < 7; i++) {
        let week = [];
        for (let j = 0; j < 5; j++) {
            week[j] = i*5+j+1;
        }
        cal[i] = week;
    }

    return (
        <>
            <Navbar changeMonth={props.changeMonth} />
            <div className="calendar">

                {days.map((day) => (
                    <div className='days' key={day} >{day}</div>
                ))}

                {cal.map((week, weekIndex) => (
                    <div className="week" key={weekIndex}>
                        {week.map((date, dateIndex) => (
                            <div className="date" key={dateIndex}>
                                {date}
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </>
    );
}
