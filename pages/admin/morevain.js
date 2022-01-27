import React from "react";
import Image from "next/image";
import { BsCalendarCheck } from "react-icons/bs";

import TableVain from "../../components/tableVain";
import TopPageAdmin from "../../components/topPageAdmin";

export default function Morevain() {
  return (
    <div>
      <TopPageAdmin/>
         
      <div className=" bg-sky-50 h-full">
        <div className=" mx-auto max-w-lg ">
          <div className="">
          <form className="">
            <p className="font-bold italic pl-2 mb-1">ชื่อเวร</p>
            <input
              className=" w-full bg-gray-50 text-gray-700 border rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white border-gray-300 "
              type="text"
            />
            <p className="font-bold italic pl-2 mb-1">เวลาเข้าเวร</p>
            <input
              className=" w-full bg-gray-50 text-gray-700 border rounded-lg py-3 px-4 mb-3 focus:outline-none focus:bg-white border-gray-300"
              type="text"
            />
            <p className="font-bold italic pl-2 mb-1">เวลาออกเวร</p>
            <input
              className=" w-full bg-gray-50 text-gray-700 border rounded-lg py-3 px-4 mb-3 focus:outline-none focus:bg-white border-gray-300"
              type="text"
            />
            <p className="font-bold italic pl-2 mb-1">รายละเอียด</p>
            <input
              className=" w-full bg-gray-50 text-gray-700 border rounded-lg py-3 px-4 mb-3 focus:outline-none focus:bg-white border-gray-300"
              type="text"
            />
            <p className="font-bold italic pl-2 mb-1">หน่วยงาน</p>
            <input
              className=" w-full bg-gray-50 text-gray-700 border rounded-lg py-3 px-4 mb-3 focus:outline-none focus:bg-white border-gray-300"
              type="text"
            />
            <p className="font-bold italic pl-2 mb-1">ราคาเวร</p>
            <input
              className=" w-full bg-gray-50 text-gray-700 border rounded-lg py-3 px-4 mb-3 focus:outline-none focus:bg-white border-gray-300"
              type="text"
            />
            <button className="w-full bg-gradient-to-r from-cyan-600 to-cyan-400 text-white shadow-lg mt-2  p-3 rounded-lg mb-8">
              <span className="text-l text-center "> บันทึก </span>
            </button>
            <div className=" h-0.5 bg-gray-400 my-8"></div>
            <TableVain />
          </form>
          
          

          </div>
          
          
        </div>
      </div>
    </div>
  );
}
