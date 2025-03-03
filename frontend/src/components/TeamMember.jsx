import React from "react";
import { FaEnvelope, FaTwitter, FaLinkedin, FaGithub, FaFacebook } from "react-icons/fa";

const TeamMember = ({ name, role, imageSrc, email, facebook, linkedin, github }) => {
  return (
    <div className="flex flex-col justify-center w-full px-8 mx-6 my-12 text-center rounded-md md:w-96 lg:w-80 xl:w-64 bg-gray-800 text-gray-100">
      <img
        alt=""
        className="self-center flex-shrink-0 w-24 h-24 -mt-12 bg-center bg-cover rounded-full bg-gray-500"
        src={imageSrc}
      />
      <div className="flex-1 my-4">
        <p className="text-xl font-semibold leading-snug">{name}</p>
        <p>{role}</p>
      </div>
      <div className="flex items-center justify-center p-3 space-x-3 border-t-2">
        {email && (
          <a
            rel="noopener noreferrer"
            href={email}
            title="Email"
            className="text-gray-50 hover:text-violet-600"
          >
            <FaEnvelope className="w-5 h-5" />
          </a>
        )}
        {facebook && (
          <a
            rel="noopener noreferrer"
            href={facebook}
            title="Facebook"
            className="text-gray-50 hover:text-violet-600"
          >
            <FaFacebook className="w-5 h-5" />
          </a>
        )}
       
        {linkedin && (
          <a
            rel="noopener noreferrer"
            href={linkedin}
            title="LinkedIn"
            className="text-gray-50 hover:text-violet-600"
          >
            <FaLinkedin className="w-5 h-5" />
          </a>
        )}
        {github && (
          <a
            rel="noopener noreferrer"
            href={github}
            title="GitHub"
            className="text-gray-50 hover:text-violet-600"
          >
            <FaGithub className="w-5 h-5" />
          </a>
        )}
      </div>
    </div>
  );
};

export default TeamMember;