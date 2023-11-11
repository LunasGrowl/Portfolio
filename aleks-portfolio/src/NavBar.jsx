import react from 'react'

export default function NavBar(){
    return(
        <nav className='navbar--container'>
            <h1>Aleksander Bychawski </h1>
            <ul className='navbar--items'>
                <li>About me</li>
                <li>Resume</li>
                <li>Portfolio</li>
                <li>Contact</li>
            </ul>
        </nav>
    )
}