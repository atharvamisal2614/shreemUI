function Founder() {
    return (
      <section className="text-gray-600 body-font bg-yellow-400">
        <div className="container px-5 py-20 mx-auto">
          {/* Section Heading */}
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="text-5xl font-sans font-medium title-font mb-4 text-red-500">Founders</h1>
          </div>
  
          {/* Founders Cards */}
          <div className="flex flex-wrap -m-4 justify-center">
            {/* Founder 1 */}
            <div className="p-4 lg:w-1/2 md:w-1/2 sm:w-full">
              <div className="h-full flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300">
                <img
                  alt="founder"
                  className="w-40 h-40 mb-4 rounded-full object-cover object-center"
                  src="https://dummyimage.com/200x200"
                />
                <h2 className="title-font font-medium text-xl text-gray-900">Name</h2>
                <p className="mb-4 text-gray-700">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi corporis molestias harum? Exercitationem obcaecati, eos minima ipsam illum, ad vel aspernatur modi cupiditate facilis rem at corrupti veniam reiciendis aliquam?
                </p>
                <p className="text-gray-500 font-semibold">Founder & CEO</p>
              </div>
            </div>
  
            {/* Founder 2 */}
            <div className="p-4 lg:w-1/2 md:w-1/2 sm:w-full">
              <div className="h-full flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300">
                <img
                  alt="founder"
                  className="w-40 h-40 mb-4 rounded-full object-cover object-center"
                  src="https://dummyimage.com/200x200"
                />
                <h2 className="title-font font-medium text-xl text-gray-900">Name</h2>
                <p className="mb-4 text-gray-700">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur maiores optio consectetur repellendus voluptate rem sit necessitatibus? Rerum libero aspernatur, culpa reiciendis cupiditate fugiat iure aliquam ut, eum non ipsa?
                </p>
                <p className="text-gray-500 font-semibold">Co-Founder & COO</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
  
  export default Founder;
  