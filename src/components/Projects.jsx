import GP from "../images/DermaScan.png";

import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Projects = () => {
  return (
    <section className="bg-gray-100 dark:bg-gray-900 py-16 transition-colors duration-500 min-h-screen" id="projects">
      <div className="container mx-auto px-6 lg:px-16">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-800 dark:text-white mb-12">
          Graduation Project
        </h2>

        <div className="flex flex-col lg:flex-row items-center gap-10">
          <div className="w-full lg:w-1/2 bg-white dark:bg-gray-800 rounded-xl shadow-2xl p-6 transition-all">
            <img
              src={GP}
              alt="Graduation Project"
              className="rounded-lg shadow-md mb-4 w-full h-auto object-cover"
            />
            <div className="text-center">
              <span className="text-lg text-gray-600 dark:text-gray-400 font-medium">
                Year: 2025
              </span>
            </div>
          </div>

          <div className="w-full lg:w-1/2 bg-white dark:bg-gray-800 rounded-xl shadow-2xl p-6 flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
                Project Description
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-base md:text-lg">
                <strong>DermCare</strong> is my graduation project — a web application designed to assist in the detection of skin diseases through a user-friendly interface.
                It features two tailored dashboards: one for patients and another for doctors, each with a secure login system and customized front-end experience.
                <br /><br />
                A key feature is the interactive data-sharing interface that enables real-time communication between doctors and patients.
                The entire application’s state management is powered by <strong>Redux Toolkit</strong> for consistency and scalability.
              </p>
            </div>

            <div className="flex flex-wrap justify-between items-center gap-4 mt-6">
              <a
                href="https://github.com/joseph-reda/DermCare"
                className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faGithub} className="text-xl" />
                <span className="font-medium">GitHub</span>
              </a>
              <a
                href="https://derm-care-five.vercel.app/"
                className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 transition"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="font-medium">Live Demo</span>
                <FontAwesomeIcon icon={faArrowRight} className="text-xl" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
