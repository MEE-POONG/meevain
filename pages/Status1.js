import React from "react";
import { useState } from "react";

import { IoPersonCircleOutline } from "react-icons/io5";
import { FiHeart } from "react-icons/fi";
import { FaRegComment } from "react-icons/fa";
import { useRouter } from "next/router";
import TopInGroup from "../components/TopInGroup"
import Wahool from "../components/navbarwahoo";
import { useRecoilValue } from "recoil";
import { memberState } from "../context/member";


export default function Status1() {
  const [count1, setCount1] = useState();
  const member = useRecoilValue(memberState);

  const router = useRouter();
  return (
    <div className="bg-sky-100 min-h-screen ">
<TopInGroup/>
      <div className=" mx-auto max-w-lg text-black  ">
        <div className=" text-center m-4">
          <button
            className=" text-white shadow-lg bg-blue-400  py-3 rounded-lg px-20"
            type="button"
            onClick={() => {
              router.push("/CalendarAll");
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
              placeholder={"คุณคิดอะไรอยู่"+member.firstname}
            />
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
              <div className="mt-2 px-1">{member.firstname}</div>
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
        <Wahool/>
      </div>{" "}
      
    </div>
  );
}
