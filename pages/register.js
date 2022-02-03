import React from "react";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { BsCalendarCheck } from "react-icons/bs";
import { comparePassword } from "../utils/encrypt";
import axios from "axios";

const memberState = {
  username: "",
  password: "",
  firstname: "",
  lastname: "",
  tel: "",
  img: "",
};

export default function Register() {
  const [formRegister, setFormRegister] = useState(memberState);

  const { username, password, firstname, lastname, tel } = formRegister;

  const setMemberData = async () => {
    try {
      await axios.post("/api/member-register", formRegister);
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "พังยับ",
        text: "พังอะครับพรี่ ติดต่อแอดมินด่วนๆ!",
      });
      return true;
    }
  };

  const handelSubmit = async (e) => {
    e.preventDefault();
    const validationError = validationMember();
    if (validationError) return;
    const setDataError = await setMemberData();
    if (setDataError) return;

    setFormRegister(memberState);

    await Swal.fire({
      icon: "success",
      title: "เพิ่มข้อมูลสำเร็จ",
      showConfirmButton: false,
      timer: 2000,
    });
  };
  const validationMember = () => {
    if (!username || !password || !firstname || !lastname || !tel) {
      return Swal.fire({
        icon: "error",
        title: "กรุณากรอกข้อมูลไม่ครบ",
      });
    }
  };

  return (
    <div className=" bg-sky-50 min-h-screen pb-5 text-black">
      <div className=" mx-auto max-w-lg ">
        <div className=" text-center py-2 text-blue-600 text-2xl font-bold italic flex justify-center">
          <div className="text-blue-600 bg-white shadow-xl p-2 rounded-xl m-2">
            <BsCalendarCheck size={50} />
          </div>
          <span className=" mt-6 text-shadow-lg ">Register</span>
        </div>

        <form className=" mx-4" onSubmit={handelSubmit}>
          <p className="font-bold italic pl-2 mb-1">Firstname</p>
          <input
            className="appearance-none block w-full bg-gray-50 text-gray-700 border rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white border-gray-300 "
            type="text"
            onChange={(e) =>
              setFormRegister({ ...formRegister, firstname: e.target.value })
            }
            value={firstname}
            id="firstname"
          />
          <p className="font-bold italic pl-2 mb-1">Lastname</p>
          <input
            className="appearance-none block w-full bg-gray-50 text-gray-700 border rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white border-gray-300"
            type="text"
            onChange={(e) =>
              setFormRegister({ ...formRegister, lastname: e.target.value })
            }
            value={lastname}
            id="lastname"
          />

          <p className="font-bold italic pl-2 mb-1">Tel</p>
          <input
            className="appearance-none block w-full bg-gray-50 text-gray-700 border rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white border-gray-300"
            type="number"
            onChange={(e) =>
              setFormRegister({ ...formRegister, tel: e.target.value })
            }
            value={tel}
            id="tel"
          />
          <p className="font-bold italic pl-2 mb-1">UserName</p>
          <input
            className="appearance-none block w-full bg-gray-50 text-gray-700 border rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white border-gray-300"
            type="text"
            onChange={(e) =>
              setFormRegister({ ...formRegister, username: e.target.value })
            }
            value={username}
            id="username"
          />
          <p className="font-bold italic pl-2 mb-1">Password</p>
          <input
            className="appearance-none block w-full bg-gray-50 text-gray-700 border rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white border-gray-300"
            type="password"
            onChange={(e) =>
              setFormRegister({ ...formRegister, password: e.target.value })
            }
            value={password}
            id="password"
          />
          {/* <div className="flex items-center justify-center w-full py-5 ">
              <label className="flex flex-col rounded-lg border-4 border-dashed w-full h-60 p-10 group text-center">
                <div className="h-full w-full text-center flex flex-col items-center justify-center  ">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-blue-400 group-hover:text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                  </svg>
                  <div className="flex flex-auto max-h-48 w-2/5 mx-auto -mt-10">
                    <img className="has-mask h-36 object-center" src={showImage()}/>
                  </div>
                  <p className="pointer-none text-gray-500 "><span className="text-sm">เลือกไฟล์</span></p>
                </div>
                <input
                  type="file"
                  className="hidden"
                  onChange={handelSubmitFile}
                  id="img"
                  name="img"
                />
              </label>
            </div> */}
          <button
            className="w-full bg-gradient-to-r from-cyan-600 to-cyan-400 text-white shadow-lg mt-2  p-3 rounded-lg"
            type="submit"
          >
            <span className="text-l text-center "> Submit </span>
          </button>

          <div className=" text-center m-2">
            <span className=" text-blue-700 text-center" type="button">
              Already have an account sign in ?
            </span>
            {/* <TestData data={memberList} /> */}
          </div>
        </form>
      </div>
    </div>
  );
}
