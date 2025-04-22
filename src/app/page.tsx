"use client"

import MySkills from "../components/myskills";
import WhatIDo from "@/components/what-i-do";
import Resume from "@/components/resume";
import Testimonials from "@/components/testimonials";
import Contact from "@/components/contact";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="md:w-full mx-auto flex flex-col md:flex-wrap md:flex-row items-center justify-start w-full min-h-screen bg-white p-10 scroll-smooth">
      
      {/* Home */}
      <section id="home" className="w-full flex flex-col md:flex-row items-center justify-start p-0 mt-[25px] scroll-mt-20">
        <div className="w-full md:w-1/2 flex justify-end ml-[25px] mb-[25px]">
          <Image
            src="/me4.png"
            alt="Me"
            width={500}
            height={500}
            className="max-w-xs md:max-w-md h-auto object-contain"
          />
        </div>

        <div className="w-full md:w-1/2 text-center md:text-left">
          <h1 className="text-2xl md:text-4xl font-bold mb-4 text-black">
            I am <span className="text-indigo-600">Dian CK</span>, a Web Developer
          </h1>
          <p className="text-gray-700 text-sm md:text-base w-full md:w-1/2 text-center md:text-left">
            I help you build brand for your business at an affordable price, 
            a passionate web developer based in Indonesia. <br /><br />
            We deliver high-quality work—on time, on budget, and beyond expectations.
          </p>
          {/* <Link href="#contact" className="inline-block">
            <button className="bg-indigo-600 rounded-3xl text-white font-bold px-4 py-2 mt-[10px] cursor-pointer">
              Contact Me
            </button>
          </Link> */}
          <Link
            href="#contact"
            className="inline-block bg-indigo-600 rounded-3xl text-white font-bold px-4 py-2 mt-[10px] cursor-pointer text-center"
          >
            Contact Me
          </Link>          
        </div>
      </section>

      {/* About */}
      {/* <section id="about" className="w-full mt-20 scroll-mt-20">
        <h2 className="text-2xl font-bold mb-4">About Me</h2> */}
        {/* ...isi tentang about */}
      {/* </section> */}

      {/* What I Do */}
      <section id="whatido" className="w-full mt-20 scroll-mt-20">
        <WhatIDo />
      </section>

      {/* Resume */}
      <section id="resume" className="w-full mt-20 scroll-mt-20">
        <Resume />
      </section>

      {/* Portfolio */}
      <section id="portfolio" className="w-full mt-20 scroll-mt-20">
        <MySkills />
      </section>

      {/* Client */}
      <section id="client" className="w-full mt-20 scroll-mt-20">
        <Testimonials />
      </section>

      {/* Contact */}
      <section id="contact" className="w-full mt-20 scroll-mt-20">
        <Contact />
      </section>
    </div>
  );
}
