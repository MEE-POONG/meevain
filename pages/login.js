import React from "react";
import Image from "next/image";
import {memberState} from "../context/member";
import { swalClose, swalError } from "../utils/alert";
import Swal from "sweetalert2";
import { useRecoilState } from "recoil";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from "axios";

const loginState = {
  username: "",
  password: "",
};

export default function Login() {
  const [formMember, setFormMember] = useState(loginState);
  const [member, setMember] = useRecoilState(memberState);
  const router = useRouter();
  console.log(formMember);

  useEffect(() => {
    swalClose();
    window.localStorage.clear();
  }, []);
  

  return (
    <div className="bg-sky-50 min-h-screen">
      <div className="flex items-center justify-center px-4 sm:px-6 lg:px-8 ">
        <div className="max-w-md w-full space-y-8 ">
          <div className=" text-center py-8 text-blue-600 text-2xl font-bold italic flex justify-center">
            <Image src="/images/logo.png" width={50} height={50} />
            <span className=" mt-3 px-5 text-3xl">Mee Vain</span>
          </div>

          <form
            className=""
            onSubmit={(e) => {
              e.preventDefault();

              let config = {
                method: "post",
                url: "/api/login",

                data: formMember,
              };
              axios(config)
                .then((response) => {
                  setMember(response?.data?.data);
                  // console.log(response?.data?.data);
                  setFormMember("");
                  router.push("/");
                })
                
                .catch((error) => {
                  setFormMember("");
                  swalError(error?.response?.data?.messages);
                });
            }}
          >
            <p className="font-bold text-black mb-1">Username</p>
            <input
              className="appearance-none block w-full bg-gray-50 text-gray-700 border rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white border-gray-300 "
              type="text"
              name="username"
              id=""
              placeholder="Username"
              aria-label="Username"
              // placeholder="Username"
              value={formMember.username}
              onChange={(e) => {
                setFormMember({ ...formMember, username: e.target.value });
              }}
            />
            <p className="font-bold italic text-black mb-1">Password</p>
            <input
              className="appearance-none block w-full bg-gray-50 text-gray-700 border rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white border-gray-300"
              type="password"
              name="user-password"
              placeholder="Password"
              aria-label="Password"
              // placeholder="Password"
              // placeholder="Username"
              value={formMember.password}
              onChange={(e) => {
                setFormMember({ ...formMember, password: e.target.value });
              }}
            />
            <div className="flex items-center justify-between">
              <div className="flex items-center"></div>

              <div className="text-sm py-5 m-2">
                <button
                  className="font-bold text-indigo-600 hover:text-indigo-500"
                  type="button"
                  onClick={() => {
                    router.push("/register");
                  }}
                >
                  Register Now
                </button>
              </div>
            </div>

            <button
              className="w-full bg-gradient-to-r from-cyan-600 to-cyan-400 text-white shadow-lg  p-3 rounded-lg"
              type="submit"
              value="submit"
              name="submit"
            >
              <span className="text-l text-center "> Login </span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
