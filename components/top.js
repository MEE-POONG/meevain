import React from "react";
import Image from "next/image";
import { FaUserPlus, FaUser } from "react-icons/fa";
import { MdGroupAdd, MdOutlineCancel } from "react-icons/md";

export default function Top() {
  const [showModaladd, setShowModaladd] = React.useState(false);
  const [showModaluser, setShowModaluser] = React.useState(false);
  return (
    <div className="">
      {" "}
      {/*bg-sky-50 h-screen  */}
      <div className="py-2 px-5 w-full shadow-2xl bg-gradient-to-r from-cyan-600 to-cyan-300 text-white ">
        <div className="mx-auto max-w-lg">
          <div className="grid grid-cols-8 ">
            <div className="col-span-1 mt-1">
            <Image src="/images/userprofile-01.webp" width={40} height={40} />
            </div>
            <div className="col-span-4 px-2 mt-2 text-2xl font-bold text-black">
              บาส
            </div>
            <div
              className="col-span-1 mt-2 font-bold float-right"
              type="button"
              onClick={() => setShowModaladd(true)}
            >
              <FaUserPlus size={36} color="black" className="float-right" />
            </div>
            <div
              className="col-span-1 float-right mt-3 font-bold text-center"
              type="button"
              onClick={() => setShowModaluser(true)}
            >
              <FaUser size={29} color="black" className="float-right" />
            </div>
            <div className="col-span-1 mt-3 font-bold text-2xl text-black">
              100
            </div>
          </div>
        </div>
      </div>
      {showModaladd ? (
        <div className="px-5 justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50  shadow-lg backdrop-filter backdrop-blur-md ">
          <div className="w-full  max-w-lg p-5 relative mx-auto my-auto rounded-xl shadow-lg  bg-white ">
            <MdOutlineCancel
              size={24}
              className="float-right cursor-pointer hover:shadow-2xl hover:scale-105 transform transition-all duration-500"
              type="button"
              onClick={() => setShowModaladd(false)}
            />
            <div className="text-center flex-auto justify-center mt-6">
              <h2 className="text-2xl text-center font-bold ">Share Group</h2>
              <div className="py-5">
                <input
                  className="appearance-none block text-center w-full bg-gray-50 text-gray-700 border rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white border-gray-300"
                  type="text"
                  placeholder="Link Group"
                />
              </div>
            </div>
          </div>
        </div>
      ) : null}{" "}
      {showModaluser ? (
        <div className="px-5 justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50  shadow-lg backdrop-filter backdrop-blur-md ">
          <div className="w-full  max-w-lg p-5 relative mx-auto my-auto rounded-xl shadow-lg  bg-white ">
            <MdOutlineCancel
              size={24}
              className="float-right cursor-pointer hover:shadow-2xl hover:scale-105 transform transition-all duration-500"
              type="button"
              onClick={() => setShowModaluser(false)}
            />
            <div className="text-center flex-auto justify-center mt-6">
              <h2 className="text-2xl text-center font-bold ">Member</h2>
              <div className="grid grid-cols-8 mt-5">
                <div className="col-span-1 text-left">
                  <Image src="/images/userprofile-01.webp" width={40} height={40} />
                </div>
                <h2 className="col-span-4 mt-1 text-xl font-bold ">Member</h2>
              </div>
              <div className="grid grid-cols-8 mt-3">
                <div className="col-span-1 text-left">
                <Image src="/images/userprofile-01.webp" width={40} height={40} />
                </div>
                <h2 className="col-span-4 mt-1 text-xl font-bold ">Member</h2>
              </div>
              <div className="grid grid-cols-8 mt-3">
                <div className="col-span-1 text-left">
                <Image src="/images/userprofile-01.webp" width={40} height={40} />
                </div>
                <h2 className="col-span-4 mt-1 text-xl font-bold ">Member</h2>
              </div>
              <div className="grid grid-cols-8 mt-3">
                <div className="col-span-1 text-left">
                <Image src="/images/userprofile-01.webp" width={40} height={40} />
                </div>
                <h2 className="col-span-4 mt-1 text-xl font-bold ">Member</h2>
              </div>
            </div>
          </div>
        </div>
      ) : null}{" "}
    </div>
  );
}
