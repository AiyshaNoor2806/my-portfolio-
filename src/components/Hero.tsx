import React from "react";
import Navbar from "./Navbar";

const Hero = () => {
  return (
    <div
      id="hero"
      className="min-h-screen w-full mt-20 ml-20 flex flex-col lg:flex-row items-center lg:items-start lg:space-x-8"
     >
      <img
      src="/my-profile.png"
      alt="My Profile"
      className="w-1/4 lg:w-1/5 object-cover"
      style={{ 
        maxWidth: "20%",
        marginTop: "10px",
        marginLeft: "100px",
        
      }}
    />
     {/* Text Section */}
     <div className="text-left flex flex-col justify-self-start p-2 lg:p-0 mt-10 lg:mt-36">
        <div className="text-4xl sm:text-4xl lg:text-5xl font-semibold leading-tight">
          <p className="text-pretty" data-aos="fade-left">I am Aiysha Noor</p>
        </div>

        <p
          className="text-pretty text-purple-400 mt-2 max-w-lg leading-relaxed"
          data-aos="fade-left"
        >
          I have a solid foundation in web development, specializing in HTML, CSS, and JavaScript. My experience extends to using frameworks like React and Next.js to create dynamic and user-friendly applications. I am also proficient in teaching the Quran e Kareem (physically and online). I stay updated on the latest technologies to enhance my skill set and contribute effectively to projects.
        </p>
      </div>
    </div>
  );
};

export default Hero;