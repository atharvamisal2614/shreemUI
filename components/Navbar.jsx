import { useRouter } from 'next/router';
import Link from 'next/link';
import { useState } from 'react';

function Navbar() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  // Toggle the menu open/close
  const toggleMenu = () => setIsOpen(!isOpen);

  const isActive = (path) => router.pathname === path ? 'bg-red-500 text-white' : 'text-red-600 hover:bg-red-500 hover:text-white';

  return (
    <>
      {/* Main Navbar */}
      <header className="text-gray-600 body-font p-5 sticky top-0 z-10 bg-yellow-400 ">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center justify-between">
          {/* Logo */}
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
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
            <span className="ml-3 text-xl">Shreem Logo</span>
          </a>

          {/* Hamburger Icon for Mobile */}
          <button
            className="inline-flex items-center md:hidden text-red-600 hover:bg-red-500 hover:text-white rounded-full px-3 py-1 transition duration-300 ease-in-out font-semibold text-lg"
            onClick={toggleMenu}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-8 h-8"
              viewBox="0 0 24 24"
            >
              <path d="M3 12h18M3 6h18M3 18h18"></path>
            </svg>
          </button>

          {/* Regular Navbar (Hidden on Mobile) */}
          <nav className="hidden md:flex md:ml-auto md:mr-auto flex-wrap items-center text-base justify-center">
            <Link href="/shreemclasses" className={`mr-10 px-3 py-1 rounded-full font-semibold text-lg transition duration-300 ease-in-out ${isActive('/shreemclasses')}`}>
              Shreem Classes
            </Link>
            <Link href="/riayoga" className={`mr-10 px-3 py-1 rounded-full font-semibold text-lg transition duration-300 ease-in-out ${isActive('/riayoga')}`}>
              RIA Yoga Studio
            </Link>
            <Link href="/counseling" className={`mr-10 px-3 py-1 rounded-full font-semibold text-lg transition duration-300 ease-in-out ${isActive('/counseling')}`}>
              Learning Hub Counseling
            </Link>
            <Link href="/blogs" className={`mr-10 px-3 py-1 rounded-full font-semibold text-lg transition duration-300 ease-in-out ${isActive('/blogs')}`}>
              Blogs
            </Link>
          </nav>

          {/* Quote Button */}
          <a
            href="https://wa.me/919890420209"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center mr-10 text-red-600 hover:bg-red-500 hover:text-white rounded-full px-3 py-1 transition duration-300 ease-in-out font-semibold text-lg"
          >
            Get a Quote
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-4 h-4 ml-1"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </header>

      {/* Mobile Hamburger Menu */}
      <div
        className={`fixed inset-0 z-20 bg-yellow-400 bg-opacity-100 transform ${isOpen ? 'translate-x-0' : 'translate-y-full'} transition-transform ease-in-out duration-700`}
      >
        {/* Close Button */}
        <button
          className="absolute top-5 right-5 text-red-500 hover:bg-red-500 hover:text-white"
          onClick={toggleMenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-8 h-8"
            viewBox="0 0 24 24"
          >
            <path d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>

        {/* Hamburger Menu Content */}
        <nav className="h-full flex flex-col items-center justify-center text-center">
          <Link href="/shreemclasses" className={`text-2xl mb-5 px-4 py-2 rounded-full font-semibold transition duration-300 ease-in-out ${isActive('/shreemclasses')}`}>
            Shreem Classes
          </Link>
          <Link href="/riayoga" className={`text-2xl mb-5 px-4 py-2 rounded-full font-semibold transition duration-300 ease-in-out ${isActive('/riayoga')}`}>
            RIA Yoga Studio
          </Link>
          <Link href="/counseling" className={`text-2xl mb-5 px-4 py-2 rounded-full font-semibold transition duration-300 ease-in-out ${isActive('/counseling')}`}>
            Learning Hub Counseling
          </Link>
          <Link href="/blogs" className={`text-2xl mb-5 px-4 py-2 rounded-full font-semibold transition duration-300 ease-in-out ${isActive('/blogs')}`}>
            Blogs
          </Link>
          <a
            href="https://wa.me/919890420209"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl mt-10 px-4 py-2 rounded-full font-semibold transition duration-300 ease-in-out text-red-600 hover:bg-red-500 hover:text-white"
          >
            Get a Quote
          </a>
        </nav>
      </div>

      {/* Overlay (when menu is open) */}
      {isOpen && <div className="fixed inset-0 z-10 bg-black opacity-50"></div>}
    </>
  );
}

export default Navbar;
