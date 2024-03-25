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
                        Aspiring Frontend Web Developer.
                    </p>
                </div>

                <div className="hero--socials">
                    <a className="hero--section--socials-link" href="https://www.linkedin.com/in/neillorrainecb/">
                    <i class="fa-brands fa-linkedin"></i>
                    </a>

                    <a className="hero--section--socials-link" href="https://github.com/neillorrainecb">              
                    <i class="fa-brands fa-square-github"></i>
                    </a>

                    <a className="hero--section--socials-link" href="https://www.behance.net/neillorrainecb">
                    <i class="fa-brands fa-square-behance"></i>
                    </a>  

                    <a className="hero--section--socials-link" href='mailto:neillorrainecb@gmail.com'>
                    <i class="fa-solid fa-square-envelope"></i>
                    </a>
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