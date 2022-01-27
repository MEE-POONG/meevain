import React from "react";
import ModalIconLogout from "../../components/modalIconLogout";
import ModalCreateGroup from "../../components/modalCreateGroup";
import Image from "next/image";
import ModalDeletepersonByGroup from "../../components/modalDeletepersonByGroup";

export default function ManageVain() {
  return (
    <div>
      <div className="py-2 px-5 w-full shadow-2xl bg-gradient-to-r from-cyan-600 to-cyan-300 text-white ">
        <div className="mx-auto max-w-lg">
          <div className="grid grid-cols-7 ">
            <div className="col-span-1 mt-1">
              <Image src="/images/userprofile-01.webp" width={40} height={40} />
            </div>
            <div className="col-span-3 px-2 mt-2 text-2xl font-bold text-black">
              บาส
            </div>
            <div
              className="col-span-1 mt-2  font-bold float-right"
              type="button"
            >
              <ModalCreateGroup />
              {/* <FaUserPlus size={36} color="black" className="float-right" /> */}
            </div>
            <div
              className="col-span-1 mt-2  font-bold float-right"
              type="button"
            >
              <ModalDeletepersonByGroup />

              {/* <FaUserPlus size={36} color="black" className="float-right" /> */}
            </div>
            <div
              className="col-span-1 float-right mt-2 font-bold text-center"
              type="button"
            >
              <ModalIconLogout />
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
}
