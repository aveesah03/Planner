import Navbar from './Navbar';
import './calendar.css';

export default function Calendar() {
    let cal = [];

    for (let i = 0; i < 5; i++) {
        let week = [];
        for (let j = 0; j < 7; j++) {
            week[j] = j + 1;
        }
        cal[i] = week;
    }

    return (
        <>
            <Navbar />
            <div className="calendar">
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
