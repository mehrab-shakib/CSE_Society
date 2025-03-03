import React from 'react';
import logo from "../assets/footerLogo.svg";
import { FaEnvelope, FaTwitter, FaGithub } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="py-6 bg-gray-100 text-gray-900">
            <div className="container px-6 mx-auto space-y-6 divide-y divide-gray-400 md:space-y-12 divide-opacity-50">
                <div className="grid grid-cols-12">
                    <div className="pb-6 col-span-full md:pb-0 md:col-span-6">
                        <img src={logo} className="h-25 w-auto" alt="CSE Society Logo" />
                    </div>
                    <div className="col-span-6 text-center md:text-left md:col-span-3">
                        <p className="pb-1 text-lg font-medium">Find Us</p>
                        <ul>
                            <li>
                                <a rel="noopener noreferrer" href="#" className="hover:text-violet-600">Documentation</a>
                            </li>
                            <li>
                                <a rel="noopener noreferrer" href="#" className="hover:text-violet-600">FAQ</a>
                            </li>
                            <li>
                                <a rel="noopener noreferrer" href="#" className="hover:text-violet-600">Reference Links</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-span-6 text-center md:text-left md:col-span-3">
                        <p className="pb-1 text-lg font-medium">Useful Links</p>
                        <ul>
                            <li>
                                <a rel="noopener noreferrer" href="#" className="hover:text-violet-600">Comilla University</a>
                            </li>
                            <li>
                                <a rel="noopener noreferrer" href="#" className="hover:text-violet-600">Dept Of CSE</a>
                            </li>
                            <li>
                                <a rel="noopener noreferrer" href="#" className="hover:text-violet-600">Faculty and Officers</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="grid justify-center pt-6 lg:justify-between">
                    <div className="flex flex-col self-center text-sm text-center md:block lg:col-start-1 md:space-x-6">
                        <span>©2025 All rights reserved</span>
                        <a rel="noopener noreferrer" href="#">
                            <span>Privacy policy</span>
                        </a>
                        <a rel="noopener noreferrer" href="#">
                            <span>Terms of service</span>
                        </a>
                    </div>
                    <div className="flex justify-center pt-4 space-x-4 lg:pt-0 lg:col-end-13">
                        <a rel="noopener noreferrer" href="#" title="Email" className="flex items-center justify-center w-10 h-10 rounded-full bg-violet-600 text-gray-50">
                            <FaEnvelope className="w-5 h-5" />
                        </a>
                        <a rel="noopener noreferrer" href="#" title="Twitter" className="flex items-center justify-center w-10 h-10 rounded-full bg-violet-600 text-gray-50">
                            <FaTwitter className="w-5 h-5" />
                        </a>
                        <a rel="noopener noreferrer" href="#" title="GitHub" className="flex items-center justify-center w-10 h-10 rounded-full bg-violet-600 text-gray-50">
                            <FaGithub className="w-5 h-5" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;