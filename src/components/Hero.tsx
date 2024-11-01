import React from "react";

const Hero = () => {
  return (
    <div
      id="hero"
      className="min-h-screen w-full mt-20 ml-5 sm:ml-10 md:ml-20 flex flex-col lg:flex-row items-center lg:items-start lg:space-x-8 lg:justify-between"
    >
      <img
        src="/my-profile.png"
        alt="My Profile"
        className="w-2/3 sm:w-1/2 md:w-1/3 lg:w-1/4 object-cover rounded-full"
        style={{
          maxWidth: "250px",
          marginTop: "10px",
        }}
      />
      {/* Text Section */}
      <div className="text-left flex flex-col justify-center lg:justify-start p-4 lg:p-0 mt-10 lg:mt-0">
        <div className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight">
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
