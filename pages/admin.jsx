import { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { BASE_URL } from '@/utils/config';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

export default function AdminLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false)
  const router = useRouter();
  const handleEmail = (e) => { setEmail(e.target.value) }
  const handlePassword = (e) => { setPassword(e.target.value) }
  const togglePassword = () => { setShowPassword(!showPassword) }
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = { email, password }
    let res = await fetch(`${BASE_URL}/api/login`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    let response = await res.json()
    console.log("response", response)
    console.log('Email:', email, 'Password:', password);
    setEmail("");
    setPassword("")
    if (response.success) {
      toast.success('Welcome! Login Successful', {
        position: "top-left",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      setTimeout(() => {
        router.push('/blogform')
      }, 2000)
    } if (!response.success) {
      toast.error('Invalid Credentials', {
        position: "top-left",
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
  return (
    <div className="font-[sans-serif]">
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
      <div className="min-h-screen flex fle-col items-center justify-center py-6 px-4 ">
        <div className="grid md:grid-cols-2 items-center gap-4 max-w-6xl w-full">
          <div className="border border-gray-300 rounded-lg p-6 max-w-md shadow-[0_2px_22px_-4px_rgba(93,96,127,0.2)] max-md:mx-auto bg-yellow-400">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="mb-8">
                <h3 className="text-gray-800 text-3xl font-extrabold">Sign in</h3>
              </div>
              <div>
                <label className="text-gray-800 text-sm mb-2 block">Email</label>
                <div className="relative flex items-center">
                  <input name="email"
                    value={email}
                    onChange={handleEmail}
                    type="text"
                    required
                    className="w-full text-sm text-gray-800 border border-gray-300 px-4 py-3 rounded-lg outline-red-500"
                    placeholder="admin@gmail.com" />
                </div>
              </div>
              <div>
                <label className="text-gray-800 text-sm mb-2 block">Password</label>
                <div className="relative flex items-center">
                  <input name="password"
                    value={password}
                    onChange={handlePassword}
                    type={showPassword ? "text" : "password"}
                    required
                    className="w-full text-sm text-gray-800 border border-gray-300 px-4 py-3 rounded-lg outline-red-500"
                    placeholder="Enter password" />

                  <div onClick={togglePassword} className='absolute right-4 cursor-pointer'>
                    {showPassword ? <AiFillEye size={20} /> : <AiFillEyeInvisible size={20} />}
                  </div>
                </div>


              </div>
              <div className="!mt-8">
                <button type="submit" className="w-full shadow-xl py-3 px-4 text-sm tracking-wide rounded-lg text-white bg-red-500 hover:bg-red-600 focus:outline-none">
                  Log in
                </button>
              </div>
            </form>
          </div>
          <div className="lg:h-[400px] md:h-[300px] max-md:mt-8">
            <Image src="/blog-image.webp" width={1000} height={600} className="w-full h-full max-md:w-4/5 mx-auto block object-cover" alt="Dining Experience" />
          </div>
        </div>
      </div>
    </div>
  );
}
