import Link from "next/link";
function Founder() {
  return (
    <section className="text-gray-600 body-font bg-yellow-400">
      <div className="container px-5 py-20 mx-auto">
        {/* Section Heading */}
        <div className="flex flex-col text-center w-full mb-12">
          <h1 className="text-5xl  font-medium title-font mb-4 text-red-500 font-libreBaskerVille">Founders</h1>
        </div>

        {/* Founders Cards */}
        <div className="flex flex-wrap -m-4 justify-center">
          {/* Founder 1 */}
          <div className="p-4 lg:w-1/2 md:w-1/2 sm:w-full">
            <div className="h-full flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300">
              <img
                alt="founder"
                className="w-40 h-40 mb-4 rounded-full object-cover object-center"
                src="/images/shreem-founder-1.jpg"
              />
              <h2 className="title-font font-medium text-xl text-gray-900 mb-4">Dr. Yashashri Patil</h2>
              <h3 className="title-font font-medium italic text-lg text-gray-500 mb-4">Holistic Wellness Expert & Spiritual Guide</h3>
              <p className="mb-4 text-gray-700 text-justify">
                Dr. Yashashri Patil is a multifaceted individual who seamlessly
                blends the realms of spirituality, astrology, and wellness to
                empower individuals on their journey towards self-discovery
                and enlightenment. As a Life Coach, Yoga Instructor,
                and renowned Astrologer, Dr. Yashashri offers a unique
                and comprehensive approach to personal growth and transformation.
              </p>
              <p className="text-gray-500 font-semibold mb-4">Founder & CEO</p>
              <Link href={'/founderyashashri'}>
                <button
                  // className="text-red-500 mx-auto"
                  className=" bg-red-500 text-white rounded-full px-4 py-2 transition duration-300 ease-in-out  font-semibold"
                >
                  Read More</button>

              </Link>
            </div>
          </div>

          {/* Founder 2 */}
          <div className="p-4 lg:w-1/2 md:w-1/2 sm:w-full">
            <div className="h-full flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300">
              <img
                alt="founder"
                className="w-40 h-40 mb-4 rounded-full object-cover object-center"
                src="/images/founder-shreekant.jpg"
              />
              <h2 className="title-font font-medium text-xl text-gray-900 mb-4">Dr. Shrikant kulange </h2>
              <h3 className="title-font font-medium italic text-lg text-gray-500 mb-4">Industrial and Counseling Psychologist | Industrial Trainer | Wellbeing Assessor</h3>
              <p className="mb-4 text-gray-700 text-justify">
                Dedicated and compassionate Industrial and Counseling
                Psychologist with extensive experience in enhancing
                organizational effectiveness, employee well-being,
                and personal development. Proven track record as an
                Industrial Trainer and Wellbeing Assessor, empowering
                individuals and teams to reach their full potential.
              </p>
              <p className="text-gray-500 font-semibold mb-4">Co-Founder & COO</p>
              <Link href={'/foundershrikant'}>
                <button
                  // className="text-red-500 mx-auto"
                  className=" bg-red-500 text-white rounded-full px-4 py-2 transition duration-300 ease-in-out  font-semibold"
                >
                  Read More</button>

              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Founder;
