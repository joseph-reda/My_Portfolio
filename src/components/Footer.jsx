import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

export const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-10 transition-colors duration-500">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
          <div className="text-center lg:text-left">
            <h2 className="text-2xl font-semibold mb-2">Joseph Reda</h2>
            <p className="text-sm text-gray-400">
              Front-End Developer — Passionate about building for the web.
            </p>
          </div>

          <div className="text-center">
            <h4 className="text-lg font-semibold mb-2">Contact</h4>
            <div className="flex flex-col items-center space-y-1 text-sm text-gray-300">
              <a
                href="mailto:redaj1826@gmail.com"
                className="hover:text-white transition duration-300"
              >
                <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
                redaj1826@gmail.com
              </a>
              <a
                href="tel:+201287666728"
                className="hover:text-white transition duration-300"
              >
                <FontAwesomeIcon icon={faPhone} className="mr-2" />
                +20 128 766 6728
              </a>
            </div>
          </div>

          <div className="text-center lg:text-right">
            <h4 className="text-lg font-semibold mb-2">Connect</h4>
            <div className="flex justify-center lg:justify-end gap-4 text-2xl">
              <a
                href="https://github.com/joseph-reda"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="hover:text-gray-400 transition-colors"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a
                href="https://www.linkedin.com/in/joseph-reda"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="hover:text-blue-400 transition-colors"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom: Copyright */}
        <div className="border-t border-gray-700 mt-8 pt-4 text-center text-xs text-gray-500">
          &copy; {new Date().getFullYear()} Joseph Reda. Built with 💻 and ☕.
        </div>
      </div>
    </footer>
  );
};
