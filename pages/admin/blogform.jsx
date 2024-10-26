import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { FaUserCircle } from "react-icons/fa";
import { BASE_URL } from "@/utils/config";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function BlogForm() {
  const router = useRouter();
  const [title,setTitle] = useState('');
  const [slug, setSlug] = useState('');
  const [thumbnail, setThumbnail] = useState('');
  const [content, setContent] = useState('');


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
   const handleTitle = (e) =>{
    setTitle(e.target.value)
   }
   const handleSlug = (e) =>{
    setSlug(e.target.value)
   }
   const handleThumbnail = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setThumbnail(reader.result); // Base64 string of the image
      };
    }
  };
   const handleContent = (e) =>{
    setContent(e.target.value)
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

    try {
        const res = await fetch(`${BASE_URL}/api/blogpost`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ title, slug, content, thumbnail }),
        });

        const response = await res.json();

        if (response.success) {
    
            toast.update(loadingToastId, {
                render: 'Blog Created Successfully!',
                type: 'success',
                isLoading: false, 
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });

            setTimeout(() => {
                router.push(`${BASE_URL}/admin/allblogs`);
            }, 2000);
        } else {
  
            toast.update(loadingToastId, {
                render: 'Some Unknown Error Occurred',
                type: 'error',
                isLoading: false, 
                autoClose: 3000,
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
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    }
};


  //   e.preventDefault();

  //   const loadingToastId = toast.loading('Uploading your Blog...', {
  //     position: "top-left",
  //     hideProgressBar: true,
  //     closeOnClick: false,
  //     pauseOnHover: false,
  //     draggable: false,
  //     progress: undefined,
  //     theme: "light",
  // });

  //   const res = await fetch(`${BASE_URL}/api/blogpost`, {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify({ title, slug, content, thumbnail }),
  //   });

  //   const response = await res.json();
  //   if (response.success) {
  //     toast.update(loadingToastId, {
  //       render:'Blog Created Successfully!',
  //       type: 'success',
  //       position: "top-left",
  //       autoClose: 3000,
  //       hideProgressBar: false,
  //       closeOnClick: true,
  //       pauseOnHover: true,
  //       draggable: true,
  //       progress: undefined,
  //       theme: "light",
  //     });
  //     setTimeout(() => {
  //       router.push(`${BASE_URL}/admin/allblogs`)
  //     }, 2000)
  //   } else {
  //     toast.update(loadingToastId, {
  //       render:'Some Unknown Error Occured',
  //       type:'error',
  //       position: "top-left",
  //       autoClose: 3000,
  //       hideProgressBar: false,
  //       closeOnClick: true,
  //       pauseOnHover: true,
  //       draggable: true,
  //       progress: undefined,
  //       theme: "light",
  //     });
  //   }
  // };
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
              onClick={() => router.push(`${BASE_URL}/admin/allblogs`)}
              className="w-full text-center text-gray-700 font-libreBaskerVille font-bold hover:text-yellow-500 py-2 transition duration-200"
            >
              All Blogs
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
            Welcome, Admin! 🤝
          </h1>
          <p className="text-gray-600 mt-2">
            Ready to share your thoughts? Use this form to create an inspiring blog post for your audience. Happy blogging!
          </p>
        </header>

        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label className="block text-gray-700 font-bold mb-2" htmlFor="title">
              Title:
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={title} onChange={handleTitle}
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
              value={slug} onChange={handleSlug}
              placeholder="Eg. How-to-learn-JavaScript"
              className="w-full px-4 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-yellow-400"
     
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
         onChange={handleThumbnail}
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
              value={content} onChange={handleContent}
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







// import React, { useEffect, useState } from "react";
// import { useRouter } from "next/router";
// import { FaUserCircle } from "react-icons/fa";
// import { BASE_URL } from "@/utils/config";
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// export default function BlogForm() {
//   const router = useRouter();
//   const [title, setTitle] = useState('');
//   const [slug, setSlug] = useState('');
//   const [thumbnail, setThumbnail] = useState('');
//   const [content, setContent] = useState('');
//   const [showMenu, setShowMenu] = useState(false);

//   useEffect(() => {
//     if (!localStorage.getItem("token")) {
//       router.push(`/admin`); // Internal route for Next.js
//     }
//   }, []);

//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     router.push(`/admin`);
//   };

//   const handleThumbnail = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.readAsDataURL(file);
//       reader.onloadend = () => {
//         setThumbnail(reader.result); // Set thumbnail as Base64 string
//       };
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await fetch(`${BASE_URL}/api/blogpost`, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ title, slug, content, thumbnail }),
//       });

//       const response = await res.json();
//       if (response.success) {
//         toast.success('Blog Created Successfully!', { position: "top-left", autoClose: 3000 });
//         setTimeout(() => router.push(`/admin/allblogs`), 2000);
//       } else {
//         toast.error('Some Unknown Error Occurred', { position: "top-left", autoClose: 3000 });
//       }
//     } catch (error) {
//       toast.error('Failed to create blog post. Please try again.', { position: "top-left", autoClose: 3000 });
//     }
//   };

//   return (
//     <div className="relative">
//       <ToastContainer position="top-left" autoClose={3000} theme="light" />
      
//       {/* Centered User Icon with Dropdown */}
//       <div className="flex flex-col items-center mt-6 text-red-500">
//         <button onClick={() => setShowMenu(!showMenu)} className="focus:outline-none">
//           <FaUserCircle className="text-5xl cursor-pointer hover:text-red-500 transition duration-300" />
//         </button>
//         <div className="w-36 h-0.5 bg-gray-400 mt-10" />

//         {showMenu && (
//           <div className="mt-4 bg-white shadow-lg rounded-lg py-2 px-4 absolute top-16">
//             <button onClick={() => router.push(`/admin/allblogs`)} className="w-full text-center text-gray-700 font-bold hover:text-yellow-500 py-2 transition duration-200">
//               All Blogs
//             </button>
//             <button onClick={handleLogout} className="w-full text-center text-gray-700 font-bold hover:text-red-600 py-2 transition duration-200">
//               Logout
//             </button>
//           </div>
//         )}
//       </div>

//       {/* Form Container */}
//       <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-lg mt-6">
//         <header className="text-center mb-6">
//           <h1 className="md:text-4xl text-2xl font-semibold text-gray-800">
//             Welcome, Admin! 🤝
//           </h1>
//           <p className="text-gray-600 mt-2">
//             Ready to share your thoughts? Use this form to create an inspiring blog post for your audience.
//           </p>
//         </header>

//         <form className="space-y-6" onSubmit={handleSubmit}>
//           <div>
//             <label className="block text-gray-700 font-bold mb-2" htmlFor="title">
//               Title:
//             </label>
//             <input type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)}
//               placeholder="Eg. How to learn JavaScript" className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-yellow-400" />
//           </div>

//           <div>
//             <label className="block text-gray-700 font-bold mb-2" htmlFor="slug">
//               Slug:
//             </label>
//             <input type="text" id="slug" value={slug} onChange={(e) => setSlug(e.target.value)}
//               placeholder="Eg. How-to-learn-JavaScript" className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-yellow-400" />
//           </div>

//           <div>
//             <label className="block text-gray-700 font-bold mb-2" htmlFor="thumbnail">
//               Add Thumbnail:
//             </label>
//             <input type="file" id="thumbnail" onChange={handleThumbnail} accept="image/*"
//               className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-yellow-400" />
//           </div>

//           <div>
//             <label className="block text-gray-700 font-bold mb-2" htmlFor="content">
//               Blog Content:
//             </label>
//             <textarea id="content" value={content} onChange={(e) => setContent(e.target.value)} rows="8"
//               placeholder="Write your blog content here..." className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-yellow-400 resize-none" />
//           </div>

//           <button type="submit" className="w-full bg-red-600 text-white font-semibold py-3 rounded-lg hover:bg-red-700 focus:ring-4 focus:ring-red-400 transition duration-300">
//             Post a Blog
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }
