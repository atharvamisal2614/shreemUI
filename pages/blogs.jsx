import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { FaArrowRight, FaShareAlt } from 'react-icons/fa';
import mongoose from 'mongoose';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Blog from '@/models/Blog';
import { BASE_URL } from '@/utils/config';

const Blogs = ({ blogs, allBlogs, totalPages, currentPage }) => {
    const router = useRouter();
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredBlogs, setFilteredBlogs] = useState(blogs);

    // Filter blogs based on search term
    useEffect(() => {
        if (searchTerm) {
            const results = allBlogs.filter(blog =>
                blog.title.toLowerCase().includes(searchTerm.toLowerCase())
            );
            setFilteredBlogs(results);
        } else {
            setFilteredBlogs(blogs); // Reset to current page blogs if no search term
        }
    }, [searchTerm, blogs, allBlogs]);

    const handleShare = (blog) => {
        const shareData = {
            title: blog.title,
            text: 'Check out this blog!',
            url: `${BASE_URL}/blogs/${blog.slug}`,
        };

        if (navigator.share) {
            navigator
                .share(shareData)
                .then(() => console.log('Shared successfully'))
                .catch((error) => console.log('Some error occurred', error));
        }
    };

    const handlePageChange = (pageNum) => {
        router.push(`/blogs?page=${pageNum}`);
    };

    return (
        <section className="py-1">
            <h3 className="text-3xl text-center font-bold mb-8 font-libreBaskerVille mt-5">Blogs</h3>

            {/* Search Bar */}
            <div className="container mx-auto px-4 mb-5 flex justify-center">
                <input
                    type="text"
                    placeholder="Search blogs..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full md:w-1/3 p-3 border border-red-500 rounded-md outline-none focus:ring-1 focus:ring-red-500"
                />
            </div>

            <div className="container mx-auto px-4 mt-5">
                {filteredBlogs.length > 0 ? (
                    <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10">
                        {filteredBlogs.map((blog, index) => (
                            <div key={index} className="bg-gray-100 shadow-lg rounded-md overflow-hidden">
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
                                <Link href={`/blogs/${blog.slug}`}>
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
                                        <Link href={`/blogs/${blog.slug}`}>
                                            <span className="inline-flex items-center text-yellow-500 hover:text-yellow-600 text-md mt-4">
                                                Read more <FaArrowRight size={20} className="ml-2" />
                                            </span>
                                        </Link>
                                        <button
                                            onClick={() => handleShare(blog)}
                                            className="inline-flex items-center text-yellow-500 hover:text-yellow-600 text-md mt-4"
                                        >
                                            <FaShareAlt className="mr-2" size={20} />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="flex justify-center items-center">
                        <Image
                            src={'/images/blog-not-found-og.png'}
                            alt="Blog Not Found"
                            width={500}
                            height={500}
                        />
                    </div>
                )}
                <div className="flex justify-center mt-8 space-x-4">
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
                        <button
                            key={pageNum}
                            onClick={() => handlePageChange(pageNum)}
                            className={`px-4 py-2 border rounded-md ${pageNum === currentPage
                                ? 'bg-red-500 text-white'
                                : 'bg-white text-red-500 hover:bg-red-100'
                                }`}
                        >
                            {pageNum}
                        </button>
                    ))}
                </div>
            </div>
        </section>
    );
};

export async function getServerSideProps({ query }) {
    if (!mongoose.connections[0].readyState) {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Connecting to MongoDB");
    }

    const page = parseInt(query.page) || 1;
    const blogsPerPage = 1;
    const skip = (page - 1) * blogsPerPage;

    // Fetch total blogs count for pagination
    const totalBlogs = await Blog.countDocuments();
    const totalPages = Math.ceil(totalBlogs / blogsPerPage);

    // Fetch blogs for the current page
    const paginatedBlogs = await Blog.find({})
        .sort({ createdAt: -1 })
        .skip(skip)
        .limit(blogsPerPage)
        .lean();

    // Fetch all blogs (minimal data) for search
    const allBlogs = await Blog.find({}, { title: 1, slug: 1, createdAt: 1, thumbnail: 1 }).lean();

    return {
        props: {
            blogs: JSON.parse(JSON.stringify(paginatedBlogs)),
            allBlogs: JSON.parse(JSON.stringify(allBlogs)),
            totalPages,
            currentPage: page,
        },
    };
}

export default Blogs;
