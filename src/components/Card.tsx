import React from 'react'
 import Image from 'next/image';

 interface propsType {
    title: string;
    desc: string;
    img: string;
    tags: string[];
  }
  
  const Card: React.FC<propsType> = ({ title, desc, img, tags }) => {
    return (
      <div className='border border-accent w-full sm:w-[300px] lg:w-[350px] hover:shadow-lg transform hover:-translate-y-1 transition duration-300 ease-in-out'>
        <div className='overflow-hidden'>
          <Image
            className='w-full h-[200px] object-cover hover:scale-105 transition-transform duration-300'
            src={img}
            width={350}
            height={200}
            alt={title}
          />
        </div>
  
        <div className='p-4 space-y-4'>
          <div className='text-2xl font-semibold'>{title}</div>
          <div className='text-gray-600'>{desc}</div>
          <div className='flex flex-wrap gap-2'>
            {tags.map((tag) => (
              <div className='tags' key={tag}>
                {tag}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default Card;
