export default function AboutMe(){
    return(
        <div className="portfolio--container">
            <h2 className = "section--title">Portfolio</h2>
            <h1 className="section--subTitle">Projects</h1>
            <div className="portfolio--projectContainer">
                <div className="portfolio--project">
                    <img className="project--image" src="./src/images/xivTimetable.jpg"/>
                    <div className="project--information">   
                        <div className="project--name">
                            <h4><em>XIV Timetable</em></h4>
                            <a class="icon-link" href="#">
                                <svg class="bi" aria-hidden="true">
                                    <use xlink:href="#arrow-right"></use>
                                </svg>
                            </a>
                        </div>
                    <p></p>
                    </div>
                </div>
            </div>
        </div>
    )
}