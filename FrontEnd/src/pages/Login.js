import React from "react";
import logo2 from "./images/logo_black2.png";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
function Login() {
    const [datologin, setDatologin] = useState({email: '', password: '' });
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    const handleChange = (e) => {
      e.preventDefault();
      setDatologin({ ...datologin, [e.target.name]: e.target.value });
    }
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const response = await fetch("http://localhost:3000/product", {
          method: "POST",
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(datologin)
        })
        if (response.ok) {
          setDatologin({email: '', password: '' });
          navigate('/');
        } 
      } catch (error) {
        setError(error.message);
        }
    }
    return (
        <body class="h-[750px] flex flex-row">
                <div class="w-1/2 bg-gray-100 flex flex-col">
                    <div class="flex flex-col items-center justify-center mt-40" >
                        <p class="text-black font-bold">Hello</p>
                        <h1 class="text-black font-bold text-2xl">Welcome to!</h1>
                        <div class="mt-10 flex justify-center items-center">
                            <img src={logo2} class="w-80"></img>
                        </div>
                    </div>
                </div>
                <div class="w-1/2 flex flex-col items-center justify-center">
                    <form onSubmit={handleSubmit} class="flex flex-col justify-center">
                        <div class="bg-white w-100 h-100 flex flex-col justify-center items-center rounded-lg shadow-2xl p-8">
                            <h1 class="text-2xl font-bold">LOGIN</h1>
                            <label>
                                <h1 class="font-semibold text-base">EMAIL</h1>
                                <input class="w-80 p-2 rounded-lg border-2 border-gray-300 hover:border-gray-400"
                                    type='text' name='email' value={datologin.email} onChange={handleChange}></input>
                            </label>
                            <label>
                                <h1 class="font-semibold text-base">PASSWORD</h1>
                                <input class="w-80 p-2 rounded-lg border-2 border-gray-300 hover:border-gray-400"
                                    type='text' name='password' value={datologin.password} onChange={handleChange}></input>
                            </label>
                            <button type="submit" class="bg-orange-500 hover:bg-orange-600 px-20 py-2 mt-5 mb-2 rounded-lg text-white w-80
                                     hover:bg-gray-300 hover:font-semibold">LOGIN</button>
                            <p>New to Market?<Link to={"/register"} ><span class="underline ml-2 text-blue-500 hover:text-blue-600">Sign up</span></Link></p>
                            <hr class="w-80 border border-double border-gray-200 mx-8 mt-5 mb-5"></hr>
                            <Link to={"/loginAdmin"} class="underline ml-2 text-blue-500 hover:text-blue-600">Log in with Admin</Link>
                        </div>
                    </form>
                </div>
        </body>
    )
}
export default Login;