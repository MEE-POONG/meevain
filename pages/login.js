import React from "react";
import { BsCalendarCheck } from "react-icons/bs";

export default function Login() {
  return (
    <div className="bg-sky-50 h-screen">
      <div className="flex items-center justify-center px-4 sm:px-6 lg:px-8 ">
        <div className="max-w-md w-full space-y-8 ">
          <div className=" text-center py-8 text-blue-600 text-2xl font-bold italic flex justify-center">
            <div className="text-blue-600 bg-white shadow-xl p-2 rounded-xl m-2"><BsCalendarCheck size={50} /></div>
            <span className=" mt-6 text-shadow-lg ">Mee Vain</span>
          </div>

          <form className="">
            <p className="font-bold  mb-1">Email</p>
            <input
              className="appearance-none block w-full bg-gray-50 text-gray-700 border rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white border-gray-300 "
              type="text"
            // placeholder="Username"
            />
            <p className="font-bold italic mb-1">Password</p>
            <input
              className="appearance-none block w-full bg-gray-50 text-gray-700 border rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white border-gray-300"
              type="text"
            // placeholder="Password"
            />
            <div className="flex items-center justify-between">
              <div className="flex items-center"></div>

              <div className="text-sm py-5 m-2">
                <a
                  href="#"
                  className="font-bold text-indigo-600 hover:text-indigo-500"
                >
                  Register Now
                </a>
              </div>
            </div>

            <button className="w-full bg-gradient-to-r from-cyan-600 to-cyan-400 text-white shadow-lg  p-3 rounded-lg">
              <span className="text-l text-center "> Login </span>
            </button>
            <div className=" text-center py-10 font-bold text-gray-400">or</div>
            <div className="py-3">
              <button className="w-full bg-blue-600  text-white shadow-lg  p-3 rounded-lg">
                <span className="text-l text-center "> Sign in with Facebook </span>
              </button>
            </div>
            <div className="">
              <button className="w-full bg-black text-white shadow-lg  p-3 rounded-lg">
                <span className="text-l text-center "> Sign in with apple </span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
