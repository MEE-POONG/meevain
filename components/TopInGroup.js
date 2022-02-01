import React from "react";

import ModalDeletepersonByGroup from "./modalDeletepersonByGroup";
import Image from "next/image";
import Swal from "sweetalert2";
import {FaShareAlt} from 'react-icons/fa'
export default function TopInGroup() {
  const handleCreateLink = async (e) => {
    e.preventDefault();
    const LinkGroup = "https://www.facebook.com/watch/?v=462015502262754";
    const { value: link } = await Swal.fire({
      title: "เชิญผู้อื่นเข้าร่วมกลุ่ม",
      input: "text",
      inputLabel: "ลิงค์ของคุณ",
      inputValue: LinkGroup,
      showCancelButton: true,
      cancelButtonText:
    'ยกเลิก',
      confirmButtonText: "คัดลอก",
      inputValidator: (value) => {
        if (!value) {
          return "You need to write something!";
        }
      },
    });

    if (link) {
      // Swal.fire(`Your IP address is  ${ipAddress}`);
      Swal.fire({ icon: "success", title: `คัดลอกสำเร็จ` });
    }
  };
  return (
    <div className="py-2 px-5 w-full shadow-2xl bg-gradient-to-r from-cyan-600 to-cyan-300 text-white ">
      <div className="mx-auto max-w-lg">
        <div className="grid grid-cols-8 ">
          <div className="col-span-1 mt-1">
            <Image src="/images/userprofile-01.webp" width={40} height={40} />
          </div>
          <div className="col-span-5 px-2 mt-2 text-2xl  font-bold ">
            บาส
          </div>
          <button className="col-span-1 place-self-center mr-4 font-bold float-right text-black mt-2">
            <FaShareAlt size={32} type="button"
            onClick={handleCreateLink}/>
          </button>
          
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
