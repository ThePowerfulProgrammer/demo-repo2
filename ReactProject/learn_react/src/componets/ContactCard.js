import React from 'react'
import '../App.css';

function ContactCard(props) {
    //JS

    return (
        <div className="container mt-2">
            <div className='card mb-2 rounded border-dark '>
                <img src={props.cardImg} className='card-img-top' alt=''></img>
                <div className="card-body">
                    <h2 className="card-title">{props.cardTitle}</h2>
                    <p className="card-text">{props.cardText}</p>
                    <a className='btn btn-sm btn-warning py-2 px-3' href="">Read</a>
                </div>
            </div>
        </div>
    )
}

export default ContactCard;