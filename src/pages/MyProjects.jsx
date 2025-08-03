import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import imgMemory from "../images/memory.png";
import imgSocial from "../images/social.png";
import imgMovie from "../images/movie.png";
import imgRest from "../images/rest.png";
import imgYt from "../images/yt.png";
import imgEconommec from "../images/econommec.png";
import imgEconommec_redux from "../images/econommec-redux.png";
import imgYoutube from "../images/download.png";
import imgGemini from "../images/gemini-clone.png";
import ImgDashboard from "../images/ImgDashboard.jpg";
import ImgDermaScan from "../images/DermaScan.png";
import ImgBookStore from "../images/BookStore.png";

export const myProject = [
  {
    id: 12,
    category: "react",
    using: "React, Tailwind CSS, JSON, React Router, Context API",
    imgSrc: ImgBookStore,
    linkGithub: "https://github.com/joseph-reda/Elharafesh",
    linkPage: "https://elharafesh.vercel.app/",
    header: "BookStore",
    title:
      "A real-world Arabic online bookstore designed to sell used and vintage books, built with React and styled to reflect literary heritage.",
  },
  {
    id: 11,
    category: "react",
    using: "React, Redux Toolkit, Tailwind CSS, Router",
    imgSrc: ImgDermaScan,
    linkGithub: "https://github.com/joseph-reda/DermCare",
    linkPage: "https://derm-care-five.vercel.app/",
    header: "DermaScan",
    title:
      "Graduation project: a skin disease detection app with role-based front-end and doctor-patient data interactions.",
  },
  {
    id: 10,
    category: "react",
    using: "React, Recharts, Framer Motion, Tailwind CSS",
    imgSrc: ImgDashboard,
    linkGithub: "https://github.com/joseph-reda/Dashboard",
    linkPage: "https://dashboard-mu-tawny-29.vercel.app/",
    header: "Dashboard",
    title: "An animated dashboard using chart libraries and clean UI transitions.",
  },
  {
    id: 9,
    category: "react",
    using: "React, Real API, Tailwind CSS",
    imgSrc: imgYoutube,
    linkGithub: "https://github.com/joseph-reda/Youtube-Clone",
    linkPage: "https://youtube-clone-amber-kappa.vercel.app/",
    header: "YouTube Clone",
    title: "A full UI clone of YouTube, with real API integration and video rendering.",
  },
  {
    id: 8,
    category: "react",
    using: "React, Real API, Tailwind CSS",
    imgSrc: imgGemini,
    linkGithub: "https://github.com/joseph-reda/gemini-clone",
    linkPage: "https://gemini-clone-rosy-zeta.vercel.app/",
    header: "Gemini Clone",
    title: "A clone of the Gemini AI interface with dynamic content fetching.",
  },
  {
    id: 7,
    category: "react",
    using: "React, Axios, Bootstrap",
    imgSrc: imgMovie,
    linkGithub: "https://github.com/joseph-reda/movie-app",
    linkPage: "https://movie-app-ivory-zeta.vercel.app/",
    header: "Movie App",
    title: "Search, watchlist, and manage movies using an API-powered interface.",
  },
  {
    id: 6,
    category: "react",
    using: "React, Redux Toolkit, Tailwind CSS",
    imgSrc: imgEconommec_redux,
    linkGithub: "https://github.com/joseph-reda/Ecommerce-Redux/tree/master",
    linkPage: "https://ecommerce-redux-chi.vercel.app/",
    header: "E-commerce Redux",
    title: "Scalable e-commerce site using Redux Toolkit for state management.",
  },
  {
    id: 5,
    category: "react",
    using: "React, Tailwind CSS",
    imgSrc: imgEconommec,
    linkGithub: "https://github.com/joseph-reda/e-commerce",
    linkPage: "https://e-commerce-liard-one.vercel.app/",
    header: "E-commerce",
    title: "Simplified version of an online shopping platform using React.",
  },
  {
    id: 4,
    category: "js",
    using: "JavaScript, Real API, Axios, Tailwind CSS",
    imgSrc: imgSocial,
    linkGithub: "https://github.com/joseph-reda/social-media",
    linkPage: "https://social-media-dun-eight.vercel.app/",
    header: "Social Media App",
    title: "User auth, post publishing, and interaction features in a mini-social app.",
  },
  {
    id: 3,
    category: "react",
    using: "React, Bootstrap, FontAwesome",
    imgSrc: imgRest,
    linkGithub: "https://github.com/joseph-reda/restaurant",
    linkPage: "https://restaurant-lake-sigma.vercel.app/",
    header: "Restaurant App",
    title: "A basic restaurant landing page using components and layout with Bootstrap.",
  },
  {
    id: 2,
    category: "js",
    using: "React, Material UI, Tailwind CSS",
    imgSrc: imgYt,
    linkGithub: "https://github.com/joseph-reda/YT-website",
    linkPage: "https://yt-website-seven.vercel.app/",
    header: "YT Website",
    title: "Travel landing page using UI components from MUI and Tailwind.",
  },
  {
    id: 1,
    category: "js",
    using: "HTML, CSS, JavaScript",
    imgSrc: imgMemory,
    linkGithub: "https://github.com/joseph-reda/memory-game",
    linkPage: "https://memory-game-lac-one.vercel.app/",
    header: "Memory Game",
    title: "Classic memory flip game using pure JS to manage game logic.",
  },
];

export const MyProjects = () => {
  return (
    <section className="bg-gray-100 py-16" id="projects">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <h2 className="text-5xl font-bold text-center mb-16 text-gray-800">
          All My Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {myProject.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <img
                src={project.imgSrc}
                alt={project.header}
                className="w-full h-48 object-cover rounded-t-2xl"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-800">
                  {project.header}
                </h3>
                <p className="text-sm text-blue-500 mt-1">
                  {project.using}
                </p>
                <p className="text-gray-600 text-sm mt-3">{project.title}</p>

                <div className="flex justify-between items-center mt-6 border-t pt-4 border-gray-200">
                  <a
                    href={project.linkGithub}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition"
                  >
                    <FontAwesomeIcon icon={faGithub} />
                    <span className="text-sm font-medium">GitHub</span>
                  </a>
                  <a
                    href={project.linkPage}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition"
                  >
                    <span className="text-sm font-medium">Visit</span>
                    <FontAwesomeIcon icon={faArrowRight} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
