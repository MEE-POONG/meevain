import React from "react";
import Image from "next/image";
import { FaUserPlus, FaUser } from "react-icons/fa";
import { MdGroupAdd, MdOutlineCancel } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";
import ModalCreateGroup from "../components/ModalCreateGroup";

export default function TopSimple() {
  const [showModaladd, setShowModaladd] = React.useState(false);
  const [showModaluser, setShowModaluser] = React.useState(false);
  return (
    <div className="py-2 px-5 w-full shadow-2xl text-blue-600 bg-white  ">
        <div className="mx-auto max-w-lg">
          <div className="grid grid-cols-8 ">
            <div className="col-span-1 mt-1">
            <Image src="/images/logo.png" width={50} height={50} />
            </div>
            <div className="col-span-6 px-2 self-center text-xl text-black  font-bold ">MeeDuty</div>
           <div className=""><ModalCreateGroup /></div> 
          </div>
        </div>
      </div>
  );
}
