import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('');
  const router = useRouter();

  useEffect(() => {
    setActiveLink(router.pathname);
  }, [router.pathname]);


  const toggleMenu = () => setIsOpen(!isOpen);

  const closeMenu = () => setIsOpen(false);

  const getLinkClasses = (path) =>
    `text-lg font-semibold px-3 py-2 rounded-full transition duration-300 ease-in-out ${
      activeLink === path
        ? 'bg-red-500 text-white' 
        : 'text-red-600 hover:bg-red-500 hover:text-white'
    }`;

  return (
    <>
      {/* Main Navbar */}
      <header className="text-gray-600 body-font p-5 sticky top-0 z-10 bg-yellow-400">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center justify-between">
          {/* Logo */}
          <Link href={'/'}>
          <Image src={"/shreem-logo-og.png"}
            height={60}
            width={60}
            alt="Shreem-logo"
             />
             </Link>
          {/* Hamburger Icon for Mobile */}
          <button
            className="inline-flex items-center md:hidden text-red-600 hover:bg-red-500 hover:text-white rounded-full px-3 py-2 transition duration-300 ease-in-out font-semibold text-lg"
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
          <nav className="hidden md:flex md:ml-auto md:mr-auto flex-wrap items-center text-lg justify-center space-x-6">
            <Link href="/shreemclasses" className= {getLinkClasses('/shreemclasses')}>
              Shreem Classes
            </Link>
            <Link href="/riayoga" className={getLinkClasses('/riayoga')}>
              RIA Yoga Studio
            </Link>
            <Link href="/counseling" className={getLinkClasses('/counseling')}>
              Learning Hub counseling
            </Link>
            <Link href="/blogs" className={getLinkClasses('/blogs')}>
              Blogs
            </Link>
          </nav>

          {/* Quote Button */}
          <a
            href="https://wa.me/919890420209"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center text-red-600 hover:bg-red-500 hover:text-white rounded-full px-3 py-2 transition duration-300 ease-in-out font-semibold text-lg"
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
        className={`fixed inset-0 z-20 bg-yellow-400 bg-opacity-100 transform ${
          isOpen ? 'translate-x-0' : 'translate-y-full'
        } transition-transform ease-in-out duration-700`}
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
        <nav className="h-full flex flex-col items-center justify-center text-center space-y-6">
        <Link href={'/'} onClick={closeMenu}>
          <Image src={"/shreem-logo-og.png"}
            height={60}
            width={60}
            alt="Shreem-logo"
             />
             </Link>
          <Link href="/shreemclasses" onClick={closeMenu} className={getLinkClasses('/shreemclasses')}>
            Shreem Classes
          </Link>
          <Link href="/riayoga" onClick={closeMenu} className={getLinkClasses('/riayoga')}>
            RIA Yoga Studio
          </Link>
          <Link href="/counseling" onClick={closeMenu} className={getLinkClasses('/counseling')}>
            Learning Hub counselling
          </Link>
          <Link href="/blogs" onClick={closeMenu} className={getLinkClasses('/blogs')}>
            Blogs
          </Link>
          <a
            href="https://wa.me/919890420209"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl text-red-600 hover:bg-red-500 hover:text-white rounded-full px-4 py-2 transition duration-300 ease-in-out mt-10 font-semibold"
            onClick={closeMenu}
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
