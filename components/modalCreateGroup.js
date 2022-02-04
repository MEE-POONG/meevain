import React, { useState } from "react";
import Image from "next/image";
import { MdOutlineCancel, MdContentCopy } from "react-icons/md";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/solid";
import { FaBlind, FaUserPlus } from "react-icons/fa";
import { useRouter } from "next/router";
import axios from "axios";
import Swal from "sweetalert2";
import { data } from "autoprefixer";
import colorNames from "daisyui/colors/colorNames";
// import InputColor from 'react-input-color';

const groupState = {
  name: "",
  color: "",
};

const red = "#FF0000";
const blue = "#ffff";

export default function ModalCreateGroup() {
  const [showModalCreateGroup, setShowModalCreateGroup] = useState();
  const [formCreateGroup, setFormCreateGroup] = useState(groupState);

  const { name } = formCreateGroup;
  // const setListGroup = useSetRecoilState(listGroupState);

  const router = useRouter();

  const setGroupData = async () => {
    try {
      await axios.post("/api/group", formCreateGroup);
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
    const validationError = validationGroup();
    if (validationError) return;
    const setDataError = await setGroupData();
    if (setDataError) return;

    // setFormCreateGroup(groupState);
    // console.log(formCreateGroup);

    await Swal.fire({
      icon: "success",
      title: "สร้างห้องสำเร็จ",
      showConfirmButton: false,
      timer: 2000,
    });
  };
  const validationGroup = () => {
    if (!name) {
      return Swal.fire({
        icon: "error",
        title: "กรอกข้อมูลไม่ครบ",
      });
    }
  };

  console.log(formCreateGroup);
  return (
    <div>
      <div className="">
        <FaUserPlus
          size={43}
          type="button"
          onClick={() => setShowModalCreateGroup(true)}
          className="text-blue-600 float-right"
        />
      </div>
      {showModalCreateGroup ? (
        <div className="px-5 justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50  shadow-lg backdrop-filter backdrop-blur-md ">
          <div className=" w-full max-w-lg p-4 relative mx-auto my-auto rounded-xl shadow-lg  bg-white ">
            <MdOutlineCancel
              size={24}
              className="float-right text-black cursor-pointer hover:shadow-2xl hover:scale-105 transform transition-all duration-500"
              type="button"
              onClick={() => setShowModalCreateGroup(false)}
            />

            <div className="text-center flex-auto justify-center mt-6">
              <h2 className="text-2xl text-center text-black font-bold ">
                Create Group{" "}
              </h2>
              <div className=" mt-4 mb-2">
                <Image
                  src="/images/userprofile-01.webp"
                  width={100}
                  height={100}
                />
              </div>
            </div>
            <div>
              <form className="" onSubmit={handelSubmit}>
                <div>
                  <input
                    className="w-full bg-gray-50 text-gray-700 border rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white border-gray-300"
                    type="text"
                    placeholder="Name Group"
                    onChange={(e) =>
                      setFormCreateGroup({
                        ...formCreateGroup,
                        name: e.target.value,
                      })
                    }
                    value={name}
                    id="name"
                  />

                  <Disclosure>
                    {({ open }) => (
                      <>
                        <Disclosure.Button className="flex justify-between px-4 py-2 text-sm font-medium text-left ">
                          <span>Group color</span>
                          <ChevronUpIcon
                            className={`${
                              open ? "transform rotate-180" : ""
                            } w-5 h-5 text-blue-500`}
                          />
                        </Disclosure.Button>

                        {/* <Disclosure.Panel className="px-4 pt-2 pb-2 ">
                          </Disclosure.Panel> */}
                           </>
                          )}
                  </Disclosure>
                        <select
                          className=" border shadow-lg rounded-lg  px-4 py-2 flex justify-between"
                          onChange={(e) =>
                            setFormCreateGroup({
                              ...formCreateGroup,
                              color: e.target.value,
                            })
                          }
                          id="color"
                        >
                          <option
                            className="bg-red-600 text-white shadow-lg rounded-full p-3 hover:ring "
                            value={red}
                          ></option>
                          <option
                            className="bg-yellow-600 text-white shadow-lg rounded-full p-3 hover:ring"
                            value={blue}
                          ></option>
                          <option className="bg-green-600 text-white shadow-lg rounded-full p-3 hover:ring"></option>
                          <option className="bg-blue-600 text-white shadow-lg rounded-full p-3 hover:ring"></option>
                          <option className="bg-sky-600 text-white shadow-lg rounded-full p-3 hover:ring"></option>
                          <option className="bg-cyan-600 text-white shadow-lg rounded-full p-3 hover:ring"></option>
                          <option className="bg-orange-600 text-white shadow-lg rounded-full p-3 hover:ring"></option>
                        </select>
                     
                    

                  <button
                    className="w-full bg-gradient-to-r from-cyan-600 to-cyan-400 text-white shadow-lg mt-2  p-3 rounded-lg"
                    type="submit"
                    onClick={() => {
                      router.push("/Status1");
                    }}
                  >
                    <span className="text-l text-center"> Create </span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      ) : null}{" "}
    </div>
  );
}
