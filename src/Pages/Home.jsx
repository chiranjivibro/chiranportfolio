import First from "../Modules/Home/First";
import Fourth from "../Modules/Home/Fourth";
import Second from "../Modules/Home/Second";
import Third from "../Modules/Home/Third";
import Seo from '../Components/Seo.jsx';
function Home() {
    return(
        <>
        <Seo
      title="Home | UI Designer and Frontend Web Developer"
      description="Delve into the work of a professional UI Designer and Frontend Web Developer. Experience a blend of aesthetic design and functional web development."
      image="https://yourdomain.com/images/about-banner.jpg"
    />
        <First/>
        <Second/>
        <Third/>
        <Fourth/>
        </>
    );
}
export default Home