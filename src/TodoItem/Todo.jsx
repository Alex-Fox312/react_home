import { useState, useCallback } from 'react';
import './StyleTodo.css'


function Todo(props) {
    const [status,setStatus] = useState('♬STOP♬')
    
    const statusChange = useCallback ( () => { 
        if (status === '♬STOP♬') {
            setStatus('♫PLAY♫');
        }
        if (status === '♫PLAY♫') {
            setStatus('♬STOP♬')
        }

    } )
    return (
        <div className={`todo is-${status}`}>
            <div className={`todo-name is-${status}`}>
            {props.song}
            </div>
            <div className={`todo-status is-${status}`} >
                {status}
            </div>
            <button onClick={statusChange}> ▶ / ▉ </button>
            
        </div>
        
    );
}

export default Todo;