import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";

type Props = {};

export default function About({}: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1.5,
      }} 
      viewport={{
        once: true,
      }}
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center pt-16 lg:pt-28"
    >
      <h3 className="ml-8 absolute top-15 uppercase tracking-[20px] text-gray-400 text-2xl">
        {/* About Me */}
      </h3>

      {/* <motion.img
        initial={{
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
        }}
        transition={{
          duration: 1,
          ease: "easeInOut",
        }}
        viewport={{
          once: true,
        }} */}
      <Image
        width={350}
        height={450}
        src="/pro-pic.jpg"
        className="-mb-32 md:mb-0 md:ml-16 flex-shrink-0 w-40 h-40 rounded-xl object-cover md:rounded-lg md:w-64 md:h-96 xl:w-[350px] xl:h-[450px]"
        alt="Alhamdou picture"
      />

      <div className="px-0 md:px-70">
        <h4 className="text-3xl md:text-4xl font-semibold mt-8 lg:mt-2 font-outfit lg:ml-6 md:ml-6">
          $: /whoami
        </h4>
        <p className="text-sm md:text-base lg:text-lg lg:mt-4 font-light px-4 md:px-7 pt-3 font-outfit">
          {/* Welcome to my world! <br /> */}
          <br /> I am Alhamdou Jallow{" "}
          <span className="text-blue-500 font-semibold">
            
           a recent graduate of bachelors in Computer Engineering from the prestigious Gujarat Technological University (GTU) in India, 
          </span>{" "}          
          where I cultivated my passsion for Artificial Intelligency. I proudly wear the hat of a Junior Machine Learning Engineer and a FullStack Developer. Driven by an unwavering commitment to craft scalable and user-friendly Machine Learning Applications that elegantly solve intricate challenges
          <br />
          <br />Beyon the lines of code I am the visionary founder of {" "}
          <span className="text-blue-500 font-semibold">
            <a
              href="https://twitter.com/gambAi"
              target={"_blank"}
              rel="noreferrer"
            >
              GambAI
              <span className="inline-flex text-white">
                <svg
                  className="with-icon_icon__MHUeb"
                  data-testid="geist-icon"
                  fill="none"
                  height="24"
                  shapeRendering="geometricPrecision"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  width="24"
                  style={{
                    color: "currentColor",
                    width: "14px",
                    height: "14px",
                  }}
                >
                  <path d="M7 17L17 7"></path>
                  <path d="M7 7h10v10"></path>
                </svg>
              </span>
            </a>
          </span>
          , a thriving community that serves as a nuturing haven for aspiring Machine Learning Engineers in Gambia, empowering them to reach new heights in thier careers.
          <br /> <br /> While I thrive in the tech realm, my curiosity knows no bounds. I find solace in the pages of psychology and philosophy, savoring profound insights over a steaming cup of tea. Join me on this journey as I unravel the limitless possibilities at the intersection of technology, human nature, and the pursuit of knowledge{" "}
          <span className="text-blue-500 font-semibold">
            and making tech eco friendly!
          </span>
        </p>
      </div>
    </motion.div>
  );
}
