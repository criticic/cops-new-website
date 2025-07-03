import { FaGithub, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import hashnode from "../../public/hashnode.png";
import Image from 'next/image';

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <div className="!bg-black text-white py-3 sm:py-5 px-3 sm:px-5 flex flex-col sm:flex-row justify-between items-center text-sm sm:text-base w-full z-50 ">
            <span className="sm:pl-4 mb-2 sm:mb-0 text-lg text-gray-400">© COPS {year}. All rights reserved.</span>
            <div className="sm:pr-2 flex space-x-5 items-center flex-wrap">
                <a href="https://blogs.copsiitbhu.co.in/" target="_blank" rel="noopener noreferrer" aria-label="Hashnode">
                    <Image
                        src={hashnode}
                        alt="Hashnode Logo"
                        className="h-5 w-50 sm:h-5 sm:w-25 opacity-85 hover:opacity-100"
                    />
                </a>
                <a href="https://github.com/COPS-IITBHU" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
                    <FaGithub className="h-5 w-5 sm:h-6 sm:w-6 text-gray-200 hover:text-gray-500" />
                </a>
                <a href="https://x.com/cops_iitbhu" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
                    <FaTwitter className="h-5 w-5 sm:h-6 sm:w-6 text-gray-200 hover:text-indigo-500" />
                </a>
                <a href="https://instagram.com/cops.iitbhu" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                    <FaInstagram className="h-5 w-5 sm:h-6 sm:w-6 text-gray-200 hover:text-pink-500" />
                </a>
                <a href="https://www.linkedin.com/company/cops-iitbhu/" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin className="h-5 w-5 sm:h-6 sm:w-6 text-gray-200 hover:text-blue-500" />
                </a>
            </div>
        </div>
    );
};

export default Footer;