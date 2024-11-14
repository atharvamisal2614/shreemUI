import Image from 'next/image';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';

export default function FounderShrikant() {
  return (
    <div className="bg-gray-100 ">
      {/* Hero Section */}


      {/* Content Section */}
      <div className="max-w-5xl mx-auto p-6 sm:p-10 
      bg-white rounded-lg shadow-lg 
       relative"
      >
        <Image
          alt="founder"
          className="w-28 h-28 md:w-40 md:h-40 mb-4 rounded-full object-cover object-left mt-5"
          src="/images/founder-shreekant.jpg"
          width={400}
          height={400}
        />

        <h1 className="text-3xl font-bold text-gray-800 text-start mb-4">
          Dr. Shrikant Kulange
        </h1>
        <h2 className="text-lg md:text-xl font-semibold text-gray-600 text-start mb-8">
          Industrial and Counseling Psychologist | Industrial Trainer | Wellbeing Assessor
        </h2>

        {/* About Section */}
        <section className="mb-8">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">About</h3>
          <p className="text-gray-700 leading-relaxed">
            Dedicated and compassionate Industrial and Counseling Psychologist with extensive experience in enhancing organizational effectiveness, employee well-being, and personal development. Proven track record as an Industrial Trainer and Wellbeing Assessor, empowering individuals and teams to reach their full potential.
          </p>
        </section>

        {/* Expertise Section */}
        <section className="mb-8">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Expertise</h3>
          <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-1">
            <li>Industrial Psychology: Organizational development, performance management, and workplace dynamics</li>
            <li>Counseling Psychology: Mental health, emotional intelligence, and relationship building</li>
            <li>Industrial Training: Soft skills, leadership development, and team building</li>
            <li>Wellbeing Assessment: Mental health screenings, stress management, and wellness programs</li>
          </ul>
        </section>

        {/* Professional Experience Section */}
        <section className="mb-8">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Professional Experience</h3>
          <h4 className="text-md font-semibold text-gray-700">Industrial and Counseling Psychologist</h4>
          <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-1 mb-4">
            <li>Conduct organizational assessments and develop improvement strategies</li>
            <li>Provide counseling services for employees and management</li>
            <li>Design and deliver training programs for enhanced performance</li>
          </ul>
          <h4 className="text-md font-semibold text-gray-700">Industrial Trainer</h4>
          <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-1 mb-4">
            <li>Develop and facilitate workshops on leadership, communication, and team building</li>
            <li>Coach individuals and teams for improved productivity</li>
            <li>Evaluate training effectiveness and provide feedback</li>
          </ul>
          <h4 className="text-md font-semibold text-gray-700">Wellbeing Assessor</h4>
          <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-1">
            <li>Conduct mental health screenings and assessments</li>
            <li>Develop and implement wellness programs</li>
            <li>Provide stress management and coping strategies</li>
          </ul>
        </section>

        {/* Qualifications Section */}
        <section className="mb-8">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Qualifications</h3>
          <ul className="list-decimal list-inside text-gray-700 leading-relaxed space-y-1">
            <li>Master&apos;s in Industrial and Counseling Psychology</li>
            <li>PhD in Psychology</li>
            <li>Certified Industrial Trainer (TTT)</li>
            <li>Certified Wellbeing Assessor (CWA)</li>
          </ul>
        </section>

        {/* Certifications/Affiliations Section */}
        <section className="mb-8">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Certifications/Affiliations</h3>
          <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-1">
            <li>American Psychological Association (APA)</li>
            <li>Society for Industrial and Organizational Psychology (SIOP)</li>
            <li>International Society for Mental Health Online (ISMHO)</li>
          </ul>
        </section>

        {/* Philosophy Section */}
        <section className="mb-8">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Philosophy</h3>
          <blockquote className="italic text-gray-600 border-l-4 border-yellow-500 pl-4">
            &quot;Dr. Shrikant Kulange believes in the power of enhancing organizational health and employee well-being. His holistic approach helps organizations and individuals achieve balance, productivity, and fulfillment.&quot;
          </blockquote>
        </section>

        {/* Services Section */}
        <section className="mb-8">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Services</h3>
          <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-1">
            <li>Organizational development consulting</li>
            <li>Counseling and therapy services</li>
            <li>Industrial training and workshops</li>
            <li>Wellbeing assessments and program development</li>
            <li>Coaching and mentoring</li>
          </ul>
        </section>

        {/* Contact Section */}
        <section className="mb-8">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Contact</h3>
          <Link href="tel:9890420209">
            <p className="text-gray-900 font-bold">Phone: 9890420209</p>
          </Link>
          <Link href="mailto:kulange@gmail.com">
            <p className="text-gray-900 font-bold">Email: kulange@gmail.com</p>
          </Link>
        </section>

        {/* Testimonial Section */}
        <section className="mb-8">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Testimonial</h3>
          <p className="italic text-gray-600">
            &quot;Shrikant has been instrumental in enhancing our organization&apos;s performance and employee well-being. Their expertise in industrial psychology, counseling, and training has been invaluable.&quot; - Dr. Ambekar, Alkyl Amines
          </p>
        </section>
        <div className="flex justify-end items-center space-x-2 md:space-x-4">
          <Link href="/founderyashashri" className="flex font-bold items-center text-red-500 cursor-pointer hover:underline">

            <span>Read more about Yashashree Patil</span>
            <FaArrowRight className="ml-1 " />

          </Link>
        </div>
      </div>
    </div>
  );
}
