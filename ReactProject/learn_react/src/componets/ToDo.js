import React from 'react';
import '../styles/ToDo.css';


function ToDo(props) {
    //Js

    return (
        <div className="todo-item">
            <input type="checkbox"/>
            <p>{props.text}</p>

        </div>
    )

}

export default ToDo;