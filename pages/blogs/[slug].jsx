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
        <div className="max-w-3xl mx-auto p-12 sm:p-8 bg-white shadow-lg rounded-lg mt-6">
            {/* Heading and Share Icon */}
            <div className="flex justify-between items-center">
                <h1 className=" text-3xl font-bold text-gray-800 font-libreBaskerVille">{blog.title}</h1>
                <button onClick={handleShare} className="text-gray-500 hover:text-red-400">
                    <IoShareOutline className="text-2xl mb-2" />
                </button>
            </div>

            {/* Author and Date */}
            <p className="text-gray-700 font-semibold mt-4 font-libreBaskerVille">
                Written by Mr. Shrikant Kulange on {formattedDate}
            </p>

            {/* Blog Content */}
            <div className="mt-8 text-justify text-lg font-sans text-gray-800">
                <p className="mb-8">{blog.paragraph1}</p>
                <p className="mb-8">{blog.paragraph2}</p>
                <p className="mb-8">{blog.paragraph3}</p>
                
                {/* Hyperlink */}
                <div className="mt-8">
                    <p>
                     <span>Click here to know more : </span> <Link href={blog.hyperlink || "/"} className="text-blue-500 hover:underline" passHref>
                {blog.hyperlink}
                        </Link>
                    </p>
                </div>

                {/* Bullet Points */}
                <ul className="list-disc list-inside mt-8 space-y-2">
                    <li>{blog.bulletpoint1}</li>
                    <li>{blog.bulletpoint2}</li>
                    <li>{blog.bulletpoint3}</li>
                </ul>

                {/* Conclusion */}
                <p className="mt-8  mb-8 font-semibold">{blog.conclusion}</p>
            </div>

            <div className="flex justify-end items-center space-x-2 md:space-x-4">
      <Link href="/blogs" className="flex font-bold items-center text-red-500 cursor-pointer hover:underline">
 
          <span>Explore All Blogs</span>
          <FaArrowRight className="ml-1 " />

      </Link>
    </div>

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
