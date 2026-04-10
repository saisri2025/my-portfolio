import { motion } from "framer-motion";
import { Github, Mail, Moon, Sun } from "lucide-react";
import { useState } from "react";

export default function Portfolio() {
  const [dark, setDark] = useState(true);

  const projects = [
    {
      title: "Biomass Energy Generation",
      image: "/images/project1.png",
      description: "Smart energy monitoring using IoT, Python & CNN",
    },
    {
      title: "Healthcare AI App",
      image: "/images/project2.png",
      description: "Deep Learning model for disease detection",
    },
    {
      title: "Piezoelectric Energy",
      image: "/images/project3.png",
      description: "Generating electricity from mechanical steps",
    },
  ];

  return (
    <div className={dark ? "bg-black text-white" : "bg-white text-black"}>

      {/* DARK MODE TOGGLE */}
      <div
        className="fixed top-4 right-4 cursor-pointer"
        onClick={() => setDark(!dark)}
      >
        {dark ? <Sun /> : <Moon />}
      </div>

      {/* HERO */}
      <section className="h-screen flex flex-col justify-center items-center text-center bg-gradient-to-r from-black via-gray-900 to-black">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-5xl font-bold"
        >
          K. Saisri
        </motion.h1>
        <p className="mt-4">AI/ML Developer | Python | IoT</p>

        <button
          onClick={() => window.open("/resume.pdf")}
          className="mt-6 px-6 py-2 bg-blue-500 rounded-lg"
        >
          Download Resume
        </button>
      </section>

      {/* ABOUT */}
      <section className="py-20 text-center">
        <h2 className="text-3xl font-semibold">About Me</h2>
        <p className="mt-4 max-w-2xl mx-auto">
          Passionate AI/ML graduate skilled in Python, Deep Learning, and IoT.
        </p>
      </section>

      {/* SKILLS */}
      <section className="py-20 text-center bg-gray-100 text-black">
        <h2 className="text-3xl font-semibold">Skills</h2>
        <div className="mt-6 flex flex-wrap justify-center gap-4">
          {["Python", "Machine Learning", "Deep Learning", "Flask", "IoT", "HTML/CSS"].map((skill, i) => (
            <motion.span
              whileHover={{ scale: 1.1 }}
              key={i}
              className="px-4 py-2 bg-white rounded-xl shadow"
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section className="py-20 px-6">
        <h2 className="text-3xl font-semibold text-center mb-8">Projects</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div key={index} whileHover={{ scale: 1.05 }}>
              
              <div className="bg-white text-black rounded-xl shadow-lg overflow-hidden">
                
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />

                <div className="p-4">
                  <h3 className="text-xl font-semibold">
                    {project.title}
                  </h3>
                  <p className="text-sm mt-2">
                    {project.description}
                  </p>
                </div>

              </div>

            </motion.div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section className="py-20 text-center">
        <h2 className="text-3xl font-semibold">Contact Me</h2>

        <div className="flex justify-center gap-6 mt-6">
          <a href="https://github.com/saisri200" target="_blank">
            <Github />
          </a>
          <a href="mailto:kanchukommulasaisri789@gmail.com">
            <Mail />
          </a>
        </div>
      </section>
    </div>
  );
}