import React from "react";
import Image from "next/image";
// import { FaUserPlus, FaUser } from "react-icons/fa";
// import NavbarAdmin from "../../components/NavbarAdmin";
// import { HiOutlineDotsVertical } from "react-icons/hi";
import ModalIconLogout from "../../components/modalIconLogout";
import { useRouter } from "next/router";
import { MdOutlineCancel } from "react-icons/md";
import ModalCreateGroup from "../../components/modalCreateGroup";

function HomeAd() {
  
  const router = useRouter();
  return (
    <div className="">
      <div>
        <div className="py-2 px-5 w-full shadow-2xl bg-gradient-to-r from-cyan-600 to-cyan-300 text-white ">
          <div className="mx-auto max-w-lg">
            <div className="grid grid-cols-7 ">
              <div className="col-span-1 mt-1">
                <Image
                  src="/images/userprofile-01.webp"
                  width={40}
                  height={40}
                />
              </div>
              <div className="col-span-4 px-2 mt-2 text-2xl font-bold text-black">
                บาส
              </div>
              <div
                className="col-span-1 mt-2  font-bold float-right"
                type="button"
              >
                <ModalCreateGroup/>
                
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
        <p className="py-7 font-bold text-2xl text-center text-shadow-xl">
          Group
        </p>
        <div className="flex items-center justify-center px-4 sm:px-6 lg:px-8 ">
          <div className="max-w-md w-full space-y-8 ">
            <div
              className="rounded-2xl shadow-lg bg-green-200"
              type="button"
              onClick={() => {
                router.push("");
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
                router.push("");
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
          </div>
        </div>
      </div>


      {/* <NavbarAdmin /> */}
    </div>
  );
}

export default HomeAd;
