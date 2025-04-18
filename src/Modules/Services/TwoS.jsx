import React from "react";
import Progress from '../../Modules/Services/Progress.jsx';

function TwoS() {

    const skills = [
        { text: "Web Mockup Design", percentage: 95, color: "#007bff" },
        { text: "Front-End Development", percentage: 95, color: "#f39c12" },
        { text: "Front-End Framework", percentage: 85, color: "#e74c3c" },
        { text: "Responsive Friendly", percentage: 100, color: "#1abc9c" },
      ];
    return(
        <>
            <div className="w-[100%] mx-auto px-4 sm:px-4 md:px-4 lg:px-4 xl:px-14 pt-[1px] pb-[25px] bg-[#f4f4f7]">
                <section>
            <div className="w-[100%] m-auto pb-[20px] relative">
                  <h2 className="text-center text-[97px] sm:text-[97px] md:text-[97px] lg:text-[105px] xl:text-[225px] text-[#e5e5e5] font-primary-head font-bold">Skills</h2>
                  
                    <div className="absolute top-[58px] sm:top-[45px] md:top-[55px] lg:top-[65px] xl:top-[175px] w-[100%]">
                      <h4 className="text-center uppercase font-secondary-head font-bold text-[14px] text-[#7c4091] tracking-wider mb-[5px] sm:mb-[5px] md:mb-[5px] lg:mb-[5px] xl:mb-[17px]">skills</h4>
                      <h5 className="font-primary-head font-medium text-[35px] text-center">My Skills</h5>
                    </div>
                  
                </div>

                <div className="flex flex-wrap justify-center gap-12 p-6">
                        {skills.map((skill, index) => (
                            <Progress key={index} {...skill} />
                        ))}
                </div>
                </section>
            </div>
        </>
    );
}
export default TwoS