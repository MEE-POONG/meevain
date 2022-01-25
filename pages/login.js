import React from "react";
import { BsCalendarCheck } from "react-icons/bs";

export default function Login() {
  return (
    <div className="bg-sky-50 h-screen">
      <div className=" mx-auto max-w-lg ">
        <div className=" text-center py-8 text-blue-600 text-2xl font-bold italic flex justify-center">
            <div className="text-blue-600 bg-white shadow-xl p-2 rounded-xl m-2"><BsCalendarCheck size={50}/></div>
          <span className=" mt-6 text-shadow-lg ">Mee Vain</span>
        </div>
        <form className=" m-6">
          <p className="font-bold italic pl-2 mb-1">Email</p>
          <input
            className="appearance-none block w-full bg-gray-50 text-gray-700 border rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white border-gray-300 "
            type="text"
            // placeholder="Username"
          />
          <p className="font-bold italic pl-2 mb-1">Password</p>
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
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                Register Now
              </a>
            </div>
          </div>

          <button className="w-full bg-cyan-500   text-white shadow-lg  p-3 rounded-lg">
            <span className="text-l text-center "> Login </span>
          </button>
        </form>
        <div className=" text-center p-6 font-bold text-gray-400">or</div>
        <div className="m-6">
          <div className="py-2">
            <button className="w-full bg-blue-600 text-white shadow-lg  p-3 rounded-lg">
              <span className="text-l text-center ">
                {" "}
                Sign in with Facebook{" "}
              </span>
            </button>
          </div>

          <button className="w-full bg-black   text-white shadow-lg  p-3 rounded-lg mb-6">
            <span className="text-l text-center "> Sign in with apple </span>
          </button>
        </div>
      </div>
    </div>
  );
}
