import Image from "next/image";
import React, { useState } from "react";
import { MdOutlineCancel } from "react-icons/md";
import { HiOutlinePencilAlt } from "react-icons/hi";

export default function Modaleditproflie() {
  const [showModalEditProflie, setShowModalEditProflie] = useState();
  return (
    <div>
      <div className="">
        <div className="mx-auto max-w-lg">
          <div className=" text-center">
            <div>
              <HiOutlinePencilAlt
                size={40}
                color=""
                className=" ml-2 py-2 float-right"
                type="button"
                onClick={() => setShowModalEditProflie(true)}
              />
            </div>
          </div>
        </div>
        {showModalEditProflie ? (
          <div className="px-5 justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50  shadow-lg backdrop-filter backdrop-blur-md ">
            <div className="w-full  max-w-lg p-4 relative mx-auto my-auto rounded-xl shadow-lg  bg-white ">
              <MdOutlineCancel
                size={24}
                className="float-right cursor-pointer hover:shadow-2xl hover:scale-105 transform transition-all duration-500"
                type="button"
                onClick={() => setShowModalEditProflie(false)}
              />
              <div className="text-center flex-auto justify-center mt-6">
                <h2 className="text-2xl text-center font-bold ">
                  แก้ไขข้อมูลส่วนตัว{" "}
                </h2>

                <div className=" grid grid-cols-2 m-5">
                  <div className=" row-span-1">
                    <p className="font-bold italic mt-2 text-left">
                      ชื่อ - นามสกุล
                    </p>
                  </div>
                  <div className=" row-span-1">
                    <input
                      className="appearance-none block w-full bg-gray-50 text-gray-700 border rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white border-gray-300 "
                      type="text"
                    />
                  </div>
                </div>
                <div className=" grid grid-cols-2 m-5">
                  <div className=" row-span-1">
                    <p className="font-bold italic mt-2 text-left">ตำแหน่ง</p>
                  </div>
                  <div className=" row-span-1">
                    <input
                      className="appearance-none block w-full bg-gray-50 text-gray-700 border rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white border-gray-300 "
                      type="text"
                    />
                  </div>
                </div>
                <div className=" grid grid-cols-2 m-5">
                  <div className=" row-span-1">
                    <p className="font-bold italic mt-2 text-left">อีเมล</p>
                  </div>
                  <div className=" row-span-1">
                    <input
                      className="appearance-none block w-full bg-gray-50 text-gray-700 border rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white border-gray-300 "
                      type="text"
                    />
                  </div>
                </div>
                <div className=" grid grid-cols-2 m-5">
                  <div className=" row-span-1">
                    <p className="font-bold italic mt-2 text-left">โทรศัพท์</p>
                  </div>
                  <div className=" row-span-1">
                    <input
                      className="appearance-none block w-full bg-gray-50 text-gray-700 border rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white border-gray-300 "
                      type="text"
                    />
                  </div>
                </div>

                <button className="w-full bg-cyan-500   text-white shadow-lg  p-3 rounded-lg">
                  <span className=" text-center "> Submit </span>
                </button>
              </div>
            </div>
          </div>
        ) : null}{" "}
      </div>
    </div>
  );
}
