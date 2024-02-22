export default function Contact(){
    return(
        <div className="contact--container">
            <h2 className = "section--title">Contact</h2>
            <h1 className="section--subTitle">Contact Me</h1>
            <div className="contact--sections">
                <div className="contact--section">
                    <i class="bi bi-geo-alt-fill"></i>
                    <div className="contact--sectionInfo">
                        <h3>My Address</h3>
                        <p>54a Guildford Road, Portsmouth, PO1 5BE</p>
                    </div>
                </div>
                <div className="contact--section">
                    <i class="bi bi-geo-alt-fill"></i>
                    <div className="contact--sectionInfo">
                        <h3>Socials</h3>
                        <a href="https://www.facebook.com/aleks.bychawski"><i class="bi bi-facebook"></i></a>
                        <a href="https://www.instagram.com/abychawski/"><i class="bi bi-instagram"></i></a>
                        <a href="https://www.linkedin.com/in/aleksander-bychawski-294856123/"><i class="bi bi-linkedin"></i></a>
                        <a href="https://github.com/LunasGrowl"><i class="bi bi-github" ></i></a>
                        
                    </div>
                </div>
                <div className="contact--section">
                    <i class="bi bi-geo-alt-fill"></i>
                    <div className="contact--sectionInfo">
                        <h3>Email</h3>
                        <p>abychawski@gmail.com</p>
                    </div>
                </div>
                <div className="contact--section">
                    <i class="bi bi-geo-alt-fill"></i>
                    <div className="contact--sectionInfo">
                        <h3>Phone</h3>
                        <p>07502001415</p>
                    </div>
                </div>
            </div>
        </div>
    )
}