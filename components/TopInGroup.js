import React from "react";
import ModalCreateGroup from "./ModalCreateGroup";
import ModalDeletepersonByGroup from "./modalDeletepersonByGroup"
import Image from "next/image";
export default function TopInGroup() {
  return (
    <div className="py-2 px-5 w-full shadow-2xl bg-gradient-to-r from-cyan-600 to-cyan-300 text-white ">
    <div className="mx-auto max-w-lg">
      <div className="grid grid-cols-8 ">
        <div className="col-span-1 mt-1">
          <Image src="/images/userprofile-01.webp" width={40} height={40} />
        </div>
        <div className="col-span-5 px-2 mt-2 text-2xl text-black font-bold ">บาส</div>
        <div
          className="col-span-1 place-self-center mr-4 font-bold float-right"
          type="button"
        >
        SHARE LINK
        </div>
        <div
          className="col-span-1 place-self-center  flex justify-center  font-bold float-right"
          type="button"
        >
          <ModalDeletepersonByGroup />
          <div className=" mt-2 lg:ml-2 text-black">
            <span>100</span>{" "}
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}


