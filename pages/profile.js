import React from "react";

import Image from "next/image";
import { FiLogIn } from "react-icons/fi";
import { useRecoilValue } from "recoil";
import { memberState } from "../context/member";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useState } from "react";
import Swal from "sweetalert2";
import axios from "axios";

import TopSimple from "../components/topSimple";

import Modaleditproflie from "../components/modaleditproflie";
import Wahool from "../components/navbarwahoo";
const defaultMemberState = [];
export default function Profile() {
  const member = useRecoilValue(memberState);
  const router = useRouter();
  const [memberData, setMemberData] = useState(defaultMemberState);
  useEffect(() => {
    getMemberData();
  }, []);
  const getMemberData = async () => {
    try {
      const { data } = await axios.get("/api/member-register/");
      setMemberData(data?.data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (!member) {
      router.push("/login");
    }
  }, [member]);
  return (
    <div className="bg-sky-100 min-h-screen ">
      <TopSimple />
      {memberData?.map((memberData) => (
        <div key={memberData._id} className=" mx-auto max-w-lg text-black  ">
          <div className=" flex justify-center mx-auto  w-2/5 mt-10  ">
            <Image
              src="/images/userprofile-01.webp"
              width={80}
              height={80}
              className="rounded-full z-0 inline-block border-2 border-gray-500"
            />
          </div>
          <div className="text-center mt-2">บาสน้อยหอยสัง</div>
          <Modaleditproflie />

          <div className="mt-10 m-6 mb-8">
            <div className="grid grid-cols-2">
              <p className="col-span-1 font-bold italic pl-2 py-3">Firstname</p>
              {/* <p className="col-span-1 font-bold italic pl-2 py-3">{memberData.firstname}</p> */}
            </div>
            <div className=" h-0.5 bg-gray-400"></div>
            <div className="grid grid-cols-2">
              <p className="col-span-1 font-bold italic pl-2 py-3">Lastname</p>
              {/* <p className="col-span-1 font-bold italic pl-2 py-3">{memberData.lastname}</p> */}
            </div>
            <div className=" h-0.5 bg-gray-400"></div>
            <div className="grid grid-cols-2">
              <p className="col-span-1 font-bold italic pl-2 py-3">Nickname</p>
              <p className="col-span-1 font-bold italic pl-2 py-3">หมาเจม</p>
            </div>
            <div className=" h-0.5 bg-gray-400"></div>
            <div className="grid grid-cols-2">
              <p className="col-span-1 font-bold italic pl-2 py-3">Tel</p>
              <p className="col-span-1 font-bold italic pl-2 py-3">
                1234667989
              </p>
            </div>
            <div className=" h-0.5 bg-gray-400"></div>
            <div className="grid grid-cols-2">
              <p className="col-span-1 font-bold italic pl-2 py-3">Position</p>
              <p className="col-span-1 font-bold italic pl-2 py-3">manager</p>
            </div>
            <div className=" h-0.5 bg-gray-400"></div>
            <button
              className=" flex py-3"
              onClick={() => {
                window.localStorage.clear();
                window.location.reload();
              }}
            >
              <FiLogIn size={25} />
              <span className=" text-center px-2 "> Sign out </span>
            </button>
            <div className=" h-0.5 bg-gray-400"></div>
          </div>
        </div>
      ))}
      <Wahool />
    </div>
  );
}
