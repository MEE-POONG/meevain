import React from "react";
import { useState } from "react";
import { IoPersonCircleOutline } from "react-icons/io5";

import { FiHeart } from "react-icons/fi";
import { FaRegComment } from "react-icons/fa";
// import Home from '../pages/home.js'

export default function Status() {
  const [count1, setCount1] = useState();

  return (
    <div>
      {/* <Home/> */}
      <div className="container mx-auto max-w-lg py-2">
        <div className=" text-center m-4">
          <button className=" bg-cyan-500 text-white shadow-lg  py-3 rounded-lg px-20">
            <span className="text-l text-center "> ตารางเวรทั้งหมด</span>
          </button>
        </div>
        <div className="  border-2 rounded-lg py-2 px-5 mx-6 shadow-xl">
          <div className="flex">
            <IoPersonCircleOutline size={50} />
            <input
              className=" border-2 rounded-lg  w-full p-2 m-1 h-10 shadow-lg"
              placeholder="คุณคิดอะไรอยู่"
            />{" "}
          </div>
          <div className=" text-right">
            <button className="bg-blue-600 text-white shadow-lg px-4 py-1 m-1 rounded-xl ">
              <span className=" ">โพสต์</span>
            </button>
          </div>
        </div>

        <div className="flex-auto">
          <div className="border-2 rounded-xl py-3 px-5 m-6 shadow-2xl">
            <div className="flex">
              <IoPersonCircleOutline size={40} />
              <div className="mt-2 px-1">บาสชามะลิ </div>
            </div>
            <div className="px-2 py-2">
              Lorem Ipsum es simplemente el texto de relleno de las imprentas y
              archivos de texto
            </div>

            <div className="px-2 mt-1 flex">
              <button onClick={() => setCount1(!count1)} className="  ">
                <FiHeart size={24} color="#2563eb" className="mt-1 mr-2" />
              </button>
              {count1 ? <div className="">{count1 + 0} </div> : [0]}

              <button>
                <FaRegComment
                  size={24}
                  color="#2563eb"
                  className="mt-1 mr-2 ml-3"
                />
              </button>
              2k
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}