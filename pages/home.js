import Image from "next/image";
import { MdOutlineCancel } from "react-icons/md";
import React from "react";
import { useRouter } from "next/router";
import Navbar from "../components/Navbar";
import Top from "../components/top";

export default function Home() {
  const [showModal, setShowModal] = React.useState(false);
  const router = useRouter();
  return (
    <div className="bg-sky-100 min-h-screen ">
      <Top />
      <p className="py-7 font-bold text-2xl text-center text-shadow-xl">
        Group All
      </p>
      <div className="flex items-center justify-center px-4 sm:px-6 lg:px-8 ">
        <div className="max-w-md w-full space-y-8 ">
          <div
            className="rounded-2xl shadow-lg bg-green-200"
            type="button"
            onClick={() => {
              router.push("/Status1");
            }}
          >
            <div className="grid grid-cols-8 px-3 py-3">
              <Image
                src="/images/userprofile-01.webp"
                alt=""
                width={50}
                height={50}
                className="mt-3"
              />
              <div className="col-span-7 px-5 mt-2 text-xl font-bold text-black">
                Bazz
              </div>
            </div>
          </div>
          <div
            className="rounded-2xl shadow-lg text-white bg-cyan-200"
            type="button"
            onClick={() => {
              router.push("/Status1");
            }}
          >
            <div className="grid grid-cols-8 px-3 py-3">
              <Image
                src="/images/userprofile-01.webp"
                alt=""
                width={50}
                height={50}
                className="mt-3"
              />
              <div className="col-span-7 px-5 mt-2 text-xl font-bold text-black">
                Jame
              </div>
            </div>
          </div>
          <div className="mt-5 bg-gradient-to-r bg-gray-300  h-0.5"></div>
          <button
            className="w-full bg-gradient-to-r from-cyan-500 to-cyan-300  text-white shadow-lg  p-3 rounded-lg mt-5"
            type="button"
            onClick={() => setShowModal(true)}
          >
            <span className="text-xl text-center font-bold "> Join Group </span>
          </button>
        </div>
      </div>
      {showModal ? (
        <div className="px-5 justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50  shadow-lg backdrop-filter backdrop-blur-md ">
          <div className="w-full  max-w-lg p-5 relative mx-auto my-auto rounded-xl shadow-lg  bg-white ">
            <MdOutlineCancel
              size={24}
              className="float-right cursor-pointer hover:shadow-2xl hover:scale-105 transform transition-all duration-500"
              type="button"
              onClick={() => setShowModal(false)}
            />
            <div className="text-center flex-auto justify-center mt-6">
              <h2 className="text-2xl text-center font-bold ">Join Group</h2>
              <div className="py-5">
                <input
                  className="appearance-none block text-center w-full bg-gray-50 text-gray-700 border rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white border-gray-300"
                  type="text"
                  placeholder="Link Group"
                />
              </div>
              <button className="w-full bg-gradient-to-r from-cyan-500 to-cyan-300  text-white shadow-lg h-12 rounded-lg ">
                <span className="text-xl text-center font-bold ">
                  {" "}
                  Join now{" "}
                </span>
              </button>
            </div>
          </div>
        </div>
      ) : null}{" "}
      <Navbar />
    </div>
  );
}
