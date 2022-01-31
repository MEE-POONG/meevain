import React from "react";
import ModalCreateGroup from "../components/ModalCreateGroup";
import Image from "next/image";

function Calculator() {
  return (
    <div className="bg-sky-100 min-h-screen ">
 <div className="py-2 px-5 w-full shadow-2xl bg-primary text-white ">
        <div className="mx-auto max-w-lg">
          <div className="grid grid-cols-8 ">
            <div className="col-span-1 mt-1">
              <Image src="/images/userprofile-01.webp" width={40} height={40} />
            </div>
            <div className="col-span-6 px-2 mt-2 text-2xl  font-bold ">บาส</div>
            <ModalCreateGroup />
          </div>
        </div>
      </div>
      <div className="w-screen  mt-2 text-center px-5 min-h-lg  text-black ">
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

    </div>
  );
}

export default Calculator;
