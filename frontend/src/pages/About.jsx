/* eslint-disable no-unused-vars */
import React from "react";
import society from "../assets/society.png";

import MemberCard from "../components/MemberCard";
import societyMembers from "../data/societyMembers.json";

const About = () => {
  return (
    <div className="about">
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        {/* Flex Container for Image and Text */}
        <div className="flex flex-col lg:flex-row items-center gap-8">
          {/* Image Section */}
          <div className="lg:w-1/2 mb-8 lg:mb-0 lg:pr-8">
            <img
              className="object-cover w-80 h-auto rounded-lg shadow-lg  transform transition duration-500 hover:scale-105"
              src={society}
              alt="CSE Society"
            />
          </div>

          {/* Text Section */}
          <div className="lg:w-1/2">
            <h2 className="mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
              CSE Society
              <br className="hidden md:block" />
              Executive Committee{" "}
              <span className="inline-block text-violet-600">2024</span>
            </h2>
            <p className="text-base text-gray-700">
              The CSE Society of the Department of Computer Science and
              Engineering (CSE) at Comilla University is a vibrant and dynamic
              organization that serves as the heart of student activities within
              the department. It aims to create a collaborative environment
              where students can enhance their academic, technical, and
              interpersonal skills. <br />
              <br />
              Through its various clubs—such as the Programming Club,
              Development Club, Sports & Cultural Club, and Self-Development
              Club—the CSE Society ensures a well-rounded experience for its
              members, encouraging them to excel in academics, develop
              leadership qualities, and foster creativity
            </p>
          </div>
        </div>

        {/* Meet the  Team Section */}
        <div className=" mt-16 ">
          <h1 className=" text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-black">
            Our Executive Team
          </h1>

          <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-4">
            {societyMembers.map((member) => (
              <MemberCard
                key={member.id}
                name={member.name}
                designation={member.designation}
                image={member.image}
                email={member.email}
                facebook={member.facebook}
                linkedin={member.linkedin}
                github={member.github}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
