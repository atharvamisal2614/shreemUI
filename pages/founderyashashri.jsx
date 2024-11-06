import { FaArrowRight} from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';

export default function founderyashashri() {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
     

      {/* Content Section */}
      <div className="max-w-5xl mx-auto p-6 sm:p-10 bg-white rounded-lg shadow-lg -mt-20 relative">
   
      <Image
                  alt="founder"
                  className="w-28 h-28 md:w-40 md:h-40 mb-4 rounded-full object-cover object-left mt-20"
                  src="/images/shreem-founder-1.jpg"
                  width={400} height={400}
                />
   
      
        <h1 className="text-3xl font-bold text-gray-800 text-start mb-4">
          Dr. Yashashri Patil
        </h1>
        <h2 className="text-lg md:text-xl font-semibold text-gray-600 text-start mb-8">
          Holistic Wellness Expert & Spiritual Guide
        </h2>


        {/* About Section */}
        <section className="mb-8">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">About</h3>
          <p className="text-gray-700 leading-relaxed">
            Dr. Yashashri Patil is a multifaceted individual who blends spirituality, astrology, and wellness to empower individuals on their journey toward self-discovery and enlightenment. As a Life Coach, Yoga Instructor, and Astrologer, Dr. Yashashri offers a unique approach to personal growth and transformation.
          </p>
        </section>

        {/* Expertise Section */}
        <section className="mb-8">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Expertise</h3>
          <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-1">
            <li>Life Coaching: Guiding individuals to uncover their purpose, overcome obstacles, and achieve their goals.</li>
            <li>Yoga Instruction: Teaching various yoga styles for physical, mental, and emotional well-being.</li>
            <li>Astrology: Offering readings on celestial influences and personal charts.</li>
          </ul>
        </section>

        {/* Specializations Section */}
        <section className="mb-8">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Specializations</h3>
          <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-1">
            <li>Spiritual Growth and Development</li>
            <li>Mind-Body Connection</li>
            <li>Holistic Wellness</li>
            <li>Personalized Astrological Readings</li>
            <li>Yoga Therapy</li>
            <li>Life Purpose Coaching</li>
          </ul>
        </section>

        {/* Qualifications Section */}
        <section className="mb-8">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Qualifications</h3>
          <ul className="list-decimal list-inside text-gray-700 leading-relaxed space-y-1">
            <li>Certified Life Coach (CLC)</li>
            <li>PhD in Yoga and Astrology</li>
            <li>Registered Yoga Teacher (RYT)</li>
            <li>Advanced Astrology Certification</li>
          </ul>
        </section>

        {/* Philosophy Section */}
        <section className="mb-8">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Philosophy</h3>
          <blockquote className="italic text-gray-600 border-l-4 border-yellow-500 pl-4">
            &quot;Dr. Yashashri Patil believes that every individual possesses the innate potential for growth, transformation, and self-actualization. Through a holistic approach, Dr. Yashashri empowers clients to harmonize their body, mind, and spirit, unlocking their true potential and living a purpose-driven life.&quot;
          </blockquote>
        </section>

        {/* Services Section */}
        <section className="mb-8">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Services</h3>
          <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-1">
            <li>Private Coaching Sessions</li>
            <li>Yoga Classes and Workshops</li>
            <li>Astrological Readings and Consultations</li>
            <li>Group Retreats and Seminars</li>
            <li>Online Courses and Webinars</li>
          </ul>
        </section>

        {/* Contact Section */}
        <section className="mb-8">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Contact</h3>
          <Link href="tel:9028835835">
          <p className="text-gray-900 font-bold">Phone: 9028835835</p>
          </Link>
        </section>

        {/* Testimonial Section */}
        <section className="mb-8">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Testimonial</h3>
          <p className="italic text-gray-600">&quot;Dr. Yashashri Patil has been instrumental in my personal growth journey. Their unique blend of coaching, yoga, and astrology has helped me find clarity, confidence, and inner peace.&quot; - Abhijit Chandorkar</p>
        </section>

        <div className="flex justify-end items-center space-x-2 md:space-x-4">
      <Link href="/foundershrikant" className="flex font-bold items-center text-red-500 cursor-pointer hover:underline">
 
          <span>Read more about Shrikant Kulange</span>
          <FaArrowRight className="ml-1 " />

      </Link>
    </div>


      </div>
    </div>
  );
}
