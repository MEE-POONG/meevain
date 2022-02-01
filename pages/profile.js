import React from "react";

import Image from "next/image";
import { FiLogIn } from "react-icons/fi";

import TopSimple from "../components/topSimple";

import Modaleditproflie from "../components/modaleditproflie";
import Wahool from "../components/navbarwahoo";

export default function Profile() {
  return (
    <div className="bg-sky-100 min-h-screen ">
      <TopSimple />
      <div className=" mx-auto max-w-lg text-black  ">
        <div className=" flex justify-center mx-auto  w-2/5 mt-10  ">
          <Image
            src="/images/userprofile-01.webp"
            width={80}
            height={80}
            className="rounded-full z-0 inline-block border-2 border-gray-500"
          />
        </div>
        <div className="text-center mt-2">บาสน้อยหอยสัง</div>
        <Modaleditproflie />

        <div className="mt-10 m-6 mb-8">
          <div className="grid grid-cols-2">
            <p className="col-span-1 font-bold italic pl-2 py-3">Firstname</p>
            <p className="col-span-1 font-bold italic pl-2 py-3">เจมส์</p>
          </div>
          <div className=" h-0.5 bg-gray-400"></div>
          <div className="grid grid-cols-2">
            <p className="col-span-1 font-bold italic pl-2 py-3">Lastname</p>
            <p className="col-span-1 font-bold italic pl-2 py-3">หมา</p>
          </div>
          <div className=" h-0.5 bg-gray-400"></div>
          <div className="grid grid-cols-2">
            <p className="col-span-1 font-bold italic pl-2 py-3">Nickname</p>
            <p className="col-span-1 font-bold italic pl-2 py-3">หมาเจม</p>
          </div>
          <div className=" h-0.5 bg-gray-400"></div>
          <div className="grid grid-cols-2">
            <p className="col-span-1 font-bold italic pl-2 py-3">Tel</p>
            <p className="col-span-1 font-bold italic pl-2 py-3">1234667989</p>
          </div>
          <div className=" h-0.5 bg-gray-400"></div>
          <div className="grid grid-cols-2">
            <p className="col-span-1 font-bold italic pl-2 py-3">Position</p>
            <p className="col-span-1 font-bold italic pl-2 py-3">manager</p>
          </div>
          <div className=" h-0.5 bg-gray-400"></div>
          <div className=" flex py-3">
            <FiLogIn size={25} />
            <span className=" text-center px-2 "> Sign out </span>
          </div>
          <div className=" h-0.5 bg-gray-400"></div>
        </div>
      </div>
      <Wahool/>
    </div>
  );
}
