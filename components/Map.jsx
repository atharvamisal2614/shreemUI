import { SiBookstack } from "react-icons/si";
import { GrYoga } from "react-icons/gr";
import { FaMicrophone } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import Link from "next/link";

function Map() {
  return (
    <section className="text-gray-600 body-font bg-white">
      <div className="container px-5 py-24 mx-auto flex flex-wrap">
        <div className="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden relative" style={{ paddingBottom: '56.25%', height: 0 }}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15078.633807861179!2d74.738249!3d19.1226339!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdcbb4212becbb7%3A0x85507b8959ca78f7!2sShreem%20Education%20Hub!5e0!3m2!1sen!2sin!4v1729242027214!5m2!1sen!2sin"
            style={{ border: 0, position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
          <div className="flex flex-col mb-10 lg:items-start items-center">
            <div className="w-14 h-14 inline-flex items-center justify-center rounded-full bg-yellow-100 text-yellow-500 mb-5">
              <SiBookstack className="w-9 h-9" />
            </div>
            <div className="flex-grow">
              <h2 className="text-gray-900 text-lg title-font  mb-3 ">Shreem Classes</h2>
              <p className="leading-relaxed text-base">
                Offering quality education with expert instructors, advanced curriculums, and practical learning.
              </p>
              <Link href={'/shreemclasses'} className="mt-3 text-red-500 inline-flex items-center font-semibold">
                Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </Link>
            </div>
          </div>
        
          <div className="flex flex-col mb-10 lg:items-start items-center">
            <div className="w-14 h-14 inline-flex items-center justify-center rounded-full bg-yellow-100 text-yellow-500 mb-5">
              <FaMicrophone className="w-9 h-9" />
            </div>
            <div className="flex-grow">
              <h2 className="text-gray-900 text-lg title-font font-medium mb-3">Learning Hub counselling</h2>
              <p className="leading-relaxed text-base">
                Our counselling services offer guidance and support for mental health, career development, and personal growth.
              </p>
              <Link href={'/counseling'} className="mt-3 text-red-500 inline-flex items-center  font-semibold">
                Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </Link>
            </div>
          </div>


          <div className="flex flex-col mb-10 lg:items-start items-center">
            <div className="w-14 h-14 inline-flex items-center justify-center rounded-full bg-yellow-100 text-yellow-500 mb-5">
              <FaWhatsapp className="w-9 h-9" />
            </div>
            <div className="flex-grow">
              <h2 className="text-gray-900 text-lg title-font font-medium mb-3">Get In Touch</h2>
              <p className="leading-relaxed text-base">
              Have questions about our classes or counseling services? Connect with us on WhatsApp! We&apos;re here to help you with personalized guidance, class details, and all the support you need to get started on your journey!
              </p>
              <Link href={'https://wa.me/919890420209'} className="mt-3 text-red-500 inline-flex items-center  font-semibold">
                Connect with us
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </Link>
            </div>
          </div>



        </div>
      </div>
    </section>
  );
}

export default Map;




