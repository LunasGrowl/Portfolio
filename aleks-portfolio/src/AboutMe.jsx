export default function AboutMe(){
    return(
        <div className="aboutMe--container">
            <h2 className = "section--title">About</h2>
            <h1 className="section--subTitle">Learn About Me</h1>
            <div className="aboutMe--content">
                <img className="aboutMe--image" src="./src/images/Aleks-croped.jpg" />
                <div className="aboutMe--information">
                    <h2 className="aboutMe--position">Graduate Computer Science Student From the University of Portsmouth</h2>
                    <p className="aboutMe--">Just soem mumbo jumb about me</p>
                    <ul>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </div>
            </div>
            <p>Some more mumbo jumbo to talk about</p>
        </div>
    )
}