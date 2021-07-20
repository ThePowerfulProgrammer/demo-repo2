import React from 'react'
import ContactCard from './ContactCard';
import data from './data';

function Banner() {
    //Js goes here
    // array destructuring, useState()
    //     var,     function()

    const [message, setMessage] = React.useState("Straight from the mind of a once struggling developer")

    function handleClick() {
        setMessage("Straight from the mind of a STILL struggling developer")
    }

    // use data from a json file                             cardImg === cardImg in ContactCard, data.cardImg === key in data.js
    const Data = data.map(data => <ContactCard key={data.id} cardImg={data.cardImg} cardTitle={data.cardTitle} cardText={data.cardText}/>)

    return (
        <div>
            <div className='container'>
                <div className="jumbotron  mt-2 p-2 p-md-5 text-white bg-dark">
                    <h1 className="display-4">A pratical blog for impratical developers</h1>
                    <hr className="my-4"></hr>
                    <p className="lead">{message}</p>
                    <p className="lead">
                        <a className="btn btn-md btn-info p-2" href="#" onClick={handleClick}>Learn more</a>
                    </p>
                </div>
            </div>

            {Data}

        </div>
    )

}

export default Banner;