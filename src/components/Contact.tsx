import React from 'react'
import { AiOutlineMail } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";

export default function Contact() {
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    console.log('Form submitted');
};

  return ( 
    <div id='contact' className='pt-32 container'>
        <div className='grid md:grid-cols-2 gap-10'>
            <div className='space-y-8'>
                <h2 className='text-5xl' data-aos="fade-left">Get in touch</h2>
                <p className='text-purple-400 text-[18px] pt-2' data-aos="fade-left">
                    Drop me a line,give me a call,or send me a message by submitting the form.
                </p>
                <div className='flex gap-3 items-center' data-aos="fade-left">
                    <AiOutlineMail size={30}/> aiyshaprinces57@gmail.com
                </div>
                <div className='flex gap-3 items-center' data-aos="fade-left">
                    <BsTelephone size={30} /> (333) 3093149
                </div>
            </div>
            <div className='space-y-8'>
                <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
                <div className='flex flex-col gap-1'>
                    <label htmlFor="name">Name</label>
                    <input type="text"
                    className='h-[40px] bg-transparent border border-accent'
                    id='name' />
                 </div>
                 <div className='flex flex-col gap-1' data-aos="fade-left">
                    <label htmlFor="email">Email</label>
                    <input type="text"
                    className='h-[40px] bg-transparent border border-accent'
                    id='email' />
                 </div>
                 <div className='flex flex-col gap-1' data-aos="fade-left">
                    <label htmlFor="msg">Message</label>
                    <textarea 
                    className='bg-transparent border border-accent'
                    id='msg' 
                    rows={4}
                    required
                    >
                        </textarea> 
                 </div>
                 <button type='submit' className='bg-amber-400 p-2 px-6' data-aos="fade-left">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}


