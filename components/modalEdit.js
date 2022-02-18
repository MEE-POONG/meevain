import React from "react";
import { useEffect, useState } from "react";
import { MdOutlineCancel } from "react-icons/md";
import { HiOutlinePencilAlt } from "react-icons/hi";
import { useRecoilState, useRecoilValue } from "recoil";
import { memberState } from "../context/member";
import Swal from "sweetalert2";
import axios from "axios";
import { data } from "autoprefixer";

// const memberState = {

//   firstname: "",
//   lastname: "",
//   tel: "",
// };

export default function ModalEdit(data) {
  console.log(data);
  const [showModalEditProflie, setShowModalEditProflie] = useState();
  const [formedit, setFormEdit] = useRecoilState(memberState);

  // console.log(formedit);
  // const member = useRecoilValue(memberState);

  // const [isEdit, setIsEdit] = useState(false);
  // const { firstname, lastname, tel } = formedit;

  // useEffect(() => {
  //   // getMemberDataById(member._id);
  //   setFormEdit(member._id)

  // }, []);

  // const getMemberDataById = async (id) => {
  //   try {
  //     const { data } = await axios.get("/api/member-register" + id);
  //     setIsEdit(true);
  //     setFormEdit({
  //       _id: data.data._id,
  //       firstname: data.data.firstname,
  //       lastname: data.data.lastname,
  //       tel: data.data.tel,
  //     });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  // const setDataMember = async () => {
  //   try {
  //      (isEdit)
  //       await axios.put("/api/member-register" + member._id, formedit);

  //   } catch (error) {
  //     Swal.fire({
  //       icon: "error",
  //       title: "พังยับ",
  //       text: "พังอะครับพรี่ ติดต่อแอดมินด่วนๆ!",
  //     });
  //     return true;
  //   }
  // };
  // const validationMember = () => {
  //   if (!firstname || !lastname || !tel) {
  //     return Swal.fire({
  //       icon: "error",
  //       title: "กรุณากรอกข้อมูลไม่ครบ",
  //     });
  //   }
  // };
  // const handelSubmit = async (e) => {
  //   e.preventDefault();
  //   const validationError = validationMember();
  //   if (validationError) return;

  //   const setDataError = await setDataMember();
  //   if (setDataError) return;
  //   await Swal.fire({
  //     icon: "success",
  //     title: "เพิ่มข้อมูลสำเร็จ",
  //     showConfirmButton: false,
  //     timer: 2000,
  //   });

  //   await setDataMember();
  // };
  console.log();
  return (
    <div>
      <div>
        <div className="">
          <div className="mx-auto max-w-lg">
            <div className=" text-center">
              <div>
                <HiOutlinePencilAlt
                  size={40}
                  color=""
                  className=" ml-2 py-2 float-right"
                  type="button"
                  onClick={() => setShowModalEditProflie(true)}
                />
              </div>
            </div>
          </div>
          {showModalEditProflie ? (
            <div className="px-5 justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50  shadow-lg backdrop-filter backdrop-blur-md ">
              <div className="w-full  max-w-lg p-4 relative mx-auto my-auto rounded-xl shadow-lg  bg-white ">
                <MdOutlineCancel
                  size={24}
                  className="float-right cursor-pointer hover:shadow-2xl hover:scale-105 transform transition-all duration-500"
                  type="button"
                  onClick={() => setShowModalEditProflie(false)}
                />
                <div className="text-center flex-auto justify-center mt-6">
                  <h2 className="text-2xl text-center font-bold ">
                    แก้ไขข้อมูลส่วนตัว{" "}
                  </h2>
                  <form>
                    <div className=" grid grid-cols-2 m-5">
                      <div className=" row-span-1">
                        <p className="font-bold italic mt-2 text-left">
                          Firstname
                        </p>
                      </div>
                      <div className=" row-span-1">
                        <input
                          className="appearance-none block w-full bg-gray-50 text-gray-700 border rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white border-gray-300 "
                          type="text"
                          onChange={(e) =>
                            setFormEdit({
                              ...formedit,
                              firstname: e.target.value,
                            })
                          }
                          value={formedit.firstname}
                          id="firstname"
                          
                        />
                      </div>
                      
                      {/* {member.firstname} */}
                    </div>
                    <>
                      <div className=" grid grid-cols-2 m-5">
                        <div className=" row-span-1">
                          <p className="font-bold italic mt-2 text-left">   
                            Lastname
                          </p>
                        </div>

                        <div className=" row-span-1">
                          <input
                            className="appearance-none block w-full bg-gray-50 text-gray-700 border rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white border-gray-300 "
                            type="text"
                            onChange={(e) =>
                              setFormEdit({
                                ...formedit,
                                lastname: e.target.value,
                              })
                            }
                            value={formedit.lastname}
                            id="lastname"
                          />
                        </div>
                        {/* {member.lastname} */}
                      </div>
                      <div className=" grid grid-cols-2 m-5">
                        <div className=" row-span-1">
                          <p className="font-bold italic mt-2 text-left">Tel</p>
                        </div>
                        <div className=" row-span-1">
                          <input
                            className="appearance-none block w-full bg-gray-50 text-gray-700 border rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white border-gray-300 "
                            type="number"
                            onChange={(e) =>
                              setFormEdit({ ...formedit, tel: e.target.value })
                            }
                            value={formedit.tel}
                            id="tel"
                          />
                        </div>
                        {/* {member.tel} */}
                      </div>
                      <button
                        className="w-full bg-cyan-500   text-white shadow-lg  p-3 rounded-lg"
                        type="submit"
                      >
                        <span className=" text-center "> ยืนยัน </span>
                      </button>
                    </>
                  </form>
                </div>
              </div>
            </div>
          ) : null}{" "}
        </div>
      </div>
    </div>
  );
}
