import React from 'react';
import '../styles/ToDo.css';


function ToDo(props) {
    //Js
    console.log(props.completed)
    return (
        <div className="todo-item">
            <input type="checkbox" checked={props.completed} onChange={() => props.handleChange(props.id)}/>
            <p>{props.text}</p>

        </div>
    )

}


export default ToDo;