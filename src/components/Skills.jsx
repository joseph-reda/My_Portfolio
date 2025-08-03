import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3Alt,
  faSquareJs,
  faBootstrap,
  faReact,
  faGithub,
  faGit,
  faNpm,
} from "@fortawesome/free-brands-svg-icons";
import {
  faCode,
  faLaptopCode,
  faServer,
  faPalette,
  faTerminal,
  faBox,
  faCodeBranch,
  faFlask,
} from "@fortawesome/free-solid-svg-icons";

export const Skills = () => {

  const skills = [
    { name: "React.js", icon: faReact, category: "Frontend" },
    { name: "Redux Toolkit", icon: faBox, category: "Frontend" },
    { name: "JavaScript", icon: faSquareJs, category: "Frontend" },
    { name: "TypeScript", icon: faCode, category: "Frontend" },
    { name: "HTML5", icon: faHtml5, category: "Frontend" },

    { name: "Tailwind CSS", icon: faPalette, category: "Styling" },
    { name: "Bootstrap", icon: faBootstrap, category: "Styling" },
    { name: "CSS3", icon: faCss3Alt, category: "Styling" },

    { name: "Axios", icon: faServer, category: "APIs" },
    { name: "Postman", icon: faFlask, category: "APIs" },

    { name: "Git", icon: faGit, category: "Tools" },
    { name: "GitHub", icon: faGithub, category: "Tools" },
    { name: "Vite", icon: faNpm, category: "Tools" },
    { name: "VS Code", icon: faTerminal, category: "Tools" },

    { name: "OOP", icon: faLaptopCode, category: "CS Fundamentals" },
    { name: "DS & Algorithms", icon: faCodeBranch, category: "CS Fundamentals" },
  ];

  return (
    <section
      id="skills"
      className="bg-gray-100 dark:bg-gray-900 py-10 transition-colors duration-500"
    >
      <div className="container mx-auto px-6 md:px-10">
        <h2 className="text-4xl font-bold text-center text-gray-800 dark:text-white mb-8">
          My Skills
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {skills.map((skill, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center bg-white dark:bg-gray-800 rounded-xl shadow-md p-4 hover:shadow-lg transition duration-300 border border-gray-200 dark:border-gray-700"
            >
              <FontAwesomeIcon
                icon={skill.icon}
                className="text-3xl text-indigo-600 dark:text-indigo-400 mb-2"
              />
              <span className="text-sm font-medium text-gray-800 dark:text-gray-200 text-center">
                {skill.name}
              </span>
              <span className="text-xs mt-1 text-gray-500 dark:text-gray-400 italic">
                {skill.category}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
