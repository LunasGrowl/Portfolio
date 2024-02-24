import React from "react";

export default function NavBar(){
    const portfolio = document.getElementById("portfolio--section");

    return(
        <nav className='navbar--container fixed-top'>
            <h1>Aleksander Bychawski </h1>
            <ul className='navbar--items'>
                <a href="#aboutMe--section"><li>About me</li></a>
                <a href="#resume--section"><li>Resume</li></a>
                <a href="#portfolio--section"><li>Portfolio</li></a>
                <a href="#contact--section"><li>Contact</li></a>
            </ul>
        </nav>
    );
};