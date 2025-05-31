import React, { useContext, useState } from "react";
import logo from './../assets/cc-logo.png';
import { Link, useNavigate } from "react-router-dom";
import { FaUser, FaLock, FaEye, FaEyeSlash } from 'react-icons/fa';
import userContext from "../context/UserContext";
import { toast } from 'react-hot-toast';
import axios from "axios";

export default function LoginPage() {
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({ rollNumber: "", password: "" });
    const { login } = useContext(userContext);
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const loadingToast = toast.loading("Logging in...");
        try {

            const res = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/users/auth/login`, {
                rollNumber: formData.rollNumber,
                password: formData.password
            });
            console.log("Login response:", res.data); // Debugging line

            login(res.data); // Store user context
            toast.success("Login successful!", { id: loadingToast });
            navigate("/feed");
        } catch (err) {
            const msg = err.response?.data?.message || "Login failed";
            toast.error(msg, { id: loadingToast });
        }
    };

    return (
        <div className="min-h-screen flex flex-col bg-white relative">
            {/* Blobs - Background Elements */}
            <div className="absolute inset-0 z-10">
                <div className="absolute top-20 left-10 bg-blue-500 opacity-40 w-96 h-96 rounded-full blur-xl"></div>
                <div className="absolute bottom-20 right-10 bg-pink-500 opacity-30 w-80 h-80 rounded-full blur-xl"></div>
                <div className="absolute top-20 right-10 bg-green-500 opacity-30 w-40 h-40 rounded-full blur-xl"></div>
                <div className="absolute bottom-20 left-10 bg-red-500 opacity-30 w-40 h-40 rounded-full blur-xl"></div>
                <div className="absolute top-40 left-1/2 bg-yellow-500 opacity-40 w-72 h-72 -z-10 rounded-full blur-xl">
                </div>
                <div className="absolute top-10 left-1/4 bg-purple-500 opacity-30 w-56 h-56 rounded-full blur-xl"></div>
                <div className="absolute top-60 left-1/4 bg-orange-500 opacity-35 w-60 h-60 rounded-full blur-xl"></div>
                <div className="absolute top-70 right-1/4 bg-teal-500 opacity-35 w-72 h-72 rounded-full blur-xl"></div>
                <div className="absolute bottom-10 right-1/3 bg-indigo-500 opacity-25 w-52 h-52 rounded-full blur-xl"></div>
                <div className="absolute bottom-20 left-1/4 bg-gray-500 opacity-30 w-64 h-64 rounded-full blur-xl"></div>
            </div>

            {/* Header */}
            <div className='flex h-20 w-full bg-white p-5 shadow-md z-50'>
                <div className='flex w-full'>
                    <div className='flex gap-x-1 justify-center items-center'>
                        <img className='h-10 w-10' src={logo} alt="cclogo" />
                        <span className='font-mont font-semibold'>College Community</span>
                    </div>
                </div>
            </div>

            {/* Login Form */}
            <div className="flex flex-1 w-full justify-center items-center z-50">
                <div className="flex w-full md:w-1/2 justify-center items-center p-6">
                    <div className="bg-gradient-to-b from-[#1B79E5] to-[#6c92c0] p-10 rounded-2xl shadow-2xl w-full max-w-md">
                        <h2 className="text-3xl font-bold text-center text-white mb-6">
                            Welcome Back!
                        </h2>
                        <p className="text-center text-white mb-8">Login to connect with your friends and the world around you.</p>
                        <form onSubmit={handleSubmit} className="space-y-3">
                            <div>
                                <label htmlFor="rollNumber" className="block text-sm font-medium text-white">
                                    Username or User ID
                                </label>
                                <div className="relative">
                                    <span className="absolute top-4 left-3 text-gray-400">
                                        <FaUser />
                                    </span>
                                    <input
                                        type="text"
                                        id="rollNumber"
                                        name="rollNumber"
                                        value={formData.rollNumber}
                                        onChange={handleChange}
                                        className="mt-1 pl-10 outline-none block w-full p-3 border border-gray-300 rounded-xl shadow-sm focus:ring-white focus:border-white"
                                        placeholder="21038201000"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="password" className="block text-sm font-medium text-white">
                                    Password
                                </label>
                                <div className="relative">
                                    <span className="absolute top-4 left-3 text-gray-400">
                                        <FaLock />
                                    </span>
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        id="password"
                                        name="password"
                                        value={formData.password}
                                        onChange={handleChange}
                                        className="mt-1 pl-10 pr-10 outline-none block w-full p-3 border border-gray-300 rounded-xl shadow-sm focus:ring-white focus:border-white"
                                        placeholder="Enter your password"
                                    />
                                    <span
                                        className="absolute top-4 right-3 text-gray-400 cursor-pointer"
                                        onClick={() => setShowPassword(!showPassword)}
                                    >
                                        {showPassword ? <FaEyeSlash /> : <FaEye />}
                                    </span>
                                </div>
                            </div>

                            <button
                                type="submit"
                                className="w-full mt-5 bg-white text-[#1B79E5] hover:bg-blue-400 hover:text-white p-3 rounded-xl shadow transition duration-200 text-lg font-semibold"
                            >
                                Log In
                            </button>
                        </form>
                        <p className="mt-3 text-center text-sm text-white">
                            Don’t have an account? <Link to='/signup' className="text-white font-medium underline">Sign up</Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
