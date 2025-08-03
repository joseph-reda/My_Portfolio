import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import me from "../images/me.jpg";

export const About = () => {
  return (
    <section className="bg-gray-100 dark:bg-gray-900 py-16 transition-colors duration-500 min-h-screen" id="about">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-800 dark:text-gray-100">
          About Me
        </h2>
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-shrink-0">
            <img
              src={me}
              alt="Joseph Reda"
              className="rounded-md shadow-2xl w-80 h-auto"
            />
          </div>

          <div className="w-full lg:w-2/3 bg-white dark:bg-gray-800 rounded-xl shadow-xl transition-colors duration-500 overflow-hidden">
            <div className="flex gap-2 p-4 border-b border-gray-300 dark:border-gray-700">
              <FontAwesomeIcon icon={faCircle} className="text-red-500 text-xs" />
              <FontAwesomeIcon icon={faCircle} className="text-yellow-400 text-xs" />
              <FontAwesomeIcon icon={faCircle} className="text-green-500 text-xs" />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
                Hi there 👋
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-base md:text-lg">
                I'm a passionate front-end developer with hands-on experience in building modern, responsive web interfaces using <strong>React.js</strong>.
                Over the course of <strong>15+ projects</strong>, I've worked extensively with <strong>JavaScript</strong>, <strong>Tailwind CSS</strong>, <strong>Bootstrap</strong>, and real-world API integrations using tools like <strong>Postman</strong>.
                <br /><br />
                I thrive in collaborative environments where creativity and clean code go hand-in-hand. I'm currently seeking an opportunity to contribute to a forward-thinking team where I can grow, share ideas, and make an impact.
                <br /><br />
                <strong>Let’s create something great together!</strong>
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
