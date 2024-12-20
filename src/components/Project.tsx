import React from 'react'
import Heading from './Heading';
import Card from './Card'
import Link from 'next/link'

const data = [
    {
        id:0,
        title: "Static Resume Builder.",
        desc: "A next.js and typescript based form for building Resume.",
        img:"/Project_One.png",
        tags: ["Next.js", "Node","CSS","Typescript"],
        link:"https://milestone2resumeby-aiysha-noor.vercel.app/"
    },
    {
        id:1,
        title:"Editable Resume Builder.",
        desc: "A next.js and typescript based form for editing Resume.",
        img:"/Project_two.png",
        tags: ["Next.js", "Node","CSS","Typescript"],
        link:"https://editable-resume-by-anq.vercel.app/"
    },
    {
        id:2,
        title:"Dynamic Resume Builder with preview.",
        desc: "A next.js and typescript based form for editing Resume.",
        img:"/Project_three.png",
        tags: ["Next.js", "Node","CSS","Typescript"],
        link:"https://milestone03-dynamic-resume-builder-by-anq.vercel.app/"
    },
    {
        id:3,
        title:"Country List.",
        desc: "A next.js and typescript based form for editing Resume.",
        img:"/Project_four.png",
        tags: ["Next.js", "Node","CSS","Typescript"],
        link:"https://dynamic-routes-one.vercel.app/"
    },
]

function Project() {
  return (
    <div id='project' className='container pt-32'>
        <Heading title='My Projects' />
        <div className='grid gap-10 xl:gap-y-10 md:grid-cols-2 lg:grid-cols-3 place-items-center'>
           {data.map((el) => (
            <Link href={el.link} key={el.id} passHref>
            <div>
            <Card
           title={el.title}
           desc={el.desc}
           img={el.img}
           tags={el.tags}
        />
           </div>
           </Link>
           ))}
           </div>
    </div>
  )
}

export default Project;