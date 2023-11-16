export default function AboutMe(){
    return(
        <div className="aboutMe--container">
            <h2 className = "section--title">About</h2>
            <h1 className="section--subTitle">Learn About Me</h1>
            <div className="aboutMe--content">
                <img className="aboutMe--image" src="./src/images/Aleks-croped.jpg" />
                <div className="aboutMe--information">
                    <h2 className="aboutMe--position">Graduate Computer Science Student From the University of Portsmouth</h2>
                    <p className="aboutMe--miniDescription">A junior programmer who wants to expand his knowledge of multiple different programming languages to better express his creative vision</p>
                    <ul>
                        <li><b>Birthday: </b> 23 December 2000</li>
                        <li><b>Phone: </b> 07502001415</li>
                        <li><b>City: </b> Portsmouth, UK</li>
                        <li><b>Age: </b> 22</li>
                        <li><b>Degree: </b> Masters</li>
                    </ul>
                    <p className="aboutMe--description"> During my studies in IT I have developed an intrest in front end development. This has lead me to become very engaged in the practical work that was handed out during my studies. Now that I have completed my studies I wish to further develop my knowledge of front end programming by putting it into a work enviroment and learning and developing current and new languages.</p>    
                </div>
            </div>
        <h2 className = "section--title">Languages</h2>
        <ul className="aboutMe--languages">
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>PSQL</li>
            <li>Python</li>
        </ul>
        <h2 className = "section--title">Interests</h2>
        <ul className="aboutMe--languages">
            <li>Gaming</li>
            <li>Swimming</li>
            <li>Gym</li>
            <li>Drawing</li>
        </ul>
        </div>
    )
}