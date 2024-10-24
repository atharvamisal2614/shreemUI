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
          <Image src={"/shreem-logo-og.png"}
            height={100}
            width={100}
            alt="RYS-logo"
            className='md:w-28 md:h-28'
             />

            <Image src={"/RYS-logo-full.png"}
            height={100}
            width={100}
            alt="RYS-logo"
            className='md:w-32 md:h-40'

             />

<Image src={"/sk-logo-og.png"}
            height={100}
            width={100}
            alt="RYS-logo"
           className='md:w-36 md:h-40'
             />
        </div>

        {/* Address, Contact, and Social Links Section */}
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-white">
          {/* Address */}
          <div className="flex flex-col items-center sm:items-center md:mr-4">
            <h3 className="font-semibold text-black">Address</h3>
            <span className='text-center font-bold text-lg text-black'>Shreem Education Hub</span>
            <p className="text-center text-gray-800">
        
              45, Gulmohar Rd, behind Om Bakers,<br />
              Kirloskar Colony, Savedi,<br />
              Ahmednagar, Maharashtra 414003
            </p>
          </div>

          {/* Contact Us */}
          <div className="flex flex-col items-center sm:items-center md:mr-6">
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







// import React from 'react';
// import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
// import Image from 'next/image';

// const Footer = () => {
//   return (
//     <footer className="bg-yellow-400 py-8">
//       <div className="container mx-auto px-4">
//         <div className="flex flex-wrap sm:flex-nowrap justify-between items-center">
//           {/* Left section with vertically stacked logos, centered better */}
//           <div className="w-full sm:w-1/3 flex flex-col items-center sm:items-start space-y-4 mb-8 sm:mb-0">
//             <Image
//               className="md:ml-48" // Adjusted margin for better centering
//               src="/shreem-logo.png"
//               height={100}
//               width={80}
//               alt="Shreem-logo"
//             />
//             <Image
//               className="md:ml-48" // Matching margin with the first logo
//               src="/RYS-logo-full.png"
//               height={100}
//               width={100}
//               alt="RYS-logo"
//             />
//             <Image
//               className="md:ml-48" // Matching margin for consistent alignment
//               src="/sk-logo-og.png"
//               height={100}
//               width={100}
//               alt="SK-logo"
//             />
//           </div>

//           {/* Vertical dividing line */}
//           <div className="hidden sm:block w-px bg-gray-600 h-64 mx-8"></div>

//           {/* Right section aligned horizontally in PC view */}
//           <div className="w-full sm:w-2/3 flex flex-col sm:flex-row justify-between text-center sm:text-left space-y-16 sm:space-y-0">
//             {/* Address */}
//             <div className="flex flex-col items-center sm:items-start">
//               <h3 className="font-semibold text-black">Address</h3>
//               <span className="text-center sm:text-left font-bold text-lg text-black">
//                 Shreem Education Hub
//               </span>
//               <p className="text-center sm:text-left text-gray-800">
//                 45, Gulmohar Rd, behind Om Bakers,<br />
//                 Kirloskar Colony, Savedi,<br />
//                 Ahmednagar, Maharashtra 414003
//               </p>
//             </div>

//             {/* Contact Us */}
//             <div className="flex flex-col items-center sm:items-start">
//               <h3 className="font-semibold text-black">Contact Us</h3>
//               <p className="text-gray-800">Phone: +91 98904 20209</p>
//               <p className="text-gray-800">Phone: +91 80808 56676</p>
//             </div>

//             {/* Email & Social Links */}
//             <div className="flex flex-col items-center sm:items-start">
//               <h3 className="font-semibold text-black">Email & Social</h3>
//               <p className="text-gray-800">Email: pulange@gmail.com</p>
//               <div className="flex justify-center sm:justify-start space-x-4 mt-2">
//                 <a href="#" aria-label="Facebook" className="hover:text-blue-700 text-gray-800">
//                   <FaFacebookF />
//                 </a>
//                 <a href="#" aria-label="Twitter" className="hover:text-blue-400 text-gray-800">
//                   <FaTwitter />
//                 </a>
//                 <a href="#" aria-label="Instagram" className="hover:text-pink-600 text-gray-800">
//                   <FaInstagram />
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
