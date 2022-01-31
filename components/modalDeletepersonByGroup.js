import React, { useState } from "react";
import { FaUser } from "react-icons/fa";
import { MdOutlineCancel } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";
import Image from "next/image";
import ModalDeleteMember from "./modalDeleteMember";

export default function ModalDeletepersonByGroup() {
  const [showModalDelete, setShowModalDelete] = useState();
  return (
    <div>
      <div className=" text-black ">
        <FaUser
          size={34}
          type="button"
          onClick={() => setShowModalDelete(true)}
          className="float-right mt-1"
        />
      </div>
      {/* <span>100</span> */}
      {showModalDelete ? (
        <div className="px-5 justify-center items-center flex  fixed inset-0 z-50  shadow-lg backdrop-filter backdrop-blur-md ">
          <div className="w-full  max-w-lg p-4 relative mx-auto my-auto rounded-xl shadow-lg  bg-white ">
            <MdOutlineCancel
              size={24}
              className="float-right text-black cursor-pointer hover:shadow-2xl hover:scale-105 transform transition-all duration-500 "
              type="button"
              onClick={() => setShowModalDelete(false)}
            />
            <div className="mt-6">
              <h2 className="text-2xl text-center text-black font-bold ">
                Member{" "}
              </h2>
              <div className=" grid grid-cols-4 text-black overflow-y-auto h-52">
                <div className=" ">
                  <Image
                    src="/images/userprofile-01.webp"
                    width={50}
                    height={50}
                  />
                </div>
                <div className=" col-span-2 self-center ">
                  <p>bazz</p>
                </div>
                <div className="self-center justify-self-end mx-2">
                  <ModalDeleteMember/>
                </div>
                <div className="">
                  <Image
                    src="/images/userprofile-01.webp"
                    width={50}
                    height={50}
                  />
                </div>
                <div className=" col-span-2 self-center">
                  <p>bazz</p>
                </div>
                <div className="self-center justify-self-end mx-2">
                  <ModalDeleteMember/>
                </div>
                <div className="">
                  <Image
                    src="/images/userprofile-01.webp"
                    width={50}
                    height={50}
                  />
                </div>
                <div className=" col-span-2 self-center">
                  <p>bazz</p>
                </div>
                <div className="self-center justify-self-end mx-2">
                  <ModalDeleteMember/>
                </div>
                <div className="">
                  <Image
                    src="/images/userprofile-01.webp"
                    width={50}
                    height={50}
                  />
                </div>
                <div className=" col-span-2 self-center">
                  <p>bazz</p>
                </div>
                <div className="self-center justify-self-end mx-2">
                  <ModalDeleteMember/>
                </div>
                <div className="">
                  <Image
                    src="/images/userprofile-01.webp"
                    width={50}
                    height={50}
                  />
                </div>
                <div className=" col-span-2 self-center">
                  <p>bazz</p>
                </div>
                <div className="self-center justify-self-end mx-2">
                  <ModalDeleteMember/>
                </div>
                <div className="">
                  <Image
                    src="/images/userprofile-01.webp"
                    width={50}
                    height={50}
                  />
                </div>
                <div className=" col-span-2 self-center">
                  <p>bazz</p>
                </div>
                <div className="self-center justify-self-end mx-2">
                  <ModalDeleteMember/>
                </div>
                <div className="">
                  <Image
                    src="/images/userprofile-01.webp"
                    width={50}
                    height={50}
                  />
                </div>
                <div className=" col-span-2 self-center">
                  <p>bazz</p>
                </div>
                <div className="self-center justify-self-end mx-2">
                  <ModalDeleteMember/>
                </div>
                <div className="">
                  <Image
                    src="/images/userprofile-01.webp"
                    width={50}
                    height={50}
                  />
                </div>
                <div className=" col-span-2 self-center">
                  <p>bazz</p>
                </div>
                <div className="self-center justify-self-end mx-2">
                  <ModalDeleteMember/>
                </div>
                <div className="">
                  <Image
                    src="/images/userprofile-01.webp"
                    width={50}
                    height={50}
                  />
                </div>
                <div className=" col-span-2 self-center">
                  <p>bazz</p>
                </div>
                <div className="self-center justify-self-end mx-2">
                  <ModalDeleteMember/>
                </div>
                <div className="">
                  <Image
                    src="/images/userprofile-01.webp"
                    width={50}
                    height={50}
                  />
                </div>
                <div className=" col-span-2 self-center">
                  <p>bazz</p>
                </div>
                <div className="self-center justify-self-end mx-2">
                  <ModalDeleteMember/>
                </div>
                <div className="">
                  <Image
                    src="/images/userprofile-01.webp"
                    width={50}
                    height={50}
                  />
                </div>
                <div className=" col-span-2 self-center">
                  <p>bazz</p>
                </div>
                <div className="self-center justify-self-end mx-2">
                  <ModalDeleteMember/>
                </div>
                <div className="">
                  <Image
                    src="/images/userprofile-01.webp"
                    width={50}
                    height={50}
                  />
                </div>
                <div className=" col-span-2 self-center">
                  <p>bazz</p>
                </div>
                <div className="self-center justify-self-end mx-2">
                  <ModalDeleteMember/>
                </div>
                <div className="">
                  <Image
                    src="/images/userprofile-01.webp"
                    width={50}
                    height={50}
                  />
                </div>
                <div className=" col-span-2 self-center">
                  <p>bazz</p>
                </div>
                <div className="self-center justify-self-end mx-2">
                  <ModalDeleteMember/>
                </div>
                <div className="">
                  <Image
                    src="/images/userprofile-01.webp"
                    width={50}
                    height={50}
                  />
                </div>
                <div className=" col-span-2 self-center">
                  <p>bazz</p>
                </div>
                <div className="self-center justify-self-end mx-2">
                  <ModalDeleteMember/>
                </div>
                <div className="">
                  <Image
                    src="/images/userprofile-01.webp"
                    width={50}
                    height={50}
                  />
                </div>
                <div className=" col-span-2 self-center">
                  <p>bazz</p>
                </div>
                <div className="self-center justify-self-end mx-2">
                  <ModalDeleteMember/>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      ) : null}{" "}
    </div>
  );
}
