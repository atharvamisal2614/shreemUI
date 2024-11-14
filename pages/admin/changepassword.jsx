import { BASE_URL } from "@/utils/config"
import { useState, useEffect } from "react"
import { FaUserCircle } from "react-icons/fa";
import { useRouter } from "next/router";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";


function ChangePassword() {
  const [currentPassword, setCurrentPassword] = useState('')
  const [newPassword, setnewPassword] = useState('');
  const [birthyear, setBirthyear] = useState('')
  const [showMenu, setShowMenu] = useState(false);
  const [togglePassword, setTogglePassword] = useState(false)
  const [toggleNewPassword, setNewTogglePassword] = useState(false)

  const router = useRouter();

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      router.push('/admin')
    }
  })

  const handleLogout = () => {
    localStorage.removeItem("token");
    router.push('/admin');
  };

  const handlecurrentPassword = (e) => {
    setCurrentPassword(e.target.value)
  }
  const handlenewPassword = (e) => {
    setnewPassword(e.target.value)
  }
  const handleBirthyear = (e) => {
    setBirthyear(e.target.value)
  }

  const handletogglePassword = () => {
    setTogglePassword(!togglePassword)
  }
  const handleNewtogglePassword = () => {
    setNewTogglePassword(!toggleNewPassword)
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const loadingToastId = toast.loading('Updating Your Password', {
      position: "top-left",
      hideProgressBar: true,
      closeOnClick: false,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
      theme: "light",
    });

    const res = await fetch('/api/changepassword', {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ currentPassword, newPassword, birthyear }),
    })

    const response = await res.json();
    if (response.success) {
      localStorage.removeItem("token")
      toast.update(loadingToastId, {
        render: 'Password Updated Successfully!',
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
        router.push('/admin')
      }, 1000)
    } else {
      toast.update(loadingToastId, {
        render: 'Error Changing Password',
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
  }
  return (<>
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
    <div className="flex flex-col items-center mt-10">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Update Your Password</h1>

      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white shadow-md rounded-lg px-8 py-8"
      >
        <div className="mb-6">
          <label htmlFor="birthyear" className="block text-gray-700 text-sm font-semibold mb-2">Your Birth Year <span className="text-red-500 text-lg">*</span></label>
          <input
            type="number"
            id="birthyear"
            name="birthyear"
            value={birthyear} onChange={handleBirthyear}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-yellow-500"
            placeholder="Enter your birth year"
            required
          />
        </div>


        <div className="mb-6 relative">
          <label htmlFor="currentPassword" className="block text-gray-700 text-sm font-semibold mb-2">
            Current Password <span className="text-red-500 text-lg">*</span>
          </label>
          <input
            type={togglePassword ? "text" : "password"}
            id="currentPassword"
            name="currentPassword"
            value={currentPassword}
            onChange={handlecurrentPassword}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-yellow-500"
            placeholder="Enter current password"
            required
          />

          <div onClick={handletogglePassword} className="absolute right-3 top-12  cursor-pointer text-gray-500">
            {togglePassword ? <AiFillEye size={20} /> : <AiFillEyeInvisible size={20} />}
          </div>
        </div>


        <div className="mb-6 relative">
          <label htmlFor="newPassword" className="block text-gray-700 text-sm font-semibold mb-2">New Password <span className="text-red-500 text-lg">*</span></label>
          <input
            type={toggleNewPassword ? "text" : "password"}
            id="newPassword"
            name="newPassword"
            value={newPassword}
            onChange={handlenewPassword}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-yellow-500"
            placeholder="Enter new password"
            required
          />
          <div onClick={handleNewtogglePassword} className="absolute right-3 top-12  cursor-pointer text-gray-500">
            {toggleNewPassword ? <AiFillEye size={20} /> : <AiFillEyeInvisible size={20} />}
          </div>
        </div>

        <button
          type="submit"
          className="w-full py-3 mt-4 text-white bg-red-500 rounded-lg hover:bg-red-600 transition duration-200 font-semibold"
        >
          Update Password
        </button>
      </form>
    </div>
  </>
  )
}
export default ChangePassword;



