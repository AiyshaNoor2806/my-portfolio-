import React from 'react';

const Education = () => {
  const educationList = [
    {
      institution: "University of Karachi",
      degree: "Associate Degree in Commerce",
      year: "2023 - 2024 in progress",
    },
    {
        institution: "Womens Collage Shahrah e Liaquat",
        degree: "Intermediate",
        year: "2020 - 2021",
      },
    {
      institution: "Noor ul Eman School",
      degree: "Matriculation",
      year: "2018 - 2019",
    },
    {
        institution: "Al Furqan Scholars Academy",
        degree: "Dars e Nizami",
        year: "2016 - 2022",
      },
      {
        institution: "Noor Ul Eman School",
        degree: "Hifz e Quran",
        year: "2016 - 2018",
      },
      {
        institution: "Tanzeem Ul Madaris",
        degree: "Dars e Nizami ",
        year: "2021 - 2025 in progress",
      },
  ];

  return (
    <div id='education' className='pt-32 container'>
      <h2 className='text-5xl font-bold mb-8' data-aos="fade-up">Education</h2>
      <div className='space-y-6'>
        {educationList.map((edu, index) => (
          <div key={index} className='border-b border-gray-300 pb-4'>
            <h3 className='text-2xl font-semibold'>{edu.degree}</h3>
            <p className='text-lg text-gray-600'>{edu.institution}</p>
            <p className='text-gray-500'>{edu.year}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
