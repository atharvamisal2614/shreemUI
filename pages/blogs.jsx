// import React from 'react';
// import Image from 'next/image';
// import { FaArrowRight, FaShareAlt } from 'react-icons/fa';
// import { BASE_URL } from '@/utils/config';

// const Blogs = () => {
//     const blogs = [
//         {
//             date: 'October 24, 2024',
//             title: 'The Journey of a Developer',
//             image: '/blog-image-1.webp',
//             url: `${BASE_URL}/blog/10-tips-to-improve-web-performance`,
//         },
//         {
//             date: 'October 22, 2024',
//             title: 'Understanding JavaScript Closures',
//             image: '/blog-image-1.webp',
//             url: `${BASE_URL}/blog/10-tips-to-improve-web-performance`,
//         },
//         {
//             date: 'October 20, 2024',
//             title: 'Next.js vs. React',
//             image: '/blog-image-1.webp',
//             url: `${BASE_URL}/blog/10-tips-to-improve-web-performance`,
//         },
//         {
//             date: 'October 18, 2024',
//             title: 'How to Improve Web Performance',
//             image: '/blog-image-1.webp',
//             url: `${BASE_URL}/blog/10-tips-to-improve-web-performance`,
//         },

//         {
//             date: 'October 18, 2024',
//             title: 'How to Improve Web Performance',
//             image: '/blog-image-1.webp',
//             url: `${BASE_URL}/blog/10-tips-to-improve-web-performance`,
//         },

//         {
//             date: 'October 18, 2024',
//             title: 'How to Improve Web Performance',
//             image: '/blog-image-1.webp',
//             url: `${BASE_URL}/blog/10-tips-to-improve-web-performance`,
//         },

//         {
//             date: 'October 18, 2024',
//             title: 'How to Improve Web Performance',
//             image: '/blog-image-1.webp',
//             url: `${BASE_URL}/blog/10-tips-to-improve-web-performance`,
//         },

//         {
//             date: 'October 18, 2024',
//             title: 'How to Improve Web Performance',
//             image: '/blog-image-1.webp',
//             url: `${BASE_URL}/blog/10-tips-to-improve-web-performance`,
//         },
//     ];

//     const handleShare = (blog) => {
//         const shareData = {
//             title: blog.title,
//             text: 'Check out this blog!',
//             url: blog.url,
//         };

//         if (navigator.share) {
//             navigator
//                 .share(shareData)
//                 .then(() => console.log('Blog shared successfully!'))
//                 .catch((error) => console.error('Error sharing:', error));
//         } else {
//             alert('Sharing options: WhatsApp, Facebook, Twitter, or Email!');
//         }
//     };

//     return (
//         <div className="container mx-auto px-4 py-8 bg-white">
//             <h1 className="text-3xl font-bold text-center mb-12">Blogs</h1>
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//                 {blogs.map((blog, index) => (
//                     <div key={index} className="bg-white rounded-lg overflow-hidden w-full">
//                         {/* Date */}
//                         <div className=" ml-4 text-start">
//                             <p className="text-md ">{blog.date}</p>
//                         </div>

//                         {/* Blog Title */}
//                         <div className="p-4">
//                             <h2 className="text-2xl font-libreBaskerVille font-bold text-gray-900 mb-4">{blog.title}</h2>

//                             {/* Image */}
//                             <div className="w-full h-72 relative"> {/* Wrapping the image */}
//                                 <Image
//                                     src={blog.image}
//                                     alt={blog.title}
//                                     layout="fill" // This makes the image fill the container
//                                     objectFit="cover" // Ensure the image covers the entire space
//                                     className="rounded-lg"
//                                 />
//                             </div>

//                             {/* Read More and Share Button */}
//                             <div className="mt-4 flex justify-between">
//                                 <a href={blog.url} className="inline-flex text-lg items-center text-yellow-500 hover:text-yellow-600">
//                                     Read more <FaArrowRight className="ml-2" />
//                                 </a>

//                                 <button
//                                     onClick={() => handleShare(blog)}
//                                     className="inline-flex text-lg items-center text-yellow-500 hover:text-yellow-600"
//                                 >
//                                     <FaShareAlt className="mr-2" />
//                                     Share
//                                 </button>
//                             </div>



//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default Blogs;









import React from 'react';
import Image from 'next/image';
import { FaArrowRight, FaShareAlt } from 'react-icons/fa';
import dbConnect from '@/middleware/mongoose';
import Blog from '@/models/Blog';
import { BASE_URL } from '@/utils/config';
import mongoose from 'mongoose';

const Blogs = ({ blogs }) => {


    const handleShare = (blog) => {
        const shareData = {
            title: blog.title,
            text: 'Check out this blog!',
            url: `${BASE_URL}/blog/${blog.slug}`,
        };

        if (navigator.share) {
            navigator
                .share(shareData)
                .then(() => console.log('Blog shared successfully!'))
                .catch((error) => console.error('Error sharing:', error));
        } 
    };
    return (
        <div className="container mx-auto px-4 py-8 bg-white">
            <h1 className="text-3xl font-bold text-center mb-12">Blogs</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogs.map((blog, index) => (
                    <div key={index} className="bg-white rounded-lg overflow-hidden w-full">
                        {/* Date */}
                        <div className=" ml-4 text-start">
                            <p className="text-md ">
                                {/* {new Date(blog.createdAt).toLocaleDateString('en-GB', { day: '2-digit', month: '2-digit', year: 'numeric' })} */}
                                {new Date(blog.createdAt).toLocaleDateString('en-US', {
                                    month: 'long',
                                    day: '2-digit',
                                    year: 'numeric'
                                }).replace(' ', '-')}
                            </p>
                        </div>

                        {/* Blog Title */}
                        <div className="p-4">
                            <h2 className="text-2xl font-libreBaskerVille font-bold text-gray-900 mb-4">{blog.title}</h2>

                            {/* Image */}
                            <div className="w-full h-72 relative"> 
                                <Image
                                    src={blog.thumbnail}
                                    alt="image"
                                    layout="fill" // This makes the image fill the container
                                    objectFit="cover" // Ensure the image covers the entire space
                                    className="rounded-lg"
                                    loading='lazy'
                                />
                            </div>

                            {/* Read More and Share Button */}
                            <div className="mt-4 flex justify-between">
                                <a href={`${BASE_URL}/blog/${blog.slug}`} className="inline-flex text-lg items-center text-yellow-500 hover:text-yellow-600">
                                    Read more <FaArrowRight className="ml-2" />
                                </a>

                                <button
                                    onClick={() => handleShare(blog)}
                                    className="inline-flex text-lg items-center text-yellow-500 hover:text-yellow-600"
                                >
                                    <FaShareAlt className="mr-2" />
                                    Share
                                </button>
                            </div>



                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export async function getServerSideProps(context) {
    if(!mongoose.connections[0].readyState){
        console.log("Connecting to mongoDB by blog.jsx")
    }
    if(mongoose.connections[0].readyState){
        console.log("MongoDB Connected successfully by blogs.jsx")
    }

    // await dbConnect()
    const blogs = await Blog.find({}).lean().maxTimeMS(60000);
    return {
        props: {
            blogs: JSON.parse(JSON.stringify(blogs))
        }
    }
}

export default Blogs;
