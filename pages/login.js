import React from "react";
import Image from "next/image";
import { BsCalendarCheck } from "react-icons/bs";
import { useRouter } from "next/router";

export default function Login() {
  const router = useRouter();
  return (
    <div className="bg-sky-50 min-h-screen">
      <div className="flex items-center justify-center px-4 sm:px-6 lg:px-8 ">
        <div className="max-w-md w-full space-y-8 ">
          <div className=" text-center py-8 text-blue-600 text-2xl font-bold italic flex justify-center">
            <Image src="/images/logo.png" width={50} height={50} />
            <span className=" mt-3 px-5 text-3xl">Mee Vain</span>
          </div>

          <form className="">
            <p className="font-bold  mb-1">Email</p>
            <input
              className="appearance-none block w-full bg-gray-50 text-gray-700 border rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white border-gray-300 "
              type="text"
            />
            <p className="font-bold italic mb-1">Password</p>
            <input
              className="appearance-none block w-full bg-gray-50 text-gray-700 border rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white border-gray-300"
              type="text"
            />
            <div className="flex items-center justify-between">
              <div className="flex items-center"></div>

              <div className="text-sm py-5 m-2">
                <button
                  className="font-bold text-indigo-600 hover:text-indigo-500"
                  type="button"
                  onClick={() => {
                    router.push("/register");
                  }}
                >
                  Register Now
                </button>
              </div>
            </div>

            <button
              className="w-full bg-gradient-to-r from-cyan-600 to-cyan-400 text-white shadow-lg  p-3 rounded-lg"
              type="button"
              onClick={() => {
                router.push("/home");
              }}
            >
              <span className="text-l text-center "> Login </span>
            </button>
            <div className=" text-center py-10 font-bold text-gray-400">or</div>
            <div className="py-3">
              <button className="w-full bg-blue-600  text-white shadow-lg  p-3 rounded-lg">
                <span className="text-l text-center ">
                  {" "}
                  Sign in with Facebook{" "}
                </span>
              </button>
            </div>
            <div className="">
              <button className="w-full bg-black text-white shadow-lg  p-3 rounded-lg">
                <span className="text-l text-center ">
                  {" "}
                  Sign in with apple{" "}
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
