import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { FaUserCircle } from "react-icons/fa";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function BlogForm() {
  const router = useRouter();
  const [title,setTitle] = useState('');
  const [slug, setSlug] = useState('');
  const [thumbnail, setThumbnail] = useState('');
  const [paragraph1, setParagraph1] = useState('');
  const [paragraph2, setParagraph2] = useState('');
  const [paragraph3, setParagraph3] = useState('');
  const [hyperlink, setHyperlink] = useState("");
  const [bulletpoint1, setBulletPoint1] = useState("");
  const [bulletpoint2, setBulletPoint2] = useState("");
  const [bulletpoint3, setBulletPoint3] = useState("");
  const [conclusion, setConclusion] = useState("")
  const [showMenu, setShowMenu] = useState(false);


  const [fileSizeError, setFileSizeError] = useState(false);



  useEffect(() => {
    if (!localStorage.getItem("token")) {
      router.push('/admin');
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    router.push('/admin');
  };
   const handleTitle = (e) =>{
    setTitle(e.target.value)
   }
   const handleSlug = (e) =>{
    setSlug(e.target.value)
   }
   const handleThumbnail = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) { // 5 MB limit
        setFileSizeError(true);
        setThumbnail('');
      } else {
        setFileSizeError(false);
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
          setThumbnail(reader.result); // Base64 string of the image
        };
      }
    }
  };
  
 
   const handleparagraph1 = (e) =>{
    setParagraph1(e.target.value)
   }
   const handleparagraph2 = (e) =>{
    setParagraph2(e.target.value)
   }
   const handleparagraph3 = (e) =>{
    setParagraph3(e.target.value)
   }
   const handleHyperlink = (e) =>{
    setHyperlink(e.target.value)
   }
   const handleBulletPoint1 = (e) =>{
    setBulletPoint1(e.target.value)
   }
   const handleBulletPoint2 = (e) =>{
    setBulletPoint2(e.target.value)
   }
   const handleBulletPoint3 = (e) =>{
    setBulletPoint3(e.target.value)
   }
   const handleConclusion = (e) =>{
    setConclusion(e.target.value)
   }
   const handleSubmit = async (e) => {
    e.preventDefault();


    const loadingToastId = toast.loading('Uploading your Blog...', {
        position: "top-left",
        hideProgressBar: true,
        closeOnClick: false,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        theme: "light",
    });

    if (fileSizeError) {
      toast.update(loadingToastId, {
        render: 'Please select image less than 5 MB...',
        type: 'error',
        isLoading: false, 
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    });
    }

    try {
        const res = await fetch('/api/blogpost', {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ 
              title, 
              slug, 
              thumbnail, 
              paragraph1, 
              paragraph2, 
              paragraph3, 
              hyperlink, 
              bulletpoint1,
              bulletpoint2,
              bulletpoint3,
              conclusion  }),
        });

        const response = await res.json();

        if (response.success) {
    
            toast.update(loadingToastId, {
                render: 'Blog Created Successfully!',
                type: 'success',
                isLoading: false, 
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });

            setTimeout(() => {
                router.push('/admin/allblogs');
            }, 1000);
        } else {
  
            toast.update(loadingToastId, {
                render: 'Please check Image size is < 5 MB',
                type: 'error',
                isLoading: false, 
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }
    } catch (error) {
      
        toast.update(loadingToastId, {
            render: 'An error occurred. Please try again.',
            type: 'error',
            isLoading: false, 
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    }
};

  return (
    <div className="relative">
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
      {/* Centered User Icon with Dropdown */}
      <div className="flex flex-col items-center mt-6 text-red-500">
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
              onClick={() => router.push('/admin/allblogs')}
              className="w-full text-center text-gray-700 font-libreBaskerVille font-bold hover:text-yellow-500 py-2 transition duration-200"
            >
              All Blogs
            </button>
            <button
              onClick={() => router.push('/admin/blogform')}
              className="w-full text-center text-gray-700 font-libreBaskerVille font-bold hover:text-yellow-500 py-2 transition duration-200"
            >
              Add Blogs
            </button>
            <button
              onClick={() => router.push('/admin/changepassword')}
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

      {/* Form Container */}
      <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-lg mt-6">
        <header className="text-center mb-6">
          <h1 className="md:text-4xl text-2xl font-libreBaskerVille font-semibold text-gray-800">
            Welcome, Admin! 🤝📝
          </h1>
          <p className="text-gray-600 mt-2">
            Ready to share your thoughts? Use this form to create an inspiring blog post for your audience. Happy blogging!
          </p>
        </header>

        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label className="block text-gray-700 font-bold mb-2" htmlFor="title">
              Title: <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={title} onChange={handleTitle}
              placeholder="Eg. How to learn JavaScript"
              className="w-full px-4 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-yellow-400" 
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-bold mb-2" htmlFor="slug">
              Slug: <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="slug"
              name="slug"
              value={slug} onChange={handleSlug}
              placeholder="Eg. How-to-learn-JavaScript"
              className="w-full px-4 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-yellow-400" 
              required
     
            />
          </div>

          <div>
            <label className="block text-gray-700 font-bold mb-2" htmlFor="thumbnail">
              Add Thumbnail (Max Size : 5 MB):
            </label>
            <input
  type="file"
  id="thumbnail"
  onChange={handleThumbnail}
  accept="image/*"
  className="w-full px-4 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-yellow-400"
/>
{fileSizeError && (
  <p className="text-red-500 mt-1">Image size exceeds 5 MB. Please upload a smaller image.</p>
)}

          </div>

          <div>
            <label className="block text-gray-700 font-bold mb-2" htmlFor="paragraph1">
              Blog paragraph 1 <span className="text-red-500">*</span>
            </label>
            <textarea
              id="paragraph1"
              name="paragraph1"
              value={paragraph1} onChange={handleparagraph1}
              rows="8"
              placeholder="Write your blog paragraph 1 here..."
              className="w-full px-4 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-yellow-400 resize-none" required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-bold mb-2" htmlFor="paragraph1">
              Blog paragraph 2:
            </label>
            <textarea
              id="paragraph2"
              name="paragraph2"
              value={paragraph2} onChange={handleparagraph2}
              rows="8"
              placeholder="Write your blog paragraph 2 here..."
              className="w-full px-4 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-yellow-400 resize-none"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-bold mb-2" htmlFor="paragraph2">
              Blog paragraph 3:
            </label>
            <textarea
              id="paragraph2"
              name="paragraph2"
              value={paragraph3} onChange={handleparagraph3}
              rows="8"
              placeholder="Write your blog paragraph 3 here..."
              className="w-full px-4 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-yellow-400 resize-none"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-bold mb-2" htmlFor="hyperlink">
              Hyperlink  <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="hyperlink"
              name="hyperlink"
              value={hyperlink} onChange={handleHyperlink}
              placeholder="Eg. https://google.com"
              className="w-full px-4 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-yellow-400"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-bold mb-2" htmlFor="bulletpoint1">
              Bullet Point 1  <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="bulletpoint1"
              name="bulletpoint1"
              value={bulletpoint1} onChange={handleBulletPoint1}
              placeholder="Eg. Something"
              className="w-full px-4 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-yellow-400"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-bold mb-2" htmlFor="bulletpoint2">
              Bullet Point 2  <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="bulletpoint2"
              name="bulletpoint2"
              value={bulletpoint2} onChange={handleBulletPoint2}
              placeholder="Eg. Something"
              className="w-full px-4 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-yellow-400"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-bold mb-2" htmlFor="bulletpoint3">
              Bullet Point 3  <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="bulletpoint3"
              name="bulletpoint3"
              value={bulletpoint3} onChange={handleBulletPoint3}
              placeholder="Eg. something"
              className="w-full px-4 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-yellow-400"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-bold mb-2" htmlFor="conclusion">
              Conclusion  <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="conclusion"
              name="conclusion"
              value={conclusion} onChange={handleConclusion}
              placeholder="Eg. How to learn JavaScript"
              className="w-full px-4 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-yellow-400" 
              required
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








