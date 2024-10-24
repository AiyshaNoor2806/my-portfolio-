import React from 'react'
import Navbar from './Navbar' 

const Hero = () => {
  return (
    <div 
      id="hero" 
      className='min-h-screen bg-no-repeat bg-[url(../../public/my-profile.png)] bg-cover'
      style={{ backgroundSize: "20%", backgroundPosition: "left 100px top 100px" }}   
    >
      <Navbar />
      <div className='container grid lg:grid-cols-2 h-[calc(100vh-60px)]'>
        <div className='hidden lg:block'></div>
        
        {/* Adjusted the vertical alignment with margin */}
        <div className='flex flex-col justify-start items-center p-5 lg:pl-20 mt-20'> 
          <div className='text-4xl sm:text-4xl lg:text-5xl font-bold leading-tight text-center'>
            <p data-aos="fade-left">I am Aiysha Noor</p>
            <p data-aos="fade-left">Alima Hafiza and</p>
            <p data-aos="fade-left">now a web developer also</p>
          </div>
        </div>
      </div>
    </div>  
  );
}

export default Hero;