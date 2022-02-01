import React from "react";
import Image from "next/image";
import { useState } from "react";

import Swal from "sweetalert2";
import { useRouter } from "next/router";

export default function Login() {
  const router = useRouter();

  const [username, setUsername] = useState([]);
  const [password, setPassword] = useState([]);

  const handleAddProduct = async (e) => {
    e.preventDefault();
    if (username === "user" && password === "1234") {
      window.sessionStorage.setItem("login", "true");
      router.push("/");
    } else
      Swal.fire({
        title: "Username หรือ Password ไม่ถูกต้อง",
        width: 600,
        padding: "3em",
        background: '#fff url(/images/trees.png)',
        backdrop: `
        rgba(0,0,123,0.4)
        url("/images/nyan-cat.gif")
        left top
        no-repeat
      `,
      });
  };
  return (
    <div className="bg-sky-50 min-h-screen">
      <div className="flex items-center justify-center px-4 sm:px-6 lg:px-8 ">
        <div className="max-w-md w-full space-y-8 ">
          <div className=" text-center py-8 text-blue-600 text-2xl font-bold italic flex justify-center">
            <Image src="/images/logo.png" width={50} height={50} />
            <span className=" mt-3 px-5 text-3xl">Mee Vain</span>
          </div>

          <form className="">
            <p className="font-bold text-black mb-1">Email</p>
            <input
              className="appearance-none block w-full bg-gray-50 text-gray-700 border rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white border-gray-300 "
              type="text"
              name="user-name"
              // placeholder="Username"
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
            <p className="font-bold italic text-black mb-1">Password</p>
            <input
              className="appearance-none block w-full bg-gray-50 text-gray-700 border rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white border-gray-300"
              type="password"
              name="user-password"
              // placeholder="Password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
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
              type="submit"
              value="submit"
              name="submit"
              onClick={handleAddProduct}
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
