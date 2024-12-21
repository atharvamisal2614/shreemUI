import Image from "next/image";
import React from "react";
import Link from "next/link";
import { FaBrain, FaUserFriends } from 'react-icons/fa';
import { BiPhoneCall } from 'react-icons/bi';

function shreemclasses() {
  return (
    <>
      <section className="m-auto mb-20 md:mt-0 mt-10 flex min-h-[80vh] max-w-7xl flex-col items-center md:flex-row px-4 md:px-0">
        <div className="md:w-1/2 md:pr-8">
          <div className="flex md:justify-start justify-center mb-8">
            <Image
              src={"/shreem-logo.png"}
              width={100}
              height={100}
              alt="counselling logo"

            />
          </div>

          <h1 className="text-2xl md:text-3xl font-libreBaskerVille text-[#212121] leading-snug text-center md:text-left mb-4">
            Shreem Classes<br /> <span className="font-light text-4xl">Nurturing Young Minds</span>
          </h1>
          <p className="leading-8 tracking-wider text-gray-500 text-lg font-bold text-center md:text-left">
            Elevate Your Child&apos;s Learning Journey
          </p>
          <p className="leading-7 tracking-wide text-gray-500 text-lg text-center md:text-justify mt-2">
            At Shreem Classes, we&apos;re committed to providing comprehensive academic support and holistic development for students of all ages. Our experienced faculty is dedicated to fostering a love of learning and empowering students to reach their full potential.

          </p>

        </div>

        {/* Image Section */}
        <div className="p-5 md:w-1/2 w-full flex justify-center md:justify-end">
          <Image
            alt="Counselling"
            src="/images/shreem-classroom-1.jpg"
            width={600}
            height={600}
            className="rounded-lg object-cover w-full h-auto"
          />
        </div>
      </section>

      <section className="bg-primary px-10 py-10 bg-yellow-400">
        <div className="m-auto my-10 flex max-w-7xl flex-col items-center ">
          <h2 className="w-full text-center md:text-4xl text-3xl text-[#212121] font-libreBaskerVille">Our Holistic Approach</h2>
          <br />

          <div className="mt-10 flex flex-col justify-center md:flex-row">
            <div className="flex flex-col items-center p-2  md:w-1/3">
              <FaBrain size={70} className="text-red-500" />
              <h4 className="py-3 font-bold">Psychometric Assessments and Counseling</h4>
              <p className="text-center ">
                We provide personalized guidance based on each student&apos;s unique learning style and needs.
              </p>
            </div>
            <div className="flex flex-col items-center p-2  md:w-1/3">
              <BiPhoneCall size={70} className="text-red-500" />
              <h4 className="py-3 font-bold">24/7 Life Coach and Psychologist Support</h4>
              <p className="text-center">
                We offer round-the-clock support to address student&apos;s emotional and mental well-being.
              </p>
            </div>
            <div className="flex flex-col items-center p-2  md:w-1/3">
              <FaUserFriends size={70} className="text-red-500" />
              <h4 className="py-3 font-bold">Parent Counseling</h4>
              <p className="text-center">
                We prioritize parental involvement and offer regular counseling sessions to support parents in their child&apos;s educational journey.
              </p>
            </div>
          </div>
        </div>
      </section>


      <section className="text-center my-12 mt-24">
        <h2 className="md:text-4xl text-2xl font-bold mb-4 font-libreBaskerVille text-[#212121]">Our Focus Areas</h2>
        <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-8 tracking-normal">
          Join the Shreem Classes Family and Witness the Transformation!
        </p>
      </section>


      <section className="w-full ">

        <div className="w-full">
          <div className="my-10 flex flex-col md:flex-row items-center justify-center max-w-6xl mx-auto bg-yellow-400 rounded-3xl">
            <div className="md:w-1/2">
              <Image alt="Counselling" src="/images/shreem-classroom-1.jpg" width={600} height={400} className="rounded-3xl" />
            </div>
            <div className="p-5 md:w-1/2">
              <h3 className="md:text-4xl text-2xl leading-snug font-libreBaskerVille font-bold pb-4">Primary School (1st-5th)</h3>
              <ul className="ml-5 list-decimal leading-8 tracking-wide font-libreBaskerVille text-gray-950 md:text-lg text-[16px] mb-4 text-justify">

                <li className="mt-4">Homework assistance</li>
                <li className="mt-4">Building a strong foundation in fundamental subjects</li>
                <li className="mt-4">Encouraging a positive attitude towards learning</li>

              </ul>

            </div>
          </div>
        </div>

        <div className="w-full">
          <div className="my-10 flex flex-col md:flex-row-reverse items-center justify-center max-w-6xl mx-auto bg-yellow-400 rounded-3xl">
            <div className="md:w-1/2">
              <Image alt="Counselling Supervision" src="/shreem.webp" width={600} height={400} className="rounded-3xl" />
            </div>
            <div className="p-5 md:w-1/2">
              <h3 className="md:text-4xl text-2xl leading-snug font-libreBaskerVille font-bold pb-4">High School (6th-10th)</h3>
              <ul className="ml-5 list-decimal leading-8 tracking-wide font-libreBaskerVille text-gray-950 md:text-lg text-[16px]  mb-4 text-justify">
                <li className="mt-4" >Specialized coaching in Science, English, and Mathematics</li>
                <li className="mt-4">Developing effective study habits and time management skills</li>
                <li className="mt-4">Enhancing critical thinking and problem-solving abilities</li>
              </ul>

            </div>
          </div>
        </div>


        <div className="w-full ">
          <div className="my-10 flex flex-col md:flex-row items-center justify-center max-w-6xl mx-auto bg-yellow-400 rounded-3xl">
            <div className="md:w-1/2">
              <Image alt="School & Educational Institutions" src="/images/shreem-1112th.jpg" width={600} height={400} className="rounded-3xl" />
            </div>
            <div className="p-5 md:w-1/2">
              <h3 className="md:text-4xl text-2xl  leading-snug font-libreBaskerVille font-bold pb-4">Grade 11-12th (Science)</h3>
              <ul className="ml-5 list-decimal leading-8 tracking-wide md:text-lg text-[16px]  font-libreBaskerVille text-gray-950  mb-4 text-justify">
                <li className="mt-4">Intensive coaching for PCMB subjects
                </li>
                <li className="mt-4">Comprehensive preparation for competitive exams like JEE and NEET
                </li>
                <li className="mt-4">Guidance on career counseling and college admissions
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default shreemclasses