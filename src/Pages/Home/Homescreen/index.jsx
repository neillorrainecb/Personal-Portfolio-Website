import AboutMe from "../AboutMe";
import Experience from "../Experience";
import HeroSection from "../HeroSection";
import Portfolio from "../Portfolio";

export default function Home (){
    return(
        <>
            <HeroSection />
            <AboutMe />
            <Experience />
            <Portfolio />
        </>
    )
}