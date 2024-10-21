import React from "react";

const Skills = () => {
  return (
    <div id="skills" className="container pt-32">
      <div className="grid md:grid-cols-2 gap-20 items-center">
        <div data-aos="fade-left">
          <h2 className="text-4xl md:text-5xl">Technologies I work with</h2>
          <p className="text-purple-400 pt-2">
            I have a solid foundation in web development,specializing in
            HTMl,CSS and Javascript, My experience extends to using framework
            like React and Next.js to create dynamic and user friendly
            applications.I am also proficienet in teaching of Quran e
            Kareem(physically and online also).I stay updated on the latest
            technologies to enhance my skill set and contribute effectively to
            projects.
          </p>
        </div>
        <div>
          <div className="grid grid-cols-2 text-accent text-3xl sm:text-4xl">
          <div className="space-y-2">

<div className="space-y-2"></div>
           <h2 data-aos="fade-left">Typescript</h2>
            <h2 data-aos="fade-left">React.js</h2>
            <h2 data-aos="fade-left">Next.js</h2>
          </div>
          <div className="space-y-2">
            <h2 data-aos="fade-left">Tailwind</h2>
            <h2 data-aos="fade-left">CSS</h2>
            <h2 data-aos="fade-left">Node.js</h2>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
