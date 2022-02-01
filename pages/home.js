import Image from "next/image";
import { MdOutlineCancel } from "react-icons/md";
import React from "react";
import { useRouter } from "next/router";

import ModalCreateGroup from "../components/ModalCreateGroup";
import Wahool from "../components/navbarwahoo";

export default function Home() {
  const [showModal, setShowModal] = React.useState(false);

  const router = useRouter();
  return (
    <div className="bg-sky-100 w-screen min-h-screen   ">
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
      <p className="py-7 font-bold text-2xl text-center text-neutral-focus  ">
        Group All
      </p>
      
      <div className="flex items-center justify-center px-4 sm:px-6 lg:px-8 ">
        <div className="max-w-md w-full space-y-8 ">
          <div
            className="rounded-2xl shadow-lg  btn-secondary"
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
              <div className="col-span-7 px-5 mt-2 text-xl font-bold text-white">
                Bazz  <div className="badge ml-2 badge-outline">12</div> 
              </div>
            
            </div>
          </div>
          <div
            className="rounded-2xl shadow-lg text-white btn-accent"
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
              <div className="col-span-7 px-5 mt-2 text-xl font-bold text-white">
                Jame   <div className="badge ml-2 badge-outline">15</div>
              </div>
            </div>
          </div>
          <div className="mt-5 bg-gradient-to-r bg-gray-300  h-0.5"></div>
          <button
            className="w-full btn-primary text-white shadow-lg  p-3 rounded-lg mt-5"
            type="button"
            onClick={() => setShowModal(true)}
          >
            <span className="text-xl text-center font-bold "> Join Group </span>
          </button>
        </div>
        
      </div>
      <Wahool/>
      {showModal ? (
        <div className="px-5 justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50  shadow-lg backdrop-filter backdrop-blur-md ">
          <div className="w-full text-gray-500 max-w-lg p-5 relative mx-auto my-auto rounded-xl shadow-lg  bg-white ">
            <MdOutlineCancel
              size={24}
              className="float-right cursor-pointer hover:shadow-2xl hover:scale-105 transform transition-all duration-500"
              type="button"
              onClick={() => setShowModal(false)}
            />
            <div className="text-center flex-auto justify-center mt-6  ">
              <h2 className="text-2xl text-center font-bold text-black">Join Group</h2>
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
    </div>
  );
}
