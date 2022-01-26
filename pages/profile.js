import React from "react";
import Top from "../components/top";
import Image from "next/image";
import { HiOutlinePencilAlt } from "react-icons/hi";
import Navbar from "../components/Navbar";

export default function Profile() {
  return (
    <div className="bg-sky-100 h-screen ">
      <Top />
      <div className=" mx-auto max-w-lg ">
        <div className=" flex justify-center mx-auto  w-2/5 mt-10  ">
          <Image
            src="/images/userprofile-01.webp"
            width={80}
            height={80}
            className="rounded-full z-0 inline-block border-2 border-gray-500"
          />
        </div>
        <div className="text-center mt-2">บาสน้อยหอยสัง</div>
        <div>
          <HiOutlinePencilAlt
            size={40}
            color=""
            className=" ml-2 py-2 float-right"
            type="button"
          />
        </div>
        <form className=" m-6 mb-8">
          <p className="font-bold italic pl-2 mb-1">Firstname</p>
          <p className="font-bold italic pl-2 mb-1">Lastname</p>
          <p className="font-bold italic pl-2 mb-1">Nickname</p>
          <p className="font-bold italic pl-2 mb-1">Tel</p>

          <button className="w-full bg-cyan-500   text-white shadow-lg  p-3 rounded-lg">
            <span className=" text-center "> Submit </span>
          </button>
        </form>
      </div>
<Navbar/>
    </div>
  );
}
