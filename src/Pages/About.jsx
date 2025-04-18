import OneA from "../Modules/About/OneA";
import TwoA from "../Modules/About/TwoA";
import Seo from '../Components/Seo.jsx';
function About() {
    return(
        <>
        <Seo
      title="About | Unique design concepts and cutting-edge web development expertise"
      description="Explore the creative world of a UI Designer and Frontend Web Developer. Uncover unique design concepts and cutting-edge web development expertise."
      image="https://yourdomain.com/images/about-banner.jpg"
    />
        <OneA/>
        <TwoA/>
        </>
    );
}
export default About