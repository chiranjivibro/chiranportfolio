import OneP from "../Modules/Portfolio/OneP";
import Seo from '../Components/Seo.jsx';
function Portfolio() {
    return(
        <>
        <Seo
      title="Portfolio | Visit our portfolio to view the developer's past projects"
      description="Visit our portfolio to view the developer's past projects, complete with certifications, testimonials, and recognitions that showcase their skills and achievements."
      image="https://yourdomain.com/images/about-banner.jpg"
    />
        <OneP/>
        </>
    );
}
export default Portfolio