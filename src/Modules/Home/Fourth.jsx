import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Rupen from '../../assets/Rupen.jpg';
import Krishna from '../../assets/Krishna.jpg';
import Achut from '../../assets/Achut.jpg';
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";

const testimonials = [
  {
    text: "We are fortunate enough to collaborate with Chiranjivi frequently. Each and every job is completed on schedule and delivered precisely as specified. Beyond that, he is a crucial component of our approach due to his development talents and expertise. Without a doubt, we provide the best possible recommendation.",
    image: Rupen,
    name: "Rupendra Maharjan",
  },
  {
    text: "We had very high expectations, but working with Chiranjivi exceeded them. Although he is a highly skilled frontend developer, his work ethic and methodical approach are what truly set him apart. He made changes and additions that improved the final product for both our clients and ourselves.",
    image: Krishna,
    name: "Krishna Sapkota",
  },
  {
    text: "Chiranjivi is focused on enhancing both the site's operation and appearance. He is receptive and ready to resolve problems as they come up along the entire procedure. Therefore, I have no qualms about recommending or working with him once more.",
    image: Achut,
    name: "Achut Niraula",
  },
];

function Fourth() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [autoplay, setAutoplay] = useState(null);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  // Function to start autoplay
  const startAutoplay = () => {
    stopAutoplay(); // Ensure no duplicate intervals
    const newAutoplay = setInterval(() => {
      emblaApi && emblaApi.scrollNext();
    }, 3000); // Change slide every 3 seconds
    setAutoplay(newAutoplay);
  };

  // Function to stop autoplay
  const stopAutoplay = () => {
    if (autoplay) {
      clearInterval(autoplay);
      setAutoplay(null);
    }
  };

  useEffect(() => {
    if (emblaApi) {
      startAutoplay();
    }
    return () => stopAutoplay(); // Cleanup on unmount
  }, [emblaApi]);

  return (
    <div className="w-full mx-auto px-4 sm:px-4 md:px-4 lg:px-4 xl:px-14 pt-2 pb-12 bg-[#f4f4f7]">
      <section>
      <div className="container mx-auto p-0 sm:p-0 md:p-0 lg:p-0 xl:p-6">
        {/* Section Heading */}
        <div className="w-full m-auto pb-12 relative">
          <h2 className="text-center text-[45px] sm:text-[53px] md:text-[55px] lg:text-[71px] xl:text-[187px] text-[#e5e5e5] font-primary-head font-bold">
            Testimonials
          </h2>
          <div className="absolute top-[13px] sm:top-[28px] md:top-[32px] lg:top-[53px] xl:top-[129px] w-full">
            <h4 className="text-center uppercase font-secondary-head font-bold text-[14px] text-[#7c4091] tracking-wider mb-[5px] sm:mb-[5px] md:mb-[5px] lg:mb-[5px] xl:mb-[17px]">
              testimonies
            </h4>
            <h5 className="font-primary-head font-medium text-[23px] sm:text-[23px] md:text-[23px] lg:text-[23px] xl:text-[35px] text-center">
              Client Says
            </h5>
          </div>
        </div>

        {/* Embla Carousel */}
        <div 
          className="max-w-4xl mx-auto"
          onMouseEnter={stopAutoplay} // Pause on hover
          onMouseLeave={startAutoplay} // Resume when leaving
        >
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="embla__slide flex-none w-[100%] px-6 py-9 text-center bg-white rounded-lg shadow-md">
                  <p className="text-gray-700 font-secondary-head text-[21px] italic mb-[35px]">"{testimonial.text}"</p>
                  <div className="mt-5 flex items-center font-primary-head tracking-wider justify-center">
                    <img src={testimonial.image} alt={testimonial.name} className="w-24 h-24 rounded-full border shadow-[0px_4px_6px_0px_rgba(0,_0,_0,_0.1)]" />
                    <p className="ml-6 text-[21px] font-semibold">{testimonial.name}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center gap-4 mt-4">
            <button onClick={scrollPrev} className="px-4 py-2 w-[53px] h-[53px] bg-gray-300 rounded-[50%] hover:bg-gray-400">
            <HiChevronLeft  size={21} />
            </button>
            <button onClick={scrollNext} className="px-4 py-2 w-[53px] h-[53px] bg-gray-300 rounded-[50%] hover:bg-gray-400">
            <HiChevronRight size={21} />
            </button>
          </div>
        </div>
      </div>
      </section>
    </div>
  );
}

export default Fourth;
