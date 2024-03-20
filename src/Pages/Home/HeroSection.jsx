export default function HeroSection (){
    return <section id="heroSection" className="hero--section"> 
            <div className="hero--section--content-box">
                <div className="hero--section--content">
                    <p className="section--title">Hey, I'm</p>
                    <h1 className="hero--section--title">
                        <span className="hero--section--title--color">
                            Neil Lorraine
                        </span>{" "}
                        <br />
                            Bundoc
                    </h1>
                    <p className="hero--section-description">
                        Graduate of Bachelor of Science in Computer Science 
                        <br />
                        at National University Laguna.
                    </p>
                </div>

               <a href = "./img/Resume.pdf" target="\_blank">
                    <button className="btn btn-primary">Resume</button>
                </a>
            </div>

            <div className="hero--section--img">
                <img src="./img/hero-img.png" alt="Hero Section" />
            </div>
        </section>
}