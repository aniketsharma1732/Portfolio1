import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <div className="mt-12 grid grid-cols-2 sm:grid-cols-2 gap-8 place-items-center">
          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/aniket-sharma7"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center hover:scale-110 transition-transform"
          >
            <img
              src={`${import.meta.env.BASE_URL}icons8-linkedin-logo-50.png`} 
              alt="LinkedIn"
              className="w-12 h-12 object-contain mb-2"
            />
            <span className="text-white font-medium">LinkedIn</span>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/aniketsharma1732"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center hover:scale-110 transition-transform"
          >
            <img
              src={`${import.meta.env.BASE_URL}icons8-github-50.png`}
              alt="GitHub"
              className="w-12 h-12 object-contain mb-2"
            />
            <span className="text-white font-medium">GitHub</span>
          </a>

          {/* Gmail */}
          <a
            href="mailto:anikets.5061@gmail.com"
            className="flex flex-col items-center hover:scale-110 transition-transform"
          >
            <img
              src={`${import.meta.env.BASE_URL}icons8-gmail-logo-64.png`}
              alt="Gmail"
              className="w-12 h-12 object-contain mb-2"
            />
            <span className="text-white font-medium">E-mail</span>
          </a>

          {/* Download CV */}
          <a
            href="/aniket_SDE.pdf"
            download
            className="flex flex-col items-center hover:scale-105 transition-transform"
          >
            <img
              src={`${import.meta.env.BASE_URL}icons8-download-24.png`} 
              alt="Download CV"
              className="w-12 h-12 object-contain mb-2"
            />
            <span className="text-white font-medium">Download CV</span>
          </a>
        </div>

      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");

<<<<<<< HEAD

/*
5 DSA questions-5
2 hours web development-3
portfolio fixed- 1 , paste link on resume 
apply for the jobs -2 
run that sanjeevini web app-4


when to resume applying
2 projects with link
portfolio link
*/
=======
>>>>>>> 24074a698277736f16c5d984c84553e24b01e266
