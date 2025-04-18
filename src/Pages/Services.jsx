import OneS from "../Modules/Services/OneS";
import TwoS from "../Modules/Services/TwoS";
import Seo from '../Components/Seo.jsx';
function Services() {
    return(
        <>
        <Seo
      title="Services | Expertise in mockup web design, frontend development, and responsive frameworks"
      description="Uncover my talents in mockup web design and frontend development. I create responsive, SEO-friendly websites that captivate and engage users effectively."
      image="https://yourdomain.com/images/about-banner.jpg"
    />
        <OneS/>
        <TwoS/>
        </>
    );
}
export default Services