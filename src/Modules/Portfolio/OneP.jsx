import React from "react";
import Momo from '../../assets/Momo.webp';
import Bhavishya from '../../assets/Bhavishya.webp';
import Everonn from '../../assets/Everonn.webp';
import Cherub from '../../assets/Cherub.webp';
import ITdesign from '../../assets/ITdesign.webp';
import Trekking from '../../assets/Trekking.webp';
import { IoIosArrowRoundForward } from "react-icons/io";

const projects = [
    {
      title: "Momo Ghar",
      image: Momo,
      description: "The one best Momo Restaurant",
      link: "https://momoghar.vercel.app/"
    },
    {
      title: "Bhavishya Consultancy",
      image: Bhavishya,
      description: "Consultancy for Abroad Study",
      link: "#"
    },
    {
      title: "Everonn Education",
      image: Everonn,
      description: "Carrer Path for Abroad",
      link: "#"
    },
    {
      title: "Cherub Education",
      image: Cherub,
      description: "Advance Counselling for Abroad",
      link: "#"
    },
    {
      title: "IT Design Lab",
      image: ITdesign,
      description: "Empower Peoples for work",
      link: "#"
    },
    {
      title: "Himalayan Trekking",
      image: Trekking,
      description: "Adventur Thrill Trekking",
      link: "#"
    }
  ];

function OneP() {
    return(
        <>
         <div className="w-[100%] mx-auto px-4 sm:px-4 md:px-4 lg:px-4 xl:px-14 pt-[1px] pb-[25px] bg-[#f4f4f7]">
          <section>
                    <div className="container mx-auto p-0 sm:p-0 md:p-0 lg:p-8">
        
                        <div className="w-[100%] m-auto pb-[50px] relative">
                          <h1 className="text-center text-[87px] sm:text-[101px] md:text-[107px] lg:text-[111px] xl:text-[225px] text-[#e5e5e5] font-primary-head font-bold">Works</h1>
                          
                            <div className="absolute top-[39px] sm:top-[49px] md:top-[55px] lg:top-[65px] xl:top-[175px] w-[100%]">
                              <h4 className="text-center uppercase font-secondary-head font-bold text-[14px] text-[#7c4091] tracking-wider mb-[5px] sm:mb-[5px] md:mb-[5px] lg:mb-[5px] xl:mb-[17px]">portfolio</h4>
                              <h5 className="font-primary-head font-medium text-[35px] text-center">Done Projects</h5>
                            </div>
                          
                        </div>
        
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-6">
                            {projects.map((project, index) => (
                               <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300 mb-[25px]">
                                    <img src={project.image} alt={project.title} className="w-full h-48 object-cover transform hover:scale-105 transition-transform duration-300" />
                                    <div className="p-4 font-secondary-head">
                                        <h2 className="text-[18px] text-[#7c4091] font-semibold">{project.title}</h2>
                                        <p className="text-[#808080] text-[16px]">{project.description}</p>
                                        <a href={project.link} target="_blank" 
          rel="noopener noreferrer" className="text-[#728f15] hover:text-[#a434cc] border-[1px] flex items-center px-4 py-2.5 w-[70%] md:w-[90%] mt-2 shadow-[0px_4px_6px_0px_rgba(0,_0,_0,_0.1)]">View Project <IoIosArrowRoundForward size={21} className="ml-[15px]" /></a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    </section>
                </div>
        </>
    );
}
export default OneP