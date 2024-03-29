
export default function Portfolio(){

    return(
        <div className="portfolio--container" id="portfolio--section">
            <h2 className = "section--title">Portfolio</h2>
            <h1 className="section--subTitle">Projects</h1>
            <div className="portfolio--projectContainer">
                <div className="portfolio--project">
                    <img className="project--image" src="./images/xivTimetable.jpg"/>
                    <div className="project--information">   
                        <div className="project--name">
                            <h4>
                                <a href="https://final-fantasy-timetable.web.app/">
                                    <em> XIV Timetable<i class="bi bi-arrow-right"></i></em>
                                </a>
                            </h4>
                        </div>
                    <p>This is a web application that was made for the Final Fantasy XIV community. It is used to help groups plan out fights in the game with ease and supports sharing custom made time tables with other players</p>
                    <h5 className="portfolio--tags tag-react"><em>#JQuery</em></h5>
                    <h5 className="portfolio--tags tag-react"><em>#Github</em></h5>
                    <h5 className="portfolio--tags tag-react"><em>#Firebase</em></h5>
                    <h5 className="portfolio--tags tag-react"><em>#URL Manipulation</em></h5>
                    </div>
                </div>
            </div>
        </div>
    )
}