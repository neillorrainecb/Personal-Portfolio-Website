import Data from './Resume';
import Card from "./Card";

export default function Experience(){
    return( 
    <section id="experience" className="exp--section exp--resume exp--container">
        <div className="exp--section--title">
            <h2 className="heading--title">Qualification</h2>
            <p className="sub--title">Academic and Job Experience Journey</p>
        </div>

        <div className="resume--container grid">
            <div className="timeline grid">
                <h3 className="exp--title">Academic</h3>
                <hr className="exp--divider" />
                {Data.map((val, id) => {
                    if(val.category === "education"){
                        return(
                            <Card 
                                key={id} 
                                icon={val.icon} 
                                title={val.title} 
                                year={val.year} 
                                course={val.course} 
                                desc={val.desc}
                            />
                        )
                    }
                })}
            </div>

            <div className="timeline grid">
            <h3 className="exp--title">Job Experience</h3>
            <hr className="exp--divider" />
                {Data.map((val, index) => {
                    if(val.category === "experience"){
                        return(
                            <Card 
                                key={index} 
                                icon={val.icon} 
                                title={val.title} 
                                year={val.year} 
                                desc={val.desc}
                            />
                        )
                    }
                })}
            </div>
        </div>
    </section>
    );
}