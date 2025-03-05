/* eslint-disable no-unused-vars */
import React from "react";
import { FaFacebook, FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa6";



const MemberCard = ({
  name,
  designation,
  image,
  email,
  facebook,
  linkedin,
  github,
}) => {
  return (
    <div className="flex flex-col items-center p-8 transition-colors duration-300 transform  cursor-pointer rounded-xl hover:border-transparent group hover:bg-[#5b00cc] dark:border-gray-700 dark:hover:border-transparent">
      <img
        className="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300"
        src={image}
        alt={name}
      />

      <h1 className="mt-4 text-2xl font-semibold text-center text-gray-700 capitalize dark:text-black group-hover:text-white">
        {name}
      </h1>

      <p className="mt-2 text-gray-500 capitalize dark:text-gray-800 group-hover:text-gray-300">
        {designation}
      </p>

      <div className="flex mt-3 -mx-2">
        <a
          href={facebook}
          className="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white"
          aria-label="Facebook"
        >
          <FaFacebook className="w-6 h-6 fill-current" />
        </a>

        <a
          href={github}
          className="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white"
          aria-label="Github"
        >
          <FaGithub className="w-6 h-6 fill-current" />
        </a>
        <a
          href={linkedin}
          className="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white"
          aria-label="LinkedIn"
        >
          <FaLinkedin className="w-6 h-6 fill-current" />
        </a>
        <a
          href={`mailto:${email}`}
          className="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white"
          aria-label="Email"
        >
          <FaEnvelope className="w-6 h-6 fill-current" />
        </a>
      </div>
    </div>
  );
};

export default MemberCard;