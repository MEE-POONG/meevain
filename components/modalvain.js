import Image from "next/image";
import React, { useState } from "react";
import { FaUserPlus, FaUser } from "react-icons/fa";
import { MdOutlineCancel } from "react-icons/md";

export default function Modalvain() {
  const [showModalVain, setShowModalVain] = useState();
  return (
    <div>
      <div className="bg-sky-50 h-screen ">
        <div className="mx-auto max-w-lg">
          <div className=" text-center">
            <button
              className="bg-gradient-to-r from-cyan-500 to-cyan-300  text-white shadow-lg  p-3 rounded-lg mt-5"
              type="button"
              onClick={() => setShowModalVain(true)}
            >
              <span className="text-xl text-center font-bold ">
                {" "}
                Join Group{" "}
              </span>
            </button>
          </div>
        </div>
        {showModalVain ? (
          <div className="px-5 justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50  shadow-lg backdrop-filter backdrop-blur-md ">
            <div className="w-full  max-w-lg p-4 relative mx-auto my-auto rounded-xl shadow-lg  bg-white ">
              <MdOutlineCancel
                size={24}
                className="float-right cursor-pointer hover:shadow-2xl hover:scale-105 transform transition-all duration-500"
                type="button"
                onClick={() => setShowModalVain(false)}
              />
              <div className="text-center flex-auto justify-center mt-6">
                <h2 className="text-2xl text-center font-bold ">
                  วัน จันทร์ที่ 1 มกราคม{" "}
                </h2>

                <div className="grid grid-cols-6 mt-5 ">
                  <div className=" text-left  col-span-1">
                    <Image src="/images/emo.png" width={40} height={40} />
                  </div>

                  <div className=" col-span-5 text-left">
                    <p className="">บาส</p>

                    <p>08.00-16.00 น</p>
                    <p>เวร .......</p>
                    <p>
                      หน้าที่ Lorem Ipsum es simplemente el texto de relleno
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-6 mt-5 ">
                  <div className=" text-left  col-span-1">
                    <Image src="/images/emo.png" width={40} height={40} />
                  </div>

                  <div className=" col-span-5 text-left">
                    <p className="">บาส</p>

                    <p>08.00-16.00 น</p>
                    <p>เวร .......</p>
                    <p>
                      หน้าที่ Lorem Ipsum es simplemente el texto de relleno
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-6 mt-5 ">
                  <div className=" text-left  col-span-1">
                    <Image src="/images/emo.png" width={40} height={40} />
                  </div>

                  <div className=" col-span-5 text-left">
                    <p className="">บาส</p>

                    <p>08.00-16.00 น</p>
                    <p>เวร .......</p>
                    <p>
                      หน้าที่ Lorem Ipsum es simplemente el texto de relleno
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-6 mt-5 ">
                  <div className=" text-left  col-span-1">
                    <Image src="/images/emo.png" width={40} height={40} />
                  </div>

                  <div className=" col-span-5 text-left">
                    <p className="">บาส</p>

                    <p>08.00-16.00 น</p>
                    <p>เวร .......</p>
                    <p>
                      หน้าที่ Lorem Ipsum es simplemente el texto de relleno
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : null}{" "}
      </div>
    </div>
  );
}
