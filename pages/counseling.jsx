import Image from "next/image";
import React from "react";
import Link from "next/link";
function Counseling() {
  return (

    <>
     


      <section className="m-auto mb-20 md:mt-0 mt-10 flex min-h-[80vh] max-w-7xl flex-col items-center md:flex-row px-4 md:px-0">
  {/* Text Section */}
  
  <div className="md:w-1/2 md:pr-8">
  {/* <Image src={"/sk-logo-slogan.png"} width={200} height={100} alt="counselling logo" className="mb-8 items-center justify-center" /> */}
  <div className="flex md:justify-start justify-center mb-8">
  <Image
    src={"/sk-logo-slogan.png"}
    width={250}
    height={100}
    alt="counselling logo"
   
  />
</div>

    <h1 className="text-3xl md:text-4xl font-libreBaskerVille text-[#212121] leading-snug text-center md:text-left mb-4">
      Your Mental Health is more important than anything else
    </h1>
    <p className="leading-8 tracking-wider text-gray-500 text-lg font-bold text-center md:text-left">
      Shrikant Kulange&apos;s Psychological Counselling Hub
    </p>
    <p className="leading-7 tracking-wide text-gray-500 text-lg text-center md:text-left">
      Counselling . Education . Training
    </p>
    <p className="leading-7 tracking-wide text-gray-500 text-lg text-center md:text-left">
      Cheers to mental health
    </p>
    <p className="leading-7 tracking-wide text-gray-500 text-lg text-center md:text-left">
      One of the finest counselling services in town
    </p>
  </div>

  {/* Image Section */}
  <div className="p-5 md:w-1/2 w-full flex justify-center md:justify-end">
    <Image
      alt="Counselling"
      src="/images/sk19.jpg"
      width={600}
      height={600}
      className="rounded-lg object-cover w-full h-auto"
    />
  </div>
</section>



      <section className="m-auto my-20 flex max-w-7xl flex-col   md:flex-row">
        <div className="p-5 md:w-1/2">
          <Image
            alt=""
            className="rounded-lg"
            src={"/images/sk-founders.jpg"}
            width={600}
            height={600}
          />
        </div>
        <div className="p-5 md:w-1/2">
          <h1 className="text-4xl text-[#212121] font-libreBaskerVille">A Few Words About Us</h1>
          <br />
          <p className=" leading-8 tracking-wider font-libreBaskerVille text-gray-800 text-lg ">
            <strong>we are the best counselors over the Maharashtra</strong>
          </p>
          <br />
          <p className="leading-8 tracking-wider text-gray-500 text-lg">
            An experience of more than 14 years in delivering in counselling
            sector overseas as well as on a domestic level, the founder has
            developed a new method of imparting knowledge to young minds with a
            simple technique that has reaped success in the sector.
          </p>
          <br />
          <Link href={'/counseling/about'}>
            <button className="text-red-600 hover:bg-red-500 hover:text-white rounded-full p-2 transition duration-300 ease-in-out font-semibold text-lg">
              Read More
            </button>
          </Link>
        </div>
      </section>



      <section className="bg-primary px-10 py-10 bg-yellow-400">
        <div className="m-auto my-10 flex max-w-7xl flex-col items-center ">
          <h2 className="w-full text-center md:text-4xl text-3xl text-[#212121] font-libreBaskerVille">Why learning Hub Counselling?</h2>
          <br />
          <p className="text-center md:text-xl text-lg">
            Your mental health is more important than anything else
          </p>
          <div className="mt-10 flex flex-col justify-center md:flex-row">
            <div className="flex flex-col items-center p-2  md:w-1/3">
              <Image
                alt=""
                src={"/images/expert.png"}
                width={100}
                height={100}
              />

              <h4 className="py-3 font-bold">Certified Experts</h4>

              <p className="text-center ">
                We have certified experts who can guide you.
              </p>
            </div>
            <div className="flex flex-col items-center p-2  md:w-1/3">
              <Image
                alt=""
                src={"/images/heart.png"}
                width={100}
                height={100}
              />

              <h4 className="py-3 font-bold">Quality Services</h4>

              <p className="text-center">
                We are known for quality service in town.
              </p>
            </div>
            <div className="flex flex-col items-center p-2  md:w-1/3">
              <Image
                alt=""
                src={"/images/price.png"}
                width={100}
                height={100}
              />

              <h4 className="py-3 font-bold">Affordable Pricing</h4>

              <p className="text-center">
                We have very affordable pricing that all can get prompt and
                quality service.
              </p>
            </div>
          </div>
        </div>
      </section>


      <section className="text-center my-12 mt-24">
        <h2 className="md:text-4xl text-2xl font-bold mb-4 font-libreBaskerVille text-[#212121]">Our Mental Healthcare Offerings</h2>
        <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-8 tracking-normal">
          We are a mental health ecosystem that brings together multiple treatment options to create
          an experience that makes getting help easy and seamless. From assessment to treatment, we are
          with you every step of the way.
        </p>
      </section>


      <section className="w-full ">

        <div className="w-full">
          <div className="my-10 flex flex-col md:flex-row items-center justify-center max-w-6xl mx-auto bg-yellow-400 rounded-3xl">
            <div className="md:w-1/2">
              <Image alt="Counselling" src="/images/sk23.jpg" width={600} height={400} className="rounded-3xl" />
            </div>
            <div className="p-5 md:w-1/2">
              <h3 className="md:text-4xl text-2xl leading-snug font-libreBaskerVille font-bold pb-4">Counselling</h3>
              <p className="leading-8 tracking-wide font-libreBaskerVille text-gray-950 text-lg mb-4 text-justify">
                Our counsellors and psychologists work with individuals, children, adolescents, couples, and
                families to address a variety of mental health issues that may interfere with satisfying
                interpersonal relationships in the home and the workplace.
              </p>
              <Link href="/services/counselling">
                <button className="text-red-600 hover:bg-red-500 hover:text-white rounded-full p-2 transition duration-300 ease-in-out font-semibold text-lg">
                  Read More
                </button>
              </Link>
            </div>
          </div>
        </div>

        <div className="w-full">
          <div className="my-10 flex flex-col md:flex-row-reverse items-center justify-center max-w-6xl mx-auto bg-yellow-400 rounded-3xl">
            <div className="md:w-1/2">
              <Image alt="Counselling Supervision" src="/images/sk26.jpg" width={600} height={400} className="rounded-3xl" />
            </div>
            <div className="p-5 md:w-1/2">
              <h3 className="md:text-4xl text-2xl leading-snug font-libreBaskerVille font-bold pb-4">Counselling Supervision</h3>
              <p className="leading-8 tracking-wide font-libreBaskerVille text-gray-950 text-lg mb-4 text-justify">
                Counselors, psychotherapists, and psychologists are encouraged to have ongoing supervision as long
                as they are practicing in the field of mental health.
              </p>
              <Link href="/services/counselling-supervision">
                <button className="text-red-600 hover:bg-red-500 hover:text-white rounded-full p-2 transition duration-300 ease-in-out font-semibold text-lg">
                  Read More
                </button>
              </Link>
            </div>
          </div>
        </div>


        <div className="w-full ">
          <div className="my-10 flex flex-col md:flex-row items-center justify-center max-w-6xl mx-auto bg-yellow-400 rounded-3xl">
            <div className="md:w-1/2">
              <Image alt="School & Educational Institutions" src="/images/sk27.jpg" width={600} height={400} className="rounded-3xl" />
            </div>
            <div className="p-5 md:w-1/2">
              <h3 className="md:text-4xl text-2xl  leading-snug font-libreBaskerVille font-bold pb-4">School & Educational Institutions</h3>
              <p className="leading-8 tracking-wide text-lg font-libreBaskerVille text-gray-950  mb-4 text-justify">
                Our team collaborates closely with schools and educational institutions,
                offering comprehensive support to students,
                parents, faculty, and staff. We focus on fostering a positive
                learning environment by addressing mental health challenges,
                promoting emotional well-being, and providing counseling services.
                Through workshops, one-on-one guidance, and tailored programs.

              </p>
              <Link href="/services/school-education">
                <button className="text-red-600 hover:bg-red-500 hover:text-white rounded-full p-2 transition duration-300 ease-in-out font-semibold text-lg">
                  Read More
                </button>
              </Link>
            </div>
          </div>
        </div>


        <div className="w-full">
          <div className="my-10 flex flex-col md:flex-row-reverse items-center justify-center max-w-6xl mx-auto bg-yellow-400 rounded-3xl">
            <div className="md:w-1/2">
              <Image alt="Counselling Supervision" src="/images/sk10.jpg" width={600} height={400} className="rounded-3xl" />
            </div>
            <div className="p-5 md:w-1/2">
              <h3 className="md:text-4xl text-2xl leading-snug font-libreBaskerVille font-bold pb-4">Online / Virtual Counselling</h3>
              <p className="leading-8 tracking-wide font-libreBaskerVille text-gray-950 text-lg mb-4 text-justify">
                Online counselling, the digital-age version of counselling services is a more accessible, convenient and discrete method of receiving therapy. In order to attend online counselling sessions,
                clients and the therapist need access to fast internet connections and webcams.
              </p>
              <Link href="/services/counselling-supervision">
                <button className="text-red-600 hover:bg-red-500 hover:text-white rounded-full p-2 transition duration-300 ease-in-out font-semibold text-lg">
                  Read More
                </button>
              </Link>
            </div>
          </div>
        </div>


        <div className="w-full">
          <div className="my-10 flex flex-col md:flex-row items-center justify-center max-w-6xl mx-auto bg-yellow-400 rounded-3xl">
            <div className="md:w-1/2">
              <Image alt="Counselling" src="/images/sk12.jpg" width={600} height={400} className="rounded-3xl" />
            </div>
            <div className="p-5 md:w-1/2">
              <h3 className="md:text-4xl text-2xl leading-snug font-libreBaskerVille font-bold pb-4">Psychological Testing and Analysis</h3>
              <p className="leading-8 tracking-wide font-libreBaskerVille text-gray-950 text-lg mb-4 text-justify">
                We do various types of Psychometric testing for an individuals,
                families, school students, teachers, industrial workers and supervisors.
                Separate counselling is also provided to all sectors in educational and industrial field.
              </p>
              <Link href="/services/counselling">
                <button className="text-red-600 hover:bg-red-500 hover:text-white rounded-full p-2 transition duration-300 ease-in-out font-semibold text-lg">
                  Read More
                </button>
              </Link>
            </div>
          </div>
        </div>


        <div className="w-full">
          <div className="my-10 flex flex-col md:flex-row-reverse items-center justify-center max-w-6xl mx-auto bg-yellow-400 rounded-3xl">
            <div className="md:w-1/2">
              <Image alt="Counselling Supervision" src="/images/sk17.jpg" width={600} height={400} className="rounded-3xl" />
            </div>
            <div className="p-5 md:w-1/2">
              <h3 className="md:text-4xl text-2xl leading-snug font-libreBaskerVille font-bold pb-4">Workshops & Employee Assistance Program</h3>
              <p className="leading-8 tracking-wide font-libreBaskerVille text-gray-950 text-lg mb-4 text-justify">
                Come join us for one of our talks, workshops and be life long learners with us.
                Our team have been affiliated with multi-national corporations in Singapore and in the region.
              </p>
              <Link href="/services/counselling-supervision">
                <button className="text-red-600 hover:bg-red-500 hover:text-white rounded-full p-2 transition duration-300 ease-in-out font-semibold text-lg">
                  Read More
                </button>
              </Link>
            </div>
          </div>
        </div>

      </section>



    </>
  );
};
export default Counseling