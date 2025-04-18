import React, { useState } from "react";
import { MdCall, MdEmail, MdLocationPin } from "react-icons/md";
import emailjs from '@emailjs/browser';
import { FaLinkedinIn, FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa6";
import ReCAPTCHA from "react-google-recaptcha";


function TwoC() {
    const [captchaValue, setCaptchaValue] = useState(null);
    const [name, setName] = useState("");
    const [last, setLast] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);
    const formHandle =(e) => {
        e.preventDefault();

        // Optional: simple validation
        if (!name || !email || !message) {
            alert("Please fill out required fields.");
            return;
          }
          
          if (!captchaValue) {
            alert("Please complete the reCAPTCHA.");
            return;
          }

        setLoading(true); // Start loading

        const templateParams = {
            from_name: `${name} ${last}`,
            email: email,
            phone: phone,
            subject: subject,
            message: message,
          };

          emailjs
          .send(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
            templateParams,
            import.meta.env.VITE_EMAILJS_PUBLIC_KEY
          )
          .then(() => {
            setSubmitted(true);
            setLoading(false);
          
            setTimeout(() => {
              setSubmitted(false);
              setName('');
              setLast('');
              setEmail('');
              setSubject('');
              setPhone('');
              setMessage('');
            }, 3000);
          })
          .catch((error) => {
            console.error('Email sending failed:', error);
            alert('Something went wrong. Please try again.');
            setLoading(false);
          });
      };

    return(
        <>
        <div className="w-[100%] mx-auto px-4 sm:px-4 md:px-4 lg:px-4 xl:px-14 pt-[1px] pb-[25px] bg-[#f4f4f7]">
            <section>
            <div className="flex flex-col sm:flex-col md:flex-col lg:flex-col xl:flex-row justify-between">

                <div className="w-[100%] sm:w-[100%] md:w-[100%] lg:w-[100%] xl:w-[40%] ">

                    <div className="w-[100%] sm:w-[100%] md:w-[100%] lg:w-[100%] xl:w-[77%] float-right mb-[25px] shadow-[0px_4px_6px_0px_rgba(0,_0,_0,_0.1)]">
                        <div className="bg-white rounded-[5px] py-4 pl-[20px] sm:pl-[75px] md:pl-[75px] lg:pl-[75px] xl:pl-[85px] pr-[20px] sm:pr-[11px] md:pr-[11px] lg:pr-[11px] xl:pr-[16px] relative">
                            <div className="hidden sm:block absolute left-[7px] sm:left-[16px] md:left-[16px] lg:left-[16px] xl:left-[23px] top-[21px] sm:top-[21px] md:top-[21px] lg:top-[21px] xl:top-[29px] w-[30px] sm:w-[39px] md:w-[39px] lg:w-[39px] xl:w-[44px] h-[30px] sm:h-[39px] md:h-[39px] lg:h-[39px] xl:h-[44px] bg-[#eacff3] rounded-[50%]"><MdCall size={20} color="#7c4091" className="text-center m-auto mt-[10px]" /></div>
                            <h2 className="font-secondary-head font-semibold text-[16px] sm:text-[17px] md:text-[17px] lg:text-[17px]">Phone Number</h2>
                            <p className="font-secondary-head font-medium text-[14px] sm:text-[15px] md:text-[15px] lg:text-[15px] tracking-wider text-[#9b9b9b]"> [+977] 982 675 6267<br/>
                                [+977] 984 256 7219
                            </p>
                        </div>
                    </div>

                    <div className="w-[100%] sm:w-[100%] md:w-[100%] lg:w-[100%] xl:w-[77%] float-right mb-[25px] shadow-[0px_4px_6px_0px_rgba(0,_0,_0,_0.1)]">
                        <div className="bg-white rounded-[5px] py-4 pl-[20px] sm:pl-[75px] md:pl-[75px] lg:pl-[75px] xl:pl-[85px] pr-[20px] sm:pr-[11px] md:pr-[11px] lg:pr-[11px] xl:pr-[16px] relative">
                            <div className="hidden sm:block absolute left-[7px] sm:left-[16px] md:left-[16px] lg:left-[16px] xl:left-[23px] top-[19px] w-[30px] sm:w-[39px] md:w-[39px] lg:w-[39px] xl:w-[44px] h-[30px] sm:h-[39px] md:h-[39px] lg:h-[39px] xl:h-[44px] bg-[#eacff3] rounded-[50%]"><MdEmail size={20} color="#7c4091" className="text-center m-auto mt-[10px]" /></div>
                            <h2 className="font-secondary-head font-semibold text-[16px] sm:text-[17px] md:text-[17px] lg:text-[17px]">Email Address</h2>
                            <p className="font-secondary-head font-medium text-[14px] sm:text-[15px] md:text-[15px] lg:text-[15px] tracking-wider text-[#9b9b9b]"> chiranjivi.chaudhary@gmail.com
                            </p>
                        </div>
                    </div>

                    <div className="w-[100%] sm:w-[100%] md:w-[100%] lg:w-[100%] xl:w-[77%] float-right mb-[25px] shadow-[0px_4px_6px_0px_rgba(0,_0,_0,_0.1)]">
                        <div className="bg-white rounded-[5px] py-4 pl-[20px] sm:pl-[75px] md:pl-[75px] lg:pl-[75px] xl:pl-[85px] pr-[20px] sm:pr-[11px] md:pr-[11px] lg:pr-[11px] xl:pr-[16px] relative">
                            <div className="hidden sm:block absolute left-[7px] sm:left-[16px] md:left-[16px] lg:left-[16px] xl:left-[23px] top-[19px] w-[30px] sm:w-[39px] md:w-[39px] lg:w-[39px] xl:w-[44px] h-[30px] sm:h-[39px] md:h-[39px] lg:h-[39px] xl:h-[44px] bg-[#eacff3] rounded-[50%]"><MdLocationPin size={20} color="#7c4091" className="text-center m-auto mt-[10px]" /></div>
                            <h2 className="font-secondary-head font-semibold text-[16px] sm:text-[17px] md:text-[17px] lg:text-[17px]">Location</h2>
                            <p className="font-secondary-head font-medium text-[14px] sm:text-[15px] md:text-[15px] lg:text-[15px] tracking-wider text-[#9b9b9b]"> Suryabinayak, Bhaktapur, Nepal
                            </p>
                        </div>
                    </div>

                    <div className="w-[100%] sm:w-[100%] md:w-[100%] lg:w-[100%] xl:w-[77%] float-right">
                    
                        <div className="flex flex-row justify-center gap-4 pt-4 pb-7">
                            <a href="https://www.linkedin.com/in/chiranjivi-chaudhary-7878136b" target="_blank" rel="noopener noreferrer">
                            <FaLinkedinIn color="#7c4091" size={18} />
                            </a>
                            <a href="https://www.facebook.com/kiran.tharu.12979" target="_blank" rel="noopener noreferrer">
                            <FaFacebookF color="#7c4091" size={18} />
                            </a>
                            <a href="https://x.com/chaudharychiran" target="_blank" rel="noopener noreferrer">
                            <FaTwitter color="#7c4091" size={18} />
                            </a>
                            <a href="https://www.instagram.com/chiranjivi.official" target="_blank" rel="noopener noreferrer">
                            <FaInstagram color="#7c4091" size={18} />
                            </a>
                        </div>

                    </div>

                </div>

                <div className="w-[100%] sm:w-[100%] md:w-[100%] lg:w-[100%] xl:w-[55%] bg-white px-4 py-7 rounded-[5px] shadow-[0px_4px_6px_0px_rgba(0,_0,_0,_0.1)]">
                    <h2 className="font-secondary-head font-semibold text-[31px] text-[#7c4091] mb-[30px]">Get in Touch</h2>
                     <form onSubmit={formHandle}>
                       
                       <div className="flex flex-col sm:flex-col md:flex-col lg:flex-row gap-10 ">

                        <div className="w-[100%] sm:w-[100%] md:w-[100%] lg:w-[50%]">
                        <label htmlFor='name' className="font-secondary-head font-medium text-[16px] text-[#5c5c5c]">First Name <br/>
                        <input
                            value={name} 
                            onChange={(e) => {
                                setName(e.target.value);
                                }
                            }
                            type='text' id="name" placeholder='Enter Your First Name' 
                            className="border-[1px] border-[#DFE2E6] bg-white focus:outline-0 p-3 w-[100%] rounded-[5px] mt-2 placeholder:text-[15px]"/>
                        </label>
                        </div>

                        <div className="w-[100%] sm:w-[100%] md:w-[100%] lg:w-[50%]">
                        <label htmlFor='last' className="font-secondary-head font-medium text-[16px] text-[#5c5c5c]">Last Name <br/>
                        <input 
                            value={last}
                            onChange={(e) => {
                                setLast(e.target.value);
                                }
                            }
                            type='text' id="last" placeholder='Enter Your Last Name'
                            className="border-[1px] border-[#DFE2E6] bg-white focus:outline-0 p-3 w-[100%] rounded-[5px] mt-2 placeholder:text-[15px]"/>
                        </label>
                        </div>
                       </div>

                       <div className="flex flex-col sm:flex-col md:flex-col lg:flex-row gap-10 mt-8">

                        <div className="w-[100%] sm:w-[100%] md:w-[100%] lg:w-[50%]">
                        <label htmlFor='email' className="font-secondary-head font-medium text-[16px] text-[#5c5c5c]">Email <br/>
                        <input 
                            value={email}
                            onChange={(e) => {
                                setEmail(e.target.value);
                                }
                            }
                            type='email' id="email" placeholder='Enter Your Email' 
                            className="border-[1px] border-[#DFE2E6] focus:outline-0 p-3 w-[100%] bg-white rounded-[5px] mt-2 placeholder:text-[15px]"/>
                        </label>
                        </div>

                        <div className="w-[100%] sm:w-[100%] md:w-[100%] lg:w-[50%]">
                        <label htmlFor='phone' className="font-secondary-head font-medium text-[16px] text-[#5c5c5c]">Phone Number <br/>
                        <input 
                            value={phone}
                            onChange={(e) => {
                                setPhone(e.target.value);
                                }
                            }
                            type='tel' id="phone" placeholder='Enter Your Phone Number'
                            className="border-[1px] border-[#DFE2E6] focus:outline-0 p-3 w-[100%] bg-white rounded-[5px] mt-2 placeholder:text-[15px]"/>
                        </label>
                        </div>
                       </div>

                       <div className="mt-8">
                        <div className="w-[100%]">
                        <label htmlFor='subject' className="font-secondary-head font-medium text-[16px] text-[#5c5c5c]">Subject <br/>
                        <input 
                            value={subject}
                            onChange={(e) => {
                                setSubject(e.target.value);
                                }
                            }
                            type='text' id="subject" placeholder='Matter to Discuss' 
                            className="border-[1px] border-[#DFE2E6] focus:outline-0 p-3 w-[100%] bg-white rounded-[5px] mt-2 placeholder:text-[15px]"/>
                        </label>
                        </div>
                       </div>

                       <div className="mt-8">
                        <div className="w-[100%]">
                        <label htmlFor='message' className="font-secondary-head font-medium text-[16px] text-[#5c5c5c]">Message <br/>
                        </label>
                        <textarea id="message" rows="8" value={message} onChange={(e) => setMessage(e.target.value)} className="block p-3 w-full font-secondary-head text-[16px] text-[#5c5c5c] bg-white rounded-lg shadow-sm border border-[#DFE2E6] focus:outline-0 mt-3" placeholder="Leave a message..."></textarea>
                        </div>
                       </div>

                       <div className="mt-5">
                        <div className="scale-[0.85] origin-left sm:scale-100">
                            <ReCAPTCHA
                            sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}
                            onChange={(value) => setCaptchaValue(value)}
                            />
                        </div>
                        </div>

                       <button
                            type="submit"
                            className={`bg-[#7c4091] w-[195px] h-[50px] p-3 rounded-[5px] font-secondary-head font-normal text-[16px] text-white mt-5 hover:bg-[#a434cc] cursor-pointer flex items-center justify-center gap-2`}
                            disabled={loading}
                            >
                            {loading ? (
                                <>
                                <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
                                </svg>
                                Sending...
                                </>
                            ) : (
                                'Send Message'
                            )}
                            </button>

                            {submitted && !loading && (
                            <p className="text-green-600 mt-4 font-secondary-head transition-opacity duration-500 ease-in">
                                ✅ Message sent successfully!
                            </p>
                            )}


                    </form>
                </div>
            </div>
            </section>
        </div>
        </>
    );
}
export default TwoC