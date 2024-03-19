export default function AboutMe(){
    return(
        <section id="aboutMe" className="about--section">
            <div className="about--section--img">
                <img src="./img/about-img.png" alt="Hero Section" />
            </div>
            <div className="hero--section--content-box about--section--box">
                <div className="about--section--content">
                    <p className="sub--title">Get To Know More</p>
                    <h1 className="heading--title">About Me</h1>
                    <p className="about--section-description">Hello, I'm Neil Lorraine Bundoc, a fresh graduate with a Bachelor's degree in Computer Science at National University Laguna. I am seeking an opportunity to widen my knowledge and to apply my acquired skills and abilities to contribute to my personal and company growth and development. </p>

                    
                    <p className="subi--title">Skills</p>
                    <div className="skills">
                        <div className="box-container">
                            <div className="box">
                                <i class="fa-brands fa-java skills-icon"></i>
                            </div>
                            
                            <div className="box">
                                <i class="fa-brands fa-html5 skills-icon"></i>
                            </div>

                            <div className="box">
                                <i class="fa-brands fa-css3-alt skills-icon"></i>
                            </div>

                            <div className="box">
                                <i class="fa-brands fa-php skills-icon"></i> 
                            </div>
                            
                            <div className="box">
                                <i class="fa-brands fa-react skills-icon"></i>
                            </div>

                            <div className="box">
                                <i class="fa-brands fa-js skills-icon"></i>
                            </div>

                            <div className="box">
                            <i class="fa-brands fa-figma skills-icon"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}