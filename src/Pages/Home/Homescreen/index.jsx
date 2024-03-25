import AboutMe from "../AboutMe";
import Certificate from "../Certificate";
import Experience from "../Experience";
import HeroSection from "../HeroSection";
import Portfolio from "../Portfolio";
import Footer from "../Footer";

export default function Home (){
    return(
        <>
            <HeroSection />
            <AboutMe />
            <Portfolio />
            <Experience />
            <Certificate />
            <Footer />
        </>
    )
}