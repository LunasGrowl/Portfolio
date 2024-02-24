export default function Resume(){
    return(
        <div className="resume--container" id="resume--section">
            <h2 className="section--title">Resume</h2>
            <h1 className="section--subTitle">Check My Resume</h1>
            <div className="resume--columns">
                <div className="resume--column">
                    <h3 className="resume--title">Summary</h3>
                    <div className="resume--item">
                        <h4>Aleksander Bychawski</h4>
                        <p><em>A computer graduate student who has finished his 4 years of computer science studying</em></p>
                        <ul>
                            <li>54a Guildford Road, Portsmouth</li>
                            <li>07502001415</li>
                            <li>abychawski@gmail.com</li>
                        </ul>
                    </div>
                    <h3 className="resume--title">Education</h3>
                    <div className="resume--item">
                        <h4>MSc Information Systems</h4>
                        <h5>2022-2023</h5>
                        <p><em>University of Portsmouth, Portsmouth, Hempshire</em></p>
                        <p>This course helped me further expand my knowledge of computer systems while also being granted the opportunity to work on group projects to accomplish tasks that are usually requested.</p>
                    </div>
                    <div className="resume--item">
                        <h4>BSc Computer Science</h4>
                        <h5>2019-2022</h5>
                        <p><em>University of Portsmouth, Portsmouth, Hempshire</em></p>
                        <p>This course was a journey that led me through different aspects of computer systems. These ranged from Algorithms, Databases, Networks, and Programming Languages. I was tasked with a variety of different projects some requiring independent studying while others were group projects that involved me collaborating with other students on the course.  </p>
                    </div>
                </div>
                <div className="resume--column">
                    <div className="resume--item">
                        <h4>BTEC Level 3 ICT Extended Diploma</h4>
                        <h5>2017-2019</h5>
                        <p><em>Barnet Southgate College, High Barnet, London</em></p>
                        <p>This was the first stepping stone towards my interest in the computing world. During my duration on this course I was inntroduced to basic computing aspects and assigned small projects to test the information gained from these aspects.</p>
                    </div>
                    <h3 className="resume--title">Work Expirience</h3>
                    <div className="resume--item">
                        <h4>Front End Website Developer</h4>
                        <h5>2019</h5>
                        <p><em>Jacaranda Healthcare</em></p>
                        <p>During my time at collage, I was given the chance to work for Jacaranda Healthcare. Jacaranda required a refresh to their online website. I was tasked with creating a new look for their website to help draw in new customers while also creating an easier platform for existing customers. This required me to work closely with the head client to ensure the website lived up to the vision and goal they had for the website.</p>
                    </div>
                    <div className="resume--item">
                        <h4>Coffee Baristsa / Supervisor</h4>
                        <h5>2017 - Current</h5>
                        <p><em>Starbucks</em></p>
                        <p>During my studies I worked at Starbucks as a part time employee. It provided me with speaking skills that help with identifying issues and aims a client may have.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}