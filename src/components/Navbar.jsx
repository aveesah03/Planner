import { useRef } from 'react';
import './calendar.css'

export default function Navbar(props) {
    const monthRef = useRef(null);

    const onArrowButtonClick = (operation) => {
        monthRef.current.innerText  = props.changeMonth(operation) + " 2026"
    }

    return (
        <div className='navbar' >
            <button  onClick={() => onArrowButtonClick("decrement")}>◀</button>
            <h2 ref={monthRef} >January 2026</h2>
            <button onClick={() => onArrowButtonClick("increment")} >▶</button>
        </div>
    );
}