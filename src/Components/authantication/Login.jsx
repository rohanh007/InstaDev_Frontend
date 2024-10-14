import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
    const [Formdata, setFormdata] = useState({
        username: '',
        password: ''
    })
    const navigator=useNavigate();
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormdata({
            ...Formdata,
            [name]: value
        })

    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        // console.log(Formdata);
        try {

            const response = await axios.post('http://localhost:6500/api/loginauth', Formdata);
            localStorage.setItem('token', response.data.token);

            navigator('/home',{state:{jwttoken:response.data.token}});
        } catch (error) {
            console.log(error);
        }



    }

    return (
        <div className='max-w-ful mt-5'>
            <div className='w-full'>
                {/* <div>
                    <img src=''/>
                </div> */}
                <div className='w-4/5 sm:w-[60%] md:w-[35%] lg:w-[30%] ml-auto mr-auto border-2 pt-5 px-5 pb-2'>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <div className='p-2'><h1 className='text-center font-bold'>Instadev</h1></div>
                            <div className='flex flex-col gap-2 [&>*]:rounded-md'>
                                {/* <input name='username' placeholder='Username' className='border-2 hover:border-2 p-1 box-border w-full ' /> */}
                                <div class="relative z-0 w-full mb-1 group">
                                    <input type="text" name="username" id="floating_input" onChange={handleChange}
                                        class="block py-2.5 px-3 w-full text-sm text-gray-900 bg-transparent border-2 border-gray-300 rounded-md appearance-none dark:text-white dark:border-gray-600 focus:outline-none focus:ring-0 focus:border-gray-800 peer transition-colors duration-300 placeholder-transparent"
                                        placeholder="Username" required />

                                    <label for="floating_input"
                                        class="absolute z-10 px-2 bg-white text-sm text-gray-400 dark:text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 left-3 -z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:left-3 peer-placeholder-shown:text-gray-400 peer-focus:left-3 peer-focus:text-gray-800 peer-focus:font-bold peer-focus:scale-75 peer-focus:-translate-y-6">
                                        Username
                                    </label>
                                </div>
                                <div class="relative z-0 w-full mb-1 group">
                                    <input type="password" name="password" id="floating_input" onChange={handleChange}
                                        class="block py-2.5 px-3 w-full text-sm text-gray-900 bg-transparent border-2 border-gray-300 rounded-md appearance-none dark:text-white dark:border-gray-600 focus:outline-none focus:ring-0 focus:border-gray-800 peer transition-colors duration-300 placeholder-transparent"
                                        placeholder="Password" required />

                                    <label for="floating_input"
                                        class="absolute z-10 px-2 bg-white text-sm text-gray-400 dark:text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 left-3 -z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:left-3 peer-placeholder-shown:text-gray-400 peer-focus:left-3 peer-focus:text-gray-800 peer-focus:font-bold peer-focus:scale-75 peer-focus:-translate-y-6">
                                        Password
                                    </label>
                                </div>
                            </div>
                            <div className="pt-4 text-center">
                                <button className="w-full h-30vh bg-blue-500 p-2 text-white rounded-md">Log In</button>
                            </div>

                            <div className='pt-3 flex flex-row'>
                                <span className='w-32 h-0 border-2 border-slate-300 mt-2'></span>
                                <p className='px-3'>or</p>
                                <span className='w-32 h-0 border-2 border-slate-300 mt-2'></span>

                            </div>
                            <div className='text-center'>
                                <div>
                                    <span></span>
                                    <p>Log in with Gmail</p>
                                </div>
                                <div>
                                    <a href='#' className='text-sm'>Forgotten password </a>
                                </div>
                            </div>

                        </div>
                    </form>
                </div>
                <div className='w-4/5 sm:w-[60%] md:w-[35%] lg:w-[30%] ml-auto mr-auto border-2 py-2 mt-2   text-center'>
                    <p className='pt-3'>Don't have an account?<Link to='/signin'>SignUp</Link></p>
                </div>
            </div>
        </div>
    )
}

export default Login;
