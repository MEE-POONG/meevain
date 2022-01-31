import React from "react";
import { useState } from "react";
import Top from "../components/top";
import { IoPersonCircleOutline } from "react-icons/io5";
import { FiHeart } from "react-icons/fi";
import { FaRegComment } from "react-icons/fa";
import { useRouter } from "next/router";
import ModalCreateGroup from "../components/ModalCreateGroup";
import ModalDeletepersonByGroup from "../components/modalDeletepersonByGroup"
import Image from "next/image";

export default function Status1() {
  const [count1, setCount1] = useState();
  const router = useRouter();
  return (
    <div className="bg-sky-100 min-h-screen ">

<div className="py-2 px-5 w-full shadow-2xl bg-gradient-to-r from-cyan-600 to-cyan-300 text-white ">
        <div className="mx-auto max-w-lg">
          <div className="grid grid-cols-8 ">
            <div className="col-span-1 mt-1">
              <Image src="/images/userprofile-01.webp" width={40} height={40} />
            </div>
            <div className="col-span-5 px-2 mt-2 text-2xl text-black font-bold ">บาส</div>
            <div
              className="col-span-1 place-self-center mr-4 font-bold float-right"
              type="button"
            >
            SHARE LINK
            </div>
            <div
              className="col-span-1 place-self-center  flex justify-center  font-bold float-right"
              type="button"
            >
              <ModalDeletepersonByGroup />
              <div className=" mt-2 lg:ml-2 text-black">
                <span>100</span>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" mx-auto max-w-lg text-black  ">
        <div className=" text-center m-4">
          <button
            className=" text-white shadow-lg bg-blue-400  py-3 rounded-lg px-20"
            type="button"
            onClick={() => {
              router.push("/Calender");
            }}
          >
            <span className="text-l text-center "> ตารางเวรทั้งหมด</span>
          </button>
        </div>
        <div className="  border-2 rounded-lg py-2 px-5 mx-6 shadow-xl bg-white">
          <div className="flex">
            <IoPersonCircleOutline size={50} />
            <input
              className=" border-2 rounded-lg  w-full p-2 m-1 h-10 shadow-lg"
              placeholder="คุณคิดอะไรอยู่"
            />{" "}
          </div>
          <div className=" text-right">
            <button className=" text-white bg-blue-400 shadow-lg px-4 py-1 m-1 rounded-xl ">
              <span className=" ">โพสต์</span>
            </button>
          </div>
        </div>

        <div className="flex-auto">
          <div className="border-2 rounded-xl py-3 px-5 m-6 bg-white shadow-2xl">
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
              <button className="">
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
      </div>{" "}
    </div>
  );
}
