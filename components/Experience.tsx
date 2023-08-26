import { motion } from "framer-motion";
import React from "react";
import ExperienceCard from "./ExperienceCard";

type Props = {};

export default function Experience({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      viewport={{ once: true }}
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl md:px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-32 uppercase tracking-[20px] text-gray-400 text-2xl pl-6">
        Experience
      </h3>

      <div className="w-full mt-20 flex space-x-10 overflow-x-scroll p-10 snap-x snap-mandatory scrollbar-track-transparent scrollbar-thin xl:space-x-14 ">
      <ExperienceCard
          clogo="/companyLogo/Omdena-Logo.png"
          title="Junior Machine Learning Engineer intern"
          company="at, omdena.com"
          point1="Building Regenerative Farming Solutions with AI Enabling Agricultural Carbon Markets for Catalonia."
          point2="• Co-Lead for the Model deployments, we used Streamlit to build the interface that can help farmers to visualize and predict carbon content in the soil"
          startDate="March, 2022"
          endDate="June 14, 2023"
        />
        <ExperienceCard
          clogo="/companyLogo/Omdena-Logo.png"
          title="Junior Machine Learning Engineer intern"
          company="at, omdena.com"
          point1="Built an AI model to estimate number of trees and their survival rate using open source and commercial
          satellite data as well as drone imagery to monitor reforestation programs in Madagascar"
          point2="Co-Lead for the Model deployments, we used Streamlit to build the interface that can help our
          partners to visualize and predict the expected number of tress using the satellite dat"
          startDate="June 27, 2022"
          endDate="Aug, 2022"
        />
        
         <ExperienceCard
          clogo="/companyLogo/Omdena-Logo.png"
          title="Machine Learning Intern"
          company="at, Edunetfoundation.com"
          point1="Work on improving some of the machine learning models available in the organization"
          point2="With the team we build a web based Application for our machine learning system using streamlit and UI"
          startDate="Feb, 2023"
          endDate="May, 2023"
        />
         <ExperienceCard
          clogo="/companyLogo/Omdena-Logo.png"
          title="Agendeas LLP"
          company="at, agendeas.com"
          point1="Software Developer trainee"
          // point2="• Co-Lead for the Model deployments, we used Streamlit to build the interface that can help farmers to visualize and predict carbon content in the soil"
          startDate="Aug, 2022"
          endDate="Oct, 2022"
        />
    
        
        
      </div>
    </motion.div>
  );
}
