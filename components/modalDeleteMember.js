import React, { useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";

export default function ModalDeleteMember() {
  const [showModalDeleteMember, setShowModalDeleMember] = useState();
  

  return (
    <div>
      <div>
        <RiDeleteBin6Line
          type="button"
          onClick={() => setShowModalDeleMember(true)}
        />
      </div>
      {showModalDeleteMember ? (
        <div className="px-5 justify-center items-center flex fixed inset-0 z-50  shadow-lg backdrop-filter backdrop-blur-md ">
          <div className=" max-w-lg  p-4 relative mx-auto my-auto rounded-xl shadow-lg  bg-white ">
            <div className="mt-6">
              <h2 className=" text-center text-black font-bold text-xl ">
                ต้องการลบข้อมูลใช่หรือไม่{" "}
              </h2>
            </div>
            <div className=" flex justify-between px-8 mt-6 space-x-4 ">
              <div className=" ">
                <button
                  className=" border-2 px-8 bg-blue-400 text-white shadow-lg h-12 rounded-lg "
                  type="submit"
                  onClick={() => setShowModalDeleMember(false)}
                >
                  <span className="text-xs text-center font-bold ">ใช่ </span>
                </button>
              </div>
              <div className="  ">
                <button className=" border-2 px-6 bg-green-400 text-white shadow-lg h-12 rounded-lg "
                onClick={() => setShowModalDeleMember(false)}>
                  <span className="text-xs text-center font-bold ">
                    {" "}
                    ไม่ใช่{" "}
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : null}{" "}
    </div>
  );
}
