import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { BASE_URL } from "@/utils/config";
import React from "react";
import mongoose from "mongoose";
import Blog from "@/models/Blog";
import { FaRegEdit } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function AllBlogs({ blogs }) {
    const [showMenu, setShowMenu] = useState(false);
    const router = useRouter();

    useEffect(() => {
        if (!localStorage.getItem("token")) {
            router.push(`${BASE_URL}/admin`);
        }
    }, [router]);

    const handleLogout = () => {
        localStorage.removeItem("token");
        router.push(`${BASE_URL}/admin`);
    };

    const handleDelete = async (id) => {
        const loadingToastId = toast.loading('Deleting Your Blog', {
            position: "top-left",
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: false,
            draggable: false,
            progress: undefined,
            theme: "light",
        });

        const res = await fetch(`${BASE_URL}/api/deleteblog`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ id }),
        });
        const response = await res.json()
        if (response.success) {
            toast.update(loadingToastId, {
                render: 'Blog Deleted Successfully !',
                type: 'success',
                autoClose: 3000,
                isLoading: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                hideProgressBar: false
            });
            router.reload();
        }

        if (!response.success) {
            toast.update(loadingToastId, {
                render: "Error Deleting Blogs",
                type: 'error',
                position: "top-left",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                hideProgressBar: false
            });
        }

    }
    return (
        <>

            <div className="flex flex-col">
                <ToastContainer
                    position="top-left"
                    autoClose={3000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="light"
                />
                <div className="flex flex-col items-center mt-6 text-red-500 relative">
                    <button
                        onClick={() => setShowMenu(!showMenu)}
                        className="focus:outline-none"
                    >
                        <FaUserCircle className="text-5xl cursor-pointer hover:text-red-500 transition duration-300" />
                    </button>
                    <div className="w-36 h-0.5 bg-gray-400 mt-10" />

                    {showMenu && (
                        <div className="mt-4 bg-white shadow-lg rounded-lg py-2 px-4 absolute top-16 transition-transform duration-300 ease-out transform">
                            <button
                                onClick={() => router.push(`${BASE_URL}/admin/allblogs`)}
                                className="w-full text-center text-gray-700 font-libreBaskerVille font-bold hover:text-yellow-500 py-2 transition duration-200"
                            >
                                All Blogs
                            </button>
                            <button
                                onClick={() => router.push(`${BASE_URL}/admin/blogform`)}
                                className="w-full text-center text-gray-700 font-libreBaskerVille font-bold hover:text-yellow-500 py-2 transition duration-200"
                            >
                                Add Blogs
                            </button>
                            <button
                                onClick={() => router.push(`${BASE_URL}/admin/changepassword`)}
                                className="w-full text-center text-gray-700 font-libreBaskerVille font-bold hover:text-yellow-500 py-2 transition duration-200"
                            >
                                Change Password
                            </button>
                            <button
                                onClick={handleLogout}
                                className="w-full text-center text-gray-700 font-libreBaskerVille font-bold hover:text-red-600 py-2 transition duration-200"
                            >
                                Logout
                            </button>
                        </div>
                    )}
                </div>
                <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                        <div className="overflow-hidden">
                            <table className="min-w-full text-left text-sm font-light">
                                <thead className="border-b font-medium dark:border-neutral-500 text-center">
                                    <tr>
                                        <th scope="col" className="px-6 py-4">No.</th>
                                        <th scope="col" className="px-6 py-4">Title</th>
                                        <th scope="col" className="px-6 py-4">Author</th>
                                        <th scope="col" className="px-6 py-4">Delete</th>
                                    </tr>
                                </thead>

                                {blogs.map((blog, key) => (
                                    <tbody key={key}>
                                        <tr className="text-center border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
                                            {/* <td className="whitespace-nowrap px-6 py-4 font-medium">{blog._id}</td> */}
                                            <td className="whitespace-nowrap px-6 py-4 font-medium">
                                                {key + 1}
                                            </td>


                                            <td className="whitespace-nowrap px-6 py-4 ">{blog.title}</td>
                                            <td className="whitespace-nowrap px-6 py-4 ml-2">Shrikant Kulange</td>

                                            <td className="whitespace-nowrap px-6 py-4 ml-32  text-red-600">
                                                <button onClick={() => { handleDelete(blog._id) }}>
                                                    <MdDelete size={25} />
                                                </button>

                                            </td>
                                        </tr>
                                    </tbody>
                                )
                                )}
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AllBlogs;

export async function getServerSideProps() {
    if (!mongoose.connections[0].readyState) {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("MongoDB connected by allblogs")
    }
    const blogs = await Blog.find({}).lean();

    return {
        props: { blogs: JSON.parse(JSON.stringify(blogs)) }
    }
}
