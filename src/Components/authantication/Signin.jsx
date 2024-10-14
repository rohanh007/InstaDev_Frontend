import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
const Signin = () => {
    const [Formdata, setFormdata] = useState({
        email: '',
        password: '',
        fullname: '',
        username: ''
    });
   const navigator=useNavigate();
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormdata({
            ...Formdata,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(Formdata); // Logs form data to console
        axios.post('http://localhost:6500/api/signauth',Formdata)

        
        navigator('/login');
    };

    return (
        <div className="max-w-ful mt-5">
            <div className="w-full">
                <div className="w-4/5 sm:w-[60%] md:w-[35%] lg:w-[30%] ml-auto mr-auto border-2 pt-5 px-5 pb-2">
                    <form onSubmit={handleSubmit}>
                        <div className="p-2 flex flex-col justify-center items-center">
                            <h1 className="font-bold">Instadev</h1>
                            <p className="font-bold pl-5">Sign up to Read Blogs from your friends.</p>
                            <div className="pt-1 flex flex-row w-full">
                                <span className="w-32 h-0 border-2 border-slate-300 mt-2"></span>
                                <p className="px-3">or</p>
                                <span className="w-32 h-0 border-2 border-slate-300 mt-2"></span>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2 [&>*]:rounded-md">
                            {/* Email */}
                            <div className="relative z-0 w-full mb-1 group">
                                <input 
                                    type="email" 
                                    name="email" 
                                    id="floating_input" 
                                    onChange={handleChange}
                                    className="block py-2.5 px-3 w-full text-sm text-gray-900 bg-transparent border-2 border-gray-300 rounded-md focus:outline-none focus:ring-0 focus:border-gray-800 transition-colors duration-300 placeholder-transparent"
                                    placeholder="Email" 
                                    required 
                                />
                                <label 
                                    htmlFor="floating_input"
                                    className="absolute z-10 px-2 bg-white text-sm text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 left-3 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:left-3 peer-placeholder-shown:text-gray-400 peer-focus:left-3 peer-focus:text-gray-800 peer-focus:scale-75 peer-focus:-translate-y-6"
                                >
                                    Email
                                </label>
                            </div>

                            {/* Password */}
                            <div className="relative z-0 w-full mb-1 group">
                                <input 
                                    type="password" 
                                    name="password" 
                                    id="floating_input" 
                                    onChange={handleChange}
                                    className="block py-2.5 px-3 w-full text-sm text-gray-900 bg-transparent border-2 border-gray-300 rounded-md focus:outline-none focus:ring-0 focus:border-gray-800 transition-colors duration-300 placeholder-transparent"
                                    placeholder="Password" 
                                    required 
                                />
                                <label 
                                    htmlFor="floating_input"
                                    className="absolute z-10 px-2 bg-white text-sm text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 left-3 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:left-3 peer-placeholder-shown:text-gray-400 peer-focus:left-3 peer-focus:text-gray-800 peer-focus:scale-75 peer-focus:-translate-y-6"
                                >
                                    Password
                                </label>
                            </div>

                            {/* Fullname */}
                            <div className="relative z-0 w-full mb-1 group">
                                <input 
                                    type="text" 
                                    name="fullname" 
                                    id="floating_input" 
                                    onChange={handleChange}
                                    className="block py-2.5 px-3 w-full text-sm text-gray-900 bg-transparent border-2 border-gray-300 rounded-md focus:outline-none focus:ring-0 focus:border-gray-800 transition-colors duration-300 placeholder-transparent"
                                    placeholder="Full name" 
                                    required 
                                />
                                <label 
                                    htmlFor="floating_input"
                                    className="absolute z-10 px-2 bg-white text-sm text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 left-3 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:left-3 peer-placeholder-shown:text-gray-400 peer-focus:left-3 peer-focus:text-gray-800 peer-focus:scale-75 peer-focus:-translate-y-6"
                                >
                                    Full name
                                </label>
                            </div>

                            {/* Username */}
                            <div className="relative z-0 w-full mb-1 group">
                                <input 
                                    type="text" 
                                    name="username" 
                                    id="floating_input" 
                                    onChange={handleChange}
                                    className="block py-2.5 px-3 w-full text-sm text-gray-900 bg-transparent border-2 border-gray-300 rounded-md focus:outline-none focus:ring-0 focus:border-gray-800 transition-colors duration-300 placeholder-transparent"
                                    placeholder="Username" 
                                    required 
                                />
                                <label 
                                    htmlFor="floating_input"
                                    className="absolute z-10 px-2 bg-white text-sm text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 left-3 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:left-3 peer-placeholder-shown:text-gray-400 peer-focus:left-3 peer-focus:text-gray-800 peer-focus:scale-75 peer-focus:-translate-y-6"
                                >
                                    Username
                                </label>
                            </div>
                        </div>

                        <div className="pt-4 text-center">
                            <button type="submit" className="w-full bg-blue-500 p-1 text-white rounded-md">
                                Sign In
                            </button>
                        </div>
                    </form>
                </div>

                <div className="w-4/5 sm:w-[60%] md:w-[35%] lg:w-[30%] ml-auto mr-auto border-2 py-2 mt-2 text-center">
                    <p className="pt-3">You have an account?<Link to='/login'>Login In </Link></p>
                </div>
            </div>
        </div>
    );
}

export default Signin;
