import React from "react";

export default function Testmodal() {
  return (
    <div>
      <form>
      <div className=" grid grid-cols-2 m-5">
                  <div className=" row-span-1">
                    <p className="font-bold italic mt-2 text-left">
                      ชื่อ - นามสกุล
                    </p>
                  </div>
                  <div className=" row-span-1">
                    <input
                      className="appearance-none block w-full bg-gray-50 text-gray-700 border rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white border-gray-300 "
                      type="text"
                      // onChange={(e) =>
                      //   setFormMenu({
                      //     ...formeditMember,
                      //     firstname: e.target.value,
                      //   })
                      // }
                      // value={firstname}
                      // id="firstname"
                    />
                  </div>
                </div>
                <div className=" grid grid-cols-2 m-5">
                  <div className=" row-span-1">
                    <p className="font-bold italic mt-2 text-left">ตำแหน่ง</p>
                  </div>
                  <div className=" row-span-1">
                    <input
                      className="appearance-none block w-full bg-gray-50 text-gray-700 border rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white border-gray-300 "
                      type="text"
                      // onChange={(e) =>
                      //   setFormMenu({
                      //     ...formeditMember,
                      //     lastname: e.target.value,
                      //   })
                      // }
                      // value={lastname}
                      // id="lastname"
                    />
                  </div>
                </div>

                <div className=" grid grid-cols-2 m-5">
                  <div className=" row-span-1">
                    <p className="font-bold italic mt-2 text-left">โทรศัพท์</p>
                  </div>
                  <div className=" row-span-1">
                    <input
                      className="appearance-none block w-full bg-gray-50 text-gray-700 border rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white border-gray-300 "
                      type="text"
                      // onChange={(e) =>
                      //   setFormMenu({
                      //     ...formeditMember,
                      //     tel: e.target.value,
                      //   })
                      // }
                      // value={tel}
                      // id="tel"
                    />
                  </div>
                </div>
                <button className="w-full bg-cyan-500   text-white shadow-lg  p-3 rounded-lg">
                  <span className=" text-center "> Submit </span>
                </button>
      </form>
    </div>
  );
}
