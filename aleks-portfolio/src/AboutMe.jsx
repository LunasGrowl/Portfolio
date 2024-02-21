export default function AboutMe(){
    return(
        <div className="aboutMe--container">
            <h2 className = "section--title">About</h2>
            <h1 className="section--subTitle">Learn About Me</h1>
            <div className="aboutMe--content">
                <img className="aboutMe--image" src="./src/images/Aleks-croped.jpg" />
                <div className="aboutMe--information">
                    <h2 className="aboutMe--position">Computer Science Graduate from the University of Portsmouth</h2>
                    <p className="aboutMe--miniDescription">A junior programmer who wants to expand his knowledge of multiple different programming languages to better express his creative vision</p>
                    <ul>
                        <li><b>Birthday: </b> 23 December 2000</li>
                        <li><b>Phone: </b> 07502001415</li>
                        <li><b>City: </b> Portsmouth, UK</li>
                        <li><b>Age: </b> 23</li>
                        <li><b>Degree: </b> Masters</li>
                    </ul>
                    <p className="aboutMe--description"> 
                    In 2017 I decided to pursue my interest in IT by taking it up as my main subject during my time in college. After this, I proceeded to further develop my knowledge and skills by going to the University of Portsmouth and undertaking the Computer Science degree course. During my degree, I was provided the opportunity to learn more about the inner workings of computer systems while also being granted the opportunity to learn different programming languages and tools that are used in the computing world. After my degree, I sought to further expand my currently obtained knowledge and decided to enter the Information Systems Masters course at the university. This allowed me to further expand these skills by tackling multiple different problems that occur in different computing fields and working in group environments to solve these issues.                    </p>  
                    <p className="aboutMe--description"> 
                    My main focus now is to further develop my programming skill set by diving into various different projects that would challenge the way I think and tackle these tasks. I take part in multiple different online courses to help me learn and develop my skill set in order to help me when tackling these projects.                    </p>  
                </div>
            </div>   
            <div className="aboutMe--containerInfo">
                <div className="aboutMe--list">
                    <h2 className = "section--title">Languages</h2>
                    <ul className="aboutMe--languages">
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>React</li>
                        <li>PSQL</li>
                        <li>Python</li>
                    </ul>
                </div>
                <div className="aboutMe--list">
                    <h2 className = "section--title">Interests</h2>
                    <ul className="aboutMe--languages">
                        <li>Personal Projects</li>
                        <li>Swimming & Gym</li>
                        <li>Reading</li>
                        <li>Art</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}