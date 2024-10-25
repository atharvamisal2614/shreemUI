import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { FaUserCircle } from "react-icons/fa";
import { BASE_URL } from "@/utils/config";

export default function BlogForm() {
  const router = useRouter();
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      router.push(`${BASE_URL}/admin`);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    router.push(`${BASE_URL}/admin`);
  };

  return (
    <div className="relative">
      {/* User Icon with Dropdown */}
      <div className="absolute top-4 right-4 text-gray-700">
        <button
          onClick={() => setShowMenu(!showMenu)}
          className="focus:outline-none"
        >
          <FaUserCircle className="text-4xl cursor-pointer hover:text-blue-600 transition duration-300" />
        </button>

        {showMenu && (
          <div className="mt-2 bg-white shadow-lg rounded-lg py-2 px-4 absolute right-0 w-40 transition-transform duration-300 ease-out transform">
            <button
              onClick={() => router.push(`${BASE_URL}/admin/allblogs`)}
              className="w-full text-left text-gray-700 hover:text-blue-600 py-2 transition duration-200"
            >
              All Blogs
            </button>
            <button
              onClick={handleLogout}
              className="w-full text-left text-gray-700 hover:text-red-600 py-2 transition duration-200"
            >
              Logout
            </button>
          </div>
        )}
      </div>

      {/* Form Container */}
      <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-lg mt-10">
        <header className="text-center mb-6">
          <h1 className="md:text-4xl text-2xl font-libreBaskerVille font-semibold text-gray-800">
            Welcome, Admin! 🤝
          </h1>
          <p className="text-gray-600 mt-2">
            Ready to share your thoughts? Use this form to create an inspiring blog post for your audience. Happy blogging!
          </p>
        </header>

        <form className="space-y-6">
          <div>
            <label className="block text-gray-700 font-bold mb-2" htmlFor="title">
              Title:
            </label>
            <input
              type="text"
              id="title"
              name="title"
              placeholder="Eg. How to learn JavaScript"
              className="w-full px-4 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-bold mb-2" htmlFor="slug">
              Slug:
            </label>
            <input
              type="text"
              id="slug"
              name="slug"
              placeholder="Eg. How-to-learn-JavaScript"
              className="w-full px-4 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-yellow-400"
              readOnly
            />
          </div>

          <div>
            <label className="block text-gray-700 font-bold mb-2" htmlFor="thumbnail">
              Add Thumbnail:
            </label>
            <input
              type="file"
              id="thumbnail"
              name="thumbnail"
              accept="image/*"
              className="w-full px-4 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-bold mb-2" htmlFor="content">
              Blog Content:
            </label>
            <textarea
              id="content"
              name="content"
              rows="8"
              placeholder="Write your blog content here..."
              className="w-full px-4 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-yellow-400 resize-none"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-red-600 text-white font-semibold py-3 rounded-lg hover:bg-red-700 focus:ring-4 focus:ring-red-400 transition duration-300"
          >
            Post a Blog
          </button>
        </form>
      </div>
    </div>
  );
}
