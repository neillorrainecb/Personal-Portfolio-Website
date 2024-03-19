import data from "../../data/index.json";

export default function Portfolio(){
    return( 
    <section id="portfolio" className="portfolio--section">
       <div className="portfolio--container--box">
            <div className="portfolio--container">
                <h2 className="section--heading">Portfolio</h2>
                <p className="sub--title">Recent Projects</p>
            </div>

            <div>
                <button className="btn btn-github">
                <i class="fa-brands fa-github-alt"></i>
                Visit My Github
                </button>
            </div>
       </div>
       <div className="portfolio--section--container">
        {data?.portfolio?.map((item, index)=> (
            <div key={index} className="portfolio--section--card">
                <div className="portfolio--section--img">
                    <img src={item.src} alt="Placeholder" />
                </div>
                <div className="portfolio--section--card--content">
                    <div>
                        <h3 className="portfolio--section--title">{item.title}</h3>
                        <p className="text-md">{item.description}</p>
                    </div>
                    <p className="text-sm portfolio--link">{item.link}
                    <i class="fa-solid fa-arrow-up-right-from-square"></i>
                    </p>

                    <p className="text-sm portfolio--link">{item.demo}
                    <i class="fa-solid fa-arrow-up-right-from-square"></i>
                    </p>
                </div>
            </div>
        ))}
       </div>
    </section>
    );
}