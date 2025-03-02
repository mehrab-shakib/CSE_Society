import React from "react";
import { Link } from "react-router-dom";
import heroBanner from "../assets/undraw_team-up_qeem.svg";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="dark:bg-gray-100 dark:text-gray-800">
        <div className="container flex flex-col-reverse lg:flex-row items-center justify-center p-6 mx-auto lg:py-24">
          {/* Text Content */}
          <div className="flex flex-col justify-center p-6 text-center lg:text-left lg:max-w-md xl:max-w-lg">
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
              CSE Society <br/>
              <span className="text-violet-600">Club Community</span>
            </h1>
            <p className="mt-6 mb-8 text-lg sm:mb-12">
              Discover, join, and thrive in <span className="text-2xl text-bold text-violet-600">CSE Society's</span> vibrant club
              ecosystem. Enhance your university experience with leadership,
              events, and management opportunities.
            </p>
            <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4 sm:justify-center lg:justify-start">
              <Link
                to="/clubs"
                className="px-8 py-3 text-lg font-semibold rounded bg-violet-600 text-white hover:bg-violet-700 transition duration-300"
              >
                Explore Clubs
              </Link>
              <Link
                to="/about"
                className="px-8 py-3 text-lg font-semibold border border-gray-800 rounded hover:bg-gray-200 transition duration-300"
              >
                Learn More
              </Link>
            </div>
          </div>

          {/* Hero Image */}
          <div className="flex items-center justify-center p-6 lg:w-1/2">
            <img
              src={heroBanner}
              alt="Team Collaboration"
              className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
            />
          </div>
        </div>
      </section>

      {/* Service Section */}

      <section className="py-20 bg-white">
  <div className="container mx-auto px-6">
    {/* Section Heading */}
    <div className="text-center mb-16">
      <span className="text-sm font-bold uppercase text-violet-600 tracking-wider">
        Our Services
      </span>
      <h2 className="text-4xl font-bold mt-2">
        Empowering Your University Experience
      </h2>
    </div>

    {/* Services Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {/* Leadership Development */}
      <div className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
        <div className="flex justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-12 w-12 text-violet-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
        </div>
        <h3 className="text-2xl font-bold mt-6 mb-4">Leadership Development</h3>
        <p className="text-gray-600">
          We offer workshops and mentoring programs to help you develop essential
          leadership skills, preparing you for roles within clubs and beyond.
        </p>
      </div>

      {/* Event Management */}
      <div className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
        <div className="flex justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-12 w-12 text-violet-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
        </div>
        <h3 className="text-2xl font-bold mt-6 mb-4">Event Management</h3>
        <p className="text-gray-600">
          Learn to plan and execute successful club events with our comprehensive
          event management training, covering budgeting, logistics, and promotion.
        </p>
      </div>

      {/* Club Management */}
      <div className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
        <div className="flex justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-12 w-12 text-violet-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
            />
          </svg>
        </div>
        <h3 className="text-2xl font-bold mt-6 mb-4">Club Management</h3>
        <p className="text-gray-600">
          Master the art of running successful clubs with our comprehensive
          management training, covering organization, communication, and
          leadership.
        </p>
      </div>
    </div>
  </div>
</section>

      {/* Club Community Section */}
      <div className="bg-gray-100 py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-8">Join Our Club Community</h2>
          <p className="text-xl text-gray-600 mb-8">
            Be a part of Comilla University's vibrant club ecosystem and enhance
            your university experience.
          </p>
          <Link
            to="/clubs"
            className="bg-white border-2 border-violet-600 text-black px-8 py-3 rounded-full font-semibold hover:bg-violet-700 transition duration-300"
          >
            EXPLORE CLUBS
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;