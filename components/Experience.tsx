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
          clogo="/companyLogo/SAP_logo.jpg"
          title="Machine Learning intern"
          company="at, edunetfoundation.com"
          point1="1.	Work on improving some of the machine learning models available in the organization "
          point2="2.	With the team we build a web based Application for our machine learning system using streamlit and UI "
          startDate="Feb 2023, May 2022"
          endDate="Aug, 2022"
        />
        
         <ExperienceCard
          clogo="/companyLogo/gycc-logo.jpg"
          title="Software Developer"
          company="at, gycc.com"
          point1="Worked as a Software Developer, I was responsible for handling all the website affairs of the Instanton"
          point2="Worked as the lead developer and lead designer in all projects related to IT"
          startDate="Feb, 2018"
          endDate="June, 2019"
        />
         <ExperienceCard
          clogo="/companyLogo/youngancestor.jpg"
          title="software developer"
          company="at, youngancestorsfoundation.com"
          point1="Responsible for designing and maintaining the website and all sub domains under the organization"
          point2="Responsible for handling all social media pages of the organization"
          startDate="Dec, 2019"
          endDate="May, 2022"
        />
         <ExperienceCard
          clogo="/companyLogo/new_logo_1_transparent.jpg"
          title="software developer"
          company="at, prolificrehab.com"
          point1="Responsible for designing and maintaining the website and all sub domains under the organization all from scratch"
          point2="Responsible for handling all social media pages of the organization"
          startDate="Feb, 2023"
          endDate="Sep, 2023"
        />
         <ExperienceCard
          clogo="/companyLogo/agendeas.svg"
          title="Agendeas LLP"
          company="at, agendeas.com"
          point1="Software Developer trainee"
          point2="Responsible for designing and maintaining the website and all sub domains under the organization"
          startDate="Aug, 2022"
          endDate="Oct, 2022"
        />
    
        
        
      </div>
    </motion.div>
  );
}
