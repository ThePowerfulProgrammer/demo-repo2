import React from 'react';
import '../App.css';


function Navbar() {
    //Js
    const link = 'https://getbootstrap.com/docs/5.0/components/navbar/'
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            
            <div className="container-fluid">
                <a className="navbar-brand" href={link}>Home</a>
               
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="navbar-collapse collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav  ms-auto">
                        <li className="nav-item"><a className="nav-link active" href="blog.html">Blog</a></li>
                        <li className="nav-item"><a className="nav-link">Sign In</a></li>
                        <li className="nav-item"><a className="nav-link">Contact</a></li>
                    </ul>
                    <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
                        <button className="btn btn-outline-success mybtn">Search</button>
                    </form>

                </div>

            </div>
        </nav>
    )
}


export default Navbar;