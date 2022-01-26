import React from "react";
import Image from "next/image";
import { BsCalendarCheck } from "react-icons/bs";

export default function Register() {
  return (
    <div className=" bg-sky-50 min-h-full pb-5">
      <div className=" mx-auto max-w-lg ">
        <div className=" text-center py-2 text-blue-600 text-2xl font-bold italic flex justify-center">
          <div className="text-blue-600 bg-white shadow-xl p-2 rounded-xl m-2">
            <BsCalendarCheck size={50} />
          </div>
          <span className=" mt-6 text-shadow-lg ">Register</span>
        </div>
        <div className=" flex justify-center mt-4">
          <Image
            src="/images/userprofile-01.webp"
            width={200}
            height={200}
          />
        </div>
        <form className=" mx-4">
          <p className="font-bold italic pl-2 mb-1">Firstname</p>
          <input
            className="appearance-none block w-full bg-gray-50 text-gray-700 border rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white border-gray-300 "
            type="text"
          />
          <p className="font-bold italic pl-2 mb-1">Lastname</p>
          <input
            className="appearance-none block w-full bg-gray-50 text-gray-700 border rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white border-gray-300"
            type="text"
          />
          <p className="font-bold italic pl-2 mb-1">Nickname</p>
          <input
            className="appearance-none block w-full bg-gray-50 text-gray-700 border rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white border-gray-300"
            type="text"
          />
          <p className="font-bold italic pl-2 mb-1">Tel</p>
          <input
            className="appearance-none block w-full bg-gray-50 text-gray-700 border rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white border-gray-300"
            type="text"
          />
          <p className="font-bold italic pl-2 mb-1">Position</p>
          <input
            className="appearance-none block w-full bg-gray-50 text-gray-700 border rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white border-gray-300"
            type="text"
          />
          <p className="font-bold italic pl-2 mb-1">Email</p>
          <input
            className="appearance-none block w-full bg-gray-50 text-gray-700 border rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white border-gray-300"
            type="text"
          />
          <p className="font-bold italic pl-2 mb-1">Password</p>
          <input
            className="appearance-none block w-full bg-gray-50 text-gray-700 border rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white border-gray-300"
            type="text"
          />
          <button className="w-full bg-gradient-to-r from-cyan-600 to-cyan-400 text-white shadow-lg mt-2  p-3 rounded-lg">
              <span className="text-l text-center "> Submit </span>
            </button>

          <div className=" text-center m-2">
            <span className=" text-blue-700 text-center">
              Already have an account sign in ?
            </span>
          </div>
        </form>
      </div>
    </div>
  );
}
