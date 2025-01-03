import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import { SiGmail } from "react-icons/si";
import { IoCall } from "react-icons/io5";
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-yellow-400 text-gray-800 body-font">
      <div className="container mx-auto py-12 px-5 flex flex-col md:flex-row md:items-center">

        {/* Logo Section */}
        <div className="md:w-1/4 text-center md:text-left mb-10 md:mb-0">
          <Image src={'/shreem-logo-og.png'} alt="logo" width={100} height={100} className="mx-auto" />
        </div>

        {/* Information Sections */}
        <div className="flex-grow md:flex md:justify-between space-y-10 md:space-y-0 text-center md:text-left">

          {/* Links Section */}
          <div>
            <h2 className="font-bold text-lg text-gray-900 mb-4">Explore</h2>
            <ul className="space-y-2">
              <li><Link href="/" className="hover:text-gray-500">Home</Link></li>
              <li><Link href="/shreemclasses" className="hover:text-gray-500">Shreem Classes</Link></li>
              <li><Link href="https://www.skcounselling.in" className="hover:text-gray-500">Learning Hub Counseling</Link></li>
              <li><Link href="https://wa.me/919890420209" className="hover:text-gray-500">Get in Touch</Link></li>
            </ul>
          </div>

          {/* Contact Us Section */}
          <div>
            <h2 className="font-bold text-lg text-gray-900 mb-4">Contact Us</h2>
            <p className="space-y-2">
              <Link href="tel:+919890420209" className="hover:text-gray-500 block">Phone: +91 98904 20209</Link>
              <Link href="tel:+919932285111" className="hover:text-gray-500 block">Phone: +91 99322 85111</Link>
            </p>
          </div>

          {/* Email and Socials Section */}
          <div>
            <h2 className="font-bold text-lg text-gray-900 mb-4">Email & Socials</h2>
            <p>
              <Link href="mailto:kulange@gmail.com" className="hover:text-gray-500">kulange@gmail.com</Link>
            </p>
            <div className="flex justify-center  space-x-4 mt-2">
              <Link href="https://www.facebook.com/share/1ARLFqg1Br/" target="_blank" aria-label="Facebook" className="hover:text-blue-500">
                <FaFacebookF size={20} />
              </Link>
              <Link href="mailto:kulange@gmail.com" target="_blank" aria-label="Mail" className="hover:text-pink-600">
                <SiGmail size={20} />
              </Link>
              {/* <Link href="https://twitter.com" target="_blank" aria-label="Twitter" className="hover:text-blue-400">
                <FaTwitter size={20} />
              </Link> */}
              <Link href="tel:+919890420209" target="_blank" aria-label="Twitter" className="hover:text-green-600">
                <IoCall size={20} />
              </Link>
            </div>
          </div>

          {/* Address Section */}
          <div>
            <h2 className="font-bold text-lg text-gray-900 mb-4">Address</h2>
            <p className="leading-relaxed">
              Shreem Education Hub<br />
              45, Gulmohar Road, behind Om Bakers,<br />
              Kirloskar Colony, Savedi,<br />
              Ahilyanagar, Maharashtra 414001
            </p>
          </div>

        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="bg-yellow-400">
        <div className="container mx-auto py-4 px-5 flex flex-col sm:flex-row justify-center items-center text-center sm:text-left">
          <p className="text-gray-900 text-sm">© 2024 Shreem Education Hub</p>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
