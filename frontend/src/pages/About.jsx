import React from "react";
import society from "../assets/society.png";
import gs from "../assets/gs.png";
import TeamMember from "../components/TeamMember";

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
        <section className="mt-12 py-6  text-gray-800">
          <div className="container flex flex-col items-center justify-center p-4 mx-auto sm:p-10">
            <p className="p-2 text-sm font-medium tracking-wider text-center uppercase">
              Executive Committee-2025
            </p>
            <h1 className="text-4xl font-bold leading-none text-center sm:text-5xl">
              The talented people behind the scenes
            </h1>
            <div className="flex flex-row flex-wrap-reverse justify-center mt-8">
            
              {/* 5 */}
              <TeamMember
                name="Ahsanul Anam Saboj"
                role="Vice President"
                imageSrc={gs}
                email="mailto:mehrab@example.com"
                facebook="https://facebook.com/mehrab"
                linkedin="https://linkedin.com/in/mehrab"
                github="https://github.com/mehrab"
                twitter="https://twitter.com/mehrab"
              />
              <TeamMember
                name="Mehrab Hossain Shakib"
                role="General Secretary"
                imageSrc={gs}
                email="mailto:leroy@example.com"
                facebook="https://facebook.com/leroy"
                linkedin="https://linkedin.com/in/leroy"
                github="https://github.com/leroy"
                twitter="https://twitter.com/leroy"
              />
              <TeamMember
                name="MD Iqbal"
                role="Assistant General Secretary"
                imageSrc="https://source.unsplash.com/100x100/?portrait?2"
                email="mailto:leroy2@example.com"
                facebook="https://facebook.com/leroy2"
                linkedin="https://linkedin.com/in/leroy2"
                github="https://github.com/leroy2"
                twitter="https://twitter.com/leroy2"
              />
              <TeamMember
                name="MD Iqbal"
                role="Assistant General Secretary"
                imageSrc="https://source.unsplash.com/100x100/?portrait?2"
                email="mailto:leroy2@example.com"
                facebook="https://facebook.com/leroy2"
                linkedin="https://linkedin.com/in/leroy2"
                github="https://github.com/leroy2"
                twitter="https://twitter.com/leroy2"
              />
              
              {/* 2 */}
              <TeamMember
                name="Mahmuda Khatun"
                role="Convenor"
                imageSrc="https://source.unsplash.com/100x100/?portrait?3"
                email="mailto:leroy3@example.com"
                facebook="https://facebook.com/leroy3"
                linkedin="https://linkedin.com/in/leroy3"
                github="https://github.com/leroy3"
                twitter="https://twitter.com/leroy3"
              />
              {/* 3 */}
              <TeamMember
                name="Zahid Hasan"
                role="Secretary"
                imageSrc="https://source.unsplash.com/100x100/?portrait?4"
                email="mailto:leroy4@example.com"
                facebook="https://facebook.com/leroy4"
                linkedin="https://linkedin.com/in/leroy4"
                github="https://github.com/leroy4"
                twitter="https://twitter.com/leroy4"
              />
              {/* 4 */}
              <TeamMember
                name="Atiq Hasan"
                role="Treasurer"
                imageSrc="https://source.unsplash.com/100x100/?portrait?5"
                email="mailto:leroy5@example.com"
                facebook="https://facebook.com/leroy5"
                linkedin="https://linkedin.com/in/leroy5"
                github="https://github.com/leroy5"
                twitter="https://twitter.com/leroy5"
              />
              <TeamMember
                name="MD Iqbal"
                role="Assistant General Secretary"
                imageSrc="https://source.unsplash.com/100x100/?portrait?2"
                email="mailto:leroy2@example.com"
                facebook="https://facebook.com/leroy2"
                linkedin="https://linkedin.com/in/leroy2"
                github="https://github.com/leroy2"
                twitter="https://twitter.com/leroy2"
              />
              <TeamMember
                name="MD Iqbal"
                role="Assistant General Secretary"
                imageSrc="https://source.unsplash.com/100x100/?portrait?2"
                email="mailto:leroy2@example.com"
                facebook="https://facebook.com/leroy2"
                linkedin="https://linkedin.com/in/leroy2"
                github="https://github.com/leroy2"
                twitter="https://twitter.com/leroy2"
              />
              <TeamMember
                name="MD Iqbal"
                role="Assistant General Secretary"
                imageSrc="https://source.unsplash.com/100x100/?portrait?2"
                email="mailto:leroy2@example.com"
                facebook="https://facebook.com/leroy2"
                linkedin="https://linkedin.com/in/leroy2"
                github="https://github.com/leroy2"
                twitter="https://twitter.com/leroy2"
              />
              
              {/* 1 */}
              <TeamMember
                name="Prof. Dr. Mahmudul Hasan"
                role="President"
                imageSrc="https://source.unsplash.com/100x100/?portrait?5"
                email="mailto:leroy5@example.com"
                facebook="https://facebook.com/leroy5"
                linkedin="https://linkedin.com/in/leroy5"
                github="https://github.com/leroy5"
                twitter="https://twitter.com/leroy5"
              />
              
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;