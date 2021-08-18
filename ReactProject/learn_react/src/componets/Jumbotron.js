import React from "react";
import '../App.css'

function Jumbotron() {
    // js

    const [message, setMessage] = React.useState("Lorem ipsum, after all, is derived from dolorem ipsum, meaning Which means we're already halfway to the heights of gothic delectation.".toLowerCase())

    function handleClick() {
        setMessage("Straight from the mind of a STILL struggling developer".toUpperCase())
    }


    return (
        <div className="container">
            <div className="jumbotron mt-2 p-4 bg-light myJumbo">
                <h1 className="display-4">A Jumbotron</h1>
                <p className="lead">A paragraph of Comp Sci jokes: Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Molestias ducimus ipsum reiciendis asperiores enim porro quam nesciunt officia reprehenderit?
                Labore repudiandae repellat iure sunt provident! Aliquam alias vero quam fuga fugiat amet aliquid consectetur officiis,
                voluptatem earum itaque repellendus impedit voluptas eos expedita, tenetur perferendis qui in dignissimos consequatur praesentium?</p>
                <hr className="my-4"/>
                <p className="lead">Yes that is a paragraph of jokes and a placeholder paragraph ;)</p>
                <p className="lead">{message}</p>
                <a className="btn btn-lg  mt-2 btn-warning" href="#" onClick={handleClick}>Button</a>
            </div>
        </div>
    )
}

export default Jumbotron;