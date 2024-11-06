import React from 'react';
import Image from 'next/image';
import { FaArrowRight, FaShareAlt } from 'react-icons/fa';
import Blog from '@/models/Blog';
import { BASE_URL } from '@/utils/config';
import mongoose from 'mongoose';
import Link from 'next/link';

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
        <section className="py-1">
        <h3 className="text-3xl text-center font-bold mb-8 font-libreBaskerVille">Blogs</h3>

        <div className="container mx-auto px-4 mt-5">
            <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10">
                {blogs.map((blog, index) => (
                    <div key={index} className="bg-gray-50 shadow-lg rounded-md overflow-hidden">
                        
                        {/* Date */}
                        <div className="p-4">
                            <p className="text-md text-gray-600 font-semibold mb-2 font-libreBaskerVille">
                                {new Date(blog.createdAt).toLocaleDateString('en-US', {
                                    month: 'long',
                                    day: '2-digit',
                                    year: 'numeric'
                                })}
                            </p>
                            
                            {/* Title */}
                            <h2 className="text-2xl font-libreBaskerVille font-bold text-gray-900 mb-4">
                                {blog.title}
                            </h2>
                        </div>
    
                        {/* Image */}
                        <Link href={`${BASE_URL}/blogs/${blog.slug}`}>
                            <span> 
                                <div className="relative w-full h-52 sm:h-40 md:h-48 lg:h-72">
                                    <Image 
                                        src={blog.thumbnail || "/shreem-logo.png"}
                                        alt={blog.title}
                                        layout="fill"
                                        objectFit="cover"
                                        className="rounded-t-md"
                                        loading="lazy"   
                                    />
                                </div>
                            </span>
                        </Link>
    
                        <div className="p-4">
                            <div className="flex justify-between">
                                <Link href={`${BASE_URL}/blogs/${blog.slug}`}>
                                    <span className="inline-flex items-center text-yellow-500 hover:text-yellow-600 text-md mt-4">
                                        Read more <FaArrowRight size={20} className="ml-2" />
                                    </span>
                                </Link>
                                <button
                                    onClick={() => handleShare(blog)}
                                    className="inline-flex items-center text-yellow-500 hover:text-yellow-600 text-md"mt-4
                                >
                                    <FaShareAlt className="mr-2" size={20} />
                                  
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
    
    );
};

export async function getServerSideProps() {
    if (!mongoose.connections[0].readyState) {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("Connecting to mongoDB")
    }
    const blogs = await Blog.find({}).lean();
    return {
        props: {
            blogs: JSON.parse(JSON.stringify(blogs))
        }
    }
}

export default Blogs;

