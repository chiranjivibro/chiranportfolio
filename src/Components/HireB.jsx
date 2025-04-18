
import { GoArrowRight } from "react-icons/go";
function HireB({title}) {
   
    return(
        <>
       <a
      href="/Chiranjivi_Resume.pdf"
      download
      className="bg-[#728f15] text-[#e3e3e3] px-4 sm:px-4 md:px-4 lg:px-4 xl:px-7 py-3 sm:py-3 md:py-3 lg:py-3 xl:py-4 flex items-center gap-2 border-[1px] hover:bg-[#5c7310] hover:text-[#ffffff] text-[15px] sm:text-[15px] md:text-[15px] lg:text-[15px] xl:text-[17px] font-secondary-head font-medium tracking-[1px] mt-[29px] sm:mt-[29px] md:mt-[29px] lg:mt-[29px] xl:mt-[64px] mb-[0px] sm:mb-[29px] md:mb-[29px] lg:mb-[29px] xl:mb-[0px] cursor-pointer"
    >
      {title} <GoArrowRight />
    </a>
        </>
    );
}
export default HireB