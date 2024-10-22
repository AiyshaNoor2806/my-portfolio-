import React from 'react'


const Experience = () => {
  const experienceList = [
    {
      position: "Teacher",
      company: "Saylani Online Academy",
      year: "2023 and so on",
      description: "Worked as teaching Quran e Paak and other islamic courses."
    },
    {
      position: "Teacher",
      company: "Madersa Aiysha Siddiqua",
      year: "2017 and so on",
      description: "Working as a preacher of islam."
    },
  ];

  return (
    <div id='experience' className='pt-32 container'>
      <h2 className='text-5xl font-bold mb-8' data-aos="fade-up">Experience</h2>
      <div className='space-y-6'>
        {experienceList.map((exp, index) => (
          <div key={index} className='border-b border-gray-300 pb-4'>
            <h3 className='text-2xl font-semibold'>{exp.position}</h3>
            <p className='text-lg text-gray-600'>{exp.company}</p>
            <p className='text-gray-500'>{exp.year}</p>
            <p className='mt-2 text-gray-700'>{exp.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
