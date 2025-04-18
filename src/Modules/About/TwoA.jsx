import Goals from '../../assets/Goals.webp';

function TwoA() {
    return(
        <>
        <div className="w-[100%] h-[1592px] sm:h-[1036px] md:h-[1003px] lg:h-[1193px] xl:h-[1115px] m-auto px-4 sm:px-4 md:px-4 lg:px-14 pt-[1px] pb-[25px] bg-[#f4f4f7]">
            <section>
        <div className="w-[100%] m-auto pt-[50px] pb-[50px] relative">
                  <h2 className="text-center text-[55px] sm:text-[55px] md:text-[55px] lg:text-[55px] xl:text-[225px] text-[#e5e5e5] font-primary-head font-bold">Goals</h2>
                  
                    <div className="absolute top-[175px] xl:top-[244px] w-[100%] ">
                      <div className="flex flex-col sm:flex-col md:flex-col lg:flex-row xl:flex-row justify-between">

                        <div className='w-[100%] sm:w-[100%] md:w-[100%] lg:w-[100%] xl:w-[35%]'>
                            <img src={Goals} alt='goals' className='hidden lg:block float-left max-w-full h-auto'/>
                        </div>

                        <div className='w-[100%] sm:w-[100%] md:w-[100%] lg:w-[100%] xl:w-[60%]'>
                            <div>
                            <h4 className="uppercase font-secondary-head font-bold text-[14px] text-[#7c4091] tracking-wider mb-[17px]">target</h4>
                            <h5 className="font-primary-head font-medium text-[35px]">My Goals</h5>
                            </div>
                            <p className='font-secondary-head font-medium text-[17px] leading-[31px] text-[#646464] mt-[45px] mb-[45px]'>For the website to have direction and coherence, it must be constructed around particular objectives that you hope to accomplish. A smart objective for a website is one that is time-bound, relevant, quantifiable, reachable, and particular in order to enhance the site's functionality. determining the intended result, the target audience, and the deadline for completion.</p>

                            <div className='relative pl-[43px] sm:pl-[43px] md:pl-[43px] lg:pl-[43px] xl:pl-[75px]'>

                            <div className='absolute top-[37px] left-[-33px]'>
                                <h3 className='relative font-secondary-head text-[16px] text-[#a434cc] uppercase tracking-[7px] rotate-[90deg] after:absolute after:top-[12px] after:right-[-65px] after:content:"" after:bg-[#728f15] after:w-[50px] after:h-[1px]' >Goals</h3>
                            </div>

                        <div className='font-secondary-head mb-[25px]'>
                            <h2 className='font-semibold text-[17px] sm:text-[17px] md:text-[17px] lg:text-[17px] xl:text-[19px] text-[#728f15] mb-[15px] sm:mb-[15px] md:mb-[15px] lg:mb-[15px] xl:mb-[21px]'>1. Quality Theme Mockup</h2>
                            <p className='text-[16px] sm:text-[16px] md:text-[16px] lg:text-[16px] xl:text-[17px] leading-[29px]'>The goals of top-notch web design themes are to improve user experience, build brand identification, and eventually increase conversions. A visually appealing and user-friendly interface, responsive design across devices, speed and SEO optimization, and fostering visitor trust are among the main objectives.</p>
                        </div>

                        <div className='font-secondary-head mb-[25px]'>
                            <h2 className='font-semibold text-[17px] sm:text-[17px] md:text-[17px] lg:text-[17px] xl:text-[19px] text-[#728f15] mb-[15px] sm:mb-[15px] md:mb-[15px] lg:mb-[15px] xl:mb-[21px]'>2. Clients Satisfaction</h2>
                            <p className='text-[16px] sm:text-[16px] md:text-[16px] lg:text-[16px] xl:text-[17px] leading-[29px]'>By concentrating on a few main goals and objectives, such as increasing consumer loyalty, boosting usability, and fostering trust, web designers put the needs of their clients first.</p>
                        </div>

                        <div className='font-secondary-head mb-[25px]'>
                            <h2 className='font-semibold text-[17px] sm:text-[17px] md:text-[17px] lg:text-[17px] xl:text-[19px] text-[#728f15] mb-[15px] sm:mb-[15px] md:mb-[15px] lg:mb-[15px] xl:mb-[21px]'>3. Best Managed Websites</h2>
                            <p className='text-[16px] sm:text-[16px] md:text-[16px] lg:text-[16px] xl:text-[17px] leading-[29px]'>Improving user experience is web design's main objective. Putting functionality first and making sure users can navigate the website and its features with ease are at the heart of this goal.</p>
                        </div>

                </div>
                        </div>

                      </div>
                    </div>
                  
                </div>
            </section>
        </div>
        </>
    );
}
export default TwoA