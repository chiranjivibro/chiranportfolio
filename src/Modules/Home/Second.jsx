import Services from '../../assets/Services.webp';
function Second() {
    return(
        <>
        <div className="w-[100%] m-auto px-4 sm:px-4 md:px-4 lg:px-14 xl:px-14 pt-[37px] sm:pt-[37px] md:pt-[37px] lg:pt-[37px] xl:pt-[131px] pb-[25px] bg-[#f4f4f7]">
            <section>

            <div className="flex flex-col sm:flex-col md:flex-col lg:flex-col xl:flex-row justify-between">

            <div className="w-[100%] sm:w-[100%] md:w-[100%] lg:w-[100%] xl:w-[40%]">
                     <img src={Services} alt="services" className='hidden xl:block max-w-full h-auto float-left'/>
                </div>

                <div className="w-[100%] sm:w-[100%] md:w-[100%] lg:w-[100%] xl:w-[55%] pt-[35px]">
                    <h2 className='font-secondary-head font-bold text-[14px] tracking-[3px] text-[#7c4091] uppercase mb-[15px]'>my services</h2>
                    <h3 className='font-primary-head font-medium text-[21px] sm:text-[31px] md:text-[31px] lg:text-[31px] xl:text-[31px] text-[#728f15] tracking-wide mb-[40px]'>Here Are Some of My Skills</h3>

                    <div className='relative pl-[55px] sm:pl-[55px] md:pl-[55px] lg:pl-[55px] xl:pl-[75px]'>
                    <div className='absolute top-[65px] left-[-39px]'>
                        <h3 className='relative font-secondary-head text-[16px] text-[#a434cc] uppercase tracking-[7px] rotate-[90deg] after:absolute after:top-[12px] after:right-[-65px] after:content:"" after:bg-[#728f15] after:w-[50px] after:h-[1px]' >services</h3>
                    </div>

                    <div className='w-[100%] mb-[5px] sm:mb-[5px] md:mb-[5px] lg:mb-[5px] xl:mb-[50px]'>
                        <div className='flex flex-col sm:flex-row md:flex-row lg:flex-row xl:flex-row justify-around'>
                            <div className='w-[100%] sm:w-[100%] md:w-[100%] lg:w-[100%] xl:w-[48%] mb-[25px] sm:mb-[25px] md:mb-[25px] lg:mb-[25px] xl:mb-[0px]'>
                                <h4 className='font-secondary-head font-semibold text-[16px] sm:text-[16px] md:text-[16px] lg:text-[16px] xl:text-[17px] text-[#728f15] uppercase mb-[15px]'>1. Web Mockup Design</h4>
                                <ul className="list-disc pl-[35px] font-secondary-head font-medium text-[#808080] text-[15px] sm:text-[15px] md:text-[15px] lg:text-[15px] xl:text-[17px] leading-[33px]">
                                    <li>UI Design</li>
                                    <li>Website Theme Mockup</li>
                                    <li>Re-design Website</li>
                                    <li>Pixel Perfect Design</li>
                                    <li>Photoshop</li>
                                </ul>
                            </div>

                            <div className='w-[100%] sm:w-[100%] md:w-[100%] lg:w-[100%] xl:w-[48%] mb-[25px] sm:mb-[25px] md:mb-[25px] lg:mb-[25px] xl:mb-[0px]'>
                            <h4 className='font-secondary-head font-semibold text-[16px] sm:text-[16px] md:text-[16px] lg:text-[16px] xl:text-[17px] text-[#728f15] uppercase mb-[15px]'>2. Front end development</h4>
                                <ul className="list-disc pl-[35px] font-secondary-head font-medium text-[#808080] text-[15px] sm:text-[15px] md:text-[15px] lg:text-[15px] xl:text-[17px] leading-[33px]">
                                    <li>HTML / CSS</li>
                                    <li>Javascript </li>
                                    <li>React</li>
                                    <li>Wordpress</li>
                                    <li>No Code</li>
                                </ul>
                            </div>
                            
                        </div>
                    </div>

                    <div className='w-[100%]'>
                        <div className='flex flex-col sm:flex-row md:flex-row lg:flex-row xl:flex-row justify-around'>
                            <div className='w-[100%] sm:w-[100%] md:w-[100%] lg:w-[100%] xl:w-[48%] mb-[25px] sm:mb-[25px] md:mb-[25px] lg:mb-[25px] xl:mb-[0px]'>
                                <h4 className='font-secondary-head font-semibold text-[16px] sm:text-[16px] md:text-[16px] lg:text-[16px] xl:text-[17px] text-[#728f15] uppercase mb-[15px]'>3. Frontend frameworks </h4>
                                <ul className="list-disc pl-[35px] font-secondary-head font-medium text-[#808080] text-[15px] sm:text-[15px] md:text-[15px] lg:text-[15px] xl:text-[17px] leading-[33px]">
                                    <li>Bootstrap</li>
                                    <li>React Js</li>
                                    <li>Tailwind CSS</li>
                                </ul>
                            </div>

                            <div className='w-[100%] sm:w-[100%] md:w-[100%] lg:w-[100%] xl:w-[48%] mb-[25px] sm:mb-[25px] md:mb-[25px] lg:mb-[25px] xl:mb-[0px]'>
                            <h4 className='font-secondary-head font-semibold text-[16px] sm:text-[16px] md:text-[16px] lg:text-[16px] xl:text-[17px] text-[#728f15] uppercase mb-[15px]'>4. More Likes...</h4>
                                <ul className="list-disc pl-[35px] font-secondary-head font-medium text-[#808080] text-[15px] sm:text-[15px] md:text-[15px] lg:text-[15px] xl:text-[17px] leading-[33px]">
                                    <li>GIT</li>
                                    <li>Friendly Responsive Design </li>
                                    <li>Testing and Debugging</li>
                                    <li>Cross-Browser Development </li>
                                </ul>
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
export default Second