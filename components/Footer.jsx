import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-yellow-400 py-8">
      <div className="container mx-auto px-4">
        {/* Logo Section */}
        <div className="flex justify-around items-center space-x-4">
          {/* <img src="/logo1.png" alt="Logo 1" className="h-12" />
          <img src="/logo2.png" alt="Logo 2" className="h-12" />
          <img src="/logo3.png" alt="Logo 3" className="h-12" /> */}
          <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-10 h-10 text-white p-2 bg-red-500 rounded-full"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>

            <Image src={"/RYS-logo-full.png"}
            height={100}
            width={100}
            alt="RYS-logo"
            

             />

<Image src={"/sk-logo-og.png"}
            height={100}
            width={100}
            alt="RYS-logo"
           

             />
        </div>

        {/* Address, Contact, and Social Links Section */}
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-white">
          {/* Address */}
          <div className="flex flex-col items-center sm:items-center">
            <h3 className="font-semibold text-black">Address</h3>
            <span className='text-center font-bold text-lg text-black'>Shreem Education Hub</span>
            <p className="text-center text-gray-800">
        
              45, Gulmohar Rd, behind Om Bakers,<br />
              Kirloskar Colony, Savedi,<br />
              Ahmednagar, Maharashtra 414003
            </p>
          </div>

          {/* Contact Us */}
          <div className="flex flex-col items-center sm:items-center md:mr-16">
            <h3 className="font-semibold text-black">Contact Us</h3>
            <p className='text-gray-800'>Phone: +91 98904 20209</p>
            <p className='text-gray-800'>Phone: +91 80808 56676</p>
          </div>

          {/* Email & Social Links */}
          <div className="flex flex-col items-center sm:items-center">
            <h3 className="font-semibold text-black">Email & Social</h3>
            <p className='text-gray-800'>Email: pulange@gmail.com</p>
            <div className="flex justify-center space-x-4 mt-2">
              <a href="#" aria-label="Facebook" className="hover:text-blue-700 text-gray-800">
                <FaFacebookF />
              </a>
              <a href="#" aria-label="Twitter" className="hover:text-blue-400 text-gray-800">
                <FaTwitter />
              </a>
              <a href="#" aria-label="Instagram" className="hover:text-pink-600 text-gray-800">
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
