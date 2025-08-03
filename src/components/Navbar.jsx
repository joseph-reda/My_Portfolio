import React, { useEffect, useState } from "react";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Navbar = () => {
  const location = useLocation();
  const isAppPage = location.pathname === "/portfolio/";
  const [isMain, setIsMain] = useState(localStorage.getItem("main") === "true");

  const handelLogo = () => setIsMain(prev => !prev);

  useEffect(() => {
    localStorage.setItem("main", isMain);
  }, [isMain]);

  return (
    <nav className="bg-[#111827] shadow-md py-3 sticky top-0 z-50">
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div>
          {isAppPage ? (
            <a
              href="https://github.com/joseph-reda"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#f1f1f1] text-4xl hover:text-[#cba44d] transition"
              aria-label="GitHub"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
          ) : (
            <Link
              to="/portfolio/"
              onClick={handelLogo}
              className="text-[#f1f1f1] text-4xl hover:text-[#cba44d] transition"
              aria-label="Home"
            >
              <FontAwesomeIcon icon={faHouse} />
            </Link>
          )}
        </div>
        <ul className="flex items-center gap-6 md:gap-10 bg-[#1f2937] rounded-md px-8 py-4 shadow-md">
          {[
            { to: "/portfolio/", label: "Home" },
            { to: "/contact", label: "Contact Me" },
            { to: "/projects", label: "My Projects" },
          ].map(({ to, label }) => (
            <li key={to}>
              <Link
                to={to}
                onClick={handelLogo}
                className="text-[#d8c593] text-sm md:text-base font-medium hover:text-[#f7e7af] transition-all duration-200"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="w-8 md:w-10" />
      </div>
    </nav>
  );
};
