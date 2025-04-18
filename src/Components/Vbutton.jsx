import { useNavigate } from "react-router-dom";
import { GoArrowRight } from "react-icons/go";
function Vbutton({title}) {
    const Navigate = useNavigate();
    return(
        <>
        <button onClick={() => {
            Navigate("/portfolio");
        }} className="bg-[#f4f4f7] text-[#7c4091] px-7 py-4 flex items-center gap-2 border-[1px] hover:bg-[#7c4091] hover:text-[#ffffff] text-[17px] font-secondary-head font-medium tracking-[1px] mt-[29px] sm:mt-[29px] md:mt-[29px] lg:mt-[29px] xl:mt-[64px] cursor-pointer">
           {title} <GoArrowRight />
        </button>
        </>
    );
}
export default Vbutton