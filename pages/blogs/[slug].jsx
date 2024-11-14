import mongoose from "mongoose";
import Blog from "@/models/Blog";
import { useEffect, useState } from "react";
import { IoShareOutline } from "react-icons/io5";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

function BlogSlugs({ blog }) {
    const [formattedDate, setFormattedDate] = useState("");

    useEffect(() => {
        if (blog.createdAt) {
            const date = new Date(blog.createdAt);
            const options = { year: "numeric", month: "long", day: "numeric" };
            setFormattedDate(date.toLocaleDateString(undefined, options));
        }

        // Disable copy, paste, and cut using keyboard shortcuts
        const handleKeyDown = (e) => {
            if ((e.ctrlKey || e.metaKey) && (e.key === "c" || e.key === "x" || e.key === "v" || e.key === "a")) {
                e.preventDefault();
            }
        };
        document.addEventListener("keydown", handleKeyDown);

        return () => {
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, [blog.createdAt]);

    if (!blog) {
        return <p>Blog Not Found</p>;
    }

    const handleShare = () => {
        if (navigator.share) {
            navigator.share({
                title: blog.title,
                text: `Check out this blog: ${blog.title}`,
                url: window.location.href,
            }).catch(console.error);
        } else {
            alert("Share feature is not supported in this browser.");
        }
    };

    return (
        <div
            className="max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-white shadow-lg rounded-lg mt-6 overflow-hidden no-select"
            onContextMenu={(e) => e.preventDefault()} // Prevent right-click menu


        >
            {/* Heading and Share Icon */}
            <div className="flex justify-between items-center">
                <h1 className="text-3xl font-bold text-gray-800 font-libreBaskerVille break-words">{blog.title}</h1>
                <button onClick={handleShare} className="text-red-400">
                    <IoShareOutline className="text-2xl mb-2" />
                </button>
            </div>

            {/* Author and Date */}
            <p className="text-gray-700 font-semibold mt-4 font-libreBaskerVille">
                Written by Mr. Shrikant Kulange on {formattedDate}
            </p>

            {/* Blog Content */}
            <div className="mt-8 text-justify text-lg  text-gray-800 break-words whitespace-normal no-select font-palanQuin">
                <p className="mb-4">{blog.paragraph1}</p>

                <ul className="list-disc list-inside mb-8 space-y-2">
                    {blog.bulletpoint1 && <li>{blog.bulletpoint1}</li>}
                    {blog.bulletpoint2 && <li>{blog.bulletpoint2}</li>}
                    {blog.bulletpoint3 && <li>{blog.bulletpoint3}</li>}
                </ul>

                <p className="mb-4">{blog.paragraph2}</p>

                <ul className="list-disc list-inside mb-8 space-y-2">
                    {blog.bulletpoint4 && <li>{blog.bulletpoint4}</li>}
                    {blog.bulletpoint5 && <li>{blog.bulletpoint5}</li>}
                    {blog.bulletpoint6 && <li>{blog.bulletpoint6}</li>}
                </ul>

                <p className="mb-4">{blog.paragraph3}</p>

                <ul className="list-disc list-inside mb-8 space-y-2">
                    {blog.bulletpoint7 && <li>{blog.bulletpoint7}</li>}
                    {blog.bulletpoint8 && <li>{blog.bulletpoint8}</li>}
                    {blog.bulletpoint9 && <li>{blog.bulletpoint9}</li>}
                </ul>

                {/* Hyperlink */}
                {blog.hyperlink && (
                    <div className="mt-8">
                        <p>
                            <span>Click here to know more: </span>
                            <Link href={blog.hyperlink || "/"} className="text-blue-500 hover:underline break-words">
                                {blog.hyperlink}
                            </Link>
                        </p>
                    </div>
                )}

                {/* Conclusion */}
                <p className="mt-8 mb-8 font-semibold">{blog.conclusion}</p>
            </div>

            <div className="flex justify-end items-center space-x-2 md:space-x-4">
                <Link href="/blogs" className="flex font-bold items-center text-red-500 cursor-pointer hover:underline">
                    <span>Explore All Blogs</span>
                    <FaArrowRight className="ml-1" />
                </Link>
            </div>

            {/* Inline CSS to prevent text selection */}
            <style jsx>{`
                .no-select {
                    user-select: none;
                }
            `}</style>
        </div>
    );
}

export default BlogSlugs;

export async function getServerSideProps({ params }) {
    if (!mongoose.connections[0].readyState) {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("MongoDB connected From Slug");
    }
    let blog = await Blog.findOne({ slug: params.slug }).lean();
    return {
        props: { blog: JSON.parse(JSON.stringify(blog)) },
    };
}
