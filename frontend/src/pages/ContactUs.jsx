import React from 'react';
import { FaEnvelope, FaPhoneAlt } from 'react-icons/fa';
import { FaMapLocationDot } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const ContactUs = () => {
  return (
    <div className='min-h-screen flex items-center bg-gray-100 text-gray-900'>
      <section className="py-6 w-full">
        <div className="grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x">
          <div className="py-6 md:py-0 md:px-6">
            <h1 className="text-4xl font-bold">Get in touch</h1>
            <p className="pt-2 pb-4">Fill in the form to start a conversation</p>
            <div className="space-y-4 mt-10">
              <p className="flex items-center">
                <FaMapLocationDot className="w-5 h-5 mr-2 sm:mr-6" />
                <span>Department Of Computer Science & Engineering <br /> Comilla University</span>
              </p>
              <p className="flex items-center">
                <FaPhoneAlt className="w-5 h-5 mr-2 sm:mr-6" />
                <span>+8801859640812</span>
              </p>
              <p className="flex items-center">
                <FaEnvelope className="w-5 h-5 mr-2 sm:mr-6" />
                <span>csesociety@cou.ac.bd</span>
              </p>
            </div>
          </div>
          <form noValidate="" className="flex flex-col py-6 space-y-6 md:py-0 md:px-6">
            <label className="block">
              <span className="mb-1">Full name</span>
              <input type="text" placeholder="Your Name" className="block w-full rounded-md shadow-sm mt-2 py-2 px-2 mr-2 focus:ring focus:ring-opacity-75 bg-gray-100  focus:ring-violet-600 " />
            </label>
            <label className="block">
              <span className="mb-1">Email address</span>
              <input type="email" placeholder="leroy@jenkins.com" className="block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 bg-gray-100 focus:ring-violet-600 mt-2 py-2 px-2 mr-2" />
            </label>
            <label className="block">
              <span className="mb-2 mr-2">Message</span>
              <textarea rows="3" className="block w-full rounded-md  shadow-sm focus:ring focus:ring-opacity-10 bg-gray-100 focus:ring-violet-600"></textarea>
            </label>
            <button type="button" className="self-center px-8 py-3 text-lg rounded focus:ring hover:ring focus:ring-opacity-75 text-gray-50  bg-violet-600 focus:ring-violet-600  hover:ring-violet-600 mt-2  mr-2">Submit</button>
            <Link to="/" className="self-center px-8 py-3 text-lg rounded focus:ring hover:ring focus:ring-opacity-75 text-gray-50 bg-gray-600 focus:ring-gray-600 hover:ring-gray-600 mt-2 mr-2">Go to Homepage</Link>
           
          </form>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;