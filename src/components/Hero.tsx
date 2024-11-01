import React from "react";

const Hero = () => {
  return (
    <div
      id="hero"
      className="min-h-screen w-full mt-20 flex flex-col lg:flex-row items-start lg:space-x-8 lg:justify-start p-4"
    >
      <img
        src="/my-profile.png"
        alt="My Profile"
        className="object-cover rounded-full"
        style={{
          width: "100%",
          maxWidth: "350px",
          marginTop: "0px"
        }}
      />
      {/* Text Section */}
      <div className="flex flex-col justify-end items-center p-4 lg:p-0 mt-4 lg:mt-0 max-w-xl lg:max-w-lg">
        <div className="font-bold leading-tight">
          <p className="heading-pretty" data-aos="fade-left">I am Aiysha Noor</p>
        </div>
        <p
          className="paragraph-text justify-center place-items-center text-purple-400 mt-6 leading-relaxed text-justify lg:text-left lg:mt-6"
          data-aos="fade-left"
        >
          I have a solid foundation in web development, specializing in HTML, CSS, and JavaScript. My experience extends to using frameworks like React and Next.js to create dynamic and user-friendly applications. I am also proficient in teaching the Quran e Kareem (physically and online). I stay updated on the latest technologies to enhance my skill set and contribute effectively to projects.
        </p>
      </div>
    </div>
  );
};

export default Hero;
