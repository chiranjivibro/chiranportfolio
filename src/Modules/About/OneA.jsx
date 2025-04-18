
import Cpcrt from '../../assets/Cpcrt.webp';
import Vbutton from '../../Components/Vbutton';


function OneA() {
    return(
        <>
         <div className="bg-[#f4f4f7] w-[100%] m-auto px-4 sm:px-4 md:px-4 lg:px-14">
            <section>  
            <div className='flex flex-col sm:flex-col md:flex-col lg:flex-row justify-between'>
            <div className='w-[100%] sm:w-[100%] md:w-[100%] lg:w-[48%] xl:w-[50%] relative'>
                <img src={Cpcrt} alt="chiranjivi" className='max-w-full h-auto float-none sm:float-none md:float-none lg:float-none xl:float-left flex items-center m-auto'/>
            </div>

            <div className='w-[100%] sm:w-[100%] md:w-[100%] lg:w-[48%] xl:w-[50%] relative pt-[35px] sm:pt-[35px] md:pt-[35px] lg:pt-[35px] xl:pt-[75px] '>
                <h1 className='font-primary-head text-[25px] sm:text-[31px] md:text-[35px] lg:text-[37px] xl:text-[41px] font-medium text-[#1e1e1e] mb-[25px] sm:mb-[25px] md:mb-[25px] lg:mb-[47px]'>
                    <span>I'm</span><br/>
                    <span className='text-[#7c4091]'>UI Designer </span>with<br/>
                    <span className='text-[#728f15]'>Frontend Web Developer</span>
                </h1>

                <div className='relative pl-[55px] sm:pl-[55px] md:pl-[55px] lg:pl-[55px] xl:pl-[75px]'>
                    <div className='absolute top-[65px] left-[-39px]'>
                        <h3 className='relative font-secondary-head text-[16px] text-[#a434cc] uppercase tracking-[7px] rotate-[90deg] after:absolute after:top-[12px] after:right-[-65px] after:content:"" after:bg-[#728f15] after:w-[50px] after:h-[1px]' >About Me</h3>
                    </div>
                    <p className=' font-secondary-head text-[17px] font-medium text-[#646464] text-justify leading-[31px]'>Based in Suryabinayak, Bhaktapur, Nepal, Chiranjivi Chaudhary is a Nepali UI/UX Frontend Designer and Developer. I am Freelancer Platform's principal designer. Previously, I worked as a web designer and was a competent teacher. I conducts design workshops all over the world with an emphasis on UI/UX PSD and productive design. Photoshop PSD, Pixel Perfect Design, Slice, Cross-Browser Check, and Responsive Cross Check are all areas in which he excels.</p>

                </div>

                <div className='pl-[55px] sm:pl-[55px] md:pl-[55px] lg:pl-[55px] xl:pl-[75px]'>
                <Vbutton title="View My Works"/>
                </div>

            </div>

          
            </div>
            </section>
        </div>
        </>
    );
}
export default OneA