import React, { useState } from "react";
import logo from './../assets/cc-logo.png';
import { Link } from "react-router-dom";
import { FaUser, FaLock, FaEye, FaEyeSlash, FaIdBadge } from 'react-icons/fa';
;

export default function SignupPage() {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="min-h-screen flex flex-col bg-white relative">

            {/* Blobs - Background Elements */}
            <div className="absolute inset-0 z-10">
                {/* Soft, pastel-colored blobs */}
                <div className="absolute top-20 left-10 bg-pink-300 opacity-50 w-96 h-96 rounded-full blur-xl"></div>
                <div className="absolute bottom-20 right-10 bg-indigo-300 opacity-40 w-80 h-80 rounded-full blur-xl"></div>
                <div className="absolute top-20 right-10 bg-teal-300 opacity-40 w-40 h-40 rounded-full blur-xl"></div>
                <div className="absolute bottom-20 left-10 bg-yellow-300 opacity-40 w-40 h-40 rounded-full blur-xl"></div>
                <div className="absolute top-40 left-1/2 bg-purple-300 opacity-50 w-72 h-72 rounded-full blur-xl"></div>
                <div className="absolute top-10 left-1/4 bg-green-300 opacity-40 w-56 h-56 rounded-full blur-xl"></div>
                <div className="absolute top-60 left-1/4 bg-pink-400 opacity-45 w-60 h-60 rounded-full blur-xl"></div>
                <div className="absolute top-70 right-1/4 bg-orange-300 opacity-45 w-72 h-72 rounded-full blur-xl"></div>
                <div className="absolute bottom-10 right-1/3 bg-lime-300 opacity-35 w-52 h-52 rounded-full blur-xl"></div>
                <div className="absolute bottom-20 left-1/4 bg-blue-300 opacity-40 w-64 h-64 rounded-full blur-xl"></div>

                {/* Blobs with glass effect over the form */}
                <div className="absolute top-1/4 left-1/4 bg-white opacity-40 w-72 h-72 rounded-full blur-3xl bg-opacity-60"></div>
                <div className="absolute top-1/2 left-1/4 bg-white opacity-40 w-56 h-56 rounded-full blur-3xl bg-opacity-70"></div>
            </div>

            <div className='flex h-20 w-full bg-white p-5 shadow-md'>
                <div className='flex w-full'>
                    <div className='flex gap-x-1 justify-center items-center'>
                        <img className='h-10 w-10' src={logo} alt="cclogo" />
                        <span className='font-mont font-semibold'>College Community</span>
                    </div>
                </div>
            </div>

            <div className="flex flex-1 w-full justify-center items-center z-50">
                <div className="flex w-full md:w-1/2 justify-center items-center p-6">
                    <div className="bg-gradient-to-b from-[#1B79E5] to-[#6c92c0] p-10 rounded-2xl shadow-2xl w-full max-w-md">
                        <h2 className="text-3xl font-bold text-center text-white mb-6">
                            Create Your Account
                        </h2>
                        <p className="text-center text-white mb-8">Sign up and start connecting with your campus community.</p>
                        <form className="space-y-3">
                            <div className="flex gap-4">
                                <div className="w-1/2">
                                    <label htmlFor="firstName" className="block text-sm font-medium text-white">
                                        First Name
                                    </label>
                                    <div className="relative">
                                        <span className="absolute top-4 left-3 text-gray-400">
                                            <FaUser />
                                        </span>
                                        <input
                                            type="text"
                                            id="firstName"
                                            className="mt-1 pl-10 block w-full p-3 border border-gray-300 rounded-xl shadow-sm focus:ring-white focus:border-white"
                                            placeholder=" John"
                                        />
                                    </div>
                                </div>
                                <div className="w-1/2">
                                    <label htmlFor="lastName" className="block text-sm font-medium text-white">
                                        Last Name
                                    </label>
                                    <div className="relative">
                                        <span className="absolute top-4 left-3 text-gray-400">
                                            <FaUser />
                                        </span>
                                        <input
                                            type="text"
                                            id="lastName"
                                            className="mt-1 pl-10 block w-full p-3 border border-gray-300 rounded-xl shadow-sm focus:ring-white focus:border-white"
                                            placeholder=" Doe"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div>
                                <label htmlFor="userId" className="block text-sm font-medium text-white">
                                    User ID
                                </label>
                                <div className="relative">
                                    <span className="absolute top-4 left-3 text-gray-400">
                                        <FaIdBadge />
                                    </span>
                                    <input
                                        type="text"
                                        id="userId"
                                        className="mt-1 pl-10 block w-full p-3 border border-gray-300 rounded-xl shadow-sm focus:ring-white focus:border-white"
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
                                        className="mt-1 pl-10 pr-10 block w-full p-3 border border-gray-300 rounded-xl shadow-sm focus:ring-white focus:border-white"
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

                            <Link to="/feed">
                                <button
                                    type="submit"
                                    className="w-full mt-5 bg-white text-[#1B79E5] hover:bg-blue-400 hover:text-white p-3 rounded-xl shadow  transition duration-200 text-lg font-semibold"
                                >
                                    Sign Up
                                </button>
                            </Link>
                        </form>
                        <p className="mt-3 text-center text-sm text-white">
                            Already have an account? <Link to='/login' className="text-white font-medium underline">Log In</Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
