import React, { useState } from "react";
import Calendar from "react-calendar";
import Navbar from "../components/Navbar";
import Top from "../components/top";
import { MdOutlineCancel } from "react-icons/md";
import Image from "next/image";

function Calender() {
  const [showModalVain, setShowModalVain] = useState();
  const [value, onChange, onClickDay] = useState(new Date());
  return (
    <div className="bg-sky-100 min-h-screen ">
      <Top />

      <div className="flex justify-center h-full   ">
        <Calendar
          onChange={onChange}
          value={value}
          onClickDay={() => setShowModalVain(true)}
        />
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
                    <Image
                      src="/images/userprofile-01.webp"
                      width={40}
                      height={40}
                    />
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
                    <Image
                      src="/images/userprofile-01.webp"
                      width={40}
                      height={40}
                    />
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
                    <Image
                      src="/images/userprofile-01.webp"
                      width={40}
                      height={40}
                    />
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
                    <Image
                      src="/images/userprofile-01.webp"
                      width={40}
                      height={40}
                    />
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
      {/* <Navbar /> */}
    </div>
  );
}

export default Calender;
