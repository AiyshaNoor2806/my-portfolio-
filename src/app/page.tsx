"use client";


import About from "@/components/About";
import Contact from "@/components/Contact";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Hero from "@/components/Hero"
import Heros from "@/components/Heros";
import Project from "@/components/Project";
import Skills from "@/components/Skills";
import AOS from "aos"
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Home() {
  useEffect (() => {
    AOS.init({
    easing: "ease-out-back",
    duration: 1200,
    delay: 100,
    mirror: true,
    anchorPlacement: "bottom-bottom",
    offset: 160,
  });
  AOS.refresh()
}, [])
  return (
    <main>
      <Hero />
      <Skills />
      <Project />
      <Contact />
      <About />
      <Education />
      <Experience/>
    </main>
  );
}
  
