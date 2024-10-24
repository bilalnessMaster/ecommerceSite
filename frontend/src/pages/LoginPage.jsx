import React, { useState } from "react";
import { Link } from "react-router-dom";

const LoginPage = () => {
    const [dataForm , setDataForm] = useState({
        email : '',
        password : ''
    })
    const handlesubmit =(e)=> { 
      e.preventDefault()
      console.log(dataForm);
      
      // Login(dataForm)   
    }
  return (
    <div className="w-full h-screen items-center bg-neutral-100/75  flex justify-center px-4 ">
      <form  onSubmit={handlesubmit} className=" w-full md:w-1/2 lg:w-1/3 xl:w-1/4 flex flex-col gap-2 items-start px-2 py-2">
        <h1 className="text-xl w-full text-center">Welcome back </h1>
        <label
          htmlFor="email"
          className=" flex flex-col w-full text-sm gap-[0.1rem]"
        >
          <span className="font-medium">Email</span>
          <div className="relative w-full">
            <input
              type="email"
              name="email"
              id=""
              value = {dataForm.email}
              onChange={(e)=>setDataForm({...dataForm , email : e.target.value})}
              className=" w-full h-9 pl-8 rounded border outline-none border-neutral-300"
              placeholder="Example@gmail.com"
            />
            <span className="absolute  left-1 inset-y-0 flex items-center  text-2xl">
              <i className="ri-mail-line"></i>
            </span>
          </div>
        </label>
        <label
          htmlFor="password"
          className=" flex flex-col w-full text-sm gap-[0.1rem]"
        >
          <span className="font-medium">Password</span>
          <div className="relative w-full">
            <input
              type="password"
              name="password"
              id=""
              value = {dataForm.password}
              onChange={(e)=>setDataForm({...dataForm , password : e.target.value})}
              className=" w-full h-9 pl-8 rounded border outline-none border-neutral-300"
              placeholder="Example@gmail.com"
            />
            <span className="absolute  left-1 inset-y-0 flex items-center  text-2xl ">
            <i className="ri-lock-line"></i>
            </span>
          </div>
        </label>
        <input type="submit" value="log in " className="text-center w-full bg-neutral-700 h-9 capitalize text-white font-semibold cursor-pointer rounded" />
      <p className="text-sm">you dont have an account? <span><Link to="register" className="text-green-500 border-b-2 border-black/5">create account </Link></span></p>
      </form>
    </div>
  );
};

export default LoginPage;
