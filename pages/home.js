import Image from "next/image";
import { MdOutlineCancel, MdVerified } from "react-icons/md";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

import ModalCreateGroup from "../components/ModalCreateGroup";
import Wahool from "../components/navbarwahoo";
import Swal from "sweetalert2";
import axios from "axios";
import { data } from "autoprefixer";
import { useRecoilValue } from "recoil";
import { listGroupState } from "../context/listgroup";
import Groups from "../components/groups";
import { useRecoilState } from "recoil";

const defaultGroupState = [];
export default function Home() {
  // const [showModal, setShowModal] = React.useState(false);
  // const [groupList, setGroupList] = useState(defaultGroupState);
  // const listGroup = useRecoilValue(listGroupState);
  // useEffect(() => {
  //   getGroupData();
  // }, []);

  // const getGroupData = async () => {
  //   try {
  //     const { data } = await axios.get("/api/group");
  //     setGroupList(data?.data);
  //     console.log(data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const handleShereLink = async (e) => {
    e.preventDefault();
    const { value: link } = await Swal.fire({
      title: "คุณต้องการเข้าร่วม ?",
      // input: "text",
      inputLabel: "ลิงค์ของคุณ",
      // inputValue: LinkGroup,
      showCancelButton: true,
      cancelButtonText: "ยกเลิก",
      confirmButtonText: "ขอเข้าร่วม",
    });

    if (link) {
      Swal.fire({ icon: "info", title: `รอการยืนยัน` });
    }
  };

  const router = useRouter();
  return (
    <div className="bg-sky-100 w-screen min-h-screen   ">
      <p className="py-7 font-bold text-2xl text-center text-neutral-focus  ">
        Group All
      </p>

      <div className="flex items-center justify-center px-4 sm:px-6 lg:px-8 ">
        <div className="max-w-md w-full space-y-8 ">
          <Groups/>
          <div className="mt-5 bg-gradient-to-r bg-gray-300  h-0.5"></div>
          <button
            className="w-full btn-primary text-white shadow-lg  p-3 rounded-lg mt-5"
            type="button"
            // onClick={getGroupData}
          >
            <span className="text-xl text-center font-bold ">{} Join Group </span>
          </button>
        </div>
      </div>
      <Wahool />
    </div>
  );
}
