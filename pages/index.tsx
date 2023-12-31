import About from "@/components/About";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Head from "next/head";
import Header from "../components/Header";
import Hero from "../components/Hero";


export default function Home({ data }: any) {
  return (
    <div id="mainBody" className="bg-black text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar-track-transparent scrollbar-thumb-slate-500/20 scrollbar-thin">
      <Head>
        <title>Alhamdou Jallow</title>
        <meta name="description" content="Alhamdou Jallow is a Machine Learning engineer and a software developer ready to tackle any challenge that is brought to him solving it using machine learning and any technologogy necessary. Alhamdou Jallow has work experience in various roles in the field of machine learning and software development. In 2018, they worked as a Software Developer at Gambia Youth Chamber Of Commerce. From January to July 2022, they served as a Machine Learning Engineer at Antern. In 2022, Alhamdou joined Omdena as a Junior Machine Learning Engineer, where they collaborated with individuals worldwide to utilize AI in solving societal issues in areas such as Agriculture, Health, and Retail. In 2023, they worked as a Machine Learning Intern at SAP" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico"/>
      </Head>

      {/* Header */}
      <Header />

      {/* Hero */}
      <section id="hero" className="snap-start">
        <Hero />
      </section>

      {/* About */}
      <section id="about" className="snap-center">
        <About />
      </section>

      {/* Experience */}
      <section id="experience" className="snap-center">
        <Experience />
      </section>

      {/* Skills */}
      <section id="skills" className="snap-center">
        <Skills />
      </section>

      {/* Projects */}
      <section id="projects" className="snap-center">
        <Projects data={data.data} />
      </section>

      {/* Contact */}
      <section id="contact" className="snap-start">
        <Contact />
      </section>
    </div>
  );
}

export async function getStaticProps() {
  const fs = require("fs/promises");
  const path = require("path");
  const filePath = path.join(process.cwd(), "/data", "/data.json");

  var data = await fs.readFile(filePath)
  data = JSON.parse(data)

  return {
    props: {
      data: data.data,
    },
  };
}