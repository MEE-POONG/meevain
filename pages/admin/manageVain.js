import React from "react";
import ModalIconLogout from "../../components/modalIconLogout";
import ModalCreateGroup from "../../components/modalCreateGroup";
import Image from "next/image";
import ModalDeletepersonByGroup from "../../components/modalDeletepersonByGroup";
import Home from "../home";
import Status1 from '../../pages/Status1'

export default function ManageVain() {
  return (
    <div>
      <div className="py-2 px-5 w-full shadow-2xl bg-gradient-to-r from-cyan-600 to-cyan-300 text-white ">
        <div className="mx-auto max-w-lg">
          <div className="grid grid-cols-7 ">
            <div className="col-span-1 mt-1">
              <Image src="/images/userprofile-01.webp" width={40} height={40} />
            </div>
            <div className="col-span-3 mt-2 text-2xl font-bold text-black">
              บาส
            </div>
            <div
              className="col-span-1 place-self-center mr-4 font-bold float-right"
              type="button"
            >
         
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
            <div
              className="col-span-1 float-right mt-2 font-bold text-center"
              type="button"
            >
              <ModalIconLogout />
            </div>
          </div>
        </div>
      </div>

       
        <Status1/>
    </div>
  );
}
