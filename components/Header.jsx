import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="container mx-auto p-5">
      <div className="grid grid-cols-2 gap-4 md:grid-cols-2 md:gap-6">

        <div className="relative group">
 
          <h2 className="absolute font-serif top-4 left-1/2 transform -translate-x-1/2 text-white text-lg md:text-2xl  font-bold">
           Counselling Office
          </h2>
          <Link href="/counseling">
            <Image
              src="/counseling-1.jpg" 
              alt="Portrait Image 1"
              width={5000}
              height={350}
              className="object-cover w-full h-full"
            />
          
            <div className="absolute inset-0 flex flex-col justify-end p-4 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-opacity duration-300">
              <button className="bg-red-800 group-hover:bg-red-500 text-white font-bold py-2 px-6 rounded-full transition-all mb-4 mx-auto">
                Discover More
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-6 h-6 inline-block ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </button>
            </div>
          </Link>
        </div>

     
        <div className="relative group">
        
          <h2 className="absolute font-serif top-4 left-1/2 transform -translate-x-1/2 text-white text-lg md:text-2xl font-bold">
          Shreem Classroom
          </h2>
          <Link href="/shreemclasses">
            <Image
              src="/shreem.webp" 
              alt="Portrait Image 2"
              width={5000}
              height={350}
              className="object-cover w-full h-full"
            />
            
            <div className="absolute inset-0 flex flex-col justify-end p-4 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-opacity duration-300">
              <button className="bg-red-800 group-hover:bg-red-500 text-white font-bold py-2 px-6 rounded-full transition-all mb-4 mx-auto">
                Discover More
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-6 h-6 inline-block ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </button>
            </div>
          </Link>
        </div>
      </div>

{/*   
      <div className="mt-4 relative group">
      
     
        <h2 className="absolute font-serif top-4 left-1/2 transform -translate-x-1/2 text-white text-lg md:text-2xl font-bold">
        RIA Yoga Studio
        </h2>
        <Link href="/riayoga">
          <Image
            src="/riyayoga.webp" 
            alt="Landscape Image"
            width={5000}
            height={350}
            className="object-cover w-full h-auto"
          />
          
          <div 
          
           className="absolute inset-0 flex flex-col justify-end p-4 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-opacity duration-300"> 
            <button className="bg-red-800 group-hover:bg-red-500 text-white font-bold py-2 px-6 rounded-full transition-all mb-4 mx-auto">
              Discover More
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-6 h-6 inline-block ml-2"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </button>
          </div>
        </Link>
      </div> */}

    
      <style jsx>{`
        @media (max-width: 768px) {
          .grid-cols-2 {
            grid-template-columns: repeat(1, minmax(0, 1fr));
          }
         
        }
      `}</style>
    </header>
  );
}
