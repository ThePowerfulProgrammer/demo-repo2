import React from 'react';

function Bio(props) {

    return(
        <div className="container text-center">
            <p>{props.name}</p>
            <p>{props.surname}</p>
            <p>{props.age}</p>
        </div>
    )
}

export default Bio;