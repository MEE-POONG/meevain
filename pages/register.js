import React from "react";
import Image from "next/image"
import { BsCalendarCheck } from "react-icons/bs";

export default function Register() {
  return (
    <div className="container bg-sky-50 h-full">
      <div className=" mx-auto max-w-lg ">
        <div className=" text-center py-4 text-blue-600 text-2xl font-bold italic flex justify-center">
          <div className="text-blue-600 bg-white shadow-xl p-2 rounded-xl m-2">
            <BsCalendarCheck size={50} />
          </div>
          <span className=" mt-6 text-shadow-lg ">Register</span>
        </div>
        <div className=" flex justify-center">
          {/* <Image
            src="/Emoji_Icon_-_Smiling_large.png"
            width={80}
            height={80}
          /> */}
        </div>
        <form className=" m-6">
          <p className="font-bold italic pl-2 mb-1">Firstname</p>
          <input
            className="appearance-none block w-full bg-gray-50 text-gray-700 border rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white border-gray-300 "
            type="text"
            // placeholder="Username"
          />

          <p className="font-bold italic pl-2 mb-1">Lastname</p>
          <input
            className="appearance-none block w-full bg-gray-50 text-gray-700 border rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white border-gray-300"
            type="text"
            // placeholder="Password"
          />
          <p className="font-bold italic pl-2 mb-1">Nickname</p>
          <input
            className="appearance-none block w-full bg-gray-50 text-gray-700 border rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white border-gray-300"
            type="text"
            // placeholder="Password"
          />
          <p className="font-bold italic pl-2 mb-1">Tel</p>
          <input
            className="appearance-none block w-full bg-gray-50 text-gray-700 border rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white border-gray-300"
            type="text"
            // placeholder="Password"
          />
          <p className="font-bold italic pl-2 mb-1">Position</p>
          <input
            className="appearance-none block w-full bg-gray-50 text-gray-700 border rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white border-gray-300"
            type="text"
            // placeholder="Password"
          />
          <p className="font-bold italic pl-2 mb-1">Email</p>
          <input
            className="appearance-none block w-full bg-gray-50 text-gray-700 border rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white border-gray-300"
            type="text"
            // placeholder="Password"
          />
          <p className="font-bold italic pl-2 mb-1">Password</p>
          <input
            className="appearance-none block w-full bg-gray-50 text-gray-700 border rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white border-gray-300"
            type="text"
            // placeholder="Password"
          />
          <button className="w-full bg-cyan-500   text-white shadow-lg  p-3 rounded-lg">
            <span className=" text-center "> Submit </span>
          </button>

          <div className=" text-center"> 
            <span className=" text-blue-700 text-center">Already have an account sign in ?</span>
            </div>
          
        </form>
        

      </div>
    </div>
  );
}
