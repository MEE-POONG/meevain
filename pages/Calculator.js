import React from "react";
import Navbar from "../components/Navbar";
import Top from "../components/top";

function Calculator() {
  return (
    <div className="bg-sky-100 h-screen ">
      <Top />
      <div className="w-screen  mt-2 text-center px-5 min-h-lg ">
        <div className="text-2xl font-bold mt-6 mb-4">สรุปรายได้ประจำเดือน</div>
        <div className="gap-5 bg-white rounded-lg shadow-lg p-4  ">
          <div className="grid grid-cols-3  text-md overflow-auto">
            <div className=" col-span-1 font-bold space-y-4">ชื่อเวร</div>
            <div className=" col-span-1 font-bold space-y-4">ราคาเวรละ</div>
            <div className="col-span-1 font-bold space-y-4">จำนวนวัน</div>
          </div>

          <div className="grid grid-cols-3  text-md mt-2 gap-2 overflow-y-auto h-52 ">
            <div className="text-sm col-span-1 font-bold space-y-4">
              เวรเช้า
            </div>
            <div className="text-sm  col-span-1 font-bold space-y-4">500</div>
            <div className="text-sm  col-span-1 font-bold space-y-4">10</div>
          </div>
          <div className="h-0.5 m-5 bg-gray-300"></div>
          <div className="text-md font-bold">
            {" "}
            รายได้ประจำเดือน มกราคม เท่ากับ 11,500 บาท
          </div>
        </div>
      </div>
      <Navbar />
    </div>
  );
}

export default Calculator;
