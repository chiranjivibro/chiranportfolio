import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaLinkedinIn, FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa6";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Sticky Navbar on all screen sizes */}
      <div className="sticky top-0 left-0 z-50 w-full bg-white shadow-md py-5 px-4 md:px-6 lg:px-14 font-secondary-head">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <NavLink to="/">
            <h1 className="text-[#f4f4f7] bg-[#7c4091] rounded-tr-md rounded-es-md border font-semibold text-[14px] sm:text-[15px] md:text-[15px] lg:text-[21px] px-4 md:px-4 lg:px-6 py-2 md:py-2 lg:py-3 uppercase tracking-wide shadow-md">
              Chiranjivi
            </h1>
          </NavLink>

          {/* Desktop Nav (visible on lg and up) */}
          <div className="hidden lg:flex items-center gap-10 text-[17px] text-[#a8a8ab]">
            <NavLink to="/about" className="hover:text-[#7c4091]">About Me</NavLink>
            <NavLink to="/services" className="hover:text-[#7c4091]">Services</NavLink>
            <NavLink to="/portfolio" className="hover:text-[#7c4091]">Portfolio</NavLink>
            <NavLink to="/contact" className="hover:text-[#7c4091]">Contact</NavLink>
          </div>

          {/* Desktop Social Icons (visible on lg and up) */}
          <div className="hidden lg:flex items-center gap-4">
            <a href="www.linkedin.com/in/chiranjivi-chaudhary-7878136b" target="_blank" rel="noopener noreferrer"><FaLinkedinIn color="#d597ed" size={17} /></a>
            <a href="https://www.facebook.com/kiran.tharu.12979" target="_blank" rel="noopener noreferrer"><FaFacebookF color="#d597ed" size={17} /></a>
            <a href="https://x.com/chaudharychiran" target="_blank" rel="noopener noreferrer"><FaTwitter color="#d597ed" size={17} /></a>
            <a href="https://www.instagram.com/chiranjivi.official" target="_blank" rel="noopener noreferrer"><FaInstagram color="#d597ed" size={17} /></a>
          </div>

          {/* Hamburger Icon (visible on screens smaller than lg) */}
          <div className="lg:hidden z-[999]">
            <button onClick={() => setIsOpen(true)}>
              <HiOutlineMenuAlt3 size={28} />
            </button>
          </div>
        </div>
      </div>

      {/* Overlay for slide-in menu */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40 transition-opacity duration-300"
        />
      )}

      {/* Slide-in Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-[75%] sm:w-[60%] bg-white z-50 shadow-lg transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end p-5">
          <button onClick={() => setIsOpen(false)}>
            <HiX size={28} />
          </button>
        </div>

        <div className="flex flex-col px-6 gap-6 text-[17px] text-[#7c4091] font-medium">
          <NavLink to="/about" onClick={() => setIsOpen(false)}>About Me</NavLink>
          <NavLink to="/services" onClick={() => setIsOpen(false)}>Services</NavLink>
          <NavLink to="/portfolio" onClick={() => setIsOpen(false)}>Portfolio</NavLink>
          <NavLink to="/contact" onClick={() => setIsOpen(false)}>Contact</NavLink>

          <div className="flex gap-4 pt-4">
          <a href="https://www.linkedin.com/in/chiranjivi-chaudhary-7878136b/" target="_blank" rel="noopener noreferrer">
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
    </>
  );
}

export default Navbar;
