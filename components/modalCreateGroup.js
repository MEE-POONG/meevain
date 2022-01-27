import React, { useState } from "react";
import Image from "next/image";
import { MdOutlineCancel } from "react-icons/md";

function ModalCreateGroup() {
  const [showModalCreateGroup, setShowModalCreateGroup] = useState();
  return (
    <div>
      <div className=" text-center">
        <button
          className="bg-gradient-to-r from-cyan-500 to-cyan-300  text-white shadow-lg  p-3 rounded-lg mt-5"
          type="button"
          onClick={() => setShowModalCreateGroup(true)}
        >
          <span className="text-xl text-center font-bold "> Join Group </span>
        </button>
      </div>
      {showModalCreateGroup ? (
        <div className="px-5 justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50  shadow-lg backdrop-filter backdrop-blur-md ">
          <div className="w-full  max-w-lg p-4 relative mx-auto my-auto rounded-xl shadow-lg  bg-white ">
            <MdOutlineCancel
              size={24}
              className="float-right cursor-pointer hover:shadow-2xl hover:scale-105 transform transition-all duration-500"
              type="button"
              onClick={() => setShowModalCreateGroup(false)}
            />
            <div className="text-center flex-auto justify-center mt-6">
              <h2 className="text-2xl text-center font-bold ">Create Group </h2>
              <div className=" mt-4 mb-2">
                <Image
                  src="/images/userprofile-01.webp"
                  width={100}
                  height={100}
                />
              </div>
            </div>
            <input
              className="w-full bg-gray-50 text-gray-700 border rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white border-gray-300"
              type="text"
              placeholder="Name Group"
            />
          </div>
        </div>
      ) : null}{" "}
    </div>
  );
}

export default ModalCreateGroup;
