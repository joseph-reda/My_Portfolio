import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faArrowRightLong,
} from "@fortawesome/free-solid-svg-icons";
import {
  faWhatsapp,
  faFacebook,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

export const ContactMe = () => {
  const [hovered, setHovered] = useState("");

  const contacts = [
    {
      id: "linkedin",
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/joseph-reda",
      icon: faLinkedinIn,
      color: "text-blue-500",
    },
    {
      id: "facebook",
      label: "Facebook",
      href: "https://www.facebook.com/share/1BDReQrzRE/",
      icon: faFacebook,
      color: "text-blue-600",
    },
    {
      id: "gmail",
      label: "Gmail",
      href: "mailto:redaj1826@gmail.com",
      icon: faEnvelope,
      color: "text-red-500",
    },
    {
      id: "whatsapp",
      label: "WhatsApp",
      href: "https://wa.me/201287666728",
      icon: faWhatsapp,
      color: "text-green-500",
    },
  ];

  return (
    <section className="bg-gray-900 text-white py-20 min-h-screen flex items-center justify-center">
      <div className="w-full max-w-4xl px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-400 mb-4">
            Let’s Build Something Together
          </h2>
          <p className="text-gray-400 text-lg">
            Whether it’s a collaboration, opportunity, or just a friendly hello — I’m one message away.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {contacts.map(({ id, label, href, icon, color }) => (
            <a
              key={id}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => setHovered(id)}
              onMouseLeave={() => setHovered("")}
              className="flex items-center gap-4 p-5 bg-gray-800 hover:bg-gray-700 rounded-xl shadow-md transition-all duration-300"
            >
              <FontAwesomeIcon
                icon={icon}
                className={`text-3xl ${hovered === id ? color : "text-gray-400"} transition-colors duration-300`}
              />
              <span
                className={`text-lg font-semibold ${hovered === id ? color : "text-gray-300"} transition-colors duration-300`}
              >
                {label}
              </span>
            </a>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="https://drive.google.com/file/d/1ay52hjgnod_qRJ7Q9BVrhjwhqHGjsPxU/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 text-xl font-semibold text-white bg-blue-600 px-6 py-3 rounded-full hover:bg-blue-700 transition duration-300 group"
          >
            View My CV
            <FontAwesomeIcon
              icon={faArrowRightLong}
              className="group-hover:translate-x-1 transition-transform duration-300"
            />
          </a>
        </div>
      </div>
    </section>
  );
};
