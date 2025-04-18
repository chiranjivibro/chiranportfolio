import OneC from "../Modules/Contact/OneC";
import TwoC from "../Modules/Contact/TwoC";
import Seo from '../Components/Seo.jsx';
function Contact() {
    return(
        <>
         <Seo
      title="Contact | A certified IT professional"
      description="Get in touch with a certified IT professional focused on enhancing your business's security and availability. Expert help is just a message away."
      image="https://yourdomain.com/images/about-banner.jpg"
    />
        <OneC/>
        <TwoC/>
        </>
    );
}
export default Contact