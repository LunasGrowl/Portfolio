export default function Portfolio(){
    
    return(
    <div className="portfolio--project">
        <img className="project--image" src="./images/xivTimetable.jpg"/>
        <div className="project--information">   
            <div className="project--name">
                <h4>
                    <a href="https://final-fantasy-timetable.web.app/">
                        <em> XIV Timetable <i class="bi bi-arrow-right"></i></em>
                    </a>
                </h4>
            </div>
        <p>This is a web application that was made for the Final Fantasy XIV community. It is used to help groups plan out fights in the game with ease and supports sharing custom made time tables with other players</p>
        </div>
    </div>
    )
}